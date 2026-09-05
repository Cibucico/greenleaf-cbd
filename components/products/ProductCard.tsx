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
    <article className="group flex flex-col rounded-xl overflow-hidden bg-card border border-border hover:border-gold-500/40 transition-all duration-300">
      <Link href={`/products/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-square bg-surface-100 flex items-center justify-center overflow-hidden">
          {product.imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 w-full h-full group-hover:scale-105 transition-transform duration-500">
              <Leaf size={60} strokeWidth={0.8} className="text-gold-500/30" />
            </div>
          )}

          {/* Category badge overlay */}
          <div className="absolute top-3 left-3">
            <Badge category={product.category} />
          </div>
        </div>

        {/* Info */}
        <div className="p-4 pb-3">
          <h3 className="font-semibold text-stone-200 text-sm leading-snug group-hover:text-gold-400 transition-colors duration-200">
            {product.name}
          </h3>
          {(product.strength || product.flavor || product.weight) && (
            <p className="mt-1 text-[11px] text-stone-600 flex flex-wrap gap-2">
              {product.strength && <span>{product.strength}</span>}
              {product.flavor && <span>{product.flavor}</span>}
              {product.weight && <span>{product.weight}</span>}
            </p>
          )}
          <p className="mt-2 text-xs text-stone-500 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
          <p className="mt-3 text-gold-400 font-bold text-base">{product.priceDisplay}</p>
        </div>
      </Link>

      <div className="px-4 pb-4 mt-auto">
        <AddToCartButton product={product} size="sm" className="w-full" />
      </div>
    </article>
  )
}
