import React from "react";
import "./ContactConsultationCard.css";

const ContactConsultationCard = () => {
  return (
    <section className="consult-card" aria-labelledby="consult-title">
      <h2 id="consult-title" className="consult-card__title">
        Book an Appointment
      </h2>
      <p className="consult-card__subtitle">
        Complete the form below and our team will confirm your visit within 24 hours.
      </p>

      <form className="consult-card__form">
        <div className="field">
          <label htmlFor="firstName">First name<span aria-hidden="true">*</span></label>
          <input id="firstName" name="firstName" type="text" placeholder="John" required />
        </div>

        <div className="field">
          <label htmlFor="lastName">Last name<span aria-hidden="true">*</span></label>
          <input id="lastName" name="lastName" type="text" placeholder="Smith" required />
        </div>

        <div className="field">
          <label htmlFor="email">Email address<span aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" placeholder="john@example.com" required />
        </div>

        <div className="field">
          <label htmlFor="specialist">Specialist<span aria-hidden="true">*</span></label>
          <select id="specialist" name="specialist" required defaultValue="">
            <option value="" disabled>Choose a specialist</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="dentistry">Dentistry</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="date">Preferred date<span aria-hidden="true">*</span></label>
          <input id="date" name="date" type="date" required />
        </div>

        <div className="field">
          <label htmlFor="time">Preferred time<span aria-hidden="true">*</span></label>
          <input id="time" name="time" type="time" required />
        </div>

        <button className="consult-card__button" type="submit">
          Request Appointment
        </button>
      </form>
    </section>
  );
};

export default ContactConsultationCard;
