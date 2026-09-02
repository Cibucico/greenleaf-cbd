import Link from 'next/link'
import { Leaf, MessageCircle, Mail } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Leaf size={20} strokeWidth={1.8} className="text-brand-300" />
              <span className="font-bold text-lg">GreenLeaf CBD</span>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed">
              Premium, lab-tested CBD products crafted for your natural wellness journey.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-brand-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-brand-100">
              {[
                { href: '/',         label: 'Home' },
                { href: '/products', label: 'Products' },
                { href: '/about',    label: 'About Us' },
                { href: '/about',    label: 'Contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-brand-300 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-brand-100">
              <li>
                <a
                  href="https://wa.me/27000000000"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle size={15} />
                  +27 000 000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@greenleafcbd.co.za"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={15} />
                  hello@greenleafcbd.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-800 text-center text-xs text-brand-400">
          © {year} GreenLeaf CBD. All rights reserved. CBD products are not intended to diagnose,
          treat, cure or prevent any disease.
        </div>
      </div>
    </footer>
  )
}
