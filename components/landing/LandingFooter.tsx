import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ExternalLink } from "lucide-react";

export default function LandingFooter() {
  const links = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Technology", href: "/technology" },
    { label: "Blog", href: "/blog" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <footer className="px-6 py-12 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              System Operational
            </Badge>
            <span className="text-sm text-muted-foreground">
              Latest Update: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Project Greenbelt · Autonomous Venture Studio
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <span>·</span>
              <a href="mailto:jon@projectgreenbelt.com" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
