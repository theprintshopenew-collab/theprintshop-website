"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Printer, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import { siteConfig, footerNav } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="border-t border-neutral-300/60 bg-ink text-cream">
      <div className="mx-auto max-w-container container-px py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink">
                <Printer size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {siteConfig.description}
            </p>

            <form
              className="mt-6 flex items-center gap-2"
              aria-label="Subscribe to newsletter"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-cream/15 bg-cream/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none"
              />
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="flex-shrink-0 !px-3.5"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </Button>
            </form>
            <p className="mt-2 text-xs text-cream/40">
              Get 10% off your first order. No spam.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={siteConfig.links.instagram}
                aria-label="The Print Shope on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.links.facebook}
                aria-label="The Print Shope on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook size={16} />
              </a>
              <a
                href={siteConfig.links.twitter}
                aria-label="The Print Shope on Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-accent hover:text-accent"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/50">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/75 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 container-px py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Printed with intention, worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
