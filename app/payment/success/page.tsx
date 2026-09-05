'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function PaymentSuccessPage() {
  const { clearCart } = useCart()
  useEffect(() => { clearCart() }, [clearCart])

  return (
    <div className="section-container section-padding flex flex-col items-center text-center gap-6 py-28">
      <div className="w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
        <CheckCircle size={40} className="text-gold-400" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Thank You</p>
        <h1 className="text-3xl md:text-4xl text-stone-100">Payment Successful</h1>
        <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4 mb-5" />
        <p className="text-stone-400 text-sm max-w-md mx-auto">
          We&apos;ve received your payment and will start preparing your order.
          A confirmation has been sent to your email.
        </p>
      </div>
      <Link href="/products"
        className="inline-flex items-center justify-center rounded-full bg-gold-500 hover:bg-gold-600 text-surface-400 font-semibold px-8 py-3 text-sm uppercase tracking-widest transition-colors">
        Continue Shopping
      </Link>
    </div>
  )
}
