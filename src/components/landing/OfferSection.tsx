import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck } from "lucide-react";

const includes = [
  "Full AI Avatar Creator Suite",
  "Short-Form Video Generator (unlimited)",
  "Auto-Posting to TikTok, IG, YT Shorts",
  "Done-For-You Sales Funnel Template",
  "Digital Product Launch Playbook",
  "Private Community Access",
  "Lifetime Updates",
];

const OfferSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 sm:p-12 neon-border text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Get the full system</h2>
          <p className="text-muted-foreground mb-8">Everything you need to go from zero to revenue.</p>

          <div className="text-left space-y-3 mb-10">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-neon/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-neon" />
                </div>
                <span className="text-sm text-foreground/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="text-sm text-muted-foreground line-through mb-1">$297</div>
            <div className="text-5xl font-extrabold text-gradient-neon">$97</div>
            <div className="text-sm text-muted-foreground mt-1">One-time payment. Instant access.</div>
          </div>

          <a href="https://buy.stripe.com/28EcN68F77Ga8Jw6YBbEA02" target="_blank" rel="noopener noreferrer">
            <Button variant="neon" size="xl" className="w-full sm:w-auto mb-6">
              Get Instant Access — $97
            </Button>
          </a>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-neon" />
            30-day money-back guarantee
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
