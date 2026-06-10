import ContactConsultationCard from '@/features/contact/ContactConsultationCart/ContactConsultationCard';
import './BookSection.css';

const BookSection = () => (
  <section className="book-section" id='bookSection'>
    <div className="book-container">

      {/* Left — clinic info */}
      <div className="clinic-info">
        <span className="clinic-info__eyebrow">Book an Appointment</span>
        <h2 className="clinic-info__title">Visit Our Clinic</h2>
        <p className="clinic-info__lead">
          Fill in the form and one of our coordinators will confirm your appointment within 24 hours.
        </p>

        <ul className="clinic-info__list">
          <li className="clinic-info__item">
            <span className="clinic-info__icon-wrap" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <div>
              <strong>Address</strong>
              <p>Bağcılar Meydan, Prestige Clinic<br />34200 Istanbul, Turkey</p>
            </div>
          </li>

          <li className="clinic-info__item">
            <span className="clinic-info__icon-wrap" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            <div>
              <strong>Opening Hours</strong>
              <p>Mon – Fri: 08:00 – 20:00<br />Saturday: 09:00 – 17:00<br />Sunday: Closed</p>
            </div>
          </li>

          <li className="clinic-info__item">
            <span className="clinic-info__icon-wrap" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.8a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z"/></svg>
            </span>
            <div>
              <strong>Phone</strong>
              <p>+90 212 555 0100</p>
            </div>
          </li>
        </ul>

        <div className="clinic-info__badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Same-day appointments often available
        </div>
      </div>

      {/* Right — form */}
      <div className="book-form-wrap">
        <ContactConsultationCard />
      </div>

    </div>
  </section>
);

export default BookSection;
