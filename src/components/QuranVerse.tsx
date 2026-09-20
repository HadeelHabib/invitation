'use client'

import { useEffect, useRef, useState } from 'react'

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, revealed }
}

export default function QuranVerse() {
  const { ref, revealed } = useReveal<HTMLDivElement>()

  return (
    <section
      id="quran"
      className="relative w-full py-24 sm:py-32 md:py-36 overflow-hidden bg-gradient-to-b from-cream-200/70 via-cream-100 to-cream-50"
    >
      {/* subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 15 30 5 Z M5 30 Q15 35 25 30 Q15 25 5 30 Z M55 30 Q45 35 35 30 Q45 25 55 30 Z M30 55 Q35 45 30 35 Q25 45 30 55 Z' fill='none' stroke='%239E6A20' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='3' fill='%239E6A20'/%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px',
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 transition-all duration-[1200ms] ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="relative bg-cream-50 rounded-[28px] p-6 sm:p-10 md:p-14 shadow-gold-lg border border-gold-200/70">
          {/* Outer gold double border */}
          <div className="pointer-events-none absolute inset-2 sm:inset-4 rounded-[22px] border-2 border-gold-500/80" />
          <div className="pointer-events-none absolute inset-[14px] sm:inset-[22px] rounded-[18px] border border-gold-400/60" />

          {/* Corner ornaments */}
          <svg
            viewBox="0 0 80 80"
            className="absolute top-5 right-5 sm:top-9 sm:right-9 w-14 h-14 sm:w-20 sm:h-20 text-gold-600"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 20 C10 10 20 5 40 5 M5 0 C12 10 22 18 40 22" />
              <path d="M0 50 C5 35 15 25 30 22 M10 58 L30 58 L30 40" stroke="#FF4081" strokeWidth="1" />
            </g>
            <circle cx="8" cy="8" r="3.5" fill="#D6336C" />
            <circle cx="14" cy="22" r="1.8" fill="#D6336C" />
            <circle cx="22" cy="14" r="1.8" fill="#D6336C" />
          </svg>
          <svg
            viewBox="0 0 80 80"
            className="absolute top-5 left-5 sm:top-9 sm:left-9 w-14 h-14 sm:w-20 sm:h-20 text-gold-600 rotate-90"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 20 C10 10 20 5 40 5 M5 0 C12 10 22 18 40 22" />
              <path d="M0 50 C5 35 15 25 30 22 M10 58 L30 58 L30 40" stroke="#FF4081" strokeWidth="1" />
            </g>
            <circle cx="8" cy="8" r="3.5" fill="#D6336C" />
            <circle cx="14" cy="22" r="1.8" fill="#D6336C" />
            <circle cx="22" cy="14" r="1.8" fill="#D6336C" />
          </svg>
          <svg
            viewBox="0 0 80 80"
            className="absolute bottom-5 right-5 sm:bottom-9 sm:right-9 w-14 h-14 sm:w-20 sm:h-20 text-gold-600 -rotate-90"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 20 C10 10 20 5 40 5 M5 0 C12 10 22 18 40 22" />
              <path d="M0 50 C5 35 15 25 30 22 M10 58 L30 58 L30 40" stroke="#FF4081" strokeWidth="1" />
            </g>
            <circle cx="8" cy="8" r="3.5" fill="#D6336C" />
            <circle cx="14" cy="22" r="1.8" fill="#D6336C" />
            <circle cx="22" cy="14" r="1.8" fill="#D6336C" />
          </svg>
          <svg
            viewBox="0 0 80 80"
            className="absolute bottom-5 left-5 sm:bottom-9 sm:left-9 w-14 h-14 sm:w-20 sm:h-20 text-gold-600 rotate-180"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 20 C10 10 20 5 40 5 M5 0 C12 10 22 18 40 22" />
              <path d="M0 50 C5 35 15 25 30 22 M10 58 L30 58 L30 40" stroke="#FF4081" strokeWidth="1" />
            </g>
            <circle cx="8" cy="8" r="3.5" fill="#D6336C" />
            <circle cx="14" cy="22" r="1.8" fill="#D6336C" />
            <circle cx="22" cy="14" r="1.8" fill="#D6336C" />
          </svg>

          {/* Inner content */}
          <div className="relative py-6 sm:py-10 md:py-12 px-4 sm:px-10 md:px-16 text-center">
            {/* Top ornament */}
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
              <svg viewBox="0 0 80 24" className="w-20 sm:w-28 h-6 text-gold-500">
                <path d="M0 12 H30" stroke="currentColor" strokeWidth="1.5" />
                <path d="M50 12 H80" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="40" cy="12" r="5" fill="none" stroke="#D6336C" strokeWidth="1.5" />
                <circle cx="40" cy="12" r="2" fill="#D6336C" />
                <circle cx="30" cy="12" r="1.2" fill="#D6336C" />
                <circle cx="50" cy="12" r="1.2" fill="#D6336C" />
              </svg>
            </div>

            {/* بسم الله */}
            <p
              className={`font-aref text-[34px] sm:text-[48px] md:text-[60px] leading-[1.2] text-gold-gradient mb-6 sm:mb-10 transition-all duration-1000 delay-100 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              بسم الله الرحمن الرحيم
            </p>

            {/* Ayat */}
            <p
              className={`font-aref leading-[2.2] sm:leading-[2.4] md:leading-[2.5] text-[22px] sm:text-[28px] md:text-[32px] text-ink-dark mb-6 sm:mb-8 transition-all duration-1000`}
              style={{
                transitionDelay: '350ms',
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(18px)',
              }}
            >
              <span className="font-bold text-gold-700">وَمِنْ آيَاتِهِ</span>{' '}
              أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
              <span className="inline-block mx-2 sm:mx-3 w-2 h-2 rounded-full bg-gold-500 align-middle" />
              <span className="font-aref text-gold-600 text-[18px] sm:text-[22px] md:text-[24px] mt-2 block">
                ﴿ سورة الروم — آية ٢١ ﴾
              </span>
            </p>

            {/* Divider */}
            <div className="gold-line w-2/3 mx-auto my-8 sm:my-10 rounded-full" />

            {/* Dua */}
            <p
              className="font-aref italic text-ink-mid text-[20px] sm:text-[24px] md:text-[28px] leading-[2]"
              style={{
                transitionDelay: '550ms',
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 900ms ease-out',
              }}
            >
              <span className="text-gold-700 font-bold">اللَّهُمَّ بارك لهما وَبارِكْ عَلَيْهِما</span>
              <br className="hidden sm:block" />
              وَاجْمَعْ بَيْنَهُما فِي خَيْرٍ يَجْمَعا
            </p>

            {/* Bottom ornament */}
            <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
              <svg viewBox="0 0 80 24" className="w-20 sm:w-28 h-6 text-gold-500">
                <path d="M0 12 H30" stroke="currentColor" strokeWidth="1.5" />
                <path d="M50 12 H80" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="40" cy="12" r="5" fill="none" stroke="#D6336C" strokeWidth="1.5" />
                <circle cx="40" cy="12" r="2" fill="#D6336C" />
                <circle cx="30" cy="12" r="1.2" fill="#D6336C" />
                <circle cx="50" cy="12" r="1.2" fill="#D6336C" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
