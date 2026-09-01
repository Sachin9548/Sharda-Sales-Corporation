import { useState, type ReactNode } from "react";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company, whatsappLink } from "@/data/catalog";

export function EnquiryDialog({
  product,
  trigger,
}: {
  product?: string;
  trigger: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    quantity: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const composed = [
    `Enquiry from ${company.name} website`,
    product ? `Product: ${product}` : "Product: General enquiry",
    `Name: ${form.name}`,
    form.company ? `Firm: ${form.company}` : null,
    `Phone: ${form.phone}`,
    form.quantity ? `Quantity required: ${form.quantity}` : null,
    form.message ? `Message: ${form.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const submit = (mode: "whatsapp" | "email") => {
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    const url =
      mode === "whatsapp"
        ? whatsappLink(composed)
        : `mailto:${company.email}?subject=${encodeURIComponent(
            `Enquiry: ${product ?? "Food ingredients"}`,
          )}&body=${encodeURIComponent(composed)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Enquiry ready to send. Our team replies within one working day.");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display">
            {product ? `Enquire: ${product}` : "Send an enquiry"}
          </DialogTitle>
          <DialogDescription>
            Share your requirement and our team will get back with availability, packing and
            pricing.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-1">
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="enq-name">Your name *</Label>
              <Input id="enq-name" value={form.name} onChange={set("name")} placeholder="Full name" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="enq-phone">Phone *</Label>
              <Input
                id="enq-phone"
                value={form.phone}
                onChange={set("phone")}
                placeholder="Mobile number"
                inputMode="tel"
              />
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="enq-firm">Firm / bakery name</Label>
              <Input id="enq-firm" value={form.company} onChange={set("company")} placeholder="Optional" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="enq-qty">Quantity required</Label>
              <Input id="enq-qty" value={form.quantity} onChange={set("quantity")} placeholder="e.g. 100 kg" />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="enq-msg">Message</Label>
            <Textarea
              id="enq-msg"
              value={form.message}
              onChange={set("message")}
              placeholder="Tell us about your requirement"
              rows={3}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="hero" size="lg" className="flex-1" onClick={() => submit("whatsapp")}>
            <MessageCircle /> Send on WhatsApp
          </Button>
          <Button variant="outline" size="lg" className="flex-1" onClick={() => submit("email")}>
            <Send /> Send by Email
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
