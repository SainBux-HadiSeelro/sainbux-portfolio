"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Globe,
  Network,
  RefreshCw,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  projectTag: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "agentic-swarms",
    title: "Autonomous Multi-Agent Swarms",
    badge: "Core Architecture",
    icon: Bot,
    description:
      "Collaborative AI agent teams that plan, delegate, and execute multi-step business workflows with autonomous error-correction.",
    deliverables: [
      "Multi-agent swarms (Researcher → Analyst → Writer)",
      "ReAct reasoning & dynamic task decomposition",
      "Human-in-the-loop intervention safeguards",
    ],
    projectTag: "agentic",
  },
  {
    id: "workflow-automation",
    title: "Enterprise Workflow Automation",
    badge: "Operations",
    icon: Workflow,
    description:
      "Automated end-to-end pipelines connecting AI models directly to CRMs, databases, and internal tooling to eliminate manual tasks.",
    deliverables: [
      "Custom n8n & Python workflow orchestration",
      "Real-time webhook listeners & event triggers",
      "Automated client qualification & calendar booking",
    ],
    projectTag: "ai-integrated",
  },
  {
    id: "ai-web-apps",
    title: "Full-Stack AI Web Applications",
    badge: "Production Web",
    icon: Globe,
    description:
      "Production-grade Next.js web applications featuring responsive UI, client-side biometrics, and embedded 24/7 AI concierges.",
    deliverables: [
      "Next.js App Router & React 19 architecture",
      "Embedded 24/7 AI chat concierges with state",
      "Sub-second catalog search & instant checkout",
    ],
    projectTag: "client-demo",
  },
  {
    id: "mcp-tools",
    title: "Custom Tool & Protocol Integration",
    badge: "Integration",
    icon: Network,
    description:
      "Secure bridges connecting LLMs to live company databases, spreadsheets, and APIs using Model Context Protocol (MCP).",
    deliverables: [
      "Model Context Protocol (MCP) server development",
      "Bilingual (English & Roman Urdu) spreadsheet agents",
      "Snapshot backup guards for zero data loss",
    ],
    projectTag: "agentic",
  },
  {
    id: "loop-engineering",
    title: "Deterministic Loop Engineering",
    badge: "Self-Healing",
    icon: RefreshCw,
    description:
      "Closed-loop self-healing code repair engines with strict Maker-Checker verification and token budget protection.",
    deliverables: [
      "Maker-Checker dual-agent repair protocols",
      "Adversarial anti-cheat edge-case probes",
      "Token budget guards & spending circuit-breakers",
    ],
    projectTag: "loop-engineering",
  },
  {
    id: "data-analytics",
    title: "Data Science & Telemetry Dashboards",
    badge: "Analytics & ML",
    icon: TrendingUp,
    description:
      "Predictive machine learning dashboards, zero-database financial systems, and real-time telemetry streaming platforms.",
    deliverables: [
      "Scikit-Learn ML classifiers & outcome predictors",
      "Exact integer math ledgers (zero rounding drift)",
      "Interactive Streamlit & Plotly telemetry HUDs",
    ],
    projectTag: "data-utility",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-gradient-to-b from-[#F7FBFF] via-white to-[#F0F7FF] border-b border-[#DCEBFC]">
      {/* Decorative Circuit Lines */}
      <div className="absolute top-12 right-6 hidden md:block pointer-events-none">
        <CircuitLineDecoration orientation="right" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Pill Label */}
        <div className="mb-4">
          <SectionPill title="SERVICES & CAPABILITIES" />
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C]">
              What I Build &amp; Deliver
            </h2>
            <p className="text-[#5B6B8C] text-sm sm:text-base mt-2.5 max-w-xl">
              Turnkey AI systems, autonomous agent swarms, and full-stack web platforms engineered for business reliability.
            </p>
          </div>
          <div className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3.5 py-1.5 rounded-full border border-[#CFE6FF] self-start md:self-auto shadow-2xs">
            Scope: Architecture &bull; Automation &bull; Deployment
          </div>
        </div>

        {/* Value Chips Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="p-3 rounded-xl bg-white border border-[#DCEBFC] text-center shadow-2xs">
            <div className="font-heading font-extrabold text-sm sm:text-base text-[#0B1F5C]">Multi-Agent</div>
            <div className="text-[11px] font-mono text-[#5B6B8C]">Autonomous Swarms</div>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#DCEBFC] text-center shadow-2xs">
            <div className="font-heading font-extrabold text-sm sm:text-base text-[#1553C7]">MCP Protocols</div>
            <div className="text-[11px] font-mono text-[#5B6B8C]">Live Tool Calling</div>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#DCEBFC] text-center shadow-2xs">
            <div className="font-heading font-extrabold text-sm sm:text-base text-[#0B1F5C]">Self-Healing</div>
            <div className="text-[11px] font-mono text-[#5B6B8C]">Loop Engineering</div>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#DCEBFC] text-center shadow-2xs">
            <div className="font-heading font-extrabold text-sm sm:text-base text-[#1553C7]">Full-Stack</div>
            <div className="text-[11px] font-mono text-[#5B6B8C]">Next.js &amp; React 19</div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "80px" }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="tech-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:border-[#1EA7FF] hover:shadow-[0_12px_28px_-6px_rgba(21,83,199,0.1)] transition-all bg-white border border-[#DCEBFC]"
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EAF4FF] to-[#D8EBFF] border border-[#CFE6FF] flex items-center justify-center text-[#1553C7] shadow-2xs group-hover:scale-105 group-hover:bg-[#1553C7] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="pill-badge text-[10px] font-mono font-bold px-2.5 py-1 rounded-full text-[#1553C7] bg-[#F0F7FF] border border-[#CFE6FF]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-lg font-extrabold text-[#0B1F5C] group-hover:text-[#1553C7] transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#5B6B8C] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-[#E8F1FC]">
                    <div className="text-[10px] font-mono font-bold text-[#1553C7] uppercase tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#1E2A44]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1553C7] shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px] sm:text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#E8F1FC] flex items-center justify-between text-xs font-mono">
                  <Link
                    href={`/projects?category=${service.projectTag}`}
                    className="text-[#1553C7] font-bold hover:text-[#0B1F5C] inline-flex items-center gap-1 group/link"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-[#5B6B8C] hover:text-[#1553C7] font-semibold"
                  >
                    Inquire &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#0B1F5C] to-[#1553C7] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
          <div>
            <div className="flex items-center gap-2 text-[#1EA7FF] font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Engagements</span>
            </div>
            <h4 className="font-heading text-lg sm:text-xl font-extrabold text-white">
              Have a custom AI workflow or automation in mind?
            </h4>
            <p className="text-xs text-[#CFE6FF] mt-1 max-w-lg">
              From standalone agent prototypes to enterprise multi-agent integrations, let&apos;s build a reliable solution.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold bg-[#1EA7FF] hover:bg-white text-[#0B1F5C] shadow-md transition-all shrink-0 active:scale-98"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
