import PropTypes from "prop-types";
import { STATUS_OPTIONS } from "@/features/appointments/utils/appointmentUtils";
import { extractDate, extractTime } from "@/features/appointments/utils/appointmentUtils";

export default function AppointmentForm({ editing, doctors, services, saving, onClose, onSubmit }) {
  const editDate = extractDate(editing?.StartAt);
  const editTime = extractTime(editing?.StartAt);

  return (
    <form key={editing?.AppointmentId ?? "new"} className="form" onSubmit={onSubmit}>
      <div className="grid2">
        <div className="field">
          <label>Doctor *</label>
          <select className="select" name="doctorId" required defaultValue={editing?.DoctorId ?? ""}>
            <option value="" disabled>Choose doctor</option>
            {doctors.map(d => (
              <option key={d.DoctorId} value={d.DoctorId}>{d.Name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Service *</label>
          <select className="select" name="serviceId" required defaultValue={editing?.ServiceId ?? ""}>
            <option value="" disabled>Choose service</option>
            {services.map(s => (
              <option key={s.ServiceId} value={s.ServiceId}>{s.Name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid2">
        <div className="field">
          <label>Client name *</label>
          <input className="input" name="patientName" defaultValue={editing?.PatientName ?? ""} required />
        </div>
        <div className="field">
          <label>Status</label>
          <select className="select" name="status" defaultValue={editing?.Status ?? "Confirmed"}>
            {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="grid2">
        <div className="field">
          <label>Date *</label>
          <input className="input" name="date" type="date" defaultValue={editDate} required />
        </div>
        <div className="field">
          <label>Time *</label>
          <input className="input" name="time" type="time" defaultValue={editTime} required />
        </div>
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

AppointmentForm.propTypes = {
  editing:  PropTypes.object,
  doctors:  PropTypes.arrayOf(PropTypes.object).isRequired,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  saving:   PropTypes.bool,
  onClose:  PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

AppointmentForm.defaultProps = {
  editing: null,
  saving:  false,
};
