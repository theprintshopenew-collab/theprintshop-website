"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerGroup, staggerItem } from "@/components/shared/AnimatedSection";
import { featuredProducts } from "@/data/home";
import { Button } from "@/components/ui/Button";

export function FeaturedProducts() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-container container-px">
        <AnimatedSection className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Bestsellers
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Start with what sells fastest.
            </h2>
          </div>
          <Button href="/products" variant="secondary" size="md">
            View all products
            <ArrowRight size={16} />
          </Button>
        </AnimatedSection>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={staggerItem}>
              <Link href={product.href} className="group block">
                <div
                  className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${product.swatch[0]} 0%, ${product.swatch[1]} 100%)`,
                  }}
                >
                  <motion.div
                    initial={{ rotate: -6, y: 0 }}
                    whileHover={{ rotate: 0, y: -6 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="h-32 w-24 rounded-lg bg-white/95 shadow-lifted"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
                    From {product.fromPrice}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-ink transition-colors group-hover:text-accent">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      {product.blurb}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mt-1 flex-shrink-0 text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
