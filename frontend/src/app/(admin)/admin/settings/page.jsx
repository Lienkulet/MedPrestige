"use client";

import "./settings.css";
import { useToast } from "@/components/admin/ToastProvider";

export default function AdminSettingsPage() {
  const { pushToast } = useToast();

  function save(e) {
    e.preventDefault();
    pushToast({ type: "success", title: "Settings saved", message: "UI only for now." });
  }

  return (
    <div className="page">
      <div className="page__header">
        <div>
          <h1 className="page__title">Settings</h1>
          <p className="page__subtitle">Clinic info and dashboard preferences.</p>
        </div>
      </div>

      <form className="settings" onSubmit={save}>
        <section className="card">
          <div className="card__title">Clinic Information</div>
          <div className="grid2">
            <div className="field">
              <label>Clinic name</label>
              <input className="input" defaultValue="MedPrestige Clinic" />
            </div>
            <div className="field">
              <label>Support email</label>
              <input className="input" type="email" defaultValue="support@clinic.com" />
            </div>
          </div>
          <div className="grid2">
            <div className="field">
              <label>Phone</label>
              <input className="input" defaultValue="+40 700 000 000" />
            </div>
            <div className="field">
              <label>Address</label>
              <input className="input" defaultValue="Bucharest, Romania" />
            </div>
          </div>
        </section>

        <section className="card">
          <div className="card__title">Appointment Rules</div>
          <div className="grid2">
            <div className="field">
              <label>Default slot duration (minutes)</label>
              <input className="input" type="number" defaultValue={30} />
            </div>
            <div className="field">
              <label>Cancellation policy (hours)</label>
              <input className="input" type="number" defaultValue={24} />
            </div>
          </div>
        </section>

        <div className="form__actions">
          <button type="submit" className="btn btn--primary">Save settings</button>
        </div>
      </form>
    </div>
  );
}
