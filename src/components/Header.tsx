"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="relative z-10 flex flex-col items-start justify-between px-4 sm:px-8 shrink-0 w-full">
      <div className="flex items-center w-full h-[40px]">
        {/* Left nav */}
        <nav className="hidden sm:flex flex-1 gap-7 items-center text-white text-sm font-normal">
          <Link href="#memo" className="hover:text-white/70 transition-colors whitespace-nowrap">
            {t.nav.memo}
          </Link>
          <Link href="#footer" className="hover:text-white/70 transition-colors whitespace-nowrap">
            {t.nav.contacts}
          </Link>
        </nav>

        {/* Center logo */}
        <div className="flex flex-1 sm:justify-center items-center h-6">
          <Image
            src="/figma-assets/header-logo.svg"
            alt="DBeaver Tech Kft"
            width={128}
            height={20}
            priority
          />
        </div>

        {/* Right: language toggle + mobile nav */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <nav className="flex sm:hidden gap-4 items-center text-white text-sm font-normal">
            <Link href="#memo" className="hover:text-white/70 transition-colors">{t.nav.memo}</Link>
            <Link href="#footer" className="hover:text-white/70 transition-colors">{t.nav.contacts}</Link>
          </nav>
          <div className="hidden flex gap-1 items-center bg-[#e9e9e9] p-0.5 rounded">
            <button
              onClick={() => setLang("hu")}
              className={`flex items-center justify-center px-1 py-1 rounded text-sm font-light leading-[1.1] transition-colors ${lang === "hu" ? "bg-[#39393b] text-white" : "text-[#808080]"}`}
            >
              Hun
            </button>
            <button
              onClick={() => setLang("en")}
              className={`flex items-center justify-center px-1 py-1 rounded text-sm font-light leading-[1.1] transition-colors ${lang === "en" ? "bg-[#39393b] text-white" : "text-[#808080]"}`}
            >
              En
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/20" />
    </header>
  );
}
