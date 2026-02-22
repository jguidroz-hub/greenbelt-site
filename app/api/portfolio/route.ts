import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

// Ground truth: what's actually deployed and working
// Update this as apps go live. This is the ONLY source of truth for deployment status.
const DEPLOYED_APPS: Record<string, {
  url: string | null;
  status: "live" | "building" | "broken";
  hasStripe: boolean;
  pfi: number | null;
  note: string;
}> = {
  "HabitStreak": {
    url: "https://habitstreak.io",
    status: "live",
    hasStripe: true,
    pfi: 81,
    note: "5/5 audit: signup→habit→streak→Stripe. Live at habitstreak.io.",
  },
  "Gauntlet": {
    url: "https://vaas.178.156.240.80.sslip.io",
    status: "live",
    hasStripe: true,
    pfi: null,
    note: "5/5 audit: free tier live, $29/$199 Stripe plans. HTTPS.",
  },
  "QuickFlip": {
    url: "https://quickflip.178.156.240.80.sslip.io",
    status: "live",
    hasStripe: true,
    pfi: null,
    note: "5/5 audit: register→rank→Stripe checkout. $29/$79/mo plans live.",
  },
  "KPI Compass": {
    url: "https://kpi-compass.178.156.240.80.sslip.io",
    status: "live",
    hasStripe: true,
    pfi: 75,
    note: "5/5 audit: login→KPI CRUD dashboard→Stripe checkout live.",
  },
  "StudioOS": {
    url: "https://studioos.178.156.240.80.sslip.io",
    status: "live",
    hasStripe: true,
    pfi: 75,
    note: "5/5 audit: magic-link login, project workspace, $79/mo Stripe.",
  },
  "SchemaCraft": {
    url: "https://schemacraft.178.156.240.80.sslip.io",
    status: "live",
    hasStripe: true,
    pfi: 76,
    note: "5/5 audit: signup→schema gen→save/retrieve→Stripe $9/$29/mo.",
  },
  "SlackTone AI": {
    url: "https://slacktone-ai.178.156.240.80.sslip.io",
    status: "building",
    hasStripe: false,
    pfi: null,
    note: "Needs Slack credentials & marketplace submission.",
  },
  "SkipTheFee": {
    url: "https://skipthefee.app",
    status: "live",
    hasStripe: true,
    pfi: null,
    note: "Live at skipthefee.app. Chrome extension submitted. $29/$99/mo featured listing.",
  },
  "SpecGen AI": {
    url: "https://specgen-ai.178.156.240.80.sslip.io",
    status: "building",
    hasStripe: true,
    pfi: null,
    note: "Stripe wired ($49/$149/$499). Deployed on Coolify.",
  },
  "PunchList AI": {
    url: "https://punchlist-ai.178.156.240.80.sslip.io",
    status: "building",
    hasStripe: true,
    pfi: null,
    note: "Stripe wired ($29/$99/$299). Deployed on Coolify.",
  },
  "ScriptShift": {
    url: "https://scriptshift.178.156.240.80.sslip.io",
    status: "live",
    hasStripe: false,
    pfi: 76,
    note: "Shopify app deployed. Needs App Store submission.",
  },
  "BoostCart": {
    url: "https://boostcart.178.156.240.80.sslip.io",
    status: "live",
    hasStripe: false,
    pfi: 76,
    note: "BigCommerce app deployed. Needs marketplace submission.",
  },
  "Inventory Watchdog": {
    url: "https://inventory-watchdog.178.156.240.80.sslip.io",
    status: "live",
    hasStripe: false,
    pfi: 74,
    note: "Shopify app deployed. Needs App Store listing.",
  },
};

