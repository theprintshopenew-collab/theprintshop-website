"use client";

import { Menu, Moon, Sun, Bell } from "lucide-react";
import type { AdminSection } from "./AdminShell";

const sectionTitles: Record<AdminSection, { title: string; subtitle: string }> = {
  analytics: {
    title: "Dashboard Analytics",
    subtitle: "Revenue, orders, and store performance at a glance.",
  },
  products: {
    title: "Products",
    subtitle: "Add, edit, and manage your product catalog.",
  },
  quotes: {
    title: "Quote Requests",
    subtitle: "Track and respond to incoming customer quotes.",
  },
};

type AdminTopbarProps = {
  section: AdminSection;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenMobileMenu: () => void;
};

export function AdminTopbar({
  section,
  darkMode,
  onToggleDarkMode,
  onOpenMobileMenu,
}: AdminTopbarProps) {
  const { title, subtitle } = sectionTitles[section];

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/80 px-5 py-4 backdrop-blur-md dark:border-slate-800 dark:bg-[#0B0D14]/80 sm:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          aria-label="Open admin menu"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-ink/5 dark:text-white dark:hover:bg-white/10 lg:hidden"
        >
          <Menu size={19} />
        </button>
        <div>
          <h1 className="font-display text-lg font-semibold text-ink dark:text-white sm:text-xl">
            {title}
          </h1>
          <p className="hidden text-xs text-neutral-600 dark:text-slate-400 sm:block">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-ink/5 dark:text-white dark:hover:bg-white/10"
        >
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
        </button>

        <button
          type="button"
          onClick={onToggleDarkMode}
          aria-label="Toggle dark mode"
          aria-pressed={darkMode}
          className="flex h-9 w-16 items-center rounded-full bg-neutral-100 p-1 transition-colors dark:bg-slate-800"
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-soft transition-transform duration-300 dark:bg-slate-600"
            style={{ transform: darkMode ? "translateX(28px)" : "translateX(0px)" }}
          >
            {darkMode ? (
              <Moon size={13} className="text-slate-200" />
            ) : (
              <Sun size={13} className="text-accent" />
            )}
          </span>
        </button>

        <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-semibold text-cream dark:bg-white/10 dark:text-white sm:flex">
          AD
        </div>
      </div>
    </header>
  );
}
