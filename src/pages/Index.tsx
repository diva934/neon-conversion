import HeroSection from "@/components/landing/HeroSection";
import EmotionalSection from "@/components/landing/EmotionalSection";
import ResultsSection from "@/components/landing/ResultsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import OfferSection from "@/components/landing/OfferSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EmotionalSection />
      <ResultsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
      <OfferSection />
    </div>
  );
};

export default Index;
