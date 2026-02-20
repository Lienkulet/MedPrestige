import React from 'react'
import PagesHero from '../../../../components/PagesHero/PagesHero'
import ContactCardFooter from '@/components/ContactCardFooter/ContactCardFooter'
import DoctorCard from '@/components/DoctorsCard/DoctorCard'
import '../services.css'

const servicesData = {
  cardiology: {
    name: 'Cardiology',
    label: 'Heart & Vascular',
    description: 'Our cardiology department offers comprehensive care for all heart and vascular conditions. From preventive screenings to advanced interventional procedures, our specialists are equipped to diagnose and treat a full spectrum of cardiovascular diseases.',
    extendedDescription: 'We combine cutting-edge technology with a patient-centered approach to deliver the highest standard of cardiac care. Our team works closely with other departments to ensure coordinated, holistic treatment for every patient.',
    procedures: [
      'Electrocardiogram (ECG)', 'Echocardiography', 'Stress Testing',
      'Holter Monitoring', 'Coronary Angiography', 'Cardiac Catheterization',
      'Pacemaker Implantation', 'Arrhythmia Management', 'Heart Failure Treatment',
    ],
    doctors: [
      { id: 1, name: 'Dr. Jessica Joan', specialty: 'Cardiology', image: '/doctor1.jpg', hasSocial: false },
      { id: 2, name: 'Dr. Alexandra', specialty: 'Cardiology', image: '/doctor1.jpg', hasSocial: true },
    ],
  },
  radiology: {
    name: 'Radiology',
    label: 'Imaging & Diagnostics',
    description: 'Our radiology unit uses the latest imaging technology including MRI, CT scans, and ultrasound to provide accurate and timely diagnoses.',
    extendedDescription: 'Our state-of-the-art equipment and experienced radiologists ensure that every scan is interpreted with precision. We prioritize fast turnaround times so that your care team can act quickly on results.',
    procedures: [
      'MRI Scan', 'CT Scan', 'Ultrasound',
      'X-Ray', 'Mammography', 'Bone Density Scan',
      'PET Scan', 'Fluoroscopy', 'Interventional Radiology',
    ],
    doctors: [
      { id: 3, name: 'Dr. Kimberly Hayes', specialty: 'Radiology', image: '/doctor1.jpg', hasSocial: false },
    ],
  },
  gynecology: {
    name: 'Gynecology',
    label: "Women's Health",
    description: "We provide complete women's health services, from routine gynecological exams to complex reproductive health treatments.",
    extendedDescription: "Our gynecology team is committed to supporting women's health through every life stage. We offer a safe, confidential environment where patients feel heard and respected.",
    procedures: [
      'Annual Gynecological Exam', 'Pap Smear', 'Colposcopy',
      'Pelvic Ultrasound', 'Hysteroscopy', 'Laparoscopy',
      'Contraception Counseling', 'Menopause Management', 'Fertility Assessment',
    ],
    doctors: [
      { id: 4, name: 'Dr. Bella Carol', specialty: 'Gynecology', image: '/doctor1.jpg', hasSocial: true },
      { id: 5, name: 'Dr. Rebecca Rose', specialty: 'Gynecology', image: '/doctor1.jpg', hasSocial: false },
    ],
  },
  'sports-injury': {
    name: 'Sports Injury',
    label: 'Orthopedics & Rehabilitation',
    description: 'Our sports medicine team specializes in the prevention, diagnosis, and treatment of injuries related to physical activity.',
    extendedDescription: 'Whether you are recovering from a ligament tear, a fracture, or chronic joint pain, our rehabilitation specialists create personalized recovery plans to get you back to peak performance.',
    procedures: [
      'Musculoskeletal Assessment', 'Physiotherapy', 'Joint Injections',
      'Arthroscopy', 'ACL Reconstruction', 'Fracture Management',
      'Sports Rehabilitation', 'Ultrasound-Guided Therapy', 'Return-to-Sport Programs',
    ],
    doctors: [
      { id: 6, name: 'Dr. Stephanie Sue', specialty: 'Sports Medicine', image: '/doctor1.jpg', hasSocial: true },
    ],
  },
  'lung-diseases': {
    name: 'Lung Diseases',
    label: 'Pulmonology',
    description: 'Our pulmonology department provides expert care for respiratory conditions including asthma, COPD, pneumonia, and sleep disorders.',
    extendedDescription: 'Our pulmonologists work with patients to manage chronic conditions, treat acute illness, and develop long-term strategies for maintaining lung health.',
    procedures: [
      'Spirometry', 'Bronchoscopy', 'Sleep Study (Polysomnography)',
      'Chest X-Ray & CT', 'Allergy Testing', 'Asthma Management',
      'COPD Treatment', 'Pulmonary Rehabilitation', 'Oxygen Therapy',
    ],
    doctors: [
      { id: 7, name: 'Dr. Penelope Morgan', specialty: 'Pulmonology', image: '/doctor1.jpg', hasSocial: false },
    ],
  },
  'eye-care': {
    name: 'Eye Care',
    label: 'Ophthalmology',
    description: 'Our ophthalmology team offers a full range of eye care services, from routine vision checks to surgical interventions for cataracts, glaucoma, and retinal conditions.',
    extendedDescription: 'Our eye care specialists use the latest diagnostic and surgical technologies to detect and treat conditions early, helping patients maintain healthy vision for life.',
    procedures: [
      'Comprehensive Eye Exam', 'Visual Acuity Testing', 'Glaucoma Screening',
      'Retinal Examination', 'Cataract Surgery', 'LASIK Consultation',
      'Diabetic Eye Care', 'Dry Eye Treatment', 'Contact Lens Fitting',
    ],
    doctors: [
      { id: 8, name: 'Dr. Lauren Leah', specialty: 'Ophthalmology', image: '/doctor1.jpg', hasSocial: true },
    ],
  },
}

const ServiceDetail = async ({ params }) => {
  const { serviceID } = await params
  const service = servicesData[serviceID]

  if (!service) {
    return (
      <main>
        <PagesHero title="Service Not Found" subtitle="The service you are looking for does not exist." />
        <ContactCardFooter />
      </main>
    )
  }

  return (
    <main>
      <PagesHero title={service.name} subtitle={service.label} />

      <div className="service-detail">

        <div className="service-detail-intro">
          <div>
            <span className="service-detail-label">{service.label}</span>
            <h2 className="service-detail-title">{service.name}</h2>
            <p className="service-detail-description">{service.description}</p>
            <p className="service-detail-description">{service.extendedDescription}</p>
          </div>
          <div className="service-detail-image">
            <img src="/contactdoctor.png" alt={service.name} />
          </div>
        </div>

        <div className="service-procedures">
          <h2 className="service-section-heading">Procedures & Treatments</h2>
          <div className="service-procedures-grid">
            {service.procedures.map((procedure) => (
              <div className="service-procedure-card" key={procedure}>
                <div className="service-procedure-dot" />
                <span className="service-procedure-name">{procedure}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="service-doctors">
          <h2 className="service-section-heading">Our Specialists</h2>
          <div className="service-doctors-grid">
            {service.doctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} {...doctor} index={index} />
            ))}
          </div>
        </div>

      </div>

      <ContactCardFooter />
    </main>
  )
}

export default ServiceDetail
