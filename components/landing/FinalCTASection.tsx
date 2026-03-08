import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, CheckCircle2, Sparkles } from "lucide-react";

const VAAS_URL = "https://gauntlet.projectgreenbelt.com";

export default function FinalCTASection() {
  return (
    <section className="px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-primary/[0.03] to-muted/30" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Stop guessing.{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Start validating.
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every day you spend building an unvalidated idea is a day you could lose.
          Test yours in 30 seconds — <span className="text-foreground font-medium">completely free.</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
          {[
            { icon: Shield, text: "Adversarial validation", color: "text-rose-400" },
            { icon: Zap, text: "30-second results", color: "text-amber-400" },
            { icon: CheckCircle2, text: "No signup required", color: "text-emerald-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href={VAAS_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="text-lg px-10 py-7 h-auto group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-cyan-500 to-primary hover:from-emerald-600 hover:via-cyan-600 hover:to-primary/90 border-0 shadow-xl shadow-primary/30"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Validate Your Idea Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
        </div>

        <p className="text-sm text-muted-foreground">Free tier available · No credit card required</p>
      </div>
    </section>
  );
}
