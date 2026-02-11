import LandingHeader from "@/components/landing/LandingHeader";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofDataBar from "@/components/landing/SocialProofDataBar";
import HowWeValidateSection from "@/components/landing/HowWeValidateSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import LandingFooter from "@/components/landing/LandingFooter";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <HeroSection />
      <SocialProofDataBar />
      <HowWeValidateSection />
      <PortfolioSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <LandingFooter />
      <MobileStickyCTA />
    </div>
  );
}
