"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { USE_CASES, SERVICES_DETAIL } from "@/lib/constants/services-detail";

export function UseCaseSelector() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const selectedUseCase = USE_CASES.find(uc => uc.id === selectedCase);
  const recommendedService = selectedUseCase 
    ? SERVICES_DETAIL.find(s => {
        if (selectedUseCase.recommendation.includes("-")) {
          // For "system-or-agent", default to "system"
          return s.id === "system";
        }
        return selectedUseCase.recommendation === s.id;
      })
    : null;

  return (
    <section className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Which Service Is Right for You?
          </h2>
          <p className="text-xl text-gray-400">
            Select your goal to get a recommendation
          </p>
        </motion.div>

        <div className="space-y-4">
          {USE_CASES.map((useCase, index) => (
            <motion.button
              key={useCase.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCase(useCase.id)}
              className={`
                w-full text-left p-6 border rounded-xl transition-all
                ${selectedCase === useCase.id 
                  ? "border-accent bg-background-elevated" 
                  : "border-gray-900 hover:border-gray-800"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center
                    ${selectedCase === useCase.id ? "border-accent" : "border-gray-700"}
                  `}>
                    {selectedCase === useCase.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 rounded-full bg-accent"
                      />
                    )}
                  </div>
                  
                  <span className="text-lg text-white">{useCase.goal}</span>
                </div>

                <ChevronRight 
                  className={`w-5 h-5 transition-colors ${
                    selectedCase === useCase.id ? "text-accent" : "text-gray-600"
                  }`} 
                />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Recommendation */}
        <AnimatePresence mode="wait">
          {selectedUseCase && recommendedService && (
            <motion.div
              key={selectedCase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 p-8 border border-accent rounded-xl bg-background-elevated"
            >
              <div className="text-sm font-semibold text-accent mb-2">
                RECOMMENDED
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {recommendedService.name}
              </h3>

              <p className="text-gray-400 mb-6">
                {selectedUseCase.reason}
              </p>

              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90"
                >
                  <Link href={`/services/${recommendedService.slug}`}>
                    Explore {recommendedService.name.split(' ')[0]}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-gray-900"
                >
                  <Link href="/contact">
                    Book Discovery Call
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

