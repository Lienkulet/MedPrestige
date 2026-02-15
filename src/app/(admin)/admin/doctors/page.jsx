"use client";

import { useMemo, useState } from "react";
import "./doctors.css";
import Modal from "@/components/admin/Modal";
import { useToast } from "@/components/admin/ToastProvider";
import Link from "next/link";

const MOCK = [
  { id: "d1", name: "Dr. Elena Popescu", specialty: "General", email: "elena@clinic.com", phone: "+40 700 111 222", status: "Active", total: 42 },
  { id: "d2", name: "Dr. Andrei Ionescu", specialty: "Dermatology", email: "andrei@clinic.com", phone: "+40 700 333 444", status: "Active", total: 38 },
  { id: "d3", name: "Dr. Maria Stoica", specialty: "Dental", email: "maria@clinic.com", phone: "+40 700 555 666", status: "Inactive", total: 31 },
];

export default function AdminDoctorsPage() {
  const { pushToast } = useToast();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const rows = useMemo(() => {
    return MOCK.filter((d) => {
      const okQuery =
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.specialty.toLowerCase().includes(query.toLowerCase()) ||
        d.email.toLowerCase().includes(query.toLowerCase());

      const okStatus = status === "All" ? true : d.status === status;
      return okQuery && okStatus;
    });
  }, [query, status]);

  function openCreate() {
    setEditing(null);
    setOpen(true);
  }

  function openEdit(d) {
    setEditing(d);
    setOpen(true);
  }

  function fakeSave(e) {
    e.preventDefault();
    setOpen(false);
    pushToast({ type: "success", title: editing ? "Doctor updated" : "Doctor created" });
  }

  function fakeDelete() {
    pushToast({ type: "info", title: "UI only", message: "Delete will be wired to API later." });
  }

  return (
    <div className="page">
      <div className="page__header">
        <div>
          <h1 className="page__title">Doctors</h1>
          <p className="page__subtitle">Manage doctor profiles, status, and appointments.</p>
        </div>
        <button className="btn btn--primary" onClick={openCreate}>Add New Doctor</button>
      </div>

      <div className="toolbar">
        <input
          className="input"
          placeholder="Search doctors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="tableCard">
        <table className="table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Doctor</th>
              <th>Specialty</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Total Appointments</th>
              <th style={{ width: 220 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => (
              <tr key={d.id}>
                <td>
                  <div className="avatar" aria-hidden="true">
                    {d.name.split(" ").slice(1, 2).join("").slice(0, 1)}
                  </div>
                </td>
                <td>{d.name}</td>
                <td>{d.specialty}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <span className={`pill ${d.status === "Active" ? "pill--ok" : "pill--muted"}`}>
                    {d.status}
                  </span>
                </td>
                <td>{d.total}</td>
                <td className="actions">
                  <Link className="btn btn--ghost" href={`/admin/doctors/${d.id}`}>View</Link>
                  <button className="btn btn--ghost" onClick={() => openEdit(d)}>Edit</button>
                  <button className="btn btn--danger" onClick={fakeDelete}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {rows.length === 0 && (
          <div className="empty">
            No results. Try a different search.
          </div>
        )}
      </div>

      <Modal
        open={open}
        title={editing ? "Edit Doctor" : "Add New Doctor"}
        onClose={() => setOpen(false)}
      >
        <form className="form" onSubmit={fakeSave}>
          <div className="grid2">
            <div className="field">
              <label>Full name *</label>
              <input className="input" defaultValue={editing?.name ?? ""} required />
            </div>
            <div className="field">
              <label>Specialty *</label>
              <input className="input" defaultValue={editing?.specialty ?? ""} required />
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Email *</label>
              <input className="input" type="email" defaultValue={editing?.email ?? ""} required />
            </div>
            <div className="field">
              <label>Phone *</label>
              <input className="input" defaultValue={editing?.phone ?? ""} required />
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Qualifications</label>
              <input className="input" placeholder="e.g. MD, PhD" />
            </div>
            <div className="field">
              <label>Status</label>
              <select className="select" defaultValue={editing?.status ?? "Active"}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label>Photo upload</label>
            <input className="input" type="file" accept="image/*" />
          </div>

          <div className="field">
            <label>Working hours</label>
            <div className="hint">UI only — later store as structured schedule per day.</div>
            <input className="input" placeholder="Mon–Fri 09:00–17:00" />
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
