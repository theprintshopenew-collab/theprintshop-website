"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Disc3,
  Tag,
  Sticker,
  PackageCheck,
  BookOpen,
} from "lucide-react";
import type { PortfolioItem, PortfolioCategory } from "@/data/portfolio";

const categoryIcons: Record<PortfolioCategory, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  "Business Cards": CreditCard,
  "Tyre Bands": Disc3,
  Labels: Tag,
  Stickers: Sticker,
  Packaging: PackageCheck,
  Brochures: BookOpen,
};

type LightboxProps = {
  items: PortfolioItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;
  const item = isOpen ? items[index] : null;
  const CategoryIcon = item ? categoryIcons[item.category] : CreditCard;

  const goNext = React.useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  const goPrev = React.useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  React.useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, goNext, goPrev, onClose]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} — enlarged view`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/90 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-8 sm:top-8"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>

          <motion.div
            key={item.id}
            className="relative z-[5] flex w-full max-w-3xl flex-col items-center"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative flex aspect-[4/5] w-full max-w-xl items-center justify-center overflow-hidden rounded-2xl shadow-lifted sm:aspect-[4/3]"
              style={{
                background: `linear-gradient(135deg, ${item.swatch[0]} 0%, ${item.swatch[1]} 100%)`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(45% 45% at 50% 40%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 70%)",
                }}
                aria-hidden="true"
              />
              <span className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm">
                <CategoryIcon size={48} strokeWidth={1.5} className="text-cream" />
              </span>
            </div>

            <div className="mt-5 text-center text-cream">
              <p className="font-display text-xl font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-cream/60">
                {item.client} &middot; {item.category}
              </p>
              <p className="mt-1 text-xs text-cream/40">
                {index !== null ? index + 1 : 0} / {items.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
