"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function CalendarEmbed() {
  return (
    <section id="calendar" className="bg-black py-32 border-b border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4 border border-accent/20">
            <Calendar className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Time
          </h2>
          <p className="text-lg text-gray-400">
            Select a convenient slot from our calendar. Instant confirmation.
          </p>
        </motion.div>

        {/* Calendar embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-900 rounded-2xl p-12 bg-gradient-to-br from-background-elevated to-black min-h-[600px] flex items-center justify-center"
        >
          <div className="text-center">
            <Calendar className="w-16 h-16 text-gray-700 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">
              Calendar Integration Coming Soon
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              For now, please use the contact form or email us at{" "}
              <a href="mailto:contact@jwebly.co.uk" className="text-accent hover:underline">
                contact@jwebly.co.uk
              </a>{" "}
              to schedule your discovery call.
            </p>
            <div className="text-sm text-gray-600">
              We typically respond within 4 hours with available time slots
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-600 mt-6"
        >
          Prefer to schedule via email? Send your availability to{" "}
          <a href="mailto:contact@jwebly.co.uk" className="text-accent hover:underline">
            contact@jwebly.co.uk
          </a>
        </motion.p>
      </div>
    </section>
  );
}

