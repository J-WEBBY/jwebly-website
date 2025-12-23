export interface DecisionDomain {
  id: string;
  title: string;
  description: string;
  complexity: "low" | "medium" | "high";
  weeklyDecisions: number;
  industry: string[];
  examples: {
    scenario: string;
    agentDecision: string;
    reasoning: string;
    confidence: number;
  }[];
}

export const DECISION_DOMAINS: DecisionDomain[] = [
  {
    id: "candidate-evaluation",
    title: "Candidate Evaluation",
    description: "Autonomous CV screening with approve/reject/request-more decisions",
    complexity: "high",
    weeklyDecisions: 80,
    industry: ["recruitment"],
    examples: [
      {
        scenario: "CV: 5 years experience, skills match 87%, culture fit unclear",
        agentDecision: "Request video introduction",
        reasoning: "Technical qualifications strong (87% match). Experience level appropriate. Cultural fit uncertain - standard video interview can assess. Similar profiles with 85%+ match have 73% success rate when video added.",
        confidence: 89,
      },
      {
        scenario: "CV: 2 years experience, skills match 92%, internal referral",
        agentDecision: "Auto-schedule interview",
        reasoning: "Skills match exceptional (92%). Internal referral adds credibility. Experience slightly below target but skills compensate. Referrals from this employee have 81% success rate.",
        confidence: 94,
      },
    ],
  },
  {
    id: "budget-allocation",
    title: "Budget Allocation",
    description: "Real-time budget reallocation based on performance data",
    complexity: "high",
    weeklyDecisions: 45,
    industry: ["marketing", "accounting"],
    examples: [
      {
        scenario: "Campaign A: 2.1x ROAS, Campaign B: 0.8x ROAS, £5K available",
        agentDecision: "Shift £3K from B to A, pause B temporarily",
        reasoning: "Campaign A consistently outperforming (2.1x vs 1.5x target). Campaign B underperforming for 3 weeks. Historical data shows A scales well up to £10K/week. Reallocating maximizes ROI while gathering data on B's performance floor.",
        confidence: 91,
      },
    ],
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    description: "Automated risk scoring with escalation for high-risk items",
    complexity: "high",
    weeklyDecisions: 120,
    industry: ["legal", "accounting"],
    examples: [
      {
        scenario: "Contract: Non-standard liability clause, £150K value, new client",
        agentDecision: "Flag for senior review",
        reasoning: "Liability clause deviates from standard template (risk +15%). Contract value exceeds auto-approve threshold (£100K). New client = limited relationship history. Similar non-standard clauses flagged 67% of time - prudent to escalate.",
        confidence: 87,
      },
      {
        scenario: "Contract: Standard terms, £45K value, repeat client (3 years)",
        agentDecision: "Auto-approve",
        reasoning: "All clauses match standard template (risk score: 12/100). Value within auto-approve limit. Client has 3-year history with zero contract disputes. Standard approval takes 2-3 days - auto-approval saves time with minimal risk.",
        confidence: 96,
      },
    ],
  },
  {
    id: "priority-routing",
    title: "Priority Routing",
    description: "Intelligent task prioritization and assignment",
    complexity: "medium",
    weeklyDecisions: 200,
    industry: ["recruitment", "legal", "accounting", "marketing", "estate"],
    examples: [
      {
        scenario: "Task: Client inquiry, SLA: 24hrs, Team capacity: 70%, Client tier: Gold",
        agentDecision: "Assign to senior team member, mark urgent",
        reasoning: "Gold tier client = priority handling. Current capacity allows immediate attention. Senior assignment ensures quality. SLA comfortable but Gold clients expect faster response. Historical data: Gold clients assigned to seniors have 94% satisfaction vs 81% for junior staff.",
        confidence: 92,
      },
    ],
  },
  {
    id: "content-generation",
    title: "Content Generation",
    description: "Autonomous content creation with brand voice consistency",
    complexity: "medium",
    weeklyDecisions: 60,
    industry: ["marketing", "recruitment", "estate"],
    examples: [
      {
        scenario: "Job posting: Senior Developer role, tech stack: React/Node, budget: £70K",
        agentDecision: "Generate posting with technical emphasis, highlight remote work",
        reasoning: "Developer roles require technical specificity. £70K competitive for mid-senior level. Company offers remote work (key attractor for tech roles). Generated content will emphasize technical challenges, growth opportunities, and flexible work. Similar postings averaged 23 qualified applicants.",
        confidence: 88,
      },
    ],
  },
  {
    id: "customer-response",
    title: "Customer Response",
    description: "Autonomous customer inquiry handling with escalation logic",
    complexity: "medium",
    weeklyDecisions: 150,
    industry: ["estate", "accounting", "marketing"],
    examples: [
      {
        scenario: "Inquiry: Property viewing request, availability: Yes, buyer: pre-qualified",
        agentDecision: "Auto-schedule viewing, send confirmation",
        reasoning: "Standard viewing request. Property available. Buyer pre-qualified (financial risk low). Agent can coordinate all parties. Similar auto-scheduled viewings have 89% attendance rate vs 76% for manual scheduling (faster response = higher commitment).",
        confidence: 93,
      },
    ],
  },
  {
    id: "quality-control",
    title: "Quality Control",
    description: "Automated QA with pass/fail/re-review decisions",
    complexity: "medium",
    weeklyDecisions: 180,
    industry: ["accounting", "legal", "marketing"],
    examples: [
      {
        scenario: "Document: Invoice, accuracy check: 2 mismatches, value: £8,500",
        agentDecision: "Flag for review",
        reasoning: "2 mismatches exceeds threshold (max 1 for auto-approval). Invoice value significant (>£5K). Mismatches in line items could indicate systematic error. Human review required for values >£5K with anomalies. Cost of review (15 min) justified by risk mitigation.",
        confidence: 95,
      },
    ],
  },
  {
    id: "pricing-decisions",
    title: "Pricing Decisions",
    description: "Dynamic pricing and negotiation within parameters",
    complexity: "high",
    weeklyDecisions: 35,
    industry: ["estate", "accounting", "marketing"],
    examples: [
      {
        scenario: "Quote request: £12K project, client history: 3 projects, margin target: 35%",
        agentDecision: "Quote £11,200 (7% discount)",
        reasoning: "Client has 3-project history (loyal). Average project value £10K - this is larger. 7% discount maintains 32% margin (close to 35% target). Discount signals value for loyalty. Similar repeat-client discounts have 87% acceptance rate vs 72% for standard pricing.",
        confidence: 86,
      },
    ],
  },
];

