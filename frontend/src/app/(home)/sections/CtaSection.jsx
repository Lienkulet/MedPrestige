import Link from "next/link";
import "./cta-section.css";

export default function CtaSection() {
  return (
    <section className="cta-sec">
      <div className="cta-sec__container">
        <div className="cta-sec__band">
          <div className="cta-sec__inner">
            <h2 className="cta-sec__title">
              Ready to take control of<br />your health?
            </h2>
            <p className="cta-sec__desc">
              Book an appointment today and experience world-class care tailored just for you.
            </p>
            <div className="cta-sec__actions">
              <Link href="/contact" className="cta-sec__btn-primary">
                Book Appointment
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/about" className="cta-sec__btn-outline">
                Learn More
              </Link>
            </div>
            <div className="cta-sec__phone">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
              </svg>
              Or call us: <b>+(690) 2560 0020</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
