import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllPosts, type PostCategory } from "@/lib/content";
import { CLINIC } from "@/lib/clinic";
import SmartImage from "@/components/SmartImage";

const VALID_CATEGORIES: PostCategory[] = ["news", "knowledge"];

function isValidCategory(c: string): c is PostCategory {
  return (VALID_CATEGORIES as string[]).includes(c);
}

export async function generateStaticParams() {
  const params: { category: PostCategory; slug: string }[] = [];
  for (const cat of VALID_CATEGORIES) {
    for (const post of getAllPosts(cat)) {
      params.push({ category: cat, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (!isValidCategory(category)) return {};
  const post = getPost(category, decodeURIComponent(slug));
  if (!post) return {};
  return {
    title: `${post.title} - ${CLINIC.name}`,
    description: post.summary,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (!isValidCategory(category)) notFound();
  const post = getPost(category, decodeURIComponent(slug));
  if (!post) notFound();

  const categoryLabel = category === "news" ? "병원 소식" : "치과 지식";
  const categoryEn = category === "news" ? "Nouvelles" : "Conseils";
  const backHref = `/${category}`;

  return (
    <article className="bg-white">
      <header className="lavender-wash py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-xs font-serif-kr tracking-wider text-[#5a4f60] hover:text-lavender-700 mb-8"
          >
            ← {categoryLabel} 목록으로
          </Link>
          <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-500 uppercase">
            {categoryEn} · <span className="not-italic">{post.date}</span>
          </p>
          <h1 className="mt-4 font-serif-kr text-3xl sm:text-4xl font-light text-[#3a3045] leading-tight">
            {post.title}
          </h1>
          {post.summary && (
            <p className="mt-6 text-base text-[#5a4f60] leading-loose font-light">
              {post.summary}
            </p>
          )}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="font-serif-kr px-3 py-1 rounded-full bg-white text-lavender-700 text-xs tracking-wider border border-lavender-200"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
        {post.cover && (
          <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-lavender-100 mb-12">
            <SmartImage
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover"
              fallback={
                <div className="w-full h-full flex items-center justify-center text-lavender-400 text-4xl">
                  ✦
                </div>
              }
            />
          </div>
        )}

        <div
          className="prose-clinic font-serif-kr text-[#3a3045] font-light"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-16 p-8 bg-lavender-50 rounded-3xl text-center">
          <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-500 uppercase">
            Consultation
          </p>
          <p className="mt-3 font-serif-kr text-[#3a3045] font-medium">
            궁금한 점이 있으신가요?
          </p>
          <p className="mt-2 text-sm text-[#5a4f60] font-light">
            {CLINIC.doctor.name}이 직접 답변드립니다
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#3a3045] text-white hover:bg-lavender-700 transition-colors font-serif-kr text-sm tracking-[0.15em]"
          >
            상담 신청하기 →
          </Link>
        </div>
      </div>
    </article>
  );
}
