import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
          You've tried everything.
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          <p>
            Dropshipping. Print-on-demand. Affiliate marketing. Freelancing. You jumped from one business model to the next — spending months learning, building, and hoping something would finally stick.
          </p>
          <p>
            But the results never matched the effort. The gurus made it look easy. It wasn't.
          </p>
          <p className="text-foreground font-semibold">
            What if the problem was never you — but the system you were using?
          </p>
          <p>
            This is different. One AI-powered system that creates content, builds your audience, and sells your product — on autopilot. No filming. No guessing. No burnout.
          </p>
        </div>

        <Button variant="neon" size="xl" onClick={scrollToOffer}>
          See How It Works
        </Button>
      </motion.div>
    </section>
  );
};

export default EmotionalSection;
