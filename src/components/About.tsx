"use client";

import { motion } from "framer-motion";
import { Briefcase, TerminalSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";

export default function About() {
  const tenets = [
    {
      title: "Deterministic Execution",
      desc: "Strict Pydantic schema contracts, type boundaries, and runtime AST verification to eradicate silent hallucinations.",
    },
    {
      title: "Model Context Protocol (MCP)",
      desc: "Standardized tool servers and client integrations bridging LLM context directly with enterprise databases and internal APIs.",
    },
    {
      title: "Closed-Loop Error Recovery",
      desc: "Stateful evaluator-optimizer loops that inspect execution traces, rollback mutations, and autonomously self-heal.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-white border-b border-[#DCEBFC]">
      {/* Circuit accent decoration */}
      <div className="absolute top-12 right-6 hidden md:block">
        <CircuitLineDecoration orientation="right" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Signature Gradient Pill Label */}
        <div className="mb-4">
          <SectionPill title="ABOUT // FOCUS" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C] mb-12 max-w-3xl leading-[1.15]">
          Architecting autonomous systems with deterministic feedback loops.
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#1E2A44] text-base leading-relaxed">
            <p>
              I am an <strong className="text-[#0B1F5C] font-bold">Agentic AI Engineer</strong> and{" "}
              <strong className="text-[#1553C7] font-bold">Forward Deployed Engineer</strong> building autonomous systems that go beyond static chat interfaces. My core focus is creating agents that plan ahead, execute tools, verify results, and iteratively fix their mistakes.
            </p>

            <p>
              Leveraging <strong className="text-[#0B1F5C] font-semibold">Python</strong>, the{" "}
              <strong className="text-[#0B1F5C] font-semibold">OpenAI SDK</strong>, and{" "}
              <strong className="text-[#1553C7] font-semibold">Model Context Protocol (MCP)</strong>, I engineer robust tool-calling pipelines, structured schema validations, and loop-engineered automation agents.
            </p>

            <p>
              Currently working as an <span className="text-[#0B1F5C] font-semibold">AI Engineer at Morphelabs (Remote)</span>, developing multi-agent workflows, tool-calling pipelines, and enterprise API/database integrations. Daily active practitioner with next-gen agentic CLI environments including Claude Code, OpenCode, and Antigravity.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 bg-[#EAF4FF] text-[#0B1F5C] px-4 py-2.5 rounded-xl border border-[#CFE6FF] font-semibold shadow-sm">
                <Briefcase className="w-4 h-4 text-[#1553C7]" />
                <span>AI Engineer @ Morphelabs</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F0F7FF] text-[#0B1F5C] px-4 py-2.5 rounded-xl border border-[#CFE6FF] font-semibold shadow-sm">
                <TerminalSquare className="w-4 h-4 text-emerald-600" />
                <span>Agentic CLI Power User</span>
              </div>
            </div>
          </div>

          {/* Core Highlights Card */}
          <div className="lg:col-span-5">
            <div className="tech-card rounded-2xl p-6 sm:p-7 space-y-5 bg-gradient-to-b from-white to-[#F8FBFF]">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E8F1FC]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0B1F5C] font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1553C7]" />
                  <span>Engineering Tenets</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#1553C7] bg-[#EAF4FF] px-2 py-0.5 rounded-full">
                  System Core
                </span>
              </div>

              <div className="space-y-3.5">
                {tenets.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#E2EEFC] shadow-sm hover:border-[#1EA7FF] transition-all"
                  >
                    <div className="flex items-center gap-2 font-bold text-[#0B1F5C] text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#1553C7] flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#5B6B8C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#E8F1FC] flex items-center justify-between text-xs font-mono text-[#5B6B8C]">
                <span>Verification</span>
                <span className="text-emerald-600 font-bold">Deterministic Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
