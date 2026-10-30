export interface SubProject {
  title: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  tech?: string[];
}

export type ProjectCategory = "agentic" | "ai-integrated" | "client-demo" | "data-utility";

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

export const projectsData: Project[] = [
  // =========================================================================
  // GROUP A: Featured Agentic Systems
  // =========================================================================
  {
    id: "loop-engineering-series",
    title: "Loop Engineering Series (12 Projects)",
    subtitle: "Complete Collection of Self-Correcting Agent Architectures",
    badge: "Agentic",
    summary:
      "Eliminates non-deterministic LLM failures using modular self-correction loops, schema validation interceptors, and autonomous retry pipelines.",
    description:
      "A comprehensive series of 12 distinct projects demonstrating deterministic agent feedback loops, evaluator-optimizer patterns, schema guards, and autonomous retry systems.",
    problem:
      "LLMs are non-deterministic; production systems require predictable, verifiable, and contract-bound execution loops.",
    solution:
      "Developed 12 modular repositories illustrating progressive loop engineering paradigms from single-step retries to complex hierarchical state graphs.",
    // TODO: add metric on test suite coverage and error reduction rate
    result:
      "12 fully documented production-grade recipes serving as building blocks for enterprise agent pipelines.",
    highlights: [
      "12 self-correction architectures from AST syntax fixers to dynamic DAG planners",
      "Schema guard interceptors validating structured outputs with automated retry loops",
      "Memory guards and state compactor preventing context bloat and token drift",
    ],
    tech: ["Python", "OpenAI SDK", "Loop Engineering", "Structured Outputs", "Pytest", "AsyncIO"],
    liveUrl: "https://github.com/SainBux-HadiSeelro",
    repoUrl: "https://github.com/SainBux-HadiSeelro/loop-engineering-series",
    featured: true,
    category: "agentic",
    isCollection: true,
    subProjects: [
      {
        title: "01. Basic Self-Correction Loop",
        description: "Schema validation interceptor that retries LLM outputs until valid JSON schema is met.",
        tech: ["Python", "OpenAI SDK"],
      },
      {
        title: "02. Tool Output Evaluator",
        description: "Evaluator node checking tool execution return codes and synthesizing recovery steps.",
        tech: ["Pydantic", "Tool Calling"],
      },
      {
        title: "03. Code Sandbox & Syntax Fixer",
        description: "Executes generated Python in a sandboxed runtime and feeds tracebacks back to the agent.",
        tech: ["Python Subprocess", "AST Parsing"],
      },
      {
        title: "04. Web Scraper Self-Healing Extractor",
        description: "Detects layout changes on target websites and rewrites CSS/XPath selectors automatically.",
        tech: ["BeautifulSoup", "LLM Extraction"],
      },
      {
        title: "05. Multi-Turn Planning Graph",
        description: "Dynamic DAG planner that prunes invalid branch steps during ongoing task runs.",
        tech: ["State Graphs", "OpenAI"],
      },
      {
        title: "06. SQL Query Self-Corrector",
        description: "Validates SQL against actual schema and auto-fixes SQL syntax & foreign key mismatches.",
        tech: ["SQLite", "Schema Guard"],
      },
      {
        title: "07. Reflection & Critique Agent",
        description: "Two-agent critic loop scoring content drafts and revising until threshold >= 9.0/10.",
        tech: ["Dual Agent Loop", "Prompt Eval"],
      },
      {
        title: "08. API Rate-Limit & Backoff Manager",
        description: "Exponential backoff agent loop with token tracking and dynamic payload truncation.",
        tech: ["AsyncIO", "Token Counting"],
      },
      {
        title: "09. Document Chunking & Re-Ranker Loop",
        description: "Self-correcting RAG loop evaluating retrieval context relevance before generation.",
        tech: ["RAG", "Embeddings"],
      },
      {
        title: "10. Memory Guard & State Compactor",
        description: "Monitors context window bloat and summarizes historic state without losing action logs.",
        tech: ["Sliding Memory", "OpenAI"],
      },
      {
        title: "11. Human-in-the-Loop Approval Interceptor",
        description: "Suspends loop state at high-stakes action boundaries and awaits cryptographic signature.",
        tech: ["Webhooks", "HITL"],
      },
      {
        title: "12. End-to-End Autonomous Agentic Pipeline",
        description: "The complete unified framework synthesizing all 11 previous loop engineering patterns.",
        tech: ["Full Architecture", "Production Ready"],
      },
    ],
  },
  {
    id: "excel-ai-agent",
    title: "Excel AI Agent — Autonomous Multilingual Spreadsheet Assistant",
    subtitle: "Bilingual Natural Language Execution (English & Roman Urdu) with Deterministic Tool Calling",
    badge: "Agentic",
    summary:
      "Bridges spreadsheet barriers by interpreting bilingual natural language prompts into deterministic Excel operations within an isolated sandbox.",
    description:
      "A production-grade autonomous spreadsheet assistant engineered with Python and Streamlit, interpreting natural language prompts in both English and Roman Urdu to safely execute formulas, analytics, deduplication, and charting on Excel (.xlsx) files.",
    problem:
      "Non-technical teams and regional users face severe barriers writing nested formulas and navigating complex multi-sheet workbooks in English-only interfaces, risking data corruption without safety sandboxes.",
    solution:
      "Architected an autonomous agentic execution loop powered by 15+ deterministic openpyxl/pandas tools, bilingual prompt parsing, isolated workspace sessions with version snapshotting, and destructive action guards.",
    // TODO: add metric for formula execution accuracy and user time saved
    result:
      "Zero accidental data loss through automated version rollbacks, 100% test pass rate across 23 pytest suites, and sub-second live formula evaluation.",
    highlights: [
      "15+ deterministic openpyxl tools executing formulas, deduplication, and pivot tables",
      "Isolated sandbox sessions with snapshot backups and instant rollback protection",
      "Bilingual natural language parser supporting English and Roman Urdu instructions",
    ],
    tech: ["Python", "Streamlit", "OpenPyXL", "Pandas", "Gemini API", "Tool Calling"],
    liveUrl: "https://excel-agent-ai.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/excel-ai-agent",
    image: "/projects/excel-ai-agent.png",
    imageLabel: "Live Bilingual Spreadsheet AI Agent",
    featured: true,
    category: "agentic",
  },
  {
    id: "elite-fitness-gym",
    title: "ELITE FITNESS — Autonomous Multi-Agent AI Luxury Gym",
    subtitle: "React 18, Strict TypeScript, Multi-Agent Swarm Orchestrator & Live Tool Calling Engine",
    badge: "Agentic",
    summary:
      "Replaces static gym portals with a 4-agent swarm that computes biometric protocols and automates consultation bookings in real time.",
    description:
      "An enterprise-grade luxury fitness platform powered by an Autonomous Multi-Agent AI Swarm (Nova, Titan, MacroCore, BioScan), transparent reasoning execution traces, real-time computational tool calling, and Olympic-grade facility specifications.",
    problem:
      "Conventional fitness websites rely on static forms and rigid scripted chatbots that cannot collaborate dynamically, perform biometric math, or synthesize customized workout protocols.",
    solution:
      "Engineered an autonomous multi-agent orchestration architecture featuring a semantic router dispatcher, four specialized domain agents, live tool-calling engines, and interactive luxury UI with biometric calculators.",
    // TODO: add metric for swarm resolution latency under peak load
    result:
      "Sub-100ms tool execution latency, transparent multi-agent reasoning logs, 100% automated VIP trial pass issuance, and high-conversion facility engagement.",
    highlights: [
      "Multi-agent swarm architecture coordinating four domain-specialized autonomous agents",
      "Deterministic computational tool calling for biometric BMI and macronutrient calculations",
      "Transparent agent reasoning traces streaming intent classification and tool execution logs",
    ],
    tech: ["React 18", "TypeScript", "Multi-Agent Swarm", "Tool Calling", "Tailwind CSS", "Vite 5"],
    liveUrl: "https://elite-fitness-gym-two.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Elite_Fitness_GYM",
    image: "/projects/elite-fitness-gym.png",
    imageLabel: "Live Autonomous Multi-Agent AI Gym",
    featured: true,
    category: "agentic",
  },
  {
    id: "nexus-mind-platform",
    title: "Nexus Mind — Autonomous Multi-Agent Gaming & Intelligence Platform",
    subtitle: "Autonomous Multi-Agent Swarm, Shannon Entropy Telemetry & 24/7 Contextual AI Concierge",
    badge: "Agentic",
    summary:
      "Solves black-box guessing game mechanics by orchestrating multi-agent duels paired with real-time Shannon entropy telemetry.",
    description:
      "A high-performance agentic platform transforming number deduction into a coordinated Multi-Agent System (MAS) featuring Nexus Arbiter, Oracle Telemetry computing Shannon Entropy in real time, and Nova — a 24/7 bilingual live contextual AI concierge with dual-engine fallback.",
    problem:
      "Traditional interactive guessing utilities rely on procedural scripts with no state intelligence, lacking agentic coordination, telemetry metrics, or resilient AI assistance.",
    solution:
      "Engineered an autonomous multi-agent architecture with three specialized agents: Nexus Arbiter, Oracle Telemetry (real-time Shannon Entropy H=log2(N)), and Nova 24/7 live AI concierge backed by a dual-engine architecture (Offline Heuristic RAG + OpenAI).",
    // TODO: add metric on entropy reduction speed per turn
    result:
      "Sub-millisecond state synchronization across dual engines, real-time Shannon Entropy telemetry in bits, and turn-based Human vs Autonomous AI duel gameplay.",
    highlights: [
      "Nexus Arbiter and Oracle Telemetry agents calculating Shannon entropy in real time",
      "Dual-engine 24/7 AI concierge with offline heuristic RAG fallback and OpenAI integration",
      "Turn-based human versus autonomous AI duel modes with live reasoning streams",
    ],
    tech: ["Python", "Streamlit", "Multi-Agent System", "OpenAI SDK", "Information Theory", "Session State"],
    liveUrl: "https://nexus-mind-agentic-platform.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/nexus-mind-agentic-platform",
    image: "/projects/nexus-mind-platform.png",
    imageLabel: "Live Autonomous Multi-Agent Gaming Platform",
    featured: true,
    category: "agentic",
  },
  {
    id: "apex-game",
    title: "ApexRPS — Autonomous Agentic Decision Platform & 24/7 Live AI Concierge",
    subtitle: "Markov Transition State Engine, Win-Stay Lose-Shift Heuristics & 24/7 Contextual AI Concierge",
    badge: "Agentic",
    summary:
      "Overcomes predictable game bots by combining Markov transition matrices, behavioral heuristics, and real-time probability telemetry.",
    description:
      "An enterprise-grade agentic decision platform elevating Rock-Paper-Scissors into a high-performance demonstration of Statistical Machine Learning, Behavioral Game Theory, and Multi-Agent Systems.",
    problem:
      "Conventional Rock-Paper-Scissors implementations rely on trivial pseudorandom choice scripts with zero cognitive intelligence, absent probabilistic telemetry, and no stateful human behavioral modeling.",
    solution:
      "Architected a multi-agent decision engine synthesizing 1st and 2nd-order Markov transition matrices with bounded-rationality WSLS psychological heuristics and dynamic Bayesian ensemble weighting.",
    // TODO: add metric for win-rate advantage over random choice baseline
    result:
      "Empirical behavioral anticipation outperforming random baselines, transparent sub-second Chain-of-Thought reasoning, and continuous zero-downtime AI concierge assistance.",
    highlights: [
      "Ensemble decision core synthesizing 1st/2nd-order Markov chains with Win-Stay Lose-Shift heuristics",
      "Real-time Bayesian probability distribution streaming with live move confidence telemetry",
      "Dual-engine concierge with local heuristic RAG and cloud LLM execution fallback",
    ],
    tech: ["Python", "Streamlit", "Markov Chains", "Bayesian Inference", "Game Theory", "OpenAI SDK"],
    liveUrl: "https://apex-game.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/apex-game",
    image: "/projects/apex-rps-platform.png",
    imageLabel: "Live Agentic Decision HUD & AI Concierge",
    featured: true,
    category: "agentic",
  },
  {
    id: "agentic-story-studio",
    title: "NexusNarrative — Smart Multi-Agent Story Studio",
    subtitle: "Autonomous Multi-Agent Story Pipeline, Dynamic Mad Libs Engine & Story Analytics",
    badge: "Agentic",
    summary:
      "Eliminates brittle generative storytelling by coordinating four specialized agents to write, review, and score interactive narratives.",
    description:
      "A creative AI-assisted storytelling platform and multi-agent pipeline featuring an Input Assistant, Director Assistant, Story Writer, and Reviewer Assistant with one-click presets, real-time quality scoring, and instant Markdown export.",
    problem:
      "Traditional Mad Libs games and generative prompt toys rely on brittle string concatenation without lexical validation, contextual role specialization, or automated narrative evaluation.",
    solution:
      "Architected a modular multi-agent pipeline with four specialized agents (Input Assistant, Director Assistant, Story Writer, Reviewer Assistant), Glassmorphism dark UI, and automated story scorecard analytics.",
    // TODO: add metric on generation-to-review loop latency
    result:
      "Seamless multi-agent story synthesis with automated quality scoring, reading time analytics, and one-click Markdown/TXT export pipeline.",
    highlights: [
      "Four-agent pipeline: Input Assistant, Director, Story Writer, and Reviewer Assistant",
      "Automated narrative quality scoring with dynamic word count and reading time metrics",
      "One-click theme presets with real-time session state management and Markdown export",
    ],
    tech: ["Python", "Streamlit", "Multi-Agent Pipeline", "NLP", "UV Package Manager", "Session State"],
    liveUrl: "https://agentic-story-studio.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/agentic-story-studio",
    image: "/projects/agentic-story-studio.png",
    imageLabel: "Live Multi-Agent Story Studio",
    featured: true,
    category: "agentic",
  },
  {
    id: "chronoflow-ai",
    title: "ChronoFlow-AI — Modern Agentic Focus Orchestrator & 24/7 AI Assistant",
    subtitle: "Zero-Latency 60 FPS Non-Blocking SVG Engine, NLP Mission Dispatcher & Resident AI Concierge",
    badge: "Agentic",
    summary:
      "Decouples temporal execution into a client-side 60 FPS SVG engine, paired with an NLP mission dispatcher and 24/7 live resident AI assistant.",
    description:
      "A next-generation deep work focus orchestrator engineered with Python and Streamlit, featuring a zero-latency client-side SVG circular timer, regex semantic NLP tokenizer for natural language time parsing, browser-native Web Audio API harmonic chime alerts, and a floating 24/7 bilingual resident AI assistant.",
    problem:
      "Traditional Streamlit countdown timers rely on server-side sleep loops (time.sleep) that block threads, freeze the UI, prevent live pausing, drop frames, and crash upon user interaction.",
    solution:
      "Architected an event-driven client-side SVG HUD engine running at 60 FPS with instant pause/resume controls, coupled with an NLP mission dispatcher, zero-dependency Web Audio synthesizer, and a permanent bottom-right resident AI support widget.",
    result:
      "Zero UI freeze latency, fluid 60 FPS circular dash-offset animations without thread-blocking, and 24/7 offline-first bilingual productivity triage.",
    highlights: [
      "Client-side 60 FPS non-blocking circular SVG HUD with dynamic stroke-dashoffset transitions",
      "24/7 floating corner resident AI assistant with bilingual support (English & Roman Urdu)",
      "Natural language mission dispatcher extracting composite time units and focus targets",
      "Zero-dependency Web Audio API harmonic chime synthesizer (C5–E5–G5–C6)",
    ],
    tech: ["Python", "Streamlit", "Autonomous Agents", "SVG Animations", "Web Audio API", "NLP Tokenizer"],
    liveUrl: "https://chronoflow-ai.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/chronoflow-ai",
    image: "/projects/chronoflow-ai.png",
    imageLabel: "Live ChronoFlow-AI Timer & HUD",
    featured: true,
    category: "agentic",
  },

  // =========================================================================
  // GROUP B: AI-Integrated Apps
  // =========================================================================
  {
    id: "agentic-hangman",
    title: "Hangman: Modern AI Edition & 24/7 NEXUS AI Assistant",
    subtitle: "Cyberpunk Word Deduction, Reactive State Machine & Embedded Resident Agent",
    badge: "AI-Integrated",
    summary:
      "Transforms classic word deduction by embedding an autonomous resident AI agent for contextual, spoiler-free gameplay hints.",
    description:
      "A next-generation cyberpunk word deduction web application engineered with Python and Streamlit, featuring NEXUS-7 — an embedded 24/7 autonomous resident AI agent delivering contextual non-spoilery hints, multi-domain knowledge retrieval, and interactive developer intelligence.",
    problem:
      "Conventional word-guessing games rely on static terminal scripts with zero contextual guidance, punitive penalty loops, and no intelligent resident assistance when users encounter cognitive bottlenecks.",
    solution:
      "Architected a reactive event-driven state machine with dynamic heart-life telemetry and ASCII visual containment, integrated with an autonomous resident AI agent (NEXUS AI) operating via an offline-first heuristic neural knowledge base and cloud LLM fallback.",
    // TODO: add metric on hint accuracy rate across test sessions
    result:
      "100% accessible zero-downtime gameplay across 4 curated knowledge domains, instant 1-click agent hint triggers, and dynamic streak scoring.",
    highlights: [
      "Embedded resident AI agent (NEXUS-7) delivering contextual hints via offline-first heuristics",
      "Reactive turn-based state machine tracking life telemetry and ASCII visual containment",
      "Interactive virtual cyber keypad with real-time state feedback and keyboard listeners",
    ],
    tech: ["Python", "Streamlit", "Autonomous Agents", "State Machines", "Knowledge Retrieval", "Cyberpunk CSS"],
    liveUrl: "https://agentic-hangman.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Agentic-Hangman-2.0",
    image: "/projects/agentic-hangman.png",
    imageLabel: "Live Agentic Hangman & NEXUS AI",
    featured: true,
    category: "ai-integrated",
  },
  {
    id: "ironpulse-fitness-hub",
    title: "IRONPULSE — Ultra-Premium Fitness & 24/7 Performance Hub",
    subtitle: "Next.js 16 App Router, React 19, Tailwind v4 & 24/7 Live PulseAI Concierge",
    badge: "AI-Integrated",
    summary:
      "Solves facility info fragmentation for strength athletes with real-time telemetry indexing and an embedded 24/7 concierge agent.",
    description:
      "A high-octane fitness web application engineered for elite strength athletes and powerlifters. Features competition-grade facility specs, live gym telemetry indexing, interactive biometric BMI calculator, and an embedded 24/7 Live AI Gym Concierge ('PulseAI').",
    problem:
      "Modern athletic facilities struggle to convey complex equipment specs and personal coaching philosophies online while lacking immediate 24/7 triage for membership pass inquiries.",
    solution:
      "Engineered an ultra-fast Next.js 16 web platform styled with Tailwind CSS v4 and Framer Motion micro-interactions, facility telemetry benchmarks, an interactive biometric BMI engine, and an autonomous 24/7 Live AI Concierge ('PulseAI').",
    // TODO: add metric on automated pass generation volume
    result:
      "Zero-latency TTFB via Turbopack, sub-second interactive client calculations, and 24/7 lead capture and VIP trial pass distribution with verified digital confirmation tokens.",
    highlights: [
      "PulseAI concierge agent generating verifiable VIP guest pass tokens on demand",
      "Real-time gym telemetry tracking live occupancy, HEPA air quality, and temperature",
      "Client-side biometric BMI and metabolic health assessment calculator",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Turbopack"],
    liveUrl: "https://ironpulse-hadi-com.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/ironpulse-hadi.com",
    image: "/projects/ironpulse-fitness.png",
    imageLabel: "Live Ultra-Premium Fitness Hub & PulseAI",
    featured: true,
    category: "ai-integrated",
  },
  {
    id: "luvia-ecommerce",
    title: "LUVIA — Minimalist Luxury eCommerce & 24/7 AI Concierge",
    subtitle: "Ethereal Luxury Design Objects, React 19, Tailwind v4 & 24/7 Live AI Customer Concierge",
    badge: "AI-Integrated",
    summary:
      "Streamlines luxury product evaluation with architectural spec tables and an AI shopping concierge enabling direct in-chat purchases.",
    description:
      "A high-performance minimalist luxury eCommerce web application exploring the intersection of raw materiality, ethereal design, detailed technical product specifications, and an intelligent 24/7 AI Customer Support Concierge with direct in-chat shopping actions.",
    problem:
      "Modern luxury e-commerce demands instant assistance for complex technical specifications, dimensions, finishes, and VIP checkout flows without clunky forms or slow human email loops.",
    solution:
      "Engineered an ultra-fast React 19 and Vite 6 platform styled with Tailwind CSS v4 and Framer Motion micro-interactions, persistent cart state, VIP promo validation, and an embedded 24/7 AI Concierge.",
    // TODO: add metric on in-chat purchase conversion lift
    result:
      "Sub-second client-side catalog navigation, zero checkout friction with instant cart actions, and 24/7 real-time AI product guidance with direct in-chat purchase cards.",
    highlights: [
      "24/7 AI concierge with domain knowledge base and direct in-chat cart checkout actions",
      "Persistent client cart state with dynamic search and coupon discount verification",
      "Detailed architectural specifications matrix and responsive image showcase",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI", "Framer Motion", "Vite 6"],
    liveUrl: "https://luvia-e-commerce.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Luvia-eCommerce",
    image: "/projects/luvia-ecommerce.png",
    imageLabel: "Live Luxury eCommerce & AI Concierge Experience",
    featured: true,
    category: "ai-integrated",
  },
  {
    id: "shm-real-estate-agency",
    title: "SHM Real Estate — AI Lead Generation & Qualification System",
    subtitle: "Autonomous Real Estate Funnel, 24/7 AI Qualification & Appointment Booking Engine",
    badge: "AI-Integrated",
    summary:
      "Solves slow brokerage response times by automating buyer qualification and calendar booking with an intelligent conversational funnel.",
    description:
      "A turnkey enterprise real estate client acquisition platform powered by 24/7 conversational AI advisors that engage, screen, and qualify high-intent property buyers and sellers with instant CRM calendar booking.",
    problem:
      "Traditional real estate brokerages lose high-intent potential clients due to slow response times, unorganized follow-ups, and agents spending valuable hours touring with unqualified leads.",
    solution:
      "Architected an automated lead conversion engine with instant 24/7 AI lead capture, real-time budget and timeline intent scoring, multi-channel automated drip follow-ups, and live agent calendar sync.",
    // TODO: add metric on calendar bookings per week
    result:
      "Fast conversational AI lead triage, increased lead qualification efficiency, and unified appointment routing directly to agent calendars.",
    highlights: [
      "24/7 conversational lead qualification scoring budget, location, and purchase timeline",
      "Automated calendar synchronization for scheduling verified property viewing tours",
      "Multi-stage lead conversion funnel with automated follow-up workflow triggers",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Conversational AI", "CRM Automation", "Lucide React"],
    liveUrl: "https://shm-real-state-agency.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/SHM-real-state-agency",
    image: "/projects/shm-real-estate.png",
    imageLabel: "Live Real Estate AI Lead Platform",
    featured: true,
    category: "ai-integrated",
  },

  // =========================================================================
  // GROUP C: Client Demos & Web Platforms
  // =========================================================================
  {
    id: "forge-fitness-gym",
    title: "Forge Fitness — Premium Athletic Facility & AI Gym Web App",
    subtitle: "Next.js 16 App Router, React 19, Framer Motion & 24/7 AI Concierge",
    badge: "Client Demo",
    summary:
      "Replaces static gym brochures with an interactive membership calculator and a 24/7 AI concierge for trial consultation booking.",
    description:
      "A cutting-edge web application for an elite strength and performance athletic facility. Features aggressive dark obsidian UI, dynamic parallax scroll, interactive membership calculator, and an embedded 24/7 AI Concierge assistant.",
    problem:
      "Traditional gym websites suffer from static layouts and lack immediate automated answers for membership queries and program recommendations.",
    solution:
      "Engineered an ultra-fast Next.js 16 web platform with React 19 and Framer Motion micro-interactions, interactive monthly/annual membership toggles, and an intelligent 24/7 AI chatbot.",
    // TODO: add metric for consultation conversion rate
    result:
      "Sub-second page load times with zero-latency TTFB via Turbopack and automated 24/7 visitor engagement and trial consultation capture.",
    highlights: [
      "Context-aware 24/7 AI concierge chatbot handling membership queries and trial bookings",
      "Interactive billing calculator with instant monthly versus annual discount toggling",
      "Hardware-accelerated Framer Motion parallax scroll and fluid micro-interactions",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Framer Motion", "Tailwind CSS", "Turbopack"],
    liveUrl: "https://forge-fitness-gym-seven.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Forge_Fitness_GYM",
    image: "/projects/forge-fitness.png",
    imageLabel: "Live Premium Gym Web Experience",
    featured: true,
    category: "client-demo",
  },
  {
    id: "beautylira-aesthetic-clinic",
    title: "BeautyLira — Luxury Aesthetic Clinic & 24/7 AI Concierge",
    subtitle: "Harley Street Medical Aesthetics, Next.js 16 App Router & 24/7 Live AI Concierge",
    badge: "Client Demo",
    summary:
      "Addresses patient downtime hesitations using clinical procedure comparisons and an embedded 24/7 medical aesthetics AI concierge.",
    description:
      "A high-converting digital platform engineered for a premier Harley Street aesthetic medicine clinic. Features editorial British luxury design language, medical-grade procedure showcases, and an always-on 24/7 Live AI Aesthetic Concierge.",
    problem:
      "High-end aesthetic clinics struggle to convert online visitors who hesitate over treatment downtime, pain levels, and procedural nuances outside regular clinic hours.",
    solution:
      "Engineered a Next.js 16 web application with an editorial warm ivory aesthetic, interactive procedure comparison matrices, and an embedded 24/7 Live AI Concierge that triages patient queries.",
    // TODO: add metric for patient intake qualification rate
    result:
      "Sub-second page navigation, zero build latency via Turbopack, and seamless 24/7 automated patient inquiry triage.",
    highlights: [
      "Embedded 24/7 clinical concierge agent triaging procedures, downtime, and pain levels",
      "Interactive before-and-after transformation galleries and procedure comparison matrices",
      "Optimized Next.js 16 App Router architecture with SSG pre-rendering and Turbopack",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Turbopack"],
    liveUrl: "https://beaty-lira-aesthetic-clinic.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/BeatyLira_Aesthetic_Clinic",
    image: "/projects/beautylira-clinic.png",
    imageLabel: "Live Luxury Aesthetic Clinic Experience",
    featured: true,
    category: "client-demo",
  },
  {
    id: "elite-studio-clinic",
    title: "Elite Studio Clinic — Luxury Aesthetic Dentistry & 24/7 AI Concierge",
    subtitle: "Manhattan Aesthetic Medicine, React 19, Obsidian Glassmorphism & 24/7 Live AI Concierge",
    badge: "Client Demo",
    summary:
      "Removes patient booking hesitation for cosmetic dentistry with interactive smile simulation and a 24/7 clinical triage concierge.",
    description:
      "A digital platform engineered for a premier Manhattan aesthetic & restorative dental clinic. Features obsidian glassmorphism design language, interactive smile transformation showcases, transparent fee matrices, and an always-on 24/7 Live AI Clinic Concierge ('Aura AI').",
    problem:
      "Patients researching high-ticket smile makeovers abandon clunky booking forms when fee schedules, downtime, and pain management are not answered immediately outside clinic hours.",
    solution:
      "Architected an ultra-fast React 19 and Vite 6 platform with Tailwind CSS 4, hardware-accelerated Motion micro-interactions, Before/After Smile Transformation Studio, and an autonomous 24/7 AI Concierge.",
    // TODO: add metric on consultation appointment requests
    result:
      "Sub-second page navigation, 100% type-safe compilation (0 TS errors), and automated 24/7 patient inquiry qualification and VIP consultation booking.",
    highlights: [
      "24/7 dental triage concierge (Aura AI) with transparent fee schedule intelligence",
      "Interactive smile transformation studio displaying verified before-and-after case outcomes",
      "VIP consultation appointment engine with instant calendar slot synchronization",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Motion", "AI Concierge", "Vite 6"],
    liveUrl: "https://elite-studio-clinic-beta.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Elite_Studio_Clinic",
    image: "/projects/elite-studio-clinic.png",
    imageLabel: "Live Luxury Aesthetic Dentistry Experience",
    featured: true,
    category: "client-demo",
  },
  {
    id: "lumina-dental-clinic",
    title: "Lumina Dental Clinics — High-Tech Precision Dentistry & 24/7 AI Concierge",
    subtitle: "Next-Gen Clinical Platform, React 19, Tailwind v4, Gemini 2.5 Flash & 24/7 AI Dental Concierge",
    badge: "Client Demo",
    summary:
      "Clarifies complex dental costs through interactive treatment financing estimators and a dual-engine Gemini AI clinical concierge.",
    description:
      "A futuristic clinical web platform engineered for modern boutique dentistry. Features an autonomous 24/7 AI Dental Concierge ('LUMINA-AI'), interactive Before/After Smile Transformation Simulator, dynamic treatment cost estimator, and clinical hardware specs matrix.",
    problem:
      "Traditional dental clinic websites lack transparent healthcare economics and leave patient pain and procedural inquiries unanswered outside business hours.",
    solution:
      "Engineered an ultra-fast React 19 and Vite 6 platform with Tailwind CSS v4, Before/After Smile Transformation Simulator, Treatment Cost Estimator, and a dual-engine 24/7 AI Dental Concierge powered by Google Gemini 2.5 Flash.",
    // TODO: add metric on payment plan calculator usage
    result:
      "Sub-second page navigation, zero-latency clinical triage, 100% type-safe compilation, and automated 24/7 patient inquiry qualification.",
    highlights: [
      "Dual-engine AI concierge powered by Gemini 2.5 Flash with deterministic clinical fallback",
      "Interactive smile transformation simulator with draggable split-view inspection",
      "Dynamic treatment cost and insurance estimator with live installment math",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI", "Motion", "Vite 6"],
    liveUrl: "https://lumina-dental-clinic-navy.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Lumina_Dental_clinic",
    image: "/projects/lumina-dental-clinic.png",
    imageLabel: "Live High-Tech Dental Experience",
    featured: true,
    category: "client-demo",
  },
  {
    id: "beauty-aura-spa",
    title: "BeautyAura — Luxury Aesthetic Retreat & Wellness Clinic",
    subtitle: "Quiet-Luxury Aesthetic Medicine, Next.js 16 App Router & 24/7 Live AI Concierge",
    badge: "Client Demo",
    summary:
      "Provides discreet wellness consultation through an interactive treatment desk and a 24/7 aesthetic retreat AI concierge.",
    description:
      "A serene web application engineered for high-end aesthetic clinics and luxury medical retreats. Embraces quiet luxury with warm earth tones, bespoke glassmorphism, restorative treatment showcases, and an always-on 24/7 Live AI Aesthetic Concierge ('Aura').",
    problem:
      "High-end wellness clients seek discreet guidance on delicate skin therapies and treatment downtimes outside standard consultation hours.",
    solution:
      "Engineered an ultra-refined Next.js 16 web application with React 19, custom stone palette, fluid Framer Motion micro-interactions, an interactive consultation booking engine, and an embedded 24/7 AI Concierge.",
    // TODO: add metric for after-hours booking inquiries
    result:
      "Sub-second page navigation with Turbopack and pre-rendered SSG routes, high-converting consultation pipeline, and 24/7 automated guest inquiry triage.",
    highlights: [
      "24/7 aesthetic concierge agent delivering tailored skincare guidance and treatment info",
      "Interactive consultation booking engine with client-side state persistence",
      "Pre-rendered Next.js 16 App Router routes with fluid Framer Motion animations",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Turbopack"],
    liveUrl: "https://beaty-aura-spa-iota.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Beaty_Aura_spa",
    image: "/projects/beauty-aura-spa.png",
    imageLabel: "Live Luxury Aesthetic Retreat Experience",
    featured: true,
    category: "client-demo",
  },
  {
    id: "lumiere-hotel-reservation",
    title: "Lumière Palace Paris — Ultra-Luxury Hotel & Suites Platform",
    subtitle: "Haute French Hospitality, React 19, Tailwind v4 & 24/7 Gemini AI Concierge",
    badge: "Client Demo",
    summary:
      "Replaces rigid hotel reservation systems with a multi-step booking engine and a 24/7 Gemini-powered Parisian concierge.",
    description:
      "A bespoke luxury hospitality web platform engineered for 5-star Parisian palaces and boutique resorts. Features haute dark obsidian glassmorphism, Champagne Gold accents, interactive 4-step suite reservation engine with dynamic voucher generation, and an always-on 24/7 AI Concierge.",
    problem:
      "Luxury travelers demand immediate answers regarding suite amenities and bespoke itineraries outside concierge working hours, while standard booking engines are rigid and slow.",
    solution:
      "Engineered an ultra-fast React 19 and Vite 6 platform with Tailwind CSS v4, Motion micro-interactions, interactive multi-step booking engine with date-range duration math, and a dual-engine 24/7 AI Concierge powered by Google Gemini 2.5 Flash.",
    // TODO: add metric on digital voucher confirmation speed
    result:
      "Sub-second page navigation, zero build latency via Vite 6, 100% uninterrupted 24/7 guest concierge availability, and frictionless luxury reservation flow.",
    highlights: [
      "24/7 luxury hospitality concierge powered by Gemini 2.5 Flash with offline fallback",
      "Interactive 4-step suite reservation workflow with dynamic stay duration calculations",
      "Instant digital booking voucher generation with verified confirmation tokens",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI", "Motion", "Vite 6"],
    liveUrl: "https://lumiere-hotel-reservation.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Lumiere_Hotel_Reservation",
    image: "/projects/lumiere-hotel-reservation.png",
    imageLabel: "Live Luxury Hotel Reservation Experience",
    featured: true,
    category: "client-demo",
  },
  {
    id: "lumina-beauty-parlour",
    title: "Lumina — Luxury Beauty Parlour & Aesthetic Sanctuary",
    subtitle: "Haute Aesthetic Salon Platform, React 19, Tailwind v4 & 24/7 Live AI Beauty Concierge",
    badge: "Client Demo",
    summary:
      "Eliminates booking friction with deep-linked treatment URLs and an embedded multilingual salon concierge supporting English and Urdu.",
    description:
      "An ultra-premium aesthetic salon and spa web platform engineered with editorial elegance, fluid micro-interactions, dark obsidian & champagne gold glassmorphism, dynamic service booking with URL pre-selection, and a native 24/7 Live AI Beauty Concierge agent.",
    problem:
      "High-end beauty clients require immediate guidance on ritual ingredients, bridal styling packages, and pricing at any hour, while standard salon websites rely on static menus.",
    solution:
      "Architected a React 19 and Vite 6 platform styled with Tailwind CSS v4 and Motion choreography, featuring smart query-param pre-filled reservations, dynamic lookbook gallery, and an always-on 24/7 AI Beauty Concierge equipped with Gemini 1.5 Flash.",
    // TODO: add metric on multilingual query completion rate
    result:
      "Uninterrupted 24/7 multilingual guest consultation (English & Urdu/Roman Urdu), sub-second page performance, and seamless conversion from AI recommendations to pre-filled reservations.",
    highlights: [
      "Multilingual 24/7 concierge agent supporting English, Urdu, and Roman Urdu queries",
      "Smart reservation desk pre-filling treatments from query parameters and lookbook picks",
      "Vite 6 architecture styled with Tailwind CSS v4 and Web Audio API chime feedback",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI", "Motion", "Vite 6"],
    liveUrl: "https://lumina-beaty-parlour-pi.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Lumina_Beaty_Parlour",
    image: "/projects/lumina-beauty-parlour.png",
    imageLabel: "Live Luxury Beauty Parlour Experience",
    featured: true,
    category: "client-demo",
  },
  {
    id: "aura-atelier-beauty-parlour",
    title: "Aura Atelier — Haute Coiffure, Aesthetic Rituals & 24/7 AI Concierge",
    subtitle: "Manhattan Luxury Concept Sanctuary, React 19, Tailwind v4 & Dual-Intelligence Gemini 2.5 Flash AI",
    badge: "Client Demo",
    summary:
      "Streamlines high-fashion salon bookings with multi-step artist selection and an offline-resilient Gemini AI beauty concierge.",
    description:
      "A luxury beauty salon web platform and client management portal engineered for high-fashion aesthetics. Features warm parchment tones, glassmorphism blur effects, bespoke multi-step booking modal with instant confirmation codes, and a 24/7 Live AI Beauty Concierge.",
    problem:
      "High-end beauty clients require immediate guidance on ritual formulations, bridal packages, and artist availability at any hour without waiting for slow phone triage.",
    solution:
      "Architected an ultra-fast React 19 and Vite 6 platform styled with Tailwind CSS v4, multi-category ritual curation, seamless master artist selection, and an always-on 24/7 AI Beauty Concierge equipped with Gemini 2.5 Flash.",
    // TODO: add metric on artist appointment conversion rate
    result:
      "24/7 client triage with sub-second page performance, frictionless multi-step appointment bookings with instant confirmation codes, and automated conversion from recommendations to reserved visits.",
    highlights: [
      "Dual-intelligence beauty concierge powered by Gemini 2.5 Flash with offline resilience",
      "Multi-step appointment booking engine with service filtering and instant confirmation codes",
      "Interactive lightbox portfolio showcasing hair, couture, and facial treatments",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini 2.5 Flash", "Vite 6"],
    liveUrl: "https://aura-atelier-beaty-parlours-lyart.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Aura_Atelier_Beaty_Parlours",
    image: "/projects/aura-atelier-beauty-parlour.png",
    imageLabel: "Live Luxury Atelier & AI Concierge Experience",
    featured: true,
    category: "client-demo",
  },
  {
    id: "welltrack-ai",
    title: "WellTrack AI — Complete Intelligent Wellness & Health Companion",
    subtitle: "AI Biometrics, Nutrition Planning, Sleep Analytics & 24/7 Wellness Coach",
    badge: "Client Demo",
    summary:
      "Consolidates fragmented health tracking by combining vitality scoring, circadian sleep telemetry, and an interactive 24/7 AI coach.",
    description:
      "A comprehensive, intelligent health and wellness platform combining AI-driven vitality scoring, personalized nutrition guidance, sleep rhythm analysis, daily habit tracking, and an interactive 24/7 AI wellness coach.",
    problem:
      "Personal wellness metrics are typically scattered across fragmented tracking tools without synthesized guidance, leaving individuals without actionable health insights.",
    solution:
      "Engineered a unified wellness web ecosystem featuring dynamic 0-100 Vitality scoring, circadian sleep telemetry, personalized hydration & macro targets, daily journal reflections, and an always-on 24/7 AI health assistant.",
    // TODO: add metric on user habit adherence tracking
    result:
      "Seamless biometric synchronization, sub-second responsive interaction across devices, personalized daily recovery tips, and unified all-in-one health habit tracking.",
    highlights: [
      "24/7 interactive wellness coach offering real-time habit recommendations",
      "Composite vitality scoring algorithm aggregating sleep, activity, and hydration metrics",
      "Circadian recovery telemetry with personalized hydration and macro planning",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "AI Assistant", "Lucide React"],
    liveUrl: "https://welltrack-ai-path.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/welltrack-ai-path",
    image: "/projects/welltrack-ai.png",
    imageLabel: "Live AI Health & Wellness Platform",
    featured: true,
    category: "client-demo",
  },

  // =========================================================================
  // GROUP D: Data, ML & Utilities
  // =========================================================================
  {
    id: "agentic-humanoid-robotics-book",
    title: "Autonomous Humanoid Robotics & Physical AI Handbook",
    subtitle: "Physical AI Engineering, ROS 2 & Digital Twins Architecture",
    badge: "Data & ML",
    summary:
      "Bridges cognitive AI and physical robotics through an interactive handbook covering ROS 2, Isaac Sim, and digital twins.",
    description:
      "A comprehensive, industry-aligned engineering handbook bridging cognitive foundation models with physical humanoid robotics. Master ROS 2, Gazebo & Unity digital twins, NVIDIA Isaac Sim, and multimodal Vision-Language-Action (VLA) pipelines.",
    problem:
      "Bridging cognitive foundation models with physical humanoid actuation, kinematic chains, and real-time physics simulation lacks unified, accessible reference implementations.",
    solution:
      "Architected an open handbook with interactive curriculum, 2D LiDAR simulator, and agentic mission planner covering ROS 2 rclpy, Gazebo/Unity digital twins, and NVIDIA Isaac Sim synthetic data pipelines.",
    // TODO: add metric on handbook readership or curriculum completion
    result:
      "Structured 4-module engineering roadmap taking developers from URDF/Xacro kinematic design to full bipedal humanoid autonomy and voice-to-action control.",
    highlights: [
      "Four-module curriculum covering ROS 2 kinematics, Gazebo, Unity, and Isaac Sim",
      "Multimodal Vision-Language-Action (VLA) and Whisper voice control integration guides",
      "Interactive 2D LiDAR simulator and autonomous mission planning documentation",
    ],
    tech: ["ROS 2", "Python", "NVIDIA Isaac Sim", "Gazebo", "Unity 3D", "Docusaurus"],
    liveUrl: "https://agentic-humanoid-robotics-book.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/agentic-humanoid-robotics-book",
    image: "/projects/humanoid-robotics.png",
    imageLabel: "Live Interactive Robotics Handbook",
    featured: true,
    category: "data-utility",
  },
  {
    id: "personal-finance-dashboard",
    title: "FinPulse — Personal Finance & Analytics Tracker",
    subtitle: "Dual-Interface Ledger, Budget Health & Micro-Currency Accounting",
    badge: "Utility",
    summary:
      "Eliminates floating-point rounding errors in personal ledgers using zero-database flatfiles and strict 64-bit integer arithmetic.",
    description:
      "A personal financial ledger and intelligence system combining a reactive Streamlit web dashboard with an interactive terminal CLI, zero-DB flatfile architecture, and 64-bit integer paisa/cents arithmetic.",
    problem:
      "Traditional finance trackers suffer from binary floating-point rounding errors in currency arithmetic and require heavyweight database servers for simple personal ledgers.",
    solution:
      "Engineered a zero-dependency flatfile accounting architecture with strict 64-bit integer micro-currency math, Glassmorphism KPI cards, interactive Plotly budget tracking, and automated 50/30/20 financial health scoring.",
    // TODO: add metric on ledger transaction throughput
    result:
      "Zero rounding discrepancies across multi-tier accounts, instant sub-second ledger analytics, and automated PDF statement generation with sample demo loader.",
    highlights: [
      "Strict 64-bit integer paisa/cents arithmetic preventing floating-point currency drift",
      "Zero-database flatfile storage with sub-second reactive Streamlit visual analytics",
      "Automated 50/30/20 budget tracking, health scoring, and PDF statement generation",
    ],
    tech: ["Python", "Streamlit", "Plotly", "Pandas", "ReportLab", "Financial Analytics"],
    liveUrl: "https://personal-finance-dashboard-hadi.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/personal-finance-dashboard",
    image: "/projects/personal-finance.png",
    imageLabel: "Live Fintech Dashboard",
    featured: true,
    category: "data-utility",
  },
  {
    id: "bill-generator",
    title: "Commercial Invoice & Bill Generator",
    subtitle: "Enterprise Billing Automation & PDF Publishing Platform",
    badge: "Utility",
    summary:
      "Automates manual commercial invoicing with real-time tax calculations and vector-grade PDF generation in under 30 seconds.",
    description:
      "A turnkey, reactive billing and invoice platform engineered for commercial trading, automating multi-tier tax and freight calculations with real-time financial metrics and vector-grade PDF generation.",
    problem:
      "Manual invoice generation using spreadsheets leads to calculation discrepancies, erratic formatting, and slow billing turnarounds.",
    solution:
      "Engineered a reactive Streamlit web dashboard backed by a ReportLab PDF vector engine that automatically computes line-item taxes, freight, and sub-totals, exporting standardized print-ready A4 invoices.",
    // TODO: add metric on total invoices generated or time saved
    result:
      "Reduced invoice turnaround time with 100% calculation accuracy and dual-channel export (local archiving + direct browser download).",
    highlights: [
      "Dynamic 1-20 line-item invoice matrix with automated tax and freight math",
      "Vector-grade A4 PDF generation and formatting via the ReportLab engine",
      "One-click interactive sample data loader with dual local and browser export",
    ],
    tech: ["Python", "Streamlit", "ReportLab", "Financial Automation", "PDF Engine"],
    liveUrl: "https://bill-generator-ap5tugma33eqg9vzj5ys7o.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/bill-generator",
    image: "/projects/bill-generator.png",
    imageLabel: "Live Financial Billing Dashboard",
    featured: true,
    category: "data-utility",
  },
  {
    id: "wedding-wishes-app",
    title: "Wedding Wishes App",
    subtitle: "Full-Stack Event Guestbook & Media System",
    badge: "Utility",
    summary:
      "Solves event photo collection and guestbook clutter through an automated image-compression pipeline and admin moderation portal.",
    description:
      "Full-stack web app for a real family event. Guests submit a name, message and photo; an admin accepts or rejects each entry, photos are auto-compressed, and approved wishes play in a slideshow.",
    problem:
      "Collecting and moderating photos and heartfelt messages in real-time from hundreds of wedding guests without storage bottlenecks.",
    solution:
      "Engineered a Next.js App Router platform with Supabase database for real-time guest moderation and Cloudinary auto-compression pipeline for optimized slideshow playback.",
    // TODO: add metric on total images processed during live event
    result:
      "Seamless guest experience, zero manual photo resizing, and real-time live slideshow presentation for the event.",
    highlights: [
      "Real-time guest submission portal backed by Supabase database storage",
      "Automated image compression pipeline via Cloudinary for high-resolution uploads",
      "Admin moderation dashboard with approval workflow and live event slideshow",
    ],
    tech: ["Next.js", "Supabase", "Cloudinary", "Tailwind CSS", "Vercel"],
    liveUrl: "https://murtaza-snowy.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Murtaza",
    image: "/projects/wedding-wishes.png",
    imageLabel: "Live Guest Submission Portal",
    featured: true,
    category: "data-utility",
  },
  {
    id: "spacex-launch-predictor",
    title: "SpaceX Launch Analysis & ML Prediction Dashboard",
    subtitle: "Real-Time Orbital Telemetry & Machine Learning Mission Outcome Classifier",
    badge: "Data & ML",
    summary:
      "Evaluates multi-variable orbital launch risks using historical telemetry analysis and an interactive Random Forest classifier.",
    description:
      "A full-lifecycle Data Science and Machine Learning platform analyzing 200+ historical SpaceX missions with geospatial launchpad telemetry and an interactive Random Forest classifier predicting launch success probability.",
    problem:
      "Orbital rocket launches cost upwards of $60M+ per mission with extreme environmental variables, making launch success factors complex to evaluate without unified predictive modeling.",
    solution:
      "Engineered a reactive Streamlit platform with Pandas telemetry aggregation, Folium geospatial launchpad mapping, and a trained Scikit-Learn Random Forest Classifier that computes live mission success probability.",
    // TODO: add metric on model validation accuracy score
    result:
      "Sub-second prediction inference with dynamic confidence scoring, interactive multi-site geodetic mapping across all SpaceX complexes, and comprehensive historical EDA.",
    highlights: [
      "Trained Scikit-Learn Random Forest model predicting mission success probability",
      "Interactive Folium geospatial mapping for Cape Canaveral, Vandenberg, and Kwajalein",
      "Mission simulator testing variables across payload mass, orbit target, and launch site",
    ],
    tech: ["Python", "Streamlit", "Scikit-Learn", "Random Forest", "Folium", "Pandas"],
    liveUrl: "https://spacex-launch-predictor-hadi.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/spacex-launch-predictor",
    image: "/projects/spacex-launch-predictor.png",
    imageLabel: "Live ML & Telemetry Dashboard",
    featured: true,
    category: "data-utility",
  },
  {
    id: "orbit-iq",
    title: "OrbitIQ — Mission Risk & Booster Recovery Intelligence",
    subtitle: "Aerospace Predictive Analytics, Reusability Economics & ML Classification",
    badge: "Data & ML",
    summary:
      "Forecasts orbital booster recovery viability and refurbishment economics using telemetry data and calibrated machine learning models.",
    description:
      "A mission-critical predictive intelligence engine combining orbital flight telemetry, regularized machine learning, and multi-million dollar aerospace financial modeling to forecast booster landing viability and cost retention.",
    problem:
      "Determining orbital launch viability and booster recovery dynamics involves non-linear multi-variable dynamics where rocket loss costs tens of millions of dollars.",
    solution:
      "Engineered an end-to-end decision-support platform featuring calibrated flight risk scoring, multi-scenario mission presets, Explainable AI (XAI) feature attribution, and an aerospace economic ROI calculator.",
    // TODO: add metric on predicted cost retention accuracy
    result:
      "Instant confidence-calibrated flight risk classification, sub-second landing inference, and dynamic quantification of cost retention through booster and fairing reuse.",
    highlights: [
      "Calibrated landing probability classification with low, moderate, and critical risk tiers",
      "Aerospace financial engine calculating multi-million dollar savings from booster reuse",
      "Explainable AI (XAI) feature attribution revealing flight metric influence",
    ],
    tech: ["Python", "Streamlit", "Scikit-Learn", "Machine Learning", "Pandas", "Aerospace Analytics"],
    liveUrl: "https://orbit-iq.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/orbit-iq",
    image: "/projects/orbit-iq.png",
    imageLabel: "Live Aerospace Intelligence Platform",
    featured: true,
    category: "data-utility",
  },
];

export const categoriesInfo = {
  agentic: {
    name: "Agentic Systems",
    title: "Featured Agentic Systems",
    subtitle: "Self-Correction Loops, Multi-Agent Swarms & Autonomous Tool Execution",
    badge: "Core Agentic AI",
    description:
      "Autonomous agent pipelines featuring recursive self-correction, schema contract enforcement, evaluator-optimizer loops, and live tool-calling engines.",
  },
  "ai-integrated": {
    name: "AI-Integrated Apps",
    title: "AI-Integrated Applications",
    subtitle: "Full-Stack Web Applications with Embedded Autonomous Agents",
    badge: "Applied AI",
    description:
      "Production-grade web applications powered by embedded conversational AI concierges, state machines, and real-time telemetry.",
  },
  "client-demo": {
    name: "Client Demos",
    title: "Client Demos & Web Platforms",
    subtitle: "Frontend-focused builds with an embedded AI concierge chatbot.",
    badge: "Client Demos",
    description:
      "Frontend-focused builds with an embedded AI concierge chatbot, high-converting consultation booking funnels, and modern responsive UI.",
  },
  "data-utility": {
    name: "Data & Utilities",
    title: "Data, ML & Utilities",
    subtitle: "Predictive Telemetry Dashboards, Financial Ledgers & Technical Handbooks",
    badge: "Data & ML",
    description:
      "Predictive machine learning models, zero-database flatfile ledgers, vector-grade billing generators, and physical AI engineering handbooks.",
  },
  // Backward compatibility with legacy routes (/projects/websites, /projects/loop-engineering, /projects/streamlit)
  websites: {
    name: "Websites",
    title: "Websites & Full-Stack Platforms",
    subtitle: "Production Next.js, Interactive Documentation, and Scalable Web Applications",
    badge: "Full-Stack Web Engineering",
    description:
      "Modern full-stack web applications built with Next.js App Router, reactive cloud databases, and embedded AI concierges.",
  },
  "loop-engineering": {
    name: "Loop Engineering",
    title: "Loop Engineering & Agent Systems",
    subtitle: "Self-Healing Workflows, Deterministic Loops & Multi-Agent Orchestration",
    badge: "Deterministic AI Systems",
    description:
      "Autonomous agent pipelines featuring recursive self-correction, schema contract enforcement, evaluator-optimizer loops, and Model Context Protocol (MCP) systems.",
  },
  streamlit: {
    name: "Streamlit",
    title: "Streamlit Production Apps",
    subtitle: "Interactive Data Dashboards, Financial Systems & AI Utilities",
    badge: "Cloud-Deployed AI Suites",
    description:
      "Turnkey Streamlit web applications deployed to cloud runtimes with interactive Plotly visual analytics and machine learning classification.",
  },
} as const;

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "loop-engineering") {
    return projectsData.filter((p) => p.category === "agentic");
  }
  if (category === "websites") {
    return projectsData.filter((p) => p.category === "client-demo" || p.category === "ai-integrated");
  }
  if (category === "streamlit") {
    return projectsData.filter((p) => p.category === "data-utility");
  }
  return projectsData.filter((p) => p.category === (category as ProjectCategory));
};
