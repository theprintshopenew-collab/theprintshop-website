export type ProductCategory =
  | "Business Cards"
  | "Stickers"
  | "Labels"
  | "Tyre Bands"
  | "Brochures"
  | "Packaging Labels"
  | "Flyers"
  | "Posters";

export type AdminProduct = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  images: string[]; // data URLs for uploaded images; empty = fallback swatch
  swatch: [string, string];
  createdAt: string;
};

export const productCategories: ProductCategory[] = [
  "Business Cards",
  "Stickers",
  "Labels",
  "Tyre Bands",
  "Brochures",
  "Packaging Labels",
  "Flyers",
  "Posters",
];

export const initialProducts: AdminProduct[] = [
  {
    id: "p1",
    name: "Premium Foil Business Cards",
    category: "Business Cards",
    price: 19,
    stock: 240,
    images: [],
    swatch: ["#161A2B", "#E9611D"],
    createdAt: "2026-05-02",
  },
  {
    id: "p2",
    name: "Holographic Die-Cut Stickers",
    category: "Stickers",
    price: 12,
    stock: 180,
    images: [],
    swatch: ["#D9A441", "#1D5C63"],
    createdAt: "2026-05-11",
  },
  {
    id: "p3",
    name: "Waterproof Product Labels",
    category: "Labels",
    price: 15,
    stock: 96,
    images: [],
    swatch: ["#1D5C63", "#F1EEE8"],
    createdAt: "2026-05-18",
  },
  {
    id: "p4",
    name: "Weatherproof Tyre Bands",
    category: "Tyre Bands",
    price: 22,
    stock: 60,
    images: [],
    swatch: ["#1F1E1C", "#C4432B"],
    createdAt: "2026-06-01",
  },
  {
    id: "p5",
    name: "Tri-Fold Marketing Brochures",
    category: "Brochures",
    price: 28,
    stock: 130,
    images: [],
    swatch: ["#C4432B", "#161A2B"],
    createdAt: "2026-06-09",
  },
  {
    id: "p6",
    name: "Tamper-Evident Packaging Labels",
    category: "Packaging Labels",
    price: 17,
    stock: 210,
    images: [],
    swatch: ["#2E7D4F", "#161A2B"],
    createdAt: "2026-06-20",
  },
];

export type QuoteStatus = "New" | "Contacted" | "Quoted" | "Closed";

export type QuoteRequest = {
  id: string;
  name: string;
  email: string;
  service: string;
  quantity: string;
  message: string;
  status: QuoteStatus;
  submittedAt: string;
};

export const initialQuotes: QuoteRequest[] = [
  {
    id: "q1",
    name: "Elena Marsh",
    email: "elena@marshandco.studio",
    service: "Business Cards",
    quantity: "500",
    message: "Foil edge, uncoated stock, need by end of month.",
    status: "New",
    submittedAt: "2026-07-08",
  },
  {
    id: "q2",
    name: "Rajiv Patel",
    email: "rajiv@patelsbakery.com",
    service: "Packaging Labels",
    quantity: "1000",
    message: "Food-safe labels for pastry boxes, matte finish.",
    status: "Contacted",
    submittedAt: "2026-07-07",
  },
  {
    id: "q3",
    name: "Sofia Chen",
    email: "sofia@chenevents.co",
    service: "Brochures",
    quantity: "250",
    message: "Tri-fold, wedding season rate card handout.",
    status: "Quoted",
    submittedAt: "2026-07-05",
  },
  {
    id: "q4",
    name: "Marcus Nolan",
    email: "marcus@roadlinemotors.com",
    service: "Tyre Bands",
    quantity: "150",
    message: "Two-color, weatherproof, storefront branding.",
    status: "New",
    submittedAt: "2026-07-04",
  },
  {
    id: "q5",
    name: "Priya Shah",
    email: "priya@bloomapothecary.com",
    service: "Labels",
    quantity: "2000",
    message: "Tamper-evident seals for skincare jars.",
    status: "Closed",
    submittedAt: "2026-06-29",
  },
];

export const revenueByMonth = [
  { month: "Feb", revenue: 18200 },
  { month: "Mar", revenue: 21400 },
  { month: "Apr", revenue: 19800 },
  { month: "May", revenue: 24600 },
  { month: "Jun", revenue: 27900 },
  { month: "Jul", revenue: 23100 },
];

export const ordersByCategory = [
  { category: "Cards", orders: 420 },
  { category: "Stickers", orders: 310 },
  { category: "Labels", orders: 265 },
  { category: "Tyre Bands", orders: 140 },
  { category: "Brochures", orders: 190 },
  { category: "Packaging", orders: 230 },
];
