import { MessageCircle } from "lucide-react";

import { company, whatsappLink } from "@/data/catalog";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(`Hello ${company.name}, I would like to enquire about your products.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sharda Sales Corporation on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-full accent-gradient text-accent-foreground shadow-lift transition-transform hover:scale-105"
      style={{ height: "3.25rem", width: "3.25rem" }}
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
