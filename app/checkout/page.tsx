import type { Metadata } from 'next'
import Link from 'next/link'
import { Construction, MessageCircle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Online checkout coming soon — order via WhatsApp or email in the meantime.',
}

const waLink = `https://wa.me/27000000000?text=${encodeURIComponent('Hi GreenLeaf CBD! I would like to place an order. Please let me know how to proceed.')}`

export default function CheckoutPage() {
  return (
    <div className="section-container section-padding flex flex-col items-center text-center gap-8 py-24">
      <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center">
        <Construction size={40} className="text-amber-500" strokeWidth={1.5} />
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl text-zinc-900">Online Payments Coming Soon</h1>
        <p className="mt-4 text-zinc-500 max-w-md mx-auto">
          We are still setting up our secure payment system. In the meantime, contact us directly
          to place your order — we respond quickly!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 transition-colors"
        >
          <MessageCircle size={18} />
          Order via WhatsApp
        </a>
        <a
          href="mailto:hello@greenleafcbd.co.za?subject=I'd like to place an order"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-500 text-brand-600 hover:bg-brand-50 font-semibold px-8 py-3 transition-colors"
        >
          <Mail size={18} />
          Email Us
        </a>
      </div>

      <Link href="/cart" className="text-sm text-zinc-400 hover:text-brand-600 transition-colors">
        ← Back to cart
      </Link>
    </div>
  )
}
