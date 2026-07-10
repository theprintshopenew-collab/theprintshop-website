"use client";

import { Star, Quote } from "lucide-react";
import { AnimatedSection, StaggerGroup, staggerItem } from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";
import { testimonials } from "@/data/home";

export function Testimonials() {
  return (
    <section className="border-t border-neutral-300/60 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-container container-px">
        <AnimatedSection className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Customer stories
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The proof is in the paper stock.
          </h2>
        </AnimatedSection>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.id}
              variants={staggerItem}
              className="flex h-full flex-col rounded-2xl border border-neutral-300/60 bg-cream p-8"
            >
              <Quote size={28} className="text-accent/40" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-3">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-neutral-600">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
