import PropTypes from "prop-types";

export default function SectionCard({ title, children, className }) {
  return (
    <div
      className={`bg-white border border-border rounded-xl shadow-[0_4px_24px_rgba(74,123,247,0.08)] overflow-hidden ${className}`}
    >
      {title && (
        <div className="px-5 py-4 border-b border-border font-bold text-sm text-[#102D47]">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}

SectionCard.propTypes = {
  title:     PropTypes.string,
  children:  PropTypes.node.isRequired,
  className: PropTypes.string,
};

SectionCard.defaultProps = {
  title:     undefined,
  className: "",
};
