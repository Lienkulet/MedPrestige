"use client";

import { useState } from "react";
import "./testimonials-section.css";

const reviews = [
  {
    q: "Booking took two minutes and I saw a cardiologist the same afternoon. The whole experience felt genuinely personal.",
    name: "Eleanor Whitmore",
    role: "Patient · Cardiology",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    q: "My son's pediatrician was warm, patient and thorough. Having lab results in the app before we got home was incredible.",
    name: "Marcus Bennett",
    role: "Parent · Pediatrics",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    q: "After years of being a number at big hospitals, MedPrestige actually remembered my history. The care is on another level.",
    name: "Priya Nair",
    role: "Patient · Neurology",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function TestimonialsSection() {
  const [cur, setCur] = useState(0);

  const prev = () => setCur((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCur((c) => (c + 1) % reviews.length);

  const r = reviews[cur];

  return (
    <section className="tst-sec">
      <div className="tst-sec__container">
        <div className="tst-sec__head">
          <span className="tst-sec__eyebrow">Patient Stories</span>
          <h2 className="tst-sec__title">What patients say.</h2>
        </div>

        <div className="tst-sec__spotlight">
          <div className="tst-sec__card">
            <div className="tst-sec__quote-ic">
              <QuoteIcon />
            </div>
            <div className="tst-sec__stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="tst-sec__q">{r.q}</p>
            <div className="tst-sec__who">
              <img
                className="tst-sec__av"
                src={r.avatar}
                alt={r.name}
                loading="lazy"
                onError={(e) => { e.target.style.visibility = "hidden"; }}
              />
              <div>
                <div className="tst-sec__nm">{r.name}</div>
                <div className="tst-sec__rl">{r.role}</div>
              </div>
            </div>
          </div>

          <div className="tst-sec__nav">
            <button className="tst-sec__arrow" onClick={prev} aria-label="Previous review">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
              </svg>
            </button>
            <div className="tst-sec__count">
              <span className="tst-sec__cur">{cur + 1}</span>
              <span className="tst-sec__sep"> / </span>
              <span>{reviews.length}</span>
            </div>
            <button className="tst-sec__arrow" onClick={next} aria-label="Next review">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
