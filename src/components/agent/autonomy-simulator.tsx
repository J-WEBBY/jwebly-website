"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sliders, TrendingUp, AlertCircle } from "lucide-react";

export function AutonomySimulator() {
  const [weeklyDecisions, setWeeklyDecisions] = useState(500);
  const [confidenceThreshold, setConfidenceThreshold] = useState(85);

  // Calculate metrics
  const autonomousDecisions = Math.round(weeklyDecisions * (0.5 + (100 - confidenceThreshold) / 50));
  const humanReview = Math.round(weeklyDecisions * 0.17);
  const escalated = weeklyDecisions - autonomousDecisions - humanReview;
  
  const autonomousPercentage = Math.round((autonomousDecisions / weeklyDecisions) * 100);
  const humanReviewPercentage = Math.round((humanReview / weeklyDecisions) * 100);
  const escalatedPercentage = 100 - autonomousPercentage - humanReviewPercentage;

  const timeSaved = Math.round(autonomousDecisions * 0.25); // 15 minutes per decision
  const annualValue = Math.round(timeSaved * 52 * 50); // 52 weeks, £50/hour
  const agentCost = 9000;
  const roiPercentage = Math.round(((annualValue - agentCost) / agentCost) * 100);

  return (
    <section id="autonomy-simulator" className="bg-black py-32 border-t border-gray-900">
      <div className="container max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
            <Sliders className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Autonomy Simulator
          </h2>
          <p className="text-xl text-gray-400">
            See how autonomy changes based on your parameters
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-900 rounded-2xl p-8 md:p-12 bg-background-elevated"
        >
          {/* Inputs */}
          <div className="space-y-8 mb-12">
            {/* Weekly Decisions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-semibold text-white">
                  Weekly decisions your team makes
                </label>
                <div className="text-2xl font-bold text-accent">
                  {weeklyDecisions}
                </div>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={weeklyDecisions}
                onChange={(e) => setWeeklyDecisions(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-900 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>100</span>
                <span>500</span>
                <span>1,000+</span>
              </div>
            </div>

            {/* Confidence Threshold */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-semibold text-white">
                  Agent confidence threshold
                </label>
                <div className="text-2xl font-bold text-accent">
                  {confidenceThreshold}%
                </div>
              </div>
              <input
                type="range"
                min="80"
                max="95"
                step="1"
                value={confidenceThreshold}
                onChange={(e) => setConfidenceThreshold(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-900 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>80% (More autonomy)</span>
                <span>95% (Higher accuracy)</span>
              </div>
              <div className="mt-2 p-3 bg-black rounded-lg border border-gray-900">
                <p className="text-xs text-gray-400">
                  <AlertCircle className="w-4 h-4 inline mr-1 text-gray-600" />
                  Higher threshold = fewer autonomous decisions but higher accuracy. 
                  Lower threshold = more autonomous decisions but occasional edge case errors.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Breakdown */}
          <div className="mb-8">
            <div className="text-sm font-semibold text-white mb-4">
              Decision Distribution
            </div>
            <div className="relative h-16 bg-black rounded-xl overflow-hidden border border-gray-900">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${autonomousPercentage}%` }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-0 h-full bg-accent flex items-center justify-center"
              >
                {autonomousPercentage > 15 && (
                  <span className="text-sm font-semibold text-white">
                    {autonomousPercentage}% Autonomous
                  </span>
                )}
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${humanReviewPercentage}%` }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ left: `${autonomousPercentage}%` }}
                className="absolute top-0 h-full bg-yellow-600 flex items-center justify-center"
              >
                {humanReviewPercentage > 10 && (
                  <span className="text-sm font-semibold text-white">
                    {humanReviewPercentage}% Review
                  </span>
                )}
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${escalatedPercentage}%` }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ left: `${autonomousPercentage + humanReviewPercentage}%` }}
                className="absolute top-0 h-full bg-gray-700 flex items-center justify-center"
              >
                {escalatedPercentage > 8 && (
                  <span className="text-sm font-semibold text-white">
                    {escalatedPercentage}% Escalated
                  </span>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
              <div>
                <div className="text-gray-600">Autonomous</div>
                <div className="text-white font-bold">
                  ~{autonomousDecisions} decisions/week
                </div>
              </div>
              <div>
                <div className="text-gray-600">Human Review</div>
                <div className="text-white font-bold">
                  ~{humanReview} decisions/week
                </div>
              </div>
              <div>
                <div className="text-gray-600">Escalated</div>
                <div className="text-white font-bold">
                  ~{escalated} decisions/week
                </div>
              </div>
            </div>
          </div>

          {/* ROI Projection */}
          <motion.div
            key={`${weeklyDecisions}-${confidenceThreshold}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="border border-accent rounded-xl p-8 bg-accent/5"
          >
            <div className="text-center mb-6">
              <div className="text-sm font-semibold text-accent mb-2">
                ROI PROJECTION
              </div>
              <p className="text-gray-400 text-sm">
                Based on {weeklyDecisions} weekly decisions at {confidenceThreshold}% confidence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-center p-6 bg-black rounded-xl border border-gray-900">
                <div className="text-sm text-gray-600 mb-2">Time Saved</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {timeSaved} hours
                </div>
                <div className="text-sm text-gray-600">per week</div>
              </div>

              <div className="text-center p-6 bg-black rounded-xl border border-gray-900">
                <div className="text-sm text-gray-600 mb-2">Annual Value</div>
                <div className="text-4xl font-bold text-accent mb-1">
                  £{annualValue.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">per year</div>
              </div>

              <div className="text-center p-6 bg-black rounded-xl border border-gray-900">
                <div className="text-sm text-gray-600 mb-2">Agent Cost</div>
                <div className="text-4xl font-bold text-white mb-1">
                  £{agentCost.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">one-time</div>
              </div>

              <div className="text-center p-6 bg-black rounded-xl border border-gray-900">
                <div className="text-sm text-gray-600 mb-2">Payback Period</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {Math.round(agentCost / (timeSaved * 50))} weeks
                </div>
                <div className="text-sm text-gray-600">to break even</div>
              </div>
            </div>

            <div className="text-center p-6 border border-accent rounded-xl bg-accent/10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <div className="text-sm text-gray-400">First Year ROI</div>
              </div>
              <div className="text-5xl font-bold text-accent">
                {roiPercentage.toLocaleString()}%
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            Projections based on typical agent performance. Actual results vary by decision 
            complexity and data quality. Conservative estimate using £50/hour team cost.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

