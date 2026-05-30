import "./HourCard.css";

const HourCard = ({ hours = [], icon = null }) => {
  return (
    <section className="hoursCard" aria-label="Info">
      <div className="hoursIcon" aria-hidden="true">
        {icon}
      </div>

      <dl className="hoursList">
        {hours.map((row, index) => (
          <div className="hoursRow" key={`${row.days}-${row.open}-${index}`}>
            <dt className="hoursDays">{row.days || "\u00A0"}</dt>
            <dd className="hoursTime">{row.open}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default HourCard;
