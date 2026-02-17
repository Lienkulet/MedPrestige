import React from "react";
import PagesHero from "@/components/PagesHero/PagesHero";
import DoctorCard from "@/components/DoctorCard";
import ContactCardFooter from "@/components/ContactCardFooter/ContactCardFooter";

const doctors = [
    {
        id: 1,
        name: "Dr. Jessica Joan",
        specialty: "Nephrology",
        image: "/doctor1.jpg",
        hasSocial: false,
    },
    {
        id: 2,
        name: "Dr. Alexandra",
        specialty: "Gastroenterology",
        image: "/doctor1.jpg",
        hasSocial: true,
    },
    {
        id: 3,
        name: "Dr. Kimberly Hayes",
        specialty: "Neurology",
        image: "/doctor1.jpg",
        hasSocial: false,
    },
    {
        id: 4,
        name: "Dr. Bella Carol",
        specialty: "Obstetrics",
        image: "/doctor1.jpg",
        hasSocial: true,
    },
    {
        id: 5,
        name: "Dr. Rebecca Rose",
        specialty: "Gynecology",
        image: "/doctor1.jpg",
        hasSocial: false,
    },
    {
        id: 6,
        name: "Dr. Stephanie Sue",
        specialty: "Haematology",
        image: "/doctor1.jpg",
        hasSocial: true,
    },
    {
        id: 7,
        name: "Dr. Penelope Morgan",
        specialty: "Physiotherapy",
        image: "/doctor1.jpg",
        hasSocial: false,
    },
    {
        id: 8,
        name: "Dr. Lauren Leah",
        specialty: "Oncology",
        image: "/doctor1.jpg",
        hasSocial: true,
    },
];


const MeetOurDoctors = () => {
    return (
        <main>
            <PagesHero
                title="Meet Our Doctors"
                subtitle="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing"
            />

            <section
                style={{
                    padding: "116px 0",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "30px",
                        justifyContent: "center",
                    }}
                >
                    {doctors.map((doctor, index) => (
                        <DoctorCard
                            key={doctor.id}
                            {...doctor}
                            index={index}
                        />
                    ))}
                </div>
            </section>
            <ContactCardFooter />
        </main>
    );
};

export default MeetOurDoctors;
