"use client";

import React from "react";

interface SectionPillProps {
  title: string;
  className?: string;
}

export function SectionPill({ title, className = "" }: SectionPillProps) {
  // Strip out any redundant trailing slashes so title is clean
  const cleanTitle = title.replace(/\/+.*$/, "").trim();

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0B1F5C] to-[#1553C7] shadow-md shadow-[#1553C7]/20 !text-white ${className}`}
    >
      <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] !text-white">
        {cleanTitle}
      </span>
      <span className="text-[#1EA7FF] font-black text-sm tracking-tighter select-none font-mono">
        //
      </span>
    </div>
  );
}

export function TaglineBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-1.5 h-8 sm:h-12 bg-[#1EA7FF] rounded-full shadow-[0_0_12px_#1EA7FF] flex-shrink-0" />
      <div className="font-heading uppercase font-bold text-[11px] sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.22em] text-white leading-snug">
        Building Intelligent Solutions For A Smarter Tomorrow
      </div>
    </div>
  );
}

export function CircuitLineDecoration({
  className = "",
  orientation = "right",
}: {
  className?: string;
  orientation?: "left" | "right";
}) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        width="160"
        height="50"
        viewBox="0 0 160 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={orientation === "left" ? "scale-x-[-1]" : ""}
      >
        <path
          d="M0 25 H80 L105 42 H145"
          stroke="#1EA7FF"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
        <circle cx="150" cy="42" r="4" fill="#1EA7FF" />
        <circle cx="150" cy="42" r="7" stroke="#1EA7FF" strokeWidth="1" strokeOpacity="0.4" />

        <path
          d="M40 25 L65 10 H120"
          stroke="#1EA7FF"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
        <circle cx="124" cy="10" r="3" fill="#1EA7FF" />
      </svg>
    </div>
  );
}

export function CurvedWave({
  className = "",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none ${
        inverted ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cardWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A2A6B" />
            <stop offset="45%" stopColor="#0B1F5C" />
            <stop offset="100%" stopColor="#1553C7" />
          </linearGradient>
          <linearGradient id="cyanAccentLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1EA7FF" strokeOpacity="0.8" />
            <stop offset="100%" stopColor="#1553C7" strokeOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M0,45 C340,135 680,10 1020,85 C1200,120 1360,110 1440,95 L1440,140 L0,140 Z"
          fill="url(#cardWaveGradient)"
        />
        <path
          d="M0,45 C340,135 680,10 1020,85 C1200,120 1360,110 1440,95"
          stroke="url(#cyanAccentLine)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function NavyIconBadge({
  icon: Icon,
  text,
  subtext,
  href,
}: {
  icon: React.ElementType;
  text: string;
  subtext?: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3.5 group">
      {/* Round Navy Badge */}
      <div className="w-11 h-11 rounded-full bg-[#0B1F5C] border-2 border-[#1EA7FF] flex items-center justify-center text-white shadow-lg shadow-[#0B1F5C]/30 group-hover:scale-105 group-hover:shadow-[0_0_15px_#1EA7FF] transition-all flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>

      {/* Thin Vertical Cyan/Blue Divider */}
      <div className="h-7 w-[2px] bg-[#1EA7FF] rounded-full flex-shrink-0" />

      {/* Text Info */}
      <div className="min-w-0">
        {subtext && (
          <div className="text-[10px] uppercase font-mono tracking-wider text-[#CFE6FF] font-semibold">
            {subtext}
          </div>
        )}
        <div className="text-sm font-bold tracking-wide text-white group-hover:text-[#1EA7FF] transition-colors truncate">
          {text}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
