"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { SERVICES_DETAIL } from "@/lib/constants/services-detail";

export function PricingDetail() {
  const pilot = SERVICES_DETAIL.find(s => s.id === "pilot");
  const system = SERVICES_DETAIL.find(s => s.id === "system");
  const agent = SERVICES_DETAIL.find(s => s.id === "agent");

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            No hidden fees. No surprises. Just clear, upfront pricing.
          </p>
        </motion.div>

        <div className="space-y-6">
          
          {/* Pilot Pricing */}
          {pilot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-900 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {pilot.name}
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Price</span>
                  <span className="text-white font-semibold text-xl">{pilot.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Timeline</span>
                  <span className="text-white font-semibold text-xl">{pilot.timeline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Workflows</span>
                  <span className="text-white font-semibold text-xl">{pilot.workflows}</span>
                </div>
              </div>

              {pilot.note && (
                <div className="flex items-start gap-2 text-sm text-gray-600 bg-background-elevated p-4 rounded-lg">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>{pilot.note}</p>
                </div>
              )}
            </motion.div>
          )}

          {/* System Pricing */}
          {system && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-accent rounded-xl p-8 bg-background-elevated"
            >
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {system.name}
                </h3>
                <div className="text-xs font-semibold text-accent border border-accent/30 rounded-full px-2 py-1">
                  MOST POPULAR
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Price</span>
                  <span className="text-white font-semibold text-xl">{system.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Timeline</span>
                  <span className="text-white font-semibold text-xl">{system.timeline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Workflows</span>
                  <span className="text-white font-semibold text-xl">{system.workflows}</span>
                </div>
              </div>

              {system.note && (
                <div className="flex items-start gap-2 text-sm text-gray-600 bg-black p-4 rounded-lg">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>{system.note}</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Agent Pricing */}
          {agent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-gray-900 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {agent.name}
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Price</span>
                  <span className="text-white font-semibold text-xl">{agent.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Timeline</span>
                  <span className="text-white font-semibold text-xl">{agent.timeline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Deliverable</span>
                  <span className="text-white font-semibold text-xl">{agent.deliverables[0]}</span>
                </div>
              </div>

              {agent.note && (
                <div className="flex items-start gap-2 text-sm text-gray-600 bg-background-elevated p-4 rounded-lg">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>{agent.note}</p>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Why the Range */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="text-gray-600 hover:text-gray-400 text-sm flex items-center gap-2 mx-auto">
            <Info className="w-4 h-4" />
            Why the price range? Pricing depends on complexity, integrations, and customization needs.
          </button>
        </motion.div>
      </div>
    </section>
  );
}

