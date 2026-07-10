export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "cards" | "megaphone" | "package" | "shirt" | "signpost" | "mail";
  href: string;
};

export const services: Service[] = [
  {
    id: "business-cards",
    title: "Business Cards",
    description:
      "Uncoated, silk, or foil-edged cards that hold up to a full day of handshakes.",
    icon: "cards",
    href: "/products/business-cards",
  },
  {
    id: "marketing",
    title: "Marketing Materials",
    description:
      "Flyers, brochures, and posters built to get read, not recycled.",
    icon: "megaphone",
    href: "/products/marketing-materials",
  },
  {
    id: "packaging",
    title: "Packaging & Labels",
    description:
      "Custom boxes, stickers, and labels that make unboxing feel intentional.",
    icon: "package",
    href: "/products/packaging",
  },
  {
    id: "apparel",
    title: "Apparel & Merch",
    description:
      "Screen-printed tees, caps, and tote bags for teams and launches.",
    icon: "shirt",
    href: "/products/apparel",
  },
  {
    id: "signage",
    title: "Signage & Banners",
    description:
      "Storefront banners and standees that survive weather and foot traffic.",
    icon: "signpost",
    href: "/products/signage",
  },
  {
    id: "stationery",
    title: "Stationery & Invitations",
    description:
      "Letterpress and foil invitations for weddings and milestone events.",
    icon: "mail",
    href: "/products/invitations-stationery",
  },
];

export type Product = {
  id: string;
  name: string;
  fromPrice: string;
  blurb: string;
  swatch: [string, string];
  href: string;
};

export const featuredProducts: Product[] = [
  {
    id: "premium-business-cards",
    name: "Premium Business Cards",
    fromPrice: "$19",
    blurb: "16pt uncoated stock, 3-day turnaround.",
    swatch: ["#161A2B", "#E9611D"],
    href: "/products/business-cards",
  },
  {
    id: "foil-invitations",
    name: "Foil Wedding Invitations",
    fromPrice: "$3.20/ea",
    blurb: "Hot-foil detailing on cotton cardstock.",
    swatch: ["#D9A441", "#FAF7F2"],
    href: "/products/invitations-stationery",
  },
  {
    id: "custom-packaging",
    name: "Custom Mailer Boxes",
    fromPrice: "$1.80/ea",
    blurb: "Branded interior print, matte or gloss finish.",
    swatch: ["#1D5C63", "#F1EEE8"],
    href: "/products/packaging",
  },
  {
    id: "branded-apparel",
    name: "Branded T-Shirts",
    fromPrice: "$11",
    blurb: "Ringspun cotton, screen-printed in-house.",
    swatch: ["#C4432B", "#161A2B"],
    href: "/products/apparel",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Elena Marsh",
    role: "Founder, Marsh & Co. Studio",
    quote:
      "The cards arrived heavier and cleaner than the proof — I've reordered three times since launch and the color has matched exactly every time.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rajiv Patel",
    role: "Owner, Patel's Bakery",
    quote:
      "I built our box design myself in an evening with zero design background. Customers photograph the packaging before they open it.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sofia Chen",
    role: "Event Planner, Chen Events Co.",
    quote:
      "Foil invitations for a 200-guest wedding, delivered four days early. The paper weight alone got compliments from guests.",
    rating: 5,
  },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "How fast is production and delivery?",
    answer:
      "Most products print in 2–4 business days after you approve your design, with standard shipping adding 2–5 days depending on your location. Exact estimates are shown at checkout before you pay, based on your postcode.",
  },
  {
    id: "f2",
    question: "Do I need design experience to use the Design Studio?",
    answer:
      "No. Start from a professionally built template, then swap in your logo, text, and colors with drag-and-drop tools. If you already have print-ready artwork, you can upload it directly instead.",
  },
  {
    id: "f3",
    question: "Is there a minimum order quantity?",
    answer:
      "Most products start at quantities as low as 25–50 units, so you can test a design before committing to a bulk run. Volume pricing kicks in automatically as your quantity increases.",
  },
  {
    id: "f4",
    question: "Can I order a physical sample before a bulk order?",
    answer:
      "Yes. Paper, packaging, and apparel sample kits are available so you can check weight, finish, and true color under normal light before placing a large order.",
  },
  {
    id: "f5",
    question: "What happens if I'm not happy with my order?",
    answer:
      "If a print arrives damaged or doesn't match your approved proof, we reprint or refund it — no restocking questions asked. Details are in our returns and reprint policy.",
  },
];
