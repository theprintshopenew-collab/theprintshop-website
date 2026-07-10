"use client";

import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { contactInfo } from "@/data/contact";

export function MapEmbed() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    contactInfo.mapQuery
  )}&z=15&output=embed`;

  return (
    <AnimatedSection delay={0.1} className="overflow-hidden rounded-2xl border border-neutral-300/60 bg-surface">
      <div className="relative h-72 w-full sm:h-80">
        <iframe
          title="The Print Shope location on Google Maps"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full grayscale-[15%]"
        />
      </div>
      <div className="flex items-start gap-3 p-5">
        <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ink text-cream">
          <MapPin size={16} />
        </span>
        <div>
          <p className="font-medium text-ink">The Print Shope — Studio</p>
          <p className="text-sm text-neutral-600">{contactInfo.address}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
