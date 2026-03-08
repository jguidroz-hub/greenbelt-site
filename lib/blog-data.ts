export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "14-products-one-weekend",
    title: "We Shipped 14 Products in One Weekend. Here's What Actually Happened.",
    description: "Our AI factory validated 47 ideas, killed 15, and built the 14 highest-confidence survivors end-to-end — spec, code, security audit, deploy. No human wrote a line of code.",
    date: "February 11, 2026",
    readTime: "8 min read",
    category: "Behind the Scenes",
    published: true,
  },
  {
    slug: "introducing-greenbelt",
    title: "Introducing Greenbelt: The AI Venture Studio That Builds What Survives",
    description: "We built an autonomous venture studio that validates startup ideas against 1,310+ real failure patterns, then builds the ones that survive. Here's why.",
    date: "February 11, 2026",
    readTime: "6 min read",
    category: "Announcement",
    published: true,
  },
  {
    slug: "why-adversarial-validation",
    title: "Why Your Idea Needs an Adversary, Not a Cheerleader",
    description: "Most AI tools tell you what you want to hear. We built a system that tries to kill your idea first — because the market will try harder.",
    date: "February 10, 2026",
    readTime: "5 min read",
    category: "Product",
    published: true,
  },
  {
    slug: "1310-ways-to-fail",
    title: "1,310 Ways Startups Fail (and How to Avoid Them)",
    description: "We analyzed over a thousand startup post-mortems to build the largest failure pattern database. Here's what we found.",
    date: "February 8, 2026",
    readTime: "7 min read",
    category: "Research",
    published: true,
  },
  {
    slug: "eddy-kayak-for-food-delivery",
    title: "Building Eddy: The Kayak for Food Delivery That Nobody Asked For (But Everyone Needs)",
    description: "We built a Chrome extension and website that compares food delivery prices across DoorDash, Uber Eats, and Grubhub. 13,963 restaurants. 30 cities. Here's the story.",
    date: "March 7, 2026",
    readTime: "7 min read",
    category: "Product Launch",
    published: true,
  },
  {
    slug: "studioos-creative-project-management",
    title: "StudioOS: Why We Built a Project Management Tool for Creative Studios (And What We Learned)",
    description: "Creative agencies don't work like software teams. So why do they keep using software team tools? We built StudioOS to fix that.",
    date: "March 7, 2026",
    readTime: "6 min read",
    category: "Product Launch",
    published: true,
  },
];

