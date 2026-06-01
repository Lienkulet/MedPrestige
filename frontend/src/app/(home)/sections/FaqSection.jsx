"use client";

import { useState } from "react";
import Link from "next/link";
import "./faq-section.css";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Click "Book Appointment", choose your specialty and preferred doctor, then pick from their real-time availability. You'll get instant confirmation by email and SMS — the whole process takes under two minutes.",
  },
  {
    q: "Do you accept my insurance?",
    a: "We work directly with most major insurers and bill them on your behalf. During booking you can enter your provider to see your estimated out-of-pocket cost upfront, before you confirm.",
  },
  {
    q: "Can I have a video consultation?",
    a: "Yes. Many of our specialists offer secure video visits. Simply select the "Video" option when choosing a time slot, and you'll receive a private link to join from any device.",
  },
  {
    q: "How quickly can I be seen?",
    a: "Same-day and next-day appointments are available across most specialties. Real-time availability is shown for every doctor so you always know the soonest open slot.",
  },
  {
    q: "Where are your clinics located?",
    a: "Our flagship campus brings every specialty and on-site diagnostics under one roof, with satellite locations across the city. You'll see the nearest location during booking.",
  },
  {
    q: "Is my medical data secure?",
    a: "Absolutely. We're HIPAA compliant and JCI accredited. Your records are encrypted end-to-end and only ever accessible to you and your care team.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-sec">
      <div className="faq-sec__container">
        {/* Aside */}
        <aside className="faq-sec__aside">
          <div className="faq-sec__aside-ic">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3 className="faq-sec__aside-title">Still have questions?</h3>
          <p className="faq-sec__aside-desc">
            Our patient-care team is here seven days a week to help you find the right specialist
            and answer anything about your visit.
          </p>
          <Link href="/contact" className="faq-sec__aside-btn">
            Contact us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </aside>

        {/* List */}
        <div className="faq-sec__list">
          {faqs.map((item, i) => (
            <div className={`faq-sec__item ${open === i ? "open" : ""}`} key={item.q}>
              <button
                className="faq-sec__q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className="faq-sec__pm" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </span>
              </button>
              <div className="faq-sec__a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
