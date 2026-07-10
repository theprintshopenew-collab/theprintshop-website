import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactMethods } from "@/components/organisms/ContactMethods";
import { WorkingHoursCard } from "@/components/organisms/WorkingHoursCard";
import { MapEmbed } from "@/components/organisms/MapEmbed";
import { QuoteForm } from "@/components/organisms/QuoteForm";
import { FloatingWhatsApp } from "@/components/organisms/FloatingWhatsApp";
import { contactInfo } from "@/data/contact";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us — Get a Print Quote",
  description:
    "Get in touch with The Print Shope by phone, WhatsApp, or email, or request a free quote online. Visit our studio or check our working hours below.",
  alternates: {
    canonical: "/contact-us",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact The Print Shope",
  url: `${siteConfig.url}/contact-us`,
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    email: contactInfo.email,
    telephone: contactInfo.phoneDisplay,
    address: contactInfo.address,
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* Page header */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 40% at 85% 8%, rgba(233,97,29,0.10) 0%, rgba(250,247,242,0) 70%), radial-gradient(40% 35% at 8% 55%, rgba(217,164,65,0.12) 0%, rgba(250,247,242,0) 70%)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-container container-px pb-10 pt-16 md:pb-12 md:pt-24">
          <AnimatedSection className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-600 shadow-soft">
              <Sparkles size={14} className="text-accent" />
              Get in Touch
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Let&apos;s print something great.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600 md:text-xl">
              Call, message, or send us your project details below — a real
              person replies within one business day, not a ticket queue.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact method cards */}
      <section className="border-t border-neutral-300/60 bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-container container-px">
          <ContactMethods />
        </div>
      </section>

      {/* Info + Form */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-container gap-10 container-px lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <WorkingHoursCard />
            <MapEmbed />
          </div>

          <QuoteForm />
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
}
