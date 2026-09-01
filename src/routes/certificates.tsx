import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { certificates } from "@/data/catalog";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates & Approvals | Sharda Sales Corporation" },
      {
        name: "description",
        content:
          "FSSAI licence, GST registration, Amul authorised C&F and industry approvals held by Sharda Sales Corporation, Indore.",
      },
      { property: "og:title", content: "Certificates | Sharda Sales Corporation" },
      {
        property: "og:description",
        content: "Licences, registrations and approvals that back our supply to regulated industries.",
      },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certificates"
        title="Licensed, registered and approved"
        description="Our documentation is maintained so that regulated customers in food, beverage and pharmaceutical industries can complete vendor approvals without friction."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <article
              key={c.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="grid aspect-4/3 place-items-center brand-gradient text-primary-foreground">
                <ShieldCheck className="size-14 opacity-90" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-base font-semibold text-primary">{c.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
          Copies of licences, GST certificate and principal authorisation letters are shared on
          request for vendor registration and audits.
        </p>
      </section>
    </>
  );
}
