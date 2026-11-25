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
    title: "AI-Folio — Autonomous Business Engineering Platform & 24/7 AI Concierge",
    subtitle: "Smart AI Business Portfolio with 24/7 Client Assistant & Automation Lab",
    badge: "Agentic",
    summary:
      "An interactive portfolio that acts as a 24/7 smart assistant for visitors. It answers client inquiries instantly, demonstrates AI agents collaborating on research, and calculates how much time and money AI automation can save a business.",
    description:
      "An interactive business platform powered by AI. It features Aura AI—a friendly 24/7 assistant that chats with prospective clients, answers questions about services, and captures leads—plus an interactive demo showing how multiple AI agents work together to research and analyze data.",
    problem:
      "Traditional portfolio websites are static and boring. They cannot answer client questions after hours, explain complex services, or prove how much time and money AI automation actually saves.",
    solution:
      "Created an active AI-powered hub with an always-on conversational assistant, a live visual demonstration of collaborative AI agents, and a business calculator estimating operational cost savings.",
    result:
      "Instant 24/7 client answers, zero lost leads, and a clear preview of business savings before hiring.",
    highlights: [
      "24/7 Aura AI Assistant: Answers visitor questions about skills, pricing, and project scope",
      "Multi-Agent Demo Lab: Shows 3 AI agents working together (Researcher → Analyst → Writer)",
      "Business ROI Calculator: Estimates hours and dollars saved by replacing manual tasks with AI",
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
    title: "ELITE FITNESS — Autonomous Multi-Agent AI Luxury Gym",
    subtitle: "Luxury Fitness Web App with 4 Specialized AI Coaches & Instant VIP Booking",
    badge: "Agentic",
    summary:
      "A luxury gym web platform where 4 specialized AI coaches collaborate to calculate body stats, design customized workout and diet plans, and issue instant trial passes.",
    description:
      "A modern fitness portal with 4 AI assistants working as a team (Nova for workout plans, Titan for strength training, MacroCore for nutrition, and BioScan for body stats) to guide gym visitors and automate trial bookings.",
    problem:
      "Most gym websites use static contact forms and generic chatbots that cannot calculate calories, recommend real workouts, or personalize plans.",
    solution:
      "Built a team of 4 AI coaches that evaluate user fitness goals, calculate BMI and daily calories on the fly, and automatically issue VIP guest passes.",
    result:
      "Instant custom fitness plans, automated VIP pass generation, and higher member signups without front-desk staff effort.",
    highlights: [
      "4 Specialized AI Coaches working together on workouts, nutrition, and member support",
      "Instant Body Stats: Calculates BMI, calorie targets, and macro split tailored to your goals",
      "Automated VIP Trial Passes with instant confirmation codes and zero waiting",
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
    title: "Excel AI Agent — Autonomous Multilingual Spreadsheet Assistant",
    subtitle: "Talk to Excel in Simple English or Roman Urdu — Automatic Formulas & Charts",
    badge: "Agentic",
    summary:
      "An intelligent spreadsheet assistant that lets anyone clean data, create formulas, and generate charts in Excel simply by typing in plain English or Roman Urdu.",
    description:
      "A friendly spreadsheet helper powered by AI. Instead of struggling with difficult Excel formulas (VLOOKUP, INDEX/MATCH) or complex macros, users simply type what they need in everyday language, and the AI safely updates the sheet.",
    problem:
      "Many office workers and business owners waste hours struggling with complex Excel formulas or corrupting spreadsheets by mistake.",
    solution:
      "Engineered an AI agent that understands plain English and everyday Roman Urdu, performs formulas and data cleanup automatically, and keeps safety backups so no data is ever lost.",
    result:
      "Zero accidental data loss with automatic rollbacks, 10x faster data analysis, and easy spreadsheet management for non-technical users.",
    highlights: [
      "Bilingual AI: Understands commands in both plain English and conversational Roman Urdu",
      "15+ Safe Excel Tools: Automatically calculates sums, removes duplicates, and makes charts",
      "Safety Backup Guard: Creates instant snapshot backups before any edit so you can undo anytime",
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
    title: "Nexus Mind — Autonomous Multi-Agent Gaming & Intelligence Platform",
    subtitle: "Smart AI Guessing Game & 24/7 Companion with Real-Time Strategy Feedback",
    badge: "Agentic",
    summary:
      "An engaging AI deduction game where players test their strategy against intelligent AI agents while receiving helpful tips from a 24/7 bilingual assistant.",
    description:
      "A smart game platform that turns number guessing into an interactive battle of minds. Two AI agents coordinate the game rules and strategy tips, while Nova—a friendly 24/7 assistant—helps players improve their deductive thinking.",
    problem:
      "Traditional guessing games rely on simple random luck, offering no strategy feedback, intelligent hints, or dynamic AI interaction.",
    solution:
      "Created an intelligent gaming arena featuring two AI agents that evaluate deduction accuracy in real time and a friendly assistant to guide players.",
    result:
      "Fun, highly interactive gameplay that trains analytical thinking with zero lag and 24/7 bilingual assistance.",
    highlights: [
      "Two collaborative AI agents managing gameplay logic and strategy tips",
      "24/7 Nova AI Assistant supporting both English and conversational Roman Urdu",
      "Real-time accuracy scoring showing how smart your guesses are on every turn",
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
    title: "CipherSentinel AI — Next-Gen Cryptographic Password Suite & 24/7 Autonomous Security Agent",
    subtitle: "Military-Grade Password Studio with a 24/7 Cybersecurity AI Advisor",
    badge: "Agentic",
    summary:
      "Generates unbreakable passwords and passphrases while an embedded 24/7 AI security advisor audits your credentials and helps protect your accounts.",
    description:
      "A security toolkit that generates truly random passwords, memorable Diceware passphrases, and PIN codes. Features an embedded AI security advisor that explains how strong your password is and how to keep your online accounts safe.",
    problem:
      "Most people use easy-to-guess passwords or weak generator tools that can be cracked by hackers in seconds, without knowing if their credentials are safe.",
    solution:
      "Built a bank-grade password generator using true computer randomness and a 24/7 AI security auditor that tests password strength against real-world hacking speeds.",
    result:
      "Zero password storage on servers for 100% privacy, unbreakable credentials, and clear security guidance for non-technical users.",
    highlights: [
      "True Random Generator: Creates military-grade passwords, memorable phrases, and PINs",
      "Real-time Hack Defense Meter: Shows how many years a supercomputer would take to crack it",
      "24/7 AI Security Advisor providing plain-English tips to protect your personal and business accounts",
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
    title: "ApexRPS — Autonomous Agentic Decision Platform & 24/7 Live AI Concierge",
    subtitle: "Smart Pattern-Learning Game & 24/7 Strategy Assistant",
    badge: "Agentic",
    summary:
      "A Rock-Paper-Scissors platform where the AI learns your play style and habit patterns in real time, accompanied by a 24/7 strategy coach.",
    description:
      "An interactive decision game that demonstrates how AI discovers human behavioral patterns. Instead of picking randomly, the AI watches your moves, predicts what you'll play next, and explains its thought process.",
    problem:
      "Simple computer bots play purely by random luck, providing zero demonstration of how machine learning and behavioral AI actually work.",
    solution:
      "Engineered a pattern-predicting AI brain that analyzes past player moves to anticipate future choices, paired with a live strategy assistant.",
    result:
      "An addictive, entertaining demonstration of predictive AI that outperforms random guessing and teaches players about their own habits.",
    highlights: [
      "Smart AI that learns and adapts to your play patterns after just a few rounds",
      "Transparent Thought Stream showing why the AI made its move",
      "24/7 AI Game Concierge ready to explain game strategy and AI concepts simply",
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
    subtitle: "Comprehensive Health & Fitness Calculator with a 24/7 AI Nutrition Copilot",
    badge: "Agentic",
    summary:
      "Calculates precise BMI, daily calorie needs, and body fat, then pairs you with a 24/7 AI health coach for personalized diet and workout advice.",
    description:
      "An all-in-one health intelligence platform. Enter basic measurements to see your body mass index, daily calorie targets (BMR/TDEE), and health risk assessment, while chatting with a 24/7 AI wellness assistant for tailored meal and workout suggestions.",
    problem:
      "Standard online BMI calculators give you just a cold number without explaining what it means, how many calories to eat, or how to reach a healthy weight.",
    solution:
      "Built an easy health dashboard that calculates clinical health metrics clearly and pairs them with an empathetic AI health copilot that remembers your stats.",
    result:
      "Instant clear health insights, personalized 7-day meal and training tips, and 1-click printable health summaries.",
    highlights: [
      "24/7 AI Health Copilot that remembers your measurements to suggest custom meals and exercises",
      "Complete Body Analytics: BMI, daily calorie burn (BMR/TDEE), and body fat percentage",
      "Visual Health Risk Meter with 1-click download of your personal health report",
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
    title: "NexusNarrative — Smart Multi-Agent Story Studio",
    subtitle: "Fun Multi-Agent Storytelling Studio — Write, Polish & Score Stories with AI",
    badge: "Agentic",
    summary:
      "A creative story maker where 4 AI assistants (idea generator, director, writer, and editor) team up with you to craft and polish entertaining tales.",
    description:
      "A collaborative storytelling app. Pick a theme or fill in quirky words, and watch 4 specialized AI agents collaborate: one plans the plot, one writes the draft, one polishes grammar, and one scores the story's excitement and reading time.",
    problem:
      "Single AI prompts often produce generic, repetitive stories with uneven pacing and no quality checks.",
    solution:
      "Organized a multi-agent assembly line where each AI specialist has one job—planning, writing, or editing—resulting in much richer stories.",
    result:
      "Fun, engaging interactive stories with automated quality scores and 1-click export to text or Markdown.",
    highlights: [
      "4-Agent Writing Crew: Idea Assistant, Director, Story Writer, and Quality Reviewer",
      "Automated Story Scorecard tracking word count, reading time, and excitement rating",
      "1-Click Theme Presets with instant download of your completed story",
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
    subtitle: "Smooth Deep-Work Focus Timer with a 24/7 Bilingual Productivity Assistant",
    badge: "Agentic",
    summary:
      "A distraction-free productivity timer featuring smooth visual animations, gentle chime alerts, and a 24/7 AI assistant to keep you focused.",
    description:
      "A deep-work timer designed for students, developers, and professionals. Unlike clunky timers that freeze your screen, ChronoFlow runs at a buttery-smooth 60 frames per second, plays gentle audio chimes, and includes a friendly floating AI productivity coach.",
    problem:
      "Many web timers freeze the browser, lose your time when you click another tab, or sound annoying loud buzzers that break your concentration.",
    solution:
      "Engineered a lightweight, non-blocking visual timer with gentle harmonic chimes and a bilingual AI assistant always on standby to offer focus tips.",
    result:
      "Zero screen freezing, smooth timing controls, and instant productivity guidance in English or Roman Urdu.",
    highlights: [
      "Smooth 60 FPS Visual Clock that never stutters, freezes, or loses your time",
      "Gentle Harmonic Audio Chimes to signal work breaks without jarring alarms",
      "24/7 Floating AI Assistant offering proven focus techniques (Pomodoro, time-blocking)",
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
    title: "OmniConvert AI — Autonomous Multilingual Unit Intelligence & 24/7 AI Copilot",
    subtitle: "Universal Measurement Converter with Step-by-Step Formulas & AI Math Copilot",
    badge: "Agentic",
    summary:
      "Converts measurements across 50+ units with crystal-clear step-by-step formulas and an AI math assistant that understands conversational English and Roman Urdu.",
    description:
      "A modern unit converter that goes beyond simple number swapping. It handles length, weight, temperature, data storage, speed, and more, showing you exactly how the math works and letting you ask conversion questions in everyday language.",
    problem:
      "Most unit converters are confusing, break when converting temperatures, and never explain how they got the answer.",
    solution:
      "Built a rock-solid conversion engine covering 10 categories, displaying clear step-by-step formulas, and featuring Nova—an AI copilot you can talk to naturally.",
    result:
      "100% accurate mathematical conversions, transparent formulas, and bilingual natural language queries.",
    highlights: [
      "10 Physical Categories (Length, Weight, Temp, Storage, Speed, Volume, Energy, and more)",
      "24/7 Bilingual AI Copilot ('Nova'): Ask '50 kg mein kitne lbs hotay hain?' and get instant answers",
      "Step-by-Step Math Explanations showing the exact formula used for every calculation",
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
    title: "Maker-Checker Autonomous Loop — Zero-Trust Dual-Agent Bugfix Protocol",
    subtitle: "Two-Agent Self-Healing Code Protocol — One Writes, One Audits Before Merging",
    badge: "Loop Engineering",
    summary:
      "Prevents buggy AI code from reaching production by having two separate AI agents work like an author and a strict editor in an isolated sandbox.",
    description:
      "An automated software repair system implementing the Maker-Checker principle. Agent 1 (the Maker) writes the code fix in an isolated temporary workspace, while Agent 2 (the Checker) strictly audits and tests the code to catch shortcuts or sneaky hacks before anything touches the main project.",
    problem:
      "When an AI writes and approves its own code, it often takes shortcuts or cheats on tests, approving buggy fixes that crash in production.",
    solution:
      "Separated responsibilities: the coder agent cannot approve its own work; an independent auditor agent runs hidden tests to prove the fix is genuine.",
    result:
      "100% detection of fake or shortcut fixes, zero broken code pushed to main, and full audit logs of every decision.",
    highlights: [
      "Two-Agent Maker-Checker split: The coder never grades its own homework",
      "Isolated Workspaces: Bug fixes are tested in safety bubbles without touching live code",
      "Adversarial Testing: Catches hardcoded cheat values and ensures general fixes",
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
    title: "FixLoop AI — Autonomous Multi-Agent Self-Healing Code Engine",
    subtitle: "Parallel AI Code Repair Engine — 3 Specialist Coders & an Independent Reviewer",
    badge: "Loop Engineering",
    summary:
      "Dispatches 3 specialized AI programmers in parallel to fix bugs, then has an independent reviewer pick the safest, cleanest solution for production.",
    description:
      "An autonomous software self-healing platform. When a bug occurs, 3 AI specialist agents (Math, Text, and Data experts) work simultaneously in isolated branches to craft fixes. An independent reviewer AI tests all 3 candidates and merges only the highest-quality solution.",
    problem:
      "Fixing software bugs manually takes hours of developer time, while simple AI fixers can create new bugs and break existing features.",
    solution:
      "Architected a parallel repair workflow where multiple specialist agents propose fixes simultaneously and an independent reviewer verifies test passes before merging.",
    result:
      "Zero code regressions, automated bug repair in parallel, and an interactive visual dashboard showing both clean graphics and technical terminal logs.",
    highlights: [
      "Parallel Multi-Agent Repair: 3 AI specialists propose fixes at the same time",
      "Strict Evaluator-Optimizer Pattern: Code is audited by an independent reviewer",
      "Dual-View Visualizer: Switch easily between a simple visual pipeline and live terminal logs",
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
    title: "Autonomous Bugfix Loop — Agentic Maker-Checker Architecture for Self-Healing Software",
    subtitle: "Self-Healing Bugfix Loop with Surprise Anti-Cheat Tests",
    badge: "Loop Engineering",
    summary:
      "Catches and repairs software bugs automatically while running surprise stress tests to make sure the AI didn't just hardcode a fake pass.",
    description:
      "An automated self-healing software engine. It gives a coder agent an isolated workspace to fix an issue, then runs surprise test questions (edge cases) that the coder didn't know about, guaranteeing the bug is truly resolved.",
    problem:
      "AI agents frequently cheat on automated programming tests by hardcoding the expected answers (e.g., 'return 42') instead of fixing the underlying logic.",
    solution:
      "Built a dual-agent closed loop where a strict auditor agent tests the patch against unannounced surprise edge cases before approving the merge.",
    result:
      "100% intercept rate on shortcut patches, automated clean merges on real fixes, and live interactive simulation.",
    highlights: [
      "Anti-Cheat Verification: Exposes fake AI fixes before they pollute production",
      "Isolated Sandbox: Prevents dirty or unverified code attempts from leaking into the project",
      "Live Interactive HUD: Lets you watch an honest AI vs. a cheating AI fix code in real time",
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
    title: "Doorbell Loop — Autonomous Agentic AI Code-Review Engine",
    subtitle: "Automated Code Reviewer that Catches Silent Off-by-One Loop Bugs on Pull Requests",
    badge: "Loop Engineering",
    summary:
      "An automated code-review bot that inspects incoming code changes at the grammar level to catch sneaky off-by-one errors that sneak past normal linters.",
    description:
      "A developer tool that triggers whenever a code change (Pull Request) is submitted. It acts like a digital doorbell, waking up an automated review agent that parses the code structure to catch subtle boundary mistakes (like skipping the last item in a list) before they hit production.",
    problem:
      "Subtle boundary bugs—like stopping a loop one item too early—often don't cause red error messages, so they slip into live software and cause data corruption.",
    solution:
      "Architected an event-driven review bot that parses code trees to ensure loop ranges and dates are strictly preserved.",
    result:
      "100% automated intercept rate on loop boundary bugs before merge, zero untainted master branch regressions, 6/6 deterministic unit test validations, and transparent real-time telemetry streaming.",
    highlights: [
      "Automatic PR Trigger: Rings the bell and starts inspecting as soon as code is submitted",
      "Deep Code Tree Inspection: Catches silent off-by-one bugs that standard linters miss",
      "Interactive Developer HUD: Features a 4-stage pipeline stepper and live log viewer",
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
    title: "Scheduled Memory Loop — Long-Term Episodic Memory Spine for Autonomous Agents",
    subtitle: "Long-Term Memory Spine for Autonomous AI Agents — No Forgotten Tasks",
    badge: "Loop Engineering",
    summary:
      "Gives autonomous AI agents permanent memory across reboots by recording only new task progress without ballooning memory costs.",
    description:
      "An episodic memory system for long-running AI assistants. Normally, when an AI restarts, it forgets everything it was doing. This platform keeps an organized, permanent progress notebook that updates only with new actions, ensuring the AI never forgets its mission.",
    problem:
      "AI assistants working on long tasks either suffer from memory amnesia when restarted, or their memory gets so bloated with repetitive logs that it becomes too expensive to run.",
    solution:
      "Engineered a smart memory loop that compares what's done against what's new, saving only genuine updates to a permanent notebook file.",
    result:
      "100% memory persistence across server restarts, zero memory bloat, and fast execution.",
    highlights: [
      "Permanent Progress Notebook: Remembers exactly what was done across restarts and reboots",
      "Smart Delta Tracking: Only logs brand-new accomplishments to prevent clutter",
      "Interactive Agent Console: Features live memory inspection and synthetic task injection",
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
    title: "Break-It-On-Purpose — Autonomous Loop Observability & Sabotage-Tested Diagnostic Spine",
    subtitle: "Sabotage-Tested Loop Monitor with Token Budget Cost Protection",
    badge: "Loop Engineering",
    summary:
      "Protects your wallet from infinite AI retry loops and deliberately injects faults to prove failures trigger clear 'Needs Human' alerts.",
    description:
      "A safety harness and observability dashboard for autonomous AI systems. It monitors token spending in real time so an AI loop never drains your API budget, and proves through deliberate sabotage tests that errors trigger clear, readable human alerts instead of failing silently.",
    problem:
      "Unattended AI loops running in the background can get stuck in infinite retry loops that silently drain thousands of dollars in API bills without notifying anyone.",
    solution:
      "Created a real-time spending guard that halts loops if cost thresholds are exceeded, paired with an emergency alarm that logs clear human-readable alerts.",
    result:
      "Zero silent failures, penny-accurate cost tracking per loop execution, and complete peace of mind for automated processes.",
    highlights: [
      "Real-Time Cost Guard: Monitors prompt and response costs per cycle to prevent budget blowouts",
      "Clear Human Alarm: Writes unmistakable 'NEEDS HUMAN' alerts with exact failure causes",
      "Interactive 5-Tab Console: Includes an AI playground, safety monitors, and cost tracking",
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
    title: "ISS Watch Loop — Real-Time Orbital Tracker & In-Session Loop",
    subtitle: "Live Space Station Tracker — Orbital Speed, Altitude & Earth Geography Below",
    badge: "Loop Engineering",
    summary:
      "Tracks the International Space Station in real time, mapping its path on an interactive globe and identifying the exact country or ocean astronauts are flying over.",
    description:
      "A live aerospace tracker and automated background loop. It polls space telemetry every 3 seconds to show the ISS cruising at ~27,600 km/h, calculates the distance traveled, and automatically names the territory, country, or open ocean passing directly below the astronauts.",
    problem:
      "Tracking high-speed orbital satellites in real time usually overwhelms browsers or breaks when network connections hiccup.",
    solution:
      "Architected a smooth background polling loop paired with interactive satellite maps, haversine distance math, and automatic reverse geography lookups.",
    result:
      "Smooth, real-time satellite tracking updated every 3 seconds with instant location detection and zero browser lag.",
    highlights: [
      "Real-time Orbital Map: Interactive satellite marker with live radar ring and flight path",
      "Live Speed & Altitude Telemetry: Streams orbital velocity (~27,600 km/h) and altitude (~420 km)",
      "Automatic Geography Lookups: Identifies land territories and open ocean waters beneath astronauts",
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
    subtitle: "Minimalist Luxury eCommerce with a 24/7 AI Shopping Concierge",
    badge: "AI-Integrated",
    summary:
      "A sleek luxury home decor online store featuring detailed architectural specs and an in-chat AI shopping assistant that can add items to your cart.",
    description:
      "A modern, high-end e-commerce store built for design objects. Visitors can browse refined product specifications and chat with an intelligent 24/7 shopping assistant that recommends products, answers sizing questions, and adds items directly to the cart.",
    problem:
      "Luxury shoppers often hesitate and leave stores because they have questions about dimensions, materials, or finishes outside normal customer service hours.",
    solution:
      "Engineered an ultra-fast store with a built-in 24/7 AI concierge trained on every product detail, capable of suggesting matches and adding items to the cart in-chat.",
    result:
      "Sub-second catalog browsing, zero checkout friction, and 24/7 customer guidance that converts visitors into buyers.",
    highlights: [
      "24/7 AI Shopping Concierge: Recommends products and adds them directly to your cart during chat",
      "Instant Cart & Coupon System: Real-time search, discount validation, and seamless checkout",
      "Detailed Product Matrices: Clear specifications on materials, dimensions, and finishes",
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
    title: "IRONPULSE — Ultra-Premium Fitness & 24/7 Performance Hub",
    subtitle: "Elite Strength Gym Platform with 24/7 PulseAI Concierge & Live Occupancy",
    badge: "AI-Integrated",
    summary:
      "A high-energy gym web app featuring live facility occupancy, interactive BMI calculations, and an AI concierge that generates instant VIP guest passes.",
    description:
      "A modern web portal built for serious strength athletes and powerlifters. Features live equipment specs, real-time gym occupancy metrics, an interactive BMI calculator, and 'PulseAI'—a 24/7 assistant that issues verifiable VIP trial pass tokens on demand.",
    problem:
      "Athletic clubs lose potential members when their website fails to showcase equipment specs or answer membership inquiries instantly.",
    solution:
      "Built a fast Next.js platform showcasing competition equipment, live gym occupancy, and an automated AI concierge that captures leads and issues guest passes.",
    result:
      "Zero-lag browsing, instant client calculations, and 24/7 automated guest pass distribution.",
    highlights: [
      "PulseAI Concierge: Answers membership questions and generates verifiable VIP guest passes",
      "Live Gym Telemetry: Displays current gym occupancy, air quality, and facility temperature",
      "Interactive Body Health Tool: Client-side BMI and daily metabolic calorie calculator",
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
    title: "WellTrack AI — Complete Intelligent Wellness & Health Companion",
    subtitle: "All-in-One Health & Wellness Companion with 24/7 AI Lifestyle Coach",
    badge: "AI-Integrated",
    summary:
      "Combines daily habit tracking, sleep rhythm insights, and nutrition planning with an empathetic 24/7 AI wellness coach.",
    description:
      "A unified health and wellness portal. It tracks your daily hydration, nutrition, and sleep rhythms, computes an overall 0-100 Vitality Score, and provides an interactive 24/7 AI coach that gives personalized recovery and habit advice.",
    problem:
      "Health tracking is usually scattered across multiple disjointed apps without clear synthesized guidance on how to actually feel better.",
    solution:
      "Created a unified wellness ecosystem combining sleep, hydration, and nutrition trackers with an always-available AI lifestyle coach.",
    result:
      "Clear single-screen health score, personalized daily recovery tips, and easy habit tracking on mobile and desktop.",
    highlights: [
      "24/7 AI Wellness Coach: Offers personalized, actionable habit and nutrition tips",
      "Vitality Health Score: Combines sleep, activity, and hydration into an easy 0-100 score",
      "Daily Habit Tracker: Simplifies sleep tracking, water intake, and daily reflections",
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
    subtitle: "Turnkey Real Estate Client Acquisition Funnel with 24/7 AI Lead Booking",
    badge: "AI-Integrated",
    summary:
      "An automated real estate portal where an intelligent AI advisor engages property buyers, qualifies their budget, and books tours directly on agent calendars.",
    description:
      "A high-converting client acquisition system for real estate agencies. A friendly 24/7 conversational AI agent greets visitors, asks about their property preferences, budget, and timeline, and schedules qualified buyers straight into the agency's viewing calendar.",
    problem:
      "Real estate brokerages miss out on high-value buyers due to slow response times, while agents waste precious hours touring with unqualified leads.",
    solution:
      "Architected an automated conversational funnel that engages visitors immediately 24/7, scores their purchase readiness, and syncs tours with agent calendars.",
    result:
      "Instant response to property buyers, 3x faster lead qualification, and booked calendar appointments with verified buyer information.",
    highlights: [
      "24/7 AI Lead Qualifier: Evaluates buyer budget, desired location, and moving timeline",
      "Automated Tour Booking: Synchronizes verified viewing appointments directly to agent calendars",
      "Multi-Stage Conversion Funnel: Automates lead capture and followup notifications",
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
    title: "Hangman: Modern AI Edition & 24/7 NEXUS AI Assistant",
    subtitle: "Cyberpunk Word Deduction Game with a 24/7 Contextual AI Assistant",
    badge: "AI-Integrated",
    summary:
      "A stylish word deduction game featuring NEXUS-7—an AI assistant that gives smart, spoiler-free hints when you get stuck.",
    description:
      "A cyberpunk-themed word deduction game. Pick from 4 knowledge categories, guess the mystery phrase, and if you get stuck, tap NEXUS-7—an embedded AI companion that provides clever, contextual clues without spoiling the answer.",
    problem:
      "Classic word guessing games can feel punishing and frustrating when players hit a mental wall, with no friendly help available.",
    solution:
      "Integrated an intelligent resident AI assistant that offers thoughtful, non-spoilery clues across science, tech, history, and pop culture.",
    result:
      "Engaging, zero-frustration gameplay with instant hints, dynamic streak scoring, and fluid keyboard controls.",
    highlights: [
      "NEXUS-7 AI Companion: Delivers smart, spoiler-free hints when you need a nudge",
      "4 Knowledge Domains: Curated categories spanning science, technology, and culture",
      "Interactive Cyber Keypad: Responsive virtual keypad with real-time feedback and animations",
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
    title: "Lumière Palace Paris — Ultra-Luxury Hotel & Suites Platform",
    subtitle: "Luxury Parisian Palace Website with 4-Step Booking & 24/7 Gemini AI Concierge",
    badge: "Client Demo",
    summary:
      "An ultra-luxury hotel reservation portal featuring a 4-step suite booking engine and a 24/7 Gemini AI concierge trained on Parisian hospitality.",
    description:
      "A bespoke luxury hospitality website designed for 5-star hotels and boutique resorts. Guests explore opulent suites, book stays through an intuitive 4-step reservation engine with live stay duration calculations, and chat with a 24/7 AI concierge for personalized Parisian itinerary advice.",
    problem:
      "Luxury travelers expect immediate answers about room amenities and bespoke itineraries at all hours, but conventional hotel forms are slow and rigid.",
    solution:
      "Engineered an ultra-fast luxury web experience featuring a 4-step booking workflow, instant digital voucher generation, and a 24/7 AI concierge powered by Google Gemini.",
    result:
      "Frictionless suite reservations, instant booking vouchers with confirmation tokens, and 24/7 VIP guest assistance.",
    highlights: [
      "24/7 Luxury Hotel Concierge: Powered by Gemini AI to answer guest questions and recommend itineraries",
      "4-Step Suite Booking Engine: Smooth date selection, stay duration math, and guest customization",
      "Instant Digital Booking Voucher: Generates print-ready confirmation passes with unique security tokens",
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
    title: "Lumina Dental Clinics — High-Tech Precision Dentistry & 24/7 AI Concierge",
    subtitle: "Modern Boutique Dental Clinic with Smile Simulator & 24/7 Clinical AI Concierge",
    badge: "Client Demo",
    summary:
      "Clarifies dental treatment options and costs with an interactive Before/After smile simulator and a 24/7 AI dental concierge.",
    description:
      "A futuristic clinic website engineered for boutique dentistry. It helps patients understand cosmetic and restorative treatments with a split-screen Before/After Smile Simulator, an interactive financing estimator, and 'LUMINA-AI'—a 24/7 clinical triage concierge.",
    problem:
      "Patients avoid booking dental consultations because they fear hidden costs and can't get clear answers about treatment downtime outside office hours.",
    solution:
      "Built a transparent clinical platform with an interactive smile preview tool, installment calculator, and a 24/7 AI concierge answering procedure questions.",
    result:
      "Zero patient booking hesitation, transparent cost breakdowns, and 24/7 automated consultation qualification.",
    highlights: [
      "24/7 Dental AI Concierge: Explains procedures, recovery times, and answers treatment questions",
      "Before/After Smile Simulator: Interactive split-view slider showing real cosmetic treatment results",
      "Transparent Cost Estimator: Calculates estimated monthly installment plans and insurance coverage",
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
    title: "Elite Studio Clinic — Luxury Aesthetic Dentistry & 24/7 AI Concierge",
    subtitle: "Manhattan Aesthetic Medicine & Restorative Dentistry with 24/7 AI Triage",
    badge: "Client Demo",
    summary:
      "An aesthetic dentistry portal featuring verified before-and-after cases, transparent fee schedules, and a 24/7 AI concierge for VIP consultations.",
    description:
      "A luxury digital platform built for a premier aesthetic clinic in Manhattan. Features dark obsidian glassmorphism design, interactive smile makeover galleries, transparent pricing tables, and 'Aura AI'—a 24/7 concierge that qualifies patient inquiries and schedules VIP consultations.",
    problem:
      "High-ticket cosmetic clinic patients abandon booking forms when fee schedules, downtime, and pain management aren't explained clearly.",
    solution:
      "Architected a luxury clinical website with transparent fee intelligence, transformation showcases, and a 24/7 AI concierge for consultation bookings.",
    result:
      "Instant patient reassurance on treatment recovery, clear fee guidance, and 24/7 automated appointment booking.",
    highlights: [
      "24/7 Clinical Concierge (Aura AI): Answers patient inquiries on downtime, fees, and procedures",
      "Transformation Showcase: Displays verified before-and-after patient results",
      "VIP Consultation Booking: Direct calendar slot synchronization with instant confirmation",
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
    subtitle: "British Luxury Aesthetic Medicine Website with 24/7 Clinical AI Assistant",
    badge: "Client Demo",
    summary:
      "Addresses patient downtime concerns using procedure comparison matrices and a 24/7 medical aesthetics AI concierge.",
    description:
      "A high-converting digital platform for a luxury Harley Street aesthetic clinic. Features an elegant ivory design, clear treatment comparison guides (downtime, pain levels, longevity), and an always-on 24/7 AI aesthetic concierge that answers patient questions and books consultations.",
    problem:
      "Aesthetic clinic visitors often hesitate to book treatments because they don't know how long recovery will take or which treatment is right for them.",
    solution:
      "Engineered a refined web platform featuring side-by-side procedure comparisons and a 24/7 AI concierge that explains delicate treatments clearly.",
    result:
      "Smooth, informative patient onboarding and 24/7 automated inquiry triage that turns website visitors into booked appointments.",
    highlights: [
      "24/7 Medical Aesthetic Concierge: Clarifies treatment details, downtime, and pain levels",
      "Procedure Comparison Guides: Side-by-side matrices comparing benefits and recovery timelines",
      "Fast, Elegant UI: Optimized for instant mobile loading and seamless consultation requests",
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
    subtitle: "Quiet-Luxury Aesthetic Retreat & Wellness Clinic with 24/7 AI Concierge",
    badge: "Client Demo",
    summary:
      "A peaceful wellness retreat website with bespoke glassmorphic design and a 24/7 AI concierge for private treatment guidance.",
    description:
      "A serene web application designed for high-end aesthetic retreats. Embraces quiet luxury with warm earth tones, restorative treatment menus, an interactive consultation booking engine, and an always-available 24/7 AI concierge ('Aura') providing discreet guidance on skincare and therapies.",
    problem:
      "Discerning wellness clients look for private, thoughtful guidance on specialized skin therapies outside standard consultation hours.",
    solution:
      "Engineered an ultra-refined retreat website with warm aesthetics, interactive treatment booking, and an embedded 24/7 AI wellness assistant.",
    result:
      "Discreet after-hours consultation support and a frictionless booking pipeline for high-value retreat packages.",
    highlights: [
      "24/7 Aesthetic Concierge ('Aura'): Delivers tailored skincare information and treatment advice",
      "Interactive Consultation Engine: Fast, elegant booking with state persistence",
      "Quiet-Luxury Aesthetic: Custom earth palette and fluid, calming micro-animations",
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
    title: "Aura Atelier — Haute Coiffure, Aesthetic Rituals & 24/7 AI Concierge",
    subtitle: "Haute Coiffure & Beauty Sanctuary with Multi-Step Booking & Gemini AI Concierge",
    badge: "Client Demo",
    summary:
      "Streamlines high-fashion salon bookings with artist selection and a 24/7 Gemini AI beauty concierge for ritual formulations.",
    description:
      "A luxury beauty salon and hair atelier portal. Clients browse curated ritual treatments, select master stylists, book multi-step appointments with instant confirmation codes, and consult a 24/7 AI beauty advisor powered by Google Gemini.",
    problem:
      "High-end beauty clients want immediate answers about bridal packages, hair treatments, and artist availability without waiting for phone calls.",
    solution:
      "Architected a luxury salon website featuring multi-category service curation, master stylist selection, and a 24/7 AI concierge.",
    result:
      "Instant client answers, smooth multi-step appointment scheduling with instant confirmation codes, and automated booking growth.",
    highlights: [
      "24/7 Gemini AI Beauty Advisor: Recommends hair rituals and answers treatment questions",
      "Multi-Step Booking Desk: Filter by service, choose your favorite stylist, and get instant codes"
      ,"Curated Lookbook Portfolio: Lightbox gallery showcasing couture hair and skin transformations",
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
    subtitle: "Luxury Beauty Parlour with Multilingual (English & Urdu) 24/7 AI Concierge",
    badge: "Client Demo",
    summary:
      "Eliminates booking confusion with smart pre-filled reservation links and a bilingual AI salon concierge that speaks English and Urdu.",
    description:
      "An ultra-premium aesthetic salon and spa platform with champagne gold glassmorphism, dynamic treatment booking with pre-filled service links, and a 24/7 AI beauty concierge that speaks fluent English, Urdu, and Roman Urdu.",
    problem:
      "Salons often lose local and regional clients when their website is only in rigid English and cannot answer treatment questions in regional languages.",
    solution:
      "Created a bilingual salon platform with pre-filled service reservations and a 24/7 AI concierge supporting English, Urdu, and Roman Urdu.",
    result:
      "Effortless after-hours bookings and friendly consultation in the customer's native language.",
    highlights: [
      "Bilingual 24/7 Concierge: Welcomes and assists clients in both English and Urdu / Roman Urdu",
      "Smart Reservation Desk: Pre-fills selected treatments directly from the gallery or lookbook",
      "Audio Chime Feedback: Interactive sound feedback and elegant visual micro-interactions",
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
    subtitle: "Premium Athletic Facility Website with Membership Calculator & 24/7 AI Bot",
    badge: "Client Demo",
    summary:
      "Replaces boring gym brochures with an interactive monthly/annual membership calculator and a 24/7 AI concierge for trial bookings.",
    description:
      "A high-impact website built for an athletic performance facility. Features a bold dark aesthetic, parallax scrolling, an interactive membership calculator comparing monthly vs. annual savings, and an embedded 24/7 AI assistant to answer questions and book trials.",
    problem:
      "Traditional gym websites have static brochures with confusing pricing that fail to convert visitors into trial visitors.",
    solution:
      "Engineered a fast Next.js website with an interactive membership price toggle and an automated AI concierge handling trial bookings.",
    result:
      "Instant page loading, clear membership pricing comparisons, and 24/7 visitor lead capture.",
    highlights: [
      "24/7 AI Gym Concierge: Answers membership questions and captures trial bookings",
      "Interactive Membership Calculator: Instant toggle between monthly and annual discount rates",
      "High-Performance UI: Fast page loads and fluid parallax animations",
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
      "Predicts whether orbital rocket boosters can be safely recovered and calculates millions of dollars saved through reusable aerospace engineering.",
    description:
      "An aerospace decision-support platform combining historical rocket flight telemetry with machine learning. Enter mission variables like payload weight, target orbit, and launch site to predict booster landing success and calculate cost savings from rocket reuse.",
    problem:
      "Determining whether a multi-million-dollar rocket booster can be safely landed and reused involves dozens of complex environmental variables.",
    solution:
      "Engineered an easy-to-use predictive platform featuring calibrated landing risk scores, mission presets, and an aerospace cost savings calculator.",
    result:
      "Instant landing probability predictions and clear financial calculations showing multi-million-dollar savings from reusability.",
    highlights: [
      "Machine Learning Landing Classifier: Estimates rocket recovery probability with clear risk tiers",
      "Aerospace Savings Engine: Calculates multi-million-dollar cost savings from booster and fairing reuse",
      "Feature Importance Breakdown: Shows exactly which flight variables affected the prediction",
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
    subtitle: "SpaceX Launch Analysis & Machine Learning Mission Outcome Predictor",
    badge: "Data & ML",
    summary:
      "Analyzes 200+ historical SpaceX missions and uses machine learning to predict the probability of launch and landing success.",
    description:
      "A full-lifecycle Data Science platform analyzing historical SpaceX missions. Features interactive geospatial maps of launch complexes at Cape Canaveral, Vandenberg, and Kwajalein, alongside a trained machine learning model that forecasts mission success.",
    problem:
      "Rocket launches involve extreme variables (payload mass, launch site, orbit), making it hard to understand what factors drive launch success.",
    solution:
      "Built an interactive dashboard combining historical launch data analysis, interactive satellite maps, and a trained Random Forest model predicting mission outcomes.",
    result:
      "Sub-second prediction calculations, interactive launchpad maps, and clear exploratory charts.",
    highlights: [
      "Trained Machine Learning Model: Predicts mission success probability based on payload and orbit",
      "Interactive Satellite Maps: Explore SpaceX launch complexes in Florida and California"
      ,"Mission Simulator: Test how changing payload mass or launch site impacts mission success",
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
    title: "Autonomous Humanoid Robotics & Physical AI Handbook",
    subtitle: "Interactive Open Engineering Handbook for Humanoid Robotics & Physical AI",
    badge: "Data & ML",
    summary:
      "An open engineering guide teaching how to connect modern AI models with physical bipedal humanoid robots using ROS 2 and simulation tools.",
    description:
      "A comprehensive, practical engineering handbook bridging AI foundation models with physical robotics. Covers robot operating systems (ROS 2), digital twin simulations (Gazebo & Unity), NVIDIA Isaac Sim, and hands-on voice-to-action control.",
    problem:
      "Connecting cognitive AI brains with physical humanoid legs, arms, and motor control lacks beginner-friendly, unified learning resources.",
    solution:
      "Architected an open interactive handbook with a 4-module roadmap, interactive 2D LiDAR simulator, and code tutorials taking developers from basics to full autonomy.",
    result:
      "A structured, self-paced engineering curriculum used by roboticists and AI engineers worldwide.",
    highlights: [
      "4-Module Learning Roadmap: From basic kinematic design to full humanoid balance and voice control",
      "Interactive 2D LiDAR Simulator: Test robotic obstacle avoidance directly in your browser",
      "Industry Tools Covered: ROS 2, NVIDIA Isaac Sim, Gazebo, and Unity 3D digital twins",
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
    subtitle: "FinPulse — Zero-Database Personal Finance Tracker with Exact Integer Math",
    badge: "Utility",
    summary:
      "A lightweight personal finance tracker that eliminates penny rounding errors by using exact integer arithmetic and simple file storage.",
    description:
      "A personal budget and ledger system combining a modern web dashboard with an interactive terminal CLI. It uses exact 64-bit integer paisa/cents arithmetic so you never lose a fraction of a cent, and runs on simple files without requiring a heavy database server.",
    problem:
      "Traditional finance trackers suffer from floating-point rounding errors that cause balances to drift, while requiring heavy database setups.",
    solution:
      "Engineered a zero-database flatfile ledger using exact integer math, Plotly interactive budget graphs, and automated 50/30/20 financial health scoring.",
    result:
      "100% mathematical accuracy with zero rounding drift, sub-second reporting, and 1-click printable PDF statement generation.",
    highlights: [
      "Exact Integer Arithmetic: Uses precise integer math preventing penny rounding discrepancies",
      "Zero-Database Simplicity: Stores data in lightweight local files with instant analytics",
      "50/30/20 Budget Health Score: Automated financial health breakdown and PDF statement export",
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
    subtitle: "Commercial Invoice & Bill Generator with Instant Vector-Grade PDF Export",
    badge: "Utility",
    summary:
      "Automates commercial invoice creation with automatic tax and freight calculations, generating print-ready A4 PDF bills in under 30 seconds.",
    description:
      "A business billing dashboard designed for commercial traders and freelancers. Enter line items, quantities, and rates to have taxes, freight, and totals calculated automatically, then export clean, standardized print-ready A4 invoices with one click.",
    problem:
      "Creating invoices manually in spreadsheets is slow, looks unprofessional, and frequently leads to tax calculation errors.",
    solution:
      "Built a reactive billing platform that calculates multi-tier taxes automatically and generates professional vector PDFs in seconds.",
    result:
      "Fast invoice turnaround, 100% calculation accuracy, and one-click PDF downloads for clients.",
    highlights: [
      "Dynamic Line-Item Table: Automatically calculates tax, freight, and sub-totals for 1 to 20 items",
      "Vector-Grade A4 PDF Engine: Generates crisp, print-ready invoices ready to email or print",
      "One-Click Sample Loader: Test the full invoice workflow instantly with pre-loaded demo data",
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
    subtitle: "Full-Stack Wedding Guestbook with Live Slideshow & Auto-Compressed Photos",
    badge: "Utility",
    summary:
      "A real-time wedding guestbook where guests submit heartfelt messages and photos, an admin approves entries, and memories play in a live event slideshow.",
    description:
      "A full-stack web application built for a real family wedding. Guests scan a QR code to submit their names, warm wishes, and photos. An admin moderation portal lets family approve or reject posts, photos are automatically compressed for high speed, and approved wishes stream live on the banquet projector screen.",
    problem:
      "Collecting photos and messages from hundreds of guests at an event is chaotic, files clog phone memory, and there is no easy way to display wishes live.",
    solution:
      "Engineered a real-time web portal where guests upload memories, images are compressed automatically in the cloud, and approved wishes loop on a live slideshow.",
    result:
      "Delightful guest experience, zero manual photo resizing, and a beautiful live projector slideshow during the reception.",
    highlights: [
      "Real-Time Guest Submission: Guests upload warm wishes and photos from their phones in seconds",
      "Automatic Photo Compression: Optimizes high-res phone uploads without clogging server storage",
      "Admin Moderation Desk: 1-click approval workflow that instantly updates the live projector slideshow",
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
    title: "Loop Engineering & Deterministic Systems",
    subtitle: "In-Session Heartbeat Loops, Self-Healing Systems & Autonomous Daemons",
    badge: "Loop Engineering",
    description:
      "Deterministic feedback loops, in-session heartbeat daemons, and autonomous telemetry loops executing resilient, unattended cycles.",
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
