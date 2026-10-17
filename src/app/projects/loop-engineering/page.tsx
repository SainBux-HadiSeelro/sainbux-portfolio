import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryProjectsView from "@/components/CategoryProjectsView";
import { getProjectsByCategory, categoriesInfo } from "@/data/projects";

export const metadata: Metadata = {
  title: "Loop Engineering & Agent Systems | Sain Bux - Portfolio",
  description:
    "Deterministic feedback loops, self-healing agent pipelines, and multi-agent systems engineered by Sain Bux.",
};

export default function LoopEngineeringPage() {
  const info = categoriesInfo["loop-engineering"];
  const projects = getProjectsByCategory("loop-engineering");

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-[#1EA7FF]/25 selection:text-[#0B1F5C]">
      <Navbar />
      <main className="flex-1">
        <CategoryProjectsView
          categoryKey="loop-engineering"
          name={info.name}
          title={info.title}
          subtitle={info.subtitle}
          badge={info.badge}
          description={info.description}
          projects={projects}
        />
      </main>
      <Footer />
    </div>
  );
}
