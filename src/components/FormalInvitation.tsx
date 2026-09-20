'use client'

import { useReveal } from './QuranVerse'
import { Crown } from 'lucide-react'

export default function FormalInvitation() {
  const { ref, revealed } = useReveal<HTMLDivElement>()

  return (
    <section
      id="invitation"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200/80"
    >
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gold-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gold-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 transition-all duration-[1100ms] ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
        }`}
      >
        {/* Card */}
        <div className="relative bg-gradient-to-b from-cream-50 via-white to-cream-100 rounded-[26px] shadow-gold-lg">
          {/* Double gold border */}
          <div className="pointer-events-none absolute inset-[10px] rounded-[18px] border-[2.5px] border-gold-600/80" />
          <div className="pointer-events-none absolute inset-[20px] rounded-[12px] border border-gold-400/70" />

          {/* Inner shadow */}
          <div className="pointer-events-none absolute inset-0 rounded-[26px] shadow-[inset_0_0_60px_rgba(158,106,32,0.12)]" />

          {/* Decorative pattern on top */}
          <div className="pt-10 sm:pt-14 pb-12 sm:pb-16 px-7 sm:px-14 md:px-20 relative overflow-hidden">
            <div className="flex items-center justify-center mb-8 sm:mb-10">
              <div className="w-14 sm:w-20 h-[2px] bg-gradient-to-l from-transparent via-gold-500 to-transparent" />
              <div className="mx-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-cream-50" strokeWidth={2} />
              </div>
              <div className="w-14 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            </div>

            {/* Bismillah */}
            <p
              className="font-aref text-gold-gradient text-center text-3xl sm:text-4xl md:text-5xl mb-7 sm:mb-10"
              style={{
                transitionDelay: '150ms',
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 700ms ease-out',
              }}
            >
              بعون الله وتوفيقه
            </p>

            {/* Content */}
            <div
              className="space-y-5 sm:space-y-7 text-center font-aref text-ink-dark leading-[2.1]"
              style={{
                transitionDelay: '280ms',
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 800ms ease-out',
              }}
            >
              <p className="text-2xl sm:text-3xl md:text-[34px]">يتشرف</p>

              <p className="text-3xl sm:text-4xl md:text-[44px] gold-shimmer font-bold">
                محمد ناصر مرزوق
              </p>

              <p className="text-2xl sm:text-3xl md:text-[30px] text-ink-mid leading-snug">
                بدعوة حضراتكم لحفل زفاف نجله
              </p>

              {/* Groom name emphasized */}
              <div className="my-4 sm:my-6 py-3 sm:py-4 border-y border-gold-300/70 bg-gradient-to-b from-transparent via-gold-50/60 to-transparent rounded-lg">
                <p className="font-aref text-[56px] sm:text-[78px] md:text-[98px] leading-[0.95] gold-shimmer tracking-wider">
                  يوسف
                </p>
                <p className="font-ibm text-ink-muted text-sm sm:text-base mt-1 tracking-[0.15em]">
                  بن محمد ناصر مرزوق
                </p>
              </div>

              <p className="text-2xl sm:text-3xl md:text-[30px] text-ink-mid leading-snug">
                على كريمة السيد
              </p>

              <p className="text-3xl sm:text-4xl md:text-[44px] gold-shimmer font-bold">
                فهد العتيبي
              </p>

              <p className="text-2xl sm:text-3xl md:text-[30px] text-ink-mid leading-snug">
                ونورته بناته
              </p>

              {/* Date, time, venue */}
              <div className="mt-10 sm:mt-14 grid sm:grid-cols-3 gap-4 sm:gap-5">
                <div className="rounded-2xl p-4 sm:p-5 bg-cream-100/70 border border-gold-200/60 shadow-sm">
                  <p className="text-ink-muted text-xs sm:text-sm font-ibm mb-1 tracking-wider">التاريخ</p>
                  <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-gold-700 leading-tight">
                    ٢٠ أغسطس ٢٠٢٦
                  </p>
                  <p className="text-ink-soft text-sm sm:text-base mt-0.5">الخميس · ١٨ صفر</p>
                </div>
                <div className="rounded-2xl p-4 sm:p-5 bg-cream-100/70 border border-gold-200/60 shadow-sm">
                  <p className="text-ink-muted text-xs sm:text-sm font-ibm mb-1 tracking-wider">الوقت</p>
                  <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-gold-700 leading-tight">
                    التاسعة مساءً
                  </p>
                  <p className="text-ink-soft text-sm sm:text-base mt-0.5">حتى منتصف الليل</p>
                </div>
                <div className="rounded-2xl p-4 sm:p-5 bg-cream-100/70 border border-gold-200/60 shadow-sm">
                  <p className="text-ink-muted text-xs sm:text-sm font-ibm mb-1 tracking-wider">المكان</p>
                  <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-gold-700 leading-tight">
                    قصر الماسة
                  </p>
                  <p className="text-ink-soft text-sm sm:text-base mt-0.5">حي الروضة · جدة</p>
                </div>
              </div>

              {/* Full address */}
              <div className="mt-8 sm:mt-10">
                <p className="font-ibm text-ink-muted text-xs sm:text-sm mb-2 tracking-[0.18em]">العنوان الكامل</p>
                <p className="font-aref text-2xl sm:text-3xl md:text-[30px] text-ink-dark leading-snug">
                  قصر الماسة للاحتفالات
                </p>
                <p className="font-aref text-xl sm:text-2xl md:text-[24px] text-ink-mid mt-1">
                  طريق الأمير سلطان — حي الروضة — جدة
                </p>
              </div>

              {/* Call to honor us */}
              <div className="mt-10 sm:mt-14">
                <div className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50 border-2 border-gold-400 shadow-gold">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  <p className="font-aref text-3xl sm:text-4xl md:text-[44px] text-gold-700 leading-none">
                    شرفونا بحضوركم
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                </div>
              </div>
            </div>

            {/* Parents line */}
            <div
              className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10"
              style={{
                transitionDelay: '500ms',
                opacity: revealed ? 1 : 0,
                transition: 'opacity 700ms ease-out',
              }}
            >
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-gold-500" />
                <div className="text-center">
                  <p className="font-ibm text-ink-muted text-xs tracking-widest">والد العريس</p>
                  <p className="font-aref text-2xl sm:text-3xl text-ink-dark">محمد ناصر مرزوق</p>
                </div>
              </div>
              <div className="hidden sm:flex w-px h-14 bg-gold-400/60" />
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold">
                <Crown className="w-4 h-4 text-cream-50" />
              </div>
              <div className="hidden sm:flex w-px h-14 bg-gold-400/60" />
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-gold-500" />
                <div className="text-center">
                  <p className="font-ibm text-ink-muted text-xs tracking-widest">والد العروس</p>
                  <p className="font-aref text-2xl sm:text-3xl text-ink-dark">فهد سعد العتيبي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
