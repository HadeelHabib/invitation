'use client'

import { useCallback, useEffect, useState } from 'react'
import { useReveal } from './QuranVerse'
import { RSVP_BLESSINGS_KEY, RSVPPersistedBlessing } from './RSVPForm'

const blessings = [
  {
    text: 'بارك الله لكما وجمع بينكما في خير، فرحتكم فرحتنا 🤍',
    name: 'عائلة القرشي',
    gradient: 'from-rose-50 via-rose-100/60 to-amber-50',
    accent: 'text-rose-700',
    delay: '0ms',
    span: '',
  },
  {
    text: 'ما شاء الله، عرس يستاهل كل خير. عقبال الذرية الصالحة والفرح الدائم',
    name: 'الأستاذ خالد وعائلته',
    gradient: 'from-sky-50 via-sky-100/50 to-emerald-50',
    accent: 'text-sky-700',
    delay: '90ms',
    span: 'sm:col-span-2',
  },
  {
    text: 'يا سعدنا بهالخبر! الله يتمم فرحكم ويديم المودة بينكم أبد الآبدين',
    name: 'صديق العمر محمد',
    gradient: 'from-amber-50 via-yellow-100/60 to-rose-50',
    accent: 'text-amber-700',
    delay: '180ms',
    span: '',
  },
  {
    text: 'من القلب مبروك يا يوسف ويا نورة، ربي يسعدكم دنيا وآخرة ويحفظكم من كل شر 💛',
    name: 'خالتنا فاطمة',
    gradient: 'from-fuchsia-50 via-pink-100/50 to-cream-50',
    accent: 'text-fuchsia-700',
    delay: '270ms',
    span: '',
  },
  {
    text: 'أحلى خبر سمعناه هالسنة! الله يبارك فيكم ويبارك عليكما ويتمم نعيمه عليكما',
    name: 'مجموعة زملاء العمل',
    gradient: 'from-emerald-50 via-green-100/60 to-lime-50',
    accent: 'text-emerald-700',
    delay: '360ms',
    span: 'sm:col-span-2',
  },
  {
    text: 'بارك الله لكما. ما أجمل الزواج على عهد وصدق وعهد ميثاق غليظ 💍',
    name: 'الشيخ عبدالله',
    gradient: 'from-indigo-50 via-blue-100/50 to-violet-50',
    accent: 'text-indigo-700',
    delay: '450ms',
    span: '',
  },
  {
    text: 'ألف مبروك. الله يرزقكم الراحة والسكينة والذرية الصالحة ويسعد أيامكم جميعاً',
    name: 'جيراننا الكرام',
    gradient: 'from-orange-50 via-amber-100/60 to-rose-50',
    accent: 'text-orange-700',
    delay: '540ms',
    span: '',
  },
  {
    text: 'عقبال ألف عام وكل سنة وأنتم بخير على حبكم وودكم. آل مباركين 🤲',
    name: 'ابن عمّنا سعود',
    gradient: 'from-teal-50 via-emerald-100/50 to-cyan-50',
    accent: 'text-teal-700',
    delay: '630ms',
    span: 'sm:col-span-2',
  },
]

type StaticBlessing = (typeof blessings)[number]

type BlessingCardShape = StaticBlessing | RSVPPersistedBlessing

function isPersisted(card: BlessingCardShape): card is RSVPPersistedBlessing {
  return 'createdAt' in card && typeof (card as RSVPPersistedBlessing).createdAt === 'number'
}

const userCardVariants: Array<{ gradient: string; accent: string; span: string }> = [
  { gradient: 'from-rose-50 via-pink-100/60 to-amber-50', accent: 'text-rose-700', span: '' },
  {
    gradient: 'from-fuchsia-50 via-rose-100/60 to-cream-50',
    accent: 'text-fuchsia-700',
    span: 'sm:col-span-2',
  },
  { gradient: 'from-amber-50 via-yellow-100/60 to-rose-50', accent: 'text-amber-700', span: '' },
  { gradient: 'from-violet-50 via-pink-100/50 to-cream-50', accent: 'text-fuchsia-700', span: '' },
  {
    gradient: 'from-emerald-50 via-green-100/50 to-teal-50',
    accent: 'text-emerald-700',
    span: 'sm:col-span-2',
  },
  { gradient: 'from-sky-50 via-blue-100/60 to-violet-50', accent: 'text-indigo-700', span: '' },
]