export const AGENT_TIMELINE = [
  {
    weeks: "1-3",
    title: "Training Phase",
    description: "Agent learns from your historical decisions",
    tasks: [
      "Analyze 3-6 months of historical decisions (minimum 500 decisions)",
      "Identify decision patterns, edge cases, and success metrics",
      "Build initial agent model with confidence scoring",
      "Define escalation thresholds and human-in-loop triggers",
    ],
    autonomyLevel: "0% (Learning only)",
    yourTime: "10-12 hours",
    ourTime: "60-80 hours",
  },
  {
    weeks: "4-6",
    title: "Supervised Learning",
    description: "Agent makes suggestions, you provide feedback",
    tasks: [
      "Agent suggests decisions, you approve/reject/modify",
      "Agent learns from your feedback in real-time",
      "Confidence scores improve with each decision",
      "Edge case handling refined based on your judgment",
    ],
    autonomyLevel: "30-40% (Supervised)",
    yourTime: "8-10 hours",
    ourTime: "40-50 hours",
  },
  {
    weeks: "7-9",
    title: "Semi-Autonomous",
    description: "Agent handles high-confidence decisions independently",
    tasks: [
      "Agent makes decisions above confidence threshold (typically 85%)",
      "Low-confidence decisions escalated for human review",
      "Continuous learning from both autonomous and reviewed decisions",
      "Performance monitoring dashboards active",
    ],
    autonomyLevel: "60-70% (Semi-autonomous)",
    yourTime: "4-6 hours",
    ourTime: "30-40 hours",
  },
  {
    weeks: "10-12",
    title: "Full Deployment",
    description: "Agent runs autonomously with oversight",
    tasks: [
      "Agent handles 70-85% of decisions autonomously",
      "Human oversight only for flagged decisions and edge cases",
      "Weekly performance reviews and model updates",
      "Ongoing optimization based on outcomes",
    ],
    autonomyLevel: "70-85% (Autonomous)",
    yourTime: "2-4 hours",
    ourTime: "20-30 hours (ongoing)",
  },
];

