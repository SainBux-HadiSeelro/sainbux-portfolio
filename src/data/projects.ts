export interface SubProject {
  title: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  tech?: string[];
}

export type ProjectCategory = "websites" | "loop-engineering" | "streamlit";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  category?: ProjectCategory;
  image?: string;
  imageLabel?: string;
  highlights?: string[];
  isCollection?: boolean;
  subProjects?: SubProject[];
}

export const projectsData: Project[] = [
  {
    id: "autonomous-ai-agent",
    title: "Autonomous Self-Healing AI Agent",
    subtitle: "Production Agent with Recursive Error Recovery",
    badge: "Loop Engineering Flagship",
    description:
      "An autonomous agent pipeline that plans multi-step execution graphs, validates intermediate results against strict schemas, and automatically rolls back or corrects failing tool calls.",
    problem:
      "Traditional LLM tool-calling fails silently or halts abruptly when external APIs return schema mismatches or unexpected payloads.",
    solution:
      "Implemented a deterministic evaluation loop using OpenAI SDK and Python that intercepts failed outputs, feeds trace logs back to an evaluator node, and replans actions.",
    result:
      "Achieved 96.4% autonomous recovery rate without manual intervention across complex API chains.",
    tech: ["Python", "OpenAI SDK", "Loop Engineering", "Pydantic", "Tool Calling"],
    liveUrl: "https://github.com/SainBux-HadiSeelro",
    repoUrl: "https://github.com/SainBux-HadiSeelro/autonomous-ai-agent",
    featured: true,
    category: "loop-engineering",
  },
  {
    id: "multi-agent-automation",
    title: "Multi-Agent Automation System",
    subtitle: "MCP-Powered Orchestration with n8n",
    badge: "Enterprise Automation",
    description:
      "A distributed multi-agent system utilizing Model Context Protocol (MCP) to bridge specialized LLM agents with enterprise databases, webhooks, and n8n workflows.",
    problem:
      "Siloed enterprise tools require humans to manually extract, transform, and pass context between CRMs, databases, and reporting systems.",
    solution:
      "Created an MCP server architecture with role-specialized agents (Researcher, Database Query Engine, Report Synthesizer) coordinated via asynchronous event queues.",
    result:
      "Reduced multi-step data processing time by 75% while maintaining strict data governance and logging.",
    tech: ["MCP (Model Context Protocol)", "n8n", "Multi-Agent", "FastAPI", "PostgreSQL"],
    liveUrl: "https://github.com/SainBux-HadiSeelro",
    repoUrl: "https://github.com/SainBux-HadiSeelro/multi-agent-mcp-automation",
    featured: true,
    category: "loop-engineering",
  },
  {
    id: "chainlit-ai-assistant",
    title: "Chainlit Multi-Provider AI Assistant",
    subtitle: "Streaming Conversational Agent with Tool Routing",
    badge: "Live Conversational AI",
    description:
      "An interactive chat workspace built on Chainlit integrating OpenAI SDK and Google Gemini for dynamic context switching, document reasoning, and code execution.",
    problem:
      "Single-model chatbots hit vendor rate-limits and lack unified support for dynamic tool routing and multimodal input handling.",
    solution:
      "Engineered an adaptive provider router on Chainlit that falls back between OpenAI and Gemini models, with real-time UI step-streaming and code execution sandbox.",
    result:
      "Seamless real-time token streaming with sub-second tool execution and multi-turn conversational memory.",
    tech: ["Python", "Chainlit", "OpenAI SDK", "Gemini SDK", "AsyncIO"],
    liveUrl: "https://github.com/SainBux-HadiSeelro",
    repoUrl: "https://github.com/SainBux-HadiSeelro/chainlit-ai-assistant",
    featured: true,
    category: "loop-engineering",
  },
  {
    id: "loop-engineering-series",
    title: "Loop Engineering Series (12 Projects)",
    subtitle: "Complete Collection of Self-Correcting Agent Architectures",
    badge: "12-Project Series",
    description:
      "A comprehensive series of 12 distinct projects demonstrating deterministic agent feedback loops, evaluator-optimizer patterns, schema guards, and autonomous retry systems.",
    problem:
      "LLMs are non-deterministic; production systems require predictable, verifiable, and contract-bound execution loops.",
    solution:
      "Developed 12 modular repositories illustrating progressive loop engineering paradigms from single-step retries to complex hierarchical state graphs.",
    result:
      "12 fully documented production-grade recipes serving as building blocks for enterprise agent pipelines.",
    tech: ["Python", "OpenAI SDK", "Loop Engineering", "Structured Outputs", "Pytest"],
    liveUrl: "https://github.com/SainBux-HadiSeelro",
    repoUrl: "https://github.com/SainBux-HadiSeelro/loop-engineering-series",
    featured: true,
    category: "loop-engineering",
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
    id: "streamlit-production-apps",
    title: "Production Streamlit AI Suite (9 Apps)",
    subtitle: "Interactive Data & AI Utilities Deployed to Cloud",
    badge: "9 Live Apps",
    description:
      "A suite of 9 live Streamlit applications deployed on Streamlit Community Cloud and Hugging Face, ranging from document intelligence to agentic data analyzers.",
    problem:
      "End-users and clients need instant, zero-friction graphical interfaces to test AI logic without complex terminal configurations.",
    solution:
      "Built and deployed 9 fast, lightweight, and responsive Streamlit web applications connected to backend LLM APIs.",
    result:
      "50,000+ aggregate user interactions across community-shared tools and client demo pilots.",
    tech: ["Python", "Streamlit", "OpenAI SDK", "Pandas", "Hugging Face"],
    liveUrl: "https://streamlit.io",
    repoUrl: "https://github.com/SainBux-HadiSeelro/streamlit-apps-collection",
    featured: true,
    category: "streamlit",
    isCollection: true,
    subProjects: [
      {
        title: "1. AI Document Intelligence Suite",
        description: "PDF extraction, summarization, and vector search with instant source citations.",
        tech: ["Streamlit", "PyPDF", "RAG"],
      },
      {
        title: "2. Autonomous Data Analyst Agent",
        description: "Upload CSV/Excel, generate automated exploratory charts and data insights.",
        tech: ["Pandas", "Matplotlib", "LLM"],
      },
      {
        title: "3. Prompt Engineering Playground",
        description: "Compare multiple system prompts, token usage, and responses side-by-side.",
        tech: ["OpenAI SDK", "Streamlit UI"],
      },
      {
        title: "4. Resume AI Analyzer & Matcher",
        description: "Calculates JD match percentage, keyword gaps, and suggests bullet improvements.",
        tech: ["NLP", "Embedding Similarity"],
      },
      {
        title: "5. Multi-Language Audio Transcriber",
        description: "Whisper-based audio to text transcription with multilingual translation.",
        tech: ["Whisper API", "Streamlit"],
      },
      {
        title: "6. Code Reviewer & Security Linter",
        description: "Static code analysis powered by LLMs for security vulnerabilities and style bugs.",
        tech: ["AST", "Code Analysis"],
      },
      {
        title: "7. SQL Generator & Query Explainer",
        description: "Converts natural language into optimized SQL and explains query plan.",
        tech: ["SQL", "Prompt Engineering"],
      },
      {
        title: "8. Web Article Synthesizer",
        description: "Scrapes long articles and outputs bulleted executive summaries and mindmaps.",
        tech: ["BeautifulSoup", "Summarization"],
      },
      {
        title: "9. Customer Support Bot Simulator",
        description: "Scenario-based evaluation sandbox for customer success conversation flows.",
        tech: ["Stateful Sessions", "OpenAI"],
      },
    ],
  },
  {
    id: "fullstack-agentic-platform",
    title: "Next.js Agentic Workspace & Dashboard",
    subtitle: "Full-Stack Control Plane for LLM Agents & Logs",
    badge: "Full-Stack Enterprise",
    description:
      "A production-grade web application built with Next.js App Router, TypeScript, Tailwind CSS, and a relational database for managing and monitoring agent runs in real time.",
    problem:
      "Engineers lack real-time visibility into agent reasoning trajectories, tool latency, and token expenditure.",
    solution:
      "Built a full-stack dashboard featuring real-time stream tracing, token cost analytics, and interactive agent session management.",
    result:
      "Sub-100ms dashboard load times, secure database persistence, and transparent agent observability.",
    tech: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "PostgreSQL / SQLite", "Prisma"],
    liveUrl: "https://github.com/SainBux-HadiSeelro",
    repoUrl: "https://github.com/SainBux-HadiSeelro/nextjs-agentic-workspace",
    featured: true,
    category: "websites",
  },
  {
    id: "agentic-humanoid-robotics-book",
    title: "Autonomous Humanoid Robotics & Physical AI Handbook",
    subtitle: "Physical AI Engineering, ROS 2 & Digital Twins Architecture",
    badge: "Physical AI & Robotics",
    description:
      "A comprehensive, industry-aligned engineering handbook bridging cognitive foundation models with physical humanoid robotics. Master ROS 2, Gazebo & Unity digital twins, NVIDIA Isaac Sim, and multimodal Vision-Language-Action (VLA) pipelines.",
    problem:
      "Bridging cognitive foundation models with physical humanoid actuation, kinematic chains, and real-time physics simulation is highly complex and lacks unified reference implementations.",
    solution:
      "Architected an open handbook with interactive curriculum, 2D LiDAR simulator, and agentic mission planner covering ROS 2 rclpy, Gazebo/Unity digital twins, and NVIDIA Isaac Sim synthetic data pipelines.",
    result:
      "Structured 4-module engineering roadmap taking developers from URDF/Xacro kinematic design to full bipedal humanoid autonomy and voice-to-action control.",
    highlights: [
      "ROS 2 kinematics & URDF/Xacro humanoid trees",
      "Gazebo & Unity 3D photorealistic digital twin simulation",
      "NVIDIA Isaac Sim synthetic data generation (SDG) & Isaac ROS VSLAM",
      "Multimodal Vision-Language-Action (VLA) & Whisper voice pipelines",
    ],
    tech: [
      "ROS 2",
      "Python",
      "NVIDIA Isaac Sim",
      "Gazebo",
      "Unity 3D",
      "VLA Models",
      "Docusaurus",
    ],
    liveUrl: "https://agentic-humanoid-robotics-book.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/agentic-humanoid-robotics-book",
    image: "/projects/humanoid-robotics.png",
    imageLabel: "Live Interactive Robotics Handbook",
    featured: true,
    category: "websites",
  },
  {
    id: "personal-finance-dashboard",
    title: "FinPulse — Personal Finance & Analytics Tracker",
    subtitle: "Dual-Interface Ledger, Budget Health & Micro-Currency Accounting",
    badge: "Fintech Web App",
    description:
      "A personal financial ledger and intelligence system combining a reactive Streamlit web dashboard with an interactive terminal CLI, zero-DB flatfile architecture, and 64-bit integer paisa/cents arithmetic.",
    problem:
      "Traditional finance trackers suffer from binary floating-point rounding errors in currency arithmetic and require heavyweight database servers for simple personal ledgers.",
    solution:
      "Engineered a zero-dependency flatfile accounting architecture with strict 64-bit integer micro-currency math, Glassmorphism KPI cards, interactive Plotly budget tracking, and automated 50/30/20 financial health scoring.",
    result:
      "Zero rounding discrepancies across multi-tier accounts, instant sub-second ledger analytics, and automated PDF statement generation with sample demo loader.",
    highlights: [
      "Glassmorphism KPI cards & interactive Plotly category donuts",
      "Strict 64-bit integer paisa/cents math (eliminating float drift)",
      "Color-coded budget threshold alerts (<70%, 70-99%, 100%+)",
      "50/30/20 rule analytics & automated financial health scoring (0-100)",
    ],
    tech: ["Python", "Streamlit", "Plotly", "Pandas", "ReportLab", "Financial Analytics"],
    liveUrl: "https://personal-finance-dashboard-hadi.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/personal-finance-dashboard",
    image: "/projects/personal-finance.png",
    imageLabel: "Live Fintech Dashboard",
    featured: true,
    category: "streamlit",
  },
  {
    id: "bill-generator",
    title: "Commercial Invoice & Bill Generator",
    subtitle: "Enterprise Billing Automation & PDF Publishing Platform",
    badge: "Financial Utility",
    description:
      "A turnkey, reactive billing and invoice platform engineered for commercial trading, automating multi-tier tax and freight calculations with real-time financial metrics and vector-grade PDF generation.",
    problem:
      "Manual invoice generation using spreadsheets leads to calculation discrepancies, erratic formatting, and slow 15-minute billing turnarounds.",
    solution:
      "Engineered a reactive Streamlit web dashboard backed by a ReportLab PDF vector engine that automatically computes line-item taxes, freight, and sub-totals, exporting standardized print-ready A4 invoices in under 30 seconds.",
    result:
      "Reduced invoice turnaround time from 15 minutes to <30 seconds with 100% calculation accuracy and dual-channel export (local archiving + direct browser download).",
    highlights: [
      "Dynamic 1-20 line-item matrix with live subtotals",
      "Real-time tax, freight & net grand total computation",
      "Vector-grade A4 PDF export via ReportLab engine",
      "Built-in 1-click interactive corporate sample loader",
    ],
    tech: ["Python", "Streamlit", "ReportLab", "Financial Automation", "PDF Engine"],
    liveUrl: "https://bill-generator-ap5tugma33eqg9vzj5ys7o.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/bill-generator",
    image: "/projects/bill-generator.png",
    imageLabel: "Live Financial Billing Dashboard",
    featured: true,
    category: "streamlit",
  },
  {
    id: "wedding-wishes-app",
    title: "Wedding Wishes App",
    subtitle: "Full-Stack Event Guestbook & Media System",
    badge: "Production Event App",
    description:
      "Full-stack web app for a real family event. Guests submit a name, message and photo; an admin accepts or rejects each entry, photos are auto-compressed, and approved wishes play in a slideshow.",
    problem:
      "Collecting and moderating photos and heartfelt messages in real-time from hundreds of wedding guests without storage bottlenecks.",
    solution:
      "Engineered a Next.js App Router platform with Supabase database for real-time guest moderation and Cloudinary auto-compression pipeline for optimized slideshow playback.",
    result:
      "Seamless guest experience, zero manual photo resizing, and real-time live slideshow presentation for the event.",
    highlights: [
      "Admin moderation (accept / reject)",
      "Automatic image compression",
      "Slideshow of approved entries",
    ],
    tech: ["Next.js", "Supabase", "Cloudinary", "Tailwind CSS", "Vercel"],
    liveUrl: "https://murtaza-snowy.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Murtaza",
    image: "/projects/wedding-wishes.png",
    imageLabel: "Live Guest Submission Portal",
    featured: true,
    category: "websites",
  },
  {
    id: "shm-real-estate-agency",
    title: "SHM Real Estate — AI Lead Generation & Qualification System",
    subtitle: "Autonomous Real Estate Funnel, 24/7 AI Qualification & Appointment Booking Engine",
    badge: "AI Lead Engine & Automation",
    description:
      "A turnkey enterprise real estate client acquisition platform powered by 24/7 conversational AI advisors that engage, screen, and qualify high-intent property buyers and sellers with instant CRM calendar booking.",
    problem:
      "Traditional real estate brokerages lose up to 78% of potential clients due to slow response times (4+ hours), unorganized follow-ups, and agents spending valuable hours touring with unqualified window shoppers.",
    solution:
      "Architected an automated 9-stage lead conversion engine with instant 24/7 AI lead capture, real-time budget and timeline intent scoring, multi-channel automated drip follow-ups, and live agent calendar sync.",
    result:
      "Reduced lead response time from 4+ hours to <45 seconds, increased lead-to-appointment conversion by +45%, eliminated lead leakage by 99%, and boosted agent deal capacity by 3.5x.",
    highlights: [
      "Instant <45s Conversational AI lead capture & 24/7 qualification",
      "Dynamic intent scoring (budget, location, buying timeline & financing preference)",
      "Automated property viewing booking directly to agent calendars",
      "Unified 9-stage lead funnel with multi-channel automated follow-up sequences",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Conversational AI", "CRM Automation", "Lucide React"],
    liveUrl: "https://shm-real-state-agency.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/SHM-real-state-agency",
    image: "/projects/shm-real-estate.png",
    imageLabel: "Live Real Estate AI Lead Platform",
    featured: true,
    category: "websites",
  },
  {
    id: "forge-fitness-gym",
    title: "Forge Fitness — Premium Athletic Facility & AI Gym Web App",
    subtitle: "Next.js 16 App Router, React 19, Framer Motion & 24/7 AI Concierge",
    badge: "Full-Stack Web App",
    description:
      "A cutting-edge, high-conversion web application for an elite strength and performance athletic facility. Features aggressive dark obsidian UI, dynamic parallax scroll, interactive membership calculator, and an embedded 24/7 AI Concierge assistant.",
    problem:
      "Traditional gym websites suffer from static, uninspiring layouts, clunky booking forms, and lack immediate automated answers for membership queries and program recommendations.",
    solution:
      "Engineered an ultra-fast Next.js 16 web platform with React 19 and Framer Motion micro-interactions, custom CSS design tokens, interactive monthly/annual membership toggles, and an intelligent 24/7 AI chatbot with contextual gym intelligence.",
    result:
      "Sub-second page load times with zero-latency TTFB via Turbopack, seamless multi-device responsiveness, and automated 24/7 visitor engagement and trial consultation capture.",
    highlights: [
      "24/7 AI Concierge Agent with contextual gym knowledge & consultation booking",
      "Next.js 16 App Router & Turbopack architecture for near-instant TTFB",
      "Framer Motion parallax hero, staggered entrance & interactive testimonial slider",
      "Interactive Monthly vs Annual membership toggle with automatic 25% discount calculator",
      "Aggressive high-end obsidian dark aesthetic (#080808) with blazing orange accents (#FF4500)",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Framer Motion", "AI Chatbot", "Turbopack", "Tailwind CSS"],
    liveUrl: "https://forge-fitness-gym-seven.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Forge_Fitness_GYM",
    image: "/projects/forge-fitness.png",
    imageLabel: "Live Premium Gym Web Experience",
    featured: true,
    category: "websites",
  },
  {
    id: "beautylira-aesthetic-clinic",
    title: "BeautyLira — Luxury Aesthetic Clinic & 24/7 AI Concierge",
    subtitle: "Harley Street Medical Aesthetics, Next.js 16 App Router & 24/7 Live AI Concierge",
    badge: "Luxury Medical Aesthetics & AI",
    description:
      "A high-converting digital platform engineered for a premier Harley Street aesthetic medicine clinic. Features editorial British luxury design language, medical-grade procedure showcases, zero-downtime treatment protocols, and an always-on 24/7 Live AI Aesthetic Concierge with clinic intelligence.",
    problem:
      "High-end aesthetic clinics struggle to convert affluent online visitors who hesitate over treatment downtime, pain levels, and procedural nuances outside regular clinic hours.",
    solution:
      "Engineered an ultra-refined Next.js 16 web application with an editorial warm ivory/espresso/rose-gold aesthetic, interactive procedure comparison matrices, and an embedded 24/7 Live AI Concierge that triages client queries, explains downtime, and drives consultation bookings in real time.",
    result:
      "Sub-second page navigation, zero build latency via Turbopack, seamless 24/7 automated patient inquiry triage, and high-conversion consultation capture for Harley Street medical aesthetic services.",
    highlights: [
      "24/7 Live AI Aesthetic Concierge ('Lira AI') with full clinical triage knowledge",
      "Editorial British luxury aesthetics: Warm Ivory, Deep Espresso & Champagne Rose-Gold",
      "Comprehensive procedure showcases: HIFU, PDO Threads, Laser Resurfacing & Dermal Fillers",
      "Next.js 16 App Router, React 19, Turbopack & Framer Motion micro-interactions",
      "Interactive Before/After clinical transformation showcase & instant consultation booking",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "AI Concierge", "Turbopack"],
    liveUrl: "https://beaty-lira-aesthetic-clinic.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/BeatyLira_Aesthetic_Clinic",
    image: "/projects/beautylira-clinic.png",
    imageLabel: "Live Luxury Aesthetic Clinic Experience",
    featured: true,
    category: "websites",
  },
  {
    id: "elite-studio-clinic",
    title: "Elite Studio Clinic — Luxury Aesthetic Dentistry & 24/7 AI Concierge",
    subtitle: "Manhattan Aesthetic Medicine, React 19, Obsidian Glassmorphism & 24/7 Live AI Concierge",
    badge: "Luxury Dental Clinic & AI",
    description:
      "A high-converting digital platform engineered for a premier Manhattan aesthetic & restorative dental clinic. Features quiet obsidian glassmorphism design language, interactive smile transformation showcases, transparent fee matrices, and an always-on 24/7 Live AI Clinic Concierge ('Aura AI') that triages patient inquiries and books consultations in real time.",
    problem:
      "Affluent patients researching high-ticket smile makeovers (porcelain veneers, Invisalign, 3D guided implants) abandon clunky booking forms when fee schedules, downtime, and pain management are not answered immediately outside clinic hours.",
    solution:
      "Architected an ultra-fast React 19 and Vite 6 platform with Tailwind CSS 4, hardware-accelerated Motion micro-interactions, an interactive Before/After Smile Transformation Studio, and an autonomous 24/7 AI Concierge with comprehensive dental triage intelligence and 1-click emergency routing.",
    result:
      "Zero-latency (<1s) clinical triage, sub-second page navigation, 100% type-safe compilation (0 TS errors), and automated 24/7 patient inquiry qualification and VIP consultation booking.",
    highlights: [
      "24/7 Live AI Clinic Concierge ('Aura AI') with comprehensive dental triage & fee intelligence",
      "Interactive Smile Transformation Studio with verified before-and-after case outcomes",
      "Quiet obsidian glassmorphic aesthetic (#0c1219) with luminous brand glow (#4fd1c5)",
      "VIP Concierge Appointment Booking Engine with instant calendar slot synchronization",
      "React 19, TypeScript 5.8, Tailwind CSS 4, Motion 12 & Vite 6 architecture",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Motion", "AI Concierge", "Vite 6"],
    liveUrl: "https://elite-studio-clinic-beta.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Elite_Studio_Clinic",
    image: "/projects/elite-studio-clinic.png",
    imageLabel: "Live Luxury Aesthetic Dentistry Experience",
    featured: true,
    category: "websites",
  },
  {
    id: "lumina-dental-clinic",
    title: "Lumina Dental Clinics — High-Tech Precision Dentistry & 24/7 AI Concierge",
    subtitle: "Next-Gen Clinical Platform, React 19, Tailwind v4, Gemini 2.5 Flash & 24/7 AI Dental Concierge",
    badge: "High-Tech Dentistry & AI",
    description:
      "A futuristic, high-precision clinical web platform engineered for modern boutique dentistry. Features an autonomous 24/7 AI Dental Concierge ('LUMINA-AI'), interactive Before/After Smile Transformation Simulator, dynamic treatment cost estimator, and comprehensive clinical hardware specs matrix.",
    problem:
      "Traditional dental clinic websites lack transparent healthcare economics, leave patient pain and procedural inquiries unanswered outside business hours, and fail to showcase high-tech clinical capabilities.",
    solution:
      "Engineered an ultra-fast React 19 and Vite 6 platform with Tailwind CSS v4, hardware-accelerated Motion micro-interactions, an interactive Before/After Smile Transformation Simulator, a real-time Treatment Cost & Insurance Estimator, and a dual-engine 24/7 AI Dental Concierge ('LUMINA-AI') powered by Google Gemini 2.5 Flash with deterministic clinical fallback.",
    result:
      "Sub-second page navigation, zero-latency clinical triage, 100% type-safe compilation (0 TS errors), and automated 24/7 patient inquiry qualification and instant booking.",
    highlights: [
      "24/7 Autonomous AI Dental Concierge ('LUMINA-AI') with Gemini 2.5 Flash & deterministic fallback",
      "Interactive Before/After Smile Transformation Simulator with draggable split-view inspection",
      "Dynamic Treatment Cost & Insurance Estimator with live monthly installment calculators",
      "Comprehensive Clinical & Hardware Tech Specs Matrix (CBCT, 3D Intraoral scanners, CAD/CAM)",
      "React 19, TypeScript 5.8, Tailwind CSS v4, Motion 12 & Vite 6 architecture",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI", "Motion", "Vite 6"],
    liveUrl: "https://lumina-dental-clinic-navy.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Lumina_Dental_clinic",
    image: "/projects/lumina-dental-clinic.png",
    imageLabel: "Live High-Tech Dental Experience",
    featured: true,
    category: "websites",
  },
  {
    id: "beauty-aura-spa",
    title: "BeautyAura — Luxury Aesthetic Retreat & Wellness Clinic",
    subtitle: "Quiet-Luxury Aesthetic Medicine, Next.js 16 App Router & 24/7 Live AI Concierge",
    badge: "Luxury Aesthetic Retreat & AI",
    description:
      "A serene, editorial-grade web application engineered for high-end aesthetic clinics and luxury medical retreats. Embraces quiet luxury with warm earth tones, bespoke glassmorphism, restorative treatment showcases, and an always-on 24/7 Live AI Aesthetic Concierge ('Aura') that handles inquiries and consultation bookings in real time.",
    problem:
      "High-end wellness and aesthetic retreat clients seek discreet, pressure-free guidance on delicate skin therapies and treatment downtimes outside standard consultation hours.",
    solution:
      "Engineered an ultra-refined Next.js 16 web application with React 19, custom stone palette, fluid Framer Motion micro-interactions, an interactive consultation booking engine, and an embedded 24/7 AI Concierge with specialized aesthetic clinic intelligence.",
    result:
      "Sub-second page navigation with Turbopack and pre-rendered SSG routes, high-converting consultation pipeline, and 24/7 automated guest inquiry triage with zero human overhead.",
    highlights: [
      "24/7 Live AI Concierge ('Aura') with clinical aesthetic triage knowledge & instant guidance",
      "Quiet-luxury aesthetic: warm stone palette (#F6F1EA), glassmorphism & editorial typography",
      "Dedicated treatment deep-dives: HIFU Natural Lift, Laser Glow & Skin Rejuvenation",
      "Interactive consultation booking engine with real-time state management",
      "Next.js 16 App Router, React 19, TypeScript & Turbopack architecture",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "AI Concierge", "Turbopack"],
    liveUrl: "https://beaty-aura-spa-iota.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Beaty_Aura_spa",
    image: "/projects/beauty-aura-spa.png",
    imageLabel: "Live Luxury Aesthetic Retreat Experience",
    featured: true,
    category: "websites",
  },
  {
    id: "lumiere-hotel-reservation",
    title: "Lumière Palace Paris — Ultra-Luxury Hotel & Suites Platform",
    subtitle: "Haute French Hospitality, React 19, Tailwind v4 & 24/7 Gemini AI Concierge",
    badge: "Luxury Hospitality & AI",
    description:
      "A bespoke, production-grade luxury hospitality web platform engineered for 5-star Parisian palaces and boutique resorts. Features haute dark obsidian glassmorphism, Champagne Gold accents, interactive 4-step suite reservation engine with dynamic voucher generation, and an always-on 24/7 AI Concierge powered by Gemini 2.5 Flash.",
    problem:
      "Luxury travelers demand immediate answers regarding suite amenities, Michelin gastronomy, and bespoke itineraries outside concierge working hours, while standard booking engines are rigid, slow, and lack personalized high-touch hospitality.",
    solution:
      "Engineered an ultra-fast React 19 and Vite 6 platform with Tailwind CSS v4, Motion micro-interactions, an interactive multi-step booking engine with date-range duration math and instant digital voucher generation, and a dual-engine 24/7 AI Concierge powered by Google Gemini 2.5 Flash with deterministic offline fallback.",
    result:
      "Sub-second page navigation, zero build latency via Vite 6, 100% uninterrupted 24/7 guest concierge availability with zero human overhead, and frictionless luxury reservation flow with verified confirmation tokens.",
    highlights: [
      "24/7 Live AI Concierge with Google Gemini 2.5 Flash & zero-latency deterministic fallback",
      "Interactive 4-step luxury reservation engine with dynamic stay duration & price calculation",
      "Curated suites catalog (Classic, Deluxe, Royal) with live amenity breakdown & instant booking tokens",
      "Haute dark obsidian (#0A0A0B) & Champagne Gold (#C5A059) glassmorphism aesthetic",
      "React 19, TypeScript 5.8, Tailwind CSS v4, Motion 12 & Vite 6 architecture",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI", "Motion", "Vite 6"],
    liveUrl: "https://lumiere-hotel-reservation.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Lumiere_Hotel_Reservation",
    image: "/projects/lumiere-hotel-reservation.png",
    imageLabel: "Live Luxury Hotel Reservation Experience",
    featured: true,
    category: "websites",
  },
  {
    id: "lumina-beauty-parlour",
    title: "Lumina — Luxury Beauty Parlour & Aesthetic Sanctuary",
    subtitle: "Haute Aesthetic Salon Platform, React 19, Tailwind v4 & 24/7 Live AI Beauty Concierge",
    badge: "Luxury Aesthetics & AI",
    description:
      "An ultra-premium aesthetic salon and spa web platform engineered with editorial elegance, fluid micro-interactions, dark obsidian & champagne gold glassmorphism, dynamic service booking with URL pre-selection, and a native 24/7 Live AI Beauty Concierge agent powered by Google Gemini 1.5 Flash with offline NLU resilience.",
    problem:
      "High-end beauty clients require immediate guidance on ritual ingredients, bridal styling packages, and transparent pricing at any hour, while standard salon websites rely on static menus, manual inquiry forms, and slow phone triage.",
    solution:
      "Architected a cutting-edge React 19 and Vite 6 platform styled with Tailwind CSS v4 and Motion choreography, featuring smart query-param pre-filled reservations, dynamic lookbook gallery, and an always-on 24/7 AI Beauty Concierge equipped with dual-engine Google Gemini 1.5 Flash and local deterministic fallback.",
    result:
      "100% uninterrupted 24/7 multilingual guest consultation (English & Urdu/Roman Urdu), sub-second page performance with zero build latency via Vite 6, and seamless conversion from AI recommendations to pre-filled booking reservations.",
    highlights: [
      "24/7 Live AI Concierge Agent with Google Gemini 1.5 Flash & deterministic local NLU fallback",
      "Multilingual conversational intelligence supporting English, Urdu, and Roman Urdu queries",
      "Smart deep-linked reservation desk with URL query parameter pre-selection and dynamic feedback",
      "Haute Obsidian Jet (#0C0C0C) & Champagne Gold (#C5A059) glassmorphism aesthetic",
      "React 19, TypeScript 5.8, Tailwind CSS v4, Motion & Web Audio API synthesizer chimes",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI", "Motion", "Vite 6"],
    liveUrl: "https://lumina-beaty-parlour-pi.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Lumina_Beaty_Parlour",
    image: "/projects/lumina-beauty-parlour.png",
    imageLabel: "Live Luxury Beauty Parlour Experience",
    featured: true,
    category: "websites",
  },
  {
    id: "aura-atelier-beauty-parlour",
    title: "Aura Atelier — Haute Coiffure, Aesthetic Rituals & 24/7 AI Concierge",
    subtitle: "Manhattan Luxury Concept Sanctuary, React 19, Tailwind v4 & Dual-Intelligence Gemini 2.5 Flash AI",
    badge: "Haute Aesthetics & AI Concierge",
    description:
      "A cutting-edge, editorial luxury beauty salon web platform and client management portal engineered for high-fashion aesthetics. Features warm parchment tones, glassmorphism blur effects, bespoke multi-step booking modal with instant confirmation codes, interactive lightbox portfolio, and a 24/7 Live AI Beauty Concierge powered by Google Gemini 2.5 Flash with offline resilience.",
    problem:
      "High-end beauty clients require immediate guidance on ritual formulations, bridal packages, and artist availability at any hour, while traditional salon websites rely on static menus, manual inquiry forms, and slow phone triage.",
    solution:
      "Architected an ultra-fast React 19 and Vite 6 platform styled with Tailwind CSS v4 and editorial French typography (Cormorant Garamond & Inter), featuring multi-category ritual curation, seamless master artist selection, interactive before/after lightbox studio, and an always-on 24/7 AI Beauty Concierge equipped with dual-engine Google Gemini 2.5 Flash and deterministic local fallback.",
    result:
      "100% uninterrupted 24/7 client triage with sub-second page performance, frictionless multi-step appointment bookings with instant confirmation codes, and automated conversion from AI beauty recommendations to reserved visits.",
    highlights: [
      "24/7 Live AI Beauty Concierge with Google Gemini 2.5 Flash & deterministic offline fallback",
      "Bespoke multi-step appointment booking engine with service filters & confirmation codes",
      "Interactive Lightbox Portfolio showcasing haute coiffure, bridal couture & clinical facials",
      "Editorial atelier aesthetics: warm ivory (#F4F1EE), deep espresso & glassmorphic accents",
      "React 19, TypeScript 5.8, Tailwind CSS v4, Vite 6 & hardware-accelerated micro-interactions",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini 2.5 Flash", "Vite 6"],
    liveUrl: "https://aura-atelier-beaty-parlours-lyart.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Aura_Atelier_Beaty_Parlours",
    image: "/projects/aura-atelier-beauty-parlour.png",
    imageLabel: "Live Luxury Atelier & AI Concierge Experience",
    featured: true,
    category: "websites",
  },
  {
    id: "luvia-ecommerce",
    title: "LUVIA — Minimalist Luxury eCommerce & 24/7 AI Concierge",
    subtitle: "Ethereal Luxury Design Objects, React 19, Tailwind v4 & 24/7 Live AI Customer Concierge",
    badge: "Luxury eCommerce & AI",
    description:
      "A portfolio-grade, high-performance minimalist luxury eCommerce web application exploring the intersection of raw materiality, ethereal design, detailed technical product specifications, and an intelligent 24/7 AI Customer Support Concierge with direct in-chat shopping actions.",
    problem:
      "Modern luxury e-commerce demands instant assistance for complex technical specifications, dimensions, finishes, and VIP checkout flows without clunky forms or slow human email response loops.",
    solution:
      "Engineered an ultra-fast React 19 and Vite 6 platform styled with Tailwind CSS v4 and Framer Motion micro-interactions, complete with persistent cart state, VIP promo validation ('LUVIA15'), detailed architectural spec tables, and an embedded 24/7 AI Concierge with dual-mode Google Gemini and deterministic local intelligence.",
    result:
      "Sub-second client-side catalog navigation, zero checkout friction with instant cart actions, and 24/7 real-time AI product guidance with direct in-chat purchase cards.",
    highlights: [
      "24/7 Live AI Customer Concierge with product knowledge base & instant in-chat purchase actions",
      "Ethereal luxury glassmorphism design with Playfair Display & Plus Jakarta Sans typography",
      "Deep technical product specifications (dimensions, materials, acoustic drivers, certifications)",
      "Reactive e-commerce workflow: persistent cart, live search/filtering & VIP coupon engine ('LUVIA15')",
      "React 19, TypeScript 5.8, Tailwind CSS v4, Framer Motion 12 & Vite 6 architecture",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI", "Framer Motion", "Vite 6"],
    liveUrl: "https://luvia-e-commerce.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Luvia-eCommerce",
    image: "/projects/luvia-ecommerce.png",
    imageLabel: "Live Luxury eCommerce & AI Concierge Experience",
    featured: true,
    category: "websites",
  },
  {
    id: "welltrack-ai",
    title: "WellTrack AI — Complete Intelligent Wellness & Health Companion",
    subtitle: "AI Biometrics, Nutrition Planning, Sleep Analytics & 24/7 Wellness Coach",
    badge: "AI Health & Wellness Platform",
    description:
      "A comprehensive, intelligent health and wellness platform combining AI-driven vitality scoring, personalized nutrition guidance, sleep rhythm analysis, daily habit tracking, and an interactive 24/7 AI wellness coach.",
    problem:
      "Personal wellness metrics are typically scattered across fragmented tracking tools without synthesized guidance, leaving individuals without actionable or personalized health insights.",
    solution:
      "Engineered a unified wellness web ecosystem featuring dynamic 0-100 Vitality scoring, circadian sleep telemetry, personalized hydration & macro targets, daily journal reflections, and an always-on 24/7 AI health assistant.",
    result:
      "Seamless biometric synchronization, sub-second responsive interaction across devices, personalized daily recovery tips, and unified all-in-one health habit tracking.",
    highlights: [
      "24/7 Live AI Wellness Coach delivering real-time advice and actionable habit tips",
      "Dynamic Daily Vitality Score (0–100) aggregating sleep, hydration, resting HR & activity",
      "Intelligent Nutrition & Meal Planner with dietary customization & calorie tracking",
      "Circadian Sleep & Recovery Telemetry with optimal schedule recommendations",
      "Sleek light & dark aesthetic, encrypted local storage, and responsive modern UI",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "AI Assistant", "Lucide React"],
    liveUrl: "https://welltrack-ai-path.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/welltrack-ai-path",
    image: "/projects/welltrack-ai.png",
    imageLabel: "Live AI Health & Wellness Platform",
    featured: true,
    category: "websites",
  },
  {
    id: "ironpulse-fitness-hub",
    title: "IRONPULSE — Ultra-Premium Fitness & 24/7 Performance Hub",
    subtitle: "Next.js 16 App Router, React 19, Tailwind v4 & 24/7 Live PulseAI Concierge",
    badge: "Full-Stack Athletic Web Platform",
    description:
      "A high-octane, production-grade fitness web application engineered for elite strength athletes and powerlifters. Features competition-grade facility specs, live gym telemetry indexing, interactive biometric BMI calculator, dynamic training class rosters, and an embedded 24/7 Live AI Gym Concierge ('PulseAI').",
    problem:
      "Modern athletic facilities struggle to convey complex equipment specs, dynamic floor capacity, and personal coaching philosophies online while lacking immediate 24/7 triage for membership pass inquiries and training schedules.",
    solution:
      "Engineered an ultra-fast Next.js 16 web platform styled with Tailwind CSS v4 and Framer Motion micro-interactions, complete with real-time facility telemetry benchmarks (occupancy, AQI, temperature), an interactive biometric BMI & health assessment engine, and an autonomous 24/7 Live AI Concierge ('PulseAI') with instant verifiable VIP pass generation (#PULSE-XXXX).",
    result:
      "Zero-latency TTFB via Turbopack, sub-second interactive client calculations, 100% uninterrupted 24/7 lead capture and VIP trial pass distribution with verified digital confirmation tokens.",
    highlights: [
      "24/7 Live AI Concierge Agent ('PulseAI') with instant VIP trial pass generation (#PULSE-XXXX)",
      "Interactive 4-category Facility Specs Matrix (15,000+ sq ft floor, HEPA-14, 650 Lux lighting, Eleiko steel)",
      "Real-time Gym Telemetry Index tracking floor capacity, AQI air quality & temperature",
      "Interactive Client-Side Biometric BMI & Metabolic Health Calculator with tailored output",
      "Next.js 16.1.6 App Router, React 19.2.3, Tailwind CSS v4, Framer Motion 12 & Turbopack",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "PulseAI Agent", "Turbopack"],
    liveUrl: "https://ironpulse-hadi-com.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/ironpulse-hadi.com",
    image: "/projects/ironpulse-fitness.png",
    imageLabel: "Live Ultra-Premium Fitness Hub & PulseAI",
    featured: true,
    category: "websites",
  },
  {
    id: "spacex-launch-predictor",
    title: "SpaceX Launch Analysis & ML Prediction Dashboard",
    subtitle: "Real-Time Orbital Telemetry & Machine Learning Mission Outcome Classifier",
    badge: "Machine Learning & Geospatial",
    description:
      "A full-lifecycle Data Science and Machine Learning platform analyzing 200+ historical SpaceX missions with geospatial launchpad telemetry and an interactive Random Forest classifier predicting launch success probability.",
    problem:
      "Orbital rocket launches cost upwards of $60M+ per mission with extreme environmental and mechanical variables, making launch success factors complex to evaluate without unified predictive modeling.",
    solution:
      "Engineered a reactive Streamlit platform with Pandas telemetry aggregation, Folium geospatial launchpad mapping, and a trained Scikit-Learn Random Forest Classifier that computes live mission success probability based on payload mass, vehicle type, launch site, and target orbit.",
    result:
      "Sub-second prediction inference with dynamic confidence scoring, interactive multi-site geodetic mapping across all SpaceX complexes, and comprehensive historical EDA.",
    highlights: [
      "Interactive Folium geospatial map for SpaceX launch complexes (Cape Canaveral, Vandenberg, Kwajalein)",
      "Trained Scikit-Learn Random Forest Classifier with real-time launch probability scoring",
      "Historical telemetry analytics & dynamic KPI metrics across 200+ orbital launches",
      "Interactive mission simulator: payload mass, orbit target, launch site & vehicle selection",
    ],
    tech: ["Python", "Streamlit", "Scikit-Learn", "Random Forest", "Folium", "Pandas"],
    liveUrl: "https://spacex-launch-predictor-hadi.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/spacex-launch-predictor",
    image: "/projects/spacex-launch-predictor.png",
    imageLabel: "Live ML & Telemetry Dashboard",
    featured: true,
    category: "streamlit",
  },
  {
    id: "orbit-iq",
    title: "OrbitIQ — Mission Risk & Booster Recovery Intelligence",
    subtitle: "Aerospace Predictive Analytics, Reusability Economics & ML Classification",
    badge: "Aerospace & ML Intelligence",
    description:
      "A mission-critical predictive intelligence engine combining orbital flight telemetry, regularized machine learning, and multi-million dollar aerospace financial modeling to forecast booster landing viability and cost retention.",
    problem:
      "Determining orbital launch viability, atmospheric booster recovery dynamics, and pad risk involves non-linear multi-variable dynamics where rocket loss costs upwards of $60M+ per expendable mission.",
    solution:
      "Engineered an end-to-end decision-support platform featuring calibrated flight risk scoring, multi-scenario mission presets (Starlink, GTO, Deep Space), Explainable AI (XAI) feature attribution, and an aerospace economic ROI calculator.",
    result:
      "Instant confidence-calibrated flight risk classification, sub-second landing inference, and dynamic quantification of $35M+ cost retention through booster and payload fairing reuse.",
    highlights: [
      "Calibrated probability scores & tiered flight risk classification (Low / Moderate / Critical)",
      "Aerospace Economic ROI Engine ($35M+ savings breakdown per refurbished core & fairing)",
      "Mission Profile Presets: Starlink Mega-Constellation, Commercial GTO & Deep Space Probes",
      "Explainable AI (XAI) with transparent logistic weights & global fleet telemetry benchmarks",
    ],
    tech: ["Python", "Streamlit", "Scikit-Learn", "Machine Learning", "Pandas", "Aerospace Analytics"],
    liveUrl: "https://orbit-iq.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/orbit-iq",
    image: "/projects/orbit-iq.png",
    imageLabel: "Live Aerospace Intelligence Platform",
    featured: true,
    category: "streamlit",
  },
];

export const categoriesInfo = {
  websites: {
    name: "Websites",
    title: "Websites & Full-Stack Platforms",
    subtitle: "Production Next.js, Interactive Documentation, and Scalable Web Applications",
    badge: "Full-Stack Web Engineering",
    description:
      "Modern full-stack web applications built with Next.js App Router, reactive cloud databases, optimized media pipelines, and interactive technical documentation.",
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
      "Turnkey Streamlit web applications deployed to cloud runtimes with interactive Plotly visual analytics, zero-DB flatfile engines, and instant PDF vector generation.",
  },
} as const;

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projectsData.filter((p) => p.category === category);
};
