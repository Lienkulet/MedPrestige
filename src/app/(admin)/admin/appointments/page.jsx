"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./appointments.css";
import Modal from "@/components/admin/Modal";
import { useToast } from "@/components/admin/ToastProvider";

const EMPTY_FORM = {
  DoctorId: "", ServiceId: "", PatientId: "",
  Date: "", Time: "", Status: "confirmed",
};

export default function AdminAppointmentsPage() {
  const { pushToast } = useToast();
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [view, setView] = useState("list");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [doctorFilter, setDoctorFilter] = useState("All");

  function loadAppointments() {
    const id = toast.loading("Loading...", { id: "page-load" });
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments`)
      .then((res) => res.ok ? res.json() : [])
      .then((data) => { setAppointments(data); toast.dismiss(id); })
      .catch(() => toast.dismiss(id));
  }

  useEffect(() => {
    loadAppointments();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors`)
      .then((res) => res.ok ? res.json() : [])
      .then(setDoctors);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
      .then((res) => res.ok ? res.json() : [])
      .then(setServices);
  }, []);

  function handleField(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setOpen(true);
  }

  function openEdit(a) {
    setEditing(a);
    const start = a.StartAt ? new Date(a.StartAt) : null;
    setForm({
      DoctorId: a.DoctorId ?? "",
      ServiceId: a.ServiceId ?? "",
      PatientId: a.PatientId ?? "",
      Date: start ? start.toISOString().split("T")[0] : "",
      Time: start ? start.toTimeString().slice(0, 5) : "",
      Status: a.Status ?? "confirmed",
    });
    setOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    const startAt = form.Date && form.Time ? new Date(`${form.Date}T${form.Time}`) : null;
    const payload = {
      DoctorId: form.DoctorId ? parseInt(form.DoctorId) : null,
      ServiceId: form.ServiceId ? parseInt(form.ServiceId) : null,
      PatientId: form.PatientId ? parseInt(form.PatientId) : null,
      StartAt: startAt,
      EndAt: null,
      Status: form.Status,
    };
    const url = editing
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/appointments/${editing.AppointmentId}`
      : `${process.env.NEXT_PUBLIC_API_URL}/api/appointments`;
    const method = editing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setOpen(false);
      pushToast({ type: "success", title: editing ? "Appointment updated" : "Appointment created" });
      loadAppointments();
    } catch {
      pushToast({ type: "error", title: "Something went wrong" });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(a) {
    if (!confirm("Delete this appointment?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments/${a.AppointmentId}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      pushToast({ type: "success", title: "Appointment deleted" });
      loadAppointments();
    } catch {
      pushToast({ type: "error", title: "Delete failed" });
    }
  }

  const filtered = appointments.filter((a) => {
    const okStatus = statusFilter === "All" || (a.Status ?? "").toLowerCase() === statusFilter.toLowerCase();
    const okDoctor = doctorFilter === "All" || String(a.DoctorId) === doctorFilter;
    return okStatus && okDoctor;
  });

  function formatDate(dt) {
    if (!dt) return "—";
    return new Date(dt).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
  }

  return (
    <div className="page">
      <div className="page__header">
        <div>
          <h1 className="page__title">Appointments</h1>
          <p className="page__subtitle">View and manage all appointments.</p>
        </div>
        <div className="row">
          <button className={`btn ${view === "list" ? "btn--primary" : "btn--ghost"}`} onClick={() => setView("list")}>List</button>
          <button className="btn btn--primary" onClick={openCreate}>Create</button>
        </div>
      </div>

      <div className="filters">
        <select className="select" value={doctorFilter} onChange={(e) => setDoctorFilter(e.target.value)}>
          <option value="All">All Doctors</option>
          {doctors.map((d) => (
            <option key={d.DoctorId} value={String(d.DoctorId)}>{d.Name}</option>
          ))}
        </select>
        <select className="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
          <option value="no-show">No-show</option>
        </select>
      </div>

      <div className="tableCard">
        <table className="table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Patient ID</th>
              <th>Doctor</th>
              <th>Service</th>
              <th>Status</th>
              <th style={{ width: 200 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.AppointmentId}>
                <td>{formatDate(a.StartAt)}</td>
                <td>{a.PatientId ?? "—"}</td>
                <td>{a.DoctorName ?? "—"}</td>
                <td>{a.ServiceName ?? "—"}</td>
                <td>
                  <span className={`pill ${a.Status === "confirmed" ? "pill--ok" : a.Status === "completed" ? "pill--info" : "pill--muted"}`}>
                    {a.Status}
                  </span>
                </td>
                <td className="actions">
                  <button className="btn btn--ghost" onClick={() => openEdit(a)}>Edit</button>
                  <button className="btn btn--danger" onClick={() => handleDelete(a)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div className="empty">No appointments found.</div>}
      </div>

      <Modal open={open} title={editing ? "Edit Appointment" : "Create Appointment"} onClose={() => setOpen(false)}>
        <form className="form" onSubmit={handleSave}>
          <div className="grid2">
            <div className="field">
              <label>Doctor *</label>
              <select className="select" name="DoctorId" value={form.DoctorId} onChange={handleField} required>
                <option value="" disabled>Choose doctor</option>
                {doctors.map((d) => (
                  <option key={d.DoctorId} value={d.DoctorId}>{d.Name}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Service *</label>
              <select className="select" name="ServiceId" value={form.ServiceId} onChange={handleField} required>
                <option value="" disabled>Choose service</option>
                {services.map((s) => (
                  <option key={s.ServiceId} value={s.ServiceId}>{s.Name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Patient ID *</label>
              <input className="input" type="number" name="PatientId" value={form.PatientId} onChange={handleField} required />
            </div>
            <div className="field">
              <label>Status</label>
              <select className="select" name="Status" value={form.Status} onChange={handleField}>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
                <option value="no-show">No-show</option>
              </select>
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Date *</label>
              <input className="input" type="date" name="Date" value={form.Date} onChange={handleField} required />
            </div>
            <div className="field">
              <label>Time *</label>
              <input className="input" type="time" name="Time" value={form.Time} onChange={handleField} required />
            </div>
          </div>

          <div className="form__actions">
            <button type="button" className="btn btn--ghost" onClick={() => setOpen(false)}>Cancel</button>
            <button type="submit" className="btn btn--primary" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
