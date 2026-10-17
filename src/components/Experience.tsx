"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";

export default function Experience() {
  const experiences = [
    {
      role: "AI Engineer",
      company: "Morphelabs",
      type: "Remote",
      period: "Feb 2026 – Present",
      isCurrent: true,
      description:
        "Architecting production-grade agentic AI architectures, autonomous multi-agent orchestration pipelines, and deterministic tool-calling workflows.",
      highlights: [
        "Architecting multi-agent workflows using Python, OpenAI SDK, and asynchronous runtime graphs for enterprise task automation.",
        "Developing custom Model Context Protocol (MCP) server endpoints connecting LLM reasoning engines to databases and external APIs.",
        "Engineering loop-engineered tool-calling pipelines with strict Pydantic schema validation and recursive self-healing on API exceptions.",
        "Conducting latency optimizations and token budgeting across high-throughput production LLM agent pipelines.",
      ],
      skills: [
        "OpenAI SDK",
        "Python",
        "Multi-Agent Systems",
        "MCP Protocol",
        "Tool Calling",
        "FastAPI",
        "PostgreSQL",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-gradient-to-b from-white via-[#F7FAFD] to-white border-b border-[#DCEBFC]">
      {/* Decorative Circuit Lines */}
      <div className="absolute top-12 left-6 hidden xl:block">
        <CircuitLineDecoration orientation="left" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Signature Gradient Pill Label */}
        <div className="mb-4">
          <SectionPill title="TRACK RECORD //" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C]">
              Work Experience
            </h2>
            <p className="text-[#5B6B8C] text-sm sm:text-base mt-2.5 max-w-xl">
              Forward-deployed engineering across autonomous agent pipelines and production infrastructure.
            </p>
          </div>
        </div>

        {/* Vertical Timeline with Cyan Line and Navy Dots */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1EA7FF]/60 space-y-12 ml-2 sm:ml-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              {/* Timeline Navy Dot with Cyan Glow Border */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-2 w-4 h-4 rounded-full bg-[#0B1F5C] border-2 border-[#1EA7FF] shadow-[0_0_10px_#1EA7FF]" />

              <div className="tech-card rounded-2xl p-6 sm:p-8 bg-white border border-[#DCEBFC] shadow-sm hover:border-[#1EA7FF] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#E8F1FC]">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B1F5C]">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-[#5B6B8C] mt-1.5">
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

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1E2A44]">
                      <CheckCircle2 className="w-4 h-4 text-[#1553C7] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E8F1FC]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="pill-badge text-[11px] font-mono px-3 py-1 rounded-full text-[#0B1F5C] bg-[#F0F7FF] border border-[#DCEBFC] font-medium"
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
