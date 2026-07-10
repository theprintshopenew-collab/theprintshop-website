"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CreditCard, Megaphone, Package, Shirt, Signpost, Mail, ArrowUpRight } from "lucide-react";
import { AnimatedSection, StaggerGroup, staggerItem } from "@/components/shared/AnimatedSection";
import { services, type Service } from "@/data/home";

const icons: Record<Service["icon"], ComponentType<{ size?: number; className?: string }>> = {
  cards: CreditCard,
  megaphone: Megaphone,
  package: Package,
  shirt: Shirt,
  signpost: Signpost,
  mail: Mail,
};

export function Services() {
  return (
    <section id="services" className="border-t border-neutral-300/60 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-container container-px">
        <AnimatedSection className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            What we print
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Six categories, one print floor.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Every product ships from the same facility, on the same
            quality-checked stock — so your cards, boxes, and banners always
            look like they belong to the same brand.
          </p>
        </AnimatedSection>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-neutral-300/60 bg-cream p-7 transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
                >
                  <div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream transition-colors duration-300 group-hover:bg-accent">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {service.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                    Explore
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
