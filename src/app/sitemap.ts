import type { MetadataRoute } from "next";

const baseUrl = "https://www.advokat-veprytskyi.com";

const locales = ["ru", "uk"] as const;

const staticPages = [
  { path: "", priority: 1.0 },
  { path: "about", priority: 0.8 },
  { path: "services", priority: 0.9 },
  { path: "contacts", priority: 0.7 },
  { path: "sitemap", priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      const url = page.path
        ? `${baseUrl}/${locale}/${page.path}`
        : `${baseUrl}/${locale}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page.priority,
        alternates: {
          languages: {
            ru: `${baseUrl}/ru/${page.path}`,
            uk: `${baseUrl}/uk/${page.path}`,
          },
        },
      });
    }
  }

  return entries;
}