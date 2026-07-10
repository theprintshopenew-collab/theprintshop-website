"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { quoteServiceOptions } from "@/data/contact";
import { serviceOfferings } from "@/data/services-page";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  quantity: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-neutral-300/70 bg-cream px-4 py-3 text-sm text-ink placeholder:text-neutral-600/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15";

function FormField({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 text-xs font-medium text-error"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const [form, setForm] = React.useState<FormState>(emptyForm);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<Status>("idle");

  React.useEffect(() => {
    const slug = searchParams.get("service");
    if (!slug) return;
    const matched = serviceOfferings.find((s) => s.id === slug);
    if (matched) {
      setForm((prev) => ({ ...prev, service: matched.title }));
    }
  }, [searchParams]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.service) nextErrors.service = "Select a service.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // Simulated submission — wire this up to your quote/email endpoint.
      await new Promise((resolve) => setTimeout(resolve, 1100));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    setForm(emptyForm);
    setErrors({});
    setStatus("idle");
  }

  return (
    <AnimatedSection
      delay={0.05}
      className="relative overflow-hidden rounded-3xl border border-neutral-300/60 bg-surface p-7 shadow-card sm:p-9"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center py-10 text-center"
          >
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success"
            >
              <CheckCircle2 size={32} />
            </motion.span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
              Quote request sent.
            </h3>
            <p className="mt-2 max-w-sm text-neutral-600">
              Thanks, {form.name.split(" ")[0] || "there"} — our team will
              email your quote within one business day.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-7 rounded-full border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-ink/5"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            noValidate
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Get a Quote
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Tell us what you&apos;re printing.
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Share a few details and we&apos;ll come back with pricing the
              same business day.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField label="Full name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Jordan Lee"
                  className={cn(inputClasses, errors.name && "border-error focus:border-error focus:ring-error/15")}
                />
              </FormField>

              <FormField label="Email address" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@company.com"
                  className={cn(inputClasses, errors.email && "border-error focus:border-error focus:ring-error/15")}
                />
              </FormField>

              <FormField label="Phone (optional)" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className={inputClasses}
                />
              </FormField>

              <FormField label="Quantity (optional)" htmlFor="quantity">
                <input
                  id="quantity"
                  type="text"
                  value={form.quantity}
                  onChange={(e) => updateField("quantity", e.target.value)}
                  placeholder="e.g. 500"
                  className={inputClasses}
                />
              </FormField>

              <div className="sm:col-span-2">
                <FormField label="Service" htmlFor="service" error={errors.service}>
                  <div className="relative">
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className={cn(
                        inputClasses,
                        "appearance-none pr-10",
                        errors.service && "border-error focus:border-error focus:ring-error/15"
                      )}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {quoteServiceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600"
                    />
                  </div>
                </FormField>
              </div>

              <div className="sm:col-span-2">
                <FormField label="Project details (optional)" htmlFor="message">
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Sizes, finishes, deadline — anything that helps us quote accurately."
                    className={cn(inputClasses, "resize-none")}
                  />
                </FormField>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={status !== "submitting" ? { scale: 1.01 } : undefined}
              whileTap={status !== "submitting" ? { scale: 0.98 } : undefined}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-cream shadow-soft transition-colors duration-300 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Sending request…
                </>
              ) : (
                <>
                  Request My Quote
                  <Send size={16} />
                </>
              )}
            </motion.button>

            <p className="mt-3 text-center text-xs text-neutral-600/70">
              No spam. We only use these details to send your quote.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}

export function QuoteForm() {
  return (
    <React.Suspense fallback={<QuoteFormSkeleton />}>
      <QuoteFormInner />
    </React.Suspense>
  );
}

function QuoteFormSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-neutral-300/60 bg-surface p-7 shadow-card sm:p-9">
      <div className="h-3 w-24 rounded-full bg-neutral-300/60" />
      <div className="mt-3 h-7 w-64 rounded-full bg-neutral-300/60" />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-12 rounded-xl bg-neutral-300/40" />
        ))}
      </div>
      <div className="mt-7 h-12 rounded-full bg-neutral-300/60" />
    </div>
  );
}
