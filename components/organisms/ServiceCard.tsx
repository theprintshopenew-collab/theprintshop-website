"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CreditCard,
  Sticker,
  Tag,
  Disc3,
  BookOpen,
  BookMarked,
  FileText,
  Receipt,
  Megaphone,
  Image as ImageIcon,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { staggerItem } from "@/components/shared/AnimatedSection";
import type { ServiceOffering, ServiceIcon } from "@/data/services-page";

const icons: Record<ServiceIcon, ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  "business-cards": CreditCard,
  stickers: Sticker,
  labels: Tag,
  "tyre-bands": Disc3,
  brochures: BookOpen,
  catalogues: BookMarked,
  letterheads: FileText,
  "bill-books": Receipt,
  flyers: Megaphone,
  posters: ImageIcon,
  "packaging-labels": PackageCheck,
};

export function ServiceCard({ service }: { service: ServiceOffering }) {
  const Icon = icons[service.icon];

  return (
    <motion.div variants={staggerItem} className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-300/60 bg-surface transition-all duration-300 ease-out-soft hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lifted">
        {/* Image / gradient panel */}
        <div
          className="relative flex h-40 items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${service.swatch[0]} 0%, ${service.swatch[1]} 100%)`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 70%)",
            }}
            aria-hidden="true"
          />
          <motion.span
            initial={false}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.08, rotate: -4 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/95 shadow-lifted"
          >
            <Icon size={28} className="text-ink" strokeWidth={1.75} />
          </motion.span>

          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink">
            {service.turnaround}
          </span>
        </div>

        {/* Copy */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-accent">
            {service.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
            {service.description}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-600/80">
            {service.minQty}
          </p>

          <Link
            href={`/contact-us?service=${service.id}`}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 ease-out-soft group-hover:border-accent group-hover:bg-accent group-hover:text-cream"
          >
            Request Quote
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
