"use client";

import { motion } from "framer-motion";
import { Users, Code, Brain, Zap } from "lucide-react";

export function AboutTeam() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4 border border-accent/20">
            <Users className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Team Behind Jwebly
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A small, focused team of AI engineers, automation specialists, and business strategists
          </p>
        </motion.div>

        {/* Team structure */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Brain,
              title: "AI Engineers",
              description: "Specialists in foundation models, fine-tuning, and autonomous agent development",
            },
            {
              icon: Code,
              title: "Automation Architects",
              description: "Experts in workflow design, system integration, and intelligent coordination",
            },
            {
              icon: Zap,
              title: "Business Strategists",
              description: "Focused on ROI, process optimization, and scaling automation effectively",
            },
          ].map((role, i) => {
            const Icon = role.icon;
            
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-gray-900 rounded-xl bg-background-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Team philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-accent/20 rounded-2xl p-8 bg-accent/5 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Small Team, Big Impact
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We&apos;re intentionally small and focused. This allows us to maintain quality, 
            build deep client relationships, and stay nimble. Every team member is hands-on 
            with client projects. No account managers, no middle layers—just direct access 
            to the people building your automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

