import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { CategoryCard } from "@/components/category-card";
import { PageHero } from "@/components/page-hero";
import { categories } from "@/data/catalog";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Food & Bakery Ingredients | Sharda Sales Corporation" },
      {
        name: "description",
        content:
          "Browse our ingredient categories: cocoa, milk powder, xanthan gum, liquid glucose, baking powder, food colours, starches, acids and more. Enquire for pricing.",
      },
      { property: "og:title", content: "Products | Sharda Sales Corporation" },
      {
        property: "og:description",
        content: "Explore 12 food ingredient categories covering 300+ products. Send an enquiry for availability and pricing.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.short.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Browse our ingredient categories"
        description="We distribute 300+ products across twelve categories in original manufacturer packing. Find your category and send us an enquiry — our team will share availability and pricing."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <label htmlFor="product-search" className="sr-only">
            Search categories
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="product-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by category, e.g. cocoa, colours, dairy"
              className="h-11 pl-9"
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {filtered.length} of {categories.length} categories
        </p>

        {filtered.length ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-border p-12 text-center">
            <p className="font-display text-lg font-semibold">No categories matched your search</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different keyword, or contact us &mdash; we stock many items beyond this list.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
