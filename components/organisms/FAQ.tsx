"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { faqs } from "@/data/home";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = React.useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-container container-px">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Questions
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Frequently asked.
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Can&apos;t find what you need?{" "}
              <a href="/contact-us" className="font-semibold text-ink underline underline-offset-4 hover:text-accent">
                Talk to our team
              </a>
              .
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="divide-y divide-neutral-300/60 rounded-2xl border border-neutral-300/60 bg-surface">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="px-6">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-lg font-medium text-ink">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full",
                        isOpen ? "bg-accent text-cream" : "bg-ink/5 text-ink"
                      )}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
