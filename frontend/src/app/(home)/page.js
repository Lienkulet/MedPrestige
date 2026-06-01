import HeroSection from "./HeroSection";
import HomeAnimations from "./HomeAnimations";
import AboutSection from "./AboutSection";
import ServicesSection from "./sections/ServicesSection";
import SupportGroupsSection from "./sections/SupportGroupsSection";
import WhyUsSection from "./sections/WhyUsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import StatsSection from "./sections/StatsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CtaSection from "./sections/CtaSection";
import FaqSection from "./sections/FaqSection";
import ContactCardFooter from "@/components/ContactCardFooter/ContactCardFooter";

export default function Home() {
    return (
        <main>
            <HomeAnimations />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <WhyUsSection />
            <HowItWorksSection />
            <StatsSection />
            <SupportGroupsSection />
            <TestimonialsSection />
            <CtaSection />
            <FaqSection />
            <ContactCardFooter />
        </main>
    );
}
