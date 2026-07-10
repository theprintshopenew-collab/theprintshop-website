"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, ImageIcon } from "lucide-react";
import { StaggerGroup, staggerItem } from "@/components/shared/AnimatedSection";
import { ProductFormModal } from "./ProductFormModal";
import { ConfirmDialog } from "./ConfirmDialog";
import { type AdminProduct } from "@/data/admin";

const swatchPool: [string, string][] = [
  ["#161A2B", "#E9611D"],
  ["#D9A441", "#1D5C63"],
  ["#1D5C63", "#F1EEE8"],
  ["#1F1E1C", "#C4432B"],
  ["#C4432B", "#161A2B"],
  ["#2E7D4F", "#161A2B"],
];

function ProductThumbnail({ product }: { product: AdminProduct }) {
  if (product.images.length > 0) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-12 w-12 flex-shrink-0 rounded-lg object-cover"
      />
    );
  }
  return (
    <div
      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
      style={{
        background: `linear-gradient(135deg, ${product.swatch[0]} 0%, ${product.swatch[1]} 100%)`,
      }}
    >
      <ImageIcon size={16} className="text-white/70" />
    </div>
  );
}

type ProductsSectionProps = {
  products: AdminProduct[];
  onProductsChange: (products: AdminProduct[]) => void;
};

export function ProductsSection({ products, onProductsChange }: ProductsSectionProps) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [pendingDeleteId, setPendingDeleteId] = React.useState<string | null>(null);

  function handleAddProduct(newProduct: Omit<AdminProduct, "id" | "createdAt" | "swatch">) {
    const product: AdminProduct = {
      ...newProduct,
      id: `p${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 10),
      swatch: swatchPool[products.length % swatchPool.length],
    };
    onProductsChange([product, ...products]);
    setModalOpen(false);
  }

  function handleConfirmDelete() {
    if (!pendingDeleteId) return;
    onProductsChange(products.filter((p) => p.id !== pendingDeleteId));
    setPendingDeleteId(null);
  }

  const productPendingDelete = products.find((p) => p.id === pendingDeleteId);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-600 dark:text-slate-400">
          {products.length} product{products.length === 1 ? "" : "s"} in catalog
        </p>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-dark"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-300/60 bg-white shadow-soft dark:border-slate-800 dark:bg-[#151926]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-300/60 text-xs uppercase tracking-wide text-neutral-600 dark:border-slate-800 dark:text-slate-400">
                <th className="px-5 py-3 font-semibold">Product</th>
                <th className="px-5 py-3 font-semibold">Category</th>
                <th className="px-5 py-3 font-semibold">Price</th>
                <th className="px-5 py-3 font-semibold">Stock</th>
                <th className="px-5 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <StaggerGroup as="tbody" className="divide-y divide-neutral-300/60 dark:divide-slate-800">
              {products.map((product) => (
                <motion.tr
                  key={product.id}
                  variants={staggerItem}
                  className="transition-colors hover:bg-neutral-100/60 dark:hover:bg-white/5"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <ProductThumbnail product={product} />
                      <div>
                        <p className="font-medium text-ink dark:text-white">{product.name}</p>
                        <p className="text-xs text-neutral-600 dark:text-slate-400">
                          Added {product.createdAt}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-neutral-600 dark:text-slate-400">
                    {product.category}
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-ink dark:text-white">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={
                        product.stock < 50
                          ? "font-semibold text-error"
                          : "text-neutral-600 dark:text-slate-400"
                      }
                    >
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <button
                      type="button"
                      onClick={() => setPendingDeleteId(product.id)}
                      aria-label={`Delete ${product.name}`}
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

        {products.length === 0 && (
          <p className="px-5 py-10 text-center text-sm text-neutral-600 dark:text-slate-400">
            No products yet — add your first one above.
          </p>
        )}
      </div>

      <ProductFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddProduct}
      />

      <ConfirmDialog
        open={pendingDeleteId !== null}
        title="Delete this product?"
        description={
          productPendingDelete
            ? `"${productPendingDelete.name}" will be permanently removed from your catalog.`
            : ""
        }
        onConfirm={handleConfirmDelete}
        onCancel={() => setPendingDeleteId(null)}
      />
    </div>
  );
}
