import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'GreenLeaf CBD',
    template: '%s | GreenLeaf CBD',
  },
  description:
    'Premium CBD oils, edibles, and drinks. Natural wellness products crafted with care, lab-tested and South Africa-sourced.',
  keywords: ['CBD', 'hemp', 'wellness', 'CBD oil', 'CBD gummies', 'CBD drinks', 'South Africa'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-zinc-900 antialiased`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
