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
];

export const postContent: Record<string, string> = {
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
