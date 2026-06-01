import Image from "next/image";
import "./why-us-section.css";

const items = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: "Board-certified specialists",
    desc: "Every physician is vetted, credentialed and continuously reviewed for quality.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="12" cy="16" r="2"/>
      </svg>
    ),
    title: "Same-day appointments",
    desc: "Book online in under two minutes and often be seen the very same day.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3h4l2.7 13.4a2 2 0 0 0 2 1.6h7.5a2 2 0 0 0 2-1.6L23 6H6"/>
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      </svg>
    ),
    title: "Advanced diagnostics",
    desc: "On-site MRI, CT and lab work mean faster answers and fewer referrals.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Transparent pricing",
    desc: "Upfront costs and direct insurance billing — no surprises after your visit.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="why-us">
      <div className="why-us__container">
        {/* Left: image */}
        <div className="why-us__media">
          <div className="why-us__img-wrap">
            <Image
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1100&q=80"
              alt="Modern clinic interior"
              width={550}
              height={610}
              className="why-us__img"
              unoptimized
            />
          </div>
          <div className="why-us__float">
            <div className="why-us__float-ic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <div className="why-us__float-n">120+</div>
              <div className="why-us__float-l">Specialists on staff</div>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="why-us__content">
          <span className="why-us__eyebrow">Why MedPrestige</span>
          <h2 className="why-us__title">
            Healthcare that puts <span className="why-us__hl">you first</span>
          </h2>
          <p className="why-us__desc">
            We've reimagined the clinic around your time, your comfort and your outcomes —
            combining leading specialists with technology that keeps you informed every step of the way.
          </p>
          <div className="why-us__list">
            {items.map((item) => (
              <div className="why-us__item" key={item.title}>
                <div className="why-us__item-ic">{item.icon}</div>
                <div>
                  <h4 className="why-us__item-title">{item.title}</h4>
                  <p className="why-us__item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
