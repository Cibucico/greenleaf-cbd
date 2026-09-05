import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProductBySlug, products } from '@/data/products'
import { Badge } from '@/components/ui/Badge'
import { AddToCartButton } from '@/components/products/AddToCartButton'
import { MessageCircle, Mail, ArrowLeft, Leaf } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return { title: product.name, description: product.shortDescription }
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const waMessage = encodeURIComponent(
    `Hi! I'd like to order: ${product.name} (${product.priceDisplay}). Please let me know how to proceed.`,
  )
  const waLink = `https://wa.me/27000000000?text=${waMessage}`

  return (
    <div className="section-container section-padding">
      {/* Back */}
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-gold-400 transition-colors mb-8 uppercase tracking-widest font-medium"
      >
        <ArrowLeft size={13} />
        All Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative aspect-square rounded-xl bg-surface-100 border border-border flex items-center justify-center overflow-hidden">
          {product.imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={product.imageSrc} alt={product.imageAlt} className="object-cover w-full h-full" />
          ) : (
            <Leaf size={120} strokeWidth={0.6} className="text-gold-500/20" />
          )}
        </div>

        {/* Details */}
        <div>
          <Badge category={product.category} className="mb-4" />
          <h1 className="text-2xl md:text-3xl text-stone-100 leading-tight">{product.name}</h1>

          {/* Meta pills */}
          <div className="mt-3 flex flex-wrap gap-2">
            {[product.strength, product.flavor, product.weight].filter(Boolean).map((v) => (
              <span key={v} className="text-xs border border-border text-stone-500 rounded-full px-3 py-1">
                {v}
              </span>
            ))}
          </div>

          <p className="mt-5 text-3xl font-extrabold text-gold-400">{product.priceDisplay}</p>

          <div className="mt-5 space-y-3">
            {product.longDescription.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm text-stone-400 leading-relaxed">{para}</p>
            ))}
          </div>

          {/* Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <AddToCartButton product={product} size="lg" className="flex-1" />
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border border-border text-stone-400 hover:border-gold-500/50 hover:text-gold-400 font-semibold px-6 py-3 text-xs uppercase tracking-widest transition-colors"
            >
              View Cart
            </Link>
          </div>

          {/* Contact */}
          <div className="mt-6 p-5 rounded-xl bg-surface-100 border border-border">
            <p className="text-xs text-stone-500 mb-3 uppercase tracking-widest">
              Prefer to order directly?
            </p>
            <div className="flex gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gold-400 hover:underline font-medium">
                <MessageCircle size={13} /> WhatsApp
              </a>
              <a href={`mailto:hello@cbdstore.co.za?subject=Order: ${encodeURIComponent(product.name)}`}
                className="inline-flex items-center gap-2 text-xs text-gold-400 hover:underline font-medium">
                <Mail size={13} /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
