"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import "./doctors.css";
import Modal from "@/components/admin/Modal";
import { useToast } from "@/components/admin/ToastProvider";
import Link from "next/link";

const EMPTY_FORM = {
  Name: "", Email: "", Phone: "",
  Occupation: "", Bio: "", Location: "",
  Experience: "", Status: "active", Image: "",
};

export default function AdminDoctorsPage() {
  const { pushToast } = useToast();
  const [doctors, setDoctors] = useState([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  function loadDoctors() {
    const id = toast.loading("Loading...", { id: "page-load" });
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors`)
      .then((res) => res.ok ? res.json() : [])
      .then((data) => { setDoctors(data); toast.dismiss(id); })
      .catch(() => toast.dismiss(id));
  }

  useEffect(() => { loadDoctors(); }, []);

  const rows = useMemo(() => {
    return doctors.filter((d) => {
      const okQuery =
        (d.Name ?? "").toLowerCase().includes(query.toLowerCase()) ||
        (d.Occupation ?? "").toLowerCase().includes(query.toLowerCase()) ||
        (d.Email ?? "").toLowerCase().includes(query.toLowerCase());
      const okStatus = statusFilter === "All" || (d.Status ?? "").toLowerCase() === statusFilter.toLowerCase();
      return okQuery && okStatus;
    });
  }, [doctors, query, statusFilter]);

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setOpen(true);
  }

  function openEdit(d) {
    setEditing(d);
    setForm({
      Name: d.Name ?? "",
      Email: d.Email ?? "",
      Phone: d.Phone ?? "",
      Occupation: d.Occupation ?? "",
      Bio: d.Bio ?? "",
      Location: d.Location ?? "",
      Experience: d.Experience ?? "",
      Status: d.Status ?? "active",
      Image: d.Image ?? "",
    });
    setOpen(true);
  }

  function handleField(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    const payload = { ...form, Experience: form.Experience ? parseInt(form.Experience) : null };
    const url = editing
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/doctors/${editing.DoctorId}`
      : `${process.env.NEXT_PUBLIC_API_URL}/api/doctors`;
    const method = editing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setOpen(false);
      pushToast({ type: "success", title: editing ? "Doctor updated" : "Doctor created" });
      loadDoctors();
    } catch {
      pushToast({ type: "error", title: "Something went wrong", message: "Please try again." });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(d) {
    if (!confirm(`Delete ${d.Name}? This cannot be undone.`)) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors/${d.DoctorId}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      pushToast({ type: "success", title: "Doctor deleted" });
      loadDoctors();
    } catch {
      pushToast({ type: "error", title: "Delete failed", message: "Please try again." });
    }
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
        <select className="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>active</option>
          <option>inactive</option>
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
              <th style={{ width: 220 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => (
              <tr key={d.DoctorId}>
                <td>
                  {d.Image
                    ? <img src={d.Image} alt={d.Name} className="avatar" style={{ objectFit: "cover" }} />
                    : <div className="avatar" aria-hidden="true">{(d.Name ?? "?").split(" ").slice(-1)[0].slice(0, 1)}</div>
                  }
                </td>
                <td>{d.Name}</td>
                <td>{d.Occupation}</td>
                <td>{d.Email}</td>
                <td>{d.Phone}</td>
                <td>
                  <span className={`pill ${d.Status?.toLowerCase() === "active" ? "pill--ok" : "pill--muted"}`}>
                    {d.Status}
                  </span>
                </td>
                <td className="actions">
                  <Link className="btn btn--ghost" href={`/admin/doctors/${d.DoctorId}`}>View</Link>
                  <button className="btn btn--ghost" onClick={() => openEdit(d)}>Edit</button>
                  <button className="btn btn--danger" onClick={() => handleDelete(d)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {rows.length === 0 && (
          <div className="empty">No results. Try a different search.</div>
        )}
      </div>

      <Modal
        open={open}
        title={editing ? "Edit Doctor" : "Add New Doctor"}
        onClose={() => setOpen(false)}
      >
        <form className="form" onSubmit={handleSave}>
          <div className="grid2">
            <div className="field">
              <label>Full name *</label>
              <input className="input" name="Name" value={form.Name} onChange={handleField} required />
            </div>
            <div className="field">
              <label>Specialty *</label>
              <input className="input" name="Occupation" value={form.Occupation} onChange={handleField} required />
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Email *</label>
              <input className="input" type="email" name="Email" value={form.Email} onChange={handleField} required />
            </div>
            <div className="field">
              <label>Phone</label>
              <input className="input" name="Phone" value={form.Phone} onChange={handleField} />
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Location</label>
              <input className="input" name="Location" value={form.Location} onChange={handleField} />
            </div>
            <div className="field">
              <label>Experience (years)</label>
              <input className="input" type="number" min="0" name="Experience" value={form.Experience} onChange={handleField} />
            </div>
          </div>

          <div className="field">
            <label>Bio</label>
            <textarea className="input" name="Bio" value={form.Bio} onChange={handleField} rows={3} />
          </div>

          <div className="grid2">
            <div className="field">
              <label>Image URL</label>
              <input className="input" name="Image" value={form.Image} onChange={handleField} placeholder="https://..." />
            </div>
            <div className="field">
              <label>Status</label>
              <select className="select" name="Status" value={form.Status} onChange={handleField}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
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
