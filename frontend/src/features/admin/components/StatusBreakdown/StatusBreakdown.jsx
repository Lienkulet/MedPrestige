import PropTypes from "prop-types";
import Spinner from "@/components/common/Spinner";
import SectionCard from "@/features/admin/components/SectionCard";
import { STATUS_DOT } from "@/features/appointments/utils/appointmentUtils";

export default function StatusBreakdown({ statusBreakdown, loading }) {
  return (
    <SectionCard title="Appointment Status">
      <div className="grid grid-cols-2">
        {statusBreakdown.map((s, i) => {
          const dot = STATUS_DOT[s.status];
          return (
            <div
              key={s.status}
              className={[
                "p-5",
                i % 2 === 0 ? "border-r border-border" : "",
                i < 2       ? "border-b border-border" : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className={`size-2 rounded-full shrink-0 ${dot}`} />
                <span className="text-xs font-medium text-muted-foreground">{s.status}</span>
              </div>
              {loading
                ? <Spinner className="size-6 text-primary" />
                : <span className="text-2xl font-extrabold text-[#102D47] tabular-nums">{s.count}</span>
              }
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

StatusBreakdown.propTypes = {
  statusBreakdown: PropTypes.arrayOf(
    PropTypes.shape({ status: PropTypes.string, count: PropTypes.number })
  ).isRequired,
  loading: PropTypes.bool,
};

StatusBreakdown.defaultProps = {
  loading: false,
};
