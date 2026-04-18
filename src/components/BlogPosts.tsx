import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export type MediumItem = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
};

function stripHtml(html: string, maxLen = 160) {
  const text = html.replace(/<[^>]+>/g, " ").trim();
  return text.length > maxLen ? text.slice(0, maxLen) + "…" : text;
}

function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

function getThumbnail(post: MediumItem): string | null {
  if (post.thumbnail && /^https?:\/\//.test(post.thumbnail)) return post.thumbnail;
  return extractFirstImage(post.content) ?? extractFirstImage(post.description);
}

export default function BlogPosts({ posts }: { posts: MediumItem[] }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 py-5">
      {posts.map((post) => {
        const thumbnail = getThumbnail(post);
        return (
          <Card
            key={post.guid}
            size="sm"
            className="flex flex-row items-stretch gap-0 overflow-hidden border border-brand-bg border-b-2 border-b-brand-text-secondary py-0"
          >
            <div className="flex flex-1 flex-col">
              <CardHeader className="">
                <CardTitle className="text-2xl font-bold sm:line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {new Date(post.pubDate).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 px-0">
                <p className="line-clamp-3 text-sm">
                  {stripHtml(post.description)}
                </p>
              </CardContent>
              <CardFooter className="px-0 pb-0">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-brand-text dark:bg-brand/40"
                >
                  <Link href={post.link} target="_blank" rel="noopener noreferrer">
                    Read Me
                  </Link>
                </Button>
              </CardFooter>
            </div>
            {thumbnail && (
              <div className="relative w-40 shrink-0 overflow-hidden sm:w-56 smd:w-64 lg:w-72">
                <Image
                  src={thumbnail}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 288px"
                  className="object-cover"
                />
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}
