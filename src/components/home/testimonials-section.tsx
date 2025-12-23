"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold text-gray-600 mb-4 tracking-widest">
            CUSTOMERS
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background-elevated border border-gray-900 rounded-2xl p-12"
        >
          <Quote className="w-12 h-12 text-accent mb-6" />
          
          <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
            "Jwebly's pilot saved us 12+ hours per week. The CV screening alone 
            transformed our efficiency. We're now scaling to the full system."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-900" />
            <div>
              <div className="font-semibold text-white">Sarah Johnson</div>
              <div className="text-sm text-gray-600">Director, TalentFind Agency</div>
            </div>
          </div>
        </motion.div>

        {/* Placeholder for future customer logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-600 mb-8">
            Trusted by recruitment agencies across the West Midlands
          </p>
          {/* Customer logos would go here */}
        </motion.div>
      </div>
    </section>
  );
}


