import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { TaglineBlock, CircuitLineDecoration } from "./SignatureElements";
import { socialLinks } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="relative bg-[#06163D] text-[#CFE6FF] text-xs py-14 border-t border-[#1553C7]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Tagline Block & Circuit Lines */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
          <TaglineBlock />
          <div className="hidden md:block">
            <CircuitLineDecoration orientation="right" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1EA7FF] shadow-[0_0_8px_#1EA7FF]" />
            <div>
              <span className="font-heading font-extrabold text-sm text-white tracking-wider">
                SAIN BUX
              </span>
              <span className="block text-[11px] font-mono text-[#8BBBF7]">
                Agentic AI &amp; Forward Deployed Systems
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#CFE6FF]">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Socials & Top */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:border-[#1EA7FF] hover:text-[#1EA7FF] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:border-[#1EA7FF] hover:text-[#1EA7FF] transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:border-[#1EA7FF] hover:text-[#1EA7FF] transition-all flex items-center gap-1 font-mono text-[10px]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[#5B6B8C] font-mono text-[11px]">
          <div>
            &copy; 2026 Sain Bux. All rights reserved. Clifton, Karachi.
          </div>
          <div>
            Crafted with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
