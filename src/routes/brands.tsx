import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { brands } from "@/data/catalog";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands & Principals | Sharda Sales Corporation" },
      {
        name: "description",
        content:
          "Sharda Sales Corporation is associated with Amul, RCF, AB Mauri, Fine Organic, Adani Wilmar, Keva, Akras, Midas Agro, Roquette Riddhi Siddhi and VJ Jindal Cocoa.",
      },
      { property: "og:title", content: "Our Brands | Sharda Sales Corporation" },
      {
        property: "og:description",
        content: "Authorised associations with leading food ingredient manufacturers in India.",
      },
    ],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="We are currently associated with"
        description="Long-standing associations with manufacturers and principals let us supply genuine products in original packing, with reliable stock and documentation."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full brand-gradient font-display text-xl font-bold text-primary-foreground">
                {b.name.charAt(0)}
              </span>
              <h2 className="mt-4 font-display text-base font-bold text-primary">{b.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {b.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary/50 p-8 sm:p-10">
          <SectionHeading
            eyebrow="Looking for a specific brand?"
            title="We source beyond this list"
            description="If you need a brand or grade that is not listed here, share your requirement and our team will confirm availability."
          />
          <Button asChild variant="hero" size="xl" className="mt-6">
            <Link to="/contact">
              Send your requirement <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
