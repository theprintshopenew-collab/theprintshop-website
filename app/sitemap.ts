import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, frequency: "weekly" as const },
    { path: "/services", priority: 0.9, frequency: "weekly" as const },
    { path: "/portfolio", priority: 0.8, frequency: "weekly" as const },
    { path: "/contact-us", priority: 0.7, frequency: "monthly" as const },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.frequency,
    priority: route.priority,
  }));
}
