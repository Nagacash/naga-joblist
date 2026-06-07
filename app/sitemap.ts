import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: getSiteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getSiteUrl("/login"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getSiteUrl("/privacy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: getSiteUrl("/terms"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
