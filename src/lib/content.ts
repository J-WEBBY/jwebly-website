/**
 * All site copy lives here, typed. Components import from this file so the
 * positioning stays consistent and editable in one place.
 *
 * Positioning hierarchy (CLAUDE.md §1): ONE loud flagship (HealthOS) + TWO real
 * secondary services (custom build, workflow plan) — never three co-equal offers,
 * never HealthOS-only. Single primary CTA everywhere: "Book a call" (white pill).
 * "Custom" is craft, never a generic-agency identity.
 */

export const SITE = {
  name: "Jwebly",
  url: "https://jwebly.com",
  email: "hello@jwebly.co.uk",
  // Primary CTA destination — the on-site booking form (/book-a-call).
  bookCallHref: "/book-a-call",
  healthUrl: "https://jweblyhealth.com",
  location: "Birmingham, United Kingdom",
  linkedin: "https://uk.linkedin.com/company/jwebly",
} as const;

export const NAV_LINKS = [
  { label: "HealthOS", href: "/#healthos" },
  { label: "What we build", href: "/build" },
  { label: "Integrations", href: "/#integrations" },
  { label: "Resources", href: "/#resources" },
  { label: "Company", href: "/#company" },
] as const;

export const HERO = {
  kicker: "APPLIED AI · BUILT, INTEGRATED, OPERATED",
  // Headline rendered with an italic, teal-ticked "wrong" in the component.
  headlineLead: "AI systems for industries that can't get it",
  headlineEmphasis: "wrong.",
  lede: "We design production-grade AI into the businesses that can't afford guesswork — clinics first, your field next. Built around your tools, run like infrastructure, owned end to end.",
  primaryCta: { label: "Book a call", href: SITE.bookCallHref },
  secondaryCta: { label: "See what we build", href: "#what-we-build" },
  demo: {
    title: "healthos · live agent",
    lines: [
      { time: "22:41", tag: "inbound", text: "New enquiry — after hours" },
      { time: "22:41", tag: "agent", text: "Answered in 0.8s · qualifying patient" },
      { time: "22:42", tag: "agent", text: "Booked → Dr. Okafor, Thu 09:30" },
      {
        time: "22:42",
        tag: "result",
        text: "Lead retained · 0 staff involved",
        pulse: true,
      },
    ],
  },
} as const;

export const PRODUCT = {
  kicker: "THE FLAGSHIP",
  badge: "LIVE",
  name: "HealthOS",
  body: "An AI front desk for private clinics. It answers every enquiry the moment it lands, qualifies the patient, and books them straight into your calendar — day, night, weekend. Then it's wired into your practice tools and extended to the things only your clinic needs.",
  values: [
    {
      n: "01",
      title: "Instant response",
      text: "No more enquiries lost after hours.",
    },
    {
      n: "02",
      title: "Qualifies & books",
      text: "Straight into your existing calendar.",
    },
    {
      n: "03",
      title: "Integrated with your stack",
      text: "Wired into your tools, extended on request.",
    },
  ],
  // The short clinic chat exchange shown on the right.
  chat: [
    { from: "patient", text: "Hi, do you have any availability this week?" },
    {
      from: "healthos",
      text: "We do — I can see Thursday 09:30 or Friday 14:00 with Dr. Okafor. Which suits you?",
    },
    { from: "patient", text: "Thursday morning works." },
    {
      from: "healthos",
      text: "Booked you in for Thu 09:30. You'll get a confirmation by text shortly.",
    },
  ],
  link: { label: "Visit jweblyhealth.com", href: SITE.healthUrl },
} as const;

/**
 * The secondary services (CLAUDE.md §5 "What we build"). Visibly secondary to
 * HealthOS — smaller, below it — but real, with a destination at /build. This is
 * what converts non-healthcare inbound that lands on the site.
 */
