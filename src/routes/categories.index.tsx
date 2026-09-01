import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { categories, productsByCategory } from "@/data/catalog";

export const Route = createFileRoute("/categories/")({
  head: () => ({
    meta: [
      { title: "Product Categories | Sharda Sales Corporation" },
      {
        name: "description",
        content:
          "Browse 12 food ingredient categories: flavours, colours, cocoa and compounds, dairy, gums and starches, additives, bakery ingredients, beverages and packaging.",
      },
      { property: "og:title", content: "Product Categories | Sharda Sales Corporation" },
      {
        property: "og:description",
        content: "Twelve ingredient categories covering 300+ products for food and bakery industries.",
      },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Categories"
        title="Twelve categories, one dependable source"
        description="Every category below is stocked at our Indore warehouse and supplied in original manufacturer packing. Select a category to view its products."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/categories/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="aspect-16/10 overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.name} category`}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-base font-semibold leading-snug">{c.name}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {productsByCategory(c.slug).length} products <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
