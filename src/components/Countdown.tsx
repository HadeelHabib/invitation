'use client'

import { useState, useEffect } from 'react'
import { useReveal } from './QuranVerse'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

const WEDDING_DATE = new Date('2026-08-20T21:00:00+03:00')

function calc(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  const total = diff
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, total }
}

export default function Countdown() {
  const { ref, revealed } = useReveal<HTMLDivElement>()
  const [t, setT] = useState<TimeLeft>(() => calc())

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'يوم', value: t.days },
    { label: 'ساعة', value: t.hours },
    { label: 'دقيقة', value: t.minutes },
    { label: 'ثانية', value: t.seconds },
  ]

  const arrived = t.total <= 0

  return (
    <section
      id="countdown"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100/80 to-cream-200"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(222,177,73,0.15),transparent_60%)]" />
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] h-24 bg-gold-200/40 blur-[100px] rounded-full" />

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-1000 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-500 fill-gold-400">
              <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21z" />
            </svg>
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
          </div>
          <h2 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient mb-3">
            العد التنازلي لليلة العمر
          </h2>
          <p className="font-ibm text-ink-soft text-base sm:text-lg mt-3">
            حتى ليلة تدخل فيها قلوبنا جنة الأمان والسرور
          </p>
        </div>

        {arrived ? (
          <div className="relative text-center py-14 sm:py-20 bg-gradient-to-br from-gold-50 via-cream-100 to-gold-100 rounded-[28px] border-2 border-gold-400 shadow-gold-lg overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute animate-pulse"
                  style={{
                    top: `${(i * 37) % 100}%`,
                    right: `${(i * 53) % 100}%`,
                    width: `${4 + (i % 4) * 2}px`,
                    height: `${4 + (i % 4) * 2}px`,
                    borderRadius: '9999px',
                    background:
                      i % 2 === 0
                        ? 'radial-gradient(circle, #FFF 0%, #FF4081 60%, transparent 100%)'
                        : 'radial-gradient(circle, #FFF 0%, #D6336C 60%, transparent 100%)',
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
            <p className="relative font-aref text-[44px] sm:text-[64px] md:text-[84px] gold-shimmer leading-none mb-5">
              اليوم هو اليوم!
            </p>
            <p className="relative font-aref text-2xl sm:text-3xl md:text-4xl text-ink-dark">
              نراكم على الفرحة ✨
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {units.map((u, idx) => {
              const pad = (n: number) => n.toString().padStart(2, '0')
              return (
                <div
                  key={u.label}
                  className="group relative"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? 'translateY(0)' : 'translateY(22px)',
                    transition: `all 800ms ease-out ${150 + idx * 120}ms`,
                  }}
                >
                  {/* Decorative glow */}
                  <div className="absolute -inset-1 bg-gold-gradient rounded-[22px] blur-sm opacity-40 group-hover:opacity-60 transition-opacity" />

                  <div className="relative bg-gradient-to-b from-cream-50 via-white to-cream-100 rounded-[22px] border-[2.5px] border-gold-500 p-[2px] shadow-gold">
                    <div className="rounded-[18px] border border-gold-300/70 py-6 sm:py-8 md:py-10 px-3 sm:px-5 bg-gradient-to-b from-cream-50/80 to-cream-100/80">
                      <div className="flex items-end justify-center gap-0.5 sm:gap-1">
                        {pad(u.value)
                          .split('')
                          .map((ch, i) => (
                            <span
                              key={`${u.label}-${i}`}
                              className="font-aref inline-block text-[44px] sm:text-[64px] md:text-[80px] leading-[1] text-gold-gradient font-bold"
                            >
                              {ch}
                            </span>
                          ))}
                      </div>

                      <div className="gold-line-short w-1/2 mx-auto mt-4 sm:mt-5 mb-3 sm:mb-4" />

                      <p className="font-aref text-xl sm:text-2xl md:text-[28px] text-ink-mid leading-none">
                        {u.label}
                      </p>
                    </div>
                  </div>

                  {/* Corner sparkle */}
                  <div className="absolute -top-2 -right-2 w-3.5 h-3.5 rounded-full bg-gold-400 shadow-[0_0_10px_2px_rgba(222,177,73,0.7)]" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 rounded-full bg-gold-500 shadow-[0_0_8px_1px_rgba(193,138,40,0.6)]" />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
