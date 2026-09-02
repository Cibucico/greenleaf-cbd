import Link from 'next/link'
import { Leaf } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-brand-50 via-white to-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold uppercase tracking-widest mb-4">
              <Leaf size={14} />
              Premium CBD Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-tight">
              Natural Wellness,{' '}
              <span className="text-brand-600">Crafted with Care</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-600 max-w-lg">
              Explore our curated range of lab-tested CBD oils, edibles, and drinks.
              Simple ingredients. Real results. Sourced right here in South Africa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 transition-colors duration-150"
              >
                Shop Products
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-500 text-brand-600 hover:bg-brand-50 font-semibold px-8 py-3 transition-colors duration-150"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Decorative illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80 rounded-full bg-brand-100 flex items-center justify-center">
              <div className="absolute inset-4 rounded-full bg-brand-200 opacity-50" />
              <div className="absolute inset-10 rounded-full bg-brand-300 opacity-30" />
              <Leaf
                size={140}
                strokeWidth={0.8}
                className="text-brand-600 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