// Map DB venture names to display names (DB has "Name - Tagline" format)
function matchVentureName(dbName: string, deployedName: string): boolean {
  return dbName.toLowerCase().startsWith(deployedName.toLowerCase());
}

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    // Pull all non-archived ventures from the orchestrator DB
    const rows = await sql`
      SELECT 
        name, description, phase, status, confidence, 
        platform, segment, kill_reason, launch_url,
        vercel_project_id, health_status, template_type,
        created_at
      FROM ventures 
      WHERE is_archived IS NOT TRUE
      ORDER BY 
        CASE 
          WHEN status = 'active' THEN 1
          WHEN status = 'needs_features' THEN 2
          WHEN status = 'pending_approval' THEN 3
          WHEN status = 'build' THEN 4
          WHEN status = 'waiting' THEN 5
          WHEN status = 'rejected' THEN 6
          WHEN status = 'killed' THEN 7
          WHEN status = 'archived' THEN 8
        END,
        confidence DESC
    `;

    // Build the portfolio response
    const portfolio = [];
    const seen = new Set<string>();

    // First: add all deployed apps with ground truth status
    for (const [displayName, info] of Object.entries(DEPLOYED_APPS)) {
      const dbVenture = rows.find((r: Record<string, unknown>) => 
        matchVentureName(r.name as string, displayName)
      );

      // Extract tagline from DB name (format: "Name - Tagline") or description
      let tagline = "";
      if (dbVenture) {
        const nameParts = (dbVenture.name as string).split(" - ");
        tagline = nameParts.length > 1 ? nameParts.slice(1).join(" - ") : "";
        if (!tagline) {
          // Pull from description
          const desc = dbVenture.description as string;
          const vpMatch = desc?.match(/Value Proposition: (.+?)(?:\n|$)/);
          tagline = vpMatch ? vpMatch[1].slice(0, 100) : "";
        }
        seen.add(dbVenture.name as string);
      }

      portfolio.push({
        name: displayName,
        tagline: tagline || displayName,
        url: info.url,
        status: info.status,
        hasStripe: info.hasStripe,
        pfi: info.pfi,
        statusNote: info.note,
        category: mapCategory(dbVenture?.platform as string, dbVenture?.segment as string),
        phase: dbVenture?.phase || "unknown",
        confidence: dbVenture?.confidence || null,
        dbStatus: dbVenture?.status || null,
      });
    }

    // Then: add killed ventures from DB
    const killedVentures = rows.filter(
      (r: Record<string, unknown>) => 
        (r.status === "killed") && !seen.has(r.name as string)
    );

    for (const v of killedVentures) {
      const nameParts = (v.name as string).split(" - ");
      portfolio.push({
        name: nameParts[0],
        tagline: nameParts.length > 1 ? nameParts.slice(1).join(" - ") : "",
        url: null,
        status: "killed",
        hasStripe: false,
        pfi: null,
        statusNote: v.kill_reason || "Killed by validation pipeline",
        category: mapCategory(v.platform as string, v.segment as string),
        phase: v.phase,
        confidence: v.confidence,
        dbStatus: v.status,
      });
    }

    // Summary stats from the full DB
    const stats = {
      totalInDb: rows.length,
      active: rows.filter((r: Record<string, unknown>) => r.status === "active").length,
      inPipeline: rows.filter((r: Record<string, unknown>) => ["pending_approval", "waiting", "build"].includes(r.status as string)).length,
      rejected: rows.filter((r: Record<string, unknown>) => r.status === "rejected").length,
      killed: rows.filter((r: Record<string, unknown>) => r.status === "killed").length,
      deployed: Object.values(DEPLOYED_APPS).filter(a => a.status === "live").length,
      building: Object.values(DEPLOYED_APPS).filter(a => a.status === "building").length,
      withStripe: Object.values(DEPLOYED_APPS).filter(a => a.hasStripe).length,
    };

    return NextResponse.json({
      portfolio,
      stats,
      lastUpdated: new Date().toISOString(),
    }, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Portfolio API error:", error);
    return NextResponse.json(
      { error: "Failed to load portfolio" },
      { status: 500 }
    );
  }
}

function mapCategory(platform?: string, segment?: string): string {
  if (platform === "shopify_app" || platform === "bigcommerce_app") return "E-Commerce";
  if (platform === "vscode_extension") return "DevTools";
  if (platform === "chrome_extension") return "DevTools";
  if (platform === "hubspot_app") return "Analytics";
  if (platform === "slack_app") return "SaaS";
  if (segment === "developer") return "DevTools";
  if (segment === "b2b_enterprise") return "AI/ML";
  if (segment === "b2c_consumer") return "SaaS";
  return "SaaS";
}
