import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";

export const dynamic = "force-static";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/knowledge",
    "/news",
    "/location",
    "/booking",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const postPages = (["news", "knowledge"] as const).flatMap((cat) =>
    getAllPosts(cat).map((p) => ({
      url: `${SITE_URL}/${cat}/${encodeURIComponent(p.slug)}`,
      lastModified: p.date ? new Date(p.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...postPages];
}
