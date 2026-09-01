import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Mail, MessageCircle, Phone, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { ProductCard } from "@/components/product-card";
import { PageHero, SectionHeading } from "@/components/page-hero";
import {
  brands,
  categories,
  company,
  industries,
  products,
  testimonials,
  whatsappLink,
  whyChooseUs,
} from "@/data/catalog";
import heroImage from "@/assets/hero-warehouse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharda Sales Corporation | Food Ingredient Distributors Since 1971" },
      {
        name: "description",
        content:
          "Indore-based distributor of 300+ food, bakery and industrial ingredients since 1971. Flavours, colours, cocoa, dairy, starches, additives and bakery inputs.",
      },
      { property: "og:title", content: "Sharda Sales Corporation | Food Ingredient Distributors" },
      {
        property: "og:description",
        content:
          "Trusted supplier of food and bakery ingredients to 300+ bakeries, beverage, pharma and confectionery units across India.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden brand-gradient text-primary-foreground">
        <img
          src={heroImage}
          alt="Food ingredient sacks and drums stacked inside the Sharda Sales Corporation warehouse"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
              <BadgeCheck className="size-3.5" /> Serving India since 1971
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Your one-stop partner for food &amp; bakery ingredients
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-lg">
              Sharda Sales Corporation distributes over 300 food ingredient products &mdash;
              flavours, colours, dairy, cocoa, starches, additives and bakery inputs &mdash; from a
              30,000 sq. ft. warehouse in Indore.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/products">
                  View Products <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {company.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-primary-foreground/75">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About the company"
              title="Five decades of dependable ingredient distribution"
              description="Established in 1971 in Indore, Sharda Sales Corporation supplies food and bakery ingredients to more than 300 bakeries and industrial customers. We are an approved and certified supplier to the bakery, beverage, pharmaceutical and confectionery industries."
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Authorised Amul C&F",
                "300+ ingredient products",
                "12 product categories",
                "30,000 sq. ft. warehouse",
                "Bulk order capability",
                "Pan-India distribution",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="default" size="lg" className="mt-7">
              <Link to="/about">
                More about us <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {categories.slice(0, 4).map((c) => (
              <img
                key={c.slug}
                src={c.image}
                alt={`${c.name} distributed by Sharda Sales Corporation`}
                width={900}
                height={700}
                loading="lazy"
                className="h-40 w-full rounded-xl object-cover shadow-soft sm:h-52"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="What we distribute"
            title="Product categories"
            description="Twelve categories covering everything a bakery, food, beverage or pharmaceutical unit needs on the production floor."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 8).map((c) => (
              <Link
                key={c.slug}
                to="/categories/$slug"
                params={{ slug: c.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    width={900}
                    height={700}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug">{c.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.short}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/categories">
                View All Categories <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Popular lines"
            title="Featured products"
            description="A selection of fast-moving products from our catalogue. Enquire for current availability and pricing."
          />
          <Button asChild variant="soft" size="lg">
            <Link to="/products">All products</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Brands marquee */}
      <section className="border-y border-border bg-card py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Partnerships"
            title="We are currently associated with"
            align="center"
          />
        </div>
        <div className="mt-9 overflow-hidden">
          <div className="marquee-track flex w-max gap-4">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="flex h-20 w-56 shrink-0 flex-col items-center justify-center rounded-xl border border-border bg-background px-4 text-center"
              >
                <span className="font-display text-sm font-bold text-primary">{b.name}</span>
                <span className="mt-1 text-[0.68rem] text-muted-foreground">{b.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-9 text-center">
          <Button asChild variant="soft" size="lg">
            <Link to="/brands">See all brands</Link>
          </Button>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Who we serve"
          title="Industries we supply"
          description="Approved and certified supplier across food and process industries."
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.name} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-primary">{i.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="brand-gradient py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              Why choose us
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Reasons customers have stayed with us for decades
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur-sm"
              >
                <h3 className="font-display text-base font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Customer voices"
          title="What our customers say"
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <Quote className="size-6 text-accent" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-3">
                <span className="block text-sm font-semibold">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-secondary/50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Tell us what you need &mdash; we will quote quickly"
              description="Share your product list, packing and quantity. Our team responds with availability and pricing within one working day."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <EnquiryDialog
                trigger={
                  <Button variant="hero" size="xl">
                    Send Enquiry
                  </Button>
                }
              />
              <Button asChild variant="outline" size="xl">
                <Link to="/contact">Contact page</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-shadow hover:shadow-lift"
            >
              <Phone className="size-5 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Call</span>
                <span className="block truncate text-sm font-semibold">{company.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-shadow hover:shadow-lift"
            >
              <Mail className="size-5 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="block truncate text-sm font-semibold">{company.email}</span>
              </span>
            </a>
            <a
              href={whatsappLink("Hello Sharda Sales Corporation, I have a requirement.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-shadow hover:shadow-lift"
            >
              <MessageCircle className="size-5 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">WhatsApp</span>
                <span className="block truncate text-sm font-semibold">Chat with our team</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

