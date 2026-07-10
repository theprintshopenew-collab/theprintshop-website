"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  MessageSquareText,
  Printer,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { AdminSection } from "./AdminShell";

const navItems: { id: AdminSection; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "analytics", label: "Analytics", icon: LayoutDashboard },
  { id: "products", label: "Products", icon: Package },
  { id: "quotes", label: "Quotes", icon: MessageSquareText },
];

type AdminSidebarProps = {
  active: AdminSection;
  onSelect: (section: AdminSection) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

function SidebarContent({ active, onSelect }: Pick<AdminSidebarProps, "active" | "onSelect">) {
  return (
    <>
      <div className="flex items-center gap-2 px-2 py-1">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
          <Printer size={17} />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">The Print Shope</p>
          <p className="text-xs text-slate-400">Admin Panel</p>
        </div>
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "bg-accent text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon size={18} strokeWidth={isActive ? 2.25 : 1.9} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        className="mt-auto flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
      >
        <LogOut size={18} strokeWidth={1.9} />
        Sign out
      </button>
    </>
  );
}

export function AdminSidebar({ active, onSelect, mobileOpen, onCloseMobile }: AdminSidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 flex-shrink-0 flex-col bg-[#12151F] p-5 lg:flex">
        <SidebarContent active={active} onSelect={onSelect} />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={onCloseMobile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="absolute left-0 top-0 flex h-full w-64 flex-col bg-[#12151F] p-5"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={onCloseMobile}
                aria-label="Close menu"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-white/5 hover:text-white"
              >
                <X size={18} />
              </button>
              <SidebarContent
                active={active}
                onSelect={(section) => {
                  onSelect(section);
                  onCloseMobile();
                }}
              />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
