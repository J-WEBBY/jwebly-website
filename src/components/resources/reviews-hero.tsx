"use client";

import { motion } from "framer-motion";
import { Star, Shield, Award } from "lucide-react";

export function ReviewsHero() {
  return (
    <section className="bg-black min-h-[60vh] flex items-center relative overflow-hidden border-b border-gray-900">
      {/* Floating stars background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-4 h-4 text-accent fill-accent" />
          </motion.div>
        ))}
      </div>

      <div className="container max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6 border border-accent/20"
          >
            <Shield className="w-10 h-10 text-accent" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Client Reviews
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Real testimonials from decision-makers who deployed AI automation. 
            Satisfaction ratings, ROI data, and honest feedback.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-accent fill-accent" />
                ))}
              </div>
              <div className="text-4xl font-bold text-white mb-1">4.9/5.0</div>
              <div className="text-sm text-gray-600">Based on 47 reviews</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-elevated border border-gray-900">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-gray-400">94% would recommend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-elevated border border-gray-900">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-gray-400">100% verified clients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

