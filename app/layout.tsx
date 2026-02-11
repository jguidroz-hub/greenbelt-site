import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenbelt — AI Venture Studio | Validate, Build, Ship",
  description:
    "Builder AI defends your idea. Guardian AI tries to destroy it. Scored against 1,310+ real startup failures. Validate free, then let our AI factory build it.",
  openGraph: {
    title: "Greenbelt — Will Your Startup Idea Survive?",
    description:
      "Adversarial AI validation. Builder vs Guardian. Three rounds. One verdict. Free.",
    type: "website",
    url: "https://projectgreenbelt.com",
    images: [{ url: "https://projectgreenbelt.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenbelt — Adversarial AI Validation",
    description: "Your startup idea gets a verdict, not a vibe check. Free.",
    images: ["https://projectgreenbelt.com/og-image.png"],
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HFCSV4RTQC" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HFCSV4RTQC');`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
