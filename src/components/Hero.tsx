"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, CheckCircle2 } from "lucide-react";
import { TaglineBlock, CircuitLineDecoration } from "./SignatureElements";

const loopPhases = [
  { id: "plan", label: "01. Plan", desc: "Decompose prompt into DAG task graph", status: "Resolved", latency: "140ms" },
  { id: "act", label: "02. Act", desc: "Dispatch MCP tool `query_database`", status: "Executing", latency: "210ms" },
  { id: "verify", label: "03. Verify", desc: "Validate response against Pydantic schema", status: "Schema Check", latency: "35ms" },
  { id: "correct", label: "04. Self-Correct", desc: "Detect token drift & auto-heal trace", status: "Pass (0 drift)", latency: "80ms" },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % loopPhases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-28 sm:pt-36 pb-0 overflow-hidden bg-gradient-to-b from-white via-[#F0F7FF] to-[#DCEBFC]/60">
      {/* Subtle background tech accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#1EA7FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-80 h-80 bg-[#1553C7]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Circuit line corner decorations */}
      <div className="absolute top-24 right-6 hidden md:block">
        <CircuitLineDecoration orientation="right" />
      </div>
      <div className="absolute top-32 left-6 hidden xl:block">
        <CircuitLineDecoration orientation="left" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Hero Grid: Left Content, Right Hands Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Name, Spaced Titles, Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CFE6FF] shadow-xs text-xs font-mono text-[#0B1F5C] mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] flex-shrink-0 animate-pulse" />
              <span className="font-semibold">AI Engineer @ Morphelabs</span>
              <span className="text-[#CFE6FF]">|</span>
              <span className="text-[#5B6B8C]">Remote</span>
            </div>

            {/* Huge Name: SAIN BUX (Clamp 42px - 108px for perfect mobile fit) */}
            <h1 className="font-heading font-extrabold text-[42px] sm:text-[72px] lg:text-[96px] xl:text-[108px] text-[#0B1F5C] leading-[0.95] tracking-tight mb-3">
              SAIN BUX
            </h1>

            {/* Subtitle 1: AGENTIC AI ENGINEER (Uppercase, wide letter spacing) */}
            <div className="font-heading font-bold text-xs sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.28em] text-[#0B1F5C] uppercase mb-2">
              AGENTIC AI ENGINEER
            </div>

            {/* Thin Gradient Divider Line */}
            <div className="w-40 sm:w-64 h-[2px] bg-gradient-to-r from-[#1EA7FF] via-[#1553C7] to-transparent my-1.5" />

            {/* Subtitle 2: FORWARD DEPLOYED ENGINEER (Royal blue, wide letter spacing) */}
            <div className="font-heading font-bold text-xs sm:text-sm md:text-base tracking-[0.16em] sm:tracking-[0.25em] text-[#1553C7] uppercase mb-6">
              FORWARD DEPLOYED ENGINEER
            </div>

            {/* Intro tagline paragraph */}
            <p className="text-sm sm:text-base text-[#1E2A44] leading-relaxed max-w-xl mb-8">
              I architect autonomous multi-agent pipelines, standardized Model Context Protocol (MCP) tooling, and deterministic loop-engineered systems with Python &amp; OpenAI SDK.
            </p>

            {/* 2 Focused Buttons: Primary (Royal Blue) & Secondary (Outline) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#1553C7] hover:bg-[#0B1F5C] shadow-lg shadow-[#1553C7]/30 hover:shadow-[0_0_25px_#1EA7FF] transition-all transform active:scale-98"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#1EA7FF]" />
              </a>

              <a
                href="/sainbux_resume.pdf"
                download="sainbux_resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-mono font-medium text-[#1553C7] bg-white border-2 border-[#1553C7]/40 hover:border-[#1553C7] hover:bg-[#F0F7FF] transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-[#1553C7]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Robot & Human Hand Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            {/* Soft Cyan/White Spark Glow Layer behind the hands */}
            <div className="absolute inset-0 bg-radial from-[#1EA7FF]/25 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Floating hands visual */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[540px] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-[#1553C7]/15 border border-[#CFE6FF] bg-gradient-to-tr from-white via-[#EAF4FF] to-white group"
            >
              <Image
                src="/hero-hands.png"
                alt="AI Robot and Human Hand Touching with Glowing Energy Spark"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                priority
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Spark Glow Pulse Overlay */}
              <div className="absolute top-[48%] left-[49%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1EA7FF]/50 blur-md animate-ping pointer-events-none" />
              <div className="absolute top-[48%] left-[49%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_#1EA7FF] pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Deterministic Agent Loop Visual Card */}
        <div className="tech-card rounded-2xl p-5 sm:p-7 mb-14 bg-white/95 backdrop-blur-xs border border-[#DCEBFC]">
          {/* Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-[#E8F1FC] mb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#0B1F5C] font-semibold">
              <Terminal className="w-4 h-4 text-[#1553C7]" />
              <span>agent_loop_runtime.py</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#5B6B8C]">
              <span className="w-2 h-2 rounded-full bg-[#1EA7FF] animate-pulse" />
              <span className="hidden sm:inline">Autonomous Feedback Loop</span>
            </div>
          </div>

          {/* 4 Loop Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {loopPhases.map((phase, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={phase.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#EAF4FF] border-[#1553C7] shadow-xs shadow-[#1553C7]/20"
                      : "bg-[#F8FBFF] border-[#E2EEFC] hover:border-[#CFE6FF] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`font-mono text-xs font-bold ${isActive ? "text-[#1553C7]" : "text-[#0B1F5C]"}`}>
                      {phase.label}
                    </span>
                    <span className="font-mono text-[11px] text-[#5B6B8C]">
                      {phase.latency}
                    </span>
                  </div>
                  <p className="text-xs text-[#1E2A44] leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Runtime Status Bar */}
          <div className="p-3 rounded-xl bg-[#F0F7FF] border border-[#D3E7FC] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#0B1F5C] truncate">
              <span className="text-[#1553C7] font-bold">&gt;</span>
              <span className="text-[#5B6B8C]">state:</span>
              <span className="font-semibold text-[#0B1F5C] truncate">{loopPhases[activeStep].desc}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Verified contract</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dark Blue Wave with Tagline & Circuit Elements */}
      <div className="relative w-full bg-gradient-to-r from-[#0A2A6B] via-[#0B1F5C] to-[#1553C7] text-white pt-10 pb-8 px-4 sm:px-6 shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <TaglineBlock />
          <div className="hidden sm:block">
            <CircuitLineDecoration orientation="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
