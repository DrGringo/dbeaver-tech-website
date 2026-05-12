import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import FounderMemo from "@/components/FounderMemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-start pt-3 pb-2 px-2 w-full">
      <Header />
      <Hero />
      <TrustedCompanies />
      <FounderMemo />
      <Footer />
    </div>
  );
}
