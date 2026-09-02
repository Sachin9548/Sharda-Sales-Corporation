import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/data/catalog";
import logo from "@/assets/logo2.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/categories", label: "Categories" },
  { to: "/products", label: "Products" },
  { to: "/brands", label: "Brands" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="hidden brand-gradient text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs">
          <p className="truncate opacity-90">
            Distributing food, bakery &amp; industrial ingredients across India since {company.since}
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <a href={`tel:${company.phoneRaw}`} className="hover:underline">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="hover:underline">
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Sharda Sales Corporation crest logo"
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight text-primary sm:text-lg">
              Sharda Sales Corporation
            </span>
            <span className="block truncate text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              Food Ingredient Distributors
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="hero" size="lg">
            <a href={`tel:${company.phoneRaw}`}>
              <Phone /> Call Now
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent" }}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="lg" className="my-3">
              <a href={`tel:${company.phoneRaw}`}>
                <Phone /> {company.phone}
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
