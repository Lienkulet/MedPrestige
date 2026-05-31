import PropTypes from "prop-types";
import { useState } from "react";

export default function DoctorForm({ editing, services, saving, onClose, onSubmit }) {
  const [selectedServiceIds, setSelectedServiceIds] = useState(editing?.ServiceIds ?? []);

  function toggleService(serviceId, checked) {
    setSelectedServiceIds(prev =>
      checked ? prev.filter(id => id !== serviceId) : [...prev, serviceId]
    );
  }

  function handleSubmit(e) {
    onSubmit(e, selectedServiceIds);
  }

  return (
    <form key={editing?.DoctorId ?? "new"} className="form" onSubmit={handleSubmit}>
      <div className="grid2">
        <div className="field">
          <label>Full name *</label>
          <input className="input" name="name" defaultValue={editing?.Name ?? ""} required />
        </div>
        <div className="field">
          <label>Specialty *</label>
          <input className="input" name="specialty" defaultValue={editing?.Occupation ?? ""} required />
        </div>
      </div>

      <div className="grid2">
        <div className="field">
          <label>Email *</label>
          <input className="input" name="email" type="email" defaultValue={editing?.Email ?? ""} required />
        </div>
        <div className="field">
          <label>Phone *</label>
          <input className="input" name="phone" defaultValue={editing?.Phone ?? ""} required />
        </div>
      </div>

      <div className="grid2">
        <div className="field">
          <label>Qualifications</label>
          <input className="input" name="qualifications" placeholder="e.g. MD, PhD" defaultValue={editing?.Qualifications ?? ""} />
        </div>
        <div className="field">
          <label>Status</label>
          <select className="select" name="status" defaultValue={editing?.Status ?? "Active"}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label>Bio</label>
        <textarea className="textarea" name="bio" rows={3} placeholder="Brief description about the doctor..." defaultValue={editing?.Bio ?? ""} />
      </div>

      {services.length > 0 && (
        <div className="field">
          <label>Assigned services</label>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
            {services.map(s => {
              const checked = selectedServiceIds.includes(s.ServiceId);
              return (
                <label key={s.ServiceId} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14 }}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(s.ServiceId, checked)}
                  />
                  {s.Name}
                </label>
              );
            })}
          </div>
        </div>
      )}

      <div className="field">
        <label>{editing ? "Password (leave blank to keep current)" : "Password *"}</label>
        <input className="input" name="password" type="password" placeholder="••••••••" required={!editing} minLength={6} />
      </div>

      <div className="field">
        <label>Photo URL</label>
        <input className="input" name="image" type="url" placeholder="https://example.com/photo.jpg" defaultValue={editing?.Image ?? ""} />
      </div>

      <div className="field">
        <label>Working hours</label>
        <input className="input" name="workingHours" placeholder="Mon–Fri 09:00–17:00" defaultValue={editing?.WorkingHours ?? ""} />
      </div>

      <div className="form__actions">
        <button type="button" className="btn btn--ghost" onClick={onClose}>Cancel</button>
        <button type="submit" className="btn btn--primary" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}

DoctorForm.propTypes = {
  editing:  PropTypes.object,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  saving:   PropTypes.bool,
  onClose:  PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

DoctorForm.defaultProps = {
  editing: null,
  saving:  false,
};
