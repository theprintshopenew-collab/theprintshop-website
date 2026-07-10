"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import { primaryNav, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-out-soft",
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-soft border-b border-neutral-300/60"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-container items-center justify-between container-px py-4"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-semibold text-ink"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream">
            <Printer size={18} strokeWidth={2} aria-hidden="true" />
          </span>
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-neutral-900/80 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/auth/login" variant="ghost" size="sm">
            Sign in
          </Button>
          <Button href="/design-studio" variant="primary" size="sm">
            Start Designing
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream p-6 shadow-lifted"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-ink">
                  {siteConfig.name}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-2 text-ink hover:bg-ink/5"
                >
                  <X size={22} />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {primaryNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 font-display text-lg text-ink hover:bg-ink/5"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button href="/auth/login" variant="secondary">
                  Sign in
                </Button>
                <Button href="/design-studio" variant="primary">
                  Start Designing
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
