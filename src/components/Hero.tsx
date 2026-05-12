"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

// Positions from Figma node 44:61 (1440px design width, ~730px section height)
// Icon circles are 100px; left/top are center coords → left=px/1440*100vw, top=px/730*100%
const floatingIcons = [
  { src: "/figma-assets/icon-cloud.svg",     w: 60, h: 38, left: "25.3vw", top: "59.6%" }, // CloudBeaver – 44:432
  { src: "/figma-assets/icon-le.svg",        w: 60, h: 59, left: "29.4vw", top: "32.9%" }, // LE          – 44:487
  { src: "/figma-assets/icon-code.svg",      w: 60, h: 50, left: "42.8vw", top: "67.1%" }, // Code        – 44:366
  { src: "/figma-assets/icon-ue.svg",        w: 60, h: 59, left: "51.8vw", top: "44.5%" }, // UE          – 44:399
  { src: "/figma-assets/icon-ee.svg",        w: 60, h: 59, left: "48.3vw", top: "24.1%" }, // EE          – 44:415
  { src: "/figma-assets/icon-community.svg", w: 60, h: 60, left: "69.2vw", top: "31.5%" }, // Community   – 44:407
];

const awardIcons = [
  { src: "/figma-assets/image21.png", width: 36, height: 46 },
  { src: "/figma-assets/image16.png", width: 42, height: 36 },
  { src: "/figma-assets/image17.png", width: 32, height: 34 },
  { src: "/figma-assets/image18.png", width: 68, height: 34 },
];

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex flex-col w-full overflow-hidden
      /* mobile: natural height, no gap */
      min-h-[60vh] px-4 pt-6 pb-6
      /* desktop: 90vh with top padding */
      lg:h-[90vh] lg:px-8 lg:pt-[60px] lg:pb-[10px]">

      {/* Background mesh — rotated 180° to match Figma */}
      <div className="absolute inset-0 pointer-events-none rotate-180">
        <Image src="/figma-assets/mask-group.svg" alt="" fill className="object-cover opacity-60" />
      </div>

      {/* Floating icons — desktop only, vw/% positioned */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-full size-[100px] flex items-center justify-center shadow-[0px_8px_25px_rgba(0,0,0,0.15),0px_4px_2px_rgba(0,0,0,0.1)]"
            style={{ left: icon.left, top: icon.top }}
          >
            <Image src={icon.src} alt="" width={icon.w} height={icon.h} />
          </div>
        ))}
      </div>

      {/* Award badges */}
      <div className="relative z-10 bg-white border border-black/20 flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded self-start">
        {awardIcons.map((icon, i) => (
          <Image key={i} src={icon.src} alt="" width={icon.width} height={icon.height} className="object-contain" />
        ))}
      </div>

      {/* Hero card — fills remaining height, sticks to bottom-right on desktop */}
      <div className="relative z-10 flex flex-1 w-full items-end lg:justify-end mt-6 lg:mt-0">
        <div className="bg-[#302220] flex flex-col gap-6 sm:gap-10 items-start px-6 sm:px-10 py-6 sm:py-[30px] rounded-xl shadow-[0px_8px_25px_rgba(0,0,0,0.15),0px_4px_2px_rgba(0,0,0,0.1)] w-full lg:max-w-[570px]">
          <div className="flex flex-col gap-4 sm:gap-5 items-start w-full">
            <div className="bg-white/[0.06] border border-white/[0.15] flex items-center justify-center px-5 py-2.5 rounded h-9">
              <p className="text-white/50 text-[11px] font-normal whitespace-nowrap">{t.hero.badge}</p>
            </div>
            <div className="text-white font-bold text-3xl sm:text-[40px] leading-[0.9]">
              <span>{t.hero.headline1}</span>
              <span className="text-[#cb4926]">{t.hero.headline2}</span>
            </div>
            <p className="text-white text-[13px] font-normal leading-5">{t.hero.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="https://dbeaver.com/" target="_blank" rel="noopener noreferrer" className="bg-white border border-white/20 flex items-center justify-center px-5 h-10 rounded-full text-[#302220] text-[15px] font-normal whitespace-nowrap hover:bg-gray-100 transition-colors">
              {t.hero.proTools}
            </a>
            <a href="https://dbeaver.io/" target="_blank" rel="noopener noreferrer" className="border border-white/20 flex items-center justify-center px-5 h-10 rounded-full text-white text-[15px] font-normal whitespace-nowrap hover:bg-white/10 transition-colors">
              {t.hero.openSource}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
