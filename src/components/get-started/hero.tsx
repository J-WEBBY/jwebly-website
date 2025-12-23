"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";

export function GetStartedHero() {
  return (
    <section className="bg-black min-h-[70vh] flex items-center relative overflow-hidden border-b border-gray-900">
      {/* Animated calendar grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-7 gap-4 p-8">
          {[...Array(35)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="aspect-square rounded-lg border border-accent"
            />
          ))}
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-6 py-20 relative z-10">
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
            <Calendar className="w-10 h-10 text-accent" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Book Your Discovery Call
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            1-hour deep dive into your business. We'll map your processes, identify automation 
            opportunities, and design a custom solution. No pressure, no commitment.
          </p>

          {/* What to expect */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-background-elevated border border-gray-900"
            >
              <Clock className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-2xl font-bold text-white mb-1">1 Hour</div>
              <div className="text-sm text-gray-600">Deep dive session</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-xl bg-background-elevated border border-gray-900"
            >
              <Video className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-2xl font-bold text-white mb-1">Video Call</div>
              <div className="text-sm text-gray-600">Google Meet link sent</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-xl bg-background-elevated border border-gray-900"
            >
              <CheckCircle className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-2xl font-bold text-white mb-1">No Commitment</div>
              <div className="text-sm text-gray-600">Just exploration</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-6 rounded-xl bg-background-elevated border border-gray-900"
            >
              <Calendar className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-2xl font-bold text-white mb-1">48 Hours</div>
              <div className="text-sm text-gray-600">Until proposal</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-gray-600"
          >
            Available Mon-Fri, 9am-6pm GMT • Instant confirmation
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

