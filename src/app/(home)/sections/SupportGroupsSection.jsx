import "./support-groups-section.css";

export default function SupportGroupsSection() {
  return (
    <section className="support-groups">
      <div className="support-groups__container">
        <div className="support-groups__visual">
          <div className="support-groups__scene">
            <span className="support-groups__bubble support-groups__bubble--lg" />
            <span className="support-groups__bubble support-groups__bubble--sm" />
            <div className="support-groups__cross support-groups__cross--a" />
            <div className="support-groups__cross support-groups__cross--b" />
            <div className="support-groups__figures">
              <div className="support-groups__figure support-groups__figure--doctor" />
              <div className="support-groups__figure support-groups__figure--patient" />
            </div>
          </div>

          <div className="support-groups__emergency">
            <div className="support-groups__phone-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="support-groups__emergency-label">Emergency Service</p>
              <p className="support-groups__emergency-phone">+(690) 2560 0020</p>
            </div>
          </div>
        </div>

        <div className="support-groups__content">
          <h2 className="support-groups__title">
            Support Groups for
            <br />
            Depression & Anxiety
          </h2>
          <p className="support-groups__text">
            Access dedicated care programs with guided sessions, consistent follow-ups,
            and specialist support designed to improve mental well-being over time.
          </p>
          <button type="button" className="support-groups__button">
            Learn More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
