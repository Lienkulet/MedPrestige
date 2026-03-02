import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./sections/ServicesSection";
import SupportGroupsSection from "./sections/SupportGroupsSection";
import ContactCardFooter from "@/components/ContactCardFooter/ContactCardFooter";
import DoctorsSection from "@/components/DoctorsSection/DoctorsSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <SupportGroupsSection />
            <DoctorsSection />
            <ContactCardFooter />
        </main>
    );
}
