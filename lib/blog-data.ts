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
