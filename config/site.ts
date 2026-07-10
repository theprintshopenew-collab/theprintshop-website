export const siteConfig = {
  name: "The Print Shope",
  tagline: "Made to be held.",
  description:
    "Premium business cards, packaging, apparel, and marketing print — designed online with a free studio, printed on real materials, and delivered in days.",
  url: "https://theprintshope.com",
  ogImage: "/og-image.png",
  links: {
    instagram: "https://instagram.com/theprintshope",
    facebook: "https://facebook.com/theprintshope",
    twitter: "https://twitter.com/theprintshope",
    pinterest: "https://pinterest.com/theprintshope",
  },
  contact: {
    email: "hello@theprintshope.com",
    phone: "+1 (800) 555-0198",
  },
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Design Studio", href: "/design-studio" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Business Cards", href: "/products/business-cards" },
      { label: "Marketing Materials", href: "/products/marketing-materials" },
      { label: "Packaging & Labels", href: "/products/packaging" },
      { label: "Apparel & Merch", href: "/products/apparel" },
      { label: "Signage & Banners", href: "/products/signage" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help-center" },
      { label: "Track Order", href: "/track-order" },
      { label: "Shipping & Delivery", href: "/help-center/shipping-delivery" },
      { label: "File Requirements", href: "/help-center/file-requirements" },
      { label: "Returns & Reprints", href: "/help-center/returns-refunds" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Refund Policy", href: "/legal/refund-policy" },
    ],
  },
];
