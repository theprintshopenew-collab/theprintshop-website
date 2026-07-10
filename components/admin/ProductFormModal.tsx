"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, UploadCloud, ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { productCategories, type AdminProduct, type ProductCategory } from "@/data/admin";

type ProductFormModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (product: Omit<AdminProduct, "id" | "createdAt" | "swatch">) => void;
};

const inputClasses =
  "w-full rounded-xl border border-neutral-300/70 bg-neutral-100/60 px-4 py-2.5 text-sm text-ink placeholder:text-neutral-600/50 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500";

export function ProductFormModal({ open, onClose, onSave }: ProductFormModalProps) {
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState<ProductCategory>(productCategories[0]);
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [images, setImages] = React.useState<string[]>([]);
  const [dragActive, setDragActive] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  function reset() {
    setName("");
    setCategory(productCategories[0]);
    setPrice("");
    setStock("");
    setImages([]);
    setError(null);
  }

  function handleClose() {
    reset();
    onClose();
  }

  function readFiles(files: FileList | null) {
    if (!files) return;
    Array.from(files)
      .filter((file) => file.type.startsWith("image/"))
      .forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            setImages((prev) => [...prev, reader.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
  }

  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !price || !stock) {
      setError("Name, price, and stock are required.");
      return;
    }
    onSave({
      name: name.trim(),
      category,
      price: Number(price),
      stock: Number(stock),
      images,
    });
    reset();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-end justify-center sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-lifted dark:bg-[#151926] sm:rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-neutral-300/60 px-6 py-4 dark:border-slate-800">
              <h2 className="font-display text-lg font-semibold text-ink dark:text-white">
                Add Product
              </h2>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-600 hover:bg-ink/5 dark:text-slate-400 dark:hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="product-name" className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                    Product name
                  </label>
                  <input
                    id="product-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Premium Foil Business Cards"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="product-category" className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                    Category
                  </label>
                  <select
                    id="product-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ProductCategory)}
                    className={cn(inputClasses, "appearance-none")}
                  >
                    {productCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="product-price" className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                    Price ($)
                  </label>
                  <input
                    id="product-price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="19.00"
                    className={inputClasses}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="product-stock" className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                    Stock quantity
                  </label>
                  <input
                    id="product-stock"
                    type="number"
                    min="0"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="240"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Image upload */}
              <div className="mt-5">
                <span className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                  Product images
                </span>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragActive(false);
                    readFiles(e.dataTransfer.files);
                  }}
                  className={cn(
                    "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 text-center transition-colors duration-200",
                    dragActive
                      ? "border-accent bg-accent/5"
                      : "border-neutral-300 dark:border-slate-700"
                  )}
                >
                  <UploadCloud size={22} className="text-neutral-600 dark:text-slate-400" />
                  <p className="text-sm text-neutral-600 dark:text-slate-400">
                    Drag & drop images, or{" "}
                    <label className="cursor-pointer font-semibold text-accent underline underline-offset-2">
                      browse
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="sr-only"
                        onChange={(e) => readFiles(e.target.files)}
                      />
                    </label>
                  </p>
                </div>

                {images.length > 0 && (
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {images.map((src, i) => (
                      <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt="" className="h-full w-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          aria-label="Remove image"
                          className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ink/80 text-white opacity-0 transition-opacity group-hover:opacity-100"
                        >
                          <X size={11} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {images.length === 0 && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-600/70 dark:text-slate-500">
                    <ImageOff size={13} />
                    No images yet — a placeholder swatch will be used.
                  </p>
                )}
              </div>

              {error && (
                <p className="mt-4 text-sm font-medium text-error">{error}</p>
              )}

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink/5 dark:text-white dark:hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  Save Product
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
