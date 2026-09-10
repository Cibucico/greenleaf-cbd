import Link from 'next/link'
import { Leaf, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-400 border-b border-border">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2d5a27 0%, transparent 40%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-0.5 bg-gold-500" />
            <span className="text-gold-500 text-xs font-semibold uppercase tracking-widest">
              Premium CBD Products
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-50 leading-[1.05] tracking-tight">
            Craft Cannabis.{' '}
            <span className="text-gold-400">Cape Town Made.</span>{' '}
            SA Delivered.
          </h1>

          <p className="mt-6 text-lg text-stone-400 leading-relaxed max-w-lg">
            Official Sodaze reseller — craft sodas, gummies, fudge, and premium CBD oils.
            Real ingredients, no artificial additives, lab-tested and delivered nationwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 text-surface-400 font-semibold px-8 py-3.5 text-sm tracking-wide transition-colors duration-150"
            >
              Shop Now
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-stone-700 text-stone-300 hover:border-gold-500 hover:text-gold-400 font-semibold px-8 py-3.5 text-sm tracking-wide transition-colors duration-150"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6 text-xs text-stone-500">
            {['Lab Tested', 'Natural Ingredients', 'SA Sourced', 'Fast Delivery'].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <Leaf size={12} className="text-gold-600" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute right-0 top-0 w-64 h-64 md:w-96 md:h-96 opacity-10 flex items-center justify-center">
        <Leaf size={280} strokeWidth={0.5} className="text-gold-500 translate-x-1/4 -translate-y-1/4" />
      </div>
    </section>
  )
}
