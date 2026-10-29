"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  ChevronDown,
  Globe,
  RefreshCw,
  LayoutDashboard,
  Layers,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { socialLinks } from "@/data/socials";

const projectCategories = [
  {
    name: "Websites",
    desc: "Next.js & Full-Stack Apps",
    href: "/projects/websites",
    icon: Globe,
    badge: "Web",
  },
  {
    name: "Loop Engineering",
    desc: "Self-Healing Agent Systems",
    href: "/projects/loop-engineering",
    icon: RefreshCw,
    badge: "Agents",
  },
  {
    name: "Streamlit",
    desc: "Dashboards & Cloud Utilities",
    href: "/projects/streamlit",
    icon: LayoutDashboard,
    badge: "Cloud",
  },
];

const navLinks = [
  { id: "about", label: "About", href: "/#about" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "projects", label: "Projects", href: "/#projects", isDropdown: true },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll Spy to detect current section and header styling
  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "experience", "education", "contact"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if user reached bottom of page (activate Contact)
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 70;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 160;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial evaluation on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#DCEBFC] shadow-sm shadow-[#1553C7]/5 py-3"
          : "bg-white/70 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between w-full">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#1EA7FF] shadow-[0_0_10px_#1EA7FF]" />
          <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[#0B1F5C] group-hover:text-[#1553C7] transition-colors">
            SAIN BUX
          </span>
          <span className="hidden sm:inline-block text-[#1553C7] font-heading font-bold uppercase tracking-wider text-[10px] ml-1 px-2 py-0.5 rounded-full bg-[#EAF4FF] border border-[#CFE6FF]">
            AI ENGINEER
          </span>
        </Link>

        {/* Desktop Navigation with Active Scroll Indicator */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            if (link.isDropdown) {
              return (
                <div
                  key={link.id}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setProjectsDropdownOpen(true)}
                  onMouseLeave={() => setProjectsDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                    className={`flex items-center gap-1.5 py-1 font-semibold tracking-wider relative group cursor-pointer transition-colors ${
                      isActive
                        ? "text-[#1553C7] font-bold"
                        : "text-[#5B6B8C] hover:text-[#1553C7]"
                    }`}
                  >
                    <Link href="/#projects" onClick={(e) => e.stopPropagation()}>
                      Projects
                    </Link>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        projectsDropdownOpen
                          ? "rotate-180 text-[#1553C7]"
                          : isActive
                          ? "text-[#1553C7]"
                          : "text-[#5B6B8C]"
                      }`}
                    />

                    {/* Active Underline Indicator */}
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#1EA7FF] to-[#1553C7] rounded-full shadow-[0_0_8px_rgba(30,167,255,0.7)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1EA7FF]/60 transition-all duration-200 group-hover:w-full rounded-full" />
                    )}
                  </button>

                  <AnimatePresence>
                    {projectsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full -left-4 mt-2 w-72 p-2 bg-white/95 backdrop-blur-md rounded-2xl border border-[#CFE6FF] shadow-xl shadow-[#1553C7]/10 z-50 font-mono"
                      >
                        <div className="px-3 py-2 border-b border-[#EAF4FF] mb-1.5 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#1553C7] uppercase tracking-wider">
                            Categories
                          </span>
                          <Link
                            href="/#projects"
                            onClick={() => setProjectsDropdownOpen(false)}
                            className="text-[11px] text-[#5B6B8C] hover:text-[#1553C7] font-semibold flex items-center gap-1"
                          >
                            <span>View All</span>
                            <ArrowUpRight className="w-3 h-3 text-[#1EA7FF]" />
                          </Link>
                        </div>

                        <div className="space-y-1">
                          {projectCategories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <Link
                                key={cat.name}
                                href={cat.href}
                                onClick={() => setProjectsDropdownOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F7FF] transition-colors group/item"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#EAF4FF] group-hover/item:bg-[#1553C7] group-hover/item:text-white text-[#1553C7] flex items-center justify-center shrink-0 transition-colors">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-[#0B1F5C] group-hover/item:text-[#1553C7] transition-colors">
                                      {cat.name}
                                    </span>
                                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#EAF4FF] text-[#1553C7] font-bold">
                                      {cat.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-[#5B6B8C] truncate mt-0.5">
                                    {cat.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-2 pt-2 border-t border-[#EAF4FF]">
                          <Link
                            href="/#projects"
                            onClick={() => setProjectsDropdownOpen(false)}
                            className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F7FAFD] hover:bg-[#EAF4FF] text-xs font-semibold text-[#0B1F5C] transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <Layers className="w-3.5 h-3.5 text-[#1553C7]" />
                              <span>All Engineered Projects</span>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#1553C7]" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`relative py-1 font-semibold tracking-wider transition-colors group ${
                  isActive
                    ? "text-[#1553C7] font-bold"
                    : "text-[#5B6B8C] hover:text-[#1553C7]"
                }`}
              >
                <span>{link.label}</span>

                {/* Active Underline Indicator */}
                {isActive ? (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#1EA7FF] to-[#1553C7] rounded-full shadow-[0_0_8px_rgba(30,167,255,0.7)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1EA7FF]/60 transition-all duration-200 group-hover:w-full rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Socials (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full text-[#5B6B8C] hover:text-[#0B1F5C] hover:bg-[#EAF4FF] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full text-[#5B6B8C] hover:text-[#0B1F5C] hover:bg-[#EAF4FF] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold text-white bg-gradient-to-r from-[#0B1F5C] to-[#1553C7] hover:from-[#1553C7] hover:to-[#1EA7FF] shadow-xs shadow-[#1553C7]/20 transition-all ml-2"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#1EA7FF]" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#0B1F5C] hover:bg-[#EAF4FF] transition-colors flex-shrink-0"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCEBFC] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2 font-mono text-xs">
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all ${
                activeSection === "about"
                  ? "bg-[#EAF4FF] text-[#1553C7] font-bold border-l-4 border-[#1EA7FF]"
                  : "text-[#1E2A44] hover:text-[#1553C7] hover:bg-[#F8FBFF] font-semibold"
              }`}
            >
              <span>About</span>
              {activeSection === "about" && (
                <span className="w-2 h-2 rounded-full bg-[#1EA7FF] shadow-[0_0_8px_#1EA7FF] animate-pulse" />
              )}
            </Link>

            <Link
              href="/#skills"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all ${
                activeSection === "skills"
                  ? "bg-[#EAF4FF] text-[#1553C7] font-bold border-l-4 border-[#1EA7FF]"
                  : "text-[#1E2A44] hover:text-[#1553C7] hover:bg-[#F8FBFF] font-semibold"
              }`}
            >
              <span>Skills</span>
              {activeSection === "skills" && (
                <span className="w-2 h-2 rounded-full bg-[#1EA7FF] shadow-[0_0_8px_#1EA7FF] animate-pulse" />
              )}
            </Link>

            {/* Mobile Projects with Submenu */}
            <div className={`py-1 px-3 rounded-xl transition-all ${
              activeSection === "projects" ? "bg-[#EAF4FF]/60 border-l-4 border-[#1EA7FF]" : ""
            }`}>
              <div className="flex items-center justify-between">
                <Link
                  href="/#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1 transition-colors ${
                    activeSection === "projects"
                      ? "text-[#1553C7] font-bold"
                      : "text-[#1E2A44] hover:text-[#1553C7] font-semibold"
                  }`}
                >
                  Projects
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="p-1 text-[#1553C7]"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileProjectsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileProjectsOpen && (
                <div className="mt-2.5 ml-3 pl-3 border-l-2 border-[#CFE6FF] space-y-2">
                  {projectCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 py-1 text-[#5B6B8C] hover:text-[#1553C7] transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#1553C7]" />
                        <span>{cat.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/#experience"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all ${
                activeSection === "experience"
                  ? "bg-[#EAF4FF] text-[#1553C7] font-bold border-l-4 border-[#1EA7FF]"
                  : "text-[#1E2A44] hover:text-[#1553C7] hover:bg-[#F8FBFF] font-semibold"
              }`}
            >
              <span>Experience</span>
              {activeSection === "experience" && (
                <span className="w-2 h-2 rounded-full bg-[#1EA7FF] shadow-[0_0_8px_#1EA7FF] animate-pulse" />
              )}
            </Link>

            <Link
              href="/#education"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all ${
                activeSection === "education"
                  ? "bg-[#EAF4FF] text-[#1553C7] font-bold border-l-4 border-[#1EA7FF]"
                  : "text-[#1E2A44] hover:text-[#1553C7] hover:bg-[#F8FBFF] font-semibold"
              }`}
            >
              <span>Education</span>
              {activeSection === "education" && (
                <span className="w-2 h-2 rounded-full bg-[#1EA7FF] shadow-[0_0_8px_#1EA7FF] animate-pulse" />
              )}
            </Link>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all ${
                activeSection === "contact"
                  ? "bg-[#EAF4FF] text-[#1553C7] font-bold border-l-4 border-[#1EA7FF]"
                  : "text-[#1E2A44] hover:text-[#1553C7] hover:bg-[#F8FBFF] font-semibold"
              }`}
            >
              <span>Contact</span>
              {activeSection === "contact" && (
                <span className="w-2 h-2 rounded-full bg-[#1EA7FF] shadow-[0_0_8px_#1EA7FF] animate-pulse" />
              )}
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#DCEBFC] flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#EAF4FF] text-[#0B1F5C] hover:text-[#1553C7]"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#EAF4FF] text-[#0B1F5C] hover:text-[#1553C7]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:sainbuxseelro11@gmail.com"
                className="p-2 rounded-full bg-[#EAF4FF] text-[#0B1F5C] hover:text-[#1553C7]"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-[#0B1F5C] to-[#1553C7] text-white"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
