"use client";

import { Clock } from "lucide-react";
import { workingHours } from "@/data/contact";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function WorkingHoursCard() {
  return (
    <AnimatedSection className="rounded-2xl border border-neutral-300/60 bg-surface p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream">
          <Clock size={17} />
        </span>
        <h3 className="font-display text-lg font-medium text-ink">
          Working Hours
        </h3>
      </div>
      <dl className="mt-5 divide-y divide-neutral-300/60">
        {workingHours.map((row) => (
          <div
            key={row.day}
            className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
          >
            <dt className="text-sm text-neutral-600">{row.day}</dt>
            <dd
              className={`text-sm font-semibold ${
                row.hours === "Closed" ? "text-neutral-600/70" : "text-ink"
              }`}
            >
              {row.hours}
            </dd>
          </div>
        ))}
      </dl>
    </AnimatedSection>
  );
}
