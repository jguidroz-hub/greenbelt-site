import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Wrench, Shield, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog — Greenbelt",
  description: "Product updates and improvements to the Greenbelt AI Venture Studio.",
};

type ChangeType = "feature" | "improvement" | "fix" | "security";

const changeTypeConfig: Record<ChangeType, { icon: typeof Sparkles; color: string; label: string }> = {
  feature: { icon: Sparkles, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20", label: "New Feature" },
  improvement: { icon: Rocket, color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20", label: "Improvement" },
  fix: { icon: Wrench, color: "text-amber-500 bg-amber-500/10 border-amber-500/20", label: "Bug Fix" },
  security: { icon: Shield, color: "text-red-500 bg-red-500/10 border-red-500/20", label: "Security" },
};

const changelog: { date: string; type: ChangeType; title: string; description: string }[] = [
  { date: "February 10, 2026", type: "feature", title: "Per-Report Pricing & Annual Plans", description: "Buy a single Guardian Debate ($14.99) or Venture Verdict ($49.99) without subscribing. Annual plans save up to 37%." },
  { date: "February 10, 2026", type: "feature", title: "PDF Report Export", description: "Every Guardian Debate and Venture Verdict now generates a shareable, printable report with full verdict details, debate transcript, and research dossier." },
  { date: "February 10, 2026", type: "feature", title: "Idea Generator & Library", description: "Don't have an idea? Browse our curated idea library or generate personalized suggestions based on your skills and budget." },
  { date: "February 10, 2026", type: "feature", title: "Trend Dashboard", description: "See what categories and ecosystems are trending across all submissions. Real-time analytics from our validation data." },
  { date: "February 10, 2026", type: "improvement", title: "Tier Rebrand: Quick Check → Guardian Debate → Venture Verdict", description: "Tier names now communicate what you get. Quick Check (free), Guardian Debate ($29/mo), Venture Verdict ($199/mo)." },
  { date: "February 10, 2026", type: "security", title: "Email Verification (OTP)", description: "Paid features now require email verification via one-time code. Prevents abuse of API-heavy Guardian debates." },
  { date: "February 10, 2026", type: "feature", title: "Usage Caps & Margin Protection", description: "Monthly and daily limits ensure sustainable pricing. Guardian Debate: 30/month. Venture Verdict: 50/month." },
  { date: "February 9, 2026", type: "feature", title: "Greenbelt Guardian — Full Adversarial Debate", description: "Builder vs Guardian vs Adjudicator. Your idea faces a structured multi-round debate against 1,310+ failure patterns. Results emailed within 7 minutes." },
  { date: "February 9, 2026", type: "feature", title: "Venture Verdict — Research Dossier", description: "Enterprise-tier validations now include a full research dossier with competitor intelligence, market sizing, and trend analysis before the debate begins." },
  { date: "February 9, 2026", type: "feature", title: "Launch: VaaS Public Beta", description: "Greenbelt's validation technology is now available as a standalone product. Free tier validates against common failure patterns. Paid tiers unlock full adversarial debate." },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-cyan-500/30 text-cyan-500">Changelog</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">What&apos;s New</h1>
          <p className="text-lg text-muted-foreground">Product updates and improvements.</p>
        </div>
        <div className="space-y-4">
          {changelog.map((entry, i) => {
            const config = changeTypeConfig[entry.type];
            const Icon = config.icon;
            return (
              <Card key={i} className="bg-background/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className={`text-xs ${config.color}`}>
                      <Icon className="w-3 h-3 mr-1" />
                      {config.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{entry.date}</span>
                  </div>
                  <CardTitle className="text-lg">{entry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{entry.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
