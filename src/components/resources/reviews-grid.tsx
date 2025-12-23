"use client";

import { motion } from "framer-motion";
import { Star, Building2, MapPin } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    company: "TalentFlow Recruitment",
    industry: "Recruitment",
    location: "Manchester, UK",
    rating: 5,
    service: "Pilot → System → Agent",
    reviewer: {
      name: "Sarah Mitchell",
      title: "Operations Director",
    },
    review: "We started with the pilot to test CV screening. Within 2 weeks, we saw 12 hours saved per week and moved to the full system. 9 months later, we deployed the autonomous agent. The progression made sense - each tier proved ROI before scaling. Now running 80% autonomously.",
    results: {
      timeSaved: "38 hrs/week",
      roi: "612%",
      payback: "11 weeks",
    },
    date: "November 2024",
  },
  {
    id: 2,
    company: "Precision Accounting",
    industry: "Accounting",
    location: "Birmingham, UK",
    rating: 5,
    service: "Intelligent System",
    reviewer: {
      name: "David Chen",
      title: "Managing Partner",
    },
    review: "The 7-workflow system handles everything from invoice processing to tax prep. What impressed me most was the training phase - they studied our actual processes for 2 weeks before building anything. The result feels custom-built, not template-based. Processing 400+ invoices per month with 99% accuracy.",
    results: {
      timeSaved: "47 hrs/week",
      roi: "538%",
      accuracy: "99.1%",
    },
    date: "October 2024",
  },
  {
    id: 3,
    company: "Sterling Legal LLP",
    industry: "Legal",
    location: "London, UK",
    rating: 5,
    service: "Autonomous Agent",
    reviewer: {
      name: "James Robertson",
      title: "Senior Partner",
    },
    review: "Skeptical at first—'AI can't understand legal nuance.' Wrong. The agent handles contract review with 94% confidence, flags risks we'd flag manually, and learns from our feedback. It's not replacing lawyers, it's giving us 30+ hours back per week to do actual legal work instead of initial reviews.",
    results: {
      timeSaved: "32 hrs/week",
      roi: "487%",
      confidence: "94%",
    },
    date: "September 2024",
  },
  {
    id: 4,
    company: "Velocity Marketing",
    industry: "Marketing",
    location: "Leeds, UK",
    rating: 5,
    service: "Intelligent System",
    reviewer: {
      name: "Emma Thompson",
      title: "Founder & CEO",
    },
    review: "The budget allocation system is genuinely intelligent. It doesn't just execute rules - it analyzes performance patterns and makes judgment calls. Last month it shifted £8K from an underperforming Google campaign to LinkedIn autonomously. That decision alone saved us 2 weeks of wasted spend. ROI paid for itself in 9 weeks.",
    results: {
      timeSaved: "28 hrs/week",
      roi: "523%",
      payback: "9 weeks",
    },
    date: "August 2024",
  },
  {
    id: 5,
    company: "PropertyCo Estate Agents",
    industry: "Real Estate",
    location: "Bristol, UK",
    rating: 5,
    service: "Implementation Pilot",
    reviewer: {
      name: "Michael Foster",
      title: "Branch Manager",
    },
    review: "Started with the pilot - property matching and viewing coordination. Two workflows, £1,800 investment. Saved us 14 hours per week immediately. We're now planning the full system rollout. The pilot approach is brilliant - low risk way to prove value before committing to the bigger investment.",
    results: {
      timeSaved: "14 hrs/week",
      roi: "441%",
      payback: "8 weeks",
    },
    date: "December 2024",
  },
  {
    id: 6,
    company: "Apex Consulting",
    industry: "Marketing",
    location: "Edinburgh, UK",
    rating: 4,
    service: "Intelligent System",
    reviewer: {
      name: "Rachel Green",
      title: "Operations Manager",
    },
    review: "Very happy overall. The system handles campaign monitoring and reporting brilliantly - saves us 22 hours per week. Only reason not 5 stars: integration with our legacy CRM took 3 weeks longer than expected. But once live, it's been rock solid for 6 months. Would definitely recommend, just pad the timeline if you have older systems.",
    results: {
      timeSaved: "22 hrs/week",
      roi: "398%",
      integration: "Complex",
    },
    date: "July 2024",
  },
];

export function ReviewsGrid() {
  return (
    <section className="bg-black py-20">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          {REVIEWS.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-900 rounded-2xl p-8 bg-gradient-to-br from-background-elevated to-black hover:border-accent/30 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-bold text-white">{review.company}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{review.industry}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{review.location}</span>
                    </div>
                    <span>•</span>
                    <span>{review.service}</span>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-accent fill-accent" : "text-gray-800"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{review.review}"
              </p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-black rounded-xl border border-gray-900 mb-6">
                {Object.entries(review.results).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-accent mb-1">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-900">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {review.reviewer.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {review.reviewer.title}
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  {review.date}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

