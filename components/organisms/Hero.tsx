"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stack = [
  { label: "Business Cards", bg: "#161A2B", fg: "#FAF7F2", rot: -14, x: -120, y: 30 },
  { label: "Invitations", bg: "#D9A441", fg: "#161A2B", rot: -5, x: -40, y: -10 },
  { label: "Packaging", bg: "#E9611D", fg: "#FAF7F2", rot: 6, x: 50, y: 10 },
  { label: "Apparel", bg: "#1D5C63", fg: "#FAF7F2", rot: 15, x: 130, y: 40 },
];

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-40, 40], [6, -6]);
  const rotateY = useTransform(springX, [-40, 40], [-6, 6]);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 78% 20%, rgba(233,97,29,0.10) 0%, rgba(250,247,242,0) 70%), radial-gradient(45% 40% at 15% 70%, rgba(217,164,65,0.12) 0%, rgba(250,247,242,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-container items-center gap-16 container-px pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Copy column */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-600 shadow-soft"
          >
            <Sparkles size={14} className="text-accent" />
            Trusted by 50,000+ businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            Made to be{" "}
            <span className="relative inline-block italic text-accent">
              held.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl"
          >
            Premium business cards, packaging, and marketing print — designed
            online in a free studio, printed on real materials, and delivered
            in days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/design-studio" size="lg">
              Start Designing
              <ArrowRight size={18} />
            </Button>
            <Button href="/templates" variant="secondary" size="lg">
              Browse Templates
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-3 text-sm text-neutral-600"
          >
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <span>
              <strong className="font-semibold text-ink">4.9/5</strong> from
              12,400+ reviews
            </span>
          </motion.div>
        </div>

        {/* Signature visual: fanned print-product stack */}
        <div
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center [perspective:1200px] sm:h-[440px] lg:mx-0 lg:max-w-none"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative h-full w-full [transform-style:preserve-3d]"
          >
            {stack.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8, rotate: 0, x: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: card.rot,
                  x: card.x,
                  y: card.y,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 * i + 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-1/2 top-1/2 flex h-52 w-36 -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-2xl p-4 shadow-lifted sm:h-60 sm:w-40"
                style={
                  {
                    backgroundColor: card.bg,
                    color: card.fg,
                    "--rot": `${card.rot}deg`,
                  } as React.CSSProperties
                }
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="flex h-full flex-col justify-between"
                >
                  <span className="h-2.5 w-8 rounded-full bg-current opacity-40" />
                  <div>
                    <p className="font-display text-sm font-medium leading-tight opacity-95">
                      {card.label}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide opacity-60">
                      The Print Shope
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
