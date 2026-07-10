"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const sharedProps = {
    className: cn(className),
    initial: shouldReduceMotion ? "visible" : "hidden",
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.2 as const },
    variants,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  };

  if (as === "section") {
    return <motion.section {...sharedProps}>{children}</motion.section>;
  }

  return <motion.div {...sharedProps}>{children}</motion.div>;
}

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: "div" | "ul" | "tbody";
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.08,
  as = "div",
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();
  const sharedProps = {
    className: cn(className),
    initial: shouldReduceMotion ? "visible" : "hidden",
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.2 as const },
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: staggerDelay } },
    },
  };

  if (as === "ul") {
    return <motion.ul {...sharedProps}>{children}</motion.ul>;
  }

  if (as === "tbody") {
    return <motion.tbody {...sharedProps}>{children}</motion.tbody>;
  }

  return <motion.div {...sharedProps}>{children}</motion.div>;
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export { containerVariants };
