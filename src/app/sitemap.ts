import type { MetadataRoute } from "next";
import { BACKGROUNDS } from "@/data";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/backgrounds`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/how-to-use`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const backgroundRoutes: MetadataRoute.Sitemap = BACKGROUNDS.map((bg) => ({
    url: `${SITE_URL}/backgrounds/${bg.category}/${bg.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${SITE_URL}/thumbnails/${bg.slug}.webp`],
  }));

  return [...staticRoutes, ...backgroundRoutes];
}
