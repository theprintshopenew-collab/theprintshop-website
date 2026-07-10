"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { StaggerGroup, staggerItem } from "@/components/shared/AnimatedSection";
import { contactInfo } from "@/data/contact";

const methods = [
  {
    icon: Phone,
    label: "Call Us",
    value: contactInfo.phoneDisplay,
    href: contactInfo.phoneHref,
    cta: "Call now",
    accent: "bg-ink text-cream",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contactInfo.whatsappDisplay,
    href: `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
      "Hi! I'd like a quote from The Print Shope."
    )}`,
    cta: "Chat now",
    accent: "bg-[#25D366] text-white",
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    cta: "Send email",
    accent: "bg-accent text-cream",
  },
];

export function ContactMethods() {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {methods.map((method) => (
        <motion.a
          key={method.label}
          href={method.href}
          target={method.href.startsWith("http") ? "_blank" : undefined}
          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
          variants={staggerItem}
          className="group flex flex-col justify-between rounded-2xl border border-neutral-300/60 bg-surface p-6 transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
        >
          <div>
            <span
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${method.accent}`}
            >
              <method.icon size={19} strokeWidth={2} />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-neutral-600">
              {method.label}
            </p>
            <p className="mt-1 truncate font-display text-lg font-medium text-ink">
              {method.value}
            </p>
          </div>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
            {method.cta}
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </motion.a>
      ))}
    </StaggerGroup>
  );
}
