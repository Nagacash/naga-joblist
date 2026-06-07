import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/callback", "/dashboard", "/find-jobs", "/profile"],
    },
    sitemap: getSiteUrl("/sitemap.xml"),
    host: getSiteUrl(),
  };
}
