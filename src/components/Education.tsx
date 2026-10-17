"use client";

import { motion } from "framer-motion";
import { Calendar, BookOpen, Award } from "lucide-react";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";

export default function Education() {
  const formalEducation = [
    {
      degree: "BS Software Engineering",
      institution: "Virtual University of Pakistan",
      period: "2022 – 2026",
      status: "Final Year",
      details:
        "Focus on distributed software architecture, systems programming, data structures, algorithms, and applied machine learning.",
    },
  ];

  const certifications = [
    {
      title: "Advance Python",
      organization: "Aptech Shahrah-e-Faisal",
      description:
        "Comprehensive training in advanced Python paradigms, object-oriented design, modular programming, data processing, and backend automation.",
      badge: "Python Specialist",
    },
    {
      title: "SMIT Agentic AI Specialized Course",
      organization: "Saylani Mass IT Training (SMIT)",
      description:
        "Intensive hands-on track covering autonomous agents, multi-agent coordination, loop engineering, and tool execution pipelines.",
      badge: "Agentic AI",
    },
    {
      title: "Governor Sindh IT Initiative (GIAIC)",
      organization: "GenAI, Web3 & Metaverse Program",
      description:
        "Applied Generative AI development, modern Next.js ecosystem, TypeScript, and LLM application engineering.",
      badge: "GenAI & Cloud",
    },
    {
      title: "Presidential Initiative for AI & Computing (PIAIC)",
      organization: "PIAIC",
      description:
        "Foundational and advanced artificial intelligence, cloud-native computing, Python systems, and microservices.",
      badge: "AI & Computing",
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative bg-white border-b border-[#DCEBFC]">
      {/* Decorative Circuit Lines */}
      <div className="absolute top-12 right-6 hidden md:block">
        <CircuitLineDecoration orientation="right" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Signature Gradient Pill Label */}
        <div className="mb-4">
          <SectionPill title="CREDENTIALS //" />
        </div>

        <div className="mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C]">
            Education &amp; Specializations
          </h2>
          <p className="text-[#5B6B8C] text-sm sm:text-base mt-2.5 max-w-xl">
            Formal software engineering degree paired with premier specialized national AI tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Formal Degree */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#0B1F5C] font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#1553C7]" />
              <span>University Degree</span>
            </h3>

            {formalEducation.map((edu, idx) => (
              <div
                key={idx}
                className="tech-card rounded-2xl p-6 sm:p-7 relative bg-gradient-to-br from-white to-[#F8FBFF]"
              >
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="pill-badge text-[11px] font-bold px-3 py-1 rounded-full text-[#1553C7] border-[#CFE6FF] bg-[#EAF4FF]">
                    {edu.status}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#5B6B8C]">
                    <Calendar className="w-3.5 h-3.5 text-[#1553C7]" />
                    {edu.period}
                  </span>
                </div>

                <h4 className="font-heading text-xl font-extrabold text-[#0B1F5C] mb-1">
                  {edu.degree}
                </h4>
                <div className="text-xs font-mono font-bold text-[#1553C7] mb-4">
                  {edu.institution}
                </div>

                <p className="text-xs text-[#5B6B8C] leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Specialized Certifications & Programs */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#0B1F5C] font-bold mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#1553C7]" />
              <span>Specialized Fellowships</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="tech-card rounded-2xl p-5 sm:p-6 bg-white hover:border-[#1EA7FF] transition-all"
                >
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <h4 className="font-heading text-sm sm:text-base font-extrabold text-[#0B1F5C]">
                      {cert.title}
                    </h4>
                    <span className="pill-badge text-[10px] font-bold px-2.5 py-1 rounded-full text-[#0B1F5C] bg-[#F0F7FF] border-[#DCEBFC]">
                      {cert.badge}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-[#1553C7] mb-2.5">
                    {cert.organization}
                  </div>

                  <p className="text-xs text-[#5B6B8C] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
