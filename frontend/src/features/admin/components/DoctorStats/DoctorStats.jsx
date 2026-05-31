import PropTypes from "prop-types";

export default function DoctorStats({ totalAppts, upcomingThisWeek, completedThisMonth }) {
  return (
    <div className="doc__stats">
      <div className="stat">
        <div className="stat__label">Total appointments</div>
        <div className="stat__value">{totalAppts}</div>
      </div>
      <div className="stat">
        <div className="stat__label">Upcoming this week</div>
        <div className="stat__value">{upcomingThisWeek}</div>
      </div>
      <div className="stat">
        <div className="stat__label">Completed this month</div>
        <div className="stat__value">{completedThisMonth}</div>
      </div>
    </div>
  );
}

DoctorStats.propTypes = {
  totalAppts:         PropTypes.number.isRequired,
  upcomingThisWeek:   PropTypes.number.isRequired,
  completedThisMonth: PropTypes.number.isRequired,
};
