'use client'

import { useReveal } from './QuranVerse'
import { Phone, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const { ref, revealed } = useReveal<HTMLDivElement>()

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-cream-200/60 via-cream-100/70 to-cream-50"
    >
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold-200/40 rounded-full blur-[110px]" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gold-100/60 rounded-full blur-[110px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-500">
            <path
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 15.46A16.92 16.92 0 0 1 8.54 3 1.85 1.85 0 0 0 7 3.49l-2 5.75a1.85 1.85 0 0 0 .6 2.05l1.43 1.43a1.85 1.85 0 0 0 2.05.6l1.2-.48a15.24 15.24 0 0 0 6.6 6.6l-.48 1.2a1.85 1.85 0 0 0 .6 2.05l1.43 1.43a1.85 1.85 0 0 0 2.05.6l5.75-2a1.85 1.85 0 0 0 .49-1.54Z"
              fill="currentColor"
              opacity="0.85"
            />
          </svg>
          <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
        </div>
        <h2 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient mb-4">
          للتواصل والاستفسار
        </h2>
        <p className="font-ibm text-ink-soft text-base sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-14">
          لأي استفسار بخصوص الحفل أو الدعوة، نحن هنا لمساعدتكم بكل سرور
        </p>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {/* Call */}
          <a
            href="tel:+966501234567"
            className="group relative block"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 800ms ease-out 150ms',
            }}
          >
            <div className="absolute -inset-0.5 bg-gold-gradient rounded-[22px] opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-4 sm:gap-5 bg-cream-50 rounded-[20px] border-2 border-gold-400 p-5 sm:p-6 shadow-sm hover:shadow-gold transition-all duration-400 hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-white shrink-0">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.3} />
              </div>
              <div className="flex-1 text-right">
                <p className="font-ibm text-ink-muted text-xs sm:text-sm tracking-widest mb-1">
                  اتصال هاتفي
                </p>
                <p className="font-aref text-2xl sm:text-3xl text-ink-dark leading-tight">
                  اتصل بنا
                </p>
                <p className="font-cormorant text-lg sm:text-xl text-gold-700 font-semibold tracking-wider ltr text-right">
                  +966 50 123 4567
                </p>
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/966501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 800ms ease-out 300ms',
            }}
          >
            <div className="absolute -inset-0.5 bg-gold-gradient rounded-[22px] opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-4 sm:gap-5 bg-cream-50 rounded-[20px] border-2 border-gold-400 p-5 sm:p-6 shadow-sm hover:shadow-gold transition-all duration-400 hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-white shrink-0">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.2} />
              </div>
              <div className="flex-1 text-right">
                <p className="font-ibm text-ink-muted text-xs sm:text-sm tracking-widest mb-1">
                  رسالة فورية
                </p>
                <p className="font-aref text-2xl sm:text-3xl text-ink-dark leading-tight">
                  واتساب
                </p>
                <p className="font-ibm text-sm sm:text-base text-ink-soft">
                  رد خلال دقائق، إن شاء الله
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
