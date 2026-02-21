import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VAAS_URL = "https://vaas.178.156.240.80.sslip.io";
const APP_URL = "https://greenbelt-orchestrator-production.up.railway.app";

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold">
            Greenbelt
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/#how-it-works">
            <Button variant="ghost" size="sm">How It Works</Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="ghost" size="sm">Portfolio</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="ghost" size="sm">Pricing</Button>
          </Link>
          <Link href="/technology">
            <Button variant="ghost" size="sm">Technology</Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost" size="sm">Blog</Button>
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href={VAAS_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              className="gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-0"
            >
              Validate Your Idea
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
