import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
