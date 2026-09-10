import Link from 'next/link'
import { Leaf, MessageCircle, Mail } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-400 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <Leaf size={16} strokeWidth={1.8} className="text-gold-500" />
              </div>
              <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
                Sodaze
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Premium, lab-tested CBD products crafted for your natural wellness journey.
              South Africa sourced.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              {[
                { href: '/',         label: 'Home' },
                { href: '/products', label: 'Products' },
                { href: '/about',    label: 'Contact Us' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a
                  href="https://wa.me/27609609830"
                  className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                  <MessageCircle size={14} />
                  +27 60 960 9830
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@cbdstore.co.za"
                  className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                  <Mail size={14} />
                  hello@cbdstore.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-stone-600">
          © {year} Sodaze. All rights reserved.{' '}
          <span className="block sm:inline mt-1 sm:mt-0 sm:ml-2">
            CBD products are not intended to diagnose, treat, cure or prevent any disease.
          </span>
        </div>
      </div>
    </footer>
  )
}
