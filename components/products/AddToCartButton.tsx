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
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150',
        size === 'lg'
          ? 'px-8 py-3 text-base'
          : 'px-5 py-2 text-sm',
        added
          ? 'bg-brand-700 text-white'
          : 'bg-brand-500 hover:bg-brand-600 text-white',
        className,
      )}
    >
      {added ? (
        <>
          <Check size={size === 'lg' ? 18 : 15} />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart size={size === 'lg' ? 18 : 15} />
          Add to Cart
        </>
      )}
    </button>
  )
}