export const WHAT_WE_BUILD = {
  kicker: "WHAT WE BUILD",
  heading: "Built one for clinics. We'll build yours.",
  sub: "HealthOS proves what we do. The same craft goes into bespoke systems for teams in any high-stakes field — built around your tools, owned end to end.",
  tiles: [
    {
      icon: "Workflow",
      title: "Custom automation & agents",
      body: "A bespoke AI agent or automation, designed around your workflows and integrated into the tools you already run. For when off-the-shelf won't fit.",
      href: "/build",
      cta: "Explore custom builds",
    },
    {
      icon: "Layers",
      title: "Workflow plan",
      body: "A focused package: 5–7 of your highest-friction processes, automated and live. The fastest way to put AI to work without a big programme.",
      href: "/build",
      cta: "Explore the workflow plan",
    },
  ],
  footerLine: {
    lead: "Not sure which fits?",
    cta: { label: "Book a call", href: SITE.bookCallHref },
    tail: "and we'll map it with you.",
  },
} as const;

export const HOW = {
  kicker: "HOW AN ENGAGEMENT RUNS",
  heading: "Not software you're left to figure out.",
  sub: "We don't hand you a login and disappear. Every rollout is led — understood, built, fitted, kept running — so it earns its place from week one.",
  steps: [
    {
      n: "/01",
      title: "Understand",
      text: "We learn how your enquiries, bookings and tools flow today, and where they leak.",
    },
    {
      n: "/02",
      title: "Build",
      text: "We shape the system to your reality and configure the agents to your voice.",
    },
    {
      n: "/03",
      title: "Integrate",
      text: "We connect the calendar, records and channels you already use, then add the custom pieces you ask for.",
    },
    {
      n: "/04",
      title: "Operate",
      text: "It goes live and we keep it sharp: monitoring, tuning, growing it as you do.",
    },
  ],
} as const;

export const PARTNERS = {
  kicker: "BUILT WITH",
  heading: "We plug into the tools you already trust.",
  sub: "Your systems stay yours. We integrate around them — and partner with the platforms that power modern operations.",
  // Categories, not fake logos, until real integrations exist.
  categories: [
    "Calendars",
    "Scheduling",
    "Records",
    "Data systems",
    "Messaging",
    "Voice / telephony",
    "Payments",
    "CRM",
    "+ your stack",
  ],
  partnerLine: {
    lead: "Don't see your tools? Become a referenced integration.",
    cta: { label: "Talk integrations", href: SITE.bookCallHref },
  },
} as const;

export const RESOURCES = {
  kicker: "RESOURCES",
  heading: "Field notes on AI that actually ships.",
  cards: [
    {
      title: "The cost of the call nobody answered",
      blurb: "What a missed after-hours enquiry really costs.",
      href: "/resources/cost-of-the-missed-call",
    },
    {
      title: "What to ask before you trust an AI front desk",
      blurb: "A buyer's checklist.",
      href: "/resources/ai-front-desk-checklist",
    },
    {
      title: "Why off-the-shelf AI stalls in regulated work",
      blurb: "The integration gap.",
      href: "/resources/off-the-shelf-ai-stalls",
    },
  ],
} as const;

export const CTA = {
  kicker: "START A CONVERSATION",
  headingLead: "Let's see what this looks like",
  headingEmphasis: "in your business.",
  sub: "Twenty minutes, a live look at the system, and a straight read on whether it fits. No deck-ware.",
  primaryCta: { label: "Book a call", href: SITE.bookCallHref },
  secondaryCta: { label: "Explore HealthOS", href: SITE.healthUrl },
} as const;

/**
 * The /build page — the non-healthcare landing target (CLAUDE.md §5). Expands the
 * two secondary services with how-it-works and who-it's-for, then the call CTA.
 */
