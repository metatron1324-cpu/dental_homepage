import { CLINIC } from "@/lib/clinic";

export const metadata = {
  title: `예약/상담 - ${CLINIC.name}`,
  description: "전화, 카카오톡 채널, 네이버 예약으로 편하게 문의하세요.",
};

export default function BookingPage() {
  const kakaoChannel = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL;
  const naverBooking = process.env.NEXT_PUBLIC_NAVER_BOOKING_URL;

  return (
    <div className="bg-white">
      <section className="lavender-wash py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
            Rendez-vous
          </p>
          <h1 className="mt-4 font-serif-kr text-3xl sm:text-5xl font-light text-[#3a3045]">
            편한 방법으로 연락주세요
          </h1>
          <div className="my-8 mx-auto w-12 hair-rule" />
          <p className="text-[#5a4f60] leading-loose font-light">
            전화 · 카카오톡 · 네이버 예약 어느 쪽이든 좋아요
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="bg-[#3a3045] text-white rounded-3xl p-8 hover:bg-lavender-700 transition-colors group"
            >
              <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-300 uppercase">
                Appel
              </p>
              <h3 className="mt-3 font-serif-kr text-xl font-light">전화 걸기</h3>
              <p className="mt-2 text-sm text-lavender-100/80 font-light">
                가장 빠른 방법이에요
              </p>
              <div className="mt-6 font-serif-en italic text-2xl">{CLINIC.phone}</div>
            </a>

            <a
              href={kakaoChannel || "#"}
              target={kakaoChannel ? "_blank" : undefined}
              rel={kakaoChannel ? "noopener noreferrer" : undefined}
              className={`rounded-3xl p-8 transition-colors ${
                kakaoChannel
                  ? "bg-yellow-300 hover:bg-yellow-400 text-[#3a3045]"
                  : "bg-lavender-50 text-[#5a4f60] cursor-not-allowed"
              }`}
            >
              <p className="font-serif-en italic text-xs tracking-[0.3em] uppercase opacity-70">
                Chat
              </p>
              <h3 className="mt-3 font-serif-kr text-xl font-light">카카오톡 상담</h3>
              <p className="mt-2 text-sm font-light opacity-80">
                {kakaoChannel ? "1:1 채팅으로 편하게" : "준비 중입니다"}
              </p>
              <div className="mt-6 font-serif-kr text-sm tracking-wider">
                {kakaoChannel ? "채널 열기 →" : "곧 오픈"}
              </div>
            </a>

            <a
              href={naverBooking || "#"}
              target={naverBooking ? "_blank" : undefined}
              rel={naverBooking ? "noopener noreferrer" : undefined}
              className={`rounded-3xl p-8 transition-colors ${
                naverBooking
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-lavender-50 text-[#5a4f60] cursor-not-allowed"
              }`}
            >
              <p className="font-serif-en italic text-xs tracking-[0.3em] uppercase opacity-70">
                Réservation
              </p>
              <h3 className="mt-3 font-serif-kr text-xl font-light">네이버 예약</h3>
              <p className="mt-2 text-sm font-light opacity-80">
                {naverBooking ? "원하는 시간 직접 선택" : "준비 중입니다"}
              </p>
              <div className="mt-6 font-serif-kr text-sm tracking-wider">
                {naverBooking ? "예약 페이지 →" : "곧 오픈"}
              </div>
            </a>

            <div className="bg-lavender-50 rounded-3xl p-8 text-[#3a3045]">
              <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-500 uppercase">
                Visite
              </p>
              <h3 className="mt-3 font-serif-kr text-xl font-light">직접 방문</h3>
              <p className="mt-2 text-sm text-[#5a4f60] font-light">
                진료 시간 내 언제든 환영합니다
              </p>
              <div className="mt-6 font-serif-kr text-sm text-[#5a4f60]">
                {CLINIC.address}
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-lavender-50 rounded-2xl border-l-2 border-lavender-300">
            <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-500 uppercase mb-3">
              Notice
            </p>
            <h3 className="font-serif-kr text-base font-medium text-[#3a3045] mb-4">
              예약 전 알아두실 점
            </h3>
            <ul className="space-y-2.5 text-sm text-[#5a4f60] font-light leading-relaxed">
              <li className="flex gap-3">
                <span className="text-lavender-400 mt-1.5 text-[8px]">●</span>
                <span>첫 방문이시면 신분증을 지참해 주세요 (건강보험 적용)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lavender-400 mt-1.5 text-[8px]">●</span>
                <span>예약 변경/취소는 가능하면 하루 전까지 전화로 알려주세요</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lavender-400 mt-1.5 text-[8px]">●</span>
                <span>당일 통증이 심한 응급 환자분은 전화 후 바로 와주세요. 우선 진료해 드립니다</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
