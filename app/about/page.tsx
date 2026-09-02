import type { Metadata } from 'next'
import { MessageCircle, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About & Contact',
  description:
    'Learn about GreenLeaf CBD and get in touch to place an order or ask a question.',
}

export default function AboutPage() {
  const waLink = `https://wa.me/27000000000?text=${encodeURIComponent('Hi GreenLeaf CBD! I have a question about your products.')}`

  return (
    <div className="section-container section-padding">
      {/* Header */}
      <div className="max-w-2xl mb-14">
        <h1 className="text-3xl md:text-4xl text-zinc-900">About GreenLeaf CBD</h1>
        <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
          We believe wellness should be accessible, transparent, and rooted in nature.
        </p>
      </div>

      {/* Brand story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div className="space-y-5 text-zinc-600 leading-relaxed">
          <p>
            GreenLeaf CBD was born from a simple idea: that people deserve honest, high-quality
            CBD products without the confusion and inflated prices. We started small — a passion
            project rooted in South Africa — and every product we craft reflects that same
            commitment to quality and integrity.
          </p>
          <p>
            We source our hemp from trusted, sustainable farms and work with certified labs to
            verify every batch before it reaches you. No shortcuts. No hidden ingredients.
            Just clean, effective CBD in forms you love — oils, edibles, and drinks.
          </p>
          <p>
            Our team is small but passionate. We answer every message personally, because we
            genuinely care about your experience and your wellbeing. Whether you are new to CBD
            or a seasoned user, we are here to help you find what works best for you.
          </p>
        </div>

        {/* Values */}
        <div className="space-y-6">
          {[
            { title: 'Transparency', desc: 'Lab reports available for every product on request.' },
            { title: 'Quality', desc: 'Small-batch production ensures consistent, premium results.' },
            { title: 'Community', desc: 'South African owned and operated — supporting local.' },
          ].map(({ title, desc }) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-zinc-800">{title}</p>
                <p className="text-sm text-zinc-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="rounded-2xl bg-brand-50 border border-brand-100 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl text-zinc-900 mb-3">Ready to Order?</h2>
        <p className="text-zinc-500 mb-8 max-w-lg">
          We do not have an automated checkout — reach out directly and we will get back to you
          promptly. WhatsApp is the fastest way to reach us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 bg-white rounded-xl p-6 border border-zinc-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
              <MessageCircle size={20} className="text-brand-600" />
            </div>
            <div>
              <p className="font-semibold text-zinc-800">WhatsApp</p>
              <p className="text-sm text-zinc-500 mt-0.5">+27 000 000 0000</p>
            </div>
            <span className="text-xs text-brand-600 font-medium">Chat with us →</span>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@greenleafcbd.co.za"
            className="flex flex-col gap-3 bg-white rounded-xl p-6 border border-zinc-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
              <Mail size={20} className="text-brand-600" />
            </div>
            <div>
              <p className="font-semibold text-zinc-800">Email</p>
              <p className="text-sm text-zinc-500 mt-0.5">hello@greenleafcbd.co.za</p>
            </div>
            <span className="text-xs text-brand-600 font-medium">Send an email →</span>
          </a>

          {/* Hours */}
          <div className="flex flex-col gap-3 bg-white rounded-xl p-6 border border-zinc-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
              <Clock size={20} className="text-brand-600" />
            </div>
            <div>
              <p className="font-semibold text-zinc-800">Hours</p>
              <p className="text-sm text-zinc-500 mt-0.5">Mon–Fri: 8am – 6pm</p>
              <p className="text-sm text-zinc-500">Sat: 9am – 2pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
