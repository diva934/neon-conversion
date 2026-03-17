import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="px-6 py-24 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
          All you need is an idea
          <br />
          <span className="text-gradient-neon">and an internet connection.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Stop scrolling. Start building your automated content machine today.
        </p>
        <a href="https://buy.stripe.com/28EcN68F77Ga8Jw6YBbEA02" target="_blank" rel="noopener noreferrer">
          <Button variant="neon" size="xl" className="w-full sm:w-auto">
            Get Started Now — $97
          </Button>
        </a>
        <p className="text-xs text-muted-foreground mt-4">Instant access · No subscriptions · 30-day guarantee</p>
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
