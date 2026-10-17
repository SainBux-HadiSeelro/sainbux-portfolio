"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  Network,
  Globe,
  Workflow,
  Terminal,
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
    description: "Core intelligence layers, deterministic agent loops, and evaluation frameworks.",
    skills: [
      "OpenAI SDK",
      "Multi-Agent Systems",
      "Loop Engineering",
      "Prompt Engineering",
      "RAG Architecture",
      "Tool Calling & Schema Eval",
    ],
  },
  {
    title: "Protocols & Systems Integration",
    icon: Network,
    description: "Standardized tool protocols, connectors, and database bridges.",
    skills: [
      "Model Context Protocol (MCP)",
      "REST & GraphQL APIs",
      "Database Integration (SQL/NoSQL)",
      "Webhooks & Event Handlers",
    ],
  },
  {
    title: "Autonomous Dev Environments",
    icon: Terminal,
    description: "Daily hands-on production tooling with state-of-the-art terminal and IDE agentic runtimes.",
    skills: [
      "Claude Code",
      "OpenCode",
      "Antigravity",
      "Gemini CLI",
      "Codex",
      "Google AI Studio",
    ],
  },
  {
    title: "Languages & Runtimes",
    icon: Code2,
    description: "Production languages powering backend agents and reactive interfaces.",
    skills: ["Python", "TypeScript", "JavaScript", "AsyncIO", "Pydantic"],
  },
  {
    title: "Web & Full-Stack",
    icon: Globe,
    description: "Modern, reactive web applications and high-throughput agent control planes.",
    skills: ["Next.js (App Router)", "FastAPI", "React", "Tailwind CSS", "Streamlit"],
  },
  {
    title: "Automation & Infrastructure",
    icon: Workflow,
    description: "Multi-step workflows, automated deployments, and container runtimes.",
    skills: ["n8n Workflows", "Docker", "Git & GitHub Actions", "Hugging Face Spaces"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-gradient-to-b from-[#F7FBFF] via-white to-[#F0F7FF] border-b border-[#DCEBFC]">
      {/* Decorative Circuit Lines */}
      <div className="absolute top-12 left-6 hidden xl:block">
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
              Skills &amp; Frameworks
            </h2>
            <p className="text-[#5B6B8C] text-sm sm:text-base mt-2.5 max-w-xl">
              Strictly battle-tested tools utilized across 50+ deployed agentic workflows and production systems.
            </p>
          </div>
          <div className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3.5 py-1.5 rounded-full border border-[#CFE6FF] self-start md:self-auto">
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
                className="tech-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#1EA7FF] transition-all"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EAF4FF] to-[#D8EBFF] border border-[#CFE6FF] flex items-center justify-center text-[#1553C7] shadow-sm group-hover:scale-105 group-hover:bg-[#1553C7] group-hover:text-white transition-all">
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

                {/* Chhote Rounded Pill Badges */}
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
      </div>
    </section>
  );
}
