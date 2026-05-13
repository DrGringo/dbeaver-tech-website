"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

function CvsLogo() {
  return (
    <div className="relative w-[130px] h-4 overflow-hidden shrink-0">
      <div className="absolute inset-[0.27%_52.19%_-0.27%_0]">
        <Image src="/figma-assets/cvs-logo-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute inset-[2.69%_3.11%_0.74%_48.85%]">
        <Image src="/figma-assets/cvs-logo-2.svg" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

const LogoCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white flex h-[80px] sm:h-[90px] w-full lg:w-[170px] items-center justify-center rounded-xl">
    {children}
  </div>
);

export default function TrustedCompanies() {
  const { t } = useLang();

  return (
    <section className="flex flex-col gap-6 sm:gap-[26px] items-center py-12 sm:py-[60px] px-4 sm:px-8 w-full mt-[97px] lg:mt-0" style={{ marginTop: "97px" }}>
      <div className="flex flex-col gap-0.5 items-center w-full">
        <p className="text-[#302220] text-[11px] font-bold tracking-[2.5px] text-center uppercase">
          {t.trusted.heading}
        </p>
        <div className="bg-[#d14827] h-0.5 w-[60px]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row gap-4 sm:gap-6 items-center justify-center w-full lg:w-auto mx-auto">
        <LogoCard><Image src="/figma-assets/amazon-logo.svg" alt="Amazon" width={100} height={30} /></LogoCard>
        <LogoCard><Image src="/figma-assets/mastercard-logo.svg" alt="Mastercard" width={69} height={54} /></LogoCard>
        <LogoCard><CvsLogo /></LogoCard>
        <LogoCard><Image src="/figma-assets/apple-logo.svg" alt="Apple" width={40} height={46} /></LogoCard>
        <LogoCard><Image src="/figma-assets/tmobile-logo.svg" alt="T-Mobile" width={110} height={22} /></LogoCard>
      </div>

      <p className="text-[#302220] text-[13px] font-normal text-center">{t.trusted.subtext}</p>
    </section>
  );
}
