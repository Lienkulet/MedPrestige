import React from 'react'
import "./Contact.css";
import ContactAnimations from './ContactAnimations';
import BookSection from '@/components/common/BookSection/BookSection';
import PagesHero from '@/components/common/PagesHero/PagesHero';
import InfoCard from '@/components/ui/InfoCard/InfoCard';
import EmailIcon from '@/components/Icons/EmailIcon';
import CareersIcon from '@/components/Icons/CareersIcon';
import PhoneEmailIcon from '@/components/Icons/PhoneEmailIcon';

const Contact = () => {
  return (
    <main>
      <ContactAnimations />
      {/* Hero */}
      <PagesHero
        title="Get in Touch"
        subtitle="We're here to help. Reach out for appointments, general inquiries, or career opportunities."
      />

      {/* Contact info cards */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <InfoCard
            title="Email Us"
            text="Drop us a line and we'll respond as soon as possible — usually within one business day."
            linkText="Leave a message"
            href="/contact"
            icon={<EmailIcon />}
          />

          <InfoCard
            title="Call Us"
            text={<>+90 212 555 0100<br />Mon–Fri 08:00–20:00, Sat 09:00–17:00</>}
            linkText="Call the clinic"
            href="tel:+902125550100"
            icon={<PhoneEmailIcon />}
          />

          <InfoCard
            title="Careers"
            text="Join our team of specialists. We're always looking for talented healthcare professionals."
            linkText="Send an application"
            href="/careers"
            icon={<CareersIcon />}
          />
        </div>
      </section>

      {/* Map */}
      <section className="map-section" aria-label="Clinic location">
        <div className="map-container">
          <div className="map-header">
            <span className="map-eyebrow">Find Us</span>
            <h2 className="map-title">Prestige Clinic, Istanbul</h2>
            <p className="map-subtitle">Conveniently located in the heart of the medical district.</p>
          </div>
          <div className="map-frame-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.004883084026!2d28.80674491186229!3d41.00326631961358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f85b0c2b62b%3A0x3b3cb2d2b535a6a6!2sPrestige%20Clinic!5e0!3m2!1sro!2s!4v1771162792955!5m2!1sro!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prestige Clinic location"
            />
          </div>
        </div>
      </section>

      {/* Book appointment */}
      <BookSection />
    </main>
  )
}

export default Contact
