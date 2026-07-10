export type PortfolioCategory =
  | "Business Cards"
  | "Tyre Bands"
  | "Labels"
  | "Stickers"
  | "Packaging"
  | "Brochures";

export type PortfolioHeight = "sm" | "md" | "lg" | "xl";

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  swatch: [string, string];
  height: PortfolioHeight;
};

export const portfolioCategories: PortfolioCategory[] = [
  "Business Cards",
  "Tyre Bands",
  "Labels",
  "Stickers",
  "Packaging",
  "Brochures",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "bc-01",
    title: "Foil-Edge Card Suite",
    client: "Marsh & Co. Studio",
    category: "Business Cards",
    swatch: ["#161A2B", "#E9611D"],
    height: "lg",
  },
  {
    id: "bc-02",
    title: "Minimal Letterpress Cards",
    client: "North & Fable",
    category: "Business Cards",
    swatch: ["#1F1E1C", "#D9A441"],
    height: "md",
  },
  {
    id: "bc-03",
    title: "Silk Finish Duo Cards",
    client: "Hearth Interiors",
    category: "Business Cards",
    swatch: ["#D9A441", "#FAF7F2"],
    height: "sm",
  },
  {
    id: "bc-04",
    title: "Bold Uncoated Cards",
    client: "Vantage Legal",
    category: "Business Cards",
    swatch: ["#161A2B", "#D8D3C9"],
    height: "xl",
  },
  {
    id: "tb-01",
    title: "Storefront Tyre Wrap",
    client: "Patel Tyre Works",
    category: "Tyre Bands",
    swatch: ["#1F1E1C", "#C4432B"],
    height: "md",
  },
  {
    id: "tb-02",
    title: "Weatherproof Vinyl Band",
    client: "Roadline Motors",
    category: "Tyre Bands",
    swatch: ["#161A2B", "#6B6A66"],
    height: "sm",
  },
  {
    id: "tb-03",
    title: "Two-Tone Service Band",
    client: "Apex Auto Care",
    category: "Tyre Bands",
    swatch: ["#C4432B", "#161A2B"],
    height: "lg",
  },
  {
    id: "lb-01",
    title: "Cold-Storage Product Labels",
    client: "Northfield Dairy",
    category: "Labels",
    swatch: ["#1D5C63", "#F1EEE8"],
    height: "sm",
  },
  {
    id: "lb-02",
    title: "Tamper-Evident Seal Labels",
    client: "Bloom Apothecary",
    category: "Labels",
    swatch: ["#2E7D4F", "#FAF7F2"],
    height: "md",
  },
  {
    id: "lb-03",
    title: "Shipping Carton Labels",
    client: "Fernway Goods",
    category: "Labels",
    swatch: ["#1D5C63", "#D9A441"],
    height: "xl",
  },
  {
    id: "lb-04",
    title: "Wine Bottle Label Set",
    client: "Terra Cellars",
    category: "Labels",
    swatch: ["#161A2B", "#E9611D"],
    height: "md",
  },
  {
    id: "st-01",
    title: "Holographic Die-Cut Pack",
    client: "Neon Collective",
    category: "Stickers",
    swatch: ["#D9A441", "#1D5C63"],
    height: "lg",
  },
  {
    id: "st-02",
    title: "Matte Vinyl Sticker Sheet",
    client: "Wander Coffee Co.",
    category: "Stickers",
    swatch: ["#E9611D", "#FAF7F2"],
    height: "sm",
  },
  {
    id: "st-03",
    title: "Gloss Logo Stickers",
    client: "Fernway Goods",
    category: "Stickers",
    swatch: ["#161A2B", "#D9A441"],
    height: "md",
  },
  {
    id: "pk-01",
    title: "Branded Mailer Box",
    client: "Patel's Bakery",
    category: "Packaging",
    swatch: ["#C4432B", "#161A2B"],
    height: "xl",
  },
  {
    id: "pk-02",
    title: "Matte Rigid Gift Box",
    client: "Hearth Interiors",
    category: "Packaging",
    swatch: ["#1F1E1C", "#D8D3C9"],
    height: "md",
  },
  {
    id: "pk-03",
    title: "Kraft Pouch & Sticker Set",
    client: "Wander Coffee Co.",
    category: "Packaging",
    swatch: ["#2E7D4F", "#F1EEE8"],
    height: "lg",
  },
  {
    id: "pk-04",
    title: "Tuck-Top Retail Carton",
    client: "Bloom Apothecary",
    category: "Packaging",
    swatch: ["#D9A441", "#161A2B"],
    height: "sm",
  },
  {
    id: "br-01",
    title: "Tri-Fold Service Brochure",
    client: "Vantage Legal",
    category: "Brochures",
    swatch: ["#161A2B", "#1D5C63"],
    height: "md",
  },
  {
    id: "br-02",
    title: "Property Listing Brochure",
    client: "North & Fable",
    category: "Brochures",
    swatch: ["#6B6A66", "#FAF7F2"],
    height: "lg",
  },
  {
    id: "br-03",
    title: "Product Line Catalogue Insert",
    client: "Roadline Motors",
    category: "Brochures",
    swatch: ["#E9611D", "#161A2B"],
    height: "sm",
  },
];
