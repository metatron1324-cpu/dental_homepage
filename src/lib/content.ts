import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostCategory = "news" | "knowledge";

export type PostMeta = {
  slug: string;
  category: PostCategory;
  title: string;
  date: string;
  summary: string;
  cover?: string;
  tags?: string[];
};

export type Post = PostMeta & {
  html: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function getCategoryDir(category: PostCategory) {
  return path.join(CONTENT_ROOT, category);
}

export function getAllPosts(category: PostCategory): PostMeta[] {
  const dir = getCategoryDir(category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts = files.map((file): PostMeta => {
    const slug = file.replace(/\.md$/, "").normalize("NFC");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      category,
      title: data.title ?? slug,
      date: data.date ? new Date(data.date).toISOString().slice(0, 10) : "",
      summary: data.summary ?? "",
      cover: data.cover,
      tags: data.tags ?? [],
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(category: PostCategory, slug: string): Post | null {
  const dir = getCategoryDir(category);
  if (!fs.existsSync(dir)) return null;

  // 한글 파일명은 시스템에 따라 NFC/NFD 정규화 차이가 있어 직접 비교
  const targetSlug = slug.normalize("NFC");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const matchedFile = files.find(
    (f) => f.replace(/\.md$/, "").normalize("NFC") === targetSlug
  );
  if (!matchedFile) return null;

  const filePath = path.join(dir, matchedFile);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;

  return {
    slug,
    category,
    title: data.title ?? slug,
    date: data.date ? new Date(data.date).toISOString().slice(0, 10) : "",
    summary: data.summary ?? "",
    cover: data.cover,
    tags: data.tags ?? [],
    html,
  };
}

export function getRecentPosts(category: PostCategory, limit: number): PostMeta[] {
  return getAllPosts(category).slice(0, limit);
}
