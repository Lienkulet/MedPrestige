"use client";

import { useEffect, useState } from "react";
import "./appointments.css";
import Modal                       from "@/components/admin/Modal";
import { useToast }                from "@/components/admin/ToastProvider";
import { useAppointments }         from "@/features/appointments/hooks/useAppointments";
import { useDoctors }              from "@/features/doctors/hooks/useDoctors";
import { useServices }             from "@/features/services/hooks/useServices";
import { appointmentsService }     from "@/features/appointments/services/appointmentsService";
import AppointmentTable            from "@/features/appointments/components/AppointmentTable";
import AppointmentFilters          from "@/features/appointments/components/AppointmentFilters";
import AppointmentForm             from "@/features/appointments/components/AppointmentForm";

export default function AdminAppointmentsPage() {
  const { pushToast } = useToast();

  const { appointments, loading, reload: reloadAppointments } = useAppointments(pushToast);
  const { doctors,      reload: reloadDoctors }               = useDoctors();
  const { services,     reload: reloadServices }              = useServices();

  const [view, setView]         = useState("list");
  const [open, setOpen]         = useState(false);
  const [editing, setEditing]   = useState(null);
  const [saving, setSaving]     = useState(false);

  const [filterDoctor,  setFilterDoctor]  = useState("");
  const [filterService, setFilterService] = useState("");
  const [filterStatus,  setFilterStatus]  = useState("");

  useEffect(() => {
    Promise.all([reloadAppointments(), reloadDoctors(), reloadServices()]);
  }, []);

  const filtered = appointments.filter(a => {
    if (filterDoctor  && String(a.DoctorId)  !== filterDoctor)  return false;
    if (filterService && String(a.ServiceId) !== filterService) return false;
    if (filterStatus  && a.Status            !== filterStatus)  return false;
    return true;
  });

  function openCreate() { setEditing(null); setOpen(true); }
  function openEdit(a)  { setEditing(a);    setOpen(true); }

  async function handleSave(e) {
    e.preventDefault();
    const fd      = new FormData(e.target);
    const date    = fd.get("date");
    const time    = fd.get("time");
    const startAt = date && time ? new Date(`${date}T${time}`).toISOString() : null;

    const doctorId  = Number(fd.get("doctorId"))  || null;
    const serviceId = Number(fd.get("serviceId")) || null;

    const body = {
      PatientName:  fd.get("patientName"),
      DoctorId:     doctorId,
      ServiceId:    serviceId,
      DoctorName:   doctors.find(d => d.DoctorId  === doctorId)?.Name  ?? "",
      ServiceName:  services.find(s => s.ServiceId === serviceId)?.Name ?? "",
      Status:       fd.get("status"),
      StartAt:      startAt,
    };

    setSaving(true);
    try {
      if (editing) {
        await appointmentsService.update(editing.AppointmentId, body);
        pushToast({ type: "success", title: "Appointment updated" });
      } else {
        await appointmentsService.create(body);
        pushToast({ type: "success", title: "Appointment created" });
      }
      setOpen(false);
      await reloadAppointments();
    } catch {
      pushToast({ type: "error", title: "Save failed" });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(a) {
    if (!confirm("Delete this appointment? This cannot be undone.")) return;
    try {
      await appointmentsService.remove(a.AppointmentId);
      pushToast({ type: "success", title: "Appointment deleted" });
      await reloadAppointments();
    } catch {
      pushToast({ type: "error", title: "Delete failed" });
    }
  }

  async function handleCancel(a) {
    try {
      await appointmentsService.updateStatus(a, "Cancelled");
      pushToast({ type: "success", title: "Appointment cancelled" });
      await reloadAppointments();
    } catch {
      pushToast({ type: "error", title: "Action failed" });
    }
  }

  return (
    <div className="page">
      <div className="page__header">
        <div>
          <h1 className="page__title">Appointments</h1>
          <p className="page__subtitle">View and manage all appointments.</p>
        </div>
        <div className="row">
          <button className={`btn ${view === "calendar" ? "btn--primary" : "btn--ghost"}`} onClick={() => setView("calendar")}>Calendar</button>
          <button className={`btn ${view === "list"     ? "btn--primary" : "btn--ghost"}`} onClick={() => setView("list")}>List</button>
          <button className="btn btn--primary" onClick={openCreate}>Create</button>
        </div>
      </div>

      <AppointmentFilters
        doctors={doctors}
        services={services}
        filterDoctor={filterDoctor}
        filterService={filterService}
        filterStatus={filterStatus}
        onDoctorChange={setFilterDoctor}
        onServiceChange={setFilterService}
        onStatusChange={setFilterStatus}
      />

      {view === "calendar" ? (
        <div className="card">
          <div className="card__title">Calendar (UI placeholder)</div>
          <div className="calendar-placeholder">Calendar UI will go here later (month/week/day).</div>
        </div>
      ) : (
        <div className="tableCard">
          <AppointmentTable
            appointments={filtered}
            loading={loading}
            onEdit={openEdit}
            onCancel={handleCancel}
            onDelete={handleDelete}
          />
        </div>
      )}

      <Modal open={open} title={editing ? "Edit Appointment" : "Create Appointment"} onClose={() => setOpen(false)}>
        <AppointmentForm
          editing={editing}
          doctors={doctors}
          services={services}
          saving={saving}
          onClose={() => setOpen(false)}
          onSubmit={handleSave}
        />
      </Modal>
    </div>
  );
}
