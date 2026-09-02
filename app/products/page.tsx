import type { Metadata } from 'next'
import { ProductCatalog } from './ProductCatalog'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our full range of CBD oils, edibles, and drinks.',
}

export default function ProductsPage() {
  return (
    <div className="section-container section-padding">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl text-zinc-900">Our Products</h1>
        <p className="mt-3 text-zinc-500 max-w-xl">
          Everything in our range is lab-tested, naturally sourced, and crafted for your
          everyday wellness.
        </p>
      </div>
      <ProductCatalog />
    </div>
  )
}
