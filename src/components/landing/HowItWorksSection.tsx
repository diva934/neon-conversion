import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Video, Share2, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Stop chasing trends",
    desc: "No more jumping between business models that don't work. This system is built to last — powered by AI, not hype.",
  },
  {
    icon: Video,
    title: "Let AI create your content",
    desc: "AI writes your scripts, builds your avatar, and produces scroll-stopping videos — without you ever touching a camera.",
  },
  {
    icon: Share2,
    title: "Publish on autopilot",
    desc: "Your content goes live across TikTok, Instagram, and YouTube Shorts automatically. You focus on strategy, not posting.",
  },
  {
    icon: DollarSign,
    title: "Turn views into revenue",
    desc: "Attach your digital product, let the built-in funnel do the selling, and watch viewers become paying customers.",
  },
];

const HowItWorksSection = () => {
  const scrollToOffer = () => {
    document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
  };

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

        {/* Inspiring CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            You don't need followers. You don't need experience. You just need to start.
          </p>
          <Button variant="neon" size="xl" onClick={scrollToOffer}>
            Start Building Your System
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
