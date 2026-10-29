"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Briefcase,
  Layers,
  Cpu,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";

export default function Experience() {
  const experiences = [
    {
      role: "AI Engineer",
      company: "Morphelabs",
      type: "Remote",
      period: "Feb 2026 – Present",
      isCurrent: true,
      tag: "Current Role",
      tagColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      description:
        "Architecting production-grade agentic AI architectures, autonomous multi-agent orchestration pipelines, and deterministic tool-calling workflows for enterprise automation.",
      highlights: [
        "Architect multi-agent workflows in Python and the OpenAI SDK with async runtime graphs for enterprise automation.",
        "Develop custom MCP server endpoints connecting LLM reasoning engines to databases and external APIs.",
        "Build loop-engineered tool-calling pipelines with Pydantic schema validation and self-healing on API errors.",
        "Work on latency optimization and token budgeting for high-throughput LLM agent pipelines.",
      ],
      impactMetrics: [
        "Enterprise Async Graphs",
        "Custom MCP Endpoints",
        "Pydantic Self-Healing",
        "Token Budget Optimization",
      ],
      skills: [
        "Python",
        "OpenAI SDK",
        "Model Context Protocol (MCP)",
        "AsyncIO",
        "Pydantic",
        "Multi-Agent Systems",
        "FastAPI",
        "Schema Evaluation",
      ],
    },
    {
      role: "Forward Deployed AI Engineer",
      company: "Autonomous AI & Automation Delivery",
      type: "Global Remote",
      period: "2024 – 2026",
      isCurrent: false,
      tag: "Forward Deployed",
      tagColor: "text-[#1553C7] bg-[#EAF4FF] border-[#CFE6FF]",
      description:
        "Forward-deployed engineering designing and shipping end-to-end autonomous agent solutions, reactive web dashboards, and deterministic feedback loops for commercial use cases.",
      highlights: [
        "Engineered autonomous AI and automation projects spanning multi-agent swarms, RAG architectures, and custom tool-calling agents.",
        "Engineered coordinated multi-agent platforms with live biometrics tool calling, Markov decision telemetry, and real-time reasoning traces.",
        "Built bilingual (English & Roman Urdu) spreadsheet automation agents with deterministic undo snapshots and confirmation guards.",
        "Automated multi-stage lead qualification pipelines integrating conversational AI with calendar scheduling and webhook event handlers.",
      ],
      impactMetrics: [
        "Autonomous Agent Swarms",
        "Multi-Agent Swarm Orchestration",
        "Bilingual Agent Intelligence",
        "Closed-Loop Automations",
      ],
      skills: [
        "Python",
        "Next.js 15",
        "TypeScript",
        "Streamlit",
        "OpenAI SDK",
        "Docker",
        "n8n Workflows",
        "Supabase",
      ],
    },
  ];

  const highlightsSummary = [
    {
      title: "Current Engineering Role",
      value: "AI Engineer @ Morphelabs",
      sub: "Enterprise Multi-Agent Systems & MCP",
      icon: Briefcase,
      color: "text-[#1553C7]",
      bg: "bg-[#EAF4FF]",
      border: "border-[#CFE6FF]",
    },
    {
      title: "Architecture & Delivery",
      value: "Autonomous AI Systems",
      sub: "Pipelines, Swarms & Automations",
      icon: Sparkles,
      color: "text-[#1EA7FF]",
      bg: "bg-[#F0F7FF]",
      border: "border-[#CFE6FF]",
    },
    {
      title: "Engineering Core",
      value: "Loop Engineering & MCP",
      sub: "Pydantic Contracts & Zero-Hallucination",
      icon: Cpu,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-gradient-to-b from-white via-[#F7FAFD] to-white border-b border-[#DCEBFC]">
      {/* Decorative Circuit Lines */}
      <div className="absolute top-12 left-6 hidden xl:block pointer-events-none">
        <CircuitLineDecoration orientation="left" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Signature Gradient Pill Label */}
        <div className="mb-4">
          <SectionPill title="EXPERIENCE //" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C]">
              Work Experience &amp; Track Record
            </h2>
            <p className="text-[#5B6B8C] text-sm sm:text-base mt-2.5 max-w-xl">
              Forward-deployed engineering across enterprise multi-agent workflows, MCP servers, and production-ready automation systems.
            </p>
          </div>
          <div className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3.5 py-1.5 rounded-full border border-[#CFE6FF] self-start md:self-auto shadow-2xs">
            Status: Active Forward Deployed Engineer
          </div>
        </div>

        {/* Quick Highlights Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {highlightsSummary.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className={`p-4 sm:p-5 rounded-2xl ${item.bg} border ${item.border} shadow-2xs flex items-center justify-between gap-4`}
              >
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#5B6B8C]">
                    {item.title}
                  </span>
                  <div className="font-heading font-extrabold text-base text-[#0B1F5C] mt-0.5">
                    {item.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#5B6B8C] mt-0.5">
                    {item.sub}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/90 border border-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vertical Timeline with Cyan Line and Navy Dots */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1EA7FF]/60 space-y-12 ml-2 sm:ml-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Navy Dot with Cyan Glow Border */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-2 w-4 h-4 rounded-full bg-[#0B1F5C] border-2 border-[#1EA7FF] shadow-[0_0_10px_#1EA7FF]" />

              <div className="tech-card rounded-2xl p-6 sm:p-8 bg-white border border-[#DCEBFC] shadow-sm hover:border-[#1EA7FF] hover:shadow-[0_12px_28px_-6px_rgba(21,83,199,0.1)] transition-all">
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#E8F1FC]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B1F5C]">
                        {exp.role}
                      </h3>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${exp.tagColor}`}>
                        {exp.isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                        {exp.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-mono text-[#5B6B8C] mt-1.5">
                      <span className="text-[#1553C7] font-bold text-sm">{exp.company}</span>
                      <span>&bull;</span>
                      <span className="font-medium">{exp.type}</span>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[#5B6B8C] font-semibold flex items-center gap-2 self-start sm:self-auto bg-[#F0F7FF] px-3.5 py-1.5 rounded-full border border-[#CFE6FF]">
                    <Calendar className="w-3.5 h-3.5 text-[#1553C7]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-[#1E2A44] leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                {/* Highlights from Resume */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1E2A44]">
                      <CheckCircle2 className="w-4 h-4 text-[#1553C7] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Impact Tags */}
                <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-[#E8F1FC]">
                  {exp.impactMetrics.map((metric) => (
                    <span
                      key={metric}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider text-[#1553C7] bg-[#EAF4FF] border border-[#CFE6FF]"
                    >
                      <ShieldCheck className="w-3 h-3 text-[#1EA7FF]" />
                      <span>{metric}</span>
                    </span>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="pill-badge text-[11px] font-mono px-3 py-1 rounded-full text-[#0B1F5C] bg-[#F0F7FF] border border-[#DCEBFC] hover:border-[#1EA7FF] hover:bg-[#E1F0FF] transition-colors shadow-2xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
