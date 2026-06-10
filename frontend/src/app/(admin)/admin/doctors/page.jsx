"use client";

import { useEffect, useMemo, useState } from "react";
import "./doctors.css";
import Link from "next/link";
import Modal                    from "@/components/admin/Modal";
import AdminSelect              from "@/components/admin/AdminSelect/AdminSelect";
import { useToast }             from "@/components/admin/ToastProvider";
import { useDoctors }           from "@/features/doctors/hooks/useDoctors";
import { useServices }          from "@/features/services/hooks/useServices";
import { doctorsService }       from "@/features/doctors/services/doctorsService";
import DoctorForm               from "@/features/doctors/components/DoctorForm";

export default function AdminDoctorsPage() {
  const { pushToast } = useToast();

  const { doctors, loading, reload: reloadDoctors } = useDoctors(pushToast);
  const { services, reload: reloadServices }         = useServices();

  const [query, setQuery]   = useState("");
  const [status, setStatus] = useState("All");
  const [open, setOpen]     = useState(false);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving]   = useState(false);

  useEffect(() => {
    reloadDoctors();
    reloadServices();
  }, []);

  const rows = useMemo(() => doctors.filter(d => {
    const okQuery =
      (d.Name ?? "").toLowerCase().includes(query.toLowerCase()) ||
      (d.Occupation ?? "").toLowerCase().includes(query.toLowerCase()) ||
      (d.Email ?? "").toLowerCase().includes(query.toLowerCase());
    const okStatus = status === "All" || d.Status === status;
    return okQuery && okStatus;
  }), [doctors, query, status]);

  function openCreate() { setEditing(null); setOpen(true); }
  function openEdit(d)  { setEditing(d);    setOpen(true); }

  async function handleSave(e, selectedServiceIds) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = {
      Name:          fd.get("name"),
      Occupation:    fd.get("specialty"),
      Email:         fd.get("email"),
      Phone:         fd.get("phone"),
      Status:        fd.get("status"),
      Bio:           fd.get("bio") || "",
      Image:         fd.get("image") || null,
      WorkingHours:  fd.get("workingHours") || null,
      Qualifications: fd.get("qualifications") || null,
      Password:      fd.get("password") || null,
      Details:       [],
      ServiceIds:    selectedServiceIds,
    };

    setSaving(true);
    try {
      if (editing) {
        await doctorsService.update(editing.DoctorId, body);
        pushToast({ type: "success", title: "Doctor updated" });
      } else {
        await doctorsService.create(body);
        pushToast({ type: "success", title: "Doctor created" });
      }
      setOpen(false);
      await reloadDoctors();
    } catch {
      pushToast({ type: "error", title: "Save failed", message: "Check that all fields are valid." });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(d) {
    if (!confirm(`Delete ${d.Name}? This cannot be undone.`)) return;
    try {
      await doctorsService.remove(d.DoctorId);
      pushToast({ type: "success", title: "Doctor deleted" });
      await reloadDoctors();
    } catch {
      pushToast({ type: "error", title: "Delete failed" });
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
          onChange={e => setQuery(e.target.value)}
        />
        <AdminSelect
          options={["All", "Active", "Inactive"]}
          defaultValue={status}
          onChange={setStatus}
        />
      </div>

      <div className="tableCard">
        {loading ? (
          <div className="empty">Loading...</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Photo</th><th>Doctor</th><th>Specialty</th>
                <th>Email</th><th>Phone</th><th>Status</th>
                <th style={{ width: 220 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(d => (
                <tr key={d.DoctorId}>
                  <td>
                    <div className="avatar" aria-hidden="true">
                      {(d.Name ?? "?").split(" ").slice(1, 2).join("").slice(0, 1) || "?"}
                    </div>
                  </td>
                  <td>{d.Name}</td>
                  <td>{d.Occupation}</td>
                  <td>{d.Email}</td>
                  <td>{d.Phone}</td>
                  <td>
                    <span className={`pill ${d.Status === "Active" ? "pill--ok" : "pill--muted"}`}>
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
        )}
        {!loading && rows.length === 0 && (
          <div className="empty">No results. Try a different search.</div>
        )}
      </div>

      <Modal open={open} title={editing ? "Edit Doctor" : "Add New Doctor"} onClose={() => setOpen(false)}>
        <DoctorForm
          editing={editing}
          services={services}
          saving={saving}
          onClose={() => setOpen(false)}
          onSubmit={handleSave}
        />
      </Modal>
    </div>
  );
}
