'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { CheckCircle } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function PaymentSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="section-container section-padding flex flex-col items-center text-center gap-6 py-28">
      <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center">
        <CheckCircle size={44} className="text-brand-600" strokeWidth={1.5} />
      </div>
      <h1 className="text-3xl md:text-4xl text-zinc-900">Payment Successful!</h1>
      <p className="text-zinc-500 max-w-md">
        Thank you for your order. We&apos;ve received your payment and will start preparing
        your items. A confirmation will be sent to your email.
      </p>
      <Link
        href="/products"
        className="inline-flex items-center justify-center rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
