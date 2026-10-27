"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Terminal,
  Activity,
  Heart,
  CheckCircle2,
  Eye,
  X,
  Loader2,
  Receipt,
  TrendingUp,
  Rocket,
  Satellite,
  Building2,
  Dumbbell,
  Sparkles,
  Flower2,
  Hotel,
  ShoppingBag,
  BookOpen,
  Brain,
  Swords,
  Gamepad2,
  FileSpreadsheet,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { projectsData, Project, ProjectCategory } from "@/data/projects";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";
import { socialLinks } from "@/data/socials";

const projectIcons: Record<string, React.ElementType> = {
  "loop-engineering-series": Layers,
  "personal-finance-dashboard": TrendingUp,
  "wedding-wishes-app": Heart,
  "shm-real-estate-agency": Building2,
  "forge-fitness-gym": Dumbbell,
  "beautylira-aesthetic-clinic": Sparkles,
  "elite-studio-clinic": Sparkles,
  "lumina-dental-clinic": Sparkles,
  "beauty-aura-spa": Flower2,
  "lumiere-hotel-reservation": Hotel,
  "lumina-beauty-parlour": Sparkles,
  "aura-atelier-beauty-parlour": Sparkles,
  "luvia-ecommerce": ShoppingBag,
  "welltrack-ai": Activity,
  "ironpulse-fitness-hub": Dumbbell,
  "elite-fitness-gym": Dumbbell,
  "bill-generator": Receipt,
  "spacex-launch-predictor": Rocket,
  "orbit-iq": Satellite,
  "agentic-story-studio": BookOpen,
  "nexus-mind-platform": Brain,
  "apex-game": Swords,
  "agentic-hangman": Gamepad2,
  "excel-ai-agent": FileSpreadsheet,
};

const getEmbedUrl = (url: string) => {
  if (!url) return "";
  if (url.includes("streamlit.app")) {
    const separator = url.includes("?") ? "&" : "?";
    return url.includes("embed=true") ? url : `${url}${separator}embed=true`;
  }
  return url;
};

