import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Video, Share2, DollarSign } from "lucide-react";

const steps = [
{
  icon: Brain,
  title: "Create your AI content creator",
  desc: "No face, no filming. Build a digital avatar that represents your brand and creates content for you."
},
{
  icon: Video,
  title: "Generate short-form content automatically",
  desc: "The system produces scroll-stopping videos ready to post — without you ever touching a camera."
},
{
  icon: Share2,
  title: "Plug in a digital product",
  desc: "Attach your offer to the content pipeline and let the built-in funnel do the selling."
},
{
  icon: DollarSign,
  title: "Drive traffic and convert into sales",
  desc: "Your content goes live, attracts viewers, and turns them into paying customers on autopilot."
}];


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
          className="text-center mb-16">
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-muted-foreground">Four steps. Zero filming. Full autopilot.</p>
        </motion.div>

        <div className="relative">
          

          <div className="space-y-12">
            {steps.map((step, i) =>
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex items-start gap-6 pl-2">
              
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neon/10 neon-border neon-glow text-left flex-row flex items-center justify-center mx-[10px]">
                  <step.icon className="w-5 h-5 text-neon" />
                </div>

                <div className="pt-2">
                  <span className="text-xs text-neon tracking-wider uppercase mb-1 block font-sans font-bold">
                    Step {i + 1}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16">
          
          <Button variant="neon" size="xl" onClick={scrollToOffer}>
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>);

};

export default HowItWorksSection;