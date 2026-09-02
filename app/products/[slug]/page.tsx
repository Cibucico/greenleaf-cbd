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
    `Hi GreenLeaf CBD! I'd like to order: ${product.name} (${product.priceDisplay}). Please let me know how to proceed.`,
  )
  const waLink = `https://wa.me/27000000000?text=${waMessage}`

  return (
    <div className="section-container section-padding">
      {/* Back */}
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-brand-600 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Product image */}
        <div className="relative aspect-square rounded-2xl bg-brand-50 flex items-center justify-center overflow-hidden">
          {product.imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-brand-300 gap-3">
              <Leaf size={100} strokeWidth={0.8} className="text-brand-400" />
              <span className="text-sm text-brand-500 font-medium">GreenLeaf CBD</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <Badge category={product.category} className="mb-3" />
          <h1 className="text-2xl md:text-3xl text-zinc-900 leading-tight">{product.name}</h1>

          {/* Meta pills */}
          <div className="mt-3 flex flex-wrap gap-2">
            {product.strength && (
              <span className="text-xs bg-zinc-100 text-zinc-600 rounded-full px-3 py-1">
                {product.strength}
              </span>
            )}
            {product.flavor && (
              <span className="text-xs bg-zinc-100 text-zinc-600 rounded-full px-3 py-1">
                {product.flavor}
              </span>
            )}
            {product.weight && (
              <span className="text-xs bg-zinc-100 text-zinc-600 rounded-full px-3 py-1">
                {product.weight}
              </span>
            )}
          </div>

          <p className="mt-5 text-3xl font-extrabold text-brand-700">{product.priceDisplay}</p>

          <div className="mt-5 prose prose-zinc prose-sm max-w-none">
            {product.longDescription.split('\n\n').map((para, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed mb-3">
                {para}
              </p>
            ))}
          </div>

          {/* Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <AddToCartButton product={product} size="lg" className="flex-1" />
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-500 text-brand-600 hover:bg-brand-50 font-semibold px-6 py-3 transition-colors duration-150"
            >
              View Cart
            </Link>
          </div>

          {/* Contact CTAs */}
          <div className="mt-5 rounded-2xl bg-brand-50 border border-brand-100 p-5">
            <p className="text-sm text-zinc-500 mb-3">Prefer to order directly? Reach us on:</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-700 hover:underline font-medium"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href={`mailto:hello@greenleafcbd.co.za?subject=Order: ${encodeURIComponent(product.name)}`}
                className="inline-flex items-center gap-2 text-sm text-brand-700 hover:underline font-medium"
              >
                <Mail size={15} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