export const BUILD = {
  kicker: "WHAT WE BUILD",
  heading: "AI built around your business — in any high-stakes field.",
  sub: "HealthOS is the proof. The same team and the same craft build bespoke AI for operations that can't afford guesswork. Two ways in, both owned end to end.",
  primaryCta: { label: "Book a call", href: SITE.bookCallHref },
  services: [
    {
      icon: "Workflow",
      tag: "CUSTOM BUILD",
      title: "Custom automation & agents",
      body: "A bespoke AI agent or automation, designed around your workflows and wired into the tools you already run. For when off-the-shelf won't fit and the work is too important to get wrong.",
      points: [
        "Scoped to your real process, not a template",
        "Integrated with your calendar, records, messaging and CRM",
        "Built, fitted and kept running by us",
      ],
      forWho: "For teams with a specific, high-value workflow that generic tools can't handle.",
    },
    {
      icon: "Layers",
      tag: "WORKFLOW PLAN",
      title: "Workflow plan",
      body: "A focused package: we take 5–7 of your highest-friction processes, automate them, and put them live. The fastest, lowest-commitment way to put AI to work.",
      points: [
        "5–7 processes automated and live",
        "A lighter programme — quick to start",
        "A clear on-ramp you can grow from",
      ],
      forWho: "For smaller teams that want momentum without a big-bang programme.",
    },
  ],
  steps: [
    {
      n: "/01",
      title: "Understand",
      text: "We map how your work flows today and where it leaks time, money or attention.",
    },
    {
      n: "/02",
      title: "Build",
      text: "We design the system around your reality and configure the agents to your voice.",
    },
    {
      n: "/03",
      title: "Integrate",
      text: "We connect the tools you already run and add the custom pieces only you need.",
    },
    {
      n: "/04",
      title: "Operate",
      text: "It goes live and we keep it sharp — monitoring, tuning, growing it with you.",
    },
  ],
  closer: {
    heading: "Tell us what's slowing you down.",
    sub: "Twenty minutes to map your highest-friction work and whether AI fits. No deck-ware.",
  },
} as const;

export const FOOTER = {
  tagline:
    "We build, integrate and run AI systems for industries that can't afford to get it wrong. HealthOS is the first.",
  columns: [
    {
      heading: "Products",
      links: [
        { label: "HealthOS", href: SITE.healthUrl },
        { label: "Custom builds", href: "/build" },
        { label: "Workflow plan", href: "/build" },
        { label: "Book a call", href: "/book-a-call" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Integrations", href: "/partners" },
        { label: "Resources", href: "/resources" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/book-a-call" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
      ],
    },
  ],
  legal: "© 2026 Jwebly. Built in the UK.",
} as const;

/**
 * Booking reasons for the /book-a-call form. `value` is sent to the API and
 * surfaced in the notification email; the first is the neutral default.
 */
export const BOOKING_REASONS = [
  { value: "general", label: "General enquiry" },
  { value: "healthos", label: "HealthOS (AI front desk for clinics)" },
  { value: "custom-build", label: "Custom automation & agents" },
  { value: "workflow-plan", label: "Workflow plan (5–7 processes)" },
  { value: "partnership", label: "Integration / partnership" },
  { value: "press", label: "Press or media" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
] as const;

export const BOOK = {
  kicker: "BOOK A CALL",
  heading: "Tell us what you're working on.",
  sub: "Twenty minutes, a live look at the system, and a straight read on whether it fits. Leave a few details and we'll be in touch to find a time.",
  success: {
    heading: "Got it — thank you.",
    sub: "Your request is in. We'll reply by email shortly to set up a time.",
  },
} as const;

/** Joe assistant launcher + opening UX (JOE.md §5). */
export const JOE = {
  label: "Ask Joe",
  headerTitle: "Joe · Jwebly",
  headerName: "Joe",
  greeting:
    "Hi — I'm Joe. I can tell you how Jwebly works, or what we'd build for your field. What brings you in?",
  suggestions: [
    "What does HealthOS do?",
    "Do you build outside healthcare?",
    "How do you work with new clients?",
  ],
} as const;
