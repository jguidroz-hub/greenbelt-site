"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, CheckCircle2, AlertTriangle, XCircle, Wrench } from "lucide-react";

type Status = "live" | "building" | "broken" | "killed";
type Category = "All" | "SaaS" | "E-Commerce" | "DevTools" | "AI/ML" | "Analytics" | "Operations";

interface Venture {
  name: string;
  tagline: string;
  url: string | null;
  status: Status;
  statusNote: string;
  category: Category;
  hasStripe: boolean;
  pfi: number | null;
}

const ventures: Venture[] = [
  // === LIVE — Actually working, deployed, accessible ===
  {
    name: "HabitStreak",
    tagline: "Build lasting habits with streak tracking & social accountability",
    url: "https://habitstreak.io",
    status: "live",
    statusNote: "Live with Stripe billing. Our first end-to-end product.",
    category: "SaaS",
    hasStripe: true,
    pfi: 81,
  },
  {
    name: "Gauntlet",
    tagline: "AI-powered startup idea validator — test before you build",
    url: "https://gauntlet-eight.vercel.app",
    status: "live",
    statusNote: "Live on Vercel. Launched Feb 19.",
    category: "AI/ML",
    hasStripe: false,
    pfi: null,
  },
  {
    name: "QuickFlip",
    tagline: "Shift scheduling & staff management for restaurants",
    url: "https://quickflip-six.vercel.app",
    status: "live",
    statusNote: "Live with demo data. Being pitched to first customer.",
    category: "SaaS",
    hasStripe: false,
    pfi: null,
  },
  {
    name: "KPI Compass",
    tagline: "Track the metrics that matter for your business",
    url: "https://kpi-compass-three.vercel.app",
    status: "live",
    statusNote: "Live on Vercel + Coolify. Functional dashboard.",
    category: "Analytics",
    hasStripe: false,
    pfi: 75,
  },
  {
    name: "StudioOS",
    tagline: "All-in-one studio management for creators",
    url: "https://studioos-delta.vercel.app",
    status: "live",
    statusNote: "Live on Vercel. Needs env vars on Coolify.",
    category: "SaaS",
    hasStripe: false,
    pfi: 75,
  },
  {
    name: "SchemaCraft",
    tagline: "Visual database schema designer and SQL generator",
    url: "https://schemacraft.vercel.app",
    status: "live",
    statusNote: "Live on Vercel. Static tool — no billing yet.",
    category: "DevTools",
    hasStripe: false,
    pfi: 76,
  },
  {
    name: "SlackTone AI",
    tagline: "AI message tone adjustment for Slack",
    url: "https://slacktone-ai.vercel.app",
    status: "live",
    statusNote: "Slack app installed. Needs marketplace submission.",
    category: "SaaS",
    hasStripe: false,
    pfi: null,
  },
  {
    name: "SkipTheFee",
    tagline: "Find restaurants with no delivery fees near you",
    url: "https://skipthefee.vercel.app",
    status: "live",
    statusNote: "Live on Vercel. Data enrichment ongoing.",
    category: "SaaS",
    hasStripe: false,
    pfi: null,
  },

  // === BUILDING — Code exists, being migrated or fixed ===
  {
    name: "SpecGen AI",
    tagline: "AI-powered technical spec generator for dev teams",
    url: null,
    status: "building",
    statusNote: "Stripe wired ($49/$149/$499). Migrating to Coolify — needs env vars.",
    category: "DevTools",
    hasStripe: true,
    pfi: null,
  },
  {
    name: "PunchList AI",
    tagline: "AI construction punch list manager",
    url: null,
    status: "building",
    statusNote: "Stripe wired ($29/$99/$299). Migrating to Coolify — needs env vars.",
    category: "Operations",
    hasStripe: true,
    pfi: null,
  },
  {
    name: "ScriptShift",
    tagline: "Migrate Shopify Scripts before the June 2026 deadline",
    url: null,
    status: "building",
    statusNote: "Shopify app. Migrating to Coolify.",
    category: "E-Commerce",
    hasStripe: false,
    pfi: 76,
  },
  {
    name: "BoostCart",
    tagline: "Smart upsells for BigCommerce stores",
    url: null,
    status: "building",
    statusNote: "BigCommerce app. Migrating to Coolify.",
    category: "E-Commerce",
    hasStripe: false,
    pfi: 76,
  },
  {
    name: "Inventory Watchdog",
    tagline: "Shopify inventory alerts — never miss a stockout",
    url: null,
    status: "building",
    statusNote: "Shopify app. Broken on Vercel, migrating to Coolify.",
    category: "E-Commerce",
    hasStripe: false,
    pfi: 74,
  },
  {
    name: "Sales Data Cleaner",
    tagline: "AI-powered CRM data hygiene automation",
    url: null,
    status: "building",
    statusNote: "Migrating to Coolify. Needs env vars.",
    category: "Analytics",
    hasStripe: false,
    pfi: 76,
  },
  {
    name: "VaaS",
    tagline: "Validation-as-a-Service — API access to our startup validation engine",
    url: null,
    status: "building",
    statusNote: "API product. Migrating to Coolify.",
    category: "AI/ML",
    hasStripe: false,
    pfi: null,
  },
  {
    name: "ScreenClean",
    tagline: "Chrome extension — clean up screenshots before sharing",
    url: null,
    status: "building",
    statusNote: "Chrome Web Store submission rejected. v1.1.0 ready for resubmission.",
    category: "DevTools",
    hasStripe: false,
    pfi: null,
  },
  {
    name: "BugWhisper",
    tagline: "VS Code extension — inline bug reporting",
    url: null,
    status: "building",
    statusNote: "VSIX packaged. Needs Azure DevOps PAT to publish.",
    category: "DevTools",
    hasStripe: false,
    pfi: null,
  },
  {
    name: "CodeDocs AI",
    tagline: "VS Code extension — AI-powered code documentation",
    url: null,
    status: "building",
    statusNote: "VSIX packaged. Needs Azure DevOps PAT to publish.",
    category: "DevTools",
    hasStripe: false,
    pfi: null,
  },

  // === KILLED — Validated out or market closed ===
  {
    name: "Agentic Store Optimizer",
    tagline: "Shopify agentic commerce optimization",
    url: null,
    status: "killed",
    statusNote: "Killed Jan 29. PayPal acquiring Cymbio for same space. Enterprise-only play.",
    category: "E-Commerce",
    hasStripe: false,
    pfi: null,
  },
  {
    name: "AgentBridge",
    tagline: "Shopify agent commerce bridge",
    url: null,
    status: "killed",
    statusNote: "Paused Jan 29. Discovery-dependent, signal-to-noise too high.",
    category: "E-Commerce",
    hasStripe: false,
    pfi: null,
  },
];

