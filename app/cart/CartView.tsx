'use client'

import Link from 'next/link'
import { Trash2, Leaf, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

function fmt(cents: number) {
  return `R ${(cents / 100).toFixed(2)}`
}

export function CartView() {
  const { items, totalItems, totalCents, removeFromCart, updateQuantity } = useCart()

  if (totalItems === 0) {
    return (
      <div className="flex flex-col items-center py-20 text-center gap-5">
        <Leaf size={60} strokeWidth={0.8} className="text-gold-500/20" />
        <p className="text-stone-500">Your cart is empty.</p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-full bg-gold-500 hover:bg-gold-600 text-surface-400 font-semibold px-8 py-3 text-sm uppercase tracking-widest transition-colors"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Items */}
      <div className="lg:col-span-2 space-y-3">
        {items.map(({ product, quantity }) => (
          <div key={product.slug} className="flex gap-4 bg-card border border-border rounded-xl p-4">
            <div className="w-20 h-20 rounded-lg bg-surface-100 border border-border flex-shrink-0 flex items-center justify-center overflow-hidden">
              {product.imageSrc
                // eslint-disable-next-line @next/next/no-img-element
                ? <img src={product.imageSrc} alt={product.imageAlt} className="object-cover w-full h-full rounded-lg" />
                : <Leaf size={24} strokeWidth={1} className="text-gold-500/30" />
              }
            </div>

            <div className="flex-1 min-w-0">
              <Link href={`/products/${product.slug}`}
                className="font-semibold text-stone-200 hover:text-gold-400 text-sm leading-snug block truncate transition-colors">
                {product.name}
              </Link>
              {product.weight && <p className="text-xs text-stone-600 mt-0.5">{product.weight}</p>}
              <p className="mt-1 font-bold text-gold-400 text-sm">{fmt(product.price * quantity)}</p>
            </div>

            <div className="flex flex-col items-end gap-3 flex-shrink-0">
              <button onClick={() => removeFromCart(product.slug)}
                className="text-stone-600 hover:text-red-400 transition-colors" aria-label="Remove">
                <Trash2 size={14} />
              </button>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(product.slug, quantity - 1)}
                  className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-stone-500 hover:border-gold-500/50 hover:text-gold-400 transition-colors">
                  <Minus size={10} />
                </button>
                <span className="w-5 text-center text-sm font-semibold text-stone-300">{quantity}</span>
                <button onClick={() => updateQuantity(product.slug, quantity + 1)}
                  className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-stone-500 hover:border-gold-500/50 hover:text-gold-400 transition-colors">
                  <Plus size={10} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 rounded-xl bg-surface-300 border border-border p-6 space-y-4">
          <h2 className="font-semibold text-stone-200 text-base uppercase tracking-widest text-xs">
            Order Summary
          </h2>
          <div className="space-y-2 text-xs text-stone-500">
            {items.map(({ product, quantity }) => (
              <div key={product.slug} className="flex justify-between gap-2">
                <span className="truncate">{product.name} × {quantity}</span>
                <span className="font-medium text-stone-400 flex-shrink-0">{fmt(product.price * quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-3 flex justify-between font-bold text-stone-100">
            <span className="text-xs uppercase tracking-widest">Total</span>
            <span className="text-gold-400 text-lg">{fmt(totalCents)}</span>
          </div>
          <p className="text-[10px] text-stone-600">Shipping calculated at checkout.</p>
          <Link href="/checkout"
            className="block w-full text-center rounded-full bg-gold-500 hover:bg-gold-600 text-surface-400 font-semibold px-6 py-3 text-xs uppercase tracking-widest transition-colors">
            Proceed to Checkout
          </Link>
          <Link href="/products"
            className="block w-full text-center text-xs text-stone-500 hover:text-gold-400 transition-colors">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
