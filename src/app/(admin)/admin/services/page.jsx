"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./services.css";
import Modal from "@/components/admin/Modal";
import { useToast } from "@/components/admin/ToastProvider";

const EMPTY_FORM = {
  Name: "", Description: "", Duration: "", Price: "", Image: "", Status: "active",
};

export default function AdminServicesPage() {
  const { pushToast } = useToast();
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  function loadServices() {
    const id = toast.loading("Loading...", { id: "page-load" });
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
      .then((res) => res.ok ? res.json() : [])
      .then((data) => { setServices(data); toast.dismiss(id); })
      .catch(() => toast.dismiss(id));
  }

  useEffect(() => { loadServices(); }, []);

  function handleField(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setOpen(true);
  }

  function openEdit(s) {
    setEditing(s);
    setForm({
      Name: s.Name ?? "",
      Description: s.Description ?? "",
      Duration: s.Duration ?? "",
      Price: s.Price ?? "",
      Image: s.Image ?? "",
      Status: s.Status ?? "active",
    });
    setOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      Duration: form.Duration ? parseInt(form.Duration) : null,
      Price: form.Price ? parseFloat(form.Price) : null,
    };
    const url = editing
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/services/${editing.ServiceId}`
      : `${process.env.NEXT_PUBLIC_API_URL}/api/services`;
    const method = editing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setOpen(false);
      pushToast({ type: "success", title: editing ? "Service updated" : "Service created" });
      loadServices();
    } catch {
      pushToast({ type: "error", title: "Something went wrong" });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(s) {
    if (!confirm(`Delete "${s.Name}"? This cannot be undone.`)) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${s.ServiceId}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      pushToast({ type: "success", title: "Service deleted" });
      loadServices();
    } catch {
      pushToast({ type: "error", title: "Delete failed" });
    }
  }

  return (
    <div className="page">
      <div className="page__header">
        <div>
          <h1 className="page__title">Services</h1>
          <p className="page__subtitle">Create and manage medical services.</p>
        </div>
        <button className="btn btn--primary" onClick={openCreate}>Add New Service</button>
      </div>

      <div className="tableCard">
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Status</th>
              <th style={{ width: 200 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.ServiceId}>
                <td>{s.Name}</td>
                <td>{s.Duration ? `${s.Duration} min` : "—"}</td>
                <td>{s.Price ? `$${s.Price}` : "—"}</td>
                <td>
                  <span className={`pill ${s.Status?.toLowerCase() === "active" ? "pill--ok" : "pill--muted"}`}>
                    {s.Status}
                  </span>
                </td>
                <td className="actions">
                  <button className="btn btn--ghost" onClick={() => openEdit(s)}>Edit</button>
                  <button className="btn btn--danger" onClick={() => handleDelete(s)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {services.length === 0 && <div className="empty">No services found.</div>}
      </div>

      <Modal open={open} title={editing ? "Edit Service" : "Add New Service"} onClose={() => setOpen(false)}>
        <form className="form" onSubmit={handleSave}>
          <div className="field">
            <label>Service name *</label>
            <input className="input" name="Name" value={form.Name} onChange={handleField} required />
          </div>

          <div className="field">
            <label>Description</label>
            <textarea className="input" name="Description" value={form.Description} onChange={handleField} rows={3} />
          </div>

          <div className="grid2">
            <div className="field">
              <label>Duration (minutes)</label>
              <input className="input" type="number" min="1" name="Duration" value={form.Duration} onChange={handleField} />
            </div>
            <div className="field">
              <label>Price ($)</label>
              <input className="input" type="number" min="0" step="0.01" name="Price" value={form.Price} onChange={handleField} />
            </div>
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
