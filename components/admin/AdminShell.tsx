"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";
import { AnalyticsSection } from "./AnalyticsSection";
import { ProductsSection } from "./ProductsSection";
import { QuotesSection } from "./QuotesSection";
import { initialProducts, initialQuotes, type AdminProduct, type QuoteRequest } from "@/data/admin";

export type AdminSection = "analytics" | "products" | "quotes";

export function AdminShell() {
  const [activeSection, setActiveSection] = React.useState<AdminSection>("analytics");
  const [darkMode, setDarkMode] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [products, setProducts] = React.useState<AdminProduct[]>(initialProducts);
  const [quotes, setQuotes] = React.useState<QuoteRequest[]>(initialQuotes);

  const pendingQuoteCount = quotes.filter((q) => q.status === "New").length;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen bg-neutral-100 dark:bg-[#0B0D14]">
        <AdminSidebar
          active={activeSection}
          onSelect={setActiveSection}
          mobileOpen={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        <div className="flex min-h-screen flex-1 flex-col">
          <AdminTopbar
            section={activeSection}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode((prev) => !prev)}
            onOpenMobileMenu={() => setMobileMenuOpen(true)}
          />

          <main className="flex-1 px-5 py-6 sm:px-8 sm:py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeSection === "analytics" && (
                  <AnalyticsSection
                    productCount={products.length}
                    pendingQuoteCount={pendingQuoteCount}
                    darkMode={darkMode}
                  />
                )}
                {activeSection === "products" && (
                  <ProductsSection products={products} onProductsChange={setProducts} />
                )}
                {activeSection === "quotes" && (
                  <QuotesSection quotes={quotes} onQuotesChange={setQuotes} />
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
