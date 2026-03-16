import HeroSection from "@/components/landing/HeroSection";
import ResultsSection from "@/components/landing/ResultsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import OfferSection from "@/components/landing/OfferSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ResultsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <OfferSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
