"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="footer" className="relative bg-[#302220] flex flex-col gap-2 items-start overflow-hidden p-8 sm:p-[60px] rounded-xl w-full">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{ width: "1281px", height: "1281px", left: "-95px", top: "-641px", transform: "rotate(-90deg)" }}>
          <div className="size-full" style={{ WebkitMaskImage: `url('/figma-assets/footer-mask1.svg')`, maskImage: `url('/figma-assets/footer-mask1.svg')`, WebkitMaskSize: "cover", maskSize: "cover" }}>
            <Image src="/figma-assets/footer-mask2.svg" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[30px] items-start w-full">
        {/* Logo + socials */}
        <div className="flex flex-col gap-[10px] w-full">
          <div className="flex items-center justify-between w-full">
            <Image src="/figma-assets/header-logo.svg" alt="DBeaver Tech" width={128} height={20} />
            <div className="flex gap-4 items-center">
              {[
                { src: "/figma-assets/twitter-icon.svg", alt: "Twitter/X", href: "https://x.com/dbeaver_news" },
                { src: "/figma-assets/facebook-icon.svg", alt: "Facebook", href: "https://www.facebook.com/DBeaverCorporation" },
                { src: "/figma-assets/telegram-icon.svg", alt: "Telegram", href: "https://t.me/dbeaver_official" },
              ].map((icon) => (
                <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer" className="border border-white/20 flex items-center justify-center p-2.5 rounded-lg size-10 hover:bg-white/10 transition-colors" aria-label={icon.alt}>
                  <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>

        {/* Columns */}
        <div className="flex flex-col lg:flex-row lg:gap-[140px] gap-8 items-start w-full">
          {/* Contacts + copyright */}
          <div className="flex flex-col gap-10 items-start w-full lg:w-[340px]">
            <div className="flex flex-col gap-2.5 items-start text-white text-sm">
              <p className="font-black leading-[1.4]">{t.footer.contactsTitle}</p>
              <div className="font-normal leading-[1.4] space-y-0">
                <p>{t.footer.address}</p>
                <p>Email: <a href="mailto:dbeaver.tech@gmail.com" className="hover:underline">dbeaver.tech@gmail.com</a></p>
                <p>Tel: <a href="tel:+36703257128" className="hover:underline">+36 70 325 7128</a></p>
              </div>
            </div>
            <p className="text-black text-xs font-normal">{t.footer.copyright}</p>
          </div>

          {/* Product links */}
          <div className="flex flex-row lg:flex-col flex-1 gap-3 lg:gap-4 lg:items-end">
            {[
              { label: "DBeaver Pro", href: "https://dbeaver.com/" },
              { label: "DBeaver Community", href: "https://dbeaver.io/" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="border border-white/20 flex items-center justify-center px-5 h-10 rounded-full text-white text-[15px] font-normal whitespace-nowrap hover:bg-white/10 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
