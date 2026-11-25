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
  MessageSquare,
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
    title: "AI Worker Teams",
    badge: "Multi-Agent",
    icon: Bot,
    description:
      "Multiple AI bots working together like a human team (Researcher, Writer, Reviewer) to finish complex tasks faster.",
    deliverables: [
      "Collaborative multi-bot teams",
      "Automatic task breakdown & planning",
      "Human review & approval controls",
    ],
    projectTag: "agentic",
  },
  {
    id: "ai-chatbots",
    title: "Smart AI Chatbots",
    badge: "24/7 Support",
    icon: MessageSquare,
    description:
      "Intelligent customer support and sales bots trained on your business data to answer queries in English & Roman Urdu.",
    deliverables: [
      "WhatsApp, Website & Telegram bot setup",
      "Custom trained on your FAQs, PDFs & products",
      "24/7 automated lead capture & support booking",
    ],
    projectTag: "client-demo",
  },
  {
    id: "workflow-automation",
    title: "Business Automation",
    badge: "Auto-Pilot",
    icon: Workflow,
    description:
      "Connect your CRMs, emails, and databases with AI to put repetitive daily business operations on autopilot.",
    deliverables: [
      "Auto lead qualification & calendar booking",
      "Instant WhatsApp & email responses",
      "Automatic data syncing across apps",
    ],
    projectTag: "ai-integrated",
  },
  {
    id: "ai-web-apps",
    title: "Custom AI Web Apps",
    badge: "Web & Mobile",
    icon: Globe,
    description:
      "Fast, modern websites and client portals with built-in 24/7 AI concierges and instant smart search.",
    deliverables: [
      "Clean, mobile-responsive web apps",
      "24/7 smart customer chat assistants",
      "Fast product search & secure accounts",
    ],
    projectTag: "client-demo",
  },
  {
    id: "mcp-tools",
    title: "Data & Tool Connections",
    badge: "Integration",
    icon: Network,
    description:
      "Connect AI safely to your live Google Sheets, Excel files, and internal databases so you can chat with your data.",
    deliverables: [
      "Chat with spreadsheets in English & Urdu",
      "Direct & secure database connections",
      "Automatic backups for zero data loss",
    ],
    projectTag: "agentic",
  },
  {
    id: "loop-engineering",
    title: "Self-Checking AI Systems",
    badge: "Reliability",
    icon: RefreshCw,
    description:
      "AI that automatically double-checks its work, catches mistakes, and fixes errors before anyone sees them.",
    deliverables: [
      "Maker-Checker automatic double-check",
      "Instant error detection & auto-repair",
      "Strict cost & spending limit controls",
    ],
    projectTag: "loop-engineering",
  },
  {
    id: "data-analytics",
    title: "Smart Dashboards & Insights",
    badge: "Analytics",
    icon: TrendingUp,
    description:
      "Clear visual dashboards that track business health, predict sales trends, and turn messy data into actionable steps.",
    deliverables: [
      "Live sales & business metrics HUDs",
      "AI customer & outcome forecasting",
      "Simple visual charts & exportable reports",
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
              Smart AI assistants, business automations, and modern web apps built to save time and grow revenue.
            </p>
          </div>
          <div className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3.5 py-1.5 rounded-full border border-[#CFE6FF] self-start md:self-auto shadow-2xs">
            Scope: AI Chatbots &bull; Automations &bull; Web Apps &bull; Integrations
          </div>
        </div>

        {/* Value Chips Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="p-3 rounded-xl bg-white border border-[#DCEBFC] text-center shadow-2xs">
            <div className="font-heading font-extrabold text-sm sm:text-base text-[#0B1F5C]">AI Chatbots</div>
            <div className="text-[11px] font-mono text-[#5B6B8C]">24/7 Smart Support</div>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#DCEBFC] text-center shadow-2xs">
            <div className="font-heading font-extrabold text-sm sm:text-base text-[#1553C7]">AI Teams</div>
            <div className="text-[11px] font-mono text-[#5B6B8C]">Work Together</div>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#DCEBFC] text-center shadow-2xs">
            <div className="font-heading font-extrabold text-sm sm:text-base text-[#0B1F5C]">Auto-Pilots</div>
            <div className="text-[11px] font-mono text-[#5B6B8C]">Zero Manual Work</div>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#DCEBFC] text-center shadow-2xs">
            <div className="font-heading font-extrabold text-sm sm:text-base text-[#1553C7]">Web Apps</div>
            <div className="text-[11px] font-mono text-[#5B6B8C]">Fast &amp; Modern</div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            const isLast = idx === servicesList.length - 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "80px" }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className={`tech-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:border-[#1EA7FF] hover:shadow-[0_12px_28px_-6px_rgba(21,83,199,0.1)] transition-all bg-white border border-[#DCEBFC] ${
                  isLast ? "md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-1 lg:col-start-2" : ""
                }`}
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
              <span>Tailored Solutions</span>
            </div>
            <h4 className="font-heading text-lg sm:text-xl font-extrabold text-white">
              Have a project or automation idea?
            </h4>
            <p className="text-xs text-[#CFE6FF] mt-1 max-w-lg">
              From simple AI assistants to complete business automations, let&apos;s build something that works for you.
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