export default function GuestbookWall() {
  const { ref, revealed } = useReveal<HTMLDivElement>()
  const [userBlessings, setUserBlessings] = useState<RSVPPersistedBlessing[]>([])

  const readUser = useCallback((): RSVPPersistedBlessing[] => {
    if (typeof window === 'undefined') return []
    try {
      const raw = window.localStorage.getItem(RSVP_BLESSINGS_KEY)
      if (!raw) return []
      const parsed = JSON.parse(raw)
      if (!Array.isArray(parsed)) return []
      return parsed.filter(
        (x) =>
          !!x &&
          typeof (x as RSVPPersistedBlessing).name === 'string' &&
          typeof (x as RSVPPersistedBlessing).message === 'string' &&
          typeof (x as RSVPPersistedBlessing).id === 'string'
      ) as RSVPPersistedBlessing[]
    } catch {
      return []
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const current = readUser()
      const TEST_MESSAGES = new Set(['بارفاه والبتن', 'بارك الله لكما وبارك الله عليكما'])
      const TEST_NAMES = new Set(['test', 'Test', 'TEST'])
      const cleaned = current.filter(
        (b) => !TEST_MESSAGES.has(b.message.trim()) && !TEST_NAMES.has(b.name.trim())
      )
      if (cleaned.length !== current.length) {
        try {
          window.localStorage.setItem(RSVP_BLESSINGS_KEY, JSON.stringify(cleaned))
          try {
            window.dispatchEvent(new Event('invitation:blessings-updated'))
          } catch {
            /* noop */
          }
        } catch {
          /* noop */
        }
        setUserBlessings(cleaned)
      } else {
        setUserBlessings(current)
      }
    }
    if (typeof window === 'undefined') return
    const sync = () => setUserBlessings(readUser())
    window.addEventListener('invitation:blessings-updated', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('invitation:blessings-updated', sync)
      window.removeEventListener('storage', sync)
    }
  }, [readUser])

  const totalCards: BlessingCardShape[] = [...blessings, ...userBlessings]
  // Animation-delay sequence: use 80ms per card past the first 8, keeps the staggered fade.
  const cardDelayFor = (idx: number): string => {
    const staticDelay = blessings[idx]?.delay
    if (staticDelay !== undefined) return staticDelay
    const offset = blessings.length
    const localIndex = idx - offset
    const extraMs = Math.min(localIndex * 80, 900)
    return `${extraMs + 720}ms`
  }

  return (
    <section
      id="guestbook"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100/70 to-cream-200/60"
    >
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-gold-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gold-100/50 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-1000 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
        }`}
      >
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-500">
              <path
                fill="currentColor"
                d="M20 2H7a2 2 0 0 0-2 2v15l3-3h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-2 10H8v-2h10v2Zm0-3H8V7h10v2Zm-4 7H7l-2 2V4h11v12Z"
                opacity="0.9"
              />
            </svg>
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
          </div>
          <h2 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient mb-3">
            قائمة المباركات
          </h2>
          <p className="font-ibm text-ink-soft text-base sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
            بضعة كلمات طيبة من أحبائنا تضيف نوراً على ليلتنا المباركة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-min">
          {totalCards.map((b, i) => {
            const persisted = isPersisted(b)
            const fallback =
              userCardVariants[(i - blessings.length + userCardVariants.length) % userCardVariants.length]
            const gradient: string = persisted
              ? fallback.gradient
              : (b as StaticBlessing).gradient
            const accent: string = persisted
              ? fallback.accent
              : (b as StaticBlessing).accent
            const span: string = persisted ? fallback.span : (b as StaticBlessing).span
            const text = persisted ? b.message : (b as StaticBlessing).text
            const name = persisted ? b.name : (b as StaticBlessing).name
            const delay = cardDelayFor(i)
            return (
              <div
                key={persisted ? b.id : `static-${i}`}
                className={`group relative ${span}`}
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0)' : 'translateY(22px)',
                  transition: `all 800ms cubic-bezier(0.22,0.61,0.36,1) ${delay}`,
                }}
              >
                <div
                  className={`relative h-full rounded-[22px] bg-gradient-to-br ${gradient} p-6 sm:p-7 border border-gold-200/60 shadow-sm hover:shadow-gold hover:-translate-y-1 transition-all duration-500`}
                >
                  {/* decorative quote mark */}
                  <div
                    className={`absolute top-4 right-5 text-5xl sm:text-6xl font-cormorant italic leading-none opacity-40 ${accent}`}
                  >
                    ”
                  </div>

                  {/* small accent top-left */}
                  <div className="absolute top-3 left-3 flex gap-1 opacity-60">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-300 mt-0.5" />
                  </div>

                  <p className="relative font-aref text-xl sm:text-2xl md:text-[26px] text-ink-dark leading-[1.85] pt-6 pb-5">
                    {text}
                  </p>

                  <div className="gold-line-short w-24 mx-auto mb-4" />

                  <div className="flex items-center justify-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${accent.replace('text-', 'bg-')}`}
                    />
                    <p className={`font-ibm text-sm sm:text-base ${accent} font-medium`}>
                      — {name}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
