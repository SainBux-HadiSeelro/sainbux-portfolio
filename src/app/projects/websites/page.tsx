import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryProjectsView from "@/components/CategoryProjectsView";
import { getProjectsByCategory, categoriesInfo } from "@/data/projects";

export const metadata: Metadata = {
  title: "Websites & Full-Stack Platforms | Sain Bux - Portfolio",
  description:
    "Production Next.js applications, technical documentation portals, and full-stack web platforms built by Sain Bux.",
};

export default function WebsitesPage() {
  const info = categoriesInfo.websites;
  const projects = getProjectsByCategory("websites");

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-[#1EA7FF]/25 selection:text-[#0B1F5C]">
      <Navbar />
      <main className="flex-1">
        <CategoryProjectsView
          categoryKey="websites"
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