export const CAPABILITIES_COMPARISON = [
  {
    capability: "Execute workflows",
    pilot: true,
    system: true,
    agent: true,
    description: "Run predefined automation sequences",
  },
  {
    capability: "Connect workflows",
    pilot: false,
    system: true,
    agent: true,
    description: "Share data between workflows",
  },
  {
    capability: "Learn from data",
    pilot: false,
    system: false,
    agent: true,
    description: "Improve performance based on outcomes",
  },
  {
    capability: "Make decisions",
    pilot: false,
    system: false,
    agent: true,
    description: "Choose between options autonomously",
  },
  {
    capability: "Adapt strategies",
    pilot: false,
    system: false,
    agent: true,
    description: "Change approach based on results",
  },
  {
    capability: "Predict outcomes",
    pilot: false,
    system: false,
    agent: true,
    description: "Forecast results before action",
  },
  {
    capability: "Self-optimize",
    pilot: false,
    system: false,
    agent: true,
    description: "Improve without human intervention",
  },
  {
    capability: "Handle edge cases",
    pilot: false,
    system: false,
    agent: true,
    description: "Reason through unexpected scenarios",
  },
  {
    capability: "Explain reasoning",
    pilot: false,
    system: false,
    agent: true,
    description: "Show why decisions were made",
  },
];

