"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  GraduationCap,
  Award,
  Brain,
  Sparkles,
  Cpu,
  Terminal,
  Code2,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";

export default function Education() {
  const formalEducation = {
    degree: "BS Software Engineering",
    institution: "Virtual University of Pakistan",
    period: "2023 – 2027",
    status: "Degree Candidate",
    details:
      "Comprehensive 4-year curriculum grounding practical AI engineering in formal computer science principles, distributed systems architecture, algorithmic efficiency, and object-oriented paradigms.",
    coreFocus: [
      "Distributed Systems Architecture",
      "Data Structures & Algorithms",
      "Software Design Patterns",
      "Applied Machine Learning",
      "Database Engineering",
    ],
  };

  // Structured by strategic relevance and chronology:
  // 1. SMIT: Core agentic AI specialization (portfolio anchor)
  // 2. GIAIC: Active GenAI & Modern Web cohort
  // 3. PIAIC: Cloud-native AI & systems
  // 4. Aptech: Core programming foundation
  const certifications = [
    {
      title: "SMIT Agentic AI Specialized Course",
      organization: "Saylani Mass IT Training (SMIT)",
      period: "Feb 2025 – Dec 2025",
      badge: "Agentic AI",
      status: "Advanced Specialization",
      isHighlighted: true,
      icon: Brain,
      description:
        "Intensive hands-on track covering autonomous agents, multi-agent coordination, deterministic loop engineering, and production tool execution pipelines.",
      topics: ["Multi-Agent Loops", "Tool Calling", "MCP Protocol", "Autonomous Runtimes"],
    },
    {
      title: "Governor Sindh IT Initiative (GIAIC)",
      organization: "GenAI, Web3 & Metaverse Program",
      period: "Feb 2024 – Present",
      badge: "GenAI & Cloud",
      status: "Active Cohort",
      isActive: true,
      icon: Sparkles,
      description:
        "Applied Generative AI development, modern Next.js ecosystem, TypeScript, LLM application engineering, and vector database retrieval.",
      topics: ["Generative AI", "Next.js App Router", "TypeScript", "LLM Pipelines"],
    },
    {
      title: "Presidential Initiative for AI & Computing (PIAIC)",
      organization: "PIAIC National Program",
      period: "Nov 2024 – Sep 2026",
      badge: "AI & Cloud Systems",
      status: "Active Fellow",
      isActive: true,
      icon: Cpu,
      description:
        "Foundational and advanced artificial intelligence, cloud-native computing, microservices architecture, and scalable Python distributed systems.",
      topics: ["Cloud-Native AI", "Microservices", "Python Systems", "Model Inference"],
    },
    {
      title: "Advance Python Specialist",
      organization: "Aptech Shahrah-e-Faisal",
      period: "May 2023 – Aug 2023",
      badge: "Python Specialist",
      status: "Foundational Certified",
      icon: Terminal,
      description:
        "Rigorous training in advanced Python paradigms, object-oriented design, modular architecture, concurrency, and backend automation.",
      topics: ["OOP & Design Patterns", "Concurrency", "Backend Automation", "Data Pipelines"],
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative bg-white border-b border-[#DCEBFC]">
      {/* Decorative Circuit Lines */}
      <div className="absolute top-12 right-6 hidden md:block">
        <CircuitLineDecoration orientation="right" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Signature Gradient Pill Label */}
        <div className="mb-4">
          <SectionPill title="CREDENTIALS //" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C]">
              Education &amp; Specializations
            </h2>
            <p className="text-[#5B6B8C] text-sm sm:text-base mt-2.5 max-w-xl">
              Formal software engineering academia paired with premier national AI fellowships and production agent specializations.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[#1553C7] bg-[#F0F7FF] border border-[#CFE6FF]">
              <GraduationCap className="w-3.5 h-3.5 text-[#1EA7FF]" />
              1 Formal Degree
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[#0B1F5C] bg-[#F0F7FF] border border-[#CFE6FF]">
              <Award className="w-3.5 h-3.5 text-[#1553C7]" />
              4 AI &amp; Tech Fellowships
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formal Degree & Academic Anchor */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#0B1F5C] font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#1553C7]" />
              <span>University Degree</span>
            </h3>

            {/* University Degree Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="tech-card rounded-2xl p-6 sm:p-7 relative bg-gradient-to-br from-white via-[#F8FBFF] to-[#EFF7FF] border border-[#CFE6FF] shadow-sm hover:border-[#1EA7FF] transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#1553C7] border border-[#CFE6FF] bg-[#EAF4FF]">
                  <span className="w-2 h-2 rounded-full bg-[#1EA7FF] animate-pulse" />
                  {formalEducation.status}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#5B6B8C] bg-white px-3 py-1 rounded-full border border-[#DCEBFC]">
                  <Calendar className="w-3.5 h-3.5 text-[#1553C7]" />
                  {formalEducation.period}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B1F5C] tracking-tight">
                  {formalEducation.degree}
                </h4>
                <div className="text-xs font-mono font-bold text-[#1553C7] mt-1 flex items-center gap-1.5">
                  <span>{formalEducation.institution}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5B6B8C] leading-relaxed mb-6">
                {formalEducation.details}
              </p>

              {/* Core Disciplines Chips */}
              <div className="pt-4 border-t border-[#E0EFFF]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#0B1F5C] font-bold mb-3 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#1553C7]" />
                  <span>Key Coursework &amp; Pillars</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {formalEducation.coreFocus.map((focus, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium text-[#1E2A44] bg-white border border-[#DCEBFC] shadow-2xs"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Theory Meets Production AI Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-[#0B1F5C] to-[#1553C7] text-white shadow-md relative overflow-hidden group"
            >
              {/* Subtle background glow */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#1EA7FF]/20 blur-2xl group-hover:bg-[#1EA7FF]/30 transition-all pointer-events-none" />

              <div className="flex items-center gap-2 text-[#1EA7FF] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>Engineering Synergy</span>
              </div>
              <h5 className="font-heading text-lg font-extrabold text-white mb-2 leading-snug">
                Academic Theory &times; Production AI Runtimes
              </h5>
              <p className="text-xs text-[#DCEBFC] leading-relaxed font-normal">
                Combining classic software architecture, memory safety, and algorithmic rigor with modern agent orchestration, deterministic tool protocols, and live LLM reasoning loops.
              </p>
            </motion.div>
          </div>

          {/* Right Column: 4 Strategic Fellowships & Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#0B1F5C] font-bold flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-[#1553C7]" />
              <span>Specialized Fellowships &amp; Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, cIdx) => {
                const CertIcon = cert.icon;
                return (
                  <motion.div
                    key={cIdx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: cIdx * 0.08 }}
                    className={`tech-card rounded-2xl p-5 sm:p-6 transition-all relative ${
                      cert.isHighlighted
                        ? "bg-gradient-to-br from-white to-[#F0F7FF] border-[#1EA7FF]/70 shadow-[0_4px_20px_rgba(30,167,255,0.08)]"
                        : "bg-white border-[#DCEBFC] hover:border-[#1EA7FF]"
                    }`}
                  >
                    {/* Header Row: Title & Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2">
                      <div className="flex items-start sm:items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            cert.isHighlighted
                              ? "bg-gradient-to-br from-[#0B1F5C] to-[#1553C7] text-white shadow-xs"
                              : "bg-[#EAF4FF] text-[#1553C7]"
                          }`}
                        >
                          <CertIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-heading text-base font-extrabold text-[#0B1F5C] leading-snug">
                            {cert.title}
                          </h4>
                          <div className="text-xs font-mono font-bold text-[#1553C7]">
                            {cert.organization}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-center flex-wrap">
                        {cert.isActive && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Active
                          </span>
                        )}
                        <span className="pill-badge text-[10px] font-mono font-bold px-2.5 py-1 rounded-full text-[#0B1F5C] bg-[#F0F7FF] border-[#DCEBFC]">
                          {cert.badge}
                        </span>
                      </div>
                    </div>

                    {/* Timeline Date & Status */}
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#5B6B8C] mb-3 bg-[#F8FBFF] px-3 py-1.5 rounded-xl border border-[#E8F1FC]">
                      <span className="flex items-center gap-1.5 font-semibold text-[#1553C7]">
                        <Calendar className="w-3.5 h-3.5 text-[#1553C7]" />
                        {cert.period}
                      </span>
                      <span className="text-[11px] font-medium text-[#5B6B8C]">
                        {cert.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#5B6B8C] leading-relaxed mb-3.5">
                      {cert.description}
                    </p>

                    {/* Topic / Competency Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium text-[#1553C7] bg-[#EAF4FF]/80 border border-[#D0E5FF]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
