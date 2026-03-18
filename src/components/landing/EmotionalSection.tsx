import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const painPoints = [
  "Jumping from one idea to another with no results",
  "Overthinking everything but never executing",
  "Watching others win while you're stuck",
  "Feeling like you're wasting time every day",
];

const EmotionalSection = () => {
  const scrollToOffer = () => {
    document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* Green glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-neon/8 blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 leading-tight">
          Tired of chasing business models that never work?
        </h2>

        <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          {painPoints.map((point) => (
            <p key={point}>— {point}</p>
          ))}
        </div>

        <p className="text-foreground font-semibold text-lg mb-10">
          Nothing changes… until you decide to change something.
        </p>

        <Button variant="neon" size="xl" onClick={scrollToOffer}>
          See How It Works
        </Button>
      </motion.div>
    </section>
  );
};

export default EmotionalSection;
