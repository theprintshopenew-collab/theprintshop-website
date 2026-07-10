"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Trash2, Mail } from "lucide-react";
import { StaggerGroup, staggerItem } from "@/components/shared/AnimatedSection";
import { ConfirmDialog } from "./ConfirmDialog";
import { cn } from "@/lib/utils";
import type { QuoteRequest, QuoteStatus } from "@/data/admin";

const statusOptions: QuoteStatus[] = ["New", "Contacted", "Quoted", "Closed"];

const statusStyles: Record<QuoteStatus, string> = {
  New: "bg-accent/10 text-accent",
  Contacted: "bg-info/10 text-info",
  Quoted: "bg-gold/20 text-[#8A6416] dark:text-gold",
  Closed: "bg-success/10 text-success",
};

type QuotesSectionProps = {
  quotes: QuoteRequest[];
  onQuotesChange: (quotes: QuoteRequest[]) => void;
};

export function QuotesSection({ quotes, onQuotesChange }: QuotesSectionProps) {
  const [pendingDeleteId, setPendingDeleteId] = React.useState<string | null>(null);

  function updateStatus(id: string, status: QuoteStatus) {
    onQuotesChange(quotes.map((q) => (q.id === id ? { ...q, status } : q)));
  }

  function handleConfirmDelete() {
    if (!pendingDeleteId) return;
    onQuotesChange(quotes.filter((q) => q.id !== pendingDeleteId));
    setPendingDeleteId(null);
  }

  const quotePendingDelete = quotes.find((q) => q.id === pendingDeleteId);

  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-neutral-600 dark:text-slate-400">
        {quotes.length} quote request{quotes.length === 1 ? "" : "s"} total
      </p>

      <div className="overflow-hidden rounded-2xl border border-neutral-300/60 bg-white shadow-soft dark:border-slate-800 dark:bg-[#151926]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-300/60 text-xs uppercase tracking-wide text-neutral-600 dark:border-slate-800 dark:text-slate-400">
                <th className="px-5 py-3 font-semibold">Customer</th>
                <th className="px-5 py-3 font-semibold">Service</th>
                <th className="px-5 py-3 font-semibold">Quantity</th>
                <th className="px-5 py-3 font-semibold">Received</th>
                <th className="px-5 py-3 font-semibold">Status</th>
                <th className="px-5 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <StaggerGroup as="tbody" className="divide-y divide-neutral-300/60 dark:divide-slate-800">
              {quotes.map((quote) => (
                <motion.tr
                  key={quote.id}
                  variants={staggerItem}
                  className="transition-colors hover:bg-neutral-100/60 dark:hover:bg-white/5"
                >
                  <td className="px-5 py-3.5">
                    <p className="font-medium text-ink dark:text-white">{quote.name}</p>
                    <p className="flex items-center gap-1 text-xs text-neutral-600 dark:text-slate-400">
                      <Mail size={11} />
                      {quote.email}
                    </p>
                  </td>
                  <td className="px-5 py-3.5 text-neutral-600 dark:text-slate-400">
                    {quote.service}
                  </td>
                  <td className="px-5 py-3.5 text-neutral-600 dark:text-slate-400">
                    {quote.quantity}
                  </td>
                  <td className="px-5 py-3.5 text-neutral-600 dark:text-slate-400">
                    {quote.submittedAt}
                  </td>
                  <td className="px-5 py-3.5">
                    <select
                      value={quote.status}
                      onChange={(e) => updateStatus(quote.id, e.target.value as QuoteStatus)}
                      className={cn(
                        "cursor-pointer rounded-full border-0 px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-accent/30",
                        statusStyles[quote.status]
                      )}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <button
                      type="button"
                      onClick={() => setPendingDeleteId(quote.id)}
                      aria-label={`Delete quote from ${quote.name}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 transition-colors hover:bg-error/10 hover:text-error dark:text-slate-400"
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </StaggerGroup>
          </table>
        </div>

        {quotes.length === 0 && (
          <p className="px-5 py-10 text-center text-sm text-neutral-600 dark:text-slate-400">
            No quote requests yet.
          </p>
        )}
      </div>

      <ConfirmDialog
        open={pendingDeleteId !== null}
        title="Delete this quote request?"
        description={
          quotePendingDelete
            ? `The request from "${quotePendingDelete.name}" will be permanently removed.`
            : ""
        }
        onConfirm={handleConfirmDelete}
        onCancel={() => setPendingDeleteId(null)}
      />
    </div>
  );
}
