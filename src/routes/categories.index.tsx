import { createFileRoute } from "@tanstack/react-router";

import { CategoryCard } from "@/components/category-card";
import { PageHero } from "@/components/page-hero";
import { categories } from "@/data/catalog";

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
        description="Every category below is stocked at our Indore warehouse and supplied in original manufacturer packing. Share your requirement and we will quote availability and pricing."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>
    </>
  );
}
