"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import "./doctor-detail.css";
import Modal                       from "@/components/admin/Modal";
import { useToast }                from "@/components/admin/ToastProvider";
import { useDoctor }               from "@/features/doctors/hooks/useDoctors";
import { useDoctorAppointments }   from "@/features/appointments/hooks/useAppointments";
import { useServices }             from "@/features/services/hooks/useServices";
import { doctorsService }          from "@/features/doctors/services/doctorsService";
import { appointmentsService }     from "@/features/appointments/services/appointmentsService";
import DoctorStats                 from "@/features/admin/components/DoctorStats";
import { extractDate, extractTime, STATUS_OPTIONS } from "@/features/appointments/utils/appointmentUtils";
import { fmtAdmin }                from "@/utils/dateUtils";

export default function DoctorDetailPage() {
  const { doctorId } = useParams();
  const { pushToast } = useToast();

  const { doctor, loading, reload: reloadDoctor } = useDoctor(doctorId, pushToast);
  const { appointments, reload: reloadAppointments } = useDoctorAppointments(doctorId, pushToast);
  const { services, reload: reloadServices }         = useServices();

  const [tab, setTab]             = useState("basic");
  const [openEdit, setOpenEdit]   = useState(false);
  const [openAppt, setOpenAppt]   = useState(false);
  const [editingAppt, setEditingAppt] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [saving, setSaving]       = useState(false);

  useEffect(() => {
    if (!doctorId) return;
    Promise.all([reloadDoctor(), reloadAppointments(), reloadServices()]);
  }, [doctorId]);

  const filtered = useMemo(() =>
    appointments.filter(a => statusFilter === "All" || a.Status === statusFilter),
    [appointments, statusFilter]
  );

  const initials = doctor
    ? (doctor.Name ?? "").split(" ").map(w => w[0]).slice(0, 2).join("")
    : "?";

  // ── Derived appointment stats ──────────────────────────────────────
  const now = new Date();
  const totalAppts = appointments.length;
  const completedThisMonth = appointments.filter(a => {
    if (a.Status !== "Completed") return false;
    const d = new Date(a.StartAt);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;
  const upcomingThisWeek = appointments.filter(a => {
    if (a.Status !== "Confirmed") return false;
    const d = new Date(a.StartAt);
    const weekEnd = new Date(now);
    weekEnd.setDate(now.getDate() + 7);
    return d >= now && d <= weekEnd;
  }).length;

  // ── Handlers ──────────────────────────────────────────────────────
  async function handleSaveDoctor(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = {
      Name:       fd.get("name"),
      Occupation: fd.get("specialty"),
      Email:      fd.get("email"),
      Phone:      fd.get("phone"),
      Bio:        fd.get("bio"),
      Status:     doctor?.Status ?? "Active",
      Details:    [],
    };
    setSaving(true);
    try {
      await doctorsService.update(doctorId, body);
      pushToast({ type: "success", title: "Doctor updated" });
      setOpenEdit(false);
      await reloadDoctor();
    } catch {
      pushToast({ type: "error", title: "Save failed" });
    } finally {
      setSaving(false);
    }
  }

  function openCreateAppt() { setEditingAppt(null); setOpenAppt(true); }
  function openEditAppt(a)  { setEditingAppt(a);    setOpenAppt(true); }

  async function handleSaveAppt(e) {
    e.preventDefault();
    const fd        = new FormData(e.target);
    const date      = fd.get("date");
    const time      = fd.get("time");
    const startAt   = date && time ? new Date(`${date}T${time}`).toISOString() : null;
    const serviceId = Number(fd.get("serviceId")) || null;

    const body = {
      DoctorId:    Number(doctorId),
      DoctorName:  doctor?.Name ?? "",
      ServiceId:   serviceId,
      ServiceName: services.find(s => s.ServiceId === serviceId)?.Name ?? "",
      PatientName: fd.get("patientName"),
      Status:      fd.get("status"),
      StartAt:     startAt,
    };

    setSaving(true);
    try {
      if (editingAppt) {
        await appointmentsService.update(editingAppt.AppointmentId, body);
        pushToast({ type: "success", title: "Appointment updated" });
      } else {
        await appointmentsService.create(body);
        pushToast({ type: "success", title: "Appointment created" });
      }
      setOpenAppt(false);
      await reloadAppointments();
    } catch {
      pushToast({ type: "error", title: "Save failed" });
    } finally {
      setSaving(false);
    }
  }

  async function handleCompleteAppt(a) {
    try {
      await appointmentsService.updateStatus(a, "Completed");
      pushToast({ type: "success", title: "Marked as completed" });
      await reloadAppointments();
    } catch { pushToast({ type: "error", title: "Action failed" }); }
  }

  async function handleCancelAppt(a) {
    try {
      await appointmentsService.updateStatus(a, "Cancelled");
      pushToast({ type: "success", title: "Appointment cancelled" });
      await reloadAppointments();
    } catch { pushToast({ type: "error", title: "Action failed" }); }
  }

  if (loading) return <div className="doc"><div className="empty">Loading...</div></div>;
  if (!doctor) return <div className="doc"><div className="empty">Doctor not found.</div></div>;

  const editApptDate = extractDate(editingAppt?.StartAt);
  const editApptTime = extractTime(editingAppt?.StartAt);

  return (
    <div className="doc">
      {/* Header */}
      <div className="doc__top">
        <div className="doc__profile">
          <div className="doc__avatar" aria-hidden="true">{initials}</div>
          <div>
            <h1 className="doc__name">{doctor.Name}</h1>
            <div className="doc__meta">
              <span className={`pill ${doctor.Status === "Active" ? "pill--ok" : "pill--muted"}`}>{doctor.Status}</span>
              <span className="doc__sep">•</span>
              <span>{doctor.Occupation}</span>
            </div>
          </div>
        </div>
        <div className="doc__actions">
          <button className="btn btn--ghost" onClick={() => setOpenEdit(true)}>Edit doctor</button>
          <button className="btn btn--primary" onClick={openCreateAppt}>Add appointment</button>
        </div>
      </div>

      {/* Stats */}
      <DoctorStats
        totalAppts={totalAppts}
        upcomingThisWeek={upcomingThisWeek}
        completedThisMonth={completedThisMonth}
      />

      {/* Tabs */}
      <div className="tabs">
        <button className={`tab ${tab === "basic" ? "is-active" : ""}`} onClick={() => setTab("basic")}>Basic Information</button>
        <button className={`tab ${tab === "appts" ? "is-active" : ""}`} onClick={() => setTab("appts")}>Client Appointments</button>
      </div>

      {/* Basic info tab */}
      {tab === "basic" && (
        <section className="card">
          <div className="card__title">Doctor profile</div>
          <div className="kv">
            <div><div className="k">Email</div><div className="v">{doctor.Email}</div></div>
            <div><div className="k">Phone</div><div className="v">{doctor.Phone}</div></div>
            <div><div className="k">Location</div><div className="v">{doctor.Location ?? "—"}</div></div>
            <div><div className="k">Experience</div><div className="v">{doctor.Experience ? `${doctor.Experience} years` : "—"}</div></div>
            <div className="kv--full"><div className="k">Bio</div><div className="v">{doctor.Bio || "—"}</div></div>
          </div>
        </section>
      )}

      {/* Appointments tab */}
      {tab === "appts" && (
        <section className="card">
          <div className="card__headRow">
            <div className="card__title">Appointments for this doctor</div>
            <div className="row">
              <select className="select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option>All</option>
                {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
              </select>
              <button className="btn btn--primary" onClick={openCreateAppt}>Add appointment</button>
            </div>
          </div>

          <div className="tableWrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Date &amp; Time</th><th>Client</th><th>Service</th>
                  <th>Status</th><th style={{ width: 240 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(a => (
                  <tr key={a.AppointmentId}>
                    <td>{fmtAdmin(a.StartAt)}</td>
                    <td>{a.PatientName}</td>
                    <td>{a.ServiceName}</td>
                    <td>
                      <span className={`pill ${a.Status === "Confirmed" || a.Status === "Completed" ? "pill--ok" : "pill--muted"}`}>
                        {a.Status}
                      </span>
                    </td>
                    <td className="actions">
                      <button className="btn btn--ghost" onClick={() => openEditAppt(a)}>Edit</button>
                      <button className="btn btn--ghost" onClick={() => handleCancelAppt(a)}>Cancel</button>
                      <button className="btn btn--ghost" onClick={() => handleCompleteAppt(a)}>Complete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && <div className="empty">No appointments found.</div>}
          </div>
        </section>
      )}

      {/* Edit doctor modal */}
      <Modal open={openEdit} title="Edit Doctor" onClose={() => setOpenEdit(false)}>
        <form key={doctor.DoctorId} className="form" onSubmit={handleSaveDoctor}>
          <div className="grid2">
            <div className="field">
              <label>Full name *</label>
              <input className="input" name="name" defaultValue={doctor.Name} required />
            </div>
            <div className="field">
              <label>Specialty *</label>
              <input className="input" name="specialty" defaultValue={doctor.Occupation} required />
            </div>
          </div>
          <div className="grid2">
            <div className="field">
              <label>Email *</label>
              <input className="input" name="email" type="email" defaultValue={doctor.Email} required />
            </div>
            <div className="field">
              <label>Phone *</label>
              <input className="input" name="phone" defaultValue={doctor.Phone} required />
            </div>
          </div>
          <div className="field">
            <label>Bio</label>
            <textarea className="textarea" name="bio" defaultValue={doctor.Bio ?? ""} />
          </div>
          <div className="form__actions">
            <button type="button" className="btn btn--ghost" onClick={() => setOpenEdit(false)}>Cancel</button>
            <button type="submit" className="btn btn--primary" disabled={saving}>{saving ? "Saving..." : "Save"}</button>
          </div>
        </form>
      </Modal>

      {/* Add/edit appointment modal */}
      <Modal open={openAppt} title={editingAppt ? "Edit Appointment" : "Add Appointment"} onClose={() => setOpenAppt(false)}>
        <form key={editingAppt?.AppointmentId ?? "new-appt"} className="form" onSubmit={handleSaveAppt}>
          <div className="field">
            <label>Doctor</label>
            <input className="input" value={doctor.Name} disabled />
          </div>
          <div className="grid2">
            <div className="field">
              <label>Client name *</label>
              <input className="input" name="patientName" defaultValue={editingAppt?.PatientName ?? ""} required />
            </div>
            <div className="field">
              <label>Service *</label>
              <select className="select" name="serviceId" required defaultValue={editingAppt?.ServiceId ?? ""}>
                <option value="" disabled>Choose service</option>
                {services.map(s => <option key={s.ServiceId} value={s.ServiceId}>{s.Name}</option>)}
              </select>
            </div>
          </div>
          <div className="grid2">
            <div className="field">
              <label>Date *</label>
              <input className="input" name="date" type="date" defaultValue={editApptDate} required />
            </div>
            <div className="field">
              <label>Time *</label>
              <input className="input" name="time" type="time" defaultValue={editApptTime} required />
            </div>
          </div>
          <div className="field">
            <label>Status</label>
            <select className="select" name="status" defaultValue={editingAppt?.Status ?? "Confirmed"}>
              {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="form__actions">
            <button type="button" className="btn btn--ghost" onClick={() => setOpenAppt(false)}>Cancel</button>
            <button type="submit" className="btn btn--primary" disabled={saving}>{saving ? "Saving..." : "Save"}</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
