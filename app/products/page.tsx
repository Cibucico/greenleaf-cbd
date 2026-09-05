import type { Metadata } from 'next'
import { ProductCatalog } from './ProductCatalog'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our full range of premium CBD oils, edibles, and drinks.',
}

export default function ProductsPage() {
  return (
    <div className="section-container section-padding">
      <div className="mb-10">
        <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
          Our Range
        </p>
        <h1 className="text-3xl md:text-4xl text-stone-100">All Products</h1>
        <div className="w-12 h-0.5 bg-gold-500 mt-4 mb-3" />
        <p className="text-stone-400 text-sm max-w-lg">
          Every product in our range is independently lab-tested, naturally sourced, and
          crafted for your everyday wellness.
        </p>
      </div>
      <ProductCatalog />
    </div>
  )
}
