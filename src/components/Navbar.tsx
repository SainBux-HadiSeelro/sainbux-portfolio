"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { socialLinks } from "@/data/socials";

// Navigation links with Projects positioned at the end
const navLinks = [
  { id: "about", label: "About", href: "/#about" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "contact", label: "Contact", href: "/#contact" },
  { id: "projects", label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Spy to detect current section on home, or highlight active route
  useEffect(() => {
    // If on /projects page or its subpages, highlight Projects
    if (pathname.startsWith("/projects")) {
      setActiveSection("projects");
      const handleProjectsScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleProjectsScroll, { passive: true });
      handleProjectsScroll();
      return () => window.removeEventListener("scroll", handleProjectsScroll);
    }

    const sectionIds = ["about", "skills", "experience", "education", "contact"];

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

      // Check which section is currently in view
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
    handleScroll(); // Initial evaluation on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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

        {/* Desktop Navigation with Projects at the end */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

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

            {/* Mobile Projects - Positioned Last */}
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all ${
                activeSection === "projects"
                  ? "bg-[#EAF4FF] text-[#1553C7] font-bold border-l-4 border-[#1EA7FF]"
                  : "text-[#1E2A44] hover:text-[#1553C7] hover:bg-[#F8FBFF] font-semibold"
              }`}
            >
              <span>Projects</span>
              {activeSection === "projects" && (
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
