import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="px-6 py-16 pb-24">
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
        <p className="text-lg text-muted-foreground mb-4 max-w-xl mx-auto">
          Stop scrolling. Start building your automated content machine today.
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
