import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import PortfolioSection from "@/components/landing/PortfolioSection";

export const metadata: Metadata = {
  title: "Portfolio — Greenbelt",
  description:
    "Every venture we've built, validated, or killed — live deployment status, billing integration, and production fitness scores. Building in the open.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <div className="pt-6">
        <PortfolioSection />
      </div>
      <LandingFooter />
    </div>
  );
}
