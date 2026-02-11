import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, postContent } from "@/lib/blog-data";

const VAAS_URL = "https://vaas-greenbelt.vercel.app";

export async function generateStaticParams() {
  return blogPosts.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Greenbelt Blog`,
    description: post.description,
  };
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-bold mt-10 mb-4">{block.replace("## ", "")}</h2>;
    }
    if (block.startsWith("- ")) {
      return (
        <ul key={i} className="list-disc list-inside space-y-1 text-muted-foreground mb-4 ml-4">
          {block.split("\n").map((li, j) => <li key={j}>{li.replace(/^- /, "")}</li>)}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="text-muted-foreground mb-4"
        dangerouslySetInnerHTML={{
          __html: block
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-emerald-500 hover:underline" target="_blank">$1</a>'),
        }}
      />
    );
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const content = postContent[slug];

  if (!post || !content) notFound();

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Button>
        </Link>
        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <Badge variant="secondary" className="text-xs">{post.category}</Badge>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground">{post.description}</p>
          </div>
          <div className="prose prose-invert max-w-none">{renderContent(content)}</div>
          <div className="mt-12 p-6 rounded-lg bg-muted/30 border border-border text-center">
            <h3 className="text-lg font-semibold mb-2">Ready to validate your idea?</h3>
            <p className="text-muted-foreground mb-4">Free validation in 30 seconds. No signup required.</p>
            <a href={VAAS_URL} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-0">
                Validate Your Idea <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}
