"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Zap } from "lucide-react";

export function AboutStory() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Jwebly started with a simple observation and a bold mission
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
              <Lightbulb className="w-7 h-7 text-blue-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Problem We Saw
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Enterprise companies had sophisticated AI systems—autonomous agents making decisions, 
                learning from outcomes, and scaling operations. Meanwhile, SMEs were stuck with basic 
                automation tools or couldn&apos;t afford the £50K+ price tags of custom AI development.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The gap wasn&apos;t technical capability. It was accessibility. The best automation 
                was trapped behind enterprise budgets and complex implementations.
              </p>
            </div>
          </motion.div>

          {/* The Insight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Insight
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We realized foundation models (like Claude and GPT-4) had reached a tipping point. 
                With the right implementation methodology, we could deliver enterprise-grade autonomous 
                AI at SME prices—not by cutting corners, but by standardizing the smart parts and 
                customizing what matters.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The technical infrastructure was commoditizing. The real value was in understanding 
                business processes, designing intelligent workflows, and deploying systems that 
                actually learn and improve.
              </p>
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
              <Zap className="w-7 h-7 text-green-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                What We Built
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Jwebly is a tiered approach to AI automation. Start with a £1.5K pilot to prove ROI. 
                Scale to a £3-5K intelligent system when ready. Deploy £7-12K autonomous agents when 
                you need true decision-making intelligence.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We paired this with Joe—an AI implementation partner that guides clients from 
                discovery to deployment and beyond. Not a chatbot. A genuine co-pilot that makes 
                enterprise-grade automation accessible to companies of any size.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 border border-accent/20 rounded-2xl bg-accent/5 text-center"
        >
          <p className="text-2xl font-bold text-white mb-4">
            &quot;Every business deserves access to intelligent automation, 
            not just those with enterprise budgets.&quot;
          </p>
          <p className="text-gray-400">
            — Jwebly founding principle
          </p>
        </motion.div>
      </div>
    </section>
  );
}

