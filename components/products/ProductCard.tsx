import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { AddToCartButton } from '@/components/products/AddToCartButton'
import type { Product } from '@/data/products'
import { Leaf } from 'lucide-react'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square bg-brand-50 flex items-center justify-center overflow-hidden">
          {product.imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-brand-300 gap-2 p-8 w-full h-full group-hover:scale-105 transition-transform duration-300">
              <Leaf size={56} strokeWidth={1.2} className="text-brand-400" />
              <span className="text-xs text-brand-500 font-medium">GreenLeaf CBD</span>
            </div>
          )}
        </div>

        <div className="p-4 pb-2">
          <Badge category={product.category} className="mb-2" />
          <h3 className="mt-1 font-semibold text-zinc-900 text-base leading-snug group-hover:text-brand-700 transition-colors">
            {product.name}
          </h3>
          {(product.strength || product.flavor || product.weight) && (
            <p className="mt-1 text-xs text-zinc-400 flex flex-wrap gap-2">
              {product.strength && <span>{product.strength}</span>}
              {product.flavor && <span>{product.flavor}</span>}
              {product.weight && <span>{product.weight}</span>}
            </p>
          )}
          <p className="mt-2 text-sm text-zinc-500 line-clamp-2">{product.shortDescription}</p>
          <p className="mt-3 text-lg font-bold text-brand-700">{product.priceDisplay}</p>
        </div>
      </Link>

      <div className="px-4 pb-4 mt-auto">
        <AddToCartButton product={product} size="sm" className="w-full" />
      </div>
    </article>
  )
}
