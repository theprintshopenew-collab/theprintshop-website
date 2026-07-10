"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";
import { staggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

type StatCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

export function StatCard({ icon: Icon, label, value, change, trend }: StatCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="rounded-2xl border border-neutral-300/60 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card dark:border-slate-800 dark:bg-[#151926]"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Icon size={18} />
        </span>
        <span
          className={cn(
            "flex items-center gap-0.5 rounded-full px-2 py-1 text-xs font-semibold",
            trend === "up"
              ? "bg-success/10 text-success"
              : "bg-error/10 text-error"
          )}
        >
          {trend === "up" ? (
            <ArrowUpRight size={12} />
          ) : (
            <ArrowDownRight size={12} />
          )}
          {change}
        </span>
      </div>
      <p className="mt-5 font-display text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-slate-400">{label}</p>
    </motion.div>
  );
}
