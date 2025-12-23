"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ResourcesCTA() {
  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-accent/20 rounded-2xl p-12 bg-gradient-to-br from-accent/5 to-transparent"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            You&apos;ve seen the research, the case studies, and the reviews. 
            Book a demo to explore how automation can transform your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 h-14 px-8"
            >
              <Link href="/get-started">
                Book Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-900 hover:bg-gray-950 h-14 px-8"
            >
              <Link href="/contact">
                <MessageSquare className="mr-2 w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

