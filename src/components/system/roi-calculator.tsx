"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ROICalculator() {
  const [documentHours, setDocumentHours] = useState("");
  const [schedulingHours, setSchedulingHours] = useState("");
  const [communicationHours, setCommunicationHours] = useState("");
  const [reportingHours, setReportingHours] = useState("");
  const [hourlyCost, setHourlyCost] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showJoeMessage, setShowJoeMessage] = useState(false);

  const calculateROI = () => {
    const totalHours = 
      parseFloat(documentHours || "0") +
      parseFloat(schedulingHours || "0") +
      parseFloat(communicationHours || "0") +
      parseFloat(reportingHours || "0");

    if (totalHours > 0 && parseFloat(hourlyCost || "0") > 0) {
      setShowResults(true);
      if (totalHours > 30) {
        setTimeout(() => setShowJoeMessage(true), 1000);
      }
    }
  };

  const totalHours = 
    parseFloat(documentHours || "0") +
    parseFloat(schedulingHours || "0") +
    parseFloat(communicationHours || "0") +
    parseFloat(reportingHours || "0");

  const hourlyRate = parseFloat(hourlyCost || "0");
  const timeSaved = Math.round(totalHours * 0.7); // 70% automation rate
  const annualValue = Math.round(timeSaved * 52 * hourlyRate);
  const systemCost = 4500; // Average system cost
  const paybackWeeks = Math.round(systemCost / (timeSaved * hourlyRate));
  const firstYearROI = Math.round(((annualValue - systemCost) / systemCost) * 100);

  return (
    <section id="roi-calculator" className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
            <Calculator className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-gray-400">
            See exactly what your system would save
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-900 rounded-2xl p-8 md:p-12 bg-background-elevated"
        >
          {/* Input Form */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Hours/week on document processing (CV screening, invoice processing, etc.)
              </label>
              <input
                type="number"
                value={documentHours}
                onChange={(e) => setDocumentHours(e.target.value)}
                placeholder="e.g., 10"
                className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Hours/week on scheduling & coordination
              </label>
              <input
                type="number"
                value={schedulingHours}
                onChange={(e) => setSchedulingHours(e.target.value)}
                placeholder="e.g., 8"
                className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Hours/week on client/candidate communication
              </label>
              <input
                type="number"
                value={communicationHours}
                onChange={(e) => setCommunicationHours(e.target.value)}
                placeholder="e.g., 12"
                className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Hours/week on reporting & analytics
              </label>
              <input
                type="number"
                value={reportingHours}
                onChange={(e) => setReportingHours(e.target.value)}
                placeholder="e.g., 5"
                className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Average hourly cost of your team (£/hour)
              </label>
              <input
                type="number"
                value={hourlyCost}
                onChange={(e) => setHourlyCost(e.target.value)}
                placeholder="e.g., 50"
                className="w-full px-4 py-3 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <Button
            onClick={calculateROI}
            disabled={totalHours === 0 || hourlyRate === 0}
            className="w-full bg-accent hover:bg-accent/90 h-14 text-lg font-semibold disabled:opacity-50"
          >
            <TrendingUp className="mr-2 w-5 h-5" />
            Calculate Savings
          </Button>

          {/* Results */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 overflow-hidden"
              >
                <div className="border border-accent rounded-xl p-8 bg-accent/5">
                  <div className="text-center mb-6">
                    <div className="text-sm font-semibold text-accent mb-2">
                      PROJECTED SAVINGS
                    </div>
                    <p className="text-gray-400 text-sm">
                      Based on {Math.round(totalHours)} hours/week at £{hourlyRate}/hour
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-center p-6 border border-gray-900 rounded-xl bg-black">
                      <div className="text-sm text-gray-600 mb-2">Time Saved</div>
                      <div className="text-4xl font-bold text-white mb-1">
                        {timeSaved} hours
                      </div>
                      <div className="text-sm text-gray-600">per week</div>
                    </div>

                    <div className="text-center p-6 border border-gray-900 rounded-xl bg-black">
                      <div className="text-sm text-gray-600 mb-2">Annual Value</div>
                      <div className="text-4xl font-bold text-accent mb-1">
                        £{annualValue.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">per year</div>
                    </div>

                    <div className="text-center p-6 border border-gray-900 rounded-xl bg-black">
                      <div className="text-sm text-gray-600 mb-2">System Cost</div>
                      <div className="text-4xl font-bold text-white mb-1">
                        £{systemCost.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">one-time</div>
                    </div>

                    <div className="text-center p-6 border border-gray-900 rounded-xl bg-black">
                      <div className="text-sm text-gray-600 mb-2">Payback Period</div>
                      <div className="text-4xl font-bold text-white mb-1">
                        {paybackWeeks} weeks
                      </div>
                      <div className="text-sm text-gray-600">to break even</div>
                    </div>
                  </div>

                  <div className="text-center p-6 border border-accent rounded-xl bg-accent/10">
                    <div className="text-sm text-gray-400 mb-2">
                      First Year ROI
                    </div>
                    <div className="text-5xl font-bold text-accent">
                      {firstYearROI.toLocaleString()}%
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Joe Message */}
          <AnimatePresence>
            {showJoeMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 border border-accent rounded-xl p-6 bg-accent/5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white mb-2">
                      💬 Joe (AI)
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      Based on your inputs, you're spending {Math.round(totalHours)}+ hours/week 
                      on workflows we can automate. I'd recommend a {timeSaved > 30 ? "7" : timeSaved > 20 ? "6" : "5"}-workflow 
                      system focusing on document processing and scheduling first—those alone 
                      would save {Math.round((parseFloat(documentHours || "0") + parseFloat(schedulingHours || "0")) * 0.7)} hours/week.
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      Want me to design a custom system for your specific workflows?
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="#joe-chat"
                        className="text-sm text-accent hover:text-accent/80 font-semibold"
                      >
                        Yes, design my system
                      </a>
                      <button className="text-sm text-gray-600 hover:text-gray-400">
                        Show me examples
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Context Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            Calculations assume 70% automation rate based on typical system performance. 
            Actual results vary by workflow complexity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

