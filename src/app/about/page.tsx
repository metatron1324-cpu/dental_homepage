import { CLINIC } from "@/lib/clinic";
import SmartImage from "@/components/SmartImage";

export const metadata = {
  title: `병원 소개 - ${CLINIC.name}`,
  description: `${CLINIC.doctor.name}이 진료하는 ${CLINIC.name}을 소개합니다.`,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="lavender-wash py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
            À propos
          </p>
          <h1 className="mt-4 font-serif-kr text-3xl sm:text-5xl font-light text-[#3a3045]">
            {CLINIC.name}을 소개합니다
          </h1>
          <div className="my-8 mx-auto w-12 hair-rule" />
          <p className="text-[#5a4f60] leading-loose font-light">
            {CLINIC.tagline}
          </p>
        </div>
      </section>

      {/* 원장 소개 */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-center">
            <div className="aspect-[4/5] rounded-3xl bg-lavender-100 overflow-hidden">
              <SmartImage
                src="/images/doctor/portrait.jpg"
                alt={`${CLINIC.doctor.name} 사진`}
                className="w-full h-full object-cover"
                fallback={
                  <div className="w-full h-full flex items-center justify-center text-6xl text-lavender-400">
                    👩‍⚕️
                  </div>
                }
              />
            </div>
            <div>
              <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
                Directeur médical
              </p>
              <h2 className="mt-3 font-serif-kr text-4xl sm:text-5xl font-light text-[#3a3045]">
                {CLINIC.doctor.name}
              </h2>
              <p className="mt-2 font-serif-kr text-lavender-700">
                {CLINIC.doctor.title}
              </p>
              <div className="mt-8 p-6 bg-lavender-50 rounded-2xl border-l-2 border-lavender-300">
                <p className="quote-mark font-serif-kr text-[#3a3045] leading-loose font-light">
                  {CLINIC.doctor.message}
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {CLINIC.doctor.background.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#5a4f60] font-light">
                    <span className="text-lavender-400 mt-1.5 text-[8px]">●</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 진료 철학 */}
      <section className="py-20 lavender-wash">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
              Philosophie
            </p>
            <h2 className="mt-3 font-serif-kr text-2xl sm:text-3xl font-light text-[#3a3045]">
              진료 철학
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { num: "01", title: "충분한 설명", desc: "어떤 치료가 왜 필요한지, 시간과 비용은 어떤지 미리 설명드려요." },
              { num: "02", title: "함께 결정", desc: "환자분 동의 없이 진행되는 치료는 절대 없습니다." },
              { num: "03", title: "편안한 공간", desc: "치과의 차가운 분위기를 덜어내고, 따뜻하게 꾸몄어요." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 card-soft">
                <div className="num-plate text-4xl mb-4">{item.num}</div>
                <h3 className="font-serif-kr text-lg font-medium text-[#3a3045] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5a4f60] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시설 둘러보기 */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
              Espace
            </p>
            <h2 className="mt-3 font-serif-kr text-2xl sm:text-3xl font-light text-[#3a3045]">
              병원 둘러보기
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {["room-1", "room-2", "room-3", "room-4"].map((f, idx) => (
              <div key={f} className="aspect-[3/4] overflow-hidden rounded-2xl bg-lavender-100 group">
                <SmartImage
                  src={`/images/facility/${f}.jpg`}
                  alt={`병원 시설 ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  fallback={
                    <div className="w-full h-full flex items-center justify-center text-lavender-400 text-3xl">
                      ✦
                    </div>
                  }
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-[#5a4f60]/70 italic">
            사진은 <code className="bg-lavender-100 px-1.5 py-0.5 rounded">public/images/facility/</code> 폴더에서 교체하실 수 있어요
          </p>
        </div>
      </section>
    </div>
  );
}
