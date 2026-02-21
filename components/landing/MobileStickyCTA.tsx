import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VAAS_URL = "https://vaas.178.156.240.80.sslip.io";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border/50 shadow-lg z-50">
      <a href={VAAS_URL} target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-0">
          Validate Your Idea — Free
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}
