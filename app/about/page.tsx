import type { Metadata } from 'next'
import { MessageCircle, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to place an order or ask a question about our CBD products.',
}

const waLink = `https://wa.me/27609609830?text=${encodeURIComponent('Hi! I have a question about your CBD products.')}`

export default function AboutPage() {
  return (
    <div className="section-container section-padding">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
          About Us
        </p>
        <h1 className="text-3xl md:text-4xl text-stone-100">Premium CBD, Delivered.</h1>
        <div className="w-12 h-0.5 bg-gold-500 mt-4 mb-5" />
        <p className="text-stone-400 text-lg leading-relaxed">
          We believe wellness should be accessible, honest, and rooted in nature.
        </p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div className="space-y-4 text-stone-400 text-sm leading-relaxed">
          <p>
            We started with a simple mission: bring genuinely high-quality CBD products to
            South Africans without the confusion and inflated prices. Every product we carry
            is sourced from trusted, sustainable suppliers and third-party tested before it
            reaches you.
          </p>
          <p>
            No shortcuts. No hidden ingredients. Just clean, effective CBD in forms you love —
            oils, edibles, and drinks — all compliant with South African regulations.
          </p>
          <p>
            We are a small, passionate team and we answer every message personally. Whether
            you are new to CBD or a seasoned user, we are here to guide you to the right product.
          </p>
        </div>

        <div className="space-y-5">
          {[
            { title: 'Transparency',    desc: 'Lab reports available for every product on request.' },
            { title: 'Quality First',   desc: 'We only stock what we would use ourselves.' },
            { title: 'SA Community',    desc: 'Proudly South African owned and operated.' },
            { title: 'Fast Response',   desc: 'We reply to every WhatsApp and email same day.' },
          ].map(({ title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="mt-1 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0 mt-2" />
              <div>
                <p className="font-semibold text-stone-200 text-sm">{title}</p>
                <p className="text-xs text-stone-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-xl bg-surface-300 border border-border p-8 md:p-12">
        <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
          Get in Touch
        </p>
        <h2 className="text-2xl md:text-3xl text-stone-100 mb-2">Ready to Order?</h2>
        <p className="text-stone-500 text-sm mb-8 max-w-lg">
          Online checkout is coming soon. Until then, reach out directly — we respond fast
          and can process your order within minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="group flex flex-col gap-3 bg-surface-200 rounded-xl p-6 border border-border hover:border-gold-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <MessageCircle size={18} className="text-gold-500" />
            </div>
            <div>
              <p className="font-semibold text-stone-200 text-sm">WhatsApp</p>
              <p className="text-xs text-stone-500 mt-0.5">+27 60 960 9830</p>
            </div>
            <span className="text-xs text-gold-500 font-medium group-hover:underline">Chat now →</span>
          </a>

          <a href="mailto:hello@cbdstore.co.za"
            className="group flex flex-col gap-3 bg-surface-200 rounded-xl p-6 border border-border hover:border-gold-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <Mail size={18} className="text-gold-500" />
            </div>
            <div>
              <p className="font-semibold text-stone-200 text-sm">Email</p>
              <p className="text-xs text-stone-500 mt-0.5">hello@cbdstore.co.za</p>
            </div>
            <span className="text-xs text-gold-500 font-medium group-hover:underline">Send email →</span>
          </a>

          <div className="flex flex-col gap-3 bg-surface-200 rounded-xl p-6 border border-border">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <Clock size={18} className="text-gold-500" />
            </div>
            <div>
              <p className="font-semibold text-stone-200 text-sm">Hours</p>
              <p className="text-xs text-stone-500 mt-0.5">Mon–Fri: 8am – 6pm</p>
              <p className="text-xs text-stone-500">Sat: 9am – 2pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
