"use client";

import Link from "next/link";
import { useState } from "react";
import { CLINIC } from "@/lib/clinic";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-lavender-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-serif-kr text-lg sm:text-xl font-medium text-[#3a3045] group-hover:text-lavender-700 transition-colors">
            {CLINIC.name}
          </span>
          <span className="font-serif-en italic text-[10px] sm:text-xs text-lavender-500 tracking-[0.25em] uppercase">
            est. {CLINIC.since}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {CLINIC.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-serif-kr text-[#3a3045] hover:text-lavender-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${CLINIC.phoneTel}`}
            className="ml-3 px-5 py-2.5 rounded-full bg-[#3a3045] text-white text-sm font-serif-en italic hover:bg-lavender-700 transition-colors"
          >
            {CLINIC.phone}
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg hover:bg-lavender-50"
          aria-label="메뉴 열기"
        >
          <span className="block w-6 h-px bg-[#3a3045] mb-1.5" />
          <span className="block w-6 h-px bg-[#3a3045] mb-1.5" />
          <span className="block w-6 h-px bg-[#3a3045]" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-lavender-100 bg-white px-4 py-3 flex flex-col gap-1">
          {CLINIC.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-[#3a3045] font-serif-kr hover:bg-lavender-50 rounded-lg"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${CLINIC.phoneTel}`}
            className="mt-2 px-4 py-3 rounded-lg bg-[#3a3045] text-white text-center font-serif-en italic"
          >
            {CLINIC.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
