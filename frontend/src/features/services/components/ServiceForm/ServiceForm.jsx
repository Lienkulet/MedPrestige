import PropTypes from "prop-types";
import { useState } from "react";
import AdminSelect from "@/components/admin/AdminSelect/AdminSelect";
import "./ServiceForm.css";

export default function ServiceForm({ editing, doctors, saving, onClose, onSubmit }) {
  const [selectedDoctorIds, setSelectedDoctorIds] = useState(editing?.DoctorIds ?? []);

  function toggleDoctor(doctorId, checked) {
    setSelectedDoctorIds(prev =>
      checked ? prev.filter(id => id !== doctorId) : [...prev, doctorId]
    );
  }

  function handleSubmit(e) {
    onSubmit(e, selectedDoctorIds);
  }

  return (
    <form key={editing?.ServiceId ?? "new"} className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Service name *</label>
        <input className="input" name="name" defaultValue={editing?.Name ?? ""} required />
      </div>

      <div className="field">
        <label>Description</label>
        <textarea className="textarea" name="description" defaultValue={editing?.Description ?? ""} />
      </div>

      <div className="grid2">
        <div className="field">
          <label>Duration (minutes) *</label>
          <input className="input" name="duration" type="number" min="1" defaultValue={editing?.Duration ?? ""} required />
        </div>
        <div className="field">
          <label>Price *</label>
          <input className="input" name="price" type="number" min="0" defaultValue={editing?.Price ?? ""} required />
        </div>
      </div>

      <div className="field">
        <label>Photo URL</label>
        <input className="input" name="image" type="url" placeholder="https://example.com/photo.jpg" defaultValue={editing?.Image ?? ""} />
      </div>

      <div className="field">
        <label>Status</label>
        <AdminSelect
          name="status"
          options={["Active", "Inactive"]}
          defaultValue={editing?.Status ?? "Active"}
        />
      </div>

      {doctors.length > 0 && (
        <div className="field">
          <label>Assigned doctors</label>
          <div className="doctor-list">
            {doctors.map(d => {
              const checked = selectedDoctorIds.includes(d.DoctorId);
              return (
                <label
                  key={d.DoctorId}
                  className={`doctor-item${checked ? " doctor-item--checked" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleDoctor(d.DoctorId, checked)}
                  />
                  <span>{d.Name}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      <div className="form__actions">
        <button type="button" className="btn btn--ghost" onClick={onClose}>Cancel</button>
        <button type="submit" className="btn btn--primary" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}

ServiceForm.propTypes = {
  editing:  PropTypes.object,
  doctors:  PropTypes.arrayOf(PropTypes.object).isRequired,
  saving:   PropTypes.bool,
  onClose:  PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ServiceForm.defaultProps = {
  editing: null,
  saving:  false,
};
