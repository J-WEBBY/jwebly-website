"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CustomWorkflow {
  title: string;
  description: string;
  howItWorks: string[];
  timeSaved: string;
  accuracy: string;
}

interface CustomWorkflowGeneratorProps {
  onWorkflowsGenerated: (workflows: CustomWorkflow[]) => void;
}

export function CustomWorkflowGenerator({
  onWorkflowsGenerated,
}: CustomWorkflowGeneratorProps) {
  const [industry, setIndustry] = useState("");
  const [mainWorkflow, setMainWorkflow] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    // Validation
    if (!industry.trim() || !mainWorkflow.trim()) {
      setError("Please fill in both fields");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-workflow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          industry: industry.trim(), 
          mainWorkflow: mainWorkflow.trim() 
        }),
      });

      // Check if response is OK before parsing
      if (!response.ok) {
        let errorMessage = `Server error: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          // If response isn't JSON, use status text
          errorMessage = response.statusText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      // Parse JSON only if response is OK
      const data = await response.json();

      // Validate response
      if (!data.workflows || !Array.isArray(data.workflows) || data.workflows.length === 0) {
        throw new Error("No workflows returned from API");
      }

      // Pass workflows to parent
      onWorkflowsGenerated(data.workflows);
    } catch (err) {
      console.error("Workflow generation error:", err);
      
      // Better error messages for different error types
      let errorMessage = "Failed to generate examples. Please try again or contact us for a custom solution.";
      
      if (err instanceof TypeError && err.message.includes("fetch")) {
        errorMessage = "Network error: Could not connect to server. Please check your internet connection and try again.";
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-8 md:p-12"
      >
        {/* Header - More prominent */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            See What's Possible
          </h3>
          <p className="text-gray-400 text-lg">
            Powered by Claude AI
          </p>
        </div>

        <p className="text-gray-400 mb-8 text-center text-lg">
          Describe your business. We'll show you what's possible.
        </p>

        {/* Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Industry
            </label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="e.g., Interior Design, Logistics, HR Consultancy"
              className="w-full px-4 py-4 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none transition-colors"
              disabled={isGenerating}
            />
            <p className="text-xs text-gray-600 mt-2">
              Be specific, not generic
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Main Workflow
            </label>
            <textarea
              value={mainWorkflow}
              onChange={(e) => setMainWorkflow(e.target.value)}
              placeholder="e.g., Client onboarding, Order processing, Invoice reconciliation"
              rows={3}
              className="w-full px-4 py-4 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-600 focus:border-accent focus:outline-none transition-colors resize-none"
              disabled={isGenerating}
            />
            <p className="text-xs text-gray-600 mt-2">
              What takes most of your team's time?
            </p>
          </div>
        </div>

        {/* Error Message */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-400 text-sm leading-relaxed">
                  {error}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={isGenerating || !industry.trim() || !mainWorkflow.trim()}
          className="w-full bg-accent hover:bg-accent/90 h-14 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-3 w-5 h-5 animate-spin" />
              Generating Custom Examples...
            </>
          ) : (
            <>
              <Sparkles className="mr-3 w-5 h-5" />
              Generate Examples
            </>
          )}
        </Button>

        <p className="text-xs text-gray-600 mt-6 text-center">
          Examples are illustrative. Real pilots are customized after discovery.
        </p>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-center"
      >
        <p className="text-gray-600 text-sm">
          Not sure what to enter?{" "}
          <a href="/contact" className="text-accent hover:text-accent/80 font-semibold">
            Book a discovery call
          </a>{" "}
          and we'll assess your workflows directly.
        </p>
      </motion.div>
    </div>
  );
}


