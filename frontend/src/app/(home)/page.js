import HeroSection from "./HeroSection";
import HomeAnimations from "./HomeAnimations";
import AboutSection from "./AboutSection";
import ServicesSection from "./sections/ServicesSection";
import SupportGroupsSection from "./sections/SupportGroupsSection";
import WhyUsSection from "./sections/WhyUsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import StatsSection from "./sections/StatsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FaqSection from "./sections/FaqSection";
import BookSection from "@/components/common/BookSection/BookSection";

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
            <FaqSection />
            <BookSection />
        </main>
    );
}
