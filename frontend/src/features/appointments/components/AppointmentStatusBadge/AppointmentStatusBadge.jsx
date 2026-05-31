import PropTypes from "prop-types";
import { STATUS_CLS, STATUS_DOT } from "@/features/appointments/utils/appointmentUtils";

/**
 * Renders a pill badge for appointment status with a colored dot.
 * Used on the admin dashboard's recent-appointments table.
 */
export default function AppointmentStatusBadge({ status }) {
  const cls = STATUS_CLS[status] ?? STATUS_CLS["No-show"];
  const dot = STATUS_DOT[status] ?? STATUS_DOT["No-show"];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${cls}`}
    >
      <span className={`size-1.5 rounded-full shrink-0 ${dot}`} />
      {status}
    </span>
  );
}

AppointmentStatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};
