import type { MetadataRoute } from "next";

const SITE_URL = "https://jwebly.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/build",
    "/book-a-call",
    "/resources",
    "/partners",
    "/about",
    "/careers",
    "/privacy",
    "/terms",
    "/security",
    "/resources/cost-of-the-missed-call",
    "/resources/ai-front-desk-checklist",
    "/resources/off-the-shelf-ai-stalls",
  ];

  const priority = (route: string) => {
    if (route === "") return 1;
    if (route === "/build" || route === "/book-a-call") return 0.8;
    if (["/privacy", "/terms", "/security"].includes(route)) return 0.3;
    return 0.6;
  };

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: priority(route),
  }));
}