export const INDUSTRY_AGENTS = {
  recruitment: {
    name: "Recruitment Agent",
    description: "Autonomous candidate evaluation and pipeline management",
    decisions: [
      {
        type: "CV Evaluation",
        scenario: "CV arrives: 5 yrs exp, 87% skills match, unclear culture fit",
        agentThinking: [
          "Analyzing technical qualifications... 87% match detected",
          "Checking experience level... 5 years meets requirement",
          "Evaluating culture fit indicators... insufficient data",
          "Comparing to similar successful hires... 73% success rate for 85%+ match with video",
          "Decision: Request video introduction to assess culture fit",
        ],
        decision: "Request video introduction",
        confidence: 89,
        reasoning: "Technical qualifications strong. Experience appropriate. Cultural fit uncertain - video interview standard for this scenario. Historical success rate supports decision.",
      },
      {
        type: "Interview Scheduling",
        scenario: "Candidate approved, 3 interviewers, budget: urgent",
        agentThinking: [
          "Checking interviewer availability... 2/3 available tomorrow",
          "Analyzing urgency signal... role marked urgent, 3-week vacancy",
          "Evaluating candidate momentum... applied 2 days ago (high interest)",
          "Comparing scheduling strategies... fast scheduling = 34% higher acceptance",
          "Decision: Schedule for tomorrow, find alternate for 3rd interviewer",
        ],
        decision: "Schedule interview for tomorrow",
        confidence: 92,
        reasoning: "Urgency high. Candidate interest fresh. Fast response increases offer acceptance. Historical data supports aggressive scheduling for urgent roles.",
      },
    ],
    autonomyMetrics: {
      weeklyDecisions: 280,
      autonomousPercentage: 76,
      timeSaved: "38 hours/week",
      accuracyRate: "94%",
    },
  },
  accounting: {
    name: "Accounting Agent",
    description: "Autonomous invoice processing and financial decision-making",
    decisions: [
      {
        type: "Invoice Approval",
        scenario: "Invoice: £8,500, vendor: regular, 2 line item mismatches",
        agentThinking: [
          "Scanning invoice data... 2 mismatches detected",
          "Checking vendor history... regular vendor, 18-month relationship",
          "Analyzing mismatch type... pricing discrepancy on 2 items",
          "Evaluating risk... >£5K value + mismatches = review required",
          "Decision: Flag for human review with highlighted discrepancies",
        ],
        decision: "Flag for human review",
        confidence: 95,
        reasoning: "2 mismatches exceed auto-approval threshold (max 1). Value significant. Pricing discrepancies could be negotiated rate changes or errors. 15-minute review justified by risk.",
      },
      {
        type: "Budget Reallocation",
        scenario: "Month-end: Department A under by £12K, Department B over by £8K",
        agentThinking: [
          "Analyzing variance patterns... A consistently under (3 months)",
          "Checking B's overage... one-time equipment purchase",
          "Evaluating reallocation impact... improves overall variance",
          "Reviewing approval authority... within automatic threshold (£15K)",
          "Decision: Reallocate £8K from A to B, flag A's trend for planning",
        ],
        decision: "Approve reallocation + flag trend",
        confidence: 88,
        reasoning: "One-time overage in B justified (equipment). A's consistent underspend suggests budget inefficiency. Reallocation improves accuracy. Trend flagged for strategic review.",
      },
    ],
    autonomyMetrics: {
      weeklyDecisions: 320,
      autonomousPercentage: 81,
      timeSaved: "42 hours/week",
      accuracyRate: "96%",
    },
  },
  legal: {
    name: "Legal Agent",
    description: "Autonomous contract review and risk assessment",
    decisions: [
      {
        type: "Contract Risk Assessment",
        scenario: "Contract: Non-standard liability clause, £150K value, new client",
        agentThinking: [
          "Analyzing contract clauses... 1 non-standard liability clause detected",
          "Comparing to template... 15% deviation from standard",
          "Evaluating contract value... £150K exceeds auto-approve limit (£100K)",
          "Checking client history... new client, no prior relationship",
          "Decision: Escalate to senior attorney with risk summary",
        ],
        decision: "Flag for senior review",
        confidence: 87,
        reasoning: "Non-standard clause increases risk (+15%). Value exceeds threshold. New client = unknown. Similar cases escalated 67% of time. Prudent to involve senior expertise.",
      },
      {
        type: "Case Priority Assignment",
        scenario: "New case: Standard employment dispute, client: 5-year relationship",
        agentThinking: [
          "Classifying case type... employment dispute (standard category)",
          "Checking attorney availability... 2 attorneys with employment specialty",
          "Evaluating client tier... 5-year relationship, gold tier",
          "Analyzing case complexity... standard (similar to 47 past cases)",
          "Decision: Assign to senior employment attorney, standard priority",
        ],
        decision: "Assign to senior attorney",
        confidence: 91,
        reasoning: "Standard case type but gold tier client. Senior assignment ensures quality. Complexity doesn't require partner involvement. Assignment strategy balances efficiency with client expectations.",
      },
    ],
    autonomyMetrics: {
      weeklyDecisions: 195,
      autonomousPercentage: 68,
      timeSaved: "28 hours/week",
      accuracyRate: "93%",
    },
  },
  marketing: {
    name: "Marketing Agent",
    description: "Autonomous campaign optimization and budget allocation",
    decisions: [
      {
        type: "Budget Reallocation",
        scenario: "Campaign A: 2.1x ROAS, Campaign B: 0.8x ROAS, £5K available",
        agentThinking: [
          "Analyzing campaign performance... A outperforming by 163%",
          "Checking historical scaling... A performs well up to £10K/week",
          "Evaluating B's trend... underperforming for 3 consecutive weeks",
          "Calculating optimal allocation... shift £3K to A, pause B temporarily",
          "Decision: Reallocate £3K from B to A, monitor B for 1 week",
        ],
        decision: "Shift £3K from B to A",
        confidence: 91,
        reasoning: "A consistently outperforms and scales well. B's 3-week underperformance suggests structural issue. Reallocation maximizes ROI. Temporary pause gathers data on performance floor.",
      },
      {
        type: "Ad Creative Selection",
        scenario: "New campaign: Product launch, audience: 25-34, budget: £8K",
        agentThinking: [
          "Analyzing audience demographics... 25-34, tech-savvy, mobile-first",
          "Reviewing creative performance... video ads +34% engagement for this segment",
          "Checking budget constraints... £8K supports mixed creative strategy",
          "Comparing past launches... video + carousel combination optimal",
          "Decision: 60% video, 40% carousel, test both in first week",
        ],
        decision: "60% video, 40% carousel",
        confidence: 87,
        reasoning: "Video performs best with target demo. Carousel provides product detail. 60/40 split allows testing while prioritizing proven format. First-week data will refine allocation.",
      },
    ],
    autonomyMetrics: {
      weeklyDecisions: 245,
      autonomousPercentage: 79,
      timeSaved: "35 hours/week",
      accuracyRate: "91%",
    },
  },
  estate: {
    name: "Real Estate Agent",
    description: "Autonomous property matching and buyer engagement",
    decisions: [
      {
        type: "Property Matching",
        scenario: "New listing: 3-bed, £450K, area: Edgbaston, buyer pool: 23 active",
        agentThinking: [
          "Analyzing listing attributes... 3-bed, £450K, Edgbaston location",
          "Scanning buyer preferences... 23 active buyers in price range",
          "Matching criteria... 7 buyers match all requirements",
          "Evaluating urgency... 4 buyers active >60 days (high intent)",
          "Decision: Send personalized alerts to 7 matched buyers, prioritize 4 urgent",
        ],
        decision: "Alert 7 buyers (prioritize 4)",
        confidence: 93,
        reasoning: "7 buyers match all criteria. 4 show high intent (active >60 days). Personalized alerts have 42% viewing request rate vs 18% for generic. Prioritization ensures fastest response.",
      },
      {
        type: "Viewing Coordination",
        scenario: "Viewing request: Buyer pre-qualified, property available, owner: flexible",
        agentThinking: [
          "Checking buyer qualification... pre-qualified, mortgage approved",
          "Verifying property availability... owner flexible on timing",
          "Analyzing optimal scheduling... weekday afternoon has highest attendance",
          "Comparing coordination methods... auto-scheduling +13% attendance rate",
          "Decision: Auto-schedule for tomorrow 2pm, send confirmations",
        ],
        decision: "Auto-schedule for tomorrow 2pm",
        confidence: 91,
        reasoning: "Buyer pre-qualified (serious intent). Owner flexible. Fast response critical (48hr window = optimal engagement). Auto-scheduling faster than manual, higher attendance rate.",
      },
    ],
    autonomyMetrics: {
      weeklyDecisions: 210,
      autonomousPercentage: 74,
      timeSaved: "32 hours/week",
      accuracyRate: "89%",
    },
  },
};

