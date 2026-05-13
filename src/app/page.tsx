import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import FounderMemo from "@/components/FounderMemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col items-start pt-3 pb-2 px-2 w-full bg-white">
      {/* Page-level gradient: brownish → white, covers header + hero */}
      <div className="absolute inset-x-0 top-0 h-[767px] bg-gradient-to-b from-[#a6958b] to-white pointer-events-none" />

      {/* Hero pattern image — desktop only, positioned right-of-center */}
      <div className="hidden lg:block absolute pointer-events-none overflow-hidden" style={{ left: "400px", top: "50px", width: "1600px", height: "calc(100vh - 50px)" }}>
        <div
          className="absolute inset-0"
          style={{
            maskImage: `url('/figma-assets/hero-mask.svg')`,
            WebkitMaskImage: `url('/figma-assets/hero-mask.svg')`,
            maskSize: "cover",
            WebkitMaskSize: "cover",
          }}
        >
          <Image src="/figma-assets/hero-bg.png" alt="" fill className="object-cover" />
        </div>
      </div>

      <Header />
      <Hero />
      <TrustedCompanies />
      <FounderMemo />
      <Footer />
    </div>
  );
}
