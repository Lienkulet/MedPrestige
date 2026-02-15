"use client";

import { useState } from "react";
import "./appointments.css";
import Modal from "@/components/admin/Modal";
import { useToast } from "@/components/admin/ToastProvider";

export default function AdminAppointmentsPage() {
  const { pushToast } = useToast();
  const [view, setView] = useState("calendar");
  const [open, setOpen] = useState(false);

  function save(e) {
    e.preventDefault();
    setOpen(false);
    pushToast({ type: "success", title: "Appointment saved" });
  }

  return (
    <div className="page">
      <div className="page__header">
        <div>
          <h1 className="page__title">Appointments</h1>
          <p className="page__subtitle">View and manage all appointments.</p>
        </div>

        <div className="row">
          <button className="btn btn--ghost" onClick={() => setView("calendar")}>Calendar</button>
          <button className="btn btn--ghost" onClick={() => setView("list")}>List</button>
          <button className="btn btn--primary" onClick={() => setOpen(true)}>Create</button>
        </div>
      </div>

      <div className="filters">
        <select className="select">
          <option>All Doctors</option>
          <option>Dr. Elena</option>
          <option>Dr. Andrei</option>
        </select>
        <select className="select">
          <option>All Services</option>
          <option>Consultation</option>
          <option>Dermatology</option>
        </select>
        <select className="select">
          <option>All Status</option>
          <option>Confirmed</option>
          <option>Completed</option>
          <option>Cancelled</option>
          <option>No-show</option>
        </select>
        <input className="input" type="date" />
        <input className="input" type="date" />
      </div>

      {view === "calendar" ? (
        <div className="card">
          <div className="card__title">Calendar (UI placeholder)</div>
          <div className="calendar-placeholder">
            Calendar UI will go here later (month/week/day).
          </div>
        </div>
      ) : (
        <div className="tableCard">
          <table className="table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Client</th>
                <th>Doctor</th>
                <th>Service</th>
                <th>Status</th>
                <th style={{ width: 220 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2026-02-15 10:00", "Alex M.", "Dr. Elena", "Consultation", "Confirmed"],
                ["2026-02-15 13:00", "Dan P.", "Dr. Maria", "Dental", "Completed"],
              ].map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => <td key={j}>{c}</td>)}
                  <td className="actions">
                    <button className="btn btn--ghost" onClick={() => setOpen(true)}>Edit</button>
                    <button className="btn btn--ghost" onClick={() => pushToast({ type: "info", title: "UI only" })}>Cancel</button>
                    <button className="btn btn--danger" onClick={() => pushToast({ type: "info", title: "UI only" })}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal open={open} title="Create / Edit Appointment" onClose={() => setOpen(false)}>
        <form className="form" onSubmit={save}>
          <div className="grid2">
            <div className="field">
              <label>Doctor *</label>
              <select className="select" required defaultValue="">
                <option value="" disabled>Choose doctor</option>
                <option>Dr. Elena</option>
                <option>Dr. Andrei</option>
              </select>
            </div>
            <div className="field">
              <label>Service *</label>
              <select className="select" required defaultValue="">
                <option value="" disabled>Choose service</option>
                <option>Consultation</option>
                <option>Dermatology</option>
              </select>
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Client name *</label>
              <input className="input" required />
            </div>
            <div className="field">
              <label>Status</label>
              <select className="select" defaultValue="Confirmed">
                <option>Confirmed</option>
                <option>Completed</option>
                <option>Cancelled</option>
                <option>No-show</option>
              </select>
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Date *</label>
              <input className="input" type="date" required />
            </div>
            <div className="field">
              <label>Time *</label>
              <input className="input" type="time" required />
            </div>
          </div>

          <div className="field">
            <label>Notes</label>
            <textarea className="textarea" />
          </div>

          <div className="form__actions">
            <button type="button" className="btn btn--ghost" onClick={() => setOpen(false)}>Cancel</button>
            <button type="submit" className="btn btn--primary">Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
