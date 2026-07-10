export const contactInfo = {
  phoneDisplay: "+1 (800) 555-0198",
  phoneHref: "tel:+18005550198",
  whatsappNumber: "18005550198",
  whatsappDisplay: "+1 (800) 555-0198",
  email: "hello@theprintshope.com",
  address: "123 Print Avenue, Suite 400, Los Angeles, CA 90012",
  mapQuery: "123 Print Avenue, Los Angeles, CA 90012",
};

export type WorkingHours = {
  day: string;
  hours: string;
  isToday?: boolean;
};

export const workingHours: WorkingHours[] = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const quoteServiceOptions = [
  "Business Cards",
  "Stickers",
  "Labels",
  "Tyre Bands",
  "Brochures",
  "Catalogues",
  "Letterheads",
  "Bill Books",
  "Flyers",
  "Posters",
  "Packaging Labels",
  "Something else",
] as const;

export type QuoteServiceOption = (typeof quoteServiceOptions)[number];
