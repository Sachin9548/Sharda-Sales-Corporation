import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { categories, company } from "@/data/catalog";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="brand-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="Sharda Sales Corporation logo"
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 shrink-0 object-contain"
            />
            <span className="font-display text-lg font-bold leading-tight">
              Sharda Sales
              <br />
              Corporation
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Distribution and trading of 300+ food, bakery and industrial ingredients since{" "}
            {company.since}. Serving bakery, food processing, beverage, pharmaceutical and
            confectionery industries.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {[
              { to: "/about", label: "About Us" },
              { to: "/categories", label: "Product Categories" },
              { to: "/products", label: "All Products" },
              { to: "/brands", label: "Our Brands" },
              { to: "/certificates", label: "Certificates" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-opacity hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">Categories</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/categories/$slug"
                  params={{ slug: c.slug }}
                  className="transition-opacity hover:text-primary-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">Reach Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{company.office}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={`tel:${company.phoneRaw}`} className="hover:text-primary-foreground">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-primary-foreground">
                {company.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 overflow-hidden rounded-lg border border-primary-foreground/20">
            <iframe
              title="Sharda Sales Corporation location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
              className="h-36 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}, Indore. All rights reserved.
          </p>
          <p>GST compliant supplier | FSSAI licensed food business operator</p>
        </div>
      </div>
    </footer>
  );
}
