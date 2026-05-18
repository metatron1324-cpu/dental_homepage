import { CLINIC } from "@/lib/clinic";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#3a3045] text-white relative overflow-hidden">
      <div className="absolute inset-0 monet-grain opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-300 uppercase">
            Happy Dental Clinic
          </p>
          <h3 className="mt-2 font-serif-kr text-xl font-light">{CLINIC.name}</h3>
          <p className="mt-3 text-lavender-100/80 leading-relaxed font-light">
            {CLINIC.tagline}
          </p>
        </div>

        <div>
          <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-300 uppercase mb-3">
            Heures
          </p>
          <ul className="space-y-2 text-lavender-100/80 font-serif-kr font-light">
            <li>평일 · {CLINIC.hours.weekday}</li>
            <li>토요일 · {CLINIC.hours.saturday}</li>
            <li>{CLINIC.hours.holiday}</li>
          </ul>
        </div>

        <div>
          <p className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-300 uppercase mb-3">
            Contact
          </p>
          <ul className="space-y-2 text-lavender-100/80 font-light">
            <li>
              <a
                href={`tel:${CLINIC.phoneTel}`}
                className="font-serif-en italic hover:text-white transition-colors"
              >
                {CLINIC.phone}
              </a>
            </li>
            <li className="font-serif-kr">{CLINIC.address}</li>
            <li>
              <a
                href={`mailto:${CLINIC.email}`}
                className="hover:text-white transition-colors"
              >
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-[11px] text-lavender-300/60 tracking-wider">
        © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
      </div>
    </footer>
  );
}
