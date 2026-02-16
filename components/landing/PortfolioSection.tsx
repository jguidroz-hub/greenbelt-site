import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ventures = [
  { name: "HabitStreak", tagline: "Build lasting habits with streak tracking & social accountability", url: "https://habitstreak.io", pfi: 81, category: "Productivity" },
  { name: "TaxPal", tagline: "Estimated tax calculator, expense tracker & quarterly payments for freelancers", url: "https://taxpal-kappa.vercel.app", pfi: 82, category: "Finance" },
  { name: "FounderCounsel", tagline: "AI-powered legal document generator for startups — NDAs, SAFEs, and more", url: "https://foundercounsel.vercel.app", pfi: 79, category: "Legal" },
  { name: "ComplianceOS", tagline: "Interactive GDPR, CCPA, SOC 2 & HIPAA compliance checklists for small business", url: "https://complianceos-eight.vercel.app", pfi: 78, category: "Compliance" },
  { name: "OutcomeFlow", tagline: "Value-based billing analytics — connect product usage to revenue outcomes", url: "https://outcomeflow-rho.vercel.app", pfi: 77, category: "Analytics" },
  { name: "ScriptShift", tagline: "Migrate Shopify Scripts before the June 2026 deadline", url: "https://scriptshift.vercel.app", pfi: 76, category: "Shopify" },
  { name: "BoostCart", tagline: "Smart upsells for BigCommerce stores", url: "https://boostcart-upsell.vercel.app", pfi: 76, category: "BigCommerce" },
  { name: "StudioOS", tagline: "All-in-one studio management for architects & designers", url: "https://studioos-delta.vercel.app", pfi: 75, category: "SaaS" },
  { name: "Inventory Watchdog", tagline: "Real-time Shopify stock monitoring & reorder alerts", url: "https://shopify-inventory-watchdog.vercel.app", pfi: 74, category: "Shopify" },
];

function getPfiColor(pfi: number) {
  if (pfi >= 80) return "text-emerald-400";
  if (pfi >= 70) return "text-cyan-400";
  return "text-amber-400";
}

export default function PortfolioSection() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-background to-muted/30" id="portfolio">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="mb-4">Shipped Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built by our factory. <span className="text-muted-foreground">Live in production.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every product below was validated by the same AI that scores your ideas,
            then built and deployed by our autonomous factory.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((v) => (
            <a key={v.name} href={v.url} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{v.name}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <Badge variant="outline" className="text-xs">{v.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{v.tagline}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" style={{ width: `${v.pfi}%` }} />
                    </div>
                    <span className={`text-xs font-mono font-bold ${getPfiColor(v.pfi)}`}>PFI {v.pfi}</span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          PFI (Production Fitness Index) — our 100-point quality score measuring auth, billing, error handling, security, and more
        </p>
      </div>
    </section>
  );
}