const categories: Category[] = ["All", "SaaS", "E-Commerce", "DevTools", "AI/ML", "Analytics", "Operations"];

const statusConfig = {
  live: { icon: CheckCircle2, label: "Live", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
  building: { icon: Wrench, label: "Building", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
  broken: { icon: AlertTriangle, label: "Broken", color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
  killed: { icon: XCircle, label: "Killed", color: "text-zinc-500", bg: "bg-zinc-400/10", border: "border-zinc-400/20" },
};

type StatusFilter = "All" | Status;

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("All");

  const filtered = ventures
    .filter(v => activeCategory === "All" || v.category === activeCategory)
    .filter(v => activeStatus === "All" || v.status === activeStatus);

  const statusCounts = {
    live: ventures.filter(v => v.status === "live").length,
    building: ventures.filter(v => v.status === "building").length,
    broken: ventures.filter(v => v.status === "broken").length,
    killed: ventures.filter(v => v.status === "killed").length,
  };

  const withStripe = ventures.filter(v => v.hasStripe).length;

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-background to-muted/30" id="portfolio">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="mb-4">Building in Open</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {ventures.length} ventures. <span className="text-muted-foreground">No BS.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We show everything — what&apos;s live, what&apos;s broken, and what we killed.
            This is what an autonomous software factory actually looks like.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-muted-foreground"><strong className="text-foreground">{statusCounts.live}</strong> live</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-400" />
            <span className="text-muted-foreground"><strong className="text-foreground">{statusCounts.building}</strong> building</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-zinc-500" />
            <span className="text-muted-foreground"><strong className="text-foreground">{statusCounts.killed}</strong> killed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground"><strong className="text-foreground">{withStripe}</strong> with billing</span>
          </div>
        </div>

        {/* Status filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {(["All", "live", "building", "killed"] as StatusFilter[]).map((s) => (
            <button
              key={s}
              onClick={() => setActiveStatus(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeStatus === s
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {s === "All" ? "All" : statusConfig[s].label}
            </button>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const count = ventures.filter(v =>
              (activeStatus === "All" || v.status === activeStatus) &&
              (cat === "All" || v.category === cat)
            ).length;
            if (cat !== "All" && count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat} <span className="opacity-60 ml-1">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((v) => {
            const sc = statusConfig[v.status];
            const StatusIcon = sc.icon;
            const isClickable = v.url !== null;

            const cardContent = (
              <Card className={`h-full transition-all duration-300 ${isClickable ? "hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer" : "opacity-80"} ${v.status === "killed" ? "opacity-60" : ""}`}>
                <CardContent className="pt-5 pb-4 px-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <StatusIcon className={`w-4 h-4 flex-shrink-0 ${sc.color}`} />
                      <span className={`font-semibold text-sm truncate ${v.status === "killed" ? "line-through" : ""}`}>{v.name}</span>
                      {isClickable && <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />}
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                      {v.hasStripe && <Badge variant="outline" className="text-[10px] border-emerald-400/30 text-emerald-400">💰 Stripe</Badge>}
                      <Badge variant="outline" className="text-[10px]">{v.category}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.tagline}</p>
                  <p className={`text-[11px] leading-relaxed ${sc.color}`}>{v.statusNote}</p>
                  {v.pfi !== null && (
                    <div className="flex items-center gap-2 pt-1">
                      <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${v.pfi >= 80 ? "from-emerald-500 to-emerald-400" : v.pfi >= 70 ? "from-cyan-500 to-cyan-400" : "from-amber-500 to-amber-400"}`}
                          style={{ width: `${v.pfi}%` }}
                        />
                      </div>
                      <span className={`text-[10px] font-mono font-bold ${v.pfi >= 80 ? "text-emerald-400" : v.pfi >= 70 ? "text-cyan-400" : "text-amber-400"}`}>PFI {v.pfi}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );

            return isClickable ? (
              <a key={v.name} href={v.url!} target="_blank" rel="noopener noreferrer" className="group">
                {cardContent}
              </a>
            ) : (
              <div key={v.name} className="group">
                {cardContent}
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Showing {filtered.length} of {ventures.length} ventures
          </p>
          <div className="max-w-xl mx-auto text-xs text-muted-foreground/70 space-y-1">
            <p>
              PFI (Production Fitness Index) — our 100-point quality score measuring auth, billing, error handling, security, and more.
              Not every product has been scored yet.
            </p>
            <p>
              Previously we showed 40+ products with inflated scores. We stripped it back to what&apos;s real.
              This is what building in the open actually looks like.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
