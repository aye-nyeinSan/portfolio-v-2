import BlogPosts from "@/components/BlogPosts";
import { getAllBlogs } from "@/utils/blogposts";

export default async function BlogHomePage() {
  const posts = await getAllBlogs();

  return (
    <div className="min-h-screen bg-brand-bg px-10 py-24 max-sm:px-4 max-sm:py-16">
      <BlogPosts posts={posts} />
    </div>
  );
}