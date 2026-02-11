import type { Metadata } from "next";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "Terms of Service — Greenbelt",
  description: "Project Greenbelt Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Project Greenbelt Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Effective Date: November 10, 2025 · Last Updated: November 10, 2025</p>
        <div className="prose prose-invert max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>These Terms of Service constitute a legally binding agreement between you and Project Greenbelt, a Delaware corporation, concerning your access to and use of the Project Greenbelt platform. By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Eligibility</h2>
            <p>The Services are intended for users who are at least eighteen (18) years of age. You are responsible for maintaining the confidentiality of your account login information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Description of Services</h2>
            <p>Project Greenbelt provides an AI-powered platform for identifying, validating, prototyping, and managing business venture opportunities through specialized AI agents. We offer both free and paid service tiers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. User Content & IP</h2>
            <p>You retain ownership of your User Content. By using the Services, you grant us a worldwide, non-exclusive, royalty-free license to use your content to operate and improve the Services, including training AI models on anonymized data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Payment Terms</h2>
            <p>Paid subscriptions auto-renew unless cancelled. All fees are non-refundable. We reserve the right to change pricing with 30 days notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Disclaimers</h2>
            <p className="uppercase">The Services are provided &quot;as is&quot; without warranties. AI-generated insights are for informational purposes only and should not be construed as professional advice. You are solely responsible for evaluating accuracy of outputs.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
            <p className="uppercase">Our liability is limited to the greater of amounts paid in the 12 months prior or $100 USD.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Delaware. Disputes may be resolved through binding arbitration under AAA rules.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact</h2>
            <p>Questions? Email <a href="mailto:legal@projectgreenbelt.com" className="text-primary hover:underline">legal@projectgreenbelt.com</a> or <a href="mailto:support@projectgreenbelt.com" className="text-primary hover:underline">support@projectgreenbelt.com</a>.</p>
          </section>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
