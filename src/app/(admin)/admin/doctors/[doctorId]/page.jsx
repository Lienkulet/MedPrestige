"use client";

import { useMemo, useState } from "react";
import "./doctor-detail.css";
import Modal from "@/components/admin/Modal";
import { useToast } from "@/components/admin/ToastProvider";

const MOCK_DOCTOR = {
  id: "d1",
  name: "Dr. Elena Popescu",
  specialty: "General",
  email: "elena@clinic.com",
  phone: "+40 700 111 222",
  status: "Active",
  qualifications: "MD",
  bio: "Focused on patient-centered care and preventive medicine.",
};

const MOCK_APPTS = [
  { id: "a1", dt: "2026-02-15 10:00", client: "Alex M.", service: "Consultation", status: "Confirmed", notes: "First visit" },
  { id: "a2", dt: "2026-02-15 13:00", client: "Dan P.", service: "Consultation", status: "Completed", notes: "" },
  { id: "a3", dt: "2026-02-16 11:00", client: "Sonia B.", service: "Consultation", status: "Cancelled", notes: "Reschedule" },
];

export default function DoctorDetailPage() {
  const { pushToast } = useToast();
  const [tab, setTab] = useState("basic");
  const [openEdit, setOpenEdit] = useState(false);
  const [openAppt, setOpenAppt] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = useMemo(() => {
    return MOCK_APPTS.filter((a) => (statusFilter === "All" ? true : a.status === statusFilter));
  }, [statusFilter]);

  function saveDoctor(e) {
    e.preventDefault();
    setOpenEdit(false);
    pushToast({ type: "success", title: "Doctor updated" });
  }

  function createAppointment(e) {
    e.preventDefault();
    setOpenAppt(false);
    pushToast({ type: "success", title: "Appointment created", message: "UI only for now." });
  }

  return (
    <div className="doc">
      <div className="doc__top">
        <div className="doc__profile">
          <div className="doc__avatar" aria-hidden="true">EP</div>
          <div>
            <h1 className="doc__name">{MOCK_DOCTOR.name}</h1>
            <div className="doc__meta">
              <span className="pill pill--ok">{MOCK_DOCTOR.status}</span>
              <span className="doc__sep">•</span>
              <span>{MOCK_DOCTOR.specialty}</span>
            </div>
          </div>
        </div>

        <div className="doc__actions">
          <button className="btn btn--ghost" onClick={() => setOpenEdit(true)}>Edit doctor</button>
          <button className="btn btn--primary" onClick={() => setOpenAppt(true)}>Add appointment</button>
        </div>
      </div>

      <div className="doc__stats">
        <div className="stat">
          <div className="stat__label">Total appointments</div>
          <div className="stat__value">42</div>
        </div>
        <div className="stat">
          <div className="stat__label">Upcoming this week</div>
          <div className="stat__value">8</div>
        </div>
        <div className="stat">
          <div className="stat__label">Completed this month</div>
          <div className="stat__value">19</div>
        </div>
      </div>

      <div className="tabs">
        <button className={`tab ${tab === "basic" ? "is-active" : ""}`} onClick={() => setTab("basic")}>
          Basic Information
        </button>
        <button className={`tab ${tab === "appts" ? "is-active" : ""}`} onClick={() => setTab("appts")}>
          Client Appointments
        </button>
      </div>

      {tab === "basic" && (
        <section className="card">
          <div className="card__title">Doctor profile</div>
          <div className="kv">
            <div><div className="k">Email</div><div className="v">{MOCK_DOCTOR.email}</div></div>
            <div><div className="k">Phone</div><div className="v">{MOCK_DOCTOR.phone}</div></div>
            <div><div className="k">Qualifications</div><div className="v">{MOCK_DOCTOR.qualifications}</div></div>
            <div className="kv--full"><div className="k">Bio</div><div className="v">{MOCK_DOCTOR.bio}</div></div>
          </div>
        </section>
      )}

      {tab === "appts" && (
        <section className="card">
          <div className="card__headRow">
            <div className="card__title">Appointments for this doctor</div>
            <div className="row">
              <select className="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option>All</option>
                <option>Confirmed</option>
                <option>Completed</option>
                <option>Cancelled</option>
                <option>No-show</option>
              </select>
              <button className="btn btn--primary" onClick={() => setOpenAppt(true)}>Add appointment</button>
            </div>
          </div>

          <div className="tableWrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Client</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Notes</th>
                  <th style={{ width: 220 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((a) => (
                  <tr key={a.id}>
                    <td>{a.dt}</td>
                    <td>{a.client}</td>
                    <td>{a.service}</td>
                    <td>{a.status}</td>
                    <td>{a.notes || "-"}</td>
                    <td className="actions">
                      <button className="btn btn--ghost" onClick={() => pushToast({ type: "info", title: "UI only" })}>Edit</button>
                      <button className="btn btn--ghost" onClick={() => pushToast({ type: "info", title: "UI only" })}>Cancel</button>
                      <button className="btn btn--ghost" onClick={() => pushToast({ type: "success", title: "Marked completed (UI)" })}>Complete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <Modal open={openEdit} title="Edit Doctor" onClose={() => setOpenEdit(false)}>
        <form className="form" onSubmit={saveDoctor}>
          <div className="grid2">
            <div className="field">
              <label>Full name *</label>
              <input className="input" defaultValue={MOCK_DOCTOR.name} required />
            </div>
            <div className="field">
              <label>Specialty *</label>
              <input className="input" defaultValue={MOCK_DOCTOR.specialty} required />
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Email *</label>
              <input className="input" type="email" defaultValue={MOCK_DOCTOR.email} required />
            </div>
            <div className="field">
              <label>Phone *</label>
              <input className="input" defaultValue={MOCK_DOCTOR.phone} required />
            </div>
          </div>

          <div className="field">
            <label>Bio</label>
            <textarea className="textarea" defaultValue={MOCK_DOCTOR.bio} />
          </div>

          <div className="form__actions">
            <button type="button" className="btn btn--ghost" onClick={() => setOpenEdit(false)}>Cancel</button>
            <button type="submit" className="btn btn--primary">Save</button>
          </div>
        </form>
      </Modal>

      <Modal open={openAppt} title="Add Appointment" onClose={() => setOpenAppt(false)}>
        <form className="form" onSubmit={createAppointment}>
          <div className="field">
            <label>Doctor</label>
            <input className="input" value={MOCK_DOCTOR.name} disabled />
          </div>

          <div className="grid2">
            <div className="field">
              <label>Client name *</label>
              <input className="input" required />
            </div>
            <div className="field">
              <label>Service *</label>
              <select className="select" required defaultValue="">
                <option value="" disabled>Choose service</option>
                <option>Consultation</option>
                <option>Dermatology</option>
                <option>Dental</option>
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
            <label>Status</label>
            <select className="select" defaultValue="Confirmed">
              <option>Confirmed</option>
              <option>Completed</option>
              <option>Cancelled</option>
              <option>No-show</option>
            </select>
          </div>

          <div className="field">
            <label>Notes</label>
            <textarea className="textarea" placeholder="Optional notes..." />
          </div>

          <div className="form__actions">
            <button type="button" className="btn btn--ghost" onClick={() => setOpenAppt(false)}>Cancel</button>
            <button type="submit" className="btn btn--primary">Create</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
