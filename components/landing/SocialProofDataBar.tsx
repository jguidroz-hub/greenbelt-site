"use client";

import { useState, useEffect } from "react";
import { Radio, Skull, AlertTriangle, Lightbulb, Loader2 } from "lucide-react";

interface ProductionStats {
  signalScoutsActive: number;
  failedStartupsIndexed: number;
  failurePatternsDetected: number;
  hypothesesTested: number;
}

function formatNumber(num: number): string {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
}

const API_URL = "https://greenbelt-orchestrator-production.up.railway.app";

export default function SocialProofDataBar() {
  const [stats, setStats] = useState<ProductionStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function loadStats() {
      try {
        const res = await fetch(`${API_URL}/api/system/stats`);
        if (mounted && res.ok) setStats(await res.json());
      } catch { /* ignore */ }
      if (mounted) setIsLoading(false);
    }
    loadStats();
    const interval = setInterval(loadStats, 60000);
    return () => { mounted = false; clearInterval(interval); };
  }, []);

  const metrics = [
    { icon: Radio, value: isLoading ? null : (stats?.signalScoutsActive ?? "—"), label: "Signal Scouts Active", color: "text-emerald-400", bgColor: "bg-emerald-500/10" },
    { icon: Skull, value: isLoading ? null : (stats?.failedStartupsIndexed ? formatNumber(stats.failedStartupsIndexed) : "—"), label: "Failed Startups Indexed", color: "text-rose-400", bgColor: "bg-rose-500/10" },
    { icon: AlertTriangle, value: isLoading ? null : (stats?.failurePatternsDetected ?? "—"), label: "Failure Patterns Detected", color: "text-amber-400", bgColor: "bg-amber-500/10" },
    { icon: Lightbulb, value: isLoading ? null : (stats?.hypothesesTested ? formatNumber(stats.hypothesesTested) : "—"), label: "Hypotheses Tested", color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  ];

  return (
    <section className="px-6 py-10 border-y border-primary/10 bg-gradient-to-r from-muted/30 via-primary/[0.02] to-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className={`p-2 rounded-full ${metric.bgColor}`}>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${metric.color} tabular-nums`}>
                  {metric.value === null ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : metric.value}
                </div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
