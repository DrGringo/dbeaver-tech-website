"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

const awardIcons = [
  { src: "/figma-assets/image21.png", width: 36, height: 46 },
  { src: "/figma-assets/image16.png", width: 42, height: 36 },
  { src: "/figma-assets/image17.png", width: 32, height: 34 },
  { src: "/figma-assets/image18.png", width: 68, height: 34 },
];

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative z-10 flex flex-col w-full overflow-hidden
      min-h-[60vh] px-4 pt-6 pb-6
      lg:h-[90vh] lg:px-8 lg:pt-[60px] lg:pb-[10px] lg:items-end">

      {/* Award badges — top-right on desktop, top-left on mobile */}
      <div className="relative z-10 bg-white border border-black/20 flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded self-start lg:self-auto">
        {awardIcons.map((icon, i) => (
          <Image key={i} src={icon.src} alt="" width={icon.width} height={icon.height} className="object-contain" />
        ))}
      </div>

      {/* Text content — left side */}
      <div className="relative z-10 flex flex-1 w-full items-center mt-6 lg:mt-0 lg:justify-start">
        <div className="flex flex-col gap-8 sm:gap-10 items-start w-full lg:max-w-[570px]">
          <div className="flex flex-col gap-4 sm:gap-5 items-start w-full">
            <div className="bg-[rgba(48,34,32,0.1)] border border-[rgba(48,34,32,0.3)] flex items-center justify-center px-5 py-2.5 rounded h-9">
              <p className="text-white text-[11px] font-normal whitespace-nowrap">{t.hero.badge}</p>
            </div>
            <div className="font-bold text-[40px] sm:text-[64px] leading-[0.9]">
              <span className="text-white">{t.hero.headline1}</span>
              <span className="text-[#cb4926]">{t.hero.headline2}</span>
            </div>
            <p className="text-[#302220] text-[13px] font-normal leading-5">{t.hero.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="https://dbeaver.com/" target="_blank" rel="noopener noreferrer" className="bg-[#302220] border border-[#302220] flex items-center justify-center px-5 h-10 rounded-full text-white text-[15px] font-normal whitespace-nowrap hover:opacity-80 transition-opacity">
              {t.hero.proTools}
            </a>
            <a href="https://dbeaver.io/" target="_blank" rel="noopener noreferrer" className="border border-[#302220] flex items-center justify-center px-5 h-10 rounded-full text-[#302220] text-[15px] font-normal whitespace-nowrap hover:bg-black/5 transition-colors">
              {t.hero.openSource}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
