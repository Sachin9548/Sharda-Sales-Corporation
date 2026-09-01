import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { categories, categoryBySlug, productsByCategory } from "@/data/catalog";

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const category = categoryBySlug(params.slug);
    if (!category) throw notFound();
    return { name: category.name, description: category.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category unavailable | Sharda Sales Corporation" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} | Sharda Sales Corporation`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
      ],
    };
  },
  component: CategoryDetail,
  notFoundComponent: CategoryNotFound,
});

function CategoryDetail() {
  const { slug } = Route.useParams();
  const category = categoryBySlug(slug)!;
  const list = productsByCategory(slug);

  return (
    <>
      <PageHero eyebrow="Category" title={category.name} description={category.description}>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="onDark" size="lg">
            <Link to="/categories">
              <ArrowLeft /> All categories
            </Link>
          </Button>
          <EnquiryDialog
            product={category.name}
            trigger={
              <Button variant="hero" size="lg">
                Enquire about this category
              </Button>
            }
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <h2 className="font-display text-xl font-bold sm:text-2xl">
          Products in {category.name}{" "}
          <span className="text-muted-foreground">({list.length})</span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <h3 className="font-display text-lg font-semibold">Other categories</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to="/categories/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Category not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        The category you are looking for is not part of our catalogue.
      </p>
      <Button asChild variant="hero" size="lg" className="mt-6">
        <Link to="/categories">Browse all categories</Link>
      </Button>
    </section>
  );
}
