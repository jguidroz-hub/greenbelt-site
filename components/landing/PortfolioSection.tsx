"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, CheckCircle2, AlertTriangle, XCircle, Wrench, Loader2 } from "lucide-react";

type Status = "live" | "building" | "broken" | "killed";
type Category = "All" | "SaaS" | "E-Commerce" | "DevTools" | "AI/ML" | "Analytics" | "Operations";

interface Venture {
  name: string;
  tagline: string;
  url: string | null;
  status: Status;
  statusNote: string;
  category: string;
  hasStripe: boolean;
  pfi: number | null;
}

interface PortfolioStats {
  totalInDb: number;
  active: number;
  inPipeline: number;
  rejected: number;
  killed: number;
  deployed: number;
  building: number;
  withStripe: number;
}

interface PortfolioData {
  portfolio: Venture[];
  stats: PortfolioStats;
  lastUpdated: string;
}

const categories: Category[] = ["All", "SaaS", "E-Commerce", "DevTools", "AI/ML", "Analytics", "Operations"];

const statusConfig = {
  live: { icon: CheckCircle2, label: "Live", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
  building: { icon: Wrench, label: "Building", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
  broken: { icon: AlertTriangle, label: "Broken", color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
  killed: { icon: XCircle, label: "Killed", color: "text-zinc-500", bg: "bg-zinc-400/10", border: "border-zinc-400/20" },
};

type StatusFilter = "All" | Status;

export default function PortfolioSection() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("All");

  useEffect(() => {
    fetch("/api/portfolio")
      .then(r => r.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-20 bg-gradient-to-b from-background to-muted/30" id="portfolio">
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading portfolio...</span>
        </div>
      </section>
    );
  }

  if (!data) return null;

  const { portfolio, stats } = data;

  const filtered = portfolio
    .filter(v => activeCategory === "All" || v.category === activeCategory)
    .filter(v => activeStatus === "All" || v.status === activeStatus);

  const statusCounts = {
    live: portfolio.filter(v => v.status === "live").length,
    building: portfolio.filter(v => v.status === "building").length,
    broken: portfolio.filter(v => v.status === "broken").length,
    killed: portfolio.filter(v => v.status === "killed").length,
  };

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-background to-muted/30" id="portfolio">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="mb-4">Building in Open</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {portfolio.length} ventures. <span className="text-muted-foreground">No BS.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We show everything — what&apos;s live, what&apos;s broken, and what we killed.
            This is what an autonomous software factory actually looks like.
          </p>
        </div>

        {/* Stats bar — includes DB pipeline stats */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-muted-foreground"><strong className="text-foreground">{statusCounts.live}</strong> live</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-400" />
            <span className="text-muted-foreground"><strong className="text-foreground">{statusCounts.building}</strong> building</span>
          </div>
          {statusCounts.killed > 0 && (
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-zinc-500" />
              <span className="text-muted-foreground"><strong className="text-foreground">{statusCounts.killed}</strong> killed</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.withStripe}</strong> with billing</span>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.inPipeline}</strong> in pipeline</span>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.totalInDb}</strong> total evaluated</span>
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
            const count = portfolio.filter(v =>
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
            Showing {filtered.length} of {portfolio.length} ventures · Updated live from our pipeline database
          </p>
          <div className="max-w-xl mx-auto text-xs text-muted-foreground/70 space-y-1">
            <p>
              PFI (Production Fitness Index) — our 100-point quality score measuring auth, billing, error handling, security, and more.
              Not every product has been scored yet.
            </p>
            <p>
              Our pipeline has evaluated {stats.totalInDb} venture ideas total. {stats.inPipeline} are currently in the validation pipeline.
              This page updates automatically as ventures progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
