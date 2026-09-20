'use client'

import { useReveal } from './QuranVerse'

export default function AboutCouple() {
  const { ref, revealed } = useReveal<HTMLDivElement>()

  return (
    <section
      id="couple"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-cream-200/60 via-cream-100/70 to-cream-50"
    >
      {/* decorative blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold-200/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gold-100/60 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-1000 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section heading */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
            <span className="text-gold-500">
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <circle cx="20" cy="20" r="3" fill="#D6336C" />
                <path d="M20 4 L23 18 L37 20 L23 22 L20 36 L17 22 L3 20 L17 18 Z" fill="none" stroke="#D6336C" strokeWidth="1.2" />
              </svg>
            </span>
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
          </div>
          <h2 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient mb-3">
            عن العروسين
          </h2>
          <p className="font-ibm text-ink-soft text-base sm:text-lg mt-4">
            قلبان اختارهما الله لنبقى معاً إلى الأبد
          </p>
        </div>

        {/* Couple photos */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-0 items-center">
          {/* Groom */}
          <div
            className="flex flex-col items-center md:items-start text-center md:text-right"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 900ms ease-out 150ms',
            }}
          >
            <div className="relative mb-6 group">
              {/* double gold ring border */}
              <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-[3px] bg-gold-gradient shadow-gold-lg group-hover:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full rounded-full p-[5px] bg-gradient-to-b from-cream-50 to-cream-100">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gold-100 to-gold-200/70 flex items-center justify-center">
                    {/* Silhouette placeholder */}
                    <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-gold-500/80">
                      <circle cx="100" cy="72" r="36" fill="currentColor" opacity="0.85" />
                      <path d="M100 112 C62 112 36 138 28 176 L172 176 C164 138 138 112 100 112 Z" fill="currentColor" opacity="0.85" />
                      <path d="M80 60 C82 50 92 42 100 42 C108 42 118 50 120 60" stroke="#B01F58" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <path d="M78 82 C85 80 92 82 100 82 C108 82 115 80 122 82" stroke="#FFF5F8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* gold sparkle dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(212,160,55,0.8)]" />
              <div className="absolute bottom-4 -left-3 w-3 h-3 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(193,138,40,0.8)]" />
            </div>
            <h3 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient leading-none mb-2">
              يوسف
            </h3>
            <p className="font-aref text-2xl sm:text-3xl text-ink-mid">طبيب جرّاح</p>
            <p className="font-ibm text-ink-muted text-sm mt-3 max-w-xs leading-relaxed">
              يُؤمن أنّ الخير دائماً في التفاصيل، ويعشق مساعدة الناس في كل يوم.
            </p>
          </div>

          {/* Center divider — rings icon */}
          <div
            className="relative flex md:flex-col items-center justify-center py-6 md:py-0 md:px-8"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 800ms ease-out 350ms',
            }}
          >
            <div className="hidden md:block w-[2px] h-24 bg-gradient-to-b from-transparent via-gold-400 to-transparent mb-4" />
            <div className="relative flex items-center justify-center">
              <svg viewBox="0 0 120 80" className="w-28 sm:w-32 h-auto">
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFB6C1" />
                    <stop offset="40%" stopColor="#FF4081" />
                    <stop offset="70%" stopColor="#D6336C" />
                    <stop offset="100%" stopColor="#B01F58" />
                  </linearGradient>
                </defs>
                <circle cx="46" cy="40" r="26" fill="none" stroke="url(#ringGrad)" strokeWidth="7" />
                <circle cx="74" cy="40" r="26" fill="none" stroke="url(#ringGrad)" strokeWidth="7" />
                <circle cx="46" cy="40" r="26" fill="none" stroke="#FFF5F8" strokeWidth="1.5" opacity="0.5" />
                <circle cx="74" cy="40" r="26" fill="none" stroke="#FFF5F8" strokeWidth="1.5" opacity="0.5" />
                <polygon points="46,14 50,20 46,26 42,20" fill="#FF4081" stroke="#B01F58" strokeWidth="0.8" />
              </svg>
            </div>
            <div className="hidden md:block w-[2px] h-24 bg-gradient-to-b from-gold-400 via-gold-400 to-transparent mt-4" />
          </div>

          {/* Bride */}
          <div
            className="flex flex-col items-center md:items-end text-center md:text-left"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 900ms ease-out 150ms',
            }}
          >
            <div className="relative mb-6 group">
              <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-[3px] bg-gold-gradient shadow-gold-lg group-hover:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full rounded-full p-[5px] bg-gradient-to-b from-cream-50 to-cream-100">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gold-100 to-gold-200/70 flex items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-gold-500/80">
                      <circle cx="100" cy="72" r="34" fill="currentColor" opacity="0.85" />
                      <path d="M100 108 C62 108 34 138 26 176 L174 176 C166 138 138 108 100 108 Z" fill="currentColor" opacity="0.85" />
                      <path d="M80 50 C80 42 90 36 100 36 C110 36 120 42 120 50 L124 52 C118 54 114 60 110 62" stroke="#D6336C" strokeWidth="1.5" fill="none" />
                      <path d="M68 58 C74 54 82 56 88 58" stroke="#B01F58" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                      <path d="M132 58 C126 54 118 56 112 58" stroke="#B01F58" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                      <path d="M100 112 C96 116 96 122 100 126 C104 122 104 116 100 112 Z" fill="#FF4081" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(212,160,55,0.8)]" />
              <div className="absolute bottom-4 -right-3 w-3 h-3 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(193,138,40,0.8)]" />
            </div>
            <h3 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient leading-none mb-2">
              نورة
            </h3>
            <p className="font-aref text-2xl sm:text-3xl text-ink-mid">مهندسة معمارية</p>
            <p className="font-ibm text-ink-muted text-sm mt-3 max-w-xs leading-relaxed">
              ترى الجمال في كل زاوية، وتُصمّم أحلاماً تتحوّل إلى مباني ناطقة بالحب.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div
          className="mt-16 sm:mt-20 text-center max-w-2xl mx-auto"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 900ms ease-out 550ms',
          }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-gold-400/70" />
            <svg viewBox="0 0 32 32" className="w-6 h-6 text-gold-500">
              <path
                d="M14 8 C10 9 7 12 7 16 C7 19 9 21 12 22 L13 22 L13 25 L8 25 L8 27 L18 27 L18 17 L18 14 C18 11 16 9 14 8 Z M28 8 C24 9 21 12 21 16 C21 19 23 21 26 22 L27 22 L27 25 L22 25 L22 27 L32 27 L32 17 L32 14 C32 11 30 9 28 8 Z"
                fill="currentColor"
              />
            </svg>
            <span className="w-10 h-px bg-gold-400/70" />
          </div>
          <p className="font-aref italic text-ink-mid text-2xl sm:text-3xl md:text-4xl leading-[1.8]">
            قصة بدأت بدعاء أم...
            <br className="hidden sm:block" />
            واليوم يكتمل الفرح
          </p>
        </div>
      </div>
    </section>
  )
}
