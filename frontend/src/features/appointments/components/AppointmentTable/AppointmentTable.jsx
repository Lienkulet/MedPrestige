import PropTypes from "prop-types";
import { fmtAdmin } from "@/utils/dateUtils";
import { STATUS_PILL_CLASS } from "@/features/appointments/utils/appointmentUtils";

export default function AppointmentTable({ appointments, loading, onEdit, onCancel, onDelete }) {
  if (loading) return <div className="empty">Loading...</div>;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Date &amp; Time</th>
            <th>Client</th>
            <th>Doctor</th>
            <th>Service</th>
            <th>Status</th>
            <th style={{ width: 220 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(a => (
            <tr key={a.AppointmentId}>
              <td>{fmtAdmin(a.StartAt)}</td>
              <td>{a.PatientName}</td>
              <td>{a.DoctorName}</td>
              <td>{a.ServiceName}</td>
              <td>
                <span className={`pill ${STATUS_PILL_CLASS[a.Status] ?? "pill--muted"}`}>
                  {a.Status}
                </span>
              </td>
              <td className="actions">
                <button className="btn btn--ghost" onClick={() => onEdit(a)}>Edit</button>
                <button className="btn btn--ghost" onClick={() => onCancel(a)}>Cancel</button>
                <button className="btn btn--danger" onClick={() => onDelete(a)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {appointments.length === 0 && (
        <div className="empty">No appointments found.</div>
      )}
    </>
  );
}

AppointmentTable.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading:      PropTypes.bool,
  onEdit:       PropTypes.func.isRequired,
  onCancel:     PropTypes.func.isRequired,
  onDelete:     PropTypes.func.isRequired,
};

AppointmentTable.defaultProps = {
  loading: false,
};
