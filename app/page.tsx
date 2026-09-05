import Link from 'next/link'
import { HeroSection } from '@/components/products/HeroSection'
import { ProductGrid } from '@/components/products/ProductGrid'
import { featuredProducts } from '@/data/products'
import { FlaskConical, Leaf, Truck, ShieldCheck } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: FlaskConical, title: 'Lab Tested',          desc: 'Every batch independently verified for purity and potency.' },
  { icon: Leaf,         title: 'Natural Ingredients', desc: 'No artificial additives, pesticides, or hidden fillers.' },
  { icon: ShieldCheck,  title: 'SA Compliant',        desc: 'Fully compliant with South African CBD regulations.' },
  { icon: Truck,        title: 'Fast Delivery',       desc: 'Nationwide shipping with same-day dispatch on orders before 12pm.' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Featured products */}
      <section className="section-padding bg-surface-200">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
              Top Picks
            </p>
            <h2 className="text-3xl md:text-4xl text-stone-100">Featured Products</h2>
            <div className="gold-divider" />
          </div>
          <ProductGrid products={featuredProducts} columns={3} priority />
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-surface-400 hover:border-gold-500 font-semibold px-8 py-3 text-sm uppercase tracking-widest transition-all duration-150"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="section-padding bg-surface-300 border-y border-border">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_ITEMS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Icon size={20} className="text-gold-500" />
                </div>
                <h3 className="text-sm font-semibold text-stone-200 uppercase tracking-wide">{title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category spotlight */}
      <section className="section-padding bg-surface-200">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
              Browse by Type
            </p>
            <h2 className="text-3xl md:text-4xl text-stone-100">Our Range</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'CBD Oils',    desc: '2 products',  href: '/products?cat=oils',    icon: '🌿' },
              { label: 'Edibles',     desc: '4 products',  href: '/products?cat=edibles', icon: '🍫' },
              { label: 'CBD Drinks',  desc: '3 products',  href: '/products?cat=drinks',  icon: '🥤' },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-gold-500/40 p-8 flex flex-col gap-3 transition-all duration-300"
              >
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-lg font-semibold text-stone-200 group-hover:text-gold-400 transition-colors">
                  {cat.label}
                </h3>
                <p className="text-xs text-stone-500 uppercase tracking-widest">{cat.desc}</p>
                <span className="mt-2 text-xs text-gold-500 font-medium group-hover:underline">
                  Shop now →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-400 border-t border-border">
        <div className="section-container py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl text-stone-100">Not sure where to start?</h2>
            <p className="mt-2 text-stone-500 text-sm">
              WhatsApp us — we help you find the right product for your needs.
            </p>
          </div>
          <a
            href="https://wa.me/27000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 text-surface-400 font-semibold px-8 py-3 text-sm uppercase tracking-widest transition-colors"
          >
            Chat with Us
          </a>
        </div>
      </section>
    </>
  )
}
