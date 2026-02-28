import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — Greenbelt",
  description: "How Project Greenbelt collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: February 28, 2026</p>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you use Project Greenbelt&apos;s services, we may collect: account information (name, email address) when you create an account; usage data including validation queries, interaction logs, and feature usage; payment information processed securely through Stripe (we do not store card numbers); and technical data such as IP address, browser type, and device information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use collected information to: provide and improve our validation and build services; process payments and manage subscriptions; send service-related communications; analyze usage patterns to improve the platform; and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Your Validation Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Startup ideas and business concepts submitted for validation are used solely to provide our services. We do not sell, share, or use your validation data to compete with you. Validation data may be used in aggregate, anonymized form to improve our failure pattern database.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We share data only with: payment processors (Stripe) to handle transactions; AI model providers (OpenAI, Anthropic, Perplexity) to process validations — these providers do not retain your data for training; hosting providers (Railway, Coolify, Neon) for infrastructure; and law enforcement when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures including encrypted data transmission (TLS), secure database storage, authentication and access controls, and regular security reviews. No system is 100% secure, but we take reasonable measures to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Cookies &amp; Analytics</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use essential cookies for authentication and session management. We may use analytics tools (Vercel Analytics) to understand site usage. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to: access your personal data; request correction of inaccurate data; request deletion of your data; export your data in a portable format; and opt out of non-essential communications. To exercise these rights, contact us at jon@projectgreenbelt.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain account data for as long as your account is active. Validation data is retained for 12 months to provide historical access. Payment records are retained as required by law (typically 7 years). You may request deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of material changes via email or by posting a notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related questions or requests, contact us at{" "}
              <a href="mailto:jon@projectgreenbelt.com" className="text-emerald-400 hover:text-emerald-300">
                jon@projectgreenbelt.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
