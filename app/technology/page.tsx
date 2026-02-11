import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Brain, Zap, Database, Target, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology — Greenbelt",
  description: "How Greenbelt's adversarial AI validation works under the hood. Builder vs Guardian debate process explained.",
};

const VAAS_URL = "https://vaas-greenbelt.vercel.app";

const capabilities = [
  { icon: Shield, title: "Adversarial Validation", description: "Your idea faces a structured debate between a Builder agent (who argues for it) and a Guardian agent (who tries to kill it). An Adjudicator weighs the evidence and delivers a verdict." },
  { icon: Database, title: "1,310+ Failure Patterns", description: "Our graveyard database contains over 1,310 documented startup failure patterns extracted from real post-mortems. Every validation checks your idea against this dataset." },
  { icon: Brain, title: "Multi-Model Consensus", description: "We don't rely on a single AI model. Guardian Debate and Venture Verdict tiers use multiple frontier models to reduce bias and hallucination." },
  { icon: Target, title: "Market Intelligence", description: "Venture Verdict tier enriches your idea with real-time market research — competitor analysis, market sizing, and trend data from multiple sources." },
  { icon: BarChart3, title: "Confidence Scoring", description: "Every validation returns a confidence percentage backed by specific evidence. Not vibes — data points you can act on." },
  { icon: Zap, title: "Validate → Build Pipeline", description: "Ideas that pass validation can flow directly into our build pipeline. We don't just tell you if it's good — we can build it too." },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />

      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="px-4 py-1 text-sm border-emerald-500/30 text-emerald-500">How It Works Under the Hood</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Adversarial AI That Tells You the Truth</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most idea validators give you what you want to hear. Greenbelt&apos;s Guardian system is designed to find every reason your idea might fail — so you can fix the weak spots before they cost you money.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <Card key={cap.title} className="bg-background/50 border-border/50">
                <CardContent className="pt-6 space-y-3">
                  <cap.icon className="w-8 h-8 text-emerald-500" />
                  <h3 className="text-lg font-semibold">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">The Debate Process</h2>
          <div className="text-left space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">1. Pattern Matching</h3>
              <p>Your idea is checked against 1,310+ failure patterns from real startup post-mortems. This catches obvious red flags in seconds — for free.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">2. Guardian Debate (Pro)</h3>
              <p>A Builder agent constructs the strongest case for your idea. A Guardian agent systematically attacks it — citing market data, competitor analysis, and historical failures. An Adjudicator weighs both sides and delivers a verdict with specific proceed conditions.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">3. Research Dossier (Enterprise)</h3>
              <p>Before the debate even starts, we compile a full research dossier — real-time competitor intelligence, market sizing, trend analysis, and regulatory landscape. The Guardian uses this data in the debate, so the verdict is grounded in current market reality.</p>
            </div>
          </div>
          <a href={VAAS_URL} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-0 mt-4">
              Try It Free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
