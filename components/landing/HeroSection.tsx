"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Factory, Rocket, Sparkles } from "lucide-react";

const VAAS_URL = "https://vaas.178.156.240.80.sslip.io";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const features = [
    { icon: Shield, text: "Adversarial AI validation", color: "text-rose-400" },
    { icon: Factory, text: "Autonomous product factory", color: "text-cyan-400" },
    { icon: Rocket, text: "40+ live products shipped", color: "text-emerald-400" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-background">
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl top-[5%] left-[5%] opacity-40" style={{ background: "rgba(52, 211, 153, 0.25)" }} />
        <div className="absolute w-[700px] h-[700px] rounded-full blur-3xl top-[15%] right-0 opacity-40" style={{ background: "rgba(34, 211, 238, 0.22)" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl bottom-[15%] left-[15%] opacity-40" style={{ background: "rgba(168, 85, 247, 0.18)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        {/* Badge */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-sm font-medium text-primary backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          AI Venture Studio
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            The AI venture studio that{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              validates, builds, and ships
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Greenbelt is an autonomous venture studio. We test your idea against 1,310+ real startup failure patterns,
            then build and ship it if it survives. From concept to revenue-ready product.
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 text-sm"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <f.icon className={`w-4 h-4 ${f.color}`} />
              <span className="text-muted-foreground">{f.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a href={VAAS_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="text-lg px-10 py-7 h-auto group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-cyan-500 to-primary hover:from-emerald-600 hover:via-cyan-600 hover:to-primary/90 border-0 shadow-xl shadow-primary/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Validate Your Idea — Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
          <a href="#portfolio">
            <Button size="lg" variant="outline" className="text-lg px-8 py-7 h-auto">
              See What We&apos;ve Built
            </Button>
          </a>
        </motion.div>

        <p className="text-sm text-muted-foreground">
          Free validation · No signup required · Build services from $499
        </p>
      </div>
    </section>
  );
}
