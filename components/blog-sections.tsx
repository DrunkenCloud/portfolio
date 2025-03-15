import { useEffect, useState } from "react";
import { PenTool } from "lucide-react";
import { BlogPost } from "@/components/blog-post"

interface BlogPostType {
  title: string;
  pubDate: string;
  description: string;
  link: string;
  thumbnail?: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]); // Define state type

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername")
      .then((res) => res.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setPosts(data.items.slice(0, 3) as BlogPostType[]); // Type assertion
        }
      })
      .catch((error) => console.error("Error fetching Medium posts:", error));
  }, []);

  return (
    <section id="blogs" className="py-20 bg-gradient-to-b from-slate-950 to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <PenTool className="h-8 w-8 text-purple-500" />
          <h2 className="text-3xl font-bold text-center font-serif">My Blog</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <div key={index} className="grid grid-cols-1 gap-6">
              <BlogPost
                title={post.title}
                date={new Date(post.pubDate).toDateString()}
                excerpt={post.description.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100) + "..."}
                imageUrl={post.thumbnail || "/placeholder.svg?height=150&width=300"}
                categories={["Medium"]}
                compact={index > 0}
                link={post.link}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-500 text-purple-400 hover:bg-purple-950/50 px-4 py-2 rounded"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
