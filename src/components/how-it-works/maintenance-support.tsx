"use client";

import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, Clock, Bell, Award } from "lucide-react";

const SUPPORT_FEATURES = [
  {
    icon: Shield,
    title: "Priority Support",
    description: "4-hour response time during business hours. Direct access to technical team.",
    included: "All tiers",
  },
  {
    icon: Zap,
    title: "Proactive Monitoring",
    description: "24/7 system monitoring. We catch issues before they impact your business.",
    included: "All tiers",
  },
  {
    icon: TrendingUp,
    title: "Performance Reports",
    description: "Monthly reports with metrics, insights, and optimization recommendations.",
    included: "All tiers",
  },
  {
    icon: Clock,
    title: "Free Updates",
    description: "Platform updates, security patches, and feature improvements at no cost.",
    included: "All tiers",
  },
  {
    icon: Bell,
    title: "Proactive Optimization",
    description: "Joe identifies improvement opportunities and suggests enhancements.",
    included: "System & Agent",
  },
  {
    icon: Award,
    title: "Scaling Consultation",
    description: "Strategic guidance on adding workflows or upgrading tiers.",
    included: "All tiers",
  },
];

export function MaintenanceSupport() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ongoing Support & Maintenance
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your automation is a long-term investment. We provide continuous support, 
            monitoring, and optimization.
          </p>
        </motion.div>

        {/* Support features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SUPPORT_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-900 rounded-xl bg-gradient-to-br from-background-elevated to-black"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                  {feature.description}
                </p>

                <div className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent inline-block">
                  {feature.included}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What's included section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-accent/20 rounded-2xl p-8 bg-accent/5"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            What&apos;s Included in Ongoing Support
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Technical</h4>
              <ul className="space-y-3">
                {[
                  "System uptime monitoring (99.9% SLA)",
                  "Error detection and automatic recovery",
                  "Security updates and patches",
                  "Platform compatibility maintenance",
                  "Database optimization and backups",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Strategic</h4>
              <ul className="space-y-3">
                {[
                  "Monthly performance analysis and insights",
                  "Optimization recommendations from Joe",
                  "Scaling consultation and roadmap planning",
                  "New workflow design consultation",
                  "Best practices and efficiency improvements",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-accent/20 text-center">
            <p className="text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">No recurring fees.</span> Support and 
              maintenance are included in your initial investment. Optional retainer packages 
              available for clients requiring dedicated development hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

