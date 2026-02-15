"use client";

import { useState } from "react";
import "./services.css";
import Modal from "@/components/admin/Modal";
import { useToast } from "@/components/admin/ToastProvider";

const MOCK = [
  { id: "s1", name: "Consultation", duration: 30, price: 120, doctors: 5 },
  { id: "s2", name: "Dermatology", duration: 45, price: 180, doctors: 2 },
  { id: "s3", name: "Dental Check", duration: 60, price: 220, doctors: 3 },
];

export default function AdminServicesPage() {
  const { pushToast } = useToast();
  const [open, setOpen] = useState(false);

  function save(e) {
    e.preventDefault();
    setOpen(false);
    pushToast({ type: "success", title: "Service saved" });
  }

  return (
    <div className="page">
      <div className="page__header">
        <div>
          <h1 className="page__title">Services</h1>
          <p className="page__subtitle">Create services and assign doctors.</p>
        </div>
        <button className="btn btn--primary" onClick={() => setOpen(true)}>Add New Service</button>
      </div>

      <div className="tableCard">
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Doctors</th>
              <th style={{ width: 200 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.duration} min</td>
                <td>{s.price}</td>
                <td>{s.doctors}</td>
                <td className="actions">
                  <button className="btn btn--ghost" onClick={() => setOpen(true)}>Edit</button>
                  <button className="btn btn--danger" onClick={() => pushToast({ type: "info", title: "UI only" })}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={open} title="Add / Edit Service" onClose={() => setOpen(false)}>
        <form className="form" onSubmit={save}>
          <div className="field">
            <label>Service name *</label>
            <input className="input" required />
          </div>

          <div className="field">
            <label>Description</label>
            <textarea className="textarea" />
          </div>

          <div className="grid2">
            <div className="field">
              <label>Duration (minutes) *</label>
              <input className="input" type="number" min="1" required />
            </div>
            <div className="field">
              <label>Price *</label>
              <input className="input" type="number" min="0" required />
            </div>
          </div>

          <div className="field">
            <label>Assign doctors</label>
            <select className="select" multiple style={{ height: 140 }}>
              <option>Dr. Elena</option>
              <option>Dr. Andrei</option>
              <option>Dr. Maria</option>
            </select>
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
