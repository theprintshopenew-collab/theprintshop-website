# The Print Shope

A complete, production-ready marketing site + admin panel for a premium
custom-printing company, built with Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS, and Framer Motion.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, why-choose-us, featured products, testimonials, FAQ |
| `/services` | 11 service categories as animated cards, each linking to the quote form |
| `/portfolio` | Masonry portfolio grid with category filters and a keyboard-navigable lightbox |
| `/contact-us` | Contact methods (call/WhatsApp/email), working hours, Google Map, quote request form |
| `/admin` | Internal dashboard — analytics, product management, quote management, dark mode |

`/admin` is excluded from the public nav/footer chrome, from the sitemap, and from search indexing (`noindex` + `robots.ts` disallow rule).

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` for the site and `http://localhost:3000/admin` for the dashboard.

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # lint
```

> If `npm install` raises peer-dependency warnings (Next 15 / React 19 is a
> very recent combination), retry with `npm install --legacy-peer-deps`.

## Folder structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, global metadata, Organization JSON-LD, Navbar/Footer
│   ├── page.tsx                 # Home
│   ├── globals.css
│   ├── icon.svg                  # Favicon (Next.js file convention, auto-injected)
│   ├── sitemap.ts                 # Dynamic sitemap.xml (excludes /admin)
│   ├── robots.ts                   # robots.txt (disallows /admin)
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── contact-us/page.tsx
│   └── admin/page.tsx               # noindex — internal dashboard
│
├── components/
│   ├── ui/
│   │   └── Button.tsx                # Link-or-button atom, 3 variants x 3 sizes
│   ├── shared/
│   │   └── AnimatedSection.tsx         # AnimatedSection + StaggerGroup motion wrappers (div/ul/section/tbody)
│   ├── organisms/                       # Public-site sections
│   │   ├── Navbar.tsx                    # Sticky, scroll-aware, mobile drawer, hides on /admin
│   │   ├── Footer.tsx                     # Mega footer, hides on /admin
│   │   ├── Hero.tsx                        # Signature fanned-card 3D visual
│   │   ├── Services.tsx                     # Home services grid
│   │   ├── WhyChooseUs.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx                            # Animated accordion + FAQPage JSON-LD
│   │   ├── ServiceCard.tsx                     # /services cards
│   │   ├── PortfolioGrid.tsx                    # Masonry grid + filters
│   │   ├── Lightbox.tsx                          # Keyboard-navigable image lightbox
│   │   ├── ContactMethods.tsx                     # Call / WhatsApp / Email cards
│   │   ├── WorkingHoursCard.tsx
│   │   ├── MapEmbed.tsx                             # Key-less Google Maps embed
│   │   ├── QuoteForm.tsx                             # Validated quote request form
│   │   └── FloatingWhatsApp.tsx
│   └── admin/                                          # Admin-only components
│       ├── AdminShell.tsx                               # Orchestrator: state, dark mode, section routing
│       ├── AdminSidebar.tsx
│       ├── AdminTopbar.tsx
│       ├── AnalyticsSection.tsx                          # Stat cards + Recharts line/bar charts
│       ├── ProductsSection.tsx                            # Product table
│       ├── ProductFormModal.tsx                            # Add Product + drag-drop image upload
│       ├── QuotesSection.tsx                                # Quote table + inline status
│       ├── StatCard.tsx
│       └── ConfirmDialog.tsx                                 # Reusable delete-confirmation modal
│
├── config/
│   ├── fonts.ts                # Fraunces + Inter via next/font/google
│   └── site.ts                  # siteConfig, primaryNav, footerNav
│
├── data/                          # Typed static/mock content (swap for a CMS or API later)
│   ├── home.ts
│   ├── services-page.ts
│   ├── portfolio.ts
│   ├── contact.ts
│   └── admin.ts
│
└── lib/
    └── utils.ts                    # cn() class-merging helper
```

## Design tokens

Defined in `tailwind.config.ts`:

- **Colors:** `ink` #161A2B, `cream` #FAF7F2, `accent` #E9611D (+ dark/light),
  `gold` #D9A441, neutral scale, semantic `success`/`error`/`info`.
- **Type:** `font-display` (Fraunces, serif) for headlines, `font-sans`
  (Inter) for UI/body.
- **Motion easing:** `ease-out-soft` = `cubic-bezier(0.16, 1, 0.3, 1)`,
  applied consistently for a "soft deceleration" feel across the site.
- **Dark mode:** `darkMode: "class"` — used only inside `/admin`, where
  `AdminShell` toggles a `dark` class on its own wrapper. The public site is
  always light and unaffected.

## SEO

- Per-page `Metadata` (title templates, description, canonical URL) on every
  route.
- `Organization` JSON-LD sitewide (root layout), plus page-specific
  structured data: `FAQPage` (Home), `ItemList`/`Service` (Services),
  `CollectionPage` (Portfolio), `ContactPage` (Contact).
- `sitemap.ts` and `robots.ts` (App Router conventions) — `/admin` is
  excluded from both.
- `icon.svg` favicon via Next.js's file-convention (auto-injected, no manual
  `<link>` needed).
- Fonts self-hosted via `next/font` — zero layout shift, no external font
  requests.
- Semantic heading hierarchy, alt text, and keyboard-accessible interactive
  elements (lightbox, accordion, forms, admin modals) throughout.

## Admin dashboard notes

- **State is in-memory only.** Products, quotes, and uploaded product images
  reset on page refresh — there's no backend yet. Wire up a database + API
  routes (or a service like Supabase/PlanetScale) to persist data.
- **No authentication.** `/admin` is reachable by anyone who knows the URL.
  Add real auth (NextAuth, Clerk, a middleware-based check, etc.) before
  deploying.
- Image "uploads" are read client-side via `FileReader` into base64 data
  URLs — fine for a prototype, but you'll want real object storage (S3, R2,
  Cloudinary, etc.) in production.

## Before deploying

- Replace `siteConfig.url` in `src/config/site.ts` with your real domain —
  it feeds `metadataBase`, canonical URLs, the sitemap, and JSON-LD.
- Add a real Open Graph image; `siteConfig.ogImage` currently points to
  `/og-image.png`, which doesn't exist yet.
- Swap the mock content in `src/data/*.ts` for real product/testimonial/
  portfolio data (or a CMS query).
- Nav links pointing to `/products`, `/design-studio`, `/solutions`,
  `/pricing`, `/blog`, `/auth/login`, and the `/legal/*` and `/help-center/*`
  routes referenced in the footer are placeholders from the original
  sitemap — they'll 404 until those pages are built.

## Accessibility

- Visible focus rings on all interactive elements (`globals.css`).
- Scroll/entrance animations respect `prefers-reduced-motion` (both via
  Framer Motion's `useReducedMotion` and a global CSS override).
- Lightbox and modals: `role="dialog"`/`role="alertdialog"`,
  `aria-modal`, Escape-to-close, focus moved to the close button on open.
- Forms: every input has an associated `<label>`, errors are announced via
  `aria-live` region behavior (animated in/out), status changes are visible
  as text, not color alone.
