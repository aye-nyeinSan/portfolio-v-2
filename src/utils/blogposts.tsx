
import { MediumItem } from "@/components/BlogPosts";

//helper function to fetch Medium Post
const Medium_API =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ayenyeinsan";

type MediumResponse = {
    status: string;
    feed: { url: string; title: string; link: string; image: string };
    items: MediumItem[];
  };

export async function getBlogsfromMedium(): Promise<MediumItem[]> {
  const res = await fetch(Medium_API, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`Medium feed failed: ${res.status}`);
  const data: MediumResponse = await res.json();
  return data.items;
}

//helper function to fetch Dev.to Posts
const DevTo_API = "https://dev.to/api/articles/me";

type DevToArticle = {
  id: number;
  title: string;
  description: string;
  published_at: string;
  url: string;
  cover_image: string | null;
  social_image: string | null;
  body_html: string;
  tag_list: string[];
  user: { name: string; username: string };
};

export async function getBlogsfromDevTo(): Promise<MediumItem[]> {
  const apiKey = process.env.DEVTO_API_KEY;
  if (!apiKey) {
    console.warn("DEVTO_API_KEY is not set — skipping dev.to fetch");
    return [];
  }

  const res = await fetch(DevTo_API, {
    headers: { "api-key": apiKey, accept: "application/vnd.forem.api-v1+json" },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`dev.to feed failed: ${res.status}`);
  const articles: DevToArticle[] = await res.json();

  return articles.map((a) => ({
    title: a.title,
    pubDate: a.published_at,
    link: a.url,
    guid: `devto-${a.id}`,
    author: a.user.name,
    thumbnail: a.cover_image ?? a.social_image ?? "",
    description: a.description,
    content: a.body_html,
    categories: a.tag_list,
  }));
}

export async function getAllBlogs(): Promise<MediumItem[]> {
  const [medium, devto] = await Promise.all([
    getBlogsfromMedium().catch(() => [] as MediumItem[]),
    getBlogsfromDevTo().catch(() => [] as MediumItem[]),
  ]);
  return [...medium, ...devto].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
}
