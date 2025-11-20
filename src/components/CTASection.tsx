import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl p-12 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Ready to Create Something Special?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let us help you craft the perfect gift for your loved ones. Every order is made with care and attention to detail.
          </p>
          <Button asChild size="lg" className="shadow-soft">
            <Link href="/custom-order">
              Start Your Custom Order <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
