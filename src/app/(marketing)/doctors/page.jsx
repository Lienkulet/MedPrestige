import React from "react";
import PagesHero from "@/components/PagesHero/PagesHero";
import DoctorCard from "@/components/DoctorsCard/DoctorCard";
import ContactCardFooter from "@/components/ContactCardFooter/ContactCardFooter";
import DoctorsCard from "@/components/DoctorsCard/DoctorsCard";

const MeetOurDoctors = () => {
    return (
        <main>
            <PagesHero
                title="Meet Our Doctors"
                subtitle="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing"
            />
            <DoctorsCard />
            <ContactCardFooter />
        </main>
    );
};

export default MeetOurDoctors;
