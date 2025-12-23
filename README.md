# JWEBLY - AI Automation Agency Website

Premium website for Jwebly, an AI automation agency offering three tiers of intelligent automation: Implementation Pilots, Intelligent Systems, and Autonomous AI Agents.

## 🚀 Features

- **Three-Tier Service Model**: Pilot (£1.5K-2K), System (£3K-5K), Agent (£7K-12K)
- **Joe AI Integration**: 24/7 AI implementation partner powered by Claude Sonnet 4
- **Interactive Visualizations**: 3D neural networks, workflow builders, process timelines
- **Resources Hub**: Research articles, case studies, client reviews
- **Industry-Agnostic**: Supports recruitment, accounting, legal, marketing, real estate
- **Premium Design**: Scale.ai aesthetic with wine-red (#E5527B) accents

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **AI Integration**: Anthropic Claude API
- **Deployment**: Netlify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/J-WEBBY/jwebly-website.git
cd jwebly-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Add your ANTHROPIC_API_KEY to .env
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 🔑 Environment Variables

Required environment variables:

- `ANTHROPIC_API_KEY`: Your Anthropic API key for Claude integration

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── services/          # Service pages (Pilot, System, Agent)
│   ├── resources/         # Resources section
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── get-started/       # Discovery call booking
│   ├── how-it-works/      # Process explanation
│   ├── joe/               # Joe AI page
│   └── api/               # API routes
├── components/            # React components
│   ├── pilot/            # Pilot page components
│   ├── system/           # System page components
│   ├── agent/            # Agent page components
│   ├── resources/        # Resources components
│   ├── joe/              # Joe AI components
│   └── ui/               # Shadcn UI components
└── lib/                  # Utilities and constants
    └── constants/        # Data files
```

## 🎨 Design System

- **Primary Accent**: Wine Red (#E5527B)
- **Background**: Black (#000000)
- **Elevated Background**: #0F0F0F
- **Borders**: Gray-900 (#171717)
- **Typography**: System fonts

## 🚢 Deployment

Deploy to Netlify:

1. Push to GitHub
2. Connect repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy

**Build command**: `npm run build`  
**Publish directory**: `.next`

## 📝 License

Proprietary - All rights reserved

## 👥 Contact

- **Website**: jwebly.co.uk
- **Email**: contact@jwebly.co.uk
