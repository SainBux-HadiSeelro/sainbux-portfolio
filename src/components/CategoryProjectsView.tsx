"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Terminal,
  Activity,
  LayoutDashboard,
  Heart,
  CheckCircle2,
  Eye,
  X,
  Loader2,
  Receipt,
  TrendingUp,
  ArrowLeft,
  Globe,
  RefreshCw,
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
  Timer,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/projects";
import { SectionPill, CircuitLineDecoration } from "./SignatureElements";

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
  "chronoflow-ai": Timer,
};

const getEmbedUrl = (url: string) => {
  if (!url) return "";
  if (url.includes("streamlit.app")) {
    const separator = url.includes("?") ? "&" : "?";
    return url.includes("embed=true") ? url : `${url}${separator}embed=true`;
  }
  return url;
};

interface CategoryProjectsViewProps {
  categoryKey: string;
  name: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  projects: Project[];
}

export default function CategoryProjectsView({
  categoryKey,
  name,
  title,
  subtitle,
  badge,
  description,
  projects,
}: CategoryProjectsViewProps) {
  const [expandedCollection, setExpandedCollection] = useState<string | null>(null);
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

  const categoryTabs = [
    { key: "all", name: "All Projects", href: "/projects", icon: Layers },
    { key: "websites", name: "Websites", href: "/projects/websites", icon: Globe },
    { key: "loop-engineering", name: "Loop Engineering", href: "/projects/loop-engineering", icon: RefreshCw },
    { key: "streamlit", name: "Streamlit", href: "/projects/streamlit", icon: LayoutDashboard },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-white min-h-screen">
      {/* Decorative Circuit Lines */}
      <div className="absolute top-16 right-6 hidden md:block">
        <CircuitLineDecoration orientation="right" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#1553C7] hover:text-[#0B1F5C] bg-[#EAF4FF] hover:bg-[#D8EBFF] px-3.5 py-1.5 rounded-full border border-[#CFE6FF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-[#5B6B8C]">
            <Link href="/" className="hover:text-[#1553C7] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#1553C7] transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#0B1F5C] font-bold">{name}</span>
          </div>
        </div>

        {/* Signature Pill */}
        <div className="mb-4">
          <SectionPill title={badge.toUpperCase()} />
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F5C]">
              {title}
            </h1>
            <p className="text-[#1553C7] font-mono text-xs sm:text-sm font-semibold mt-2">
              {subtitle}
            </p>
            <p className="text-[#5B6B8C] text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
          <div className="font-mono text-xs font-semibold text-[#1553C7] bg-[#EAF4FF] px-3.5 py-1.5 rounded-full border border-[#CFE6FF] self-start md:self-auto shrink-0">
            {projects.length} Dedicated Projects
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-12 border-b border-[#DCEBFC]">
          {categoryTabs.map((tab) => {
            const isActive = tab.key === categoryKey;
            const TabIcon = tab.icon;
            return (
              <Link
                key={tab.key}
                href={tab.href}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#1553C7] text-white shadow-md shadow-[#1553C7]/20"
                    : "bg-[#F8FBFF] text-[#5B6B8C] hover:text-[#0B1F5C] hover:bg-[#EAF4FF] border border-[#DCEBFC]"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project: Project, index: number) => {
            const isExpanded = expandedCollection === project.id;
            const Icon = projectIcons[project.id] || Terminal;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="tech-card rounded-2xl flex flex-col justify-between overflow-hidden group hover:-translate-y-1 hover:border-[#1EA7FF] hover:shadow-[0_16px_36px_-6px_rgba(21,83,199,0.12),0_0_25px_rgba(30,167,255,0.2)] transition-all bg-white"
              >
                <div>
                  {/* Card Visual / Screenshot Preview Area */}
                  {project.image ? (
                    <div className="h-44 sm:h-48 w-full border-b border-[#DCEBFC] relative overflow-hidden group/img bg-[#0B1F5C]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F5C]/85 via-[#0B1F5C]/20 to-black/25 pointer-events-none" />

                      <div className="flex items-center justify-between z-10 font-mono text-xs relative p-5">
                        <div className="flex items-center gap-2 text-white">
                          <div className="w-7 h-7 rounded-lg bg-white/95 shadow-2xs flex items-center justify-center text-[#1553C7] backdrop-blur-xs">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-white font-bold drop-shadow-sm">{project.id}</span>
                        </div>
                        {project.badge && (
                          <span className="pill-badge text-[10px] font-bold px-2.5 py-1 rounded-full text-[#1553C7] border-[#CFE6FF] bg-white/95 shadow-2xs backdrop-blur-xs">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-3.5 left-5 right-5 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-xs text-[11px] font-mono text-[#0B1F5C] font-semibold border border-white/60 shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{project.imageLabel || "Live Interactive Application"}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-44 sm:h-48 w-full bg-gradient-to-br from-[#F0F7FF] via-[#E4F1FF] to-[#D8EBFF] border-b border-[#DCEBFC] p-5 flex flex-col justify-between relative overflow-hidden">
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
                          <span className="font-semibold text-[#0B1F5C]">architecture_spec.py</span>
                          <span className="text-emerald-600 font-bold">status: verified</span>
                        </div>
                        <div className="truncate text-[#5B6B8C]">
                          <span className="text-[#1553C7] font-bold">&gt;</span> {project.problem.slice(0, 68)}...
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B1F5C] group-hover:text-[#1553C7] transition-colors mb-1.5">
                      {project.title}
                    </h2>

                    {project.subtitle && (
                      <p className="text-xs font-mono font-medium text-[#1553C7] mb-3">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-[#5B6B8C] text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Highlights if provided */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-4 space-y-1.5 p-3 rounded-xl bg-[#F8FBFF] border border-[#E2EEFC]">
                        <div className="text-[11px] font-mono font-bold text-[#1553C7] uppercase tracking-wider mb-1">
                          Key Highlights
                        </div>
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-[#374967]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1553C7] shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="pill-badge text-[11px] font-mono px-3 py-1 rounded-full text-[#0B1F5C] bg-[#F7FAFD] border border-[#DCEBFC]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Interactive series explorer */}
                    {project.isCollection && project.subProjects && (
                      <div className="mt-2 pt-3 border-t border-[#E8F1FC]">
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
                                  <div className="font-bold text-[#0B1F5C] mb-1">
                                    {sub.title}
                                  </div>
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

                {/* Card Action Footer */}
                <div className="px-6 sm:px-7 py-4 bg-[#F8FBFF] border-t border-[#DCEBFC] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#CFE6FF] bg-white text-[#0B1F5C] hover:border-[#1553C7] hover:text-[#1553C7] font-semibold transition-all shadow-2xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#1553C7]" />
                    <span>Source Code</span>
                  </a>

                  <div className="flex items-center gap-2">
                    {project.liveUrl.startsWith("https://") &&
                      !project.liveUrl.includes("github.com") &&
                      !project.liveUrl.includes("streamlit.io") && (
                        <button
                          type="button"
                          onClick={() => openPreview(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#CFE6FF] bg-white text-[#1553C7] hover:bg-[#EAF4FF] hover:border-[#1553C7] font-semibold transition-all shadow-2xs"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#1553C7]" />
                          <span>Preview</span>
                        </button>
                      )}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold bg-[#1553C7] hover:bg-[#0B1F5C] text-white shadow-md shadow-[#1553C7]/20 hover:shadow-[0_0_15px_#1EA7FF] transition-all transform active:scale-98"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#1EA7FF]" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
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
                    <p className="text-xs font-mono text-[#5B6B8C]">Loading live application preview...</p>
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
