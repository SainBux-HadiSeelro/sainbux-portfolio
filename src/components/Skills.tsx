"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  Network,
  Globe,
  Workflow,
  Terminal,
  Languages,
  CheckCircle2,
} from "lucide-react";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Agentic AI & LLM Systems",
    icon: Bot,
    description: "Multi-agent pipelines, deterministic loop engineering, structured outputs, and schema evaluation.",
    skills: [
      "OpenAI SDK",
      "Multi-Agent Systems",
      "Loop Engineering",
      "Prompt Engineering",
      "RAG",
      "Tool Calling",
      "Structured Outputs",
      "Schema Evaluation",
    ],
  },
  {
    title: "Protocols & Integration",
    icon: Network,
    description: "Standardized MCP tool servers, enterprise APIs, webhooks, and database bridges.",
    skills: [
      "Model Context Protocol (MCP)",
      "REST & GraphQL APIs",
      "SQL/NoSQL Database Integration",
      "Webhooks & Event Handlers",
    ],
  },
  {
    title: "Agentic CLI Tools",
    icon: Terminal,
    description: "Daily hands-on production tooling with cutting-edge agentic runtimes and interactive coding CLIs.",
    skills: [
      "Claude Code",
      "OpenCode",
      "Antigravity",
      "Gemini CLI",
      "Codex",
      "Google AI Studio",
      "Kiro",
      "Qwen",
    ],
  },
  {
    title: "Languages & Runtimes",
    icon: Code2,
    description: "Core programming languages, async engines, and data modeling frameworks.",
    skills: ["Python", "TypeScript", "JavaScript", "AsyncIO", "Pydantic"],
  },
  {
    title: "Web & Full-Stack",
    icon: Globe,
    description: "Full-stack web architectures, reactive client dashboards, and high-performance backends.",
    skills: [
      "Next.js (App Router)",
      "FastAPI",
      "React",
      "Tailwind CSS",
      "Streamlit",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Automation & Infrastructure",
    icon: Workflow,
    description: "Automated event pipelines, containerized deployments, and cloud platform environments.",
    skills: [
      "n8n Workflows",
      "Docker",
      "Git & GitHub Actions",
      "Hugging Face Spaces",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-gradient-to-b from-[#F7FBFF] via-white to-[#F0F7FF] border-b border-[#DCEBFC]">
      {/* Decorative Circuit Lines */}
      <div className="absolute top-12 left-6 hidden xl:block pointer-events-none">
        <CircuitLineDecoration orientation="left" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Pill Label */}
        <div className="mb-4">
          <SectionPill title="SKILLS" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C]">
              Technical Skills &amp; Stack
            </h2>
            <p className="text-[#5B6B8C] text-sm sm:text-base mt-2.5 max-w-xl">
              Production-grade technologies utilized across 50+ deployed agentic workflows and full-stack systems.
            </p>
          </div>
          <div className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3.5 py-1.5 rounded-full border border-[#CFE6FF] self-start md:self-auto shadow-2xs">
            Focus: Deterministic Loop Engineering
          </div>
        </div>

        {/* Categories Grid (White cards, soft blue shadow, navy heading, rounded pills) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="tech-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#1EA7FF] hover:shadow-[0_12px_28px_-6px_rgba(21,83,199,0.1)] transition-all bg-white border border-[#DCEBFC]"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EAF4FF] to-[#D8EBFF] border border-[#CFE6FF] flex items-center justify-center text-[#1553C7] shadow-2xs group-hover:scale-105 group-hover:bg-[#1553C7] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[#0B1F5C] group-hover:text-[#1553C7] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5B6B8C] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Rounded Pill Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E8F1FC]">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="pill-badge text-[11px] font-mono px-3 py-1 rounded-full text-[#0B1F5C] bg-[#F0F7FF] border border-[#DCEBFC] hover:border-[#1EA7FF] hover:bg-[#E1F0FF] transition-colors shadow-2xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages Strip from Resume */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.25 }}
          className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#CFE6FF] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EAF4FF] border border-[#CFE6FF] flex items-center justify-center text-[#1553C7] shrink-0">
              <Languages className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#0B1F5C] uppercase tracking-wider">
                Spoken Languages
              </div>
              <div className="text-xs text-[#5B6B8C] mt-0.5">
                Effective communication for international engineering collaboration
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FF] border border-[#CFE6FF] text-[#0B1F5C]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-bold">English:</span>
              <span className="text-[#5B6B8C]">Intermediate</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FF] border border-[#CFE6FF] text-[#0B1F5C]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-bold">Urdu:</span>
              <span className="text-[#5B6B8C]">Native Speaker</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
