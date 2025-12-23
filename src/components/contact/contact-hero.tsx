"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Calendar } from "lucide-react";

export function ContactHero() {
  return (
    <section className="bg-black min-h-[60vh] flex items-center relative overflow-hidden border-b border-gray-900">
      {/* Animated connection lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${i * 20}%`}
              y1="0%"
              x2={`${(i + 1) * 20}%`}
              y2="100%"
              stroke="#E5527B"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatDelay: 5 }}
            />
          ))}
        </svg>
      </div>

      <div className="container max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6 border border-accent/20"
          >
            <MessageSquare className="w-10 h-10 text-accent" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let&apos;s Talk
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to automate your business? Have questions about our process? 
            Want a custom proposal? We&apos;re here to help.
          </p>

          {/* Quick contact options */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </motion.a>
            <motion.a
              href="#calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-background-elevated border border-gray-900 text-white font-semibold hover:border-accent transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Discovery Call
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-gray-600 mt-8"
          >
            Average response time: <span className="text-accent font-semibold">4 hours</span> during business hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

