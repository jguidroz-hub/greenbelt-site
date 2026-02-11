import type { Metadata } from "next";
import Link from "next/link";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Greenbelt",
  description: "Insights from analyzing 1,310+ startup failures and building the system that catches them.",
};

export default function BlogPage() {
  const publishedPosts = blogPosts.filter((p) => p.published);

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-emerald-500/30 text-emerald-500">
            <BookOpen className="w-3 h-3 mr-2" />
            Blog
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Insights from the Graveyard</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What we&apos;ve learned from analyzing 1,310+ startup failures — and building the system that catches them.
          </p>
        </div>
        <div className="space-y-6">
          {publishedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <Card className="transition-colors hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary mt-3">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
