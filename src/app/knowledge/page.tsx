import { getAllPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";
import { CLINIC } from "@/lib/clinic";

export const metadata = {
  title: `치과 지식 - ${CLINIC.name}`,
  description: "치과 지식을 쉽고 친근하게 풀어드리는 칼럼입니다.",
};

const FAQ = [
  {
    q: "스케일링은 얼마나 자주 받아야 하나요?",
    a: "6개월에 한 번 정도가 권장돼요. 흡연자나 잇몸이 약한 분은 3~4개월에 한 번 받으시는 게 좋습니다. 1년에 1회는 건강보험 적용도 돼요.",
  },
  {
    q: "임플란트 vs 브릿지, 뭐가 더 좋나요?",
    a: "정답은 없어요. 임플란트는 양옆 치아를 안 깎아도 되지만 시간과 비용이 더 들어요. 브릿지는 빠르지만 옆 치아를 다듬어야 해요. 잇몸 상태와 예산에 따라 함께 결정해요.",
  },
  {
    q: "사랑니는 꼭 빼야 하나요?",
    a: "꼭 빼야 하는 건 아니에요. 똑바로 잘 났고 닦기 쉬우면 그대로 두셔도 돼요. 다만 옆으로 누워있거나 잇몸이 자주 붓는다면 빼는 게 좋습니다.",
  },
  {
    q: "아이 치과는 언제 처음 데려가야 하나요?",
    a: "첫 유치가 나오고 6개월 이내, 늦어도 첫 돌 무렵엔 한 번 와 보시는 걸 권해요. 무서운 곳이 아니라는 인식을 어릴 때 만들어주는 게 중요해요.",
  },
];

export default function KnowledgePage() {
  const posts = getAllPosts("knowledge");

  return (
    <div className="bg-white">
      <section className="lavender-wash py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
            Conseils
          </p>
          <h1 className="mt-4 font-serif-kr text-3xl sm:text-5xl font-light text-[#3a3045]">
            어렵지 않게, 친근하게
          </h1>
          <div className="my-8 mx-auto w-12 hair-rule" />
          <p className="text-[#5a4f60] leading-loose font-light max-w-xl mx-auto">
            진료실에서 자주 설명드리는 내용을 글로 정리했어요.
            <br />
            궁금한 게 있다면 편하게 읽어보세요.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          {posts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <p className="text-[#5a4f60] text-center">아직 등록된 글이 없어요.</p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 lavender-wash">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
              Questions fréquentes
            </p>
            <h2 className="mt-3 font-serif-kr text-2xl sm:text-3xl font-light text-[#3a3045]">
              자주 묻는 질문
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((item) => (
              <details key={item.q} className="bg-white rounded-2xl card-soft group overflow-hidden">
                <summary className="cursor-pointer p-6 font-serif-kr text-[#3a3045] list-none flex items-start justify-between gap-3">
                  <span className="flex gap-3">
                    <span className="font-serif-en italic text-lavender-500 text-sm mt-0.5">Q.</span>
                    <span className="font-medium">{item.q}</span>
                  </span>
                  <span className="text-lavender-500 group-open:rotate-180 transition-transform text-xs mt-1.5">▼</span>
                </summary>
                <div className="px-6 pb-6 text-[#5a4f60] leading-loose font-light flex gap-3">
                  <span className="font-serif-en italic text-lavender-500 text-sm">A.</span>
                  <span>{item.a}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
