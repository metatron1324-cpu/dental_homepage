import { getAllPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";
import { CLINIC } from "@/lib/clinic";
import { getHealthNews, type NaverNewsItem } from "@/lib/news";

export const metadata = {
  title: `건강 뉴스 - ${CLINIC.name}`,
  description: "병원 소식과 최신 건강/의학 뉴스를 한 곳에 모았습니다.",
};

// 정적 export에서는 빌드 시 한 번만 fetch. push할 때마다 자동 재빌드 됨.
export const dynamic = "force-static";

export default async function NewsPage() {
  const ourNews = getAllPosts("news");
  const healthNews = await getHealthNews();

  return (
    <div className="bg-white">
      <section className="lavender-wash py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
            Actualités
          </p>
          <h1 className="mt-4 font-serif-kr text-3xl sm:text-5xl font-light text-[#3a3045]">
            소식 & 건강 뉴스
          </h1>
          <div className="my-8 mx-auto w-12 hair-rule" />
          <p className="text-[#5a4f60] leading-loose font-light">
            알아두면 좋은 정보들
          </p>
        </div>
      </section>

      {/* 병원 소식 */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-500 uppercase">
              Nouvelles
            </p>
            <h2 className="mt-2 font-serif-kr text-2xl sm:text-3xl font-light text-[#3a3045]">
              병원 소식
            </h2>
          </div>
          {ourNews.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ourNews.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <p className="text-[#5a4f60]">등록된 소식이 없어요.</p>
          )}
        </div>
      </section>

      {/* 외부 건강 뉴스 */}
      <section className="py-20 sm:py-28 lavender-wash">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-500 uppercase">
              Santé
            </p>
            <h2 className="mt-2 font-serif-kr text-2xl sm:text-3xl font-light text-[#3a3045]">
              오늘의 건강 뉴스
            </h2>
            <p className="mt-3 text-sm text-[#5a4f60] font-light">
              네이버 뉴스 검색에서 최신 건강 관련 기사를 가져왔어요
            </p>
          </div>

          {healthNews.length === 0 ? (
            <div className="p-8 bg-white rounded-2xl text-center text-[#5a4f60] font-light">
              아직 뉴스 API가 연결되지 않았어요. 잠시 후 자동으로 표시됩니다.
            </div>
          ) : (
            <ul className="grid sm:grid-cols-2 gap-5">
              {healthNews.map((item) => (
                <NewsItemCard key={item.link} item={item} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

function stripHtml(s: string) {
  return s.replace(/<[^>]*>/g, "").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}

function NewsItemCard({ item }: { item: NaverNewsItem }) {
  return (
    <li>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white rounded-2xl p-6 card-soft hover:card-deep transition-shadow h-full"
      >
        <div className="font-serif-en italic text-[10px] text-lavender-500 tracking-wider mb-2">
          {item.pubDate}
        </div>
        <h3 className="font-serif-kr font-medium text-[#3a3045] mb-2 line-clamp-2">
          {stripHtml(item.title)}
        </h3>
        <p className="text-sm text-[#5a4f60] line-clamp-3 font-light leading-relaxed">
          {stripHtml(item.description)}
        </p>
        <div className="mt-4 text-[11px] font-serif-en italic text-lavender-700">
          원문 보기 →
        </div>
      </a>
    </li>
  );
}
