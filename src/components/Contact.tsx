"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Download,
  Copy,
  Check,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { SectionPill, CircuitLineDecoration, CurvedWave } from "./SignatureElements";
import { socialLinks } from "@/data/socials";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    roleType: "Hiring: Full-time / Remote",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailAddress = socialLinks.email;
  const phoneNumber = socialLinks.phone;
  const location = socialLinks.location;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "d3c712e3-7685-4c0d-aac8-46b3de67d97e",
          name: formState.name,
          email: formState.email,
          subject: `[Portfolio Inquiry] ${formState.roleType} - ${formState.name}`,
          message: formState.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          roleType: "Hiring: Full-time / Remote",
          message: "",
        });
      } else {
        alert(data.message || "Failed to submit message. Please try again.");
      }
    } catch {
      alert("An error occurred while sending the message. Please contact directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative pt-24 pb-28 md:pt-32 md:pb-36 bg-gradient-to-br from-[#0A2A6B] via-[#0B1F5C] to-[#1553C7] text-white overflow-hidden">
      {/* Decorative Wave at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none opacity-20">
        <CurvedWave inverted />
      </div>

      {/* Decorative Circuit Lines in Corners */}
      <div className="absolute top-16 right-6 hidden md:block">
        <CircuitLineDecoration orientation="right" />
      </div>
      <div className="absolute bottom-12 left-6 hidden lg:block">
        <CircuitLineDecoration orientation="left" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Signature Gradient Pill Label: CONTACT INFORMATION // */}
        <div className="mb-4">
          <SectionPill title="CONTACT INFORMATION //" className="shadow-lg shadow-black/30 border border-[#1EA7FF]/30" />
        </div>

        {/* Big Bold Headline */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-2xl leading-[1.08]">
            Let&apos;s build next-generation AI agents together.
          </h2>
          <p className="text-[#CFE6FF] text-base mt-4 max-w-xl">
            Available for Agentic AI Engineer &amp; Forward Deployed roles, production agent consulting, and multi-agent systems engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info with Gol Navy Icon Badges & Dividers */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#1EA7FF] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#1EA7FF] shadow-[0_0_10px_#1EA7FF] animate-pulse" />
                <span>Available for Selected Engagements</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white">
                Ready to deploy autonomous AI agents to production?
              </h3>
              <p className="text-xs text-[#EAF4FF] leading-relaxed">
                Targeting roles as <strong className="text-white font-bold">Agentic AI Engineer</strong> or <strong className="text-white font-bold">Forward Deployed Engineer</strong>. Experienced in multi-agent pipelines, MCP, and self-healing loop systems.
              </p>

              <div className="pt-3 border-t border-white/10 space-y-2 text-xs font-mono text-[#CFE6FF]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1EA7FF]" />
                  <span>Remote / Global Relocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#1EA7FF]" />
                  <span>Response time: &lt; 24 hours</span>
                </div>
              </div>
            </div>

            {/* Signature Business Card Contact Details Block */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-5 shadow-xl">
              {/* 1. Phone Badge */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#0B1F5C] border-2 border-[#1EA7FF] flex items-center justify-center text-white shadow-lg shadow-[#0B1F5C]/40 flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="h-8 w-[2px] bg-[#1EA7FF] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#CFE6FF] tracking-wider font-semibold">Phone</div>
                  <a
                    href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#1EA7FF] transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* 2. Email Badge */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#0B1F5C] border-2 border-[#1EA7FF] flex items-center justify-center text-white shadow-lg shadow-[#0B1F5C]/40 flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="h-8 w-[2px] bg-[#1EA7FF] rounded-full flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase text-[#CFE6FF] tracking-wider font-semibold">Email</div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#1EA7FF] transition-colors truncate block"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              {/* 3. Location Badge */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#0B1F5C] border-2 border-[#1EA7FF] flex items-center justify-center text-white shadow-lg shadow-[#0B1F5C]/40 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="h-8 w-[2px] bg-[#1EA7FF] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#CFE6FF] tracking-wider font-semibold">Location</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {location}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Copy & Socials */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-3.5 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#1EA7FF]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="/cv.pdf"
                download="Sain_Bux_CV.pdf"
                className="p-3.5 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-[#1EA7FF]" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-white/15 bg-white/10 hover:border-[#1EA7FF] hover:bg-white/20 text-white transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-white group-hover:text-[#1EA7FF]" />
                  <span className="text-xs font-mono font-semibold">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1EA7FF]" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-white/15 bg-white/10 hover:border-[#1EA7FF] hover:bg-white/20 text-white transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-white group-hover:text-[#1EA7FF]" />
                  <span className="text-xs font-mono font-semibold">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1EA7FF]" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean White / Frosted Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white text-[#1E2A44] shadow-2xl border border-white/30 relative">
              <h3 className="font-heading text-2xl font-extrabold text-[#0B1F5C] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#5B6B8C] mb-6">
                Fill out the form below or reach out directly at{" "}
                <a href={`mailto:${emailAddress}`} className="text-[#1553C7] font-semibold hover:underline">
                  {emailAddress}
                </a>
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-[#F0F7FF] border border-[#CFE6FF] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[#0B1F5C]">Message Dispatched</h4>
                  <p className="text-xs text-[#5B6B8C] max-w-sm mx-auto">
                    Thank you for reaching out. I will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-mono font-bold text-[#1553C7] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono font-semibold text-[#0B1F5C]">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FBFF] border border-[#DCEBFC] text-[#1E2A44] text-xs focus:outline-none focus:border-[#1553C7] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono font-semibold text-[#0B1F5C]">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FBFF] border border-[#DCEBFC] text-[#1E2A44] text-xs focus:outline-none focus:border-[#1553C7] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="roleType" className="text-xs font-mono font-semibold text-[#0B1F5C]">
                      Inquiry / Opportunity Type
                    </label>
                    <select
                      id="roleType"
                      value={formState.roleType}
                      onChange={(e) => setFormState({ ...formState, roleType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FBFF] border border-[#DCEBFC] text-[#1E2A44] text-xs focus:outline-none focus:border-[#1553C7] focus:bg-white transition-colors"
                    >
                      <option value="Hiring: Full-time / Remote">Hiring: Full-time / Remote</option>
                      <option value="Hiring: Forward Deployed Engineer">Hiring: Forward Deployed Engineer</option>
                      <option value="Consulting / Agent Project">Contract / Consulting / Agent Project</option>
                      <option value="Technical Collaboration">Technical Collaboration / Open Source</option>
                      <option value="Other">Other Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-semibold text-[#0B1F5C]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Outline your agentic project, problem scope, or team requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FBFF] border border-[#DCEBFC] text-[#1E2A44] text-xs focus:outline-none focus:border-[#1553C7] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-xs bg-[#1553C7] hover:bg-[#0B1F5C] text-white shadow-lg shadow-[#1553C7]/30 hover:shadow-[0_0_20px_#1EA7FF] disabled:opacity-50 transition-all transform active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#1EA7FF]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
