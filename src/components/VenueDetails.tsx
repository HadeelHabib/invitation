'use client'

import { useReveal } from './QuranVerse'
import { MapPin, Clock, Shirt, Car, ExternalLink } from 'lucide-react'

export default function VenueDetails() {
  const { ref, revealed } = useReveal<HTMLDivElement>()

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('قصر الماسة للاحتفالات طريق الأمير سلطان حي الروضة جدة')

  const notes = [
    {
      icon: Clock,
      title: 'الأبواب تُفتح الساعة ٨:٣٠ مساءً',
      text: 'لتفادي الازدحام، يُرجى الحضور مبكراً',
      accent: 'from-amber-100/80 to-yellow-50/60',
      ring: 'border-amber-300/60',
    },
    {
      icon: Shirt,
      title: 'نرحب بكم بالزي الرسمي',
      text: 'نتشرف برؤيتكم بأزياء تليق بالمناسبة',
      accent: 'from-sky-100/70 to-blue-50/60',
      ring: 'border-sky-300/50',
    },
    {
      icon: Car,
      title: 'مواقف مخصصة للضيوف بجانب القصر',
      text: 'موظفون لمساعدتكم في توجيه المركبات',
      accent: 'from-emerald-100/70 to-green-50/60',
      ring: 'border-emerald-300/50',
    },
  ]

  return (
    <section
      id="venue"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-cream-200/70 via-cream-100/70 to-cream-50"
    >
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold-200/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-100/60 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-1000 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
            <MapPin className="w-6 h-6 text-gold-500" />
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
          </div>
          <h2 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient mb-3">
            موقع الحفل
          </h2>
          <p className="font-ibm text-ink-soft text-base sm:text-lg mt-3">
            نتمنى لكم وصول آمن ومريح إلى قصر الفرح
          </p>
        </div>

        {/* Venue info + Map */}
        <div
          className="grid lg:grid-cols-5 gap-6 sm:gap-8 mb-14 sm:mb-20"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 900ms ease-out 150ms',
          }}
        >
          {/* Info */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <div className="relative bg-gradient-to-b from-cream-50 to-cream-100 rounded-[24px] p-6 sm:p-8 border-[2.5px] border-gold-500 shadow-gold overflow-hidden">
              {/* double inner border */}
              <div className="pointer-events-none absolute inset-3 rounded-[18px] border border-gold-300/60" />

              <div className="relative flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold">
                  <MapPin className="w-6 h-6 text-cream-50" strokeWidth={2.2} />
                </div>
                <div className="flex-1">
                  <p className="font-ibm text-ink-muted text-xs tracking-[0.2em] mb-1">القاعة</p>
                  <h3 className="font-aref text-3xl sm:text-4xl text-gold-700 leading-tight">
                    قصر الماسة للاحتفالات
                  </h3>
                </div>
              </div>

              <div className="gold-line-short mb-5" />

              <div className="relative space-y-4">
                <div>
                  <p className="font-ibm text-ink-muted text-xs tracking-widest mb-1">العنوان</p>
                  <p className="font-aref text-2xl sm:text-[26px] text-ink-dark leading-snug">
                    طريق الأمير سلطان — حي الروضة
                    <br />
                    جدة، المملكة العربية السعودية
                  </p>
                </div>
                <div className="pt-3 border-t border-gold-200/70">
                  <p className="font-ibm text-ink-muted text-xs tracking-widest mb-1">اليوم والتوقيت</p>
                  <p className="font-aref text-2xl sm:text-[26px] text-ink-dark leading-snug">
                    الخميس · ٢٠ أغسطس ٢٠٢٦
                    <br />
                    <span className="text-gold-700 font-bold">الساعة التاسعة مساءً</span>
                  </p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-7 w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-[14px] bg-gold-gradient text-cream-50 font-aref text-[22px] sm:text-2xl shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
                افتح في خرائط قوقل
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-[24px] overflow-hidden border-[2.5px] border-gold-500 shadow-gold-lg bg-cream-100">
              <iframe
                title="موقع قصر الماسة للاحتفالات"
                src="https://www.google.com/maps?q=21.4979,39.2449&z=13&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: '360px', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale-[15%] hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay badge */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-4 py-2 bg-cream-50/95 backdrop-blur rounded-full border border-gold-400 shadow-md flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-wax-red animate-pulse" />
                <span className="font-aref text-gold-700 text-base sm:text-lg">موقع الحفل</span>
              </div>
              {/* Corner */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 bg-cream-50/95 rounded-xl border border-gold-300 shadow-sm">
                <span className="font-aref text-ink-mid text-sm sm:text-base">قصر الماسة</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important notes */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 900ms ease-out 350ms',
          }}
        >
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="font-aref text-4xl sm:text-5xl text-gold-700 mb-2">ملاحظات مهمة</h3>
            <div className="gold-line w-40 mx-auto mt-2" />
          </div>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {notes.map((n, i) => {
              const Icon = n.icon
              return (
                <div
                  key={n.title}
                  className={`group relative rounded-[22px] p-6 sm:p-7 bg-gradient-to-br ${n.accent} border-2 ${n.ring} shadow-sm hover:shadow-gold transition-all duration-500 hover:-translate-y-1`}
                >
                  <div
                    className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur border border-gold-300/50 flex items-center justify-center mb-5 group-hover:bg-gold-gradient group-hover:text-cream-50 group-hover:border-gold-500 transition-all duration-300 shadow-sm text-gold-600"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h4 className="font-aref text-2xl sm:text-[26px] text-ink-dark mb-2 leading-snug">
                    {n.title}
                  </h4>
                  <p className="font-ibm text-ink-soft text-sm sm:text-base leading-relaxed">
                    {n.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
