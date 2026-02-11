import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Brain, Factory, Rocket } from "lucide-react";

const pipelineSteps = [
  {
    icon: Target,
    title: "1. Validate",
    description: "Your idea faces adversarial AI. Builder argues for it. Guardian tries to kill it. Only strong ideas survive.",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    icon: Brain,
    title: "2. Research",
    description: "Market sizing, competitor intelligence, failure pattern matching against 1,310+ real startup post-mortems.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Factory,
    title: "3. Build",
    description: "Our autonomous factory generates production-grade code from hardened templates. Auth, billing, and infrastructure included.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Rocket,
    title: "4. Ship",
    description: "Deployed to production with Stripe billing, custom domains, and analytics. Revenue-ready from day one.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

export default function HowWeValidateSection() {
  return (
    <section className="px-6 py-20 bg-muted/30" id="how-it-works">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="mb-4">From Idea to Revenue</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Full Pipeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Greenbelt handles the entire journey. Start with a free validation — if your idea survives, we build and ship it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pipelineSteps.map((step, index) => (
            <Card key={index} className="hover-elevate">
              <CardContent className="p-6 flex gap-4">
                <div className={`w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center shrink-0`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
