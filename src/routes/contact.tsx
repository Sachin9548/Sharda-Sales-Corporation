import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send, Warehouse } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/page-hero";
import { company, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Sharda Sales Corporation, Indore" },
      {
        name: "description",
        content:
          "Contact Sharda Sales Corporation, 86 Triveni Colony, Manik Bagh Road, Indore. Call +91 85178 75000 or send your food ingredient requirement online.",
      },
      { property: "og:title", content: "Contact Sharda Sales Corporation" },
      {
        property: "og:description",
        content: "Office and godown address, phone, email, WhatsApp and enquiry form.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    firm: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const body = [
    `Name: ${form.name}`,
    form.firm ? `Firm: ${form.firm}` : null,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    form.product ? `Product / requirement: ${form.product}` : null,
    form.message ? `Message: ${form.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const send = (mode: "whatsapp" | "email") => {
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    const url =
      mode === "whatsapp"
        ? whatsappLink(`Enquiry from website\n${body}`)
        : `mailto:${company.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Thanks! Your enquiry is ready to send.");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your ingredient requirement"
        description="Call, WhatsApp or send the form below. Our team replies with availability, packing options and pricing within one working day."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-4">
            <ContactRow icon={MapPin} title="Office address" value={company.office} />
            <ContactRow icon={Warehouse} title="Godown address" value={company.godown} />
            <ContactRow
              icon={Phone}
              title="Phone"
              value={company.phone}
              href={`tel:${company.phoneRaw}`}
            />
            <ContactRow
              icon={Mail}
              title="Email"
              value={company.email}
              href={`mailto:${company.email}`}
            />
            <ContactRow
              icon={MessageCircle}
              title="WhatsApp"
              value="Chat with our sales team"
              href={whatsappLink("Hello Sharda Sales Corporation, I have a requirement.")}
            />
            <ContactRow
              icon={Clock}
              title="Working hours"
              value="Monday to Saturday, 10:00 AM - 7:00 PM"
            />

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Sharda Sales Corporation office location on Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-lift sm:p-8">
            <h2 className="font-display text-xl font-bold">Send an enquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fields marked * are required. Your enquiry opens in WhatsApp or your email app.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="c-name" label="Your name *" value={form.name} onChange={set("name")} />
                <Field id="c-phone" label="Phone *" value={form.phone} onChange={set("phone")} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="c-firm" label="Firm / bakery name" value={form.firm} onChange={set("firm")} />
                <Field id="c-email" label="Email" value={form.email} onChange={set("email")} />
              </div>
              <Field
                id="c-product"
                label="Product / requirement"
                value={form.product}
                onChange={set("product")}
                placeholder="e.g. 200 kg liquid glucose, cocoa powder"
              />
              <div className="grid gap-1.5">
                <Label htmlFor="c-message">Message</Label>
                <Textarea
                  id="c-message"
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Share quantity, packing and delivery location"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg" className="flex-1" onClick={() => send("whatsapp")}>
                  <MessageCircle /> Send on WhatsApp
                </Button>
                <Button variant="outline" size="lg" className="flex-1" onClick={() => send("email")}>
                  <Send /> Send by Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift">
      <Icon className="mt-0.5 size-5 shrink-0 text-accent" />
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {title}
        </p>
        <p className="mt-1 break-words text-sm font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}
