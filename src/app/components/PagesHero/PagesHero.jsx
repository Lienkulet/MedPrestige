import React from 'react'
import './PagesHero.css'

const PagesHero = ({ title, subtitle }) => {
  return (
    <section className="pages-hero">
      <div className="pages-hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default PagesHero
