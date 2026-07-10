import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PortfolioGrid } from "@/components/organisms/PortfolioGrid";
import { portfolioItems } from "@/data/portfolio";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Portfolio — Real Print Work From The Print Shope",
  description:
    "Browse real client work across business cards, tyre bands, labels, stickers, packaging, and brochures — printed and delivered by The Print Shope.",
  alternates: {
    canonical: "/portfolio",
  },
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "The Print Shope Portfolio",
  url: `${siteConfig.url}/portfolio`,
  about: portfolioItems.map((item) => ({
    "@type": "CreativeWork",
    name: item.title,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    genre: item.category,
  })),
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />

      {/* Page header */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 40% at 85% 8%, rgba(217,164,65,0.14) 0%, rgba(250,247,242,0) 70%), radial-gradient(40% 35% at 8% 55%, rgba(233,97,29,0.10) 0%, rgba(250,247,242,0) 70%)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-container container-px pb-12 pt-16 md:pb-16 md:pt-24">
          <AnimatedSection className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-600 shadow-soft">
              <Sparkles size={14} className="text-accent" />
              Portfolio
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Work our clients keep in their hands.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600 md:text-xl">
              A look at real jobs across business cards, tyre bands, labels,
              stickers, packaging, and brochures — filter by category or
              click any piece for a closer look.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Masonry grid + filters */}
      <section className="border-t border-neutral-300/60 bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-container container-px">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
