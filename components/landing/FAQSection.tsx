"use client";

import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does adversarial validation work?",
    answer: "Builder AI argues why your idea will succeed. Guardian AI tries to destroy it — finding fatal flaws, market risks, and execution challenges. They debate for three rounds using data from 1,310+ real startup failures. You get a verdict: STRONG GO, CONDITIONAL GO, PIVOT REQUIRED, or NO GO."
  },
  {
    question: "How long does validation take?",
    answer: "Quick Check (free) gives you instant results in under 30 seconds. Guardian Debate runs a full 3-round adversarial analysis and emails results in about 7 minutes. Venture Verdict adds live market research via Perplexity and delivers a complete dossier in about 12 minutes."
  },
  {
    question: "What is the Startup Graveyard?",
    answer: "Our database of 1,310+ failed startups with analyzed post-mortems. We've catalogued why they failed — timing, market fit, competition, execution — and use these patterns to stress-test new ideas. If your idea looks like something that's already failed, we'll tell you why and how to avoid the same fate."
  },
  {
    question: "What's included in a Venture Verdict?",
    answer: "Everything in a Guardian Debate, plus: live market research via Perplexity, TAM/SAM/SOM market sizing, competitor analysis with funding data, revenue model assessment, unfair advantage analysis, and a complete research dossier emailed to you with a shareable report link and PDF export."
  },
  {
    question: "Can I buy a single report without subscribing?",
    answer: "Yes. A single Guardian Debate is $14.99 and a single Venture Verdict is $49.99 — no subscription required. If you need more, monthly plans start at $29/month, and annual plans save up to 37%."
  },
  {
    question: "What if my idea gets validated — can you build it?",
    answer: "Yes — that's what makes Greenbelt different. We're not just a validation tool, we're a full venture studio. Our autonomous factory has shipped 6 production-grade products with real billing. After validation, submit a build request: Starter ($499, landing page + email capture), Pro ($1,499, full MVP with auth and billing), or Enterprise ($4,999, production SaaS with integrations and 3 months support)."
  },
  {
    question: "How is this different from other validation tools?",
    answer: "Most validation tools tell you what you want to hear. We're the only platform that uses adversarial AI — Builder vs Guardian — to actively try to kill your idea. Plus, we're the only one that can build the product for you after validation. Validate → Build → Launch, all in one platform."
  },
];

export default function FAQSection() {
  return (
    <section className="px-6 py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about how we discover and validate opportunities.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-4 bg-card/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left py-4">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
