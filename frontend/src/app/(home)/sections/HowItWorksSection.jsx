import "./how-it-works-section.css";

const steps = [
  {
    num: "01",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: "Find your specialist",
    desc: "Browse 120+ verified doctors by specialty, language, availability and patient ratings.",
  },
  {
    num: "02",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/>
      </svg>
    ),
    title: "Pick a time that suits",
    desc: "Choose an in-person or video slot from real-time availability and confirm instantly.",
  },
  {
    num: "03",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    title: "Get personalized care",
    desc: "Meet your doctor, receive a clear plan, and follow up through your patient portal.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="hiw">
      <div className="hiw__container">
        <div className="hiw__head">
          <span className="hiw__eyebrow">Simple Process</span>
          <h2 className="hiw__title">Care in three easy steps</h2>
          <p className="hiw__desc">
            From finding the right specialist to walking out with a clear plan —
            booking with MedPrestige takes minutes, not days.
          </p>
        </div>

        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div className="hiw__step" key={step.num}>
              <div className="hiw__step-num">STEP {step.num}</div>
              <div className="hiw__step-ic">{step.icon}</div>
              <h3 className="hiw__step-title">{step.title}</h3>
              <p className="hiw__step-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="hiw__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
