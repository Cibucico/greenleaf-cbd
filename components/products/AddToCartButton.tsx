'use client'

import { useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/data/products'
import { cn } from '@/lib/utils'

interface AddToCartButtonProps {
  product: Product
  size?: 'sm' | 'lg'
  className?: string
}

export function AddToCartButton({ product, size = 'lg', className }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  function handleClick() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150 text-xs uppercase tracking-widest',
        size === 'lg' ? 'px-8 py-3.5' : 'px-4 py-2',
        added
          ? 'bg-emerald-600 text-white'
          : 'bg-gold-500/10 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-surface-400 hover:border-gold-500',
        className,
      )}
    >
      {added ? (
        <><Check size={13} /> Added</>
      ) : (
        <><ShoppingCart size={13} /> Add to Cart</>
      )}
    </button>
  )
}
