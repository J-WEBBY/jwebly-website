"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResearchNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-accent/20 rounded-2xl p-12 bg-gradient-to-br from-accent/5 to-transparent text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6 border border-accent/20">
            <Mail className="w-8 h-8 text-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Weekly Research Insights
          </h2>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 2,400+ technical decision-makers receiving our weekly research digest. 
            Deep dives, data analysis, and implementation strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
            />
            <Button className="bg-accent hover:bg-accent/90 h-14 px-8 whitespace-nowrap">
              Subscribe
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

