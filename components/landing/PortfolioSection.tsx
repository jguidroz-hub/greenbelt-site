"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type Category = "All" | "Security" | "DevTools" | "E-Commerce" | "SaaS" | "AI/ML" | "Analytics" | "Operations";

interface Venture {
  name: string;
  tagline: string;
  url: string;
  pfi: number;
  category: Category;
}

const ventures: Venture[] = [
  // Security
  { name: "PluginGuard AI", tagline: "Proactive WordPress plugin security audits", url: "https://pluginguard-ai-proactive-wordpress.vercel.app", pfi: 79, category: "Security" },
  { name: "PhishGuard", tagline: "Advanced SharePoint phishing detection for enterprise", url: "https://phishguard-advanced-sharepoint-phis.vercel.app", pfi: 83, category: "Security" },
  { name: "DMARC Guardian", tagline: "Automated email authentication & reputation monitoring", url: "https://dmarc-guardian-automated-email-auth.vercel.app", pfi: 83, category: "Security" },
  { name: "SecureCode AI", tagline: "Automated code security scanner for SQL injection & XSS", url: "https://securecode-ai-automated-code-security-scanner-for-bl0cu3nfx.vercel.app", pfi: 83, category: "Security" },
  { name: "VulnPriority", tagline: "Smart vulnerability prioritization for container security", url: "https://vulnpriority-smart-vulnerability-prioritization-for-4khxecnim.vercel.app", pfi: 83, category: "Security" },

  // DevTools
  { name: "BugWhisper", tagline: "Slack-native bug reporting and triage", url: "https://bugwhisper-slack.vercel.app", pfi: 76, category: "DevTools" },
  { name: "IncidentGuard AI", tagline: "Smart alert deduplication for DevOps teams", url: "https://incidentguard-ai-smart-alert-dedupl.vercel.app", pfi: 83, category: "DevTools" },
  { name: "StaticShield", tagline: "AI-powered contextual filter for static analysis in CI/CD", url: "https://staticshield-ai-powered-contextual-filter-for-static-a4z7uf1ac.vercel.app", pfi: 83, category: "DevTools" },
  { name: "PixelPerfect QA", tagline: "AI visual regression testing for web apps", url: "https://pixelperfect-qa-ai-visual-regressio.vercel.app", pfi: 83, category: "DevTools" },
  { name: "Contextual PR Buddy", tagline: "AI-powered pre-review insights for developers", url: "https://contextual-pr-buddy-ai-powered-pre.vercel.app", pfi: 83, category: "DevTools" },
  { name: "ER Diagram AI", tagline: "AI-powered database ER diagram generator", url: "https://erdiagramai-ai-powered-database-er.vercel.app", pfi: 83, category: "DevTools" },
  { name: "SchemaCraft", tagline: "Visual database schema designer and SQL generator", url: "https://schemacraft.vercel.app", pfi: 76, category: "DevTools" },

  // E-Commerce
  { name: "ScriptShift", tagline: "Migrate Shopify Scripts before the June 2026 deadline", url: "https://scriptshift.vercel.app", pfi: 76, category: "E-Commerce" },
  { name: "BoostCart", tagline: "Smart upsells for BigCommerce stores", url: "https://boostcart-upsell.vercel.app", pfi: 76, category: "E-Commerce" },
  { name: "Inventory Watchdog", tagline: "Never miss a stockout again — Shopify inventory alerts", url: "https://inventory-watchdog.vercel.app", pfi: 74, category: "E-Commerce" },
  { name: "DupeDetect AI", tagline: "Automated product similarity monitoring for brands", url: "https://dupedetect-ai-automated-product-sim.vercel.app", pfi: 83, category: "E-Commerce" },
  { name: "ProductPalette AI", tagline: "AI-powered e-commerce product recoloring", url: "https://productpalette-ai-e-commerce-recolo.vercel.app", pfi: 83, category: "E-Commerce" },
  { name: "ReferralFlow AI", tagline: "Automated e-commerce referral & affiliate programs", url: "https://referralflow-ai-automated-e-commerce-referral-affili-1925u5zye.vercel.app", pfi: 83, category: "E-Commerce" },

  // SaaS / Productivity
  { name: "HabitStreak", tagline: "Build lasting habits with streak tracking & social sharing", url: "https://habitstreak.io", pfi: 81, category: "SaaS" },
  { name: "TaxPal", tagline: "Estimated tax calculator, expense tracker & reports for freelancers", url: "https://taxpal-kappa.vercel.app", pfi: 82, category: "SaaS" },
  { name: "FounderCounsel", tagline: "AI legal document generator for startups — NDAs, SAFEs & more", url: "https://foundercounsel.vercel.app", pfi: 79, category: "SaaS" },
  { name: "ComplianceOS", tagline: "Interactive GDPR, CCPA, SOC 2 & HIPAA compliance checklists", url: "https://complianceos-eight.vercel.app", pfi: 78, category: "Operations" },
  { name: "OutcomeFlow", tagline: "Value-based billing analytics for SaaS teams", url: "https://outcomeflow-rho.vercel.app", pfi: 77, category: "Analytics" },
  { name: "StudioOS", tagline: "All-in-one studio management for creators", url: "https://studioos-delta.vercel.app", pfi: 75, category: "SaaS" },
  { name: "OnboardFlow", tagline: "Interactive remote training modules for teams", url: "https://onboardflow-interactive-remote-trai.vercel.app", pfi: 83, category: "SaaS" },
  { name: "PIP Pilot", tagline: "AI-assisted performance improvement plans", url: "https://pip-pilot-ai-assisted-performance-i.vercel.app", pfi: 83, category: "SaaS" },
  { name: "PropCare", tagline: "Landlord maintenance manager for property owners", url: "https://propcare-landlord-maintenance-manag.vercel.app", pfi: 83, category: "SaaS" },

  // AI/ML
  { name: "RAGEvalGen", tagline: "AI-powered RAG evaluation dataset generator", url: "https://ragevalgen-ai-powered-rag-evaluation-dataset-generat-ostwjx12n.vercel.app", pfi: 83, category: "AI/ML" },
  { name: "Multi-LLM Failover", tagline: "Automatic LLM failover and load balancing", url: "https://multi-llm-failover.vercel.app", pfi: 76, category: "AI/ML" },
  { name: "GPU Vector Search", tagline: "Managed ANNS infrastructure for AI applications", url: "https://gpu-vector-search-service-managed-a.vercel.app", pfi: 83, category: "AI/ML" },
  { name: "CleanDOM", tagline: "AI-powered DOM pruning for web agents", url: "https://cleandom-ai-powered-dom-pruning-for.vercel.app", pfi: 83, category: "AI/ML" },

  // Analytics & Operations
  { name: "KPI Compass", tagline: "Track the metrics that matter for your business", url: "https://kpi-compass-three.vercel.app", pfi: 75, category: "Analytics" },
  { name: "Sales Data Cleaner", tagline: "AI-powered CRM data hygiene automation", url: "https://gb-sales-data-cleaner-ai-powered-cr.vercel.app", pfi: 76, category: "Analytics" },
  { name: "SEO Scout", tagline: "AI technical SEO audit & fix recommendations", url: "https://seo-scout-ai-technical-seo-audit-a8xaypy5f-greenbelt.vercel.app", pfi: 83, category: "Analytics" },
  { name: "FabricFlow AI", tagline: "Power BI capacity optimizer for data teams", url: "https://fabricflow-ai-power-bi-capacity-opt.vercel.app", pfi: 83, category: "Analytics" },
  { name: "PreMarketEdge", tagline: "Automated daily trading briefings & market intel", url: "https://premarketedge-automated-daily-tradi.vercel.app", pfi: 83, category: "Analytics" },

  // Operations
  { name: "ComplianceOS", tagline: "AI regulatory requirement tracker for small business", url: "https://complianceos-ai-regulatory-requirem.vercel.app", pfi: 83, category: "Operations" },
  { name: "HazmatDocs AI", tagline: "Simplify & translate bills of lading/SDS for drivers", url: "https://hazmatdocs-ai-simplify-translate-bi.vercel.app", pfi: 83, category: "Operations" },
  { name: "HOS Pilot", tagline: "AI-driven truck driver schedule optimizer", url: "https://hos-pilot-ai-driven-truck-driver-sc.vercel.app", pfi: 83, category: "Operations" },
  { name: "GlobalGuide AI", tagline: "Corporate travel safety briefings powered by AI", url: "https://globalguide-ai-corporate-travel-saf.vercel.app", pfi: 83, category: "Operations" },
  { name: "WeatherOps", tagline: "Hyperlocal weather API for field service optimization", url: "https://weatherops-hyperlocal-weather-api-for-field-service-brdhzthms.vercel.app", pfi: 83, category: "Operations" },
];

