import React from "react";
import "./InfoCard.css";

const InfoCard = ({ title, text, linkText, href = "#", icon }) => {
  return (
    <article className="info-card">
      <div className="info-card__icon" aria-hidden="true">
        {icon}
      </div>

      <div className="info-card__content">
        <h3 className="info-card__title">{title}</h3>

        <p className="info-card__text">{text}</p>

        <a className="info-card__link" href={href}>
          <span className="info-card__linkText">{linkText}</span>
          <span className="info-card__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
};

export default InfoCard;
