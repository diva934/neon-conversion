import { motion } from "framer-motion";
import { User, Video, Share2, DollarSign } from "lucide-react";

const steps = [
  { icon: User, title: "Create an AI Avatar", desc: "Pick a style, upload a reference, and let AI build your on-screen persona." },
  { icon: Video, title: "Generate Short-Form Content", desc: "AI writes scripts, creates visuals, and produces scroll-stopping videos." },
  { icon: Share2, title: "Post Automatically", desc: "Schedule and publish across TikTok, Instagram, and YouTube Shorts." },
  { icon: DollarSign, title: "Monetize with a Digital Product", desc: "Attach your $97 offer and let the funnel convert viewers into buyers." },
];

const HowItWorksSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-muted-foreground">Four steps. Zero filming. Full autopilot.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon/60 via-neon/20 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex items-start gap-6 pl-2"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neon/10 neon-border flex items-center justify-center neon-glow">
                  <step.icon className="w-5 h-5 text-neon" />
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-neon tracking-wider uppercase mb-1 block">
                    Step {i + 1}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