export const AGENT_FAQS = [
  {
    question: "How is an agent different from a system?",
    answer: "A system connects workflows and automates handoffs, but it's still rule-based - 'if X happens, do Y.' An agent makes autonomous decisions - it evaluates context, weighs options, predicts outcomes, and chooses the best action. A system executes your rules. An agent learns your judgment and applies it to new situations, including edge cases you never programmed for.",
  },
  {
    question: "Does the agent replace human decision-making entirely?",
    answer: "No - and you wouldn't want it to. The agent handles high-confidence, pattern-based decisions (typically 70-85% of total decisions). Complex judgment calls, strategic decisions, and edge cases outside its confidence threshold are escalated to humans. You set the confidence threshold - higher threshold = fewer autonomous decisions but higher accuracy.",
  },
  {
    question: "What if the agent makes a wrong decision?",
    answer: "The agent learns from mistakes. Every decision (right or wrong) becomes training data. When a decision leads to a poor outcome, the agent updates its model to avoid similar errors. You can also manually flag decisions as incorrect, and the agent immediately adjusts. Over time, accuracy improves - typical agents start at 85-90% and reach 92-97% within 6 months.",
  },
  {
    question: "How much historical data do I need?",
    answer: "Minimum 3 months of decision history (at least 500 decisions) is required for initial training. More data = better agent. 6+ months is ideal. The agent analyzes your past decisions to learn patterns, edge cases, and your decision-making framework. If you don't have sufficient historical data, we can start with supervised learning where the agent watches you make decisions for 4-6 weeks before going autonomous.",
  },
  {
    question: "Can I adjust the agent's decision-making over time?",
    answer: "Yes. You have full control over decision thresholds, escalation rules, and learning parameters. You can increase/decrease the confidence threshold, add new decision domains, exclude certain decision types from autonomy, and manually override any decision. The agent adapts to your adjustments in real-time.",
  },
  {
    question: "What's the ROI timeline for an agent?",
    answer: "Most agents reach positive ROI within 16-24 weeks. Week 1-12 is deployment and learning (limited autonomy). Week 13+ is full operation (70-85% autonomous). A typical agent saves 30-45 hours/week once fully deployed. At £50/hour, that's £1,500-2,250/week in value. With an average agent cost of £9,000, payback happens in 4-6 months, and annual value is £75K-115K.",
  },
  {
    question: "What happens if my business processes change?",
    answer: "The agent adapts. If you change your decision criteria, the agent detects the pattern shift and adjusts. You can also manually update the agent's parameters. For major process changes (new service line, different target market, etc.), we can retrain the agent on new data or add new decision domains without rebuilding from scratch.",
  },
  {
    question: "Do I need technical expertise to manage the agent?",
    answer: "No. You interact with the agent through a dashboard where you can see pending decisions, review autonomous decisions, adjust thresholds, and view performance metrics. No coding required. We provide training during deployment and ongoing support. Most clients spend 2-4 hours/week on agent oversight after the first month.",
  },
];

