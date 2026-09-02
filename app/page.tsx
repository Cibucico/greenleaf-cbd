import Link from 'next/link'
import { HeroSection } from '@/components/products/HeroSection'
import { ProductGrid } from '@/components/products/ProductGrid'
import { featuredProducts } from '@/data/products'
import { FlaskConical, Leaf, Truck } from 'lucide-react'

const TRUST_ITEMS = [
  {
    icon: FlaskConical,
    title: 'Lab Tested',
    desc: 'Every batch is independently tested for purity, potency, and safety.',
  },
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    desc: 'No artificial additives, pesticides, or fillers. Just what nature intended.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'We dispatch orders promptly across South Africa.',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Featured products */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-zinc-900">Featured Products</h2>
            <p className="mt-3 text-zinc-500 max-w-xl mx-auto">
              Handpicked from our range to get you started on your wellness journey.
            </p>
          </div>
          <ProductGrid products={featuredProducts} columns={3} priority />
        </div>
      </section>

      {/* Trust strip */}
      <section className="section-padding bg-brand-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST_ITEMS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3 p-6">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                  <Icon size={22} className="text-brand-600" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-brand-800">
        <div className="section-container py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl text-white">Browse Our Full Range</h2>
            <p className="mt-2 text-brand-200 text-sm">
              Oils, edibles, and drinks — there is something for everyone.
            </p>
          </div>
          <Link
            href="/products"
            className="flex-shrink-0 inline-flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-brand-700 font-semibold px-8 py-3 transition-colors duration-150"
          >
            View All Products
          </Link>
        </div>
      </section>
    </>
  )
}
