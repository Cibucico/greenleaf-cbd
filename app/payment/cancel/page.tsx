import Link from 'next/link'
import { XCircle } from 'lucide-react'

export default function PaymentCancelPage() {
  return (
    <div className="section-container section-padding flex flex-col items-center text-center gap-6 py-28">
      <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
        <XCircle size={40} className="text-red-400" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-stone-500 text-xs font-semibold uppercase tracking-widest mb-3">Cancelled</p>
        <h1 className="text-3xl md:text-4xl text-stone-100">Payment Cancelled</h1>
        <div className="w-12 h-0.5 bg-stone-700 mx-auto mt-4 mb-5" />
        <p className="text-stone-400 text-sm max-w-md mx-auto">
          You have not been charged. Your cart is still saved — return to checkout whenever
          you&apos;re ready.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/checkout"
          className="inline-flex items-center justify-center rounded-full bg-gold-500 hover:bg-gold-600 text-surface-400 font-semibold px-8 py-3 text-sm uppercase tracking-widest transition-colors">
          Try Again
        </Link>
        <Link href="/products"
          className="inline-flex items-center justify-center rounded-full border border-border text-stone-400 hover:border-gold-500/50 hover:text-gold-400 font-semibold px-8 py-3 text-sm uppercase tracking-widest transition-colors">
          Browse Products
        </Link>
      </div>
    </div>
  )
}
