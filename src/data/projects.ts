export interface SubProject {
  title: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  tech?: string[];
}

export type ProjectCategory =
  | "agentic"
  | "loop-engineering"
  | "ai-integrated"
  | "client-demo"
  | "data-utility";

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
  isFlagship?: boolean;
}

export const projectsData: Project[] = [
  // =========================================================================
  // GROUP A: Featured Agentic Systems
  // =========================================================================
  {
    id: "ai-folio",
    title: "AI-Folio — Autonomous Business Platform & 24/7 AI Concierge",
    subtitle: "Interactive Portfolio with 24/7 AI Concierge & Swarm Lab",
    badge: "Agentic",
    summary:
      "Interactive portfolio featuring Aura AI—an always-on concierge that answers visitor inquiries, runs multi-agent research swarms, and calculates automation ROI.",
    description:
      "An AI-driven business portfolio featuring Aura AI—a 24/7 concierge that handles inquiries and calculates automation ROI—plus a live multi-agent research swarm.",
    problem:
      "Traditional portfolio sites are static and cannot answer client questions or demonstrate live AI workflows after hours.",
    solution:
      "Built a 24/7 conversational concierge with a multi-agent research demo and an automated ROI calculator.",
    result:
      "Instant 24/7 client answers, automated lead capture, and immediate ROI estimates.",
    highlights: [
      "24/7 Aura Assistant: Handles inquiries, pricing questions, and lead capture",
      "Multi-Agent Swarm: 3 collaborative agents (Researcher → Analyst → Writer)",
      "ROI Calculator: Instant cost and time savings estimates for AI automation",
    ],
    tech: ["Python 3.11", "Streamlit 1.42+", "Google Gemini API", "Multi-Agent Swarms", "Pandas", "Custom CSS3", "Session State"],
    liveUrl: "https://ai-folio.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/ai-folio",
    image: "/projects/ai-folio.png",
    imageLabel: "Live Aura AI Portfolio & Multi-Agent Swarm Lab",
    featured: true,
    isFlagship: true,
    category: "agentic",
  },
  {
    id: "elite-fitness-gym",
    title: "ELITE FITNESS — Autonomous Multi-Agent Luxury Gym",
    subtitle: "Luxury Gym Web App with 4 AI Coaches & Instant VIP Pass Generation",
    badge: "Agentic",
    summary:
      "Luxury gym platform where 4 specialized AI coaches collaborate to calculate biometrics, generate personalized workout plans, and issue instant trial passes.",
    description:
      "A high-end fitness platform where 4 AI coaches (workouts, strength, nutrition, and biometrics) collaborate to personalize member onboarding.",
    problem:
      "Standard gym websites rely on static forms and chatbots that cannot calculate nutrition or tailor workout plans.",
    solution:
      "Engineered 4 collaborative AI agents to evaluate goals, calculate BMI/calories, and issue instant VIP guest passes.",
    result:
      "Instant personalized plans, automated VIP passes, and streamlined member acquisition.",
    highlights: [
      "4 AI Coaches: Specialized in training, strength, nutrition, and biometrics",
      "Live Biometrics: Dynamic BMI and custom macro calculation",
      "Automated VIP Passes: Instant digital pass generation with unique codes",
    ],
    tech: ["React 18", "TypeScript", "Multi-Agent Swarm", "Tool Calling", "Tailwind CSS", "Vite 5"],
    liveUrl: "https://elite-fitness-gym-two.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Elite_Fitness_GYM",
    image: "/projects/elite-fitness-gym.png",
    imageLabel: "Live Autonomous Multi-Agent AI Gym",
    featured: true,
    isFlagship: true,
    category: "agentic",
  },
  {
    id: "excel-ai-agent",
    title: "Excel AI Agent — Multilingual Spreadsheet Assistant",
    subtitle: "Talk to Excel in Plain English or Roman Urdu — Automatic Formulas & Charts",
    badge: "Agentic",
    summary:
      "Bilingual spreadsheet assistant that cleans data, runs complex formulas, and generates charts from plain English or Roman Urdu prompts.",
    description:
      "An AI spreadsheet helper that turns everyday English or Roman Urdu commands into safe Excel updates, formulas, and charts.",
    problem:
      "Non-technical workers struggle with complex Excel formulas like VLOOKUP and risk corrupting spreadsheets.",
    solution:
      "Built a bilingual AI agent with 15+ spreadsheet tools and automatic snapshot rollbacks to prevent data loss.",
    result:
      "Zero data loss with automatic rollbacks and 10x faster spreadsheet workflows.",
    highlights: [
      "Bilingual NLU: Understands plain English and conversational Roman Urdu",
      "15+ Spreadsheet Tools: Automated formulas, duplicate removal, and charts",
      "Safety Guard: Instant pre-edit snapshots for one-click rollback",
    ],
    tech: ["Python", "Streamlit", "OpenPyXL", "Pandas", "Gemini API", "Tool Calling"],
    liveUrl: "https://excel-agent-ai.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/excel-ai-agent",
    image: "/projects/excel-ai-agent.png",
    imageLabel: "Live Bilingual Spreadsheet AI Agent",
    featured: true,
    isFlagship: true,
    category: "agentic",
  },
  {
    id: "nexus-mind-platform",
    title: "Nexus Mind — Autonomous Multi-Agent Gaming Platform",
    subtitle: "AI Deduction Game & 24/7 Companion with Real-Time Strategy Feedback",
    badge: "Agentic",
    summary:
      "Interactive AI deduction game where players test strategy against intelligent agents with real-time feedback and a 24/7 bilingual companion.",
    description:
      "An intelligent deduction arena with two AI agents managing gameplay logic and an embedded assistant guiding player strategy.",
    problem:
      "Traditional guessing games rely on pure chance without strategy feedback or adaptive AI interaction.",
    solution:
      "Created a multi-agent game loop with real-time accuracy scoring and a 24/7 bilingual guide.",
    result:
      "Fast, engaging deductive gameplay with adaptive difficulty and bilingual guidance.",
    highlights: [
      "Dual-Agent Architecture: Coordinates gameplay logic and strategy tips",
      "24/7 Nova Assistant: Guides strategy in English and Roman Urdu",
      "Entropy Scoring: Real-time analysis of deduction efficiency",
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
    id: "agentic-password-sentinel",
    title: "CipherSentinel AI — Cryptographic Password Studio & Security Agent",
    subtitle: "High-Entropy Password Studio with a 24/7 Cybersecurity AI Advisor",
    badge: "Agentic",
    summary:
      "Generates cryptographically secure passwords and Diceware passphrases while a 24/7 AI security advisor audits credential strength.",
    description:
      "A zero-knowledge security studio generating CSPRNG passwords and passphrases, audited in real time by an embedded AI advisor.",
    problem:
      "Users rely on predictable passwords and insecure online generators vulnerable to credential stuffing.",
    solution:
      "Engineered a client-side CSPRNG generator with Shannon entropy calculation and a 24/7 security auditor.",
    result:
      "100% private client-side generation, military-grade entropy, and zero server storage.",
    highlights: [
      "CSPRNG Generation: True random passwords, Diceware phrases, and PINs",
      "Defense Telemetry: Real-time entropy and brute-force time estimates",
      "24/7 AI Advisor: Actionable credential hardening and security guidance",
    ],
    tech: ["Python 3.12+", "Streamlit", "CSPRNG Secrets", "Shannon Entropy", "Autonomous AI Agent", "NIST SP 800-63B", "OWASP ASVS"],
    liveUrl: "https://agentic-password-sentinel.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/agentic-password-sentinel",
    image: "/projects/agentic-password-sentinel.png",
    imageLabel: "Live CipherSentinel AI Security HUD & Cryptographic Studio",
    featured: true,
    category: "agentic",
  },
  {
    id: "apex-game",
    title: "ApexRPS — Autonomous Pattern-Learning Decision Platform",
    subtitle: "Predictive Pattern-Learning Game with 24/7 AI Strategy Concierge",
    badge: "Agentic",
    summary:
      "Interactive game where an AI analyzes player habits to predict future moves in real time, accompanied by a 24/7 strategy coach.",
    description:
      "A behavioral AI decision platform demonstrating Markov-chain pattern recognition against human player tendencies in real time.",
    problem:
      "Most game bots use basic random number generation, offering no demonstration of adaptive AI learning.",
    solution:
      "Built a predictive Markov engine that tracks move sequences paired with a live AI strategy explainer.",
    result:
      "Adaptive real-time prediction that outperforms random choice and reveals human habits.",
    highlights: [
      "Adaptive Learning: Discovers and exploits player patterns in real time",
      "Transparent Reasoning: Explains why the AI selected its move",
      "24/7 Strategy Concierge: Teaches game theory and pattern defense",
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
    id: "agentic-bmi-health-assistant",
    title: "VitalAI — Autonomous Health & BMI Intelligence Platform",
    subtitle: "Clinical Health Calculator with 24/7 AI Nutrition Copilot",
    badge: "Agentic",
    summary:
      "Calculates clinical BMI, calorie needs (BMR/TDEE), and body metrics paired with a 24/7 AI health copilot for tailored meal and workout plans.",
    description:
      "An all-in-one biometric dashboard calculating calorie needs and health risks alongside an empathetic 24/7 AI wellness assistant.",
    problem:
      "Generic BMI tools offer isolated numbers without explaining calorie targets or actionable health steps.",
    solution:
      "Built a clinical metrics engine paired with an AI health coach that remembers user stats for tailored recommendations.",
    result:
      "Instant health metric breakdowns, customized weekly guidance, and one-click PDF reports.",
    highlights: [
      "24/7 Health Copilot: Personalized meal and fitness plans tailored to your stats",
      "Clinical Analytics: Precise BMI, BMR, TDEE, and body fat calculations",
      "One-Click Reports: Downloadable summary of health metrics and goals",
    ],
    tech: ["Python 3.12+", "Streamlit", "Agentic AI Copilot", "Clinical Biometrics", "Pandas", "Glassmorphic CSS3"],
    liveUrl: "https://agentic-bmi-health-assistant.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/agentic-bmi-health-assistant",
    image: "/projects/agentic-bmi-health-assistant.png",
    imageLabel: "Live VitalAI Health & BMI Platform",
    featured: true,
    category: "agentic",
  },
  {
    id: "agentic-story-studio",
    title: "NexusNarrative — Multi-Agent Creative Story Studio",
    subtitle: "Collaborative Multi-Agent Storytelling Pipeline with Live Quality Scoring",
    badge: "Agentic",
    summary:
      "Creative story studio where 4 specialized AI agents (director, writer, editor, reviewer) collaborate to generate, polish, and score narratives.",
    description:
      "A multi-agent creative writing pipeline where distinct agents plan plotlines, draft prose, polish grammar, and score engagement.",
    problem:
      "Single-prompt LLM stories often suffer from repetitive tropes, uneven pacing, and lack of editorial review.",
    solution:
      "Engineered a 4-agent assembly pipeline separating plotting, drafting, and quality review.",
    result:
      "Structured storytelling with automated readability scoring and one-click export.",
    highlights: [
      "4-Agent Crew: Idea Generator, Director, Writer, and Quality Editor",
      "Story Scorecard: Tracks word count, reading pace, and engagement",
      "Instant Export: One-click download to plain text or Markdown",
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
    title: "ChronoFlow-AI — Agentic Focus Timer & Productivity Coach",
    subtitle: "Smooth 60 FPS Deep-Work Timer with 24/7 Bilingual AI Productivity Coach",
    badge: "Agentic",
    summary:
      "Distraction-free productivity timer with smooth 60 FPS visual clock, harmonic audio alerts, and a 24/7 bilingual focus assistant.",
    description:
      "A deep-work timer designed for sustained focus, featuring non-blocking 60 FPS animations, gentle chimes, and an AI productivity copilot.",
    problem:
      "Clunky web timers stutter, lose state across tabs, or jar users with harsh alarms.",
    solution:
      "Built a lightweight, non-blocking visual timer with gentle harmonic alerts and an on-demand AI focus assistant.",
    result:
      "Zero browser stutter, reliable time tracking, and instant bilingual productivity advice.",
    highlights: [
      "60 FPS Clock: Stutter-free visual animations and reliable state persistence",
      "Harmonic Chimes: Gentle audio notifications for interval transitions",
      "24/7 AI Coach: Bilingual productivity tips (Pomodoro, time-blocking)",
    ],
    tech: ["Python", "Streamlit", "Autonomous Agents", "SVG Animations", "Web Audio API", "NLP Tokenizer"],
    liveUrl: "https://chronoflow-ai.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/chronoflow-ai",
    image: "/projects/chronoflow-ai.png",
    imageLabel: "Live ChronoFlow-AI Timer & HUD",
    featured: true,
    category: "agentic",
  },
  {
    id: "agentic-unit-converter",
    title: "OmniConvert AI — Multilingual Unit Intelligence & AI Copilot",
    subtitle: "Universal Unit Converter with Step-by-Step Math & Bilingual AI Assistant",
    badge: "Agentic",
    summary:
      "Converts 50+ units across 10 categories with step-by-step formulas and a bilingual AI assistant understanding English and Roman Urdu.",
    description:
      "A conversion dashboard showing precise formulas across 10 physical dimensions, backed by an AI assistant for natural language conversions.",
    problem:
      "Standard converters offer no formula transparency and fail on temperature or non-linear conversions.",
    solution:
      "Built a formula-driven conversion engine across 10 categories paired with an AI assistant for conversational queries.",
    result:
      "100% precision math, transparent formula breakdowns, and natural language queries.",
    highlights: [
      "10 Categories: Length, weight, temperature, storage, speed, and more",
      "Bilingual Copilot: Answers conversational queries in English and Roman Urdu",
      "Formula Transparency: Displays exact step-by-step calculation steps",
    ],
    tech: ["Python 3.11+", "Streamlit 1.42+", "Autonomous ReAct Agent", "Bilingual NLU", "LaTeX / KaTeX", "NIST SP 811", "Session State"],
    liveUrl: "https://agentic-unit-converter.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/agentic-unit-converter",
    image: "/projects/agentic-unit-converter.png",
    imageLabel: "Live OmniConvert AI Dashboard & Bilingual Copilot",
    featured: true,
    category: "agentic",
  },

  // =========================================================================
  // GROUP B: Loop Engineering & Deterministic Systems
  // =========================================================================
  {
    id: "maker-checker-loop",
    title: "Maker-Checker Protocol — Zero-Trust Dual-Agent Code Repair",
    subtitle: "Two-Agent Self-Healing Loop — One Codes, One Audits Before Merge",
    badge: "Loop Engineering",
    summary:
      "Self-healing code protocol where a Maker agent writes fixes and an independent Checker agent strictly audits against adversarial tests before merging.",
    description:
      "An automated software repair system using the Maker-Checker principle to isolate fixes in worktrees and prove correctness with hidden tests.",
    problem:
      "AI agents writing and approving their own code often cheat or hardcode passes that fail in production.",
    solution:
      "Separated Maker and Checker responsibilities: an independent auditor runs hidden edge-case tests before approval.",
    result:
      "100% intercept rate on shortcut fixes and zero broken code merged to production.",
    highlights: [
      "Dual-Agent Split: Maker codes in sandbox; Checker independently audits",
      "Isolated Worktrees: Patches tested in clean safety branches",
      "Adversarial Probes: Catches hardcoded cheat values and ensures general fixes",
    ],
    tech: ["Python 3.11", "TypeScript / HTML5", "Loop Engineering", "Multi-Agent Systems", "Git Worktrees", "LLM-as-Judge", "Zero-Trust Architecture"],
    liveUrl: "https://maker-checker-loop.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/maker-checker-loop",
    image: "/projects/maker-checker-loop.png",
    imageLabel: "Live Maker-Checker Orchestrator Console & Event Stream",
    featured: true,
    isFlagship: true,
    category: "loop-engineering",
  },
  {
    id: "workflow-fixloop",
    title: "FixLoop AI — Multi-Agent Parallel Code Repair Engine",
    subtitle: "Parallel AI Code Repair Engine — 3 Specialist Coders & Evaluator",
    badge: "Loop Engineering",
    summary:
      "Dispatches 3 specialist AI coders in parallel branches to repair bugs, then selects and merges the cleanest, safest solution.",
    description:
      "An autonomous code repair platform deploying specialist agents (Math, Text, Data) in parallel worktrees evaluated by an independent reviewer.",
    problem:
      "Manual bug fixing is slow, while single-agent fixers can introduce regressions.",
    solution:
      "Built a parallel repair pipeline with specialist coders and an independent evaluator-optimizer loop.",
    result:
      "Automated parallel bug triage with zero regressions and live visual pipeline logs.",
    highlights: [
      "Parallel Swarm: 3 specialist coders propose competing fixes simultaneously",
      "Evaluator-Optimizer: Independent reviewer tests and selects the best patch",
      "Dual Visualizer: Switch between visual pipeline HUD and live terminal logs",
    ],
    tech: ["Next.js 14", "Python 3.12", "Git Worktrees", "Loop Engineering", "Multi-Agent Systems", "Pytest", "Tailwind CSS", "Vercel"],
    liveUrl: "https://workflow-fixloop.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/workflow-fixloop",
    image: "/projects/workflow-fixloop.png",
    imageLabel: "Live FixLoop AI Autonomous Multi-Agent Code Repair Visualizer",
    featured: true,
    isFlagship: true,
    category: "loop-engineering",
  },
  {
    id: "bugfix-loop",
    title: "Autonomous Bugfix Loop — Maker-Checker Self-Healing Engine",
    subtitle: "Self-Healing Bugfix Protocol with Surprise Anti-Cheat Verification",
    badge: "Loop Engineering",
    summary:
      "Repairs software bugs automatically in isolated worktrees while running surprise anti-cheat tests to guarantee genuine fixes.",
    description:
      "An automated self-healing engine testing AI patches against surprise edge-case tests the coder was not given access to.",
    problem:
      "AI models frequently hardcode expected test answers instead of fixing the root bug.",
    solution:
      "Built an adversarial closed loop running unannounced surprise edge cases before approving pull requests.",
    result:
      "100% detection of fake AI patches and automated safe merges on valid solutions.",
    highlights: [
      "Anti-Cheat Probes: Catches hardcoded test passes before production merge",
      "Isolated Sandbox: Tests patches in isolated git worktrees",
      "Live Telemetry HUD: Real-time comparison of honest vs. cheating AI agents",
    ],
    tech: ["Python 3.12+", "FastAPI", "Loop Engineering", "Git Worktrees", "Pytest", "Adversarial Probes", "Tailwind CSS", "Vercel Edge"],
    liveUrl: "https://bugfix-loop.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/bugfix-loop",
    image: "/projects/bugfix-loop.png",
    imageLabel: "Live Autonomous Bugfix Loop Console & Maker-Checker Observability HUD",
    featured: true,
    category: "loop-engineering",
  },
  {
    id: "doorbell-loop",
    title: "Doorbell Loop — Autonomous Code-Review Bot for Boundary Bugs",
    subtitle: "Automated AST PR Reviewer Catching Silent Off-by-One Loop Bugs",
    badge: "Loop Engineering",
    summary:
      "Automated GitHub Actions review bot that parses code trees (AST) to intercept silent off-by-one loop bugs before merge.",
    description:
      "An event-driven PR reviewer triggered like a doorbell, inspecting code grammar to detect subtle off-by-one errors standard linters miss.",
    problem:
      "Subtle boundary bugs—like stopping loops 1 index early—pass normal linters and cause live data corruption.",
    solution:
      "Architected an AST-parsing review bot that verifies loop ranges and boundary logic on pull requests.",
    result:
      "100% automated intercept rate on loop boundary bugs with zero production regressions.",
    highlights: [
      "Automated PR Hook: Triggers instantly when pull requests are opened",
      "AST Deep Parse: Detects subtle off-by-one errors missed by standard linters",
      "Developer HUD: Interactive 4-stage pipeline stepper and live diff viewer",
    ],
    tech: ["Python 3.11", "JavaScript (ES6+)", "Loop Engineering", "GitHub Actions", "AST Parsing", "Opencode Agent", "Tailwind CSS"],
    liveUrl: "https://doorbell-loop.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/doorbell-loop",
    image: "/projects/doorbell-loop.png",
    imageLabel: "Live Doorbell Loop Review Console & AST Diff Inspector",
    featured: true,
    category: "loop-engineering",
  },
  {
    id: "scheduled-memory-loop",
    title: "Scheduled Memory Loop — Long-Term Episodic Memory Spine",
    subtitle: "Episodic Memory Spine for Autonomous Agents — Zero Memory Bloat",
    badge: "Loop Engineering",
    summary:
      "Maintains permanent task progress for autonomous AI agents across restarts by tracking only new delta accomplishments.",
    description:
      "An episodic memory spine preventing AI amnesia across reboots while filtering duplicate logs to eliminate context bloat.",
    problem:
      "AI agents either lose memory on restart or bloat context with redundant logs that skyrocket token costs.",
    solution:
      "Engineered an episodic memory loop comparing accomplished tasks and writing only genuine deltas to persistent storage.",
    result:
      "100% state persistence across server restarts with zero token bloat.",
    highlights: [
      "Permanent Memory: Retains task state and progress across full reboots",
      "Smart Delta Logging: Records only new achievements to eliminate bloat",
      "Interactive HUD: Real-time memory inspection and synthetic task injection",
    ],
    tech: ["Python 3.12+", "Flask 3.x", "Loop Engineering", "Tailwind CSS", "Episodic Memory", "Serverless Architecture", "Unix Cron"],
    liveUrl: "https://scheduled-memory-loop.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Scheduled-memory-loop",
    image: "/projects/scheduled-memory-loop.png",
    imageLabel: "Live Autonomous Scheduled Memory Spine & Loop Agent Console",
    featured: true,
    category: "loop-engineering",
  },
  {
    id: "break-it-on-purpose-loop",
    title: "Break-It-On-Purpose — Loop Observability & Fault-Injection Spine",
    subtitle: "Sabotage-Tested Loop Monitor with Token Budget Protection",
    badge: "Loop Engineering",
    summary:
      "Protects API budgets from runaway retry loops and verifies through deliberate fault injection that failures trigger clear human alerts.",
    description:
      "An observability harness monitoring token burn in real time while proving deliberate sabotage triggers unmistakable human alarms.",
    problem:
      "Unattended AI loops can enter infinite retry loops, silently consuming thousands of dollars in API credits.",
    solution:
      "Created a real-time token spend guard paired with deliberate fault injection and clear 'NEEDS HUMAN' alarms.",
    result:
      "Zero silent failures, exact per-loop cost accounting, and budget circuit-breakers.",
    highlights: [
      "Budget Guard: Real-time token tracking with automatic circuit-breaking",
      "Human Alarm: Generates clear 'NEEDS HUMAN' alerts with root cause",
      "5-Tab Dashboard: Safety monitoring, fault injection, and cost analytics",
    ],
    tech: ["Next.js 14", "TypeScript", "Loop Engineering", "Tailwind CSS", "Lucide React", "Failure Injection", "Token Economics", "Vercel"],
    liveUrl: "https://break-it-on-purpose-loop.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/break-it-on-purpose-loop",
    image: "/projects/break-it-on-purpose-loop.png",
    imageLabel: "Live Sentinel AI Autonomous Loop Observability & Sabotage Test Console",
    featured: true,
    category: "loop-engineering",
  },
  {
    id: "iss-watch-loop",
    title: "ISS Watch Loop — Real-Time Orbital Telemetry & Geography Tracker",
    subtitle: "Live Space Station Tracker — Speed, Altitude & Geography Below",
    badge: "Loop Engineering",
    summary:
      "Tracks the International Space Station in real time, projecting its orbital flight path and automatically naming the territory or ocean below.",
    description:
      "A live telemetry loop polling ISS coordinates every 3 seconds to calculate velocity, altitude, and reverse-geolocate land or open ocean.",
    problem:
      "Tracking high-speed satellites in real time often stutters browsers or breaks on network hiccups.",
    solution:
      "Engineered a resilient 3-second background polling loop with Leaflet maps and reverse geography lookups.",
    result:
      "Zero-lag 3-second telemetry streaming with automatic reverse territory lookups.",
    highlights: [
      "Real-Time Radar Map: Interactive orbital marker and predicted ground track",
      "Telemetry Stream: Velocity (~27,600 km/h) and altitude (~420 km) updates",
      "Reverse Geography: Identifies countries and oceans passing beneath astronauts",
    ],
    tech: ["JavaScript (ES6+)", "Python 3.11", "Leaflet.js", "Loop Engineering", "Haversine Math", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://iss-watch-loop.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/ISS-watch-loop",
    image: "/projects/iss-watch-loop.png",
    imageLabel: "Live ISS Orbital Tracker & Telemetry HUD",
    featured: true,
    category: "loop-engineering",
  },

  // =========================================================================
  // GROUP C: AI-Integrated Apps
  // =========================================================================
  {
    id: "luvia-ecommerce",
    title: "LUVIA — Minimalist Luxury eCommerce & 24/7 AI Concierge",
    subtitle: "Luxury Decor Store with In-Chat AI Shopping Assistant",
    badge: "AI-Integrated",
    summary:
      "Luxury home decor store featuring detailed architectural specs and an in-chat AI concierge that recommends products and manages carts.",
    description:
      "A high-end e-commerce store with an in-chat AI concierge that guides sizing, answers product specs, and updates the shopping cart.",
    problem:
      "Luxury shoppers hesitate and abandon carts when material and dimension questions go unanswered after hours.",
    solution:
      "Built an ultra-fast store with a built-in 24/7 AI shopping assistant trained on product specifications.",
    result:
      "Sub-second catalog browsing and 24/7 in-chat cart additions.",
    highlights: [
      "AI Shopping Concierge: Recommends products and updates cart directly in chat",
      "Instant Cart System: Live coupon validation and seamless checkout",
      "Architectural Specs: Clean dimension and finish breakdown tables",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI", "Framer Motion", "Vite 6"],
    liveUrl: "https://luvia-e-commerce.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Luvia-eCommerce",
    image: "/projects/luvia-ecommerce.png",
    imageLabel: "Live Luxury eCommerce & AI Concierge Experience",
    featured: true,
    isFlagship: true,
    category: "ai-integrated",
  },
  {
    id: "ironpulse-fitness-hub",
    title: "IRONPULSE — Ultra-Premium Fitness & Performance Hub",
    subtitle: "Elite Gym Platform with 24/7 PulseAI Concierge & Live Telemetry",
    badge: "AI-Integrated",
    summary:
      "Athletic gym web app featuring live facility occupancy, interactive BMI calculations, and an AI concierge generating VIP guest passes.",
    description:
      "A performance strength platform with real-time gym occupancy metrics, client-side BMI math, and automated VIP pass tokens.",
    problem:
      "Athletic clubs lose prospects when websites fail to showcase equipment or answer inquiries after hours.",
    solution:
      "Engineered a Next.js platform with live gym telemetry, biometric calculators, and an automated AI pass generator.",
    result:
      "Zero-lag browsing, instant calorie calculations, and 24/7 guest pass generation.",
    highlights: [
      "PulseAI Concierge: Answers membership questions and generates VIP guest passes",
      "Facility Telemetry: Real-time gym occupancy, air quality, and temperature",
      "Biometric Tool: Instant client-side BMI and daily metabolic calorie calculator",
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
    id: "welltrack-ai",
    title: "WellTrack AI — Intelligent Wellness & Health Companion",
    subtitle: "Unified Health & Habit Dashboard with 24/7 AI Lifestyle Coach",
    badge: "AI-Integrated",
    summary:
      "Tracks hydration, nutrition, and sleep rhythms into a unified Vitality Score with an empathetic 24/7 AI wellness coach.",
    description:
      "A wellness dashboard aggregating hydration, nutrition, and sleep into a 0-100 Vitality Score with personalized AI habit coaching.",
    problem:
      "Health metrics are fragmented across separate apps without unified guidance on daily recovery.",
    solution:
      "Unified sleep, hydration, and nutrition tracking paired with an interactive 24/7 lifestyle coach.",
    result:
      "Single-screen Vitality Score, actionable recovery advice, and smooth daily tracking.",
    highlights: [
      "24/7 AI Coach: Actionable habit, hydration, and recovery advice",
      "Vitality Score: Synthesizes sleep, activity, and hydration (0-100)",
      "Daily Habit Tracker: Streamlined hydration and reflection logging",
    ],
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "AI Assistant", "Lucide React"],
    liveUrl: "https://welltrack-ai-path.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/welltrack-ai-path",
    image: "/projects/welltrack-ai.png",
    imageLabel: "Live AI Health & Wellness Platform",
    featured: true,
    category: "ai-integrated",
  },
  {
    id: "shm-real-estate-agency",
    title: "SHM Real Estate — AI Lead Generation & Qualification System",
    subtitle: "Real Estate Funnel with 24/7 AI Lead Qualification & Booking",
    badge: "AI-Integrated",
    summary:
      "Automated real estate portal where an AI advisor qualifies buyer budgets and schedules property viewings directly on agent calendars.",
    description:
      "A high-converting client acquisition funnel greeting visitors 24/7, assessing budgets and moving timelines, and booking verified tours.",
    problem:
      "Slow agency response times cost high-ticket sales while agents waste hours touring with unqualified leads.",
    solution:
      "Architected a 24/7 conversational funnel scoring purchase readiness and booking calendar appointments automatically.",
    result:
      "Instant buyer responses, 3x faster qualification, and booked calendar appointments.",
    highlights: [
      "24/7 AI Lead Qualifier: Assesses buyer budget, location, and moving timeline",
      "Automated Booking: Direct tour synchronization with agent calendars",
      "Multi-Stage Funnel: Automated lead capture and notification pipeline",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Conversational AI", "CRM Automation", "Lucide React"],
    liveUrl: "https://shm-real-state-agency.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/SHM-real-state-agency",
    image: "/projects/shm-real-estate.png",
    imageLabel: "Live Real Estate AI Lead Platform",
    featured: true,
    category: "ai-integrated",
  },
  {
    id: "agentic-hangman",
    title: "Hangman: Cyberpunk AI Edition & NEXUS Assistant",
    subtitle: "Cyberpunk Word Deduction Game with Spoiler-Free AI Clues",
    badge: "AI-Integrated",
    summary:
      "Stylish word deduction game featuring NEXUS-7—an embedded AI companion that provides clever, contextual clues without spoiling the answer.",
    description:
      "A cyberpunk word game across 4 domains featuring an embedded AI assistant offering non-spoilery hints when players get stuck.",
    problem:
      "Classic word games feel punishing when players hit mental blocks with no hints available.",
    solution:
      "Integrated a resident AI companion that analyzes current guess state to supply clever, non-spoilery clues.",
    result:
      "Engaging, zero-frustration gameplay with dynamic streaks and responsive cyber controls.",
    highlights: [
      "NEXUS-7 AI: Contextual, spoiler-free clues when you need a nudge",
      "4 Knowledge Domains: Curated categories spanning science, tech, and history",
      "Cyber Keypad: Virtual keypad with instant feedback and animations",
    ],
    tech: ["Python", "Streamlit", "Autonomous Agents", "State Machines", "Knowledge Retrieval", "Cyberpunk CSS"],
    liveUrl: "https://agentic-hangman.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Agentic-Hangman-2.0",
    image: "/projects/agentic-hangman.png",
    imageLabel: "Live Agentic Hangman & NEXUS AI",
    featured: true,
    category: "ai-integrated",
  },

  // =========================================================================
  // GROUP D: Client Demos & Web Platforms
  // =========================================================================
  {
    id: "lumiere-hotel-reservation",
    title: "Lumière Palace Paris — Luxury Hotel & Suites Platform",
    subtitle: "Luxury Hotel Reservation Engine with 24/7 Gemini AI Concierge",
    badge: "Client Demo",
    summary:
      "Luxury hotel reservation portal with an intuitive 4-step suite booking engine and a 24/7 Gemini AI concierge for guest itineraries.",
    description:
      "A luxury hospitality portal featuring a 4-step suite booking engine, stay duration math, and an embedded Gemini concierge.",
    problem:
      "Travelers expect instant answers about amenities and custom itineraries, but standard hotel forms are slow and rigid.",
    solution:
      "Built a fast booking workflow with digital pass generation and a 24/7 Gemini AI concierge.",
    result:
      "Frictionless suite booking and 24/7 automated concierge assistance.",
    highlights: [
      "24/7 AI Concierge: Powered by Gemini AI for guest questions and itinerary planning",
      "4-Step Booking Engine: Smooth date selection, stay calculations, and guest customization",
      "Digital Vouchers: Instant confirmation passes with security tokens",
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
    id: "lumina-dental-clinic",
    title: "Lumina Dental Clinic — Modern Dentistry & 24/7 AI Concierge",
    subtitle: "Boutique Dental Clinic with Smile Simulator & 24/7 AI Triage",
    badge: "Client Demo",
    summary:
      "High-tech dental platform featuring an interactive Before/After smile simulator and a 24/7 AI concierge for procedure triage.",
    description:
      "A clinical dentistry website with a split-screen Before/After Smile Simulator, financing estimator, and a 24/7 AI triage assistant.",
    problem:
      "Patients hesitate to book consultations due to unclear procedure costs and recovery downtime.",
    solution:
      "Engineered an interactive smile preview slider, installment calculator, and a 24/7 AI dental triage bot.",
    result:
      "Zero patient booking hesitation, clear fee estimates, and 24/7 lead qualification.",
    highlights: [
      "24/7 Clinical Concierge: Explains recovery times, fees, and procedure details",
      "Smile Simulator: Interactive split-view slider showing treatment outcomes",
      "Financing Estimator: Calculates monthly installment plans and insurance estimates",
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
    id: "elite-studio-clinic",
    title: "Elite Studio Clinic — Luxury Aesthetic Dentistry & AI Concierge",
    subtitle: "Aesthetic Dentistry Platform with 24/7 AI Triage & Case Galleries",
    badge: "Client Demo",
    summary:
      "Aesthetic dentistry portal featuring verified transformation galleries, transparent pricing, and a 24/7 AI concierge for VIP consultations.",
    description:
      "A luxury clinical platform with dark obsidian glassmorphism, verified case showcases, and Aura AI for VIP consultation booking.",
    problem:
      "Cosmetic clinic visitors drop off when recovery downtime and fee schedules are not transparent.",
    solution:
      "Architected a luxury clinical website with transparent fee schedules and an automated AI triage assistant.",
    result:
      "Transparent fee guidance, verified transformation proof, and 24/7 appointment scheduling.",
    highlights: [
      "24/7 Aura AI Concierge: Answers patient inquiries on downtime and treatment fees",
      "Transformation Showcase: Verified before-and-after aesthetic clinical results",
      "VIP Booking Desk: Instant calendar slot selection with automated confirmation",
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
    id: "beautylira-aesthetic-clinic",
    title: "BeautyLira — Luxury Aesthetic Clinic & 24/7 AI Concierge",
    subtitle: "British Aesthetic Medicine Website with 24/7 AI Consultation Assistant",
    badge: "Client Demo",
    summary:
      "Luxury aesthetic clinic platform featuring side-by-side procedure comparison guides and a 24/7 AI concierge for consultation bookings.",
    description:
      "An elegant clinical website with procedure comparison matrices (downtime, longevity) and a 24/7 AI assistant booking consultations.",
    problem:
      "Aesthetic clients hesitate when recovery timelines and procedure differences are unclear.",
    solution:
      "Engineered side-by-side treatment matrices and an embedded AI concierge that clarifies procedures clearly.",
    result:
      "Informative patient onboarding and 24/7 automated inquiry triage.",
    highlights: [
      "24/7 Medical Concierge: Clarifies treatment details, recovery downtime, and comfort",
      "Procedure Matrices: Side-by-side comparison of benefits and recovery timelines",
      "Fast Responsive UI: Optimized mobile booking and instant consultation dispatch",
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
    id: "beauty-aura-spa",
    title: "BeautyAura — Luxury Aesthetic Retreat & Wellness Clinic",
    subtitle: "Quiet-Luxury Wellness Retreat with 24/7 AI Skincare Concierge",
    badge: "Client Demo",
    summary:
      "Serene wellness retreat website with bespoke glassmorphic design and an embedded 24/7 AI concierge for private skincare guidance.",
    description:
      "A quiet-luxury retreat web app featuring earth tones, restorative treatment menus, and an always-available AI wellness assistant.",
    problem:
      "Discerning clients seek discreet, personalized treatment guidance outside normal clinic hours.",
    solution:
      "Built a quiet-luxury retreat website with interactive bookings and an embedded AI wellness assistant.",
    result:
      "Discreet after-hours consultation support and seamless treatment bookings.",
    highlights: [
      "24/7 Aura Concierge: Personalized skincare guidance and treatment suggestions",
      "Treatment Engine: Smooth consultation booking with persistent state",
      "Quiet-Luxury Aesthetic: Warm earth palette with fluid micro-interactions",
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
    id: "aura-atelier-beauty-parlour",
    title: "Aura Atelier — Haute Coiffure, Beauty Rituals & AI Concierge",
    subtitle: "Haute Coiffure Sanctuary with Multi-Step Booking & Gemini AI Concierge",
    badge: "Client Demo",
    summary:
      "Luxury salon and hair atelier portal featuring artist selection, multi-step booking, and a 24/7 Gemini AI beauty concierge.",
    description:
      "A couture salon platform with curated ritual treatments, master stylist selection, and a Gemini AI concierge for beauty advice.",
    problem:
      "High-end clients need immediate answers on bridal packages and stylist schedules without phone tag.",
    solution:
      "Built a luxury salon platform with multi-step stylist booking and a 24/7 Gemini AI advisor.",
    result:
      "Instant client answers, smooth multi-step bookings, and automated confirmations.",
    highlights: [
      "24/7 Gemini Beauty Advisor: Recommends hair rituals and answers treatment FAQs",
      "Multi-Step Booking Desk: Filter by service, choose stylist, and get instant codes",
      "Couture Lookbook: Curated lightbox gallery of hair and skin transformations",
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
    id: "lumina-beauty-parlour",
    title: "Lumina — Luxury Beauty Parlour & Aesthetic Sanctuary",
    subtitle: "Bilingual (English & Urdu) Luxury Beauty Parlour with 24/7 AI Concierge",
    badge: "Client Demo",
    summary:
      "Luxury salon platform with champagne gold glassmorphism, pre-filled reservation links, and a bilingual (English & Urdu) 24/7 AI concierge.",
    description:
      "A luxury salon web app featuring pre-filled service links and a 24/7 AI beauty concierge fluent in English, Urdu, and Roman Urdu.",
    problem:
      "Salons lose local clients when web portals are English-only and fail to support regional languages.",
    solution:
      "Created a bilingual platform with pre-filled reservations and a 24/7 AI concierge supporting Urdu and English.",
    result:
      "Effortless bookings and personalized consultation in the client's native language.",
    highlights: [
      "Bilingual AI Concierge: Welcomes and assists in English, Urdu, and Roman Urdu",
      "Smart Reservations: Pre-fills selected treatments directly from the gallery",
      "Audio Chimes: Interactive audio cues and smooth visual transitions",
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
    id: "forge-fitness-gym",
    title: "Forge Fitness — Premium Athletic Facility & AI Gym Web App",
    subtitle: "Athletic Performance Facility with Membership Calculator & 24/7 AI Concierge",
    badge: "Client Demo",
    summary:
      "High-performance gym website featuring an interactive monthly/annual membership savings calculator and a 24/7 AI concierge for trial bookings.",
    description:
      "A dark athletic facility web app with parallax scrolling, interactive membership rate comparison, and a 24/7 AI concierge.",
    problem:
      "Static gym brochures with confusing pricing fail to convert visitors into trial bookings.",
    solution:
      "Built a fast Next.js website with an interactive membership price toggle and an automated AI booking assistant.",
    result:
      "Instant loading, transparent pricing comparisons, and 24/7 lead capture.",
    highlights: [
      "24/7 AI Gym Concierge: Answers membership questions and books guest trials",
      "Membership Calculator: Instant toggle between monthly and annual discount rates",
      "High-Performance UI: Fast page loads and fluid parallax scrolling",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Framer Motion", "Tailwind CSS", "Turbopack"],
    liveUrl: "https://forge-fitness-gym-seven.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Forge_Fitness_GYM",
    image: "/projects/forge-fitness.png",
    imageLabel: "Live Premium Gym Web Experience",
    featured: true,
    category: "client-demo",
  },

  // =========================================================================
  // GROUP E: Data, ML & Utilities
  // =========================================================================
  {
    id: "orbit-iq",
    title: "OrbitIQ — Mission Risk & Booster Recovery Intelligence",
    subtitle: "Rocket Booster Recovery Viability & Financial Savings Predictor",
    badge: "Data & ML",
    summary:
      "Predicts orbital rocket booster recovery viability and calculates financial savings from aerospace reusability.",
    description:
      "An aerospace decision-support platform predicting booster landing success and reusability cost savings from flight telemetry.",
    problem:
      "Determining booster landing feasibility involves complex multi-variable telemetry and atmospheric conditions.",
    solution:
      "Engineered an ML landing classifier with risk tiers and an aerospace cost savings calculator.",
    result:
      "Instant landing probability predictions and clear financial savings from reusability.",
    highlights: [
      "Landing Classifier: Estimates booster recovery probability with risk tiers",
      "Aerospace Savings: Calculates multi-million-dollar cost savings from reuse",
      "Feature Importance: Visualizes flight variables driving the prediction",
    ],
    tech: ["Python", "Streamlit", "Scikit-Learn", "Machine Learning", "Pandas", "Aerospace Analytics"],
    liveUrl: "https://orbit-iq.streamlit.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/orbit-iq",
    image: "/projects/orbit-iq.png",
    imageLabel: "Live Aerospace Intelligence Platform",
    featured: true,
    category: "data-utility",
  },
  {
    id: "spacex-launch-predictor",
    title: "SpaceX Launch Analysis & ML Prediction Dashboard",
    subtitle: "SpaceX Mission Telemetry & Random Forest Outcome Predictor",
    badge: "Data & ML",
    summary:
      "Analyzes 200+ historical SpaceX missions and uses machine learning to forecast launch and landing success probability.",
    description:
      "A data science platform analyzing historical SpaceX flights with geospatial launchpad maps and Random Forest outcome forecasting.",
    problem:
      "Multi-variable flight conditions make it difficult to identify key factors governing launch success.",
    solution:
      "Built an interactive dashboard combining geospatial launchpad maps with a trained Random Forest classifier.",
    result:
      "Sub-second success probability forecasting and interactive launch complex mapping.",
    highlights: [
      "ML Prediction Model: Forecasts mission success based on payload and orbit",
      "Geospatial Maps: Interactive exploration of SpaceX launch complexes",
      "Mission Simulator: Tests payload and site impact on success probability",
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
    id: "agentic-humanoid-robotics-book",
    title: "Humanoid Robotics & Physical AI Open Handbook",
    subtitle: "Interactive Engineering Guide for Humanoid Robotics & ROS 2",
    badge: "Data & ML",
    summary:
      "Open engineering curriculum teaching developers how to interface foundation AI models with physical bipedal humanoid robots.",
    description:
      "A practical engineering guide covering ROS 2, Isaac Sim, digital twin simulation, and voice-to-action robot control.",
    problem:
      "Bridging cognitive AI models with physical robotic hardware lacks beginner-friendly, structured learning resources.",
    solution:
      "Architected a 4-module roadmap with browser-based LiDAR simulation and code tutorials.",
    result:
      "Structured physical AI engineering roadmap used by developers worldwide.",
    highlights: [
      "4-Module Curriculum: From kinematic design to full humanoid balance and control",
      "LiDAR Simulator: Browser-based obstacle avoidance testing",
      "Tool Coverage: ROS 2, NVIDIA Isaac Sim, Gazebo, and Unity digital twins",
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
    subtitle: "Zero-Database Ledger with Exact Integer Arithmetic & Analytics",
    badge: "Utility",
    summary:
      "Personal finance tracker using exact integer arithmetic to eliminate penny rounding errors with instant analytics.",
    description:
      "A zero-database budget system using 64-bit integer paisa math, Plotly visualization, and 50/30/20 financial health scoring.",
    problem:
      "Standard budget apps suffer from floating-point rounding errors and require heavy database infrastructure.",
    solution:
      "Engineered a flatfile ledger using exact integer math and automated financial health scoring.",
    result:
      "100% calculation accuracy with zero rounding drift and 1-click PDF exports.",
    highlights: [
      "Exact Integer Math: Eliminates floating-point penny rounding discrepancies",
      "Zero-Database Simplicity: Stores records in lightweight local flatfiles",
      "50/30/20 Analytics: Automated budget scoring and PDF statement export",
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
    subtitle: "Invoice Generator with Automated Tax Math & Vector-Grade PDF Export",
    badge: "Utility",
    summary:
      "Automates commercial invoice generation with dynamic multi-tier tax and freight calculations, exporting vector PDFs in seconds.",
    description:
      "A business billing dashboard for traders and freelancers that computes taxes and freight dynamically and exports clean A4 PDFs.",
    problem:
      "Manual spreadsheet invoicing is slow, error-prone, and generates unprofessional receipts.",
    solution:
      "Built a reactive billing platform with automated multi-tier tax logic and vector PDF export.",
    result:
      "Instant invoice generation, 100% mathematical accuracy, and one-click PDF downloads.",
    highlights: [
      "Dynamic Item Table: Automatically calculates tax, freight, and sub-totals",
      "Vector PDF Engine: Generates print-ready A4 commercial invoices",
      "One-Click Demo Loader: Pre-loads sample business data for instant testing",
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
    title: "Wedding Wishes App — Live Guestbook & Slideshow",
    subtitle: "Full-Stack Guestbook with Live Slideshow & Auto-Compressed Media",
    badge: "Utility",
    summary:
      "Real-time wedding guestbook where guest messages and photos are approved via an admin portal and projected on a live event slideshow.",
    description:
      "A full-stack guestbook where guests scan QR codes to post memories, photos auto-compress, and approved wishes loop on live screens.",
    problem:
      "Collecting memories from event guests is chaotic, unmoderated, and clogs phone storage.",
    solution:
      "Engineered a real-time portal with automated photo compression and a 1-click admin approval feed.",
    result:
      "Delightful guest experience and a seamless live projector slideshow during receptions.",
    highlights: [
      "Real-Time Submission: Instant mobile upload of guest wishes and photos",
      "Auto Photo Compression: Cloud optimization preventing server storage bloat",
      "Admin Desk: 1-click moderation instantly updating the live projector slideshow",
    ],
    tech: ["Next.js", "Supabase", "Cloudinary", "Tailwind CSS", "Vercel"],
    liveUrl: "https://murtaza-snowy.vercel.app/",
    repoUrl: "https://github.com/SainBux-HadiSeelro/Murtaza",
    image: "/projects/wedding-wishes.png",
    imageLabel: "Live Guest Submission Portal",
    featured: true,
    category: "data-utility",
  },
];

export const categoriesInfo = {
  agentic: {
    name: "Agentic Systems",
    title: "Featured Agentic Systems",
    subtitle: "Multi-Agent Swarms, Autonomous Tool Execution & Self-Correction Loops",
    badge: "Agentic AI",
    description:
      "Autonomous agent pipelines with multi-agent orchestration, tool calling, and live feedback loops.",
  },
  "ai-integrated": {
    name: "AI-Integrated Apps",
    title: "AI-Integrated Applications",
    subtitle: "Full-Stack Web Applications with Embedded Autonomous Agents",
    badge: "Applied AI",
    description:
      "Production-grade web applications powered by embedded conversational AI concierges and real-time telemetry.",
  },
  "client-demo": {
    name: "Client Demos",
    title: "Client Demos & Web Platforms",
    subtitle: "Modern Business Websites with 24/7 AI Concierges",
    badge: "Client Demos",
    description:
      "High-converting commercial websites featuring embedded 24/7 AI concierges and automated booking funnels.",
  },
  "data-utility": {
    name: "Data & Utilities",
    title: "Data, ML & Utilities",
    subtitle: "Predictive Telemetry Dashboards, Financial Ledgers & Technical Handbooks",
    badge: "Data & ML",
    description:
      "Predictive machine learning models, zero-database flatfile ledgers, and technical engineering handbooks.",
  },
  // Backward compatibility with legacy routes (/projects/websites, /projects/loop-engineering, /projects/streamlit)
  websites: {
    name: "Websites",
    title: "Websites & Full-Stack Platforms",
    subtitle: "Production Next.js Applications with Embedded AI Concierges",
    badge: "Full-Stack Web",
    description:
      "Modern full-stack web applications built with Next.js App Router, reactive cloud databases, and embedded AI.",
  },
  "loop-engineering": {
    name: "Loop Engineering",
    title: "Loop Engineering & Deterministic Systems",
    subtitle: "In-Session Heartbeat Loops, Self-Healing Systems & Autonomous Daemons",
    badge: "Loop Engineering",
    description:
      "Deterministic feedback loops, in-session heartbeat daemons, and self-healing software repair workflows.",
  },
  streamlit: {
    name: "Streamlit",
    title: "Streamlit Production Apps",
    subtitle: "Interactive Data Dashboards, Financial Systems & AI Utilities",
    badge: "Cloud AI Suites",
    description:
      "Turnkey Streamlit applications deployed to cloud runtimes with interactive Plotly visual analytics and ML classification.",
  },
} as const;

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "loop-engineering") {
    return projectsData.filter((p) => p.category === "loop-engineering");
  }
  if (category === "websites") {
    return projectsData.filter((p) => p.category === "client-demo" || p.category === "ai-integrated");
  }
  if (category === "streamlit") {
    return projectsData.filter((p) => p.category === "data-utility" || p.id === "ai-folio" || p.id === "agentic-unit-converter");
  }
  return projectsData.filter((p) => p.category === (category as ProjectCategory));
};
