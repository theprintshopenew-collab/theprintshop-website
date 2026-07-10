"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/contact";

export function FloatingWhatsApp() {
  const href = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like a quote from The Print Shope."
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lifted"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
      <MessageCircle size={26} strokeWidth={2} />
    </motion.a>
  );
}
