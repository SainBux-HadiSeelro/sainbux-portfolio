import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sainbux.vercel.app";
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-10-11"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
