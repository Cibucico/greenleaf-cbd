import type { Metadata } from 'next'
import { CartView } from './CartView'

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Review your GreenLeaf CBD order.',
}

export default function CartPage() {
  return (
    <div className="section-container section-padding">
      <h1 className="text-3xl md:text-4xl text-zinc-900 mb-8">Your Cart</h1>
      <CartView />
    </div>
  )
}
