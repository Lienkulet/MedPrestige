import "./stats-section.css";

const stats = [
  { n: "120+", l: "Specialists across 30 disciplines" },
  { n: "16.8k", l: "Patients treated this year" },
  { n: "4.9", l: "Average patient rating" },
  { n: "98%", l: "Would recommend us to family" },
];

const badges = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    label: "JCI Accredited",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    label: "ISO 9001:2015",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    label: "HIPAA Compliant",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    label: "NABH Certified",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-sec">
      <div className="stats-sec__container">
        <div className="stats-sec__band">
          <div className="stats-sec__grid">
            {stats.map((s) => (
              <div className="stats-sec__cell" key={s.l}>
                <div className="stats-sec__n">{s.n}</div>
                <div className="stats-sec__l">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="stats-sec__accred">
            <div className="stats-sec__accred-lbl">Accredited &amp; certified by</div>
            {badges.map((b) => (
              <div className="stats-sec__badge" key={b.label}>
                <span className="stats-sec__badge-ic">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
