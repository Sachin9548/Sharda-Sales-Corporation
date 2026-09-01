import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { categoryName, productImage, type Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
      <div className="aspect-4/3 overflow-hidden bg-muted">
        <img
          src={productImage(product)}
          alt={`${product.name} supplied by Sharda Sales Corporation`}
          width={900}
          height={700}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {categoryName(product.category)}
        </p>
        <h3 className="mt-1.5 text-base font-semibold leading-snug">{product.name}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
          {product.description}
        </p>
        <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {product.brand ? (
            <div className="flex gap-1">
              <dt className="font-medium text-foreground/70">Brand:</dt>
              <dd>{product.brand}</dd>
            </div>
          ) : null}
          {product.packing ? (
            <div className="flex gap-1">
              <dt className="font-medium text-foreground/70">Packing:</dt>
              <dd>{product.packing}</dd>
            </div>
          ) : null}
        </dl>
        <EnquiryDialog
          product={product.name}
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
