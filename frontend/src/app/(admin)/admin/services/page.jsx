"use client";

import { useEffect, useState } from "react";
import "./services.css";
import Modal                       from "@/components/admin/Modal";
import { useToast }                from "@/components/admin/ToastProvider";
import { useServices }             from "@/features/services/hooks/useServices";
import { useDoctors }              from "@/features/doctors/hooks/useDoctors";
import { medicalServicesService }  from "@/features/services/services/medicalServicesService";
import ServiceForm                 from "@/features/services/components/ServiceForm";

export default function AdminServicesPage() {
  const { pushToast } = useToast();

  const { services, loading, reload: reloadServices } = useServices(pushToast);
  const { doctors,  reload: reloadDoctors }           = useDoctors();

  const [open, setOpen]     = useState(false);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving]   = useState(false);

  useEffect(() => {
    Promise.all([reloadServices(), reloadDoctors()]);
  }, []);

  function openCreate() { setEditing(null); setOpen(true); }
  function openEdit(s)  { setEditing(s);    setOpen(true); }

  async function handleSave(e, selectedDoctorIds = []) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = {
      Name:        fd.get("name"),
      Description: fd.get("description"),
      Duration:    Number(fd.get("duration")),
      Price:       Number(fd.get("price")),
      Image:       fd.get("image") || null,
      Status:      fd.get("status"),
      DoctorIds:   selectedDoctorIds,
    };

    setSaving(true);
    try {
      if (editing) {
        await medicalServicesService.update(editing.ServiceId, body);
        pushToast({ type: "success", title: "Service updated" });
      } else {
        await medicalServicesService.create(body);
        pushToast({ type: "success", title: "Service created" });
      }
      setOpen(false);
      await reloadServices();
    } catch {
      pushToast({ type: "error", title: "Save failed" });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(s) {
    if (!confirm(`Delete "${s.Name}"? This cannot be undone.`)) return;
    try {
      await medicalServicesService.remove(s.ServiceId);
      pushToast({ type: "success", title: "Service deleted" });
      await reloadServices();
    } catch {
      pushToast({ type: "error", title: "Delete failed" });
    }
  }

  return (
    <div className="page">
      <div className="page__header">
        <div>
          <h1 className="page__title">Services</h1>
          <p className="page__subtitle">Create services and assign doctors.</p>
        </div>
        <button className="btn btn--primary" onClick={openCreate}>Add New Service</button>
      </div>

      <div className="tableCard">
        {loading ? (
          <div className="empty">Loading...</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Service</th><th>Duration</th><th>Price</th>
                <th>Status</th><th style={{ width: 200 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map(s => (
                <tr key={s.ServiceId}>
                  <td>{s.Name}</td>
                  <td>{s.Duration} min</td>
                  <td>{s.Price}</td>
                  <td>
                    <span className={`pill ${s.Status === "Active" ? "pill--ok" : "pill--muted"}`}>
                      {s.Status ?? "—"}
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
        )}
        {!loading && services.length === 0 && (
          <div className="empty">No services yet. Add one to get started.</div>
        )}
      </div>

      <Modal open={open} title={editing ? "Edit Service" : "Add New Service"} onClose={() => setOpen(false)}>
        <ServiceForm
          editing={editing}
          doctors={doctors}
          saving={saving}
          onClose={() => setOpen(false)}
          onSubmit={handleSave}
        />
      </Modal>
    </div>
  );
}
