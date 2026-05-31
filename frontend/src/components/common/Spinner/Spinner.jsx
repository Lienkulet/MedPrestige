import PropTypes from "prop-types";

export default function Spinner({ className }) {
  return (
    <>
      <style>{`@keyframes mp-spin{to{transform:rotate(360deg)}}.mp-spin{animation:mp-spin .7s linear infinite}`}</style>
      <svg className={`mp-spin ${className}`} viewBox="0 0 36 36" fill="none" aria-label="Loading">
        <circle cx="18" cy="18" r="15" stroke="currentColor" strokeOpacity=".2" strokeWidth="3" />
        <path d="M18 3a15 15 0 0 1 15 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </>
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: "size-8",
};
