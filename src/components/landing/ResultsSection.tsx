import { motion } from "framer-motion";

const results = [
  { number: "4.8M", label: "Views Generated", context: "Using AI-powered reels" },
  { number: "+$1,940", label: "First-Week Sales", context: "$27 to $597 digital offers" },
  { number: "29", label: "Videos Created", context: "In a single batch" },
  { number: "12", label: "AI Avatars", context: "Launched in one week" },
];

const ResultsSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real results. Real numbers.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here's what creators are achieving with the system — in their first week.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-gradient-neon mb-2">{r.number}</div>
              <div className="font-semibold text-foreground mb-1">{r.label}</div>
              <div className="text-sm text-muted-foreground">{r.context}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
