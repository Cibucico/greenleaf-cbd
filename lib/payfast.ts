import crypto from 'crypto'

export interface PayFastParams {
  merchant_id: string
  merchant_key: string
  return_url: string
  cancel_url: string
  notify_url: string
  name_first: string
  name_last: string
  email_address: string
  m_payment_id: string
  amount: string        // e.g. "249.99"
  item_name: string
  item_description?: string
}

function buildQueryString(params: Record<string, string>): string {
  return Object.keys(params)
    .filter((k) => params[k] !== '' && params[k] !== undefined)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k]).replace(/%20/g, '+')}`)
    .join('&')
}

export function generateSignature(
  params: Record<string, string>,
  passphrase: string | null,
): string {
  let qs = buildQueryString(params)
  if (passphrase) {
    qs += `&passphrase=${encodeURIComponent(passphrase).replace(/%20/g, '+')}`
  }
  return crypto.createHash('md5').update(qs).digest('hex')
}

export function buildPayFastFormData(
  params: PayFastParams,
  passphrase: string | null,
): Record<string, string> {
  const data: Record<string, string> = {
    merchant_id:   params.merchant_id,
    merchant_key:  params.merchant_key,
    return_url:    params.return_url,
    cancel_url:    params.cancel_url,
    notify_url:    params.notify_url,
    name_first:    params.name_first,
    name_last:     params.name_last,
    email_address: params.email_address,
    m_payment_id:  params.m_payment_id,
    amount:        params.amount,
    item_name:     params.item_name,
  }
  if (params.item_description) data.item_description = params.item_description

  data.signature = generateSignature(data, passphrase)
  return data
}

export const PAYFAST_SANDBOX_URL = 'https://sandbox.payfast.co.za/eng/process'
export const PAYFAST_LIVE_URL    = 'https://www.payfast.co.za/eng/process'

export function getPayFastUrl(): string {
  return process.env.PAYFAST_SANDBOX === 'true' ? PAYFAST_SANDBOX_URL : PAYFAST_LIVE_URL
}

// Verify an ITN (Instant Transaction Notification) from PayFast
export async function verifyPayFastITN(
  body: Record<string, string>,
  passphrase: string | null,
): Promise<boolean> {
  const { signature, ...rest } = body
  const expected = generateSignature(rest, passphrase)
  return expected === signature
}
