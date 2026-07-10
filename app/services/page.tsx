import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { AnimatedSection, StaggerGroup } from "@/components/shared/AnimatedSection";
import { ServiceCard } from "@/components/organisms/ServiceCard";
import { Button } from "@/components/ui/Button";
import { serviceOfferings } from "@/data/services-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Print Services — Business Cards, Stickers, Labels & More",
  description:
    "Explore The Print Shope's full range of print services: business cards, stickers, labels, tyre bands, brochures, catalogues, letterheads, bill books, flyers, posters, and packaging labels. Request a free quote.",
  alternates: {
    canonical: "/services",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: serviceOfferings.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Page header */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 45% at 82% 10%, rgba(233,97,29,0.10) 0%, rgba(250,247,242,0) 70%), radial-gradient(40% 35% at 10% 60%, rgba(217,164,65,0.12) 0%, rgba(250,247,242,0) 70%)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-container container-px pb-14 pt-16 md:pb-20 md:pt-24">
          <AnimatedSection className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-600 shadow-soft">
              <Sparkles size={14} className="text-accent" />
              Our Services
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Every print service under one roof.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600 md:text-xl">
              From a single box of business cards to a full retail rollout —
              browse what we print, then request a free quote and we&apos;ll
              come back with pricing the same business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="border-t border-neutral-300/60 bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-container container-px">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceOfferings.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-16 text-cream md:py-20">
        <div className="mx-auto flex max-w-container flex-col items-start justify-between gap-6 container-px sm:flex-row sm:items-center">
          <div className="max-w-lg">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Don&apos;t see what you&apos;re after?
            </h2>
            <p className="mt-2 text-cream/70">
              We print well beyond this list — tell us what you need and
              we&apos;ll quote it.
            </p>
          </div>
          <Button href="/contact-us" variant="primary" size="lg">
            Talk to Our Team
          </Button>
        </div>
      </section>
    </>
  );
}
