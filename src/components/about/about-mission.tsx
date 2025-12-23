"use client";

import { motion } from "framer-motion";

export function AboutMission() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Make enterprise-grade AI automation <span className="text-accent font-semibold">accessible</span>, 
            {" "}<span className="text-accent font-semibold">affordable</span>, and 
            {" "}<span className="text-accent font-semibold">genuinely intelligent</span> for every business.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Accessible", desc: "No technical expertise required. Joe guides you through everything." },
              { title: "Affordable", desc: "Tiered pricing from £1.5K. Start small, scale when ready." },
              { title: "Intelligent", desc: "Real AI that learns, adapts, and improves—not just rule-based automation." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-gray-900 rounded-xl bg-background-elevated"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

