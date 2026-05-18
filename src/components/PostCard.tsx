import Link from "next/link";
import type { PostMeta } from "@/lib/content";
import SmartImage from "@/components/SmartImage";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/${post.category}/${post.slug}`}
      className="group block bg-white rounded-3xl overflow-hidden card-soft hover:card-deep transition-shadow"
    >
      <div className="aspect-[16/10] bg-lavender-100 relative overflow-hidden">
        {post.cover ? (
          <SmartImage
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            fallback={
              <div className="w-full h-full flex items-center justify-center text-lavender-400 text-4xl">
                {post.category === "news" ? "📰" : "✦"}
              </div>
            }
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-lavender-400 text-4xl">
            {post.category === "news" ? "📰" : "✦"}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-[10px] text-lavender-500 mb-2 tracking-wider">
          <span className="font-serif-en italic">{post.date}</span>
          {post.tags?.slice(0, 2).map((t) => (
            <span
              key={t}
              className="font-serif-kr text-lavender-600 bg-lavender-50 px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-serif-kr text-lg font-medium text-[#3a3045] group-hover:text-lavender-700 transition-colors line-clamp-2 leading-snug">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-[#5a4f60] line-clamp-2 font-light">
          {post.summary}
        </p>
      </div>
    </Link>
  );
}
