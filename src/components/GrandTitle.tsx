'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

interface StaggeredWordProps {
  text: string
  className?: string
  delayBase?: number
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
}

export function StaggeredText({
  text,
  className = '',
  delayBase = 60,
  as: Tag = 'span',
}: StaggeredWordProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  const words = text.split(' ').filter(Boolean)

  const Wrapper = Tag as any
  return (
    <Wrapper ref={ref as any} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block translate-y-6 opacity-0 transition-all duration-700 ease-out"
          style={{
            transitionDelay: `${visible ? i * delayBase + 80 : 0}ms`,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            opacity: visible ? 1 : 0,
          }}
        >
          {w}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Wrapper>
  )
}

export default function GrandTitle() {
  return (
    <section
      id="title"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100/80 to-cream-200/70 py-24 sm:py-28"
    >
      {/* decorative gradients */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gold-200/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gold-100/60 rounded-full blur-[120px]" />

      {/* subtle ornamental frame */}
      <div className="absolute inset-6 sm:inset-10 md:inset-16 rounded-[28px] border border-gold-300/40 pointer-events-none" />
      <div className="absolute inset-8 sm:inset-14 md:inset-20 rounded-[22px] border border-gold-200/30 pointer-events-none" />

      {/* corner ornaments */}
      <svg className="absolute top-12 right-12 sm:top-20 sm:right-24 w-16 h-16 text-gold-500 opacity-80" viewBox="0 0 64 64">
        <path fill="currentColor" d="M4 4 C20 4 36 12 44 28 C36 20 20 12 4 4 Z M4 4 C4 20 12 36 28 44 C20 36 12 20 4 4 Z" opacity="0.9"/>
        <circle cx="4" cy="4" r="3" fill="#D6336C"/>
      </svg>
      <svg className="absolute top-12 left-12 sm:top-20 sm:left-24 w-16 h-16 text-gold-500 opacity-80 rotate-90" viewBox="0 0 64 64">
        <path fill="currentColor" d="M4 4 C20 4 36 12 44 28 C36 20 20 12 4 4 Z M4 4 C4 20 12 36 28 44 C20 36 12 20 4 4 Z" opacity="0.9"/>
        <circle cx="4" cy="4" r="3" fill="#D6336C"/>
      </svg>
      <svg className="absolute bottom-12 right-12 sm:bottom-20 sm:right-24 w-16 h-16 text-gold-500 opacity-80 -rotate-90" viewBox="0 0 64 64">
        <path fill="currentColor" d="M4 4 C20 4 36 12 44 28 C36 20 20 12 4 4 Z M4 4 C4 20 12 36 28 44 C20 36 12 20 4 4 Z" opacity="0.9"/>
        <circle cx="4" cy="4" r="3" fill="#D6336C"/>
      </svg>
      <svg className="absolute bottom-12 left-12 sm:bottom-20 sm:left-24 w-16 h-16 text-gold-500 opacity-80 rotate-180" viewBox="0 0 64 64">
        <path fill="currentColor" d="M4 4 C20 4 36 12 44 28 C36 20 20 12 4 4 Z M4 4 C4 20 12 36 28 44 C20 36 12 20 4 4 Z" opacity="0.9"/>
        <circle cx="4" cy="4" r="3" fill="#D6336C"/>
      </svg>

      <div className="relative z-10 text-center px-6 sm:px-10 max-w-4xl mx-auto">
        <StaggeredText
          as="p"
          text="بمناسبة سعيدة نزفّ إليكم"
          className="font-aref text-2xl sm:text-3xl md:text-4xl text-ink-soft mb-6 sm:mb-8"
          delayBase={90}
        />

        {/* Family name */}
        <div className="mb-2">
          <h2 className="font-aref text-[56px] sm:text-[82px] md:text-[110px] leading-[0.9] mb-2 sm:mb-3 gold-shimmer tracking-wide">
            آل مرزوق
          </h2>
        </div>

        {/* Decorative separator */}
        <div className="flex items-center justify-center gap-3 mb-3 sm:mb-5">
          <span className="w-16 sm:w-28 md:w-40 h-[2px] gold-line rounded-full" />
          <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10 text-gold-500">
            <circle cx="20" cy="20" r="3" fill="#D6336C" />
            <path
              d="M20 4 L23 18 L37 20 L23 22 L20 36 L17 22 L3 20 L17 18 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="w-16 sm:w-28 md:w-40 h-[2px] gold-line rounded-full" />
        </div>

        {/* Groom name */}
        <StaggeredText
          as="h1"
          text="يوسف"
          className="font-aref text-[88px] sm:text-[128px] md:text-[170px] leading-[0.9] gold-shimmer tracking-wider"
          delayBase={180}
        />

        {/* Bride hint */}
        <p className="mt-4 sm:mt-6 font-aref text-2xl sm:text-3xl md:text-4xl text-ink-mid">
          و&nbsp;
          <span className="text-gold-gradient font-bold">نورة</span>
        </p>

        {/* Secondary separator */}
        <div className="flex items-center justify-center gap-3 my-8 sm:my-10 md:my-12">
          <svg viewBox="0 0 40 16" className="w-12 sm:w-16 h-5 sm:h-6 text-gold-500">
            <path d="M0 8 H18 M22 8 H40" stroke="currentColor" strokeWidth="1.2"/>
            <polygon points="20,2 24,8 20,14 16,8" fill="#D6336C"/>
          </svg>
        </div>

        {/* Date */}
        <div className="space-y-3 sm:space-y-4">
          <StaggeredText
            as="p"
            text="مساء الخميس ١٨ صفر ١٤٤٨ هـ — الموافق ٢٠ أغسطس ٢٠٢٦ م"
            className="font-aref text-xl sm:text-2xl md:text-3xl text-ink-dark leading-snug"
            delayBase={70}
          />
          <StaggeredText
            as="p"
            text="من الساعة التاسعة وحتى منتصف الليل"
            className="font-aref text-lg sm:text-xl md:text-2xl text-ink-mid"
            delayBase={60}
          />
        </div>

        {/* Scroll indicator */}
        <a
          href="#quran"
          className="inline-flex flex-col items-center gap-2 mt-14 sm:mt-20 text-gold-600 hover:text-gold-700 transition-colors group"
        >
          <span className="font-aref text-xl sm:text-2xl animate-pulse-soft">اكتشف التفاصيل</span>
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 animate-bounce" strokeWidth={2.2} />
        </a>
      </div>
    </section>
  )
}
