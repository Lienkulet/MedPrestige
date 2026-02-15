import React from "react";
import "./ContactConsultationCard.css";

const ContactConsultationCard = () => {
  return (
    <section className="consult-card" aria-labelledby="consult-title">
      <h2 id="consult-title" className="consult-card__title">
        Get Online <br /> Consultation
      </h2>

      <form className="consult-card__form">
        <div className="field">
          <label htmlFor="firstName">First name<span aria-hidden="true">*</span></label>
          <input id="firstName" name="firstName" type="text" required />
        </div>

        <div className="field">
          <label htmlFor="lastName">Last name<span aria-hidden="true">*</span></label>
          <input id="lastName" name="lastName" type="text" required />
        </div>

        <div className="field">
          <label htmlFor="email">Email address<span aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="field">
          <label htmlFor="specialist">Specialist<span aria-hidden="true">*</span></label>
          <select id="specialist" name="specialist" required defaultValue="">
            <option value="" disabled>Choose a specialist</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="dentistry">Dentistry</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="date">Date<span aria-hidden="true">*</span></label>
          <input id="date" name="date" type="date" required />
        </div>

        <div className="field">
          <label htmlFor="time">Time<span aria-hidden="true">*</span></label>
          <input id="time" name="time" type="time" required />
        </div>

        <button className="consult-card__button" type="submit">
          Make an appointment
        </button>
      </form>
    </section>
  );
};

export default ContactConsultationCard;