const categories: Category[] = ["All", "Security", "DevTools", "E-Commerce", "SaaS", "AI/ML", "Analytics", "Operations"];

function getPfiColor(pfi: number) {
  if (pfi >= 80) return "text-emerald-400";
  if (pfi >= 70) return "text-cyan-400";
  return "text-amber-400";
}

function getPfiBarColor(pfi: number) {
  if (pfi >= 80) return "from-emerald-500 to-emerald-400";
  if (pfi >= 70) return "from-cyan-500 to-cyan-400";
  return "from-amber-500 to-amber-400";
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All" ? ventures : ventures.filter(v => v.category === activeCategory);
  const counts = Object.fromEntries(categories.map(c => [c, c === "All" ? ventures.length : ventures.filter(v => v.category === c).length]));

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-background to-muted/30" id="portfolio">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="mb-4">Live Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {ventures.length} products shipped. <span className="text-muted-foreground">All live in production.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every product below was discovered, validated against 12,000+ startup failure patterns,
            then built and deployed by our autonomous factory.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat} <span className="opacity-60 ml-1">{counts[cat]}</span>
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((v) => (
            <a key={v.name} href={v.url} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="pt-5 pb-4 px-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-semibold text-sm truncate">{v.name}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <Badge variant="outline" className="text-[10px] flex-shrink-0 ml-2">{v.category}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.tagline}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${getPfiBarColor(v.pfi)}`} style={{ width: `${v.pfi}%` }} />
                    </div>
                    <span className={`text-[10px] font-mono font-bold ${getPfiColor(v.pfi)}`}>PFI {v.pfi}</span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Showing {filtered.length} of {ventures.length} shipped products · {ventures.length + 100}+ more validated and in pipeline
          </p>
          <p className="text-xs text-muted-foreground/70">
            PFI (Production Fitness Index) — our 100-point quality score measuring auth, billing, error handling, security, and more
          </p>
        </div>
      </div>
    </section>
  );
}
