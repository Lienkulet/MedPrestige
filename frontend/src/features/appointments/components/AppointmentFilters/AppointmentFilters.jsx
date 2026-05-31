import PropTypes from "prop-types";
import { STATUS_OPTIONS } from "@/features/appointments/utils/appointmentUtils";

export default function AppointmentFilters({
  doctors,
  services,
  filterDoctor,
  filterService,
  filterStatus,
  onDoctorChange,
  onServiceChange,
  onStatusChange,
}) {
  return (
    <div className="filters">
      <select className="select" value={filterDoctor} onChange={e => onDoctorChange(e.target.value)}>
        <option value="">All Doctors</option>
        {doctors.map(d => (
          <option key={d.DoctorId} value={d.DoctorId}>{d.Name}</option>
        ))}
      </select>
      <select className="select" value={filterService} onChange={e => onServiceChange(e.target.value)}>
        <option value="">All Services</option>
        {services.map(s => (
          <option key={s.ServiceId} value={s.ServiceId}>{s.Name}</option>
        ))}
      </select>
      <select className="select" value={filterStatus} onChange={e => onStatusChange(e.target.value)}>
        <option value="">All Status</option>
        {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
      </select>
    </div>
  );
}

AppointmentFilters.propTypes = {
  doctors:        PropTypes.arrayOf(PropTypes.object).isRequired,
  services:       PropTypes.arrayOf(PropTypes.object).isRequired,
  filterDoctor:   PropTypes.string.isRequired,
  filterService:  PropTypes.string.isRequired,
  filterStatus:   PropTypes.string.isRequired,
  onDoctorChange:  PropTypes.func.isRequired,
  onServiceChange: PropTypes.func.isRequired,
  onStatusChange:  PropTypes.func.isRequired,
};
