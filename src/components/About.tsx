"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  TerminalSquare,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  Zap,
} from "lucide-react";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";

export default function About() {
  const tenets = [
    {
      icon: Workflow,
      title: "Autonomous Multi-Agent Workflows",
      desc: "Async runtime graphs and orchestrated agent swarms built with Python and the OpenAI SDK for resilient enterprise automation.",
    },
    {
      icon: Cpu,
      title: "Model Context Protocol (MCP) Servers",
      desc: "Custom MCP server endpoints connecting LLM reasoning engines directly to SQL/NoSQL databases, webhooks, and external APIs.",
    },
    {
      icon: Layers,
      title: "Loop Engineering & Self-Correction",
      desc: "Strict Plan → Act → Verify → Self-Correct pipelines with Pydantic schema validation and closed-loop error recovery.",
    },
    {
      icon: Zap,
      title: "Latency & Token Budgeting",
      desc: "Architecting high-throughput LLM pipelines with proactive context budgeting, streaming structured outputs, and sub-second execution.",
    },
  ];

  const quickStats = [
    {
      label: "Current Position",
      value: "AI Engineer @ Morphelabs",
      sub: "Remote • Feb 2026 – Present",
      icon: Briefcase,
      color: "text-[#1553C7]",
      bg: "bg-[#EAF4FF]",
      border: "border-[#CFE6FF]",
    },
    {
      label: "Production Track Record",
      value: "50+ Projects Delivered",
      sub: "Autonomous AI, Multi-Agent & Automation",
      icon: Sparkles,
      color: "text-[#1EA7FF]",
      bg: "bg-[#F0F7FF]",
      border: "border-[#CFE6FF]",
    },
    {
      label: "Daily Agentic CLI Tooling",
      value: "Claude Code, OpenCode & Antigravity",
      sub: "Gemini CLI, Codex, Google AI Studio, Kiro",
      icon: TerminalSquare,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      label: "Base Location & Availability",
      value: "Clifton, Karachi, Pakistan",
      sub: "Forward Deployed • Global Remote Ready",
      icon: MapPin,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
  ];

  const techBadges = [
    "Python",
    "OpenAI SDK",
    "Pydantic",
    "Model Context Protocol (MCP)",
    "TypeScript",
    "Next.js (App Router)",
    "FastAPI",
    "Streamlit",
    "Docker",
    "n8n Workflows",
    "AsyncIO",
    "Structured Outputs",
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-white border-b border-[#DCEBFC]">
      {/* Circuit accent decoration */}
      <div className="absolute top-12 right-6 hidden md:block pointer-events-none">
        <CircuitLineDecoration orientation="right" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Signature Gradient Pill Label */}
        <div className="mb-4">
          <SectionPill title="ABOUT // PROFILE" />
        </div>

        {/* Section Heading */}
        <div className="mb-12 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C] leading-[1.15]">
            Engineering autonomous multi-agent pipelines and loop-engineered systems.
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-mono text-[#5B6B8C]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF4FF] text-[#1553C7] font-semibold border border-[#CFE6FF]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Agentic AI Engineer &amp; Forward Deployed Engineer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FBFF] text-[#5B6B8C] border border-[#DCEBFC]">
              <MapPin className="w-3.5 h-3.5 text-[#1553C7]" />
              Clifton, Karachi, Pakistan
            </span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {quickStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className={`p-4 rounded-2xl ${stat.bg} border ${stat.border} shadow-2xs flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#5B6B8C]">
                    {stat.label}
                  </span>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-sm sm:text-base text-[#0B1F5C] leading-snug">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#5B6B8C] mt-1 truncate">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#1E2A44] text-base leading-relaxed">
            <p>
              I am an <strong className="text-[#0B1F5C] font-bold">Agentic AI Engineer</strong> and{" "}
              <strong className="text-[#1553C7] font-bold">Forward Deployed Engineer</strong> who builds autonomous multi-agent pipelines, custom Model Context Protocol (MCP) tool servers, and loop-engineered systems that{" "}
              <strong className="text-[#0B1F5C] font-semibold">plan, act, verify, and self-correct</strong> using Python and the OpenAI SDK.
            </p>

            <p>
              My engineering approach prioritizes <strong className="text-[#0B1F5C] font-semibold">deterministic agent behavior</strong> over probabilistic drift. By enforcing strict Pydantic schema contracts, type boundaries, and closed-loop error recovery, I ensure agentic pipelines execute tool calls reliably and autonomously heal on API or schema failures.
            </p>

            <p>
              Currently serving as an <strong className="text-[#0B1F5C] font-semibold">AI Engineer at Morphelabs (Remote)</strong>, I architect async runtime graphs for enterprise automation, develop MCP server endpoints connecting LLM reasoning engines to live databases and external APIs, and optimize token budgeting for high-throughput agent workflows.
            </p>

            <p>
              Having delivered <strong className="text-[#1553C7] font-bold">50+ AI and automation projects</strong>, I am also a daily power user of modern agentic CLI tools—including Claude Code, OpenCode, Antigravity, and Gemini CLI—integrating them into my forward-deployed delivery workflows.
            </p>

            {/* Tech Badges Strip */}
            <div className="pt-2">
              <div className="text-xs font-mono font-bold text-[#0B1F5C] uppercase tracking-wider mb-3">
                Core Production Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-[#F0F7FF] text-[#1553C7] border border-[#CFE6FF] shadow-2xs hover:bg-[#EAF4FF] transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Highlights Card */}
          <div className="lg:col-span-5">
            <div className="tech-card rounded-2xl p-6 sm:p-7 space-y-5 bg-gradient-to-b from-white to-[#F8FBFF] border border-[#DCEBFC] shadow-sm">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E8F1FC]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0B1F5C] font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1553C7]" />
                  <span>Engineering Tenets</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#1553C7] bg-[#EAF4FF] px-2.5 py-0.5 rounded-full border border-[#CFE6FF]">
                  System Architecture
                </span>
              </div>

              <div className="space-y-3.5">
                {tenets.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-[#E2EEFC] shadow-2xs hover:border-[#1EA7FF] hover:shadow-xs transition-all group"
                    >
                      <div className="flex items-center gap-2 font-bold text-[#0B1F5C] text-sm mb-1 group-hover:text-[#1553C7] transition-colors">
                        <div className="w-6 h-6 rounded-md bg-[#EAF4FF] flex items-center justify-center text-[#1553C7] shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-[#5B6B8C] leading-relaxed pl-8">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[#E8F1FC] flex items-center justify-between text-xs font-mono text-[#5B6B8C]">
                <span>Pipeline Verification</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Pydantic Schema Enforced
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
