import type { Metadata } from 'next'
import Link from 'next/link'
import { Construction, MessageCircle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Online checkout coming soon — order via WhatsApp or email in the meantime.',
}

const waLink = `https://wa.me/27000000000?text=${encodeURIComponent('Hi! I would like to place an order. Please let me know how to proceed.')}`

export default function CheckoutPage() {
  return (
    <div className="section-container section-padding flex flex-col items-center text-center gap-8 py-24">
      <div className="w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
        <Construction size={36} className="text-gold-500" strokeWidth={1.5} />
      </div>

      <div>
        <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
          Coming Soon
        </p>
        <h1 className="text-3xl md:text-4xl text-stone-100">Online Payments</h1>
        <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4 mb-5" />
        <p className="text-stone-400 text-sm max-w-md mx-auto">
          Our secure payment system is almost ready. In the meantime, place your order
          directly through WhatsApp or email — we respond within minutes.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 text-surface-400 font-semibold px-8 py-3 text-sm uppercase tracking-widest transition-colors">
          <MessageCircle size={16} />
          Order via WhatsApp
        </a>
        <a href="mailto:hello@cbdstore.co.za?subject=I'd like to place an order"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border text-stone-400 hover:border-gold-500/50 hover:text-gold-400 font-semibold px-8 py-3 text-sm uppercase tracking-widest transition-colors">
          <Mail size={16} />
          Email Us
        </a>
      </div>

      <Link href="/cart" className="text-xs text-stone-600 hover:text-gold-400 transition-colors uppercase tracking-widest">
        ← Back to cart
      </Link>
    </div>
  )
}
