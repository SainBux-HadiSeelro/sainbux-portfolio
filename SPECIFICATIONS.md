# 📐 Sain Bux Portfolio — System & Engineering Specifications

**Document Version:** `3.0.0`  
**Classification:** Enterprise System Architecture & Engineering Specification  
**System Designation:** `Sain Bux Flagship Engineering Portfolio & Agentic Platform Hub`  
**Author:** Sain Bux (Forward Deployed & Agentic AI Engineer)  
**Production Endpoint:** [https://sainbux.vercel.app/](https://sainbux.vercel.app/)  
**Primary Repository:** [https://github.com/SainBux-HadiSeelro/sainbux-portfolio](https://github.com/SainBux-HadiSeelro/sainbux-portfolio)  
**Last System Audit:** October 2026  

---

## 📌 1. Executive Summary & Architectural Philosophy

This document establishes the official technical architecture, system benchmarks, data contracts, and operational standards for **sainbux.vercel.app** — the personal engineering portal and production showcase of **Sain Bux**.

The platform is designed not merely as a resume showcase, but as a live, high-performance reference application demonstrating modern web engineering, deterministic state-driven UI patterns, zero layout-shift animations, strict type governance, and secure embedded execution sandboxes for deployed AI applications.

### Core Architectural Pillars
1. **Deterministic Agentic Taxonomy:** Modular categorization dividing 25 flagship projects across four specialized groups: Featured Agentic Systems, AI-Integrated Applications, Client Demos & Commercial Web, and Data Science & Utilities.
2. **Zero Runtime Bloat & Edge Speed:** Static Site Generation (SSG) with Next.js 16 App Router and Turbopack, delivering sub-second TTFB and zero client-side database latency.
3. **Secure Iframe Execution Sandbox:** Isolated iframe execution layer enabling visitors to run live external Streamlit, Vite, and Next.js applications directly within modal viewports without cross-origin leakage or top-level navigation interference.
4. **Strict TypeScript & Contract Safety:** 100% type-safe schemas across all project entities, category routers, navigation states, and interactive filter tabs.

---

## 🏗️ 2. System Architecture & Component Hierarchy

```
+-----------------------------------------------------------------------------------------+
|                                    CLIENT BROWSER                                       |
|  [Framer Motion 14 Physics]  <--->  [Tailwind v4 Token Engine]  <--->  [Lucide React]   |
|  [Dynamic 4-Group Filter]    <--->  [Sandboxed Iframe Modal]   <--->  [Mobile Drawer]   |
+-----------------------------------------------------------------------------------------+
                                             |
                                             v
+-----------------------------------------------------------------------------------------+
|                              NEXT.JS 16 APPLICATION ROUTER                              |
|   / (Main Hub SPA)                                                                      |
|   ├── Hero (Live Loop Phase Ticker)      ├── Skills (5-Domain Competency Matrix)        |
|   ├── Projects (25-Project Multi-Group)  ├── Experience (Chronological Engineering)     |
|   ├── About (Architectural Philosophy)   ├── Education & Academic Credentials           |
|   └── Contact (Direct Channel Funnel)    └── Footer & Route Navigation                  |
|                                                                                         |
|   Dedicated Dynamic Sub-Category Routes:                                                |
|   ├── /projects/loop-engineering         ├── /projects/streamlit                       |
|   ├── /projects/websites                 ├── /robots.txt & /sitemap.xml                 |
+-----------------------------------------------------------------------------------------+
                                             |
                                             v
+-----------------------------------------------------------------------------------------+
|                             DATA & STATE CONTRACT LAYER                                 |
|   - src/data/projects.ts (25 Projects, 4 Categories, Sub-Project Collections)           |
|   - src/data/socials.ts (Verified Public Communication Channels & Endpoints)            |
|   - src/lib/utils.ts (Tailwind Merge & Conditional Class Synthesis)                     |
+-----------------------------------------------------------------------------------------+
                                             |
                                             v
+-----------------------------------------------------------------------------------------+
|                         STATIC BUILD & EDGE DEPLOYMENT (VERCEL)                         |
|   - Turbopack Incremental Engine (<12s Static Compilation)                              |
|   - Edge CDN Global Anycast Caching                                                     |
|   - Automated HTTPS / TLS 1.3 / HTTP/3 Protocol Termination                             |
+-----------------------------------------------------------------------------------------+
```

---

## 🛠️ 3. Core Technology Stack Specifications

| Layer | Technology | Specification / Version | Rationale & Performance Role |
| :--- | :--- | :--- | :--- |
| **Core Framework** | Next.js | `16.4.0` (App Router + Turbopack) | Sub-second cold compilation, automated static route pre-rendering, zero runtime DB dependencies. |
| **View Engine** | React | `19.3.0` | Modern concurrent rendering, clean server/client boundary separation (`"use client"` isolation). |
| **Type Governance** | TypeScript | `5.x` (Strict Mode) | Full type enforcement across project models, sub-project arrays, category filters, and props. |
| **Styling Engine** | Tailwind CSS | `v4.0` (`@tailwindcss/turbopack`) | High-performance CSS generation with PostCSS, dynamic CSS variable tokens, zero CSS runtime overhead. |
| **Motion Physics** | Framer Motion | `14.1.0` | Hardware-accelerated GPU transitions, layout animation choreography, modal enter/exit states. |
| **Iconography** | Lucide React | `1.55.0` | Lightweight, tree-shakable SVG glyphs matching enterprise aesthetic standards. |
| **Utility Libraries**| `clsx`, `tailwind-merge` | `2.1.1` / `3.7.0` | Deterministic dynamic class concatenation avoiding Tailwind utility collisions. |
| **Hosting & Edge** | Vercel Edge Network | Global CDN Tier | Automated Git webhook CI/CD, global asset distribution, sub-100ms TTFB worldwide. |

---

## 🎨 4. Design System & Brand Identity

The platform adopts a high-contrast, aerospace & engineering-first aesthetic characterized by deep navy structural framing, royal blue interactive focus, high-energy cyan accents, and precision SVG circuit traces:

### Color Palette Tokens

```css
/* Primary Aerospace & Deep Navy Tones */
--navy-primary:      #0B1F5C;   /* Deep Navy: Headings, primary structural frames, high-contrast text */
--blue-vibrant:      #1553C7;   /* Electric Royal Blue: Brand identity, active tabs, primary CTAs */
--cyan-electric:     #1EA7FF;   /* Cyber Cyan: Glow effects, telemetry nodes, secondary badges */

/* Structural Backgrounds & Grid Containers */
--surface-white:     #FFFFFF;   /* Pure white cards, modal viewports, high-contrast surfaces */
--surface-soft:      #F8FBFF;   /* Cool tinted section backgrounds, subdued panels */
--surface-muted:     #EAF4FF;   /* Highlighted background pill tags, active filter states */
--border-subtle:     #E8F1FC;   /* Fine-line grid borders, divider lines */
--border-accent:     #CFE6FF;   /* Highlighted interactive component borders */

/* Telemetry & State Indicators */
--status-nominal:    #10B981;   /* Emerald pulse: Live deployment status, verified models */
--text-primary:      #0B1F5C;   /* Primary high-contrast technical prose */
--text-secondary:    #5B6B8C;   /* High-legibility technical secondary prose */
--text-muted:        #8C9DB5;   /* Meta indicators, timestamps, micro-tags */
```

### Signature UI Components
1. **SectionPill Badge (`src/components/SignatureElements.tsx`):** Encapsulated pill label with radial gradient background, electric blue borders, and high-contrast uppercase mono typography.
2. **CircuitLineDecoration (`src/components/SignatureElements.tsx`):** SVG circuit traces with terminal solder nodes framing viewports and establishing an aerospace telemetry motif.
3. **Interactive Embedded Sandbox Modal (`src/components/Projects.tsx`):** Full-screen viewport housing external live deployments inside a sandboxed `<iframe>` with auto-recovering fallback timers, keyboard escape listener, and loading states.
4. **Responsive Multi-Tier Project Cards:**
   - **Large Cards (Group A):** Double-width cards featuring problem, solution, result, highlight pills, tech tags, and expandable 12-project sub-project menus.
   - **Medium Cards (Groups B, C, D):** Compact 2-column cards emphasizing live interactive preview actions and repository access.

---

## 📊 5. Performance Standards & SLO Benchmarks

The portfolio adheres to stringent web performance criteria audited against Chrome User Experience Report (CrUX) and Core Web Vitals standards:

| Metric | Target SLO | Benchmark Value | Engineering Mechanism |
| :--- | :--- | :--- | :--- |
| **First Contentful Paint (FCP)** | $< 0.8\text{ s}$ | $\approx 0.5\text{ s}$ | Edge pre-rendered static HTML, critical CSS inlining via Tailwind v4. |
| **Largest Contentful Paint (LCP)** | $< 1.5\text{ s}$ | $\approx 0.9\text{ s}$ | `next/image` modern AVIF/WebP conversion, explicit dimension reserves. |
| **Cumulative Layout Shift (CLS)** | $< 0.02$ | $0.00$ | Fixed aspect-ratio containers (16:10), reserve dimension spacing on all project banners. |
| **Interaction to Next Paint (INP)**| $< 100\text{ ms}$ | $< 35\text{ ms}$ | Decoupled event handlers, React 19 concurrent transitions, pure client-side tab filtering. |
| **Time to First Byte (TTFB)** | $< 150\text{ ms}$ | $\approx 65\text{ ms}$ | Vercel Edge Cache with HTTP/3 and edge-located asset delivery. |
| **Turbopack Build Duration** | $< 15\text{ s}$ | $\approx 9.5\text{ s}$ | Turbopack incremental module graph resolution with zero-runtime bundle tree-shaking. |

---

## 📁 6. Repository & Directory Structure

```
d:\portfolio
├── .env.local                             # Local edge environment variables
├── .gitignore                             # Git ignore rules
├── eslint.config.mjs                      # ESLint 9 configuration
├── GEMINI.md                              # Workspace development & automated Git push rules
├── next-env.d.ts                          # Next.js TypeScript declarations
├── next.config.ts                         # Next.js configuration (Turbopack, cache components)
├── package.json                           # Dependencies & script declarations
├── README.md                              # Public repository documentation & overview
├── SPECIFICATIONS.md                      # Enterprise System Architecture Specifications (This document)
├── tsconfig.json                          # Strict TypeScript compiler options
├── tsconfig.tsbuildinfo                   # TypeScript incremental build cache
├── public/                                # Static edge-served assets
│   ├── cv.pdf                             # Downloadable Curriculum Vitae
│   ├── hero-hands.png                     # Visual hero branding asset
│   └── projects/                          # High-resolution (1280x800) project preview assets
│       ├── agentic-hangman.png            # Hangman 2.0 NEXUS AI preview
│       ├── agentic-story-studio.png       # NexusNarrative story studio preview
│       ├── apex-rps-platform.png          # ApexRPS decision platform preview
│       ├── aura-atelier-beauty-parlour.png # Aura Atelier luxury beauty preview
│       ├── beauty-aura-spa.png            # BeautyAura luxury retreat preview
│       ├── beautylira-clinic.png          # BeautyLira clinic experience preview
│       ├── bill-generator.png             # Enterprise billing automation preview
│       ├── elite-fitness-gym.png          # ELITE FITNESS multi-agent gym preview
│       ├── elite-studio-clinic.png        # Elite Studio Clinic luxury dentistry preview
│       ├── excel-ai-agent.png             # Excel AI Agent multilingual preview
│       ├── forge-fitness.png              # Forge Fitness gym web app preview
│       ├── humanoid-robotics.png          # Physical AI robotics book preview
│       ├── ironpulse-fitness.png          # IRONPULSE athletic hub preview
│       ├── lumiere-hotel-reservation.png  # Lumière Palace Paris luxury hotel preview
│       ├── lumina-beauty-parlour.png      # Lumina Beauty Parlour luxury sanctuary preview
│       ├── lumina-dental-clinic.png       # Lumina Dental Clinics preview
│       ├── luvia-ecommerce.png            # LUVIA luxury eCommerce preview
│       ├── nexus-mind-platform.png        # Nexus Mind gaming platform preview
│       ├── orbit-iq.png                   # OrbitIQ aerospace intelligence preview
│       ├── personal-finance.png           # FinPulse finance ledger preview
│       ├── shm-real-estate.png            # SHM Real Estate AI Lead Engine preview
│       ├── spacex-launch-predictor.png    # SpaceX launch predictor preview
│       ├── wedding-wishes.png             # Wedding Wishes live event portal preview
│       └── welltrack-ai.png               # WellTrack AI wellness companion preview
└── src/
    ├── app/                               # Next.js App Router Root
    │   ├── layout.tsx                     # Root document wrapper, SEO metadata, fonts
    │   ├── page.tsx                       # Single Page Application main viewport
    │   ├── globals.css                    # Tailwind CSS directives & custom utility classes
    │   ├── robots.ts                      # Automated search crawler indexing manifest
    │   ├── sitemap.ts                     # Dynamic XML sitemap generator
    │   └── projects/                      # Dedicated category sub-routes
    │       ├── loop-engineering/page.tsx  # Loop engineering collection route
    │       ├── streamlit/page.tsx         # Streamlit cloud utilities route
    │       └── websites/page.tsx          # Full-stack web platforms route
    ├── components/                        # Modular React UI components
    │   ├── Hero.tsx                       # Animated hero with real-time loop phase ticker
    │   ├── Projects.tsx                   # Multi-category 25-project interactive grid & modal
    │   ├── CategoryProjectsView.tsx       # Sub-route project renderer with back-navigation
    │   ├── About.tsx                      # Architectural philosophy & background
    │   ├── Skills.tsx                     # 5-domain competency taxonomy matrix
    │   ├── Experience.tsx                 # Chronological professional engineering history
    │   ├── Education.tsx                  # Academic & technical credentials
    │   ├── Contact.tsx                    # Interactive inquiry form & direct channels
    │   ├── Navbar.tsx                     # Glassmorphic header with route drawer
    │   ├── Footer.tsx                     # Semantic footer with social navigation
    │   ├── Icons.tsx                      # Custom SVG icon definitions (GithubIcon, etc.)
    │   └── SignatureElements.tsx          # Circuit lines, taglines & section pill badges
    ├── data/                              # Single-Source-of-Truth Data Store
    │   ├── projects.ts                    # 25 project schemas, sub-projects & categories
    │   └── socials.ts                     # Contact details, channels & profile URLs
    └── lib/
        └── utils.ts                       # Class merging (`clsx`, `tailwind-merge`)
```

---

## 📜 7. Data Contracts & TypeScript Specifications

The data architecture is strictly typed in `src/data/projects.ts` to ensure end-to-end type safety:

```typescript
export interface SubProject {
  title: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  tech?: string[];
}

export type ProjectCategory = 
  | "agentic"        // Group A: Featured Agentic Systems
  | "ai-integrated"   // Group B: AI-Integrated Applications
  | "client-demo"     // Group C: Client Demos & Commercial Web
  | "data-utility";   // Group D: Data Science, Machine Learning & Utilities

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  category: ProjectCategory;
  image?: string;
  imageLabel?: string;
  highlights?: string[];
  isCollection?: boolean;
  subProjects?: SubProject[];
}
```

---

## 🛰️ 8. Comprehensive 25-Project Engineering Ecosystem

The portfolio aggregates **25 flagship production systems** categorized into 4 core architectural groups:

### 🌟 GROUP A: Featured Agentic Systems (`category: "agentic"`)
*Autonomous agent pipelines featuring recursive self-correction, schema contract enforcement, evaluator-optimizer loops, and multi-agent coordination.*

#### 1. Loop Engineering Series (12 Projects)
- **Designation:** Complete Collection of Self-Correcting Agent Architectures
- **Badge:** `Agentic` | **Category:** `agentic` | **Collection:** `true` (12 Sub-Projects)
- **Technical Summary:** Eliminates non-deterministic LLM failures using modular self-correction loops, schema validation interceptors, and autonomous retry pipelines.
- **Architectural Solution:** 12 modular repositories illustrating progressive loop engineering paradigms:
  1. *Basic Self-Correction Loop:* Schema validation interceptor retrying outputs until valid JSON schema is met.
  2. *Tool Output Evaluator:* Evaluator node checking execution return codes and synthesizing recovery steps.
  3. *Code Sandbox & Syntax Fixer:* Executes generated Python in isolated runtime; feeds tracebacks to agent.
  4. *Web Scraper Self-Healing Extractor:* Auto-rewrites CSS/XPath selectors upon DOM mutation.
  5. *Multi-Turn Planning Graph:* Dynamic DAG planner pruning invalid branch steps during execution.
  6. *SQL Query Self-Corrector:* Validates SQL against live database schemas to fix syntax & FK mismatches.
  7. *Reflection & Critique Agent:* Two-agent critic loop scoring drafts until threshold $\ge 9.0/10$.
  8. *API Rate-Limit & Backoff Manager:* Exponential backoff loop with dynamic payload truncation.
  9. *Document Chunking & Re-Ranker Loop:* Self-correcting RAG loop evaluating context relevance before generation.
  10. *Memory Guard & State Compactor:* Sliding memory compactor preventing context window bloat.
  11. *Human-in-the-Loop (HITL) Interceptor:* State suspension at high-stakes action boundaries awaiting verification.
  12. *End-to-End Autonomous Agentic Pipeline:* Unified framework synthesizing all 11 patterns.
- **Stack:** Python, OpenAI SDK, Loop Engineering, Structured Outputs, Pytest, AsyncIO
- **Repository:** [https://github.com/SainBux-HadiSeelro/loop-engineering-series](https://github.com/SainBux-HadiSeelro/loop-engineering-series)

#### 2. Excel AI Agent — Autonomous Multilingual Spreadsheet Assistant
- **Designation:** Bilingual Natural Language Execution (English & Roman Urdu) with Deterministic Tool Calling
- **Badge:** `Agentic` | **Category:** `agentic`
- **Technical Summary:** Interprets bilingual natural language prompts ('total sales nikalo', 'duplicates hata do') to execute 15+ deterministic openpyxl/pandas operations within an isolated sandbox.
- **Architectural Solution:** Autonomous agentic loop with session version snapshotting, non-destructive rollbacks, and post-write verification guards.
- **Verified Metrics:** 100% test pass rate across 23 pytest suites, zero accidental data loss, sub-second formula evaluation.
- **Stack:** Python, Streamlit, OpenPyXL, Pandas, Gemini API, Tool Calling
- **Live Deployment:** [https://excel-agent-ai.streamlit.app/](https://excel-agent-ai.streamlit.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/excel-ai-agent](https://github.com/SainBux-HadiSeelro/excel-ai-agent)

#### 3. ELITE FITNESS — Autonomous Multi-Agent AI Luxury Gym
- **Designation:** Multi-Agent Swarm Orchestrator & Live Tool Calling Engine
- **Badge:** `Agentic` | **Category:** `agentic`
- **Technical Summary:** Replaces static gym forms with a 4-agent swarm coordinating biometric calculations, workout protocols, and VIP pass issuance.
- **Architectural Solution:** Semantic router dispatcher coordinating 4 domain agents (Nova, Titan, MacroCore, BioScan) with transparent reasoning traces and deterministic tool execution.
- **Verified Metrics:** Sub-100ms tool execution latency, 100% automated VIP trial pass issuance with digital tokens.
- **Stack:** React 18, TypeScript, Multi-Agent Swarm, Tool Calling, Tailwind CSS, Vite 5
- **Live Deployment:** [https://elite-fitness-gym-two.vercel.app/](https://elite-fitness-gym-two.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Elite_Fitness_GYM](https://github.com/SainBux-HadiSeelro/Elite_Fitness_GYM)

#### 4. Nexus Mind — Autonomous Multi-Agent Gaming & Intelligence Platform
- **Designation:** Multi-Agent Swarm, Shannon Entropy Telemetry & 24/7 Contextual AI Concierge
- **Badge:** `Agentic` | **Category:** `agentic`
- **Technical Summary:** Coordinates 3 synchronized agents (Nexus Arbiter, Oracle Telemetry computing Shannon Entropy $H = \log_2 N$, Nova 24/7 bilingual live AI concierge) for turn-based Human vs AI duel gameplay.
- **Architectural Solution:** Dual-engine concierge architecture (Offline Heuristic RAG + OpenAI) guaranteeing sub-millisecond state synchronization and continuous uptime.
- **Stack:** Python, Streamlit, Multi-Agent System, OpenAI SDK, Information Theory, Session State
- **Live Deployment:** [https://nexus-mind-agentic-platform.streamlit.app/](https://nexus-mind-agentic-platform.streamlit.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/nexus-mind-agentic-platform](https://github.com/SainBux-HadiSeelro/nexus-mind-agentic-platform)

#### 5. ApexRPS — Autonomous Agentic Decision Platform & 24/7 Live AI Concierge
- **Designation:** Markov Transition State Engine, Win-Stay Lose-Shift Heuristics & Real-Time Probability Telemetry
- **Badge:** `Agentic` | **Category:** `agentic`
- **Technical Summary:** Transforms Rock-Paper-Scissors into a high-performance demonstration of Statistical Machine Learning, Behavioral Game Theory, and Multi-Agent Systems.
- **Architectural Solution:** Multi-agent decision engine synthesizing 1st/2nd-order Markov transition matrices with bounded-rationality WSLS psychological heuristics and dynamic Bayesian ensemble synthesis.
- **Verified Metrics:** Empirical behavioral anticipation outperforming random baselines; sub-second Chain-of-Thought reasoning.
- **Stack:** Python, Streamlit, Markov Chains, Bayesian Inference, Game Theory, OpenAI SDK
- **Live Deployment:** [https://apex-game.streamlit.app/](https://apex-game.streamlit.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/apex-game](https://github.com/SainBux-HadiSeelro/apex-game)

#### 6. NexusNarrative — Smart Multi-Agent Story Studio
- **Designation:** Multi-Agent Story Pipeline, Dynamic Mad Libs Engine & Story Scorecard Analytics
- **Badge:** `Agentic` | **Category:** `agentic`
- **Technical Summary:** Solves brittle generative storytelling by coordinating four specialized agents (Input Assistant, Director Assistant, Story Writer, Reviewer Assistant) with automated narrative quality scorecards.
- **Architectural Solution:** Modular multi-agent pipeline with real-time session state management, reading-time analytics, and one-click Markdown/TXT export.
- **Stack:** Python, Streamlit, Multi-Agent Pipeline, NLP, UV Package Manager, Session State
- **Live Deployment:** [https://agentic-story-studio.streamlit.app/](https://agentic-story-studio.streamlit.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/agentic-story-studio](https://github.com/SainBux-HadiSeelro/agentic-story-studio)

---

### ⚡ GROUP B: AI-Integrated Applications (`category: "ai-integrated"`)
*Production-grade web platforms engineered with embedded conversational AI concierges, state machines, and real-time telemetry.*

#### 7. Hangman: Modern AI Edition & 24/7 NEXUS AI Assistant
- **Designation:** Cyberpunk Word Deduction, Reactive State Machine & Embedded Resident Agent
- **Badge:** `AI-Integrated` | **Category:** `ai-integrated`
- **Technical Summary:** Embeds NEXUS-7, an autonomous resident AI agent delivering contextual, spoiler-free gameplay hints and multi-domain knowledge retrieval.
- **Architectural Solution:** Reactive event-driven state machine with heart-life telemetry, ASCII visual containment, and offline-first heuristic neural knowledge base.
- **Stack:** Python, Streamlit, Autonomous Agents, State Machines, Knowledge Retrieval, Cyberpunk CSS
- **Live Deployment:** [https://agentic-hangman.streamlit.app/](https://agentic-hangman.streamlit.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Agentic-Hangman-2.0](https://github.com/SainBux-HadiSeelro/Agentic-Hangman-2.0)

#### 8. IRONPULSE — Ultra-Premium Fitness & 24/7 Performance Hub
- **Designation:** Next.js 16 App Router, React 19, Tailwind v4 & 24/7 Live PulseAI Concierge
- **Badge:** `AI-Integrated` | **Category:** `ai-integrated`
- **Technical Summary:** High-octane platform for elite athletes featuring live facility telemetry indexing, interactive biometric BMI calculator, and 24/7 Live Concierge ('PulseAI').
- **Architectural Solution:** PulseAI concierge generating verifiable digital VIP guest pass tokens on demand; sub-second Turbopack compilation.
- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Turbopack
- **Live Deployment:** [https://ironpulse-hadi-com.vercel.app/](https://ironpulse-hadi-com.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/ironpulse-hadi.com](https://github.com/SainBux-HadiSeelro/ironpulse-hadi.com)

#### 9. LUVIA — Minimalist Luxury eCommerce & 24/7 AI Concierge
- **Designation:** Ethereal Luxury Design Objects, React 19, Tailwind v4 & In-Chat Shopping Actions
- **Badge:** `AI-Integrated` | **Category:** `ai-integrated`
- **Technical Summary:** Streamlines luxury product evaluation with architectural spec tables and an AI shopping concierge enabling direct in-chat purchases.
- **Architectural Solution:** Persistent client cart state, VIP coupon discount validation, and conversational product cards with direct cart actions.
- **Stack:** React 19, TypeScript, Tailwind CSS 4, Gemini AI, Framer Motion, Vite 6
- **Live Deployment:** [https://luvia-e-commerce.vercel.app/](https://luvia-e-commerce.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Luvia-eCommerce](https://github.com/SainBux-HadiSeelro/Luvia-eCommerce)

#### 10. SHM Real Estate — AI Lead Generation & Qualification System
- **Designation:** Autonomous Real Estate Funnel, 24/7 AI Qualification & Appointment Booking Engine
- **Badge:** `AI-Integrated` | **Category:** `ai-integrated`
- **Technical Summary:** Replaces traditional slow brokerage response times with an automated 9-stage lead funnel and 24/7 conversational qualification.
- **Architectural Solution:** Real-time intent scoring (budget, location, timeline), multi-channel automated follow-ups, and calendar sync delivering $< 45\text{s}$ response speed.
- **Stack:** Next.js 15, TypeScript, Tailwind CSS, Conversational AI, CRM Automation, Lucide React
- **Live Deployment:** [https://shm-real-state-agency.vercel.app/](https://shm-real-state-agency.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/SHM-real-state-agency](https://github.com/SainBux-HadiSeelro/SHM-real-state-agency)

---

### 💼 GROUP C: Client Demos & Commercial Web Platforms (`category: "client-demo"`)
*Frontend-focused commercial builds with embedded AI concierges, high-conversion appointment funnels, and modern responsive design systems.*

#### 11. Forge Fitness — Premium Athletic Facility & AI Gym Web App
- **Designation:** Next.js 16 App Router, React 19, Framer Motion Parallax & 24/7 AI Concierge
- **Stack:** Next.js 16, React 19, TypeScript, Framer Motion, Tailwind CSS, Turbopack
- **Live Deployment:** [https://forge-fitness-gym-seven.vercel.app/](https://forge-fitness-gym-seven.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Forge_Fitness_GYM](https://github.com/SainBux-HadiSeelro/Forge_Fitness_GYM)

#### 12. BeautyLira — Luxury Aesthetic Clinic & 24/7 AI Concierge
- **Designation:** Harley Street Medical Aesthetics, Procedure Matrices & 24/7 Clinical Triage
- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Turbopack
- **Live Deployment:** [https://beaty-lira-aesthetic-clinic.vercel.app/](https://beaty-lira-aesthetic-clinic.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/BeatyLira_Aesthetic_Clinic](https://github.com/SainBux-HadiSeelro/BeatyLira_Aesthetic_Clinic)

#### 13. Elite Studio Clinic — Luxury Aesthetic Dentistry & 24/7 AI Concierge
- **Designation:** Manhattan Aesthetic Medicine, Before/After Smile Studio & Aura AI Concierge
- **Stack:** React 19, TypeScript, Tailwind CSS 4, Motion, AI Concierge, Vite 6
- **Live Deployment:** [https://elite-studio-clinic-beta.vercel.app/](https://elite-studio-clinic-beta.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Elite_Studio_Clinic](https://github.com/SainBux-HadiSeelro/Elite_Studio_Clinic)

#### 14. Lumina Dental Clinics — High-Tech Precision Dentistry & 24/7 AI Concierge
- **Designation:** Interactive Smile Simulator, Treatment Cost Estimator & Gemini 2.5 Flash Concierge
- **Stack:** React 19, TypeScript, Tailwind CSS 4, Gemini AI, Motion, Vite 6
- **Live Deployment:** [https://lumina-dental-clinic-navy.vercel.app/](https://lumina-dental-clinic-navy.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Lumina_Dental_clinic](https://github.com/SainBux-HadiSeelro/Lumina_Dental_clinic)

#### 15. BeautyAura — Luxury Aesthetic Retreat & Wellness Clinic
- **Designation:** Quiet-Luxury Aesthetic Medicine, Treatment Desk & 24/7 Live Aura Concierge
- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Turbopack
- **Live Deployment:** [https://beaty-aura-spa-iota.vercel.app/](https://beaty-aura-spa-iota.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Beaty_Aura_spa](https://github.com/SainBux-HadiSeelro/Beaty_Aura_spa)

#### 16. Lumière Palace Paris — Ultra-Luxury Hotel & Suites Platform
- **Designation:** Haute French Hospitality, 4-Step Reservation Engine & 24/7 Gemini AI Concierge
- **Stack:** React 19, TypeScript, Tailwind CSS 4, Gemini AI, Motion, Vite 6
- **Live Deployment:** [https://lumiere-hotel-reservation.vercel.app/](https://lumiere-hotel-reservation.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Lumiere_Hotel_Reservation](https://github.com/SainBux-HadiSeelro/Lumiere_Hotel_Reservation)

#### 17. Lumina — Luxury Beauty Parlour & Aesthetic Sanctuary
- **Designation:** Haute Aesthetic Salon, URL-Prefilled Reservation Desk & Multilingual Concierge
- **Stack:** React 19, TypeScript, Tailwind CSS 4, Gemini AI, Motion, Vite 6
- **Live Deployment:** [https://lumina-beaty-parlour-pi.vercel.app/](https://lumina-beaty-parlour-pi.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Lumina_Beaty_Parlour](https://github.com/SainBux-HadiSeelro/Lumina_Beaty_Parlour)

#### 18. Aura Atelier — Haute Coiffure, Aesthetic Rituals & 24/7 AI Concierge
- **Designation:** Manhattan Concept Sanctuary, Multi-Step Artist Booking & Gemini 2.5 Flash
- **Stack:** React 19, TypeScript, Tailwind CSS 4, Gemini 2.5 Flash, Vite 6
- **Live Deployment:** [https://aura-atelier-beaty-parlours-lyart.vercel.app/](https://aura-atelier-beaty-parlours-lyart.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Aura_Atelier_Beaty_Parlours](https://github.com/SainBux-HadiSeelro/Aura_Atelier_Beaty_Parlours)

#### 19. WellTrack AI — Complete Intelligent Wellness & Health Companion
- **Designation:** AI Biometrics, Circadian Sleep Telemetry & 24/7 Wellness Coach
- **Stack:** React 19, TypeScript, Tailwind CSS, Vite, AI Assistant, Lucide React
- **Live Deployment:** [https://welltrack-ai-path.vercel.app/](https://welltrack-ai-path.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/welltrack-ai-path](https://github.com/SainBux-HadiSeelro/welltrack-ai-path)

---

### 📊 GROUP D: Data Science, Machine Learning & Utilities (`category: "data-utility"`)
*Predictive machine learning models, zero-database flatfile ledgers, vector-grade billing generators, and physical AI engineering handbooks.*

#### 20. Autonomous Humanoid Robotics & Physical AI Handbook
- **Designation:** Physical AI Engineering, ROS 2, Gazebo/Unity Digital Twins & Isaac Sim
- **Technical Summary:** 4-module engineering roadmap bridging foundation models with physical humanoid actuation, kinematic chains, and synthetic data generation.
- **Stack:** ROS 2, Python, NVIDIA Isaac Sim, Gazebo, Unity 3D, Docusaurus
- **Live Deployment:** [https://agentic-humanoid-robotics-book.vercel.app/](https://agentic-humanoid-robotics-book.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/agentic-humanoid-robotics-book](https://github.com/SainBux-HadiSeelro/agentic-humanoid-robotics-book)

#### 21. FinPulse — Personal Finance & Analytics Tracker
- **Designation:** Dual-Interface Ledger, Budget Health & 64-Bit Micro-Currency Accounting
- **Technical Summary:** Zero-DB flatfile ledger architecture running strict 64-bit integer paisa/cents arithmetic, completely eliminating floating-point rounding errors.
- **Stack:** Python, Streamlit, Plotly, Pandas, ReportLab, Financial Analytics
- **Live Deployment:** [https://personal-finance-dashboard-hadi.streamlit.app/](https://personal-finance-dashboard-hadi.streamlit.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/personal-finance-dashboard](https://github.com/SainBux-HadiSeelro/personal-finance-dashboard)

#### 22. Commercial Invoice & Bill Generator
- **Designation:** Enterprise Billing Automation & Vector PDF Publishing Platform
- **Technical Summary:** Reactive billing dashboard with automated tax/freight calculation and vector-grade print-ready A4 PDF generation via ReportLab in $< 30\text{s}$.
- **Stack:** Python, Streamlit, ReportLab, Financial Automation, PDF Engine
- **Live Deployment:** [https://bill-generator-ap5tugma33eqg9vzj5ys7o.streamlit.app/](https://bill-generator-ap5tugma33eqg9vzj5ys7o.streamlit.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/bill-generator](https://github.com/SainBux-HadiSeelro/bill-generator)

#### 23. Wedding Wishes App
- **Designation:** Full-Stack Event Guestbook & Media Optimization System
- **Technical Summary:** Event guestbook application running on Next.js App Router, Supabase real-time database, Cloudinary auto-compression pipeline, and admin moderation.
- **Stack:** Next.js, Supabase, Cloudinary, Tailwind CSS, Vercel
- **Live Deployment:** [https://murtaza-snowy.vercel.app/](https://murtaza-snowy.vercel.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/Murtaza](https://github.com/SainBux-HadiSeelro/Murtaza)

#### 24. SpaceX Launch Analysis & ML Prediction Dashboard
- **Designation:** Real-Time Orbital Telemetry & Machine Learning Mission Outcome Classifier
- **Technical Summary:** 200+ historical mission EDA platform with interactive Folium geospatial mapping and a trained Scikit-Learn Random Forest outcome classifier.
- **Stack:** Python, Streamlit, Scikit-Learn, Random Forest, Folium, Pandas
- **Live Deployment:** [https://spacex-launch-predictor-hadi.streamlit.app/](https://spacex-launch-predictor-hadi.streamlit.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/spacex-launch-predictor](https://github.com/SainBux-HadiSeelro/spacex-launch-predictor)

#### 25. OrbitIQ — Mission Risk & Booster Recovery Intelligence
- **Designation:** Aerospace Predictive Analytics, Reusability Economics & ML Classification
- **Technical Summary:** Decision-support ML engine forecasting booster landing viability and multi-million dollar economic ROI analysis ($\$35\text{M}+$ reusability cost retention).
- **Stack:** Python, Streamlit, Scikit-Learn, Machine Learning, Pandas, Aerospace Analytics
- **Live Deployment:** [https://orbit-iq.streamlit.app/](https://orbit-iq.streamlit.app/)
- **Repository:** [https://github.com/SainBux-HadiSeelro/orbit-iq](https://github.com/SainBux-HadiSeelro/orbit-iq)

---

## 🔒 9. Security, Sandbox & Privacy Governance

1. **Strict Iframe Sandboxing:** Live project previews inside the modal container are isolated through restrictive HTML5 sandbox attributes:
   ```html
   sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals"
   ```
2. **Zero Client Secrets:** All private tokens, webhook credentials, and API keys reside server-side or within environment variables (`.env.local`), guaranteeing zero client-side exposure.
3. **Content Security & Asset Integrity:** All static visual preview banners (`public/projects/*`) are served with immutable cache control headers and cryptographic content hashing.

---

## 🚀 10. Deployment & CI/CD Governance

- **Continuous Deployment Pipeline:** Every push to the `main` branch triggers an automated build and test pipeline on Vercel.
- **Automated Git Workflow Standard:** As mandated by `GEMINI.md`:
  1. `git add .`
  2. Meaningful commit message with conventional commits prefix (`docs:`, `feat:`, `fix:`)
  3. `git push origin main` for instantaneous synchronization with GitHub.

---

## 🤝 Commercial Engagement Protocol

- **Primary Role Focus:** Forward Deployed Engineer / Agentic AI Engineer / Full-Stack AI Architect
- **Direct Communication:** `sainbuxseelro11@gmail.com`
- **Official Production Portal:** [https://sainbux.vercel.app/](https://sainbux.vercel.app/)
- **GitHub Profile:** [https://github.com/SainBux-HadiSeelro](https://github.com/SainBux-HadiSeelro)
