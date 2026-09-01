import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/catalog";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Food & Bakery Ingredients | Sharda Sales Corporation" },
      {
        name: "description",
        content:
          "Search our catalogue of food and bakery ingredients: cocoa, milk powder, xanthan gum, liquid glucose, baking powder, food colours, starches, acids and more.",
      },
      { property: "og:title", content: "Products | Sharda Sales Corporation" },
      {
        property: "og:description",
        content: "Search and filter 300+ food ingredient products by name and category.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = active === "all" || p.category === active;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.brand ?? "").toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, active]);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Search our ingredient catalogue"
        description="Filter by category or search by product or brand name. Every item is available in original manufacturer packing with bulk supply on request."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="product-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product name or brand, e.g. cocoa, xanthan, Amul"
              className="h-11 pl-9"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <FilterChip label="All products" active={active === "all"} onClick={() => setActive("all")} />
            {categories.map((c) => (
              <FilterChip
                key={c.slug}
                label={c.name}
                active={active === c.slug}
                onClick={() => setActive(c.slug)}
              />
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {filtered.length} of {products.length} products
        </p>

        {filtered.length ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-border p-12 text-center">
            <p className="font-display text-lg font-semibold">No products matched your search</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different keyword, or contact us &mdash; we stock many items beyond this list.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "rounded-full accent-gradient px-4 py-2 text-xs font-semibold text-accent-foreground"
          : "rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent"
      }
    >
      {label}
    </button>
  );
}
