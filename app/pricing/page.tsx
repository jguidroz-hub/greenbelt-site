import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import PricingSection from "@/components/landing/PricingSection";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pricing — Greenbelt",
  description:
    "Free idea validation forever. Upgrade to Guardian Debate ($29/mo) or Venture Verdict ($199/mo) for adversarial AI analysis and full market research dossiers.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <div className="px-6 pt-16 pb-4 text-center space-y-4">
        <Badge variant="outline" className="px-4 py-1 text-sm border-emerald-500/30 text-emerald-500">
          Transparent Pricing
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          Validate free. Build when you&apos;re ready.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          No surprise fees. Free tier is free forever — no credit card required.
          Upgrade only when you need adversarial AI debate or full market research.
        </p>
      </div>
      <PricingSection />
      <LandingFooter />
    </div>
  );
}
