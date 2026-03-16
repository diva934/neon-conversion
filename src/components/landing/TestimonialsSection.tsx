import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Alex R.", text: "Made my first $400 within 3 days of posting. The AI avatars look incredibly real." },
  { name: "Sarah K.", text: "I've tried everything. This is the first system that actually delivered results without me being on camera." },
  { name: "James T.", text: "29 videos in one afternoon. I couldn't believe how fast the content was ready to post." },
  { name: "Maria L.", text: "Went from 0 to 180K views on my second video. The algorithm loves this content." },
  { name: "David P.", text: "The whole funnel is built for you. I just plugged in my offer and started getting sales." },
  { name: "Nina W.", text: "Finally a system that doesn't require me to dance on camera. Clean, professional, and it converts." },
];

const TestimonialsSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What creators are saying</h2>
          <p className="text-muted-foreground">Real feedback from real users.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-neon text-neon" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center text-xs font-bold text-neon">
                  {t.name[0]}
                </div>
                <span className="text-sm font-medium text-muted-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
