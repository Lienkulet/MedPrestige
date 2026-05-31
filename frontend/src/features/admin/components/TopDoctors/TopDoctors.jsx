import PropTypes from "prop-types";
import Spinner from "@/components/common/Spinner";
import SectionCard from "@/features/admin/components/SectionCard";

function DoctorRow({ name, count, max }) {
  const pct = max > 0 ? (count / max) * 100 : 0;
  return (
    <div className="px-5 py-3 border-b border-border last:border-0">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-semibold text-[#102D47]">{name}</span>
        <span className="text-xs font-semibold text-muted-foreground tabular-nums">{count}</span>
      </div>
      <div className="h-1.5 rounded-full bg-accent">
        <div
          className="h-1.5 rounded-full bg-primary transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

DoctorRow.propTypes = {
  name:  PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  max:   PropTypes.number.isRequired,
};

export default function TopDoctors({ topDoctors, maxCount, loading }) {
  return (
    <SectionCard title="Top Doctors by Appointments">
      {loading ? (
        <div className="flex justify-center p-8">
          <Spinner className="size-9 text-primary" />
        </div>
      ) : topDoctors.length === 0 ? (
        <p className="p-5 text-sm text-muted-foreground">No data yet.</p>
      ) : (
        topDoctors.map(({ name, count }) => (
          <DoctorRow key={name} name={name} count={count} max={maxCount} />
        ))
      )}
    </SectionCard>
  );
}

TopDoctors.propTypes = {
  topDoctors: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, count: PropTypes.number })
  ).isRequired,
  maxCount: PropTypes.number.isRequired,
  loading:  PropTypes.bool,
};

TopDoctors.defaultProps = {
  loading: false,
};
