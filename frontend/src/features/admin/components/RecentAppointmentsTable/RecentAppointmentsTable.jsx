import PropTypes from "prop-types";
import Spinner from "@/components/common/Spinner";
import SectionCard from "@/features/admin/components/SectionCard";
import AppointmentStatusBadge from "@/features/appointments/components/AppointmentStatusBadge";
import { fmtAdmin } from "@/utils/dateUtils";

const HEADERS = ["Date & Time", "Patient", "Doctor", "Service", "Status"];

export default function RecentAppointmentsTable({ appointments, loading }) {
  return (
    <SectionCard title="Recent Appointments">
      {loading ? (
        <div className="flex justify-center p-12">
          <Spinner className="size-10 text-primary" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm" style={{ minWidth: 560 }}>
            <thead>
              <tr className="bg-secondary">
                {HEADERS.map(h => (
                  <th
                    key={h}
                    className="text-left px-4 py-2.5 text-xs font-bold text-muted-foreground border-b border-border whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-muted-foreground text-sm">
                    No appointments yet.
                  </td>
                </tr>
              ) : (
                appointments.map((a, idx) => (
                  <tr
                    key={a.AppointmentId}
                    className={`border-b border-border last:border-0 transition-colors hover:bg-accent cursor-default ${idx % 2 === 1 ? "bg-secondary" : "bg-white"}`}
                  >
                    <td className="px-4 py-2.5 text-muted-foreground whitespace-nowrap tabular-nums">{fmtAdmin(a.StartAt)}</td>
                    <td className="px-4 py-2.5 font-semibold text-[#102D47]">{a.PatientName}</td>
                    <td className="px-4 py-2.5 text-[#102D47]">{a.DoctorName}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{a.ServiceName}</td>
                    <td className="px-4 py-2.5"><AppointmentStatusBadge status={a.Status} /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </SectionCard>
  );
}

RecentAppointmentsTable.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading:      PropTypes.bool,
};

RecentAppointmentsTable.defaultProps = {
  loading: false,
};
