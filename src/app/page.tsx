import Link from "next/link";
import { CLINIC } from "@/lib/clinic";
import { getRecentPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";
import QuickInquiry from "@/components/QuickInquiry";
import SmartImage from "@/components/SmartImage";

export default function Home() {
  const recentNews = getRecentPosts("news", 3);
  const recentKnowledge = getRecentPosts("knowledge", 3);

  return (
    <>
      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section className="relative overflow-hidden bg-[#e5dbf1]">
        <div className="absolute inset-0 monet-grain opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch">
          {/* 좌측: 인물 사진 (object-position: left center로 좌측 인물만 보이게) */}
          <div className="order-1 relative bloom-in min-h-[420px] sm:min-h-[560px] lg:min-h-[720px]">
            <SmartImage
              src="/images/hero/main-clean.jpg"
              alt={`${CLINIC.name} - ${CLINIC.doctor.name} 진료`}
              className="absolute inset-0 w-full h-full object-cover object-left"
              fallback={
                <div className="w-full h-full flex items-center justify-center text-lavender-400 bg-lavender-100">
                  <span className="text-7xl">🦷</span>
                </div>
              }
            />
            {/* 우측 경계 부드러운 fade (사진과 카피 영역을 자연스럽게 잇기) */}
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#e5dbf1] pointer-events-none" />
          </div>

          {/* 우측: 새 카피 (구강외과 전문성 + Only 행복) */}
          <div className="order-2 relative py-16 sm:py-20 lg:py-28 px-6 sm:px-10 lg:px-14 flex flex-col justify-center bloom-in">
            {/* 전문성 라벨 — 맨 앞에 강조 */}
            <p className="ink-rise font-serif-en italic text-[11px] sm:text-xs tracking-[0.4em] text-lavender-700 uppercase">
              Spécialiste · 구강악안면외과 전문의 진료
            </p>

            <div className="ink-rise mt-5 hair-rule w-12" />

            {/* 손글씨 강조 — 패러디 카피 */}
            <p className="ink-rise-2 mt-8 font-hand text-3xl sm:text-4xl lg:text-5xl text-[#3a3045] leading-tight">
              <span className="text-[#5a4f60]">"</span>
              행복은 다{" "}
              <span className="text-lavender-700">계획</span>이 있구나!
              <span className="text-[#5a4f60]">"</span>
            </p>

            {/* 메인 진료 카피 (Only 행복 윗 라인) */}
            <div className="ink-rise-3 mt-12 flex items-center gap-3">
              <span className="font-serif-en italic text-sm text-[#3a3045] tracking-wider">
                Only 행복
              </span>
              <div className="flex-1 h-px bg-[#3a3045]/40" />
            </div>

            <div className="ink-rise-3 mt-6 space-y-2">
              <h1 className="font-serif-kr text-2xl sm:text-3xl lg:text-[34px] font-light text-[#3a3045] leading-[1.55]">
                미학 치아 교정,
              </h1>
              <h2 className="font-serif-kr text-2xl sm:text-3xl lg:text-[34px] font-light text-[#3a3045] leading-[1.55]">
                치주를 고려한
                <br className="sm:hidden" />{" "}
                <span className="font-serif-en italic text-lavender-700">
                  개인형 맞춤 임플란트
                </span>
              </h2>
              <p className="font-serif-kr text-base sm:text-lg text-[#5a4f60] leading-relaxed pt-2">
                <span className="font-medium text-[#3a3045]">{CLINIC.name}</span>에서만 가능합니다.
              </p>
            </div>

            {/* Only 행복 아랫 라인 */}
            <div className="ink-rise-3 mt-8 flex items-center gap-3">
              <div className="flex-1 h-px bg-[#3a3045]/40" />
              <span className="font-serif-en italic text-sm text-[#3a3045] tracking-wider">
                Only 행복
              </span>
            </div>

            {/* CTA */}
            <div className="ink-rise-4 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link
                href="/booking"
                className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#3a3045] text-white hover:bg-lavender-700 transition-colors font-serif-kr text-sm tracking-[0.18em]"
              >
                상담 신청
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href={`tel:${CLINIC.phoneTel}`}
                className="font-serif-en italic text-[#3a3045] hover:text-lavender-700 underline underline-offset-[10px] decoration-[0.5px] decoration-[#3a3045]/40 transition-colors"
              >
                {CLINIC.phone}
              </a>
            </div>
          </div>
        </div>

        {/* 하단 meta */}
        <div className="relative max-w-5xl mx-auto px-6 pb-16">
          <div className="hair-rule mb-6" />
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] sm:text-xs text-[#5a4f60] tracking-wider">
            <span className="font-serif-en italic text-lavender-700/70">Heures</span>
            <span>평일 {CLINIC.hours.weekday}</span>
            <span className="opacity-30">·</span>
            <span>토 {CLINIC.hours.saturday}</span>
            <span className="opacity-30">·</span>
            <span>{CLINIC.address}</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ QUICK INQUIRY ═══════════════════════════ */}
      <QuickInquiry />

      {/* ═══════════════════════════ EVENT BANNER ═══════════════════════════ */}
      <section className="bg-cream-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
              Événements
            </p>
            <h2 className="mt-2 font-serif-kr text-2xl sm:text-3xl font-light text-[#3a3045]">
              지금 진행 중인 안내
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {CLINIC.events.map((ev) => (
              <Link
                key={ev.title}
                href="/booking"
                className="group flex items-center gap-5 bg-white rounded-2xl p-5 card-soft hover:card-deep transition-shadow"
              >
                <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-lavender-100">
                  <SmartImage
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center text-2xl">
                        🎁
                      </div>
                    }
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif-en italic text-[10px] text-lavender-500 tracking-wider uppercase">
                    {ev.validUntil}
                  </p>
                  <h3 className="mt-1 font-serif-kr text-base font-medium text-[#3a3045] line-clamp-1 group-hover:text-lavender-700 transition-colors">
                    {ev.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#5a4f60] line-clamp-2">{ev.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ 원장 인사 ═══════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
            Bonjour
          </p>
          <h2 className="mt-3 font-serif-kr text-2xl sm:text-3xl font-light text-[#3a3045]">
            안녕하세요, {CLINIC.name}입니다
          </h2>
          <div className="my-8 mx-auto w-10 hair-rule" />
          <p className="quote-mark font-serif-kr text-base sm:text-lg text-[#3a3045] leading-loose font-light">
            {CLINIC.doctor.shortMsg}.
            <br />
            정직하고 투명한 상담으로 함께하겠습니다
          </p>
          <div className="mt-12 pt-12 border-t border-lavender-100">
            <p className="text-sm sm:text-[15px] text-[#5a4f60] leading-loose font-light">
              <strong className="text-[#3a3045] font-medium">{CLINIC.since}년 개원</strong> 이래 한 자리를 지켜오며
              <br />
              지역민의 치아 건강을 지켜내겠다는 올곧은 철학으로 진료에 임해왔습니다.
              <br />
              급변하는 진료 환경에 끊임없이 적응하면서도,
              <br />
              환자를 향한 진심과 의료인의 양심 본분은 앞으로도 변함없이 지켜나가겠습니다.
            </p>
            <p className="mt-8 font-serif-kr text-[#3a3045]">
              <span className="text-xs text-lavender-500 tracking-wider mr-2">대표원장</span>
              {CLINIC.doctor.name}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ 통계 ═══════════════════════════ */}
      <section className="py-16 sm:py-20 lavender-wash">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
              En chiffres
            </p>
            <h2 className="mt-2 font-serif-kr text-2xl sm:text-3xl font-light text-[#3a3045]">
              숫자로 본 {CLINIC.name}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {CLINIC.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="num-plate text-5xl sm:text-6xl leading-none">
                  {s.value}
                  <span className="text-xl sm:text-2xl text-lavender-400 ml-0.5 font-serif-en not-italic">
                    {s.suffix}
                  </span>
                </div>
                <div className="mt-3 text-xs sm:text-sm text-[#5a4f60] tracking-wider font-serif-kr">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WHY US ═══════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
              Pourquoi nous
            </p>
            <h2 className="mt-3 font-serif-kr text-3xl sm:text-4xl font-light text-[#3a3045]">
              {CLINIC.name}을 선택하는
              <br />
              <span className="font-serif-en italic">trois</span>
              <span className="hand-highlight"> 세 가지 이유</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {CLINIC.whyUs.map((item) => (
              <div key={item.num} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-lavender-100 mb-6 relative">
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center text-5xl text-lavender-400">
                        ✦
                      </div>
                    }
                  />
                  <div className="absolute top-4 left-4 num-plate text-4xl text-white drop-shadow-lg">
                    {item.num}
                  </div>
                </div>
                <h3 className="font-serif-kr text-xl font-medium text-[#3a3045] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5a4f60] leading-loose font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ 진료 분야 ═══════════════════════════ */}
      <section className="py-24 sm:py-32 bg-lavender-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
              Soins
            </p>
            <h2 className="mt-3 font-serif-kr text-3xl sm:text-4xl font-light text-[#3a3045]">
              어떤 치료가 필요하세요?
            </h2>
            <p className="mt-4 text-sm text-[#5a4f60] font-light">
              관심 있는 분야를 선택해 1:1 상담을 받아보세요
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLINIC.services.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-3xl p-7 card-soft hover:card-deep transition-shadow"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-lavender-50 overflow-hidden flex items-center justify-center">
                    <SmartImage
                      src={s.icon}
                      alt={s.title}
                      className="w-full h-full object-contain p-2"
                      fallback={<span className="text-2xl">🦷</span>}
                    />
                  </div>
                  <span className="text-[10px] font-serif-kr text-lavender-700 bg-lavender-100 px-2.5 py-1 rounded-full tracking-wider">
                    {s.tag}
                  </span>
                </div>
                <p className="font-serif-en italic text-xs text-lavender-500 tracking-widest uppercase">
                  {s.slogan}
                </p>
                <h3 className="mt-1 font-serif-kr text-lg font-medium text-[#3a3045]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-[#5a4f60] leading-relaxed font-light">
                  {s.desc}
                </p>
                <Link
                  href="/booking"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-serif-kr tracking-wider text-[#3a3045] hover:text-lavender-700"
                >
                  상담 받기
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ 치료 사례 (Before/After) ═══════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-lavender-100 aspect-[4/4.8]">
                <SmartImage
                  src="/images/cases/case-orthodontic.jpg"
                  alt="교정 치료 Before / After"
                  className="w-full h-full object-cover"
                  fallback={
                    <div className="w-full h-full flex items-center justify-center text-lavender-400 text-5xl">
                      Before / After
                    </div>
                  }
                />
              </div>
            </div>
            <div>
              <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
                Cas cliniques
              </p>
              <h2 className="mt-3 font-serif-kr text-3xl sm:text-4xl font-light text-[#3a3045] leading-tight">
                실제 사례로 보는
                <br />
                <span className="font-serif-en italic">Avant</span>
                <span className="text-[#5a4f60]"> · </span>
                <span className="font-serif-en italic">Après</span>
              </h2>
              <p className="mt-6 text-sm text-[#5a4f60] leading-loose font-light max-w-md">
                환자분의 동의를 받아 공개하는 실제 치료 사례입니다.
                개인의 구강 상태에 따라 결과는 다를 수 있으며,
                부작용이 발생할 수 있습니다.
              </p>
              <div className="mt-8 p-5 bg-lavender-50 rounded-2xl border-l-2 border-lavender-300">
                <p className="text-xs text-[#5a4f60] leading-relaxed font-light italic">
                  * 본 사례는 환자분의 사전 서면 동의를 받아 게시한 자료이며,
                  치료 결과는 개인의 구강 상태 및 관리 정도에 따라 다를 수 있습니다.
                </p>
              </div>
              <Link
                href="/booking"
                className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#3a3045]/35 text-[#3a3045] hover:bg-[#3a3045]/[0.04] transition-colors font-serif-kr text-sm tracking-[0.15em]"
              >
                내 치료 계획 상담 받기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ 시설 둘러보기 ═══════════════════════════ */}
      <section className="py-24 sm:py-32 lavender-wash">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
              Espace
            </p>
            <h2 className="mt-3 font-serif-kr text-3xl sm:text-4xl font-light text-[#3a3045]">
              병원 둘러보기
            </h2>
            <p className="mt-4 text-sm text-[#5a4f60] font-light">
              환자분이 편안하게 머무실 수 있도록 따뜻하게 꾸몄어요
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {["room-1", "room-2", "room-3", "room-4"].map((f, idx) => (
              <div
                key={f}
                className="aspect-[3/4] overflow-hidden rounded-2xl bg-lavender-100 group"
              >
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
        </div>
      </section>

      {/* ═══════════════════════════ 환자 후기 ═══════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
              Témoignages
            </p>
            <h2 className="mt-3 font-serif-kr text-3xl sm:text-4xl font-light text-[#3a3045]">
              환자분의 이야기
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CLINIC.reviews.map((r) => (
              <article
                key={r.name + r.treatment}
                className="bg-lavender-50 rounded-3xl p-7 card-soft"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-lavender-200">
                    <SmartImage
                      src={r.photo}
                      alt={r.name}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="w-full h-full flex items-center justify-center text-lavender-500">
                          ✦
                        </div>
                      }
                    />
                  </div>
                  <div>
                    <p className="font-serif-kr text-sm font-medium text-[#3a3045]">
                      {r.name}
                    </p>
                    <p className="text-[11px] text-[#5a4f60] tracking-wider">
                      {r.age} · {r.treatment}
                    </p>
                  </div>
                </div>
                <p className="quote-mark text-sm text-[#3a3045] leading-loose font-light">
                  {r.excerpt}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-[11px] text-[#5a4f60]/60 italic">
            * 게시된 후기는 환자분의 서면 동의를 받은 자료이며, 개인에 따라 효과·만족도가 다를 수 있습니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ 의료진 ═══════════════════════════ */}
      <section className="py-24 sm:py-32 lavender-wash">
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
              <p className="mt-2 text-sm font-serif-kr text-lavender-700">
                {CLINIC.doctor.title}
              </p>

              <div className="mt-8 p-6 bg-white rounded-2xl border-l-2 border-lavender-300">
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

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#3a3045]/35 text-[#3a3045] hover:bg-[#3a3045]/[0.04] transition-colors font-serif-kr text-sm tracking-[0.15em]"
              >
                병원 더 둘러보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ 최신 소식 ═══════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
                Actualités
              </p>
              <h2 className="mt-3 font-serif-kr text-3xl sm:text-4xl font-light text-[#3a3045]">
                최신 소식
              </h2>
            </div>
            <Link
              href="/news"
              className="text-xs font-serif-kr tracking-wider text-[#3a3045] hover:text-lavender-700 border-b border-[#3a3045]/30 pb-1"
            >
              전체 보기 →
            </Link>
          </div>
          {recentNews.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentNews.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <p className="text-[#5a4f60] text-center">아직 등록된 소식이 없어요.</p>
          )}
        </div>
      </section>

      {/* ═══════════════════════════ 치과 지식 ═══════════════════════════ */}
      <section className="py-24 sm:py-32 bg-lavender-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
                Conseils
              </p>
              <h2 className="mt-3 font-serif-kr text-3xl sm:text-4xl font-light text-[#3a3045]">
                알아두면 좋은 치과 이야기
              </h2>
            </div>
            <Link
              href="/knowledge"
              className="text-xs font-serif-kr tracking-wider text-[#3a3045] hover:text-lavender-700 border-b border-[#3a3045]/30 pb-1"
            >
              더 읽기 →
            </Link>
          </div>
          {recentKnowledge.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentKnowledge.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <p className="text-[#5a4f60] text-center">아직 등록된 글이 없어요.</p>
          )}
        </div>
      </section>

      {/* ═══════════════════════════ CTA ═══════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#3a3045] text-white relative overflow-hidden">
        <div className="absolute inset-0 monet-grain opacity-30 pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-lavender-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-lavender-400/10 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-300 uppercase">
            À bientôt
          </p>
          <h2 className="mt-4 font-serif-kr text-3xl sm:text-4xl font-light leading-tight">
            건강한 미소, 지금 시작해도
            <br />
            <span className="font-serif-en italic text-lavender-200">
              늦지 않아요.
            </span>
          </h2>
          <p className="mt-6 text-sm text-lavender-100/80 leading-loose font-light">
            가벼운 검진부터 부담 없이 시작해 보세요.
            <br />
            첫 방문 X-ray + 1:1 상담은 무료입니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-9 py-4 rounded-full bg-white text-[#3a3045] hover:bg-lavender-100 transition-colors font-serif-kr text-sm tracking-[0.18em]"
            >
              상담 신청 →
            </Link>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="px-9 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors font-serif-en italic"
            >
              {CLINIC.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
