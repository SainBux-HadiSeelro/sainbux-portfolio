import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sainbux.dev",
      lastModified: new Date("2026-10-11"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
