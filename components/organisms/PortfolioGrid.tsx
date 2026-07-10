"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Disc3,
  Tag,
  Sticker,
  PackageCheck,
  BookOpen,
  ZoomIn,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioCategory,
} from "@/data/portfolio";
import { Lightbox } from "@/components/organisms/Lightbox";

const categoryIcons: Record<PortfolioCategory, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  "Business Cards": CreditCard,
  "Tyre Bands": Disc3,
  Labels: Tag,
  Stickers: Sticker,
  Packaging: PackageCheck,
  Brochures: BookOpen,
};

const heightClasses: Record<string, string> = {
  sm: "h-56",
  md: "h-72",
  lg: "h-80",
  xl: "h-96",
};

type Filter = "All" | PortfolioCategory;

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = React.useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const filteredItems = React.useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const filters: Filter[] = ["All", ...portfolioCategories];

  function handleFilterChange(filter: Filter) {
    setActiveFilter(filter);
    setLightboxIndex(null);
  }

  return (
    <div>
      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter portfolio by category"
        className="flex flex-wrap items-center gap-2.5"
      >
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleFilterChange(filter)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out-soft",
                isActive
                  ? "bg-ink text-cream shadow-soft"
                  : "border border-ink/15 text-neutral-600 hover:border-ink/40 hover:text-ink"
              )}
            >
              {filter === "All" ? "All Work" : filter}
            </button>
          );
        })}
      </div>

      {/* Masonry grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"
        >
          {filteredItems.map((item, i) => {
            const Icon = categoryIcons[item.category];
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left shadow-soft transition-shadow duration-300 hover:shadow-lifted"
                aria-label={`View ${item.title} — ${item.category}`}
              >
                <div
                  className={cn(
                    "relative flex w-full items-center justify-center overflow-hidden",
                    heightClasses[item.height]
                  )}
                  style={{
                    background: `linear-gradient(135deg, ${item.swatch[0]} 0%, ${item.swatch[1]} 100%)`,
                  }}
                >
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm"
                  >
                    <Icon size={26} strokeWidth={1.5} className="text-cream" />
                  </motion.span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="mb-2 inline-flex h-9 w-9 items-center justify-center self-end rounded-full bg-cream/90 text-ink">
                      <ZoomIn size={16} />
                    </span>
                    <p className="font-display text-base font-medium text-cream">
                      {item.title}
                    </p>
                    <p className="text-xs text-cream/70">
                      {item.client} &middot; {item.category}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {filteredItems.length === 0 && (
        <p className="mt-16 text-center text-neutral-600">
          No work in this category yet — check back soon.
        </p>
      )}

      <Lightbox
        items={filteredItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
