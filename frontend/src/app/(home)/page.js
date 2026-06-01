import HeroSection from "./HeroSection";
import HomeAnimations from "./HomeAnimations";
import AboutSection from "./AboutSection";
import ServicesSection from "./sections/ServicesSection";
import SupportGroupsSection from "./sections/SupportGroupsSection";
import ContactCardFooter from "@/components/common/ContactCardFooter/ContactCardFooter";
import DoctorsSectionClient from "@/components/common/DoctorsSection/DoctorsSectionClient";

export default function Home() {
    return (
        <main>
            <HomeAnimations />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <SupportGroupsSection />
            {/* <DoctorsSectionClient /> */}
            <ContactCardFooter />
        </main>
    );
}
