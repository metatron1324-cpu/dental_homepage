import { CLINIC } from "@/lib/clinic";

type Action = {
  href: string;
  label: string;
  hint: string;
  external?: boolean;
};

export default function RightSidebar() {
  const kakaoChannel = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL;

  const actions: Action[] = [
    { href: "/booking", label: "예약", hint: "Rendez-vous" },
    {
      href: kakaoChannel || "/booking",
      label: "카톡",
      hint: "Chat",
      external: !!kakaoChannel,
    },
    { href: "/knowledge", label: "지식", hint: "Conseils" },
    { href: "/location", label: "오시는길", hint: "Plan" },
    { href: `tel:${CLINIC.phoneTel}`, label: "전화", hint: "Appel" },
  ];

  return (
    <>
      {/* Desktop: 우측 고정 세로 stack */}
      <aside className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col">
        <div className="bg-white/95 backdrop-blur rounded-full p-2 card-soft border border-lavender-100">
          {actions.map((a, i) => (
            <a
              key={a.label}
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noopener noreferrer" : undefined}
              className={`group block w-14 py-3 text-center hover:bg-lavender-50 rounded-full transition-colors ${
                i !== actions.length - 1 ? "border-b border-lavender-100" : ""
              }`}
            >
              <div className="font-serif-en italic text-[9px] tracking-wider text-lavender-500 uppercase">
                {a.hint}
              </div>
              <div className="font-serif-kr text-[11px] text-[#3a3045] mt-0.5">
                {a.label}
              </div>
            </a>
          ))}
        </div>
        <div className="mt-3 text-center">
          <div className="font-serif-en italic text-[9px] tracking-widest text-lavender-500 uppercase">
            Heures
          </div>
          <div className="text-[10px] text-[#5a4f60] mt-1 leading-tight font-serif-kr">
            평일 9-19
            <br />
            토 9-15
          </div>
        </div>
      </aside>

      {/* Mobile: 하단 고정 bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-lavender-100 flex">
        <a
          href={`tel:${CLINIC.phoneTel}`}
          className="flex-1 flex flex-col items-center justify-center py-3 text-[#3a3045] hover:bg-lavender-50"
        >
          <span className="font-serif-en italic text-[9px] text-lavender-500 tracking-wider uppercase">
            Appel
          </span>
          <span className="text-[12px] font-serif-kr mt-0.5">전화</span>
        </a>
        <a
          href={kakaoChannel || "/booking"}
          target={kakaoChannel ? "_blank" : undefined}
          rel={kakaoChannel ? "noopener noreferrer" : undefined}
          className="flex-1 flex flex-col items-center justify-center py-3 text-[#3a3045] hover:bg-lavender-50 border-l border-lavender-100"
        >
          <span className="font-serif-en italic text-[9px] text-lavender-500 tracking-wider uppercase">
            Chat
          </span>
          <span className="text-[12px] font-serif-kr mt-0.5">카톡</span>
        </a>
        <a
          href="/location"
          className="flex-1 flex flex-col items-center justify-center py-3 text-[#3a3045] hover:bg-lavender-50 border-l border-lavender-100"
        >
          <span className="font-serif-en italic text-[9px] text-lavender-500 tracking-wider uppercase">
            Plan
          </span>
          <span className="text-[12px] font-serif-kr mt-0.5">오시는길</span>
        </a>
        <a
          href="/booking"
          className="flex-1 flex flex-col items-center justify-center py-3 bg-[#3a3045] text-white hover:bg-lavender-700"
        >
          <span className="font-serif-en italic text-[9px] text-lavender-200 tracking-wider uppercase">
            RDV
          </span>
          <span className="text-[12px] font-serif-kr mt-0.5">예약</span>
        </a>
      </nav>
      <div className="lg:hidden h-16" />
    </>
  );
}
