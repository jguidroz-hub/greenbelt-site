import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Store,
  Truck,
  BarChart3,
  Zap,
  Shield,
  Users,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant Solutions — Greenbelt",
  description:
    "Technology solutions for independent restaurants. Delivery infrastructure, POS modernization, and operational tools to compete with the chains.",
  openGraph: {
    title: "Restaurant Solutions — Greenbelt",
    description:
      "Technology solutions for independent restaurants. Delivery, POS, and ops tools.",
    type: "website",
    url: "https://projectgreenbelt.com/restaurants",
  },
};

const services = [
  {
    icon: Truck,
    title: "Delivery Infrastructure",
    description:
      "Launch your own branded delivery channel. Keep your margins, own your customer relationships, and stop paying 30% to third-party apps.",
  },
  {
    icon: Store,
    title: "POS Modernization",
    description:
      "We partner with leading POS providers like Toast to get your restaurant on modern systems — cloud-based, integrated, and built for how restaurants actually work.",
  },
  {
    icon: BarChart3,
    title: "Operations & Analytics",
    description:
      "Real-time dashboards for sales, inventory, and labor. See what's working and what's costing you money — without spreadsheets.",
  },
  {
    icon: Zap,
    title: "Online Ordering",
    description:
      "Commission-free online ordering that integrates with your POS. Your menu, your brand, your customers — direct to you.",
  },
  {
    icon: Shield,
    title: "Technology Consulting",
    description:
      "Not sure where to start? We audit your current tech stack and recommend the right tools for your size, cuisine, and goals.",
  },
  {
    icon: Users,
    title: "Local Support",
    description:
      "We're based in Austin, TX and work with restaurants in person. No call centers, no ticket queues — a real partner who shows up.",
  },
];

const stats = [
  { value: "$0", label: "Commission on orders" },
  { value: "48hr", label: "Typical onboarding" },
  { value: "100%", label: "You own your data" },
];

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold">
            Greenbelt
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/">
              <Button variant="ghost" size="sm">Ventures</Button>
            </Link>
            <Link href="/restaurants">
              <Button variant="ghost" size="sm" className="text-foreground font-semibold">Restaurants</Button>
            </Link>
            <Link href="/technology">
              <Button variant="ghost" size="sm">Technology</Button>
            </Link>
            <a href="mailto:jon@projectgreenbelt.com">
              <Button size="sm" className="ml-2">
                Get in Touch <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
            <Store className="w-4 h-4" />
            Restaurant Technology Partner
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Your restaurant deserves
            <span className="text-emerald-500"> better technology</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We help independent restaurants in Austin modernize their operations —
            from POS systems to delivery infrastructure. Compete with the chains
            without their overhead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:jon@projectgreenbelt.com?subject=Restaurant%20Tech%20Consultation">
              <Button size="lg" className="text-base px-8">
                Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="tel:+15044309603">
              <Button variant="outline" size="lg" className="text-base px-8">
                Call Us: (504) 430-9603
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-500">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything your restaurant needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don&apos;t just sell software — we partner with you to find the right
              technology for your specific restaurant.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-border bg-card hover:border-emerald-500/50 transition-colors"
              >
                <service.icon className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Greenbelt */}
      <section className="px-6 py-16 md:py-24 bg-muted/20 border-y">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why restaurants choose Greenbelt
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "We're local",
                desc: "Based in Austin, TX. We visit your restaurant, understand your workflow, and set things up in person.",
              },
              {
                title: "We're vendor-neutral",
                desc: "We recommend the best tools for YOUR restaurant — not the ones that pay us the biggest commission. If Toast is right, we recommend Toast. If Square fits better, we'll say that.",
              },
              {
                title: "We're technical",
                desc: "Greenbelt is a technology company first. We build software, we understand integrations, and we can customize solutions that off-the-shelf vendors can't.",
              },
              {
                title: "We don't disappear",
                desc: "Ongoing support, not a one-time sale. We're building long-term relationships with Austin's restaurant community.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-lg border border-border bg-card"
              >
                <ChevronRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to modernize your restaurant?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with a free consultation. We&apos;ll assess your current setup and
            show you what&apos;s possible — no pressure, no commitments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:jon@projectgreenbelt.com?subject=Restaurant%20Tech%20Consultation">
              <Button size="lg" className="text-base px-8">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Or email us directly at{" "}
            <a
              href="mailto:jon@projectgreenbelt.com"
              className="text-emerald-500 hover:underline"
            >
              jon@projectgreenbelt.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Project Greenbelt · Austin, TX
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Ventures
              </Link>
              <span>·</span>
              <Link href="/restaurants" className="hover:text-foreground transition-colors">
                Restaurants
              </Link>
              <span>·</span>
              <a
                href="mailto:jon@projectgreenbelt.com"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
