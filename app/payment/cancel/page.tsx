import Link from 'next/link'
import { XCircle } from 'lucide-react'

export default function PaymentCancelPage() {
  return (
    <div className="section-container section-padding flex flex-col items-center text-center gap-6 py-28">
      <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
        <XCircle size={44} className="text-red-400" strokeWidth={1.5} />
      </div>
      <h1 className="text-3xl md:text-4xl text-zinc-900">Payment Cancelled</h1>
      <p className="text-zinc-500 max-w-md">
        Your payment was cancelled and you have not been charged. Your cart is still saved
        — you can return to checkout whenever you&apos;re ready.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/checkout"
          className="inline-flex items-center justify-center rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3 transition-colors"
        >
          Try Again
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-full border-2 border-brand-500 text-brand-600 hover:bg-brand-50 font-semibold px-8 py-3 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    </div>
  )
}