export const postContent: Record<string, string> = {

  "eddy-kayak-for-food-delivery": `You know that feeling when you're hungry, you open three delivery apps, and you realize the same pad thai is $14.99 on DoorDash, $16.49 on Uber Eats, and $13.99 on Grubhub? And then there's the delivery fee, the service fee, the "we're sorry for existing" fee?

Yeah. We got tired of that too.

## The Problem Nobody Talks About

Food delivery is a $350 billion global market, and every platform charges different prices for the same food from the same restaurant. The markup varies wildly — sometimes 15%, sometimes 40%. And the fees? A labyrinth designed by someone who clearly failed their UX class.

Kayak solved this for flights. Nobody had solved it for food.

## What We Built

**Eddy** is two things:

**1. A Chrome Extension** that overlays price comparisons directly on DoorDash, Uber Eats, and Grubhub. When you're browsing a restaurant, Eddy shows you what it costs on the other platforms — and whether you can order directly from the restaurant (spoiler: you usually can, and it's cheaper).

**2. A Website (eddy.delivery)** with a searchable database of 13,963 restaurants across 30 metro areas. Every listing shows which delivery platforms carry it, estimated prices, and — this is the key part — a direct ordering link when available.

## The Direct Ordering Play

Here's the thing most people don't realize: many restaurants have their own ordering systems. They use Square, Toast, ChowNow, or their own website. When you order direct, the restaurant keeps 100% of the revenue instead of paying 15-30% to DoorDash.

Eddy surfaces these direct ordering links. Out of 13,963 restaurants in our database, **12,091 have direct ordering URLs**. That's 87%.

The pitch to consumers: save money. The pitch to restaurants: we send you customers who order direct. Win-win, no middleman fees.

## Technical Stack

- **Extension**: Manifest V3 Chrome extension with content scripts that detect restaurant pages
- **Website**: Next.js on Coolify, server-rendered for SEO
- **Data**: Static dataset (top-restaurants.ts) compiled from public APIs and manual verification
- **Revenue**: Featured restaurant listings at $29/mo (basic) and $99/mo (premium)

## The Overlay Problem

The trickiest engineering challenge was the overlay. When a user visits a DoorDash restaurant page, Eddy needs to:
1. Detect which restaurant they're viewing
2. Match it against our database
3. Show a non-intrusive comparison overlay
4. Re-show it when they navigate (SPA detection — DoorDash doesn't do full page loads)

Version 0.5.0 had a bug where the overlay would show once and then disappear for 24 hours. Users thought the extension was broken. In v0.5.1, we fixed it to re-show after 30 minutes and added proper SPA navigation detection via MutationObserver.

## Traction So Far

- Published on Chrome Web Store (v0.5.1 pending review)
- eddy.delivery indexed by Google, 43 pages crawling
- Reddit post on r/UTAustin: 2,700 views (score: 0 — we learned that Reddit hates self-promotion)
- 30 metro pages for SEO (Austin, NYC, LA, Chicago, etc.)

## What's Next

- Mobile PWA (no native app yet — proving demand first)
- Real-time price fetching via delivery platform APIs
- Restaurant analytics dashboard (show restaurants how many clicks they get)
- Affiliate revenue from delivery platforms

## The Honest Take

Eddy is a consumer play in a market dominated by well-funded incumbents. The moat is thin — any of the delivery apps could build this. But they won't, because showing price comparisons would expose their markup game. That's the wedge.

The direct ordering angle is the real business. If we can drive enough volume to restaurants' own ordering systems, we become the anti-DoorDash — and restaurants will pay for that.

Is it a venture-scale business? Probably not. Is it a solid, revenue-generating product that solves a real problem? Absolutely. And sometimes that's enough.`,

  "studioos-creative-project-management": `Every creative agency I've ever talked to uses either Asana, Monday.com, or — god help them — a combination of Trello boards and Google Sheets. None of these tools were built for how creative work actually happens.

## The Creative Workflow Problem

Software development has a well-understood workflow: backlog → sprint → code → review → deploy. Linear, predictable, measurable.

Creative work is nothing like that.

A brand identity project goes through discovery → moodboarding → concepts → client feedback → revisions → more feedback → existential crisis → final revisions → delivery. There are branching revision trees, client approval gates, asset versioning nightmares, and the ever-present scope creep that turns a "simple logo refresh" into a full brand overhaul.

Asana doesn't understand revision rounds. Monday.com doesn't track asset versions. Trello... Trello is a wall of sticky notes pretending to be project management.

## What StudioOS Does Differently

**StudioOS** is project management built specifically for creative studios — design agencies, video production houses, branding firms, and marketing teams.

### Project Workspaces, Not Task Lists

Every project gets a workspace with phases (Discovery, Concept, Production, Delivery). Within each phase, you track deliverables, not tasks. A deliverable might be "Homepage Hero Concept" — it has its own revision history, client feedback thread, and approval status.

### Revision Tracking

When a client says "I liked version 3 better," you can actually pull up version 3. Every deliverable tracks its revision tree — who made changes, what the client said, which version was approved. No more digging through email threads or Slack DMs.

### Client Portals

Clients get a view into their projects without seeing your internal chaos. They can approve deliverables, leave feedback on specific versions, and see timelines — all without a login to your project management tool.

### Time & Budget

Creative projects have budgets, and they almost always go over. StudioOS tracks time against budget in real-time, so the project lead can see "we've used 80% of budget and we're only 60% through production" before it becomes a crisis.

## The Build

StudioOS runs on our standard stack:
- Next.js with magic-link authentication
- Prisma + Postgres for data
- Real-time updates via polling (WebSockets planned)
- Stripe billing at $79/mo per studio

The magic-link auth was a deliberate choice. Creative teams hate passwords. They hate SSO setup. They want to click a link and get in. Magic links are dead simple — enter email, click the link, you're in.

## What We Learned

**1. Creative people are opinionated about UI.** When your users are designers, your UI better be good. We went through 3 design iterations before the visual language felt right.

**2. Approval workflows are the killer feature.** The #1 pain point isn't "tracking tasks." It's "where is the client feedback and which version did they approve?" Every conversation about StudioOS ends up here.

**3. Integrations matter more than features.** Studios live in Figma, Google Drive, and Dropbox. If StudioOS can't connect to those, it's just another silo. This is our top priority for v2.

## Current Status

StudioOS is live with magic-link login, project workspaces, and Stripe billing at $79/mo. We're in early validation — talking to studios, getting feedback, iterating.

The creative project management space is crowded but underserved. Every tool tries to be everything for everyone. We're trying to be the one tool that actually understands how creative work flows.

Sometimes the best product strategy is just talking to your users and building what they ask for. Revolutionary, I know.`,
  "14-products-one-weekend": `Everyone talks about shipping fast. We wanted to see what happens when you remove humans from the loop entirely and let an AI factory build real products — not demos, not mockups, but production apps with authentication, billing, and security hardening.

Here's the honest account of what happened.

## The Setup

We had 47 venture ideas sitting in our pipeline. Some came from signal intelligence (scanning HackerNews, Reddit, Product Hunt, marketplace reviews). Some came from our VaaS users validating their own ideas. All had been through initial screening, but none had faced our Guardian.

**The Guardian** is our adversarial AI. It doesn't validate ideas — it tries to kill them. Three rounds of structured debate: a Builder AI argues the strongest case for why the idea will work, the Guardian systematically attacks it using 1,310+ documented startup failure patterns, and a Blind Adjudicator weighs the evidence.

## The Massacre

We fed all 47 through the Guardian. It took about 2 hours and cost $43 in API calls.

**Results:**
- 32 survived as CONDITIONAL_GO (68-78% confidence)
- 12 were killed outright (NO_GO)
- 3 needed fundamental pivots (PIVOT_REQUIRED)

That's a 32% kill rate. The Guardian caught ideas that looked great on the surface but had fatal flaws: markets already cornered by well-funded incumbents, regulatory landmines, unit economics that could never work.

We raised the bar further: only ideas scoring 74% or higher would get built. That left us with **14 survivors**.

## The Factory

For each of the 14, the factory ran a 5-stage pipeline:

**1. SpecWriter** — An AI agent generates a comprehensive technical specification. Not just "build a landing page." Full API routes, data models, authentication flows, billing integration, every page. This is the blueprint.

**2. Template Composition** — Instead of generating code from scratch (which produces garbage), we compose from a library of 3,400 lines of battle-tested template modules: auth, billing, schema, email, and ops. These patterns have been hardened through real deployments.

**3. Domain Code Generation** — AI generates the venture-specific code: landing pages, dashboards, pricing pages, domain-specific API routes. This is built ON TOP of the hardened templates, not from scratch.

**4. FactoryPolish** — An automated quality pass that adds 11 production improvements to every app: rate limiting, health check endpoints, auth middleware, error boundaries, 404 pages, loading skeletons, structured logging, environment validation, robots.txt, sitemaps, and .env templates. 154 fixes across 14 ventures.

**5. CodeBreaker** — An adversarial security agent that attacks the finished code. It found 83 vulnerabilities across the 14 products (6 critical, 29 high severity) and auto-patched 35 of them. Auth bypasses, error message leaks, rate limit memory leaks — real issues that would have hit users in production.

Each venture was then pushed to GitHub and auto-deployed to Vercel. Total time: about 3 hours for all 14.

## What We Learned

**1. Template composition beats pure generation.** Early factory attempts generated everything from scratch. The result was "costume code" — it looked like a SaaS app but fell apart the moment a real user touched it. Composing from hardened templates gives you a PFI (Product Functionality Index) floor of 65. Pure generation starts at 25-30.

**2. The Guardian saves real money.** Those 12 killed ideas would have cost $96-180 each to build. That's $1,152-$2,160 in wasted build costs avoided. The Guardian debates cost $43 total. The ROI on adversarial validation is absurd.

**3. Security can't be an afterthought.** CodeBreaker found critical auth bypasses in EVERY venture. The generated auth middleware checked for session cookies but didn't validate them properly. Without CodeBreaker, we would have deployed 14 apps with broken authentication.

**4. 72% is suspicious.** Our first beta tester ran 3 ideas and got 72% confidence on all three. The adjudicator AI was anchoring on a "safe" number instead of truly differentiating. We fixed this with explicit calibration instructions — but it's a reminder that AI systems need constant calibration.

## The Numbers

| Metric | Value |
|--------|-------|
| Ideas evaluated | 47 |
| Ideas killed | 15 (32%) |
| Ideas built | 14 |
| Guardian debate cost | $43 |
| Build pipeline cost | ~$140 |
| Vulnerabilities found | 83 |
| Vulnerabilities auto-fixed | 35 |
| Production fixes applied | 154 |
| Time (total) | ~5 hours |
| Human code written | 0 lines |

## What's Next

These 14 products are live but early. They have real auth, real billing, real security — but the domain logic is AI-generated and needs real users to validate it. Some will get traction. Most won't. That's the portfolio approach working as designed.

The bigger story is the system itself. We're opening it up:

- **Validate your idea for free** at [vaas-greenbelt.vercel.app](https://vaas-greenbelt.vercel.app)
- **Get the full Guardian debate** with a Pro subscription ($29/mo)
- **Have us build it** through our Build-as-a-Service offering

The factory that built 14 products this weekend can build yours too. The only question is whether your idea survives the Guardian first.

---

*Greenbelt is an AI venture studio. We validate, build, and ship. [Learn more →](https://projectgreenbelt.com)*`,
  "introducing-greenbelt": `Most startup tools help you build faster. We built one that tells you whether you should build at all.

Greenbelt is an AI venture studio. We validate startup ideas using adversarial AI, then build and ship the ones that survive. Today we're opening the doors — starting with our validation engine, which anyone can try for free.

## The Problem We Kept Seeing

Every year, thousands of founders spend months (and their savings) building products nobody wants. The stats are brutal: 90% of startups fail, and the #1 reason is "no market need." They built something, launched it, and discovered the hard way that the idea was flawed from the start.

The tools that exist today don't help. Business plan templates, lean canvas worksheets, AI chatbots that say "Great idea!" to everything — none of it actually stress-tests whether an idea will work.

We wanted something that would tell founders the truth before they write a single line of code.

## What We Built

**Greenbelt is two things:**

**1. An adversarial validation engine.** Your idea goes through a structured debate. A Builder AI constructs the strongest possible case for why it will succeed. A Guardian AI systematically tries to destroy it — matching it against 1,310+ documented startup failure patterns extracted from real post-mortems. An Adjudicator weighs the evidence and delivers a verdict with specific conditions for success.

This isn't a vibe check. It's a trial.

**2. An autonomous product factory.** Ideas that survive validation can be built by our AI factory — the same system that's already shipped 6 production-grade products with real authentication, billing, and infrastructure. From validated idea to revenue-ready product.

## Why Adversarial?

Because confirmation bias kills startups.

When you tell a friend about your idea, they say "That sounds amazing!" When you use most AI tools, they do the same thing — with more bullet points. You leave feeling great. Then the market doesn't care.

Our Guardian doesn't care about your feelings either. It cares about whether your idea matches patterns that have killed real companies. It checks timing, competition, market dynamics, unit economics, and execution risk. If there's a fatal flaw, it will find it.

That's not pessimism. That's saving you six months and your savings account.

## The Startup Graveyard

At the core of our validation engine is what we call the Startup Graveyard — a database of 1,310+ startup failures with analyzed post-mortems. Every failure is coded into specific, actionable patterns.

Not "ran out of money" — that's a symptom. We track the causes: "entered consolidating market with undifferentiated product," "B2B play with enterprise sales cycle but SMB pricing," "marketplace with unsolved chicken-and-egg problem."

When your idea hits the Guardian, it's checked against every one of these patterns. If your AI-powered scheduling tool looks like 47 other scheduling tools that failed the same way, you'll know before you build.

## Introducing VaaS: Validation as a Service

Today we're launching the validation engine as a standalone product at [vaas-greenbelt.vercel.app](https://vaas-greenbelt.vercel.app).

**Three tiers:**

**Quick Check (Free)** — Instant pattern matching against the most common failure modes. Takes 30 seconds, no signup required. Good for a gut check.

**Guardian Debate ($29/mo)** — The full adversarial treatment. Builder vs Guardian, three rounds, with a detailed verdict emailed to you. Also available as a single report for $14.99.

**Venture Verdict ($199/mo)** — Everything above, plus real-time market research: competitor analysis, market sizing, trend data, and a full research dossier. The verdict is grounded in current market reality, not just historical patterns. Single reports available for $49.99.

## What's Next

We're not stopping at validation. Greenbelt is a full venture studio:

- **Validate** — adversarial AI stress-tests your idea
- **Research** — market intelligence and competitor analysis
- **Build** — our autonomous factory turns validated ideas into production software
- **Ship** — deployed with billing, auth, analytics, and custom domains

We've already shipped 6 products through this pipeline. Now we're opening it up so anyone can use the same system.

Start with a free validation. If your idea survives the Guardian, we'll build it for you.

## Try It Now

Head to [vaas-greenbelt.vercel.app](https://vaas-greenbelt.vercel.app) and test your idea. Free, instant, no signup.

If you want the full adversarial debate — the kind that finds the flaws your friends won't mention — upgrade to Guardian Debate. Your idea (and your bank account) will thank you later.`,

  "why-adversarial-validation": `Most AI idea validators work like this: you describe your idea, an AI says "Great idea! Here are some tips." You leave feeling validated. Then the market eats you alive.

We built Greenbelt's Guardian system to do the opposite.

## The Problem with Positive Feedback

When you tell a friend about your startup idea, they say "That sounds amazing!" When you use most AI tools, they do the same thing — just with more bullet points.

This feels good. It's also useless.

The market doesn't care about your feelings. Competitors don't care that an AI gave you a thumbs up. Customers don't buy because a chatbot said there's "strong market potential."

## What Adversarial Validation Actually Does

Our system pits two AI agents against each other in a structured debate about your idea:

**The Builder** makes the strongest possible case. Market opportunity, differentiation, timing, execution path — everything that could make this work.

**The Guardian** tries to destroy it. It checks your idea against 1,310+ documented failure patterns from real startup post-mortems. It finds competitors you didn't know existed. It identifies market dynamics that kill ideas like yours.

**The Adjudicator** weighs both sides and delivers a verdict — not "good" or "bad," but a specific confidence score with concrete proceed conditions.

## Why This Matters

Of the 1,310+ failure patterns in our database, the most common ones aren't technical. They're things like:
- Building for a market that's already consolidating
- Solving a problem people won't pay to fix
- Entering a space where incumbents can add your feature in a sprint

These are things a cheerleader will never tell you. An adversary will.

## The Verdict Isn't the End

When you get a CONDITIONAL_GO verdict, you don't just get a score. You get specific conditions: "This works IF you can acquire customers for under $15 CAC" or "This is viable IF you target the SMB segment, not enterprise."

That's actionable. That's what changes outcomes.`,

  "1310-ways-to-fail": `We spent months building the largest startup failure pattern database we know of. Here's what 1,310+ post-mortems taught us.

## The Data

We analyzed startup post-mortems from CB Insights, Failory, IndieHackers, Hacker News, and dozens of other sources. Each failure was coded into specific, actionable patterns — not vague categories like "ran out of money" but precise failure modes like "entered consolidating market with undifferentiated product."

## The Top 10 Failure Patterns

1. **No market need (23%)** — Built something nobody wanted. The classic. Still the #1 killer.
2. **Ran out of cash before PMF (18%)** — Had a real problem, couldn't find the solution fast enough.
3. **Wrong team composition (14%)** — Technical founders with no distribution. Sales founders with no product.
4. **Got outcompeted (11%)** — Incumbent added the feature. Funded competitor moved faster.
5. **Pricing/cost model broken (9%)** — Unit economics never worked. Couldn't charge enough.
6. **Timing was off (7%)** — Right idea, wrong year. Market wasn't ready.
7. **Regulatory/legal (5%)** — Didn't check until it was too late.
8. **Couldn't scale (4%)** — Product worked for 10 users, broke at 1,000.
9. **Founder conflict (3%)** — Co-founder disagreements killed more startups than competition.
10. **Pivoted too late (2%)** — Knew it wasn't working, kept going anyway.

## What Surprised Us

**Pattern combinations are more lethal than individual patterns.** A startup with "no clear differentiation" might survive. Add "entering consolidating market" and the kill rate jumps to 94%.

**The same 30 patterns account for 80% of failures.** Out of 1,310+ patterns, the top 30 are responsible for the vast majority of deaths. This is why our free tier — which checks against the most common patterns — catches most red flags.

**B2B startups fail differently than B2C.** B2B dies from long sales cycles and wrong buyer targeting. B2C dies from CAC and retention. Our Guardian knows the difference.

## How We Use This

Every idea submitted to Greenbelt is checked against the full pattern database. The Guardian agent doesn't just know these patterns exist — it understands the conditions that trigger them and can identify when your specific idea matches.

This isn't a checklist. It's adversarial intelligence.`,
};
