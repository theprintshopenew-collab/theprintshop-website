import type { Metadata } from "next";
import { Hero } from "@/components/organisms/Hero";
import { Services } from "@/components/organisms/Services";
import { WhyChooseUs } from "@/components/organisms/WhyChooseUs";
import { FeaturedProducts } from "@/components/organisms/FeaturedProducts";
import { Testimonials } from "@/components/organisms/Testimonials";
import { FAQ } from "@/components/organisms/FAQ";
import { faqs } from "@/data/home";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Premium Custom Printing, Designed Online`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
    </>
  );
}
