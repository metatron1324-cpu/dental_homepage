import { CLINIC } from "@/lib/clinic";
import SmartImage from "@/components/SmartImage";

export const metadata = {
  title: `오시는 길 - ${CLINIC.name}`,
  description: `${CLINIC.name} 위치 안내: ${CLINIC.address}`,
};

export default function LocationPage() {
  const kakaoSearchUrl = `https://map.kakao.com/?q=${encodeURIComponent(CLINIC.address)}`;
  const naverSearchUrl = `https://map.naver.com/v5/search/${encodeURIComponent(CLINIC.address)}`;

  return (
    <div className="bg-white">
      <section className="lavender-wash py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif-en italic text-sm tracking-[0.3em] text-lavender-500 uppercase">
            Plan d'accès
          </p>
          <h1 className="mt-4 font-serif-kr text-3xl sm:text-5xl font-light text-[#3a3045]">
            편하게 찾아오세요
          </h1>
          <div className="my-8 mx-auto w-12 hair-rule" />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl overflow-hidden card-soft border border-lavender-100">
            <div className="aspect-[16/10] bg-lavender-100">
              <SmartImage
                src="/images/location/exterior.jpg"
                alt={`${CLINIC.name} 외관`}
                className="w-full h-full object-cover"
                fallback={
                  <div className="w-full h-full flex flex-col items-center justify-center text-[#3a3045]">
                    <div className="text-5xl mb-3">📍</div>
                    <div className="font-serif-kr">{CLINIC.address}</div>
                  </div>
                }
              />
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <a
              href={kakaoSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl border border-[#3a3045]/30 text-[#3a3045] hover:bg-lavender-50 transition-colors text-center font-serif-kr text-sm tracking-wider"
            >
              카카오맵에서 길찾기 →
            </a>
            <a
              href={naverSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl bg-[#3a3045] text-white hover:bg-lavender-700 transition-colors text-center font-serif-kr text-sm tracking-wider"
            >
              네이버지도에서 길찾기 →
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { en: "Adresse", ko: "주소", val: CLINIC.address },
              { en: "Téléphone", ko: "전화", val: CLINIC.phone, tel: true },
              {
                en: "Heures",
                ko: "진료 시간",
                val: `평일 ${CLINIC.hours.weekday} / 토 ${CLINIC.hours.saturday} / ${CLINIC.hours.holiday}`,
              },
              { en: "Parking", ko: "주차", val: "건물 지하 주차장, 진료 환자 2시간 무료" },
            ].map((c) => (
              <div key={c.ko} className="p-6 bg-lavender-50 rounded-2xl">
                <p className="font-serif-en italic text-[10px] tracking-[0.3em] text-lavender-500 uppercase mb-1">
                  {c.en}
                </p>
                <h3 className="font-serif-kr text-sm font-medium text-[#3a3045] mb-2">
                  {c.ko}
                </h3>
                {c.tel ? (
                  <a
                    href={`tel:${CLINIC.phoneTel}`}
                    className="font-serif-en italic text-[#3a3045] hover:text-lavender-700"
                  >
                    {c.val}
                  </a>
                ) : (
                  <p className="text-sm text-[#5a4f60] leading-relaxed font-light">{c.val}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
