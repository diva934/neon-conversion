import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse-neon" />
          <span className="text-sm text-muted-foreground">AI-Powered Content Engine</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-10">
          This AI system generates{" "}
          <span className="text-gradient-neon">millions of views</span>
          {" "}and turns them into real sales.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button variant="neon" size="xl" className="w-full sm:w-auto" onClick={scrollToOffer}>
            Get Started Now
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
