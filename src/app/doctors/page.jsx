import React from 'react'
import PagesHero from '../components/PagesHero/PagesHero'
import Link from "next/link";

const Doctors = () => {
  return(
   <div className="doctors">
    <PagesHero title={'Meet Our Doctors'} subtitle={'Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing'} />
    <a href={"/doctors/1"} className="doctor-card">
      <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop&crop=center" alt="Doctor 1" className="doctor-image" />
      <div className="doctor-info">
        <h3 className="doctor-name">Dr. John Doe</h3>
        <p className="doctor-specialty">Cardiologist</p>
      </div>
    </a>
   </div>
  )
}

export default Doctors