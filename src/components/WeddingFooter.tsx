import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function WeddingFooter() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-gradient-to-b from-cream-200/80 via-cream-300/50 to-gold-100/50"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-200/60 to-gold-200/30" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5 L33 20 L48 20 L36 30 L40 45 L30 36 L20 45 L24 30 L12 20 L27 20 Z' fill='none' stroke='%239E6A20' stroke-width='0.8'/%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
        {/* Thank you */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-16 sm:w-28 h-[2px] gold-line rounded-full" />
            <svg viewBox="0 0 32 32" className="w-8 h-8 text-gold-500">
              <circle cx="16" cy="16" r="3" fill="#D6336C" />
              <path d="M16 3 L18 13 L28 16 L18 19 L16 29 L14 19 L4 16 L14 13 Z" fill="none" stroke="#D6336C" strokeWidth="1.4" />
            </svg>
            <span className="w-16 sm:w-28 h-[2px] gold-line rounded-full" />
          </div>
          <h2 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient mb-5 leading-none">
            نورتونا بقبول الدعوة
          </h2>
          <p className="font-aref text-3xl sm:text-4xl md:text-[44px] text-ink-dark leading-tight">
            عائلتا
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
            <span className="font-aref text-4xl sm:text-5xl md:text-6xl gold-shimmer tracking-wider">
              مرزوق
            </span>
            <span className="font-aref text-3xl sm:text-4xl text-ink-soft">و</span>
            <span className="font-aref text-4xl sm:text-5xl md:text-6xl gold-shimmer tracking-wider">
              العتيبي
            </span>
          </div>
        </div>

        <div className="gold-line w-1/2 mx-auto max-w-xs mb-10" />

        {/* Hashtag */}
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-3 px-7 sm:px-10 py-3.5 sm:py-4 rounded-pill bg-gradient-to-r from-gold-50 via-cream-50 to-gold-50 border-2 border-gold-400 hover:border-gold-500 hover:shadow-gold transition-all duration-300 group"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold-600 group-hover:scale-110 transition-transform">
            <path
              fill="currentColor"
              d="M10 3h2v4.2l-.8.3a26.5 26.5 0 0 0-3.8 7H2v2h4.9c-.4 1.3-.8 2.6-1.3 3.8H3v2h2.3c-.7 2-1.5 3.8-2.4 5.4v.4c.8-.2 1.5-.4 2.2-.7l.7-.3c.6 1.6 1.2 3.2 2 4.7h2.1l-.5-1.2c.7-.1 1.4-.3 2.1-.6L14 21h2v-4.3l.8-.2a27.3 27.3 0 0 0 3.9-6.5H22v-2h-4.7c.3-1.2.6-2.3 1-3.5H23V5.4h-4c.7-2 1.5-3.8 2.4-5.4v-.4c-.9.2-1.6.4-2.3.7l-.8.3A28.6 28.6 0 0 0 16.4 0H14l.5 1.2a19.7 19.7 0 0 0-2.1.6L12 3h-2v4.2Zm0 6.2v-.1a24.2 24.2 0 0 1 3-5.5h.1l.8 1.5A23.7 23.7 0 0 0 13 9.3l-.8.3-2.2-.2Zm5.2-1.1 1.7-3.2c.5.9 1 1.9 1.4 2.9l-2 .2Zm-8 11.7-1.7 3.3c-.4-.9-.8-1.9-1.2-2.9l2.1-.3Zm3.9 1.6a25.5 25.5 0 0 1-2.9 5.7l-.9-1.7a25 25 0 0 0 3.7-4l.9-.1.5-.9.5-.9v.1l-.3.2-.9 1.6Zm2.3-13 2.3.2c.3.9.6 1.8.9 2.7l-2.2.3-.1-.4a21.9 21.9 0 0 0-.9-2.8Zm-7.4 6 .2.3c.4 1.3.9 2.7 1.4 4.2l-2.2.4c-.3-1.2-.7-2.5-1.1-3.8l1.7-.3.5-.8Zm1.9-.3 1.1-.2c.2.8.4 1.6.6 2.5l-1.1.2-.6-2.5Zm1.6-2.2 1.3-.1c-.1-.7-.2-1.4-.3-2.1l-1.3.1.3 2.1Zm-7.6-.1 2.2-.2-.1-.4-.6-1.4-2 .2.5 1.8Zm9.2 6-1.1.2c-.2-.8-.5-1.7-.7-2.5l1.1-.2.7 2.5Zm-1.8-.3 1.6-.3c-.1-.7-.3-1.4-.5-2.1l-1.6.3.5 2.1Z"
            />
          </svg>
          <span className="font-aref text-2xl sm:text-3xl text-gold-700 font-semibold tracking-wider">
            #زفاف_يوسف_ونورة
          </span>
        </Link>

        {/* Very bottom credit */}
        <div className="mt-14 sm:mt-16 pt-6 sm:pt-8 border-t border-gold-300/50">
          <p className="inline-flex items-center gap-1.5 font-ibm text-ink-muted text-xs sm:text-sm">
            صُنعت بالحب
            <Heart className="w-3.5 h-3.5 text-wax-red fill-wax-red" />
          </p>
        </div>
      </div>
    </footer>
  )
}
