import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
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

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          This AI system generates{" "}
          <span className="text-gradient-neon">millions of views</span>
          {" "}and turns them into real sales.
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Create AI avatars, generate viral short-form content, and monetize on autopilot — no filming, no editing, no guesswork.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button variant="neon" size="xl" className="w-full sm:w-auto">
            Get Started Now — $97
          </Button>
          <Button variant="ghost" size="lg" className="text-muted-foreground w-full sm:w-auto">
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Join 2,400+ creators already using the system
        </p>
      </motion.div>

      {/* Video placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-16 w-full max-w-3xl mx-auto"
      >
        <div className="rounded-2xl neon-glow-strong overflow-hidden neon-border aspect-video flex items-center justify-center bg-secondary">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-neon/20 flex items-center justify-center neon-glow">
              <Play className="w-7 h-7 text-neon ml-1" />
            </div>
            <span className="text-sm text-muted-foreground">Watch how it works</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
