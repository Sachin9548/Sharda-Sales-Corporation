import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, Compass, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { brands, company, whyChooseUs } from "@/data/catalog";
import heroImage from "@/assets/hero-warehouse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Sharda Sales Corporation, Indore" },
      {
        name: "description",
        content:
          "Established in 1971, Sharda Sales Corporation distributes 300+ food ingredients from a 30,000 sq. ft. warehouse in Indore. Our history, mission, vision and associations.",
      },
      { property: "og:title", content: "About Sharda Sales Corporation" },
      {
        property: "og:description",
        content:
          "Five decades of food ingredient distribution serving bakery, beverage, pharmaceutical and confectionery industries across India.",
      },
    ],
  }),
  component: AboutPage,
});

const journey = [
  { year: "1971", title: "The beginning", text: "Sharda Sales Corporation is established in Indore as a distribution and trading house." },
  { year: "1980s", title: "Into bakery ingredients", text: "Focus shifts towards bakery inputs, serving bakeries across the Madhya Pradesh region." },
  { year: "1990s", title: "Principal associations", text: "Long-term associations begin with leading ingredient manufacturers and national brands." },
  { year: "2000s", title: "Amul authorised C&F", text: "Appointed as authorised clearing & forwarding agent for Amul dairy ingredients." },
  { year: "2010s", title: "Warehouse expansion", text: "A 30,000 sq. ft. facility enables bulk stocking and faster dispatch." },
  { year: "Today", title: "300+ products", text: "12 categories serving bakery, food processing, beverage, pharma and confectionery customers." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Distributing trust, ingredient by ingredient, since 1971"
        description="Sharda Sales Corporation has been engaged in the distribution and trading segment for more than five decades, supplying 300+ food ingredient products to customers across India."
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">
            Talk to our team <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Company introduction"
              title="A one-stop food ingredient partner"
              description="Our product portfolio spans food flavours, food colours, food ingredients and bakery ingredients. We supply to 300+ bakeries and customers across India and are an approved, certified supplier to the bakery, beverage, pharmaceutical and confectionery industries."
            />
            <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {company.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-xl font-bold text-primary">{s.value}</dd>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src={heroImage}
            alt="Warehouse storage of food ingredient sacks and drums at Sharda Sales Corporation"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-72 w-full rounded-2xl object-cover shadow-lift lg:h-96"
          />
        </div>
      </section>

      <section className="bg-secondary/50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Mission",
              points: [
                "Provide high-quality food ingredients with consistent reliability.",
                "Ensure timely and efficient supply to our customers.",
                "Build long-term relationships with customers and partners.",
                "Continuously improve product range, service and distribution.",
              ],
            },
            {
              icon: Compass,
              title: "Vision",
              points: [
                "Introduce new and innovative ingredient solutions continuously.",
                "Meet evolving industry and regulatory requirements.",
                "Become a trusted, one-stop food ingredient partner across India.",
              ],
            },
            {
              icon: Building2,
              title: "Infrastructure",
              points: [
                "30,000 sq. ft. warehouse facility.",
                "Organised storage and inventory management.",
                "Strong distribution and logistics arrangements.",
                "Capability to handle bulk, large-volume orders.",
              ],
            },
          ].map((block) => (
            <div key={block.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <block.icon className="size-7 text-accent" />
              <h2 className="mt-4 font-display text-xl font-bold text-primary">{block.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {block.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Our journey"
          title="Milestones since 1971"
          align="center"
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((j) => (
            <li key={j.year} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <span className="font-display text-sm font-bold text-accent">{j.year}</span>
              <h3 className="mt-1 font-display text-lg font-semibold">{j.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{j.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-secondary/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Industry expertise"
            title="Why customers choose Sharda Sales Corporation"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div key={w.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-display text-base font-semibold text-primary">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Associations"
          title="Brands and principals we work with"
          description="Our key business associations across dairy, flavours, starches, cocoa, chemicals and bakery solutions."
        />
        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <li key={b.name} className="rounded-xl border border-border bg-card p-5 shadow-soft">
              <span className="block font-display text-sm font-bold text-primary">{b.name}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{b.note}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="hero" size="xl" className="mt-9">
          <Link to="/products">
            Explore our product range <ArrowRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
