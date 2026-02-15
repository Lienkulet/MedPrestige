import React from 'react'
import PagesHero from '../components/PagesHero/PagesHero'
import InfoCard from '../components/ui/InfoCard/InfoCard'
import "./Contact.css";
import EmailIcon from '../components/ui/EmailIcon';
import CareersIcon from '../components/ui/CareersIcon';
import ContactConsultationCart from '../components/ContactConsultationCart/ContactConsultationCart';

const Contact = () => {
  return (
    <main>
      {/* Hero */}
      <PagesHero
        title="Contact Us"
        subtitle="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing"
      />

      {/* Contact info */}
      <section className="container info-cards">
        <InfoCard
          title="EMAIL US"
          text={
            <>
              Please feel free to drop us a line.
              <br />
              We will respond as soon as possible.
            </>
          }
          linkText="Leave a message"
          href="/contact"
          icon={<EmailIcon />}
        />

        <InfoCard
          title="CAREERS"
          text="Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum"
          linkText="Send an application"
          href="/careers"
          icon={<CareersIcon />}
        />
      </section>

      {/* Map */}
      <section className="container map-section" aria-label="Clinic location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.004883084026!2d28.80674491186229!3d41.00326631961358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f85b0c2b62b%3A0x3b3cb2d2b535a6a6!2sPrestige%20Clinic!5e0!3m2!1sro!2s!4v1771162792955!5m2!1sro!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Prestige Clinic location"
        />
      </section>
      
      {/* Separator Line  */}
      <section className='separator-line'></section>
      
      {/* Consultation Card  */}
      <section className="container consult-section">
        <div className="consult-section__content">
        <ContactConsultationCart />  
        </div>

        <div className="consult-section__image">
          <img
            src="/contactdoctor.png"
            alt="Doctor holding stethoscope"
          />
        </div>

      </section>
    </main>
  )
}

export default Contact
