import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { socialLinks } from "@/data/socials";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sainbux.dev"),
  title: {
    default: "Sain Bux | Agentic AI Engineer & Forward Deployed Engineer",
    template: "%s | Sain Bux",
  },
  description:
    "I build AI agents that plan, act, and correct themselves. Explore 50+ AI & automation projects, 12 Loop Engineering repositories, and production multi-agent systems.",
  keywords: [
    "Sain Bux",
    "Agentic AI Engineer",
    "Forward Deployed Engineer",
    "Loop Engineering",
    "Multi-Agent Systems",
    "Model Context Protocol",
    "MCP",
    "OpenAI SDK",
    "Morphelabs",
    "Autonomous Agents",
    "Tool Calling",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Sain Bux", url: "https://github.com/SainBux-HadiSeelro" }],
  creator: "Sain Bux",
  alternates: {
    canonical: "https://sainbux.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sainbux.dev",
    title: "Sain Bux | Agentic AI Engineer & Forward Deployed Engineer",
    description:
      "I build AI agents that plan, act, and correct themselves. 50+ AI and automation projects, 12 on Loop Engineering.",
    siteName: "Sain Bux Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sain Bux | Agentic AI Engineer & Forward Deployed Engineer",
    description:
      "I build AI agents that plan, act, and correct themselves. Explore autonomous agent architectures and live projects.",
    creator: "@sainbux",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sain Bux",
  jobTitle: "Agentic AI Engineer & Forward Deployed Engineer",
  url: "https://sainbux.dev",
  sameAs: [
    socialLinks.github,
    socialLinks.linkedin,
  ],
  worksFor: {
    "@type": "Organization",
    name: "Morphelabs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-white text-[#1E2A44] font-sans antialiased selection:bg-[#1EA7FF]/25 selection:text-[#0B1F5C] relative overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="fixed inset-0 subtle-grid pointer-events-none -z-10 opacity-35" />
        {children}
      </body>
    </html>
  );
}
