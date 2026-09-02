'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Leaf, Menu, X, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about',    label: 'About & Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-brand-700 hover:text-brand-600 transition-colors">
          <Leaf size={22} strokeWidth={1.8} />
          <span className="font-bold text-xl tracking-tight">GreenLeaf CBD</span>
        </Link>

        {/* Desktop nav + cart */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150',
                    pathname === link.href
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-zinc-600 hover:text-brand-700 hover:bg-brand-50',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/cart"
            className="relative ml-3 p-2 rounded-full text-zinc-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
            aria-label="View cart"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/cart"
            className="relative p-2 rounded-full text-zinc-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
            aria-label="View cart"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>
          <button
            className="p-2 rounded-md text-zinc-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-zinc-700 hover:bg-brand-50 hover:text-brand-700',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              >
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
