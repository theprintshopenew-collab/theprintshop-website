import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** If provided, renders as a Next.js Link instead of a <button>. */
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-cream hover:bg-accent-dark shadow-soft hover:shadow-card",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-ink/40 hover:bg-ink/5",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 rounded-full",
  md: "text-base px-6 py-3 rounded-full",
  lg: "text-base md:text-lg px-8 py-4 rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-tight transition-all duration-300 ease-out-soft",
    "focus-visible:outline-2 focus-visible:outline-accent",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
