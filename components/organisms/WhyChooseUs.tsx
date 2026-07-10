"use client";

import { motion } from "framer-motion";
import { Layers, Palette, Clock, Leaf } from "lucide-react";
import { AnimatedSection, StaggerGroup, staggerItem } from "@/components/shared/AnimatedSection";

const reasons = [
  {
    icon: Layers,
    stat: "200+",
    title: "Premium materials",
    description:
      "From 16pt uncoated card stock to FSC-certified packaging board — nothing in our catalog is the flimsy default.",
  },
  {
    icon: Palette,
    stat: "Free",
    title: "Built-in design studio",
    description:
      "Start from a template or upload your own artwork. No software to install, no design fee to pay.",
  },
  {
    icon: Clock,
    stat: "2–4 days",
    title: "Real production speed",
    description:
      "Orders print in-house and ship with a delivery date you see before you pay — not after.",
  },
  {
    icon: Leaf,
    stat: "100%",
    title: "Responsibly sourced",
    description:
      "Recycled and FSC-certified stock options across every category, at no extra cost.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-container container-px">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Why The Print Shope
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Print that doesn&apos;t apologize for itself.
            </h2>
            <p className="mt-4 max-w-md text-lg text-cream/70">
              We built the process a design-obsessed founder would want: real
              stock samples, transparent pricing, and a studio that gets out
              of your way.
            </p>
          </AnimatedSection>

          <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-cream/10 sm:grid-cols-2">
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={staggerItem}
                className="bg-ink p-7 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <reason.icon size={22} className="text-accent" />
                <p className="mt-5 font-display text-3xl font-semibold text-gold">
                  {reason.stat}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
