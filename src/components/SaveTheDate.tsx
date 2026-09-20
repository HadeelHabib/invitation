'use client'

import { useReveal } from './QuranVerse'
import { CalendarPlus } from 'lucide-react'

export default function SaveTheDate() {
  const { ref, revealed } = useReveal<HTMLDivElement>()

  const googleCalendarEvent = () => {
    const start = encodeURIComponent('20260820T210000+0300')
    const end = encodeURIComponent('20260821T000000+0300')
    const title = encodeURIComponent('أفراح آل مرزوق — زفاف يوسف ونورة')
    const details = encodeURIComponent(
      'حفل زفاف يوسف بن محمد ناصر مرزوق ونورة بنت فهد سعد العتيبي\n\nوقت الحفل: من الساعة التاسعة مساءً وحتى منتصف الليل\n\nالعائلة ترحب بحضوركم الكريم'
    )
    const location = encodeURIComponent('قصر الماسة للاحتفالات، طريق الأمير سلطان، حي الروضة، جدة')
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}&ctz=Asia/Riyadh`
  }

  return (
    <section
      id="save-date"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100/80 to-cream-200/70"
    >
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold-200/40 rounded-full blur-[120px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 transition-all duration-1000 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
        }`}
      >
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-500">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 3v3m8-3v3M5 10h14M7 7h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm0 5v7h10v-7"
              />
            </svg>
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
          </div>
          <h2 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient mb-3">
            حفظ التاريخ
          </h2>
          <p className="font-ibm text-ink-soft text-base sm:text-lg mt-3">
            لا تفوتوا حضور فرحتنا التاريخية
          </p>
        </div>

        {/* Calendar card */}
        <div
          className="relative"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'scale(1)' : 'scale(0.94)',
            transition: 'all 900ms cubic-bezier(0.22, 0.61, 0.36, 1) 120ms',
          }}
        >
          {/* outer glow */}
          <div className="absolute -inset-4 bg-gold-gradient rounded-[36px] blur-2xl opacity-25" />

          <div className="relative bg-gradient-to-b from-cream-50 to-cream-100 rounded-[32px] overflow-hidden border-[3px] border-gold-500 shadow-gold-lg">
            {/* Header ribbon */}
            <div className="relative bg-gold-gradient py-5 sm:py-6 px-6 sm:px-10 text-center">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)] animate-shimmer bg-[length:200%_100%]" />
              <p className="relative font-aref text-3xl sm:text-4xl md:text-[42px] text-cream-50 drop-shadow-[0_1px_2px_rgba(93,59,26,0.4)] tracking-wide">
                أغسطس ٢٠٢٦
              </p>
              {/* little tabs */}
              <div className="absolute -bottom-0 right-8 sm:right-14 w-6 h-8 bg-cream-50 rounded-t-[10px]" />
              <div className="absolute -bottom-0 left-8 sm:left-14 w-6 h-8 bg-cream-50 rounded-t-[10px]" />
            </div>

            {/* Body */}
            <div className="p-8 sm:p-12 md:p-14 text-center">
              {/* Big date number */}
              <div className="relative inline-flex items-center justify-center mb-6 sm:mb-8">
                <div className="absolute -inset-6 sm:-inset-8 rounded-full bg-gold-gradient/20 blur-xl" />
                <span className="relative font-aref text-[160px] sm:text-[220px] md:text-[260px] leading-none gold-shimmer font-bold tracking-tight">
                  ٢٠
                </span>
              </div>

              <p className="font-aref text-4xl sm:text-5xl md:text-6xl text-gold-700 mb-4 leading-none">
                الخميس
              </p>

              <div className="gold-line w-2/3 mx-auto my-6 sm:my-8" />

              <p className="font-aref text-2xl sm:text-3xl md:text-4xl text-ink-dark leading-tight">
                من الساعة
                <span className="text-gold-700 mx-2 sm:mx-3 font-bold">٩:٠٠ م</span>
                <br className="sm:hidden" />
                حتى
                <span className="text-gold-700 mx-2 sm:mx-3 font-bold">١٢:٠٠ ص</span>
              </p>

              {/* venue line */}
              <div className="mt-8 sm:mt-10 inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-cream-100 border border-gold-300/60">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold-600 shrink-0">
                  <path
                    fill="currentColor"
                    d="M12 2C7.6 2 4 5.6 4 10c0 5.2 6.7 11.2 7.4 11.8l.6.6.6-.6C13.3 21.2 20 15.2 20 10c0-4.4-3.6-8-8-8Zm0 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                  />
                </svg>
                <span className="font-aref text-xl sm:text-2xl text-ink-mid">قصر الماسة للاحتفالات · جدة</span>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="px-6 sm:px-10 pb-8 sm:pb-10">
              <a
                href={googleCalendarEvent()}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-3 py-5 px-8 rounded-[18px] bg-gold-gradient text-cream-50 font-aref text-2xl sm:text-[28px] shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <CalendarPlus className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                أضف إلى التقويم 📅
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
