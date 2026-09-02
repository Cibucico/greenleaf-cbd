'use client'

import Link from 'next/link'
import { Trash2, Leaf, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

function formatCents(cents: number): string {
  return `R ${(cents / 100).toFixed(2)}`
}

export function CartView() {
  const { items, totalItems, totalCents, removeFromCart, updateQuantity } = useCart()

  if (totalItems === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-5">
        <Leaf size={60} strokeWidth={1} className="text-brand-200" />
        <p className="text-zinc-500 text-lg">Your cart is empty.</p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Items list */}
      <div className="lg:col-span-2 space-y-4">
        {items.map(({ product, quantity }) => (
          <div
            key={product.slug}
            className="flex gap-4 bg-white rounded-2xl border border-zinc-100 shadow-sm p-4"
          >
            {/* Image placeholder */}
            <div className="w-20 h-20 rounded-xl bg-brand-50 flex-shrink-0 flex items-center justify-center">
              {product.imageSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover w-full h-full rounded-xl"
                />
              ) : (
                <Leaf size={28} strokeWidth={1.2} className="text-brand-400" />
              )}
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <Link
                href={`/products/${product.slug}`}
                className="font-semibold text-zinc-900 hover:text-brand-700 text-sm leading-snug block truncate"
              >
                {product.name}
              </Link>
              {product.weight && (
                <p className="text-xs text-zinc-400 mt-0.5">{product.weight}</p>
              )}
              <p className="mt-1 font-bold text-brand-700 text-sm">
                {formatCents(product.price * quantity)}
              </p>
            </div>

            {/* Qty + remove */}
            <div className="flex flex-col items-end gap-3 flex-shrink-0">
              <button
                onClick={() => removeFromCart(product.slug)}
                className="text-zinc-300 hover:text-red-500 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 size={15} />
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(product.slug, quantity - 1)}
                  className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-brand-400 hover:text-brand-600 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={12} />
                </button>
                <span className="w-5 text-center text-sm font-semibold text-zinc-800">
                  {quantity}
                </span>
                <button
                  onClick={() => updateQuantity(product.slug, quantity + 1)}
                  className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-brand-400 hover:text-brand-600 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 rounded-2xl bg-brand-50 border border-brand-100 p-6 space-y-4">
          <h2 className="font-semibold text-zinc-900 text-lg">Order Summary</h2>

          <div className="space-y-2 text-sm text-zinc-600">
            {items.map(({ product, quantity }) => (
              <div key={product.slug} className="flex justify-between gap-2">
                <span className="truncate">{product.name} × {quantity}</span>
                <span className="font-medium text-zinc-800 flex-shrink-0">
                  {formatCents(product.price * quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-200 pt-3 flex justify-between font-bold text-zinc-900">
            <span>Total</span>
            <span className="text-brand-700 text-lg">{formatCents(totalCents)}</span>
          </div>

          <p className="text-xs text-zinc-400">Shipping calculated at checkout.</p>

          <Link
            href="/checkout"
            className="block w-full text-center rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 transition-colors duration-150"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/products"
            className="block w-full text-center text-sm text-brand-600 hover:underline"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
