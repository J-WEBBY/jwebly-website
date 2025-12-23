"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BuildPilotSection() {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Radiant Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-scale-cyan/20 via-scale-cyan/10 to-transparent rounded-full blur-2xl" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-semibold text-gray-600 mb-4 tracking-widest">
              BUILD AI
            </div>

            <h2 className="text-5xl md:text-6xl font-normal text-white mb-6">
              Start Your Pilot in Q1 2026
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-xl text-gray-400">
                <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                <span>£1,500-2,000</span>
              </div>
              <div className="flex items-center gap-3 text-xl text-gray-400">
                <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                <span>2-3 weeks delivery</span>
              </div>
              <div className="flex items-center gap-3 text-xl text-gray-400">
                <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                <span>Limited to 4-5 agencies</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                <Link href="/contact">
                  Book Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-900 hover:bg-gray-950"
              >
                <Link href="/services/pilot#workflows">
                  See Pilot in Action
                  <Play className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Simple Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background-elevated border border-gray-900 rounded-2xl p-12 min-h-[400px] flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-8xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark mb-4">
                Q1
              </div>
              <div className="text-2xl text-white font-semibold">
                2026 Pilots
              </div>
              <div className="text-gray-600 mt-2">
                4 spots remaining
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

