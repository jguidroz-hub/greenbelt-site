import { NextResponse } from "next/server";

const ORCHESTRATOR_URL = "https://greenbelt-orchestrator-production.up.railway.app";

// Cache stats for 60 seconds to avoid hammering the orchestrator
let cachedStats: any = null;
let cachedAt = 0;
const CACHE_TTL = 60_000;

export async function GET() {
  const now = Date.now();

  if (cachedStats && now - cachedAt < CACHE_TTL) {
    return NextResponse.json(cachedStats);
  }

  try {
    const res = await fetch(`${ORCHESTRATOR_URL}/api/system/stats`, {
      signal: AbortSignal.timeout(5000),
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Orchestrator returned ${res.status}`);
    }

    const data = await res.json();
    cachedStats = data;
    cachedAt = now;

    return NextResponse.json(data);
  } catch (error: any) {
    // Return cached data if available, even if stale
    if (cachedStats) {
      return NextResponse.json(cachedStats);
    }

    // Fallback static values so the bar never shows empty
    return NextResponse.json({
      signalScoutsActive: 24,
      failedStartupsIndexed: 1310,
      failurePatternsDetected: 1174,
      hypothesesTested: 12811,
    });
  }
}
