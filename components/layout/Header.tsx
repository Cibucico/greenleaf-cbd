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
  { href: '/about',    label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-surface-300/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo — leaf icon only, no brand name until supplier confirms */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
          <div className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-400 transition-colors">
            <Leaf size={18} strokeWidth={1.8} className="text-gold-500" />
          </div>
          <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
            Sodaze
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150',
                    pathname === link.href
                      ? 'text-gold-400 bg-gold-500/10'
                      : 'text-stone-400 hover:text-gold-300 hover:bg-gold-500/5',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/cart"
            className="relative ml-3 p-2 rounded-full text-stone-400 hover:text-gold-400 hover:bg-gold-500/10 transition-colors"
            aria-label="View cart"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold-500 text-surface-400 text-[10px] font-bold flex items-center justify-center">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <Link href="/cart" className="relative p-2 text-stone-400 hover:text-gold-400 transition-colors" aria-label="Cart">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold-500 text-surface-400 text-[10px] font-bold flex items-center justify-center">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>
          <button
            className="p-2 text-stone-400 hover:text-gold-400 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-surface-300 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {[...NAV_LINKS, { href: '/cart', label: `Cart${totalItems > 0 ? ` (${totalItems})` : ''}` }].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-gold-400 bg-gold-500/10'
                      : 'text-stone-400 hover:text-gold-300 hover:bg-gold-500/5',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
