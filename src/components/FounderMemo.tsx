"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

export default function FounderMemo() {
  const { t } = useLang();

  return (
    <section id="memo" className="relative flex items-center justify-center overflow-hidden px-4 sm:px-8 py-12 sm:py-[60px] w-full min-h-[90vh]">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/figma-assets/asset3x.png" alt="" fill className="object-cover blur-[100px] opacity-60" />
      </div>

      <div className="relative z-10 bg-white shadow-[0px_8px_25px_rgba(0,0,0,0.15),0px_4px_2px_rgba(0,0,0,0.1)] flex flex-col gap-8 sm:gap-10 items-start p-8 sm:p-[60px] rounded-xl w-full max-w-[628px]">
        <div className="flex flex-col gap-1 text-[#959595] text-[13px] font-normal">
          <p>{t.memo.label1}</p>
          <p>{t.memo.label2}</p>
        </div>

        <div className="flex flex-col gap-5 items-start text-[#302220] w-full">
          <h2 className="font-bold text-[17px] w-full">{t.memo.title}</h2>
          <div className="text-[16px] font-normal leading-normal space-y-4 w-full">
            <p>{t.memo.body1}</p>
            <p>{t.memo.body2}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-[104px] w-full">
          <div className="flex items-center gap-1">
            <div className="relative flex items-center p-2 shrink-0">
              <div className="relative size-11">
                <Image src="/figma-assets/ellipse.svg" alt="" fill className="object-cover" />
              </div>
              <Image src="/figma-assets/sergei.png" alt="Serge Rider" width={44} height={44} className="absolute left-2 top-2 size-11 rounded-full object-cover" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[#302220] text-[15px] font-bold">Serge Rider</p>
              <p className="text-[#959595] text-[13px] font-normal">{t.memo.cofounder}</p>
            </div>
          </div>
          <div className="h-[70px] w-[224px] overflow-hidden shrink-0">
            <Image src="/figma-assets/signature.svg" alt="Signature" width={224} height={70} />
          </div>
        </div>
      </div>
    </section>
  );
}
