'use client'

import { useState } from 'react'
import { products } from '@/data/products'
import type { ProductCategory } from '@/data/products'
import { CategoryFilter } from '@/components/products/CategoryFilter'
import { ProductGrid } from '@/components/products/ProductGrid'

export function ProductCatalog() {
  const [active, setActive] = useState<ProductCategory | 'all'>('all')

  const filtered =
    active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <>
      <CategoryFilter selected={active} onChange={setActive} />
      <ProductGrid products={filtered} columns={3} />
    </>
  )
}
