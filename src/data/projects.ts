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
