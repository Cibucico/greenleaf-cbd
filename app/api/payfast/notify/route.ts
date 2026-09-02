import { NextRequest, NextResponse } from 'next/server'
import { verifyPayFastITN } from '@/lib/payfast'

// PayFast ITN (Instant Transaction Notification) webhook handler
export async function POST(req: NextRequest) {
  try {
    const text = await req.text()
    const body = Object.fromEntries(new URLSearchParams(text)) as Record<string, string>

    const passphrase = process.env.PAYFAST_PASSPHRASE || null
    const valid = await verifyPayFastITN(body, passphrase)

    if (!valid) {
      console.error('PayFast ITN signature mismatch', body)
      return new NextResponse('Invalid signature', { status: 400 })
    }

    const { payment_status, m_payment_id, amount_gross } = body

    if (payment_status === 'COMPLETE') {
      // TODO: mark order as paid in your database
      // e.g. await db.orders.update({ where: { id: m_payment_id }, data: { paid: true, amountPaid: amount_gross } })
      console.log(`Order ${m_payment_id} paid: R${amount_gross}`)
    }

    return new NextResponse('OK', { status: 200 })
  } catch (err) {
    console.error('PayFast ITN error', err)
    return new NextResponse('Error', { status: 500 })
  }
}
