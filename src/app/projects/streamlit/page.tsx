import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryProjectsView from "@/components/CategoryProjectsView";
import { getProjectsByCategory, categoriesInfo } from "@/data/projects";

export const metadata: Metadata = {
  title: "Streamlit Production Apps | Sain Bux - Portfolio",
  description:
    "Interactive financial ledgers, invoice automation engines, and cloud Streamlit AI suites engineered by Sain Bux.",
};

export default function StreamlitPage() {
  const info = categoriesInfo.streamlit;
  const projects = getProjectsByCategory("streamlit");

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-[#1EA7FF]/25 selection:text-[#0B1F5C]">
      <Navbar />
      <main className="flex-1">
        <CategoryProjectsView
          categoryKey="streamlit"
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
