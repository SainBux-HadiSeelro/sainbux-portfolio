import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects & Agent Architectures | Sain Bux - AI Engineer",
  description:
    "Explore 25+ engineered autonomous agent systems, deterministic feedback loops, Next.js web applications, and AI utilities built by Sain Bux.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-[#1EA7FF]/25 selection:text-[#0B1F5C]">
      <Navbar />
      <main className="flex-1 pt-12 md:pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
