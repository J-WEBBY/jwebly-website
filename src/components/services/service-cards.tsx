"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Network, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SERVICES_DETAIL } from "@/lib/constants/services-detail";

const ICONS = {
  Rocket,
  Network,
  Brain,
};

export function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES_DETAIL.map((service, index) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            const isHovered = hoveredCard === service.id;
            const isOtherHovered = hoveredCard && hoveredCard !== service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div
                  className={`
                    border rounded-2xl p-8 h-full flex flex-col
                    transition-all duration-300
                    ${isHovered 
                      ? service.featured 
                        ? "border-accent bg-background-elevated shadow-lg shadow-accent/20" 
                        : "border-gray-700 bg-background-elevated"
                      : "border-gray-900"
                    }
                    ${isOtherHovered ? "opacity-50" : "opacity-100"}
                  `}
                >
                  
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className={`
                        w-16 h-16 rounded-xl flex items-center justify-center
                        ${service.featured ? "bg-accent" : "bg-gray-900"}
                      `}
                    >
                      <Icon 
                        className={`w-8 h-8 ${service.featured ? "text-white" : "text-gray-600"}`} 
                      />
                    </div>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-400 mb-6">
                    {service.tagline}
                  </p>

                  {/* Key Stats */}
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Price</span>
                      <span className="text-white font-semibold">{service.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Timeline</span>
                      <span className="text-white font-semibold">{service.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Workflows</span>
                      <span className="text-white font-semibold">{service.workflows}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant={service.featured ? "default" : "outline"}
                    className={`w-full ${service.featured ? "bg-accent hover:bg-accent/90" : "border-gray-900"}`}
                  >
                    <Link href={`/services/${service.slug}`}>
                      Explore {service.name.split(' ')[0]}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>

                  {/* Note */}
                  {service.note && (
                    <div className="mt-4 pt-4 border-t border-gray-900">
                      <p className="text-xs text-gray-600 text-center italic">
                        {service.note}
                      </p>
                    </div>
                  )}

                  {/* Ideal For */}
                  <p className="text-xs text-gray-600 mt-4 text-center">
                    Ideal for: {service.ideal}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

