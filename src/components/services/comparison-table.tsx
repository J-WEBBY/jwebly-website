"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SERVICES_DETAIL, COMPARISON_FEATURES } from "@/lib/constants/services-detail";

export function ComparisonTable() {
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
            What's Included
          </h2>
          <p className="text-xl text-gray-400">
            Compare features across all service tiers
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-900">
                <th className="text-left py-4 px-4 text-white font-semibold">
                  Feature
                </th>
                {SERVICES_DETAIL.map((service) => (
                  <th key={service.id} className="py-4 px-4 text-center">
                    <div className="text-white font-semibold">{service.name.split(' ')[0]}</div>
                    <div className="text-sm text-gray-600 font-normal">{service.price}</div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {COMPARISON_FEATURES.map((feature, index) => (
                <motion.tr
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="border-b border-gray-900 hover:bg-background-elevated transition-colors"
                >
                  <td className="py-4 px-4 text-gray-400">
                    {feature.label}
                  </td>
                  
                  {SERVICES_DETAIL.map((service) => {
                    const value = service.features[feature.id as keyof typeof service.features];
                    
                    return (
                      <td key={service.id} className="py-4 px-4 text-center">
                        {typeof value === "boolean" ? (
                          value ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: "spring", delay: index * 0.05 }}
                            >
                              <Check className="w-5 h-5 text-accent mx-auto" />
                            </motion.div>
                          ) : (
                            <X className="w-5 h-5 text-gray-800 mx-auto" />
                          )
                        ) : (
                          <span className="text-white font-medium">{String(value)}</span>
                        )}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

