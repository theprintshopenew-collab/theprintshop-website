export type ServiceIcon =
  | "business-cards"
  | "stickers"
  | "labels"
  | "tyre-bands"
  | "brochures"
  | "catalogues"
  | "letterheads"
  | "bill-books"
  | "flyers"
  | "posters"
  | "packaging-labels";

export type ServiceOffering = {
  id: ServiceIcon;
  title: string;
  description: string;
  icon: ServiceIcon;
  swatch: [string, string];
  minQty: string;
  turnaround: string;
};

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "business-cards",
    title: "Business Cards",
    description:
      "16pt uncoated, silk, or foil-edged cards that hold up to a full day of handshakes.",
    icon: "business-cards",
    swatch: ["#161A2B", "#E9611D"],
    minQty: "From 50 cards",
    turnaround: "2–3 day print",
  },
  {
    id: "stickers",
    title: "Stickers",
    description:
      "Die-cut vinyl stickers in matte, gloss, or holographic finish — any shape, any size.",
    icon: "stickers",
    swatch: ["#D9A441", "#FAF7F2"],
    minQty: "From 100 pcs",
    turnaround: "2 day print",
  },
  {
    id: "labels",
    title: "Labels",
    description:
      "Waterproof product and shipping labels that survive fridges, freezers, and transit.",
    icon: "labels",
    swatch: ["#1D5C63", "#F1EEE8"],
    minQty: "From 250 pcs",
    turnaround: "3 day print",
  },
  {
    id: "tyre-bands",
    title: "Tyre Bands",
    description:
      "Weatherproof vinyl bands for tyre shops — your branding wrapped around every sale.",
    icon: "tyre-bands",
    swatch: ["#1F1E1C", "#D8D3C9"],
    minQty: "From 100 pcs",
    turnaround: "3–4 day print",
  },
  {
    id: "brochures",
    title: "Brochures",
    description:
      "Bi-fold and tri-fold brochures on heavyweight stock, folded and scored in-house.",
    icon: "brochures",
    swatch: ["#C4432B", "#161A2B"],
    minQty: "From 100 pcs",
    turnaround: "3 day print",
  },
  {
    id: "catalogues",
    title: "Catalogues",
    description:
      "Saddle-stitched or perfect-bound catalogues for full product line-ups.",
    icon: "catalogues",
    swatch: ["#2E7D4F", "#F1EEE8"],
    minQty: "From 50 pcs",
    turnaround: "4–5 day print",
  },
  {
    id: "letterheads",
    title: "Letterheads",
    description:
      "Branded letterheads on premium bond paper for every official document.",
    icon: "letterheads",
    swatch: ["#161A2B", "#D9A441"],
    minQty: "From 100 sheets",
    turnaround: "2 day print",
  },
  {
    id: "bill-books",
    title: "Bill Books",
    description:
      "Carbonless duplicate and triplicate bill books, numbered and bound to order.",
    icon: "bill-books",
    swatch: ["#E9611D", "#161A2B"],
    minQty: "From 5 books",
    turnaround: "3–4 day print",
  },
  {
    id: "flyers",
    title: "Flyers",
    description:
      "Single and double-sided flyers built to get read, not recycled.",
    icon: "flyers",
    swatch: ["#D9A441", "#161A2B"],
    minQty: "From 100 pcs",
    turnaround: "2 day print",
  },
  {
    id: "posters",
    title: "Posters",
    description:
      "Large-format posters up to A0, printed on matte or photo-gloss stock.",
    icon: "posters",
    swatch: ["#1D5C63", "#D8D3C9"],
    minQty: "From 10 pcs",
    turnaround: "2–3 day print",
  },
  {
    id: "packaging-labels",
    title: "Packaging Labels",
    description:
      "Custom packaging labels with tamper-evident and food-safe options.",
    icon: "packaging-labels",
    swatch: ["#2E7D4F", "#161A2B"],
    minQty: "From 250 pcs",
    turnaround: "3 day print",
  },
];
