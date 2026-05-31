import PropTypes from "prop-types";

export default function ServiceForm({ editing, doctors, saving, onClose, onSubmit }) {
  return (
    <form key={editing?.ServiceId ?? "new"} className="form" onSubmit={onSubmit}>
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
        <label>Status</label>
        <select className="select" name="status" defaultValue={editing?.Status ?? "Active"}>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {doctors.length > 0 && (
        <div className="field">
          <label>Assign doctors</label>
          <select className="select" multiple style={{ height: 140 }}>
            {doctors.map(d => (
              <option key={d.DoctorId} value={d.DoctorId}>{d.Name}</option>
            ))}
          </select>
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
