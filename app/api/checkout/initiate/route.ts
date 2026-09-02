import { NextRequest, NextResponse } from 'next/server'
import { buildPayFastFormData, getPayFastUrl } from '@/lib/payfast'
import { randomUUID } from 'crypto'
import type { CartItem } from '@/context/CartContext'

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, items } = (await req.json()) as {
      firstName: string
      lastName: string
      email: string
      items: CartItem[]
    }

    if (!firstName || !lastName || !email || !items?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const merchantId  = process.env.PAYFAST_MERCHANT_ID  ?? ''
    const merchantKey = process.env.PAYFAST_MERCHANT_KEY  ?? ''
    const passphrase  = process.env.PAYFAST_PASSPHRASE    ?? null
    const baseUrl     = process.env.NEXT_PUBLIC_BASE_URL  ?? 'http://localhost:3000'

    if (!merchantId || !merchantKey) {
      return NextResponse.json(
        { error: 'PayFast credentials not configured. Set PAYFAST_MERCHANT_ID and PAYFAST_MERCHANT_KEY.' },
        { status: 500 },
      )
    }

    // Total in Rands (PayFast expects two-decimal string, e.g. "249.99")
    const totalCents  = items.reduce((s, i) => s + i.product.price * i.quantity, 0)
    const amountRands = (totalCents / 100).toFixed(2)

    const itemSummary = items
      .map((i) => `${i.product.name} ×${i.quantity}`)
      .join(', ')

    const m_payment_id = randomUUID()

    const formData = buildPayFastFormData(
      {
        merchant_id:      merchantId,
        merchant_key:     merchantKey,
        return_url:       `${baseUrl}/payment/success`,
        cancel_url:       `${baseUrl}/payment/cancel`,
        notify_url:       `${baseUrl}/api/payfast/notify`,
        name_first:       firstName,
        name_last:        lastName,
        email_address:    email,
        m_payment_id,
        amount:           amountRands,
        item_name:        'GreenLeaf CBD Order',
        item_description: itemSummary.slice(0, 255),
      },
      passphrase,
    )

    return NextResponse.json({ redirectUrl: getPayFastUrl(), formData })
  } catch (err) {
    console.error('Checkout initiate error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
