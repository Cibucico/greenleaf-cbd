import { ProductCard } from './ProductCard'
import type { Product } from '@/data/products'
import { cn } from '@/lib/utils'

interface ProductGridProps {
  products: Product[]
  columns?: 2 | 3 | 4
  priority?: boolean
}

const colClasses: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

export function ProductGrid({ products, columns = 3, priority }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-zinc-400">No products found in this category.</p>
    )
  }

  return (
    <div className={cn('grid grid-cols-1 gap-6', colClasses[columns])}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={priority && index < 3}
        />
      ))}
    </div>
  )
}