type FilterCategory = "all" | ProjectCategory;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [expandedCollection, setExpandedCollection] = useState<string | null>(null);
  const [showClientDemos, setShowClientDemos] = useState<boolean>(false);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);
  const [iframeError, setIframeError] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewProject(null);
      }
    };
    if (previewProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      const timer = setTimeout(() => {
        setIframeLoading(false);
      }, 3500);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewProject]);

  const openPreview = (project: Project) => {
    setIframeLoading(true);
    setIframeError(false);
    setPreviewProject(project);
  };

  const toggleCollection = (id: string) => {
    setExpandedCollection(expandedCollection === id ? null : id);
  };

  // Group projects dynamically by category field
  const agenticProjects = projectsData.filter((p) => p.category === "agentic");
  const aiIntegratedProjects = projectsData.filter((p) => p.category === "ai-integrated");
  const clientDemoProjects = projectsData.filter((p) => p.category === "client-demo");
  const dataUtilityProjects = projectsData.filter((p) => p.category === "data-utility");

  const filterTabs: { id: FilterCategory; label: string; count: number }[] = [
    { id: "all", label: "All", count: projectsData.length },
    { id: "agentic", label: "Agentic", count: agenticProjects.length },
    { id: "ai-integrated", label: "AI-Integrated", count: aiIntegratedProjects.length },
    { id: "client-demo", label: "Client Demos", count: clientDemoProjects.length },
    { id: "data-utility", label: "Data & Utilities", count: dataUtilityProjects.length },
  ];

  const renderProjectCard = (
    project: Project,
    variant: "large" | "medium" | "compact",
    index: number
  ) => {
    const isExpanded = expandedCollection === project.id;
    const Icon = projectIcons[project.id] || Terminal;
    const isLoopSeries = project.id === "loop-engineering-series";
    const visibleTech = project.tech.slice(0, 6);
    const visibleHighlights = project.highlights ? project.highlights.slice(0, 3) : [];

    const previewHeightClass =
      variant === "large"
        ? "h-44 sm:h-48"
        : variant === "medium"
        ? "h-40 sm:h-44"
        : "h-36 sm:h-40";

    const titleClass =
      variant === "large"
        ? "text-xl sm:text-2xl"
        : variant === "medium"
        ? "text-lg sm:text-xl"
        : "text-base sm:text-lg";

    return (
      <motion.article
        key={project.id}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "80px" }}
        transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.25) }}
        className="tech-card rounded-2xl flex flex-col justify-between overflow-hidden group hover:-translate-y-1 hover:border-[#1EA7FF] hover:shadow-[0_16px_36px_-6px_rgba(21,83,199,0.12),0_0_25px_rgba(30,167,255,0.2)] transition-all bg-white border border-[#DCEBFC]"
      >
        <div>
          {/* Screenshot / Visual preview header */}
          {project.image ? (
            <div
              className={`${previewHeightClass} w-full border-b border-[#DCEBFC] relative overflow-hidden group/img bg-[#0B1F5C]`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F5C]/85 via-[#0B1F5C]/20 to-black/25 pointer-events-none" />

              <div className="flex items-center justify-between z-10 font-mono text-xs relative p-4 sm:p-5">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-lg bg-white/95 shadow-2xs flex items-center justify-center text-[#1553C7] backdrop-blur-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-white font-bold drop-shadow-sm truncate max-w-[140px] sm:max-w-none">
                    {project.id}
                  </span>
                </div>
                {project.badge && (
                  <span className="pill-badge text-[10px] font-bold px-2.5 py-1 rounded-full text-[#1553C7] border-[#CFE6FF] bg-white/95 shadow-2xs backdrop-blur-xs flex-shrink-0">
                    {project.badge}
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 left-4 right-4 z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-[10px] sm:text-[11px] font-mono text-[#0B1F5C] font-semibold border border-white/60 shadow-xs max-w-full truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="truncate">{project.imageLabel || "Live Interactive Application"}</span>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`${previewHeightClass} w-full bg-gradient-to-br from-[#F0F7FF] via-[#E4F1FF] to-[#D8EBFF] border-b border-[#DCEBFC] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none" />

              <div className="flex items-center justify-between z-10 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#0B1F5C]">
                  <div className="w-7 h-7 rounded-lg bg-white shadow-2xs flex items-center justify-center text-[#1553C7]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#0B1F5C] font-bold">{project.id}</span>
                </div>
                {project.badge && (
                  <span className="pill-badge text-[10px] font-bold px-2.5 py-1 rounded-full text-[#1553C7] border-[#CFE6FF] bg-white shadow-2xs">
                    {project.badge}
                  </span>
                )}
              </div>

              <div className="z-10 p-3 rounded-xl bg-white/90 backdrop-blur-xs border border-[#CFE6FF] font-mono text-[11px] text-[#1E2A44] shadow-xs space-y-1">
                <div className="flex items-center justify-between text-[10px] text-[#5B6B8C]">
                  <span className="font-semibold text-[#0B1F5C]">eval_loop.py</span>
                  <span className="text-emerald-600 font-bold">status: verified</span>
                </div>
                <div className="truncate text-[#5B6B8C]">
                  <span className="text-[#1553C7] font-bold">&gt;</span> {project.problem.slice(0, 68)}...
                </div>
              </div>
            </div>
          )}

          {/* Card Body */}
          <div className="p-5 sm:p-6">
            <h3
              className={`font-heading ${titleClass} font-extrabold text-[#0B1F5C] group-hover:text-[#1553C7] transition-colors mb-1.5 leading-snug`}
            >
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="text-xs font-mono font-medium text-[#1553C7] mb-3 line-clamp-1">
                {project.subtitle}
              </p>
            )}

            {/* Shortened 1-sentence summary */}
            <p className="text-[#374967] text-xs sm:text-sm leading-relaxed mb-4">
              {project.summary || project.description}
            </p>

            {/* Key highlights (max 3 bullets) */}
            {visibleHighlights.length > 0 && (
              <div className="mb-4 space-y-1.5 p-3 rounded-xl bg-[#F8FBFF] border border-[#E2EEFC]">
                <div className="text-[10px] font-mono font-bold text-[#1553C7] uppercase tracking-wider mb-1">
                  Key Technical Highlights
                </div>
                {visibleHighlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-[#374967]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1553C7] shrink-0 mt-0.5" />
                    <span className="leading-tight">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Tags (max 5-6 tags shown) */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {visibleTech.map((t) => (
                <span
                  key={t}
                  className="pill-badge text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[#0B1F5C] bg-[#F7FAFD] border border-[#DCEBFC]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Interactive series explorer for Loop Engineering Series */}
            {project.isCollection && project.subProjects && (
              <div className="mt-3 pt-3 border-t border-[#E8F1FC]">
                <button
                  type="button"
                  onClick={() => toggleCollection(project.id)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#F0F7FF] hover:bg-[#E4F1FF] border border-[#CFE6FF] text-xs font-mono text-[#0B1F5C] font-semibold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#1553C7]" />
                    <span>
                      {isExpanded
                        ? `Collapse ${project.subProjects.length} Modules`
                        : `Explore all ${project.subProjects.length} sub-projects`}
                    </span>
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#1553C7]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#1553C7]" />
                  )}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 space-y-2.5 max-h-64 overflow-y-auto pr-1"
                    >
                      {project.subProjects.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3.5 rounded-xl bg-[#F7FAFD] border border-[#E2EEFC] text-xs"
                        >
                          <div className="font-bold text-[#0B1F5C] mb-1">{sub.title}</div>
                          <p className="text-[#5B6B8C] text-[11px] leading-relaxed mb-2">
                            {sub.description}
                          </p>
                          {sub.tech && (
                            <div className="flex flex-wrap gap-1">
                              {sub.tech.map((st) => (
                                <span
                                  key={st}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-[#0B1F5C] border border-[#CFE6FF]"
                                >
                                  {st}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Action Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-[#F8FBFF] border-t border-[#DCEBFC] flex flex-wrap items-center justify-between gap-2.5 font-mono text-xs">
          {/* GitHub Source Code Button */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#CFE6FF] bg-white text-[#0B1F5C] hover:border-[#1553C7] hover:text-[#1553C7] font-semibold transition-all shadow-2xs"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#1553C7]" />
            <span>Source Code</span>
          </a>

          <div className="flex items-center gap-2">
            {/* Live Preview Modal Button (Omitted for loop-engineering-series and GitHub links) */}
            {!isLoopSeries &&
              project.liveUrl.startsWith("https://") &&
              !project.liveUrl.includes("github.com") && (
                <button
                  type="button"
                  onClick={() => openPreview(project)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#CFE6FF] bg-white text-[#1553C7] hover:bg-[#EAF4FF] hover:border-[#1553C7] font-semibold transition-all shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5 text-[#1553C7]" />
                  <span>Preview</span>
                </button>
              )}

            {/* Live Demo Button (Explicitly omitted for Loop Engineering Series as requested) */}
            {!isLoopSeries && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold bg-[#1553C7] hover:bg-[#0B1F5C] text-white shadow-md shadow-[#1553C7]/20 hover:shadow-[0_0_15px_#1EA7FF] transition-all transform active:scale-98"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1EA7FF]" />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-white border-b border-[#DCEBFC]">
      {/* Decorative Circuit Lines */}
      <div className="absolute top-12 right-6 hidden md:block">
        <CircuitLineDecoration orientation="right" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Pill Label */}
        <div className="mb-4">
          <SectionPill title="PROJECTS" />
        </div>

        {/* Section Heading & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C]">
              Engineered Agent Architectures
            </h2>
            <p className="text-[#5B6B8C] text-sm sm:text-base mt-2.5 max-w-2xl">
              Agentic systems, loop-engineering experiments, and AI-powered web apps.
            </p>
          </div>
          {/* TODO: verify 100% Tested Tool Calling claim */}
          <div className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3.5 py-1.5 rounded-full border border-[#CFE6FF] self-start md:self-auto">
            100% Tested Tool Calling
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#E8F1FC]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveFilter(tab.id);
                  if (tab.id === "client-demo") {
                    setShowClientDemos(true);
                  }
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                  isActive
                    ? "bg-[#1553C7] text-white shadow-sm shadow-[#1553C7]/25 border border-[#1553C7]"
                    : "bg-[#F0F7FF] text-[#0B1F5C] hover:bg-[#E4F1FF] border border-[#CFE6FF]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive ? "bg-white/20 text-white" : "bg-white text-[#1553C7]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* GROUP A: Featured Agentic Systems (Large Cards)                           */}
        {/* ========================================================================= */}
        {(activeFilter === "all" || activeFilter === "agentic") && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#EAF4FF]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1553C7] shadow-[0_0_8px_#1553C7]" />
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1F5C] tracking-tight">
                  Featured Agentic Systems
                </h3>
              </div>
              <span className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#CFE6FF]">
                Group A // {agenticProjects.length} Architectures
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {agenticProjects.map((project, idx) => renderProjectCard(project, "large", idx))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* GROUP B: AI-Integrated Apps (Medium Cards)                                */}
        {/* ========================================================================= */}
        {(activeFilter === "all" || activeFilter === "ai-integrated") && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#EAF4FF]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1EA7FF] shadow-[0_0_8px_#1EA7FF]" />
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1F5C] tracking-tight">
                  AI-Integrated Applications
                </h3>
              </div>
              <span className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#CFE6FF]">
                Group B // {aiIntegratedProjects.length} Apps
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiIntegratedProjects.map((project, idx) =>
                renderProjectCard(project, "medium", idx)
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* GROUP C: Client Demos & Web Platforms (Compact Cards, Collapsible)         */}
        {/* ========================================================================= */}
        {(activeFilter === "all" || activeFilter === "client-demo") && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-2 border-b border-[#EAF4FF]">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F5C]" />
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1F5C] tracking-tight">
                    Client Demos &amp; Web Platforms
                  </h3>
                </div>
                {/* Intro Line */}
                <p className="text-[#5B6B8C] text-xs sm:text-sm mt-1">
                  Frontend-focused builds with an embedded AI concierge chatbot.
                </p>
              </div>

              {/* Show / Hide toggle button if on "all" tab */}
              {activeFilter === "all" && (
                <button
                  type="button"
                  onClick={() => setShowClientDemos(!showClientDemos)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#EAF4FF] hover:bg-[#D8EBFF] text-[#1553C7] border border-[#CFE6FF] transition-all self-start sm:self-auto shadow-2xs cursor-pointer"
                >
                  <span>{showClientDemos ? "Hide client demos" : "Show all 9 demos"}</span>
                  {showClientDemos ? (
                    <ChevronUp className="w-3.5 h-3.5 text-[#1553C7]" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-[#1553C7]" />
                  )}
                </button>
              )}
            </div>

            {/* Demos Grid: rendered when expanded or when activeFilter === "client-demo" */}
            <AnimatePresence initial={false}>
              {(showClientDemos || activeFilter === "client-demo") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-1">
                    {clientDemoProjects.map((project, idx) =>
                      renderProjectCard(project, "compact", idx)
                    )}
                  </div>
                  {activeFilter === "all" && (
                    <div className="mt-6 text-center">
                      <button
                        type="button"
                        onClick={() => setShowClientDemos(false)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold bg-white hover:bg-[#F0F7FF] text-[#5B6B8C] hover:text-[#0B1F5C] border border-[#CFE6FF] transition-all shadow-2xs cursor-pointer"
                      >
                        <span>Collapse client demos</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* ========================================================================= */}
        {/* GROUP D: Data, ML & Utilities (Compact Cards)                              */}
        {/* ========================================================================= */}
        {(activeFilter === "all" || activeFilter === "data-utility") && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#EAF4FF]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1553C7] shadow-[0_0_8px_rgba(21,83,199,0.5)]" />
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1F5C] tracking-tight">
                  Data, ML &amp; Utilities
                </h3>
              </div>
              <span className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#CFE6FF]">
                Group D // {dataUtilityProjects.length} Systems
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dataUtilityProjects.map((project, idx) =>
                renderProjectCard(project, "compact", idx)
              )}
            </div>
          </div>
        )}

        {/* GitHub Banner */}
        {/* TODO: verify 50+ repositories claim */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-[#CFE6FF] bg-gradient-to-r from-[#F0F7FF] to-[#E4F1FF] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="font-heading text-lg font-extrabold text-[#0B1F5C]">
              50+ Autonomous AI &amp; Automation Repositories
            </h4>
            <p className="text-xs text-[#5B6B8C] mt-1 max-w-xl">
              Inspect open-source multi-agent workflows, MCP servers, prompt evaluators, and production codebases on GitHub.
            </p>
          </div>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-mono font-bold bg-white hover:bg-[#0B1F5C] text-[#0B1F5C] hover:text-white border border-[#CFE6FF] shadow-sm transition-all flex-shrink-0 group"
          >
            <GithubIcon className="w-4 h-4 text-[#1553C7] group-hover:text-[#1EA7FF]" />
            <span>github.com/SainBux-HadiSeelro</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#5B6B8C] group-hover:text-white" />
          </a>
        </div>
      </div>

      {/* Live Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B1F5C]/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] max-h-[820px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#CFE6FF]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#DCEBFC] bg-[#F8FBFF]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-heading font-extrabold text-sm sm:text-base text-[#0B1F5C]">
                    {previewProject.title}
                  </span>
                  <span className="hidden sm:inline-block font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#EAF4FF] text-[#1553C7] border border-[#CFE6FF]">
                    Live Interactive Preview
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={previewProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-[#1553C7] hover:bg-[#0B1F5C] text-white transition-colors"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setPreviewProject(null)}
                    className="p-1.5 rounded-full text-[#5B6B8C] hover:text-[#0B1F5C] hover:bg-slate-100 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Iframe Area */}
              <div className="relative flex-1 w-full bg-slate-50 overflow-hidden">
                {iframeLoading && !iframeError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 z-10 gap-3">
                    <Loader2 className="w-8 h-8 text-[#1553C7] animate-spin" />
                    <p className="text-xs font-mono text-[#5B6B8C]">
                      Loading live application preview...
                    </p>
                  </div>
                )}

                {iframeError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white z-10 gap-4">
                    <p className="text-sm text-[#0B1F5C] font-semibold">
                      Live preview could not be displayed inside an iframe.
                    </p>
                    <a
                      href={previewProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold bg-[#1553C7] text-white hover:bg-[#0B1F5C] transition-all text-xs font-mono"
                    >
                      <span>Open Live Demo in New Tab</span>
                      <ArrowUpRight className="w-4 h-4 text-[#1EA7FF]" />
                    </a>
                  </div>
                ) : (
                  <iframe
                    src={getEmbedUrl(previewProject.liveUrl)}
                    title={previewProject.title}
                    className="w-full h-full border-0 bg-white"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals"
                    onLoad={() => setIframeLoading(false)}
                    onError={() => {
                      setIframeLoading(false);
                      setIframeError(true);
                    }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
