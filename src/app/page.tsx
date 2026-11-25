import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-[#1EA7FF]/25 selection:text-[#0B1F5C]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
