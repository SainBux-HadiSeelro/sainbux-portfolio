"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { TaglineBlock, CircuitLineDecoration } from "./SignatureElements";

export default function Hero() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
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
              I build smart AI assistants and automated systems that help businesses save time, handle repetitive tasks, and get real work done with high accuracy.
            </p>

            {/* 2 Focused Buttons: Primary (Royal Blue) & Secondary (Outline) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="/projects"
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
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-radial from-[#1EA7FF]/35 via-[#1553C7]/15 to-transparent rounded-full blur-2xl pointer-events-none"
            />

            {/* Floating hands visual with interactive hover */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 0.5, -0.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.025 }}
              className="relative w-full max-w-[540px] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-[#1553C7]/20 border border-[#CFE6FF] bg-gradient-to-tr from-white via-[#EAF4FF] to-white group transition-shadow hover:shadow-[0_0_35px_rgba(30,167,255,0.35)]"
            >
              <Image
                src="/hero-hands.png"
                alt="AI Robot and Human Hand Touching with Glowing Energy Spark"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                priority
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Spark Glow Pulse Overlay at exact coordinates: left-[50.2%] top-[59.2%] */}
              <div className="absolute top-[59.2%] left-[50.2%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {/* Expanding energy ping wave */}
                <div className="absolute -inset-3.5 w-9 h-9 rounded-full bg-[#1EA7FF]/60 blur-md animate-ping" />
                
                {/* Concentric expanding shockwave ring */}
                <motion.div
                  animate={{
                    scale: [0.8, 2.4, 0.8],
                    opacity: [0.9, 0, 0.9],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute -inset-2.5 w-7 h-7 rounded-full border border-[#38BDF8] blur-[0.5px]"
                />

                {/* Bright white/cyan core with spark flare */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 15px #1EA7FF, 0 0 30px #38BDF8",
                      "0 0 25px #1EA7FF, 0 0 50px #38BDF8, 0 0 70px #0284C7",
                      "0 0 15px #1EA7FF, 0 0 30px #38BDF8",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-3.5 h-3.5 rounded-full bg-white relative"
                />
              </div>
            </motion.div>
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
