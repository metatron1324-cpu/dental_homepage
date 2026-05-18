"use client";

import { useState } from "react";
import { CLINIC } from "@/lib/clinic";

export default function QuickInquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone) {
      alert("이름과 연락처를 입력해 주세요.");
      return;
    }
    setSubmitting(true);
    const body = `[행복치과 빠른상담]\n이름: ${name}\n연락처: ${phone}`;
    const mailto = `mailto:${CLINIC.email}?subject=빠른상담신청&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setPhone("");
    }, 500);
  }

  return (
    <div className="bg-[#3a3045] text-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
      >
        <div className="flex items-baseline gap-3 sm:mr-2">
          <span className="font-serif-en italic text-xs tracking-[0.3em] text-lavender-300 uppercase">
            Consultation
          </span>
          <span className="font-serif-kr text-sm">빠른 상담 신청</span>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="성함"
          className="flex-1 bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 font-serif-kr text-sm focus:bg-white/15 focus:border-lavender-300 outline-none transition-colors"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="연락처"
          className="flex-1 bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 font-serif-kr text-sm focus:bg-white/15 focus:border-lavender-300 outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-3 bg-white text-[#3a3045] hover:bg-lavender-100 disabled:opacity-50 rounded-lg font-serif-kr text-sm tracking-[0.15em] transition-colors whitespace-nowrap"
        >
          {submitting ? "전송 중..." : "상담문의 →"}
        </button>
      </form>
    </div>
  );
}
