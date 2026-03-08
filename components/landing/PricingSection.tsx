import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Zap, Building2, Rocket, Hammer, Crown } from "lucide-react";

const VAAS_URL = "https://gauntlet.projectgreenbelt.com";

const validateTiers = [
  {
    name: "Quick Check", price: "$0", period: "forever", description: "Test any idea instantly",
    icon: Rocket, iconColor: "text-muted-foreground", highlighted: false,
    features: ["5 validations per hour", "Instant pattern matching (30 patterns)", "Confidence score & risk breakdown", "Category & ecosystem detection"],
    cta: "Start Validating", ctaVariant: "outline" as const,
  },
  {
    name: "Guardian Debate", price: "$29", period: "/month", description: "Put your idea on trial",
    icon: Zap, iconColor: "text-primary", highlighted: true,
    features: ["Unlimited instant validations", "⚔️ Full Guardian debate (3 rounds)", "Builder vs Guardian adversarial AI", "Graveyard matching (1,310+ failures)", "Full report emailed + PDF export", "API access", "Or $14.99 per report (no subscription)", "Annual: $249/yr (save 28%)"],
    cta: "Go Pro", ctaVariant: "default" as const,
  },
  {
    name: "Venture Verdict", price: "$199", period: "/month", description: "Know your market before you build",
    icon: Building2, iconColor: "text-purple-400", highlighted: false,
    features: ["Everything in Pro, plus:", "📊 Perplexity market research", "TAM/SAM/SOM market sizing", "Live competitor analysis", "Revenue model assessment", "Full research dossier + PDF export", "Or $49.99 per report (no subscription)", "Annual: $1,499/yr (save 37%)"],
    cta: "Contact Us", ctaVariant: "default" as const,
  },
];

const buildTiers = [
  { name: "Starter", price: "$499", description: "Landing page + email capture", icon: Hammer, features: ["Branded landing page", "Email capture", "Analytics dashboard", "Deployed in 48 hours"] },
  { name: "Pro", price: "$1,499", description: "Full MVP with billing", icon: Zap, features: ["Complete web app", "User auth & billing", "Admin dashboard", "Custom domain + hosting"] },
  { name: "Enterprise", price: "$4,999", description: "Production-grade SaaS", icon: Crown, features: ["Everything in Pro", "Marketplace integrations", "API layer", "3 months support"] },
];

export default function PricingSection() {
  return (
    <section className="px-6 py-20" id="pricing">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Validate Pricing */}
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mb-4">Validate</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Know before you build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your startup idea against real failure patterns. Free forever, upgrade when you&apos;re ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {validateTiers.map((tier) => (
              <Card key={tier.name} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${tier.highlighted ? "border-primary shadow-lg shadow-primary/20 scale-[1.02]" : "hover:border-primary/50"}`}>
                {tier.highlighted && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500" />}
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <tier.icon className={`w-5 h-5 ${tier.iconColor}`} />
                    <span className="font-semibold">{tier.name}</span>
                    {tier.highlighted && <Badge className="ml-auto bg-primary/10 text-primary border-primary/30">Popular</Badge>}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <a href={VAAS_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant={tier.ctaVariant} className={`w-full group ${tier.highlighted ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-0" : ""}`}>
                      {tier.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Build Pricing */}
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mb-4">Build</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Validated? <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Let us build it.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI factory builds production-grade software from validated ideas. Same technology that powers our own portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {buildTiers.map((tier) => (
              <Card key={tier.name} className="hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <tier.icon className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold">{tier.name}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <a href={`${VAAS_URL}/build`} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full group">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
