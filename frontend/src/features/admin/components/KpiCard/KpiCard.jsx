import PropTypes from "prop-types";
import Spinner from "@/components/common/Spinner";

export default function KpiCard({ icon: Icon, label, value, loading }) {
  return (
    <div className="bg-white border border-border rounded-xl p-5 shadow-[0_4px_24px_rgba(74,123,247,0.08)] flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="size-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
          <Icon size={18} className="text-primary" />
        </span>
      </div>
      {loading
        ? <Spinner className="size-7 text-primary" />
        : <span className="text-3xl font-extrabold text-[#102D47] leading-none tabular-nums">{value}</span>
      }
    </div>
  );
}

KpiCard.propTypes = {
  icon:    PropTypes.elementType.isRequired,
  label:   PropTypes.string.isRequired,
  value:   PropTypes.number,
  loading: PropTypes.bool,
};

KpiCard.defaultProps = {
  value:   0,
  loading: false,
};
