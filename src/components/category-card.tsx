import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { productsByCategory, type Category } from "@/data/catalog";

const SLIDE_MS = 3500;

export function CategoryCard({ category }: { category: Category }) {
  const images = category.images.length ? category.images : [category.image];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setActive((i) => (i + 1) % images.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [images.length]);

  const count = productsByCategory(category.slug).length;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === 0 ? `${category.name} supplied by Sharda Sales Corporation` : ""}
            width={900}
            height={700}
            loading="lazy"
            aria-hidden={i !== 0}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {images.length > 1 ? (
          <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-4 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold leading-snug">{category.name}</h3>
        <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{category.short}</p>
        <p className="mt-2 text-xs font-medium text-accent">{count} listed products</p>
        <EnquiryDialog
          product={category.name}
          trigger={
            <Button variant="soft" className="mt-4 w-full">
              Enquire Now
            </Button>
          }
        />
      </div>
    </article>
  );
}
