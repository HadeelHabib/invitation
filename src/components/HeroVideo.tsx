'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useIntroGate } from './useIntroGate'

const HERO_VIDEO_SRC = '/assets/hero.mov'
const HERO_AUDIO_SRC = '/assets/audio.mp4'

// Inline SVG poster frame for the <video> element. Matches the envelope/wax-seal intro's
// warm cream/blush background gradient so browsers never paint the default solid-black
// video placeholder while decoder metadata is still loading on first page paint.
const HERO_VIDEO_POSTER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 812" preserveAspectRatio="xMidYMid slice">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stop-color="#F5E6D8"/>
           <stop offset="35%" stop-color="#F0D9C7"/>
           <stop offset="70%" stop-color="#EFD3C3"/>
           <stop offset="100%" stop-color="#E9C9B5"/>
         </linearGradient>
       </defs>
       <rect width="375" height="812" fill="url(#g)"/>
     </svg>`
  )

type ParticlesProps = { count: number; className?: string }

function FloatingParticles({ count, className }: ParticlesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const rnd = (min: number, max: number) =>
          min + ((i * 9301 + 49297) % 233280) / 233280 * (max - min)
        const size = rnd(3, 9)
        return {
          id: i,
          top: rnd(2, 98),
          left: rnd(2, 98),
          size,
          opacity: rnd(0.4, 0.95),
          delay: rnd(0, 7),
          duration: rnd(7, 15),
          xdrift: rnd(-16, 16),
        }
      }),
    [count]
  )
  return (
    <div className={className ?? ''}>
      {particles.map((p) => (
        <span
          key={p.id}
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background:
              'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #F5E9D9 45%, rgba(255,255,255,0) 78%)',
            opacity: p.opacity,
            boxShadow: '0 0 10px rgba(196, 154, 108, 0.55)',
            animation: `floatSlow ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            transform: `translate3d(0, 0, 0) translateX(0px)`,
            ['--drift' as never]: `${p.xdrift}px`,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [hasEnded, setHasEnded] = useState(false)
  const endedRef = useRef(false)
  const startAttemptedRef = useRef(false)
  const audioStartedRef = useRef(false)
  const touchLastY = useRef<number | null>(null)
  const { unlock: unlockGate } = useIntroGate()

  const startAudio = useCallback(() => {
    if (audioStartedRef.current) return
    const a = audioRef.current
    if (!a) return
    const resetLatchIfFailed = () => {
      // If we can't start now, release the latch so the NEXT user gesture retries.
      // Otherwise user clicks once → audio fails forever even on subsequent taps.
      audioStartedRef.current = false
    }
    try {
      a.pause()
      a.setAttribute('playsinline', 'true')
      a.setAttribute('webkit-playsinline', 'true')
      a.setAttribute('x5-playsinline', 'true')
      a.setAttribute('preload', 'auto')
      // Explicitly set src inside the user-gesture stack — resolves issues on some browsers
      // where a static JSX src attribute isn't considered "user-initiated load".
      if (!a.src || new URL(a.src, window.location.href).pathname !== HERO_AUDIO_SRC) {
        a.src = HERO_AUDIO_SRC
      }
      a.preload = 'auto'
      a.volume = 0.7
      a.muted = false
      a.autoplay = false
      try {
        if (typeof a.load === 'function') a.load()
      } catch { /* swallow */ }
    } catch { /* swallow */ }

    const tryPlay = (stageLabel: string): boolean => {
      try {
        const p = a.play()
        if (!p || typeof p.then !== 'function') {
          // Older browsers (non-Promise play()) → assume success.
          audioStartedRef.current = true
          return true
        }
        p.then(() => { audioStartedRef.current = true }).catch(() => {
          // Play rejected on this stage. If last stage, reset latch.
          if (stageLabel === 'canplay') resetLatchIfFailed()
        })
        return true
      } catch {
        return false
      }
    }

    // Stage 1: try immediately (inside the gesture stack).
    if (tryPlay('immediate')) return

    // Stage 2: wait for 'loadeddata' — decoder primed enough to render a frame.
    const onLoadedDataOnce = () => {
      a.removeEventListener('loadeddata', onLoadedDataOnce)
      if (audioStartedRef.current) return
      if (tryPlay('loadeddata')) return
      // Stage 3: wait for 'canplay' — enough buffered to play all the way through ideally.
      const onCanPlayOnce = () => {
        a.removeEventListener('canplay', onCanPlayOnce)
        if (audioStartedRef.current) return
        if (!tryPlay('canplay')) resetLatchIfFailed()
      }
      a.addEventListener('canplay', onCanPlayOnce, { once: true })
    }
    a.addEventListener('loadeddata', onLoadedDataOnce, { once: true })
    // Fallback timeout (1.8s): if neither event fires (no net / bad file), release latch.
    window.setTimeout(() => { if (!audioStartedRef.current) resetLatchIfFailed() }, 1800)
  }, [])

  // If user switches tab/returns and browser paused the background audio, resume it
  // the moment the page becomes visible again. Never start audio on an invisible tab.
  useEffect(() => {
    if (typeof document === 'undefined') return
    const onVisibility = () => {
      if (document.visibilityState !== 'visible') return
      if (!audioStartedRef.current) return
      const a = audioRef.current
      if (!a) return
      try {
        if (a.paused) {
          a.volume = 0.7
          a.muted = false
          const p = a.play()
          if (p && typeof p.catch === 'function') p.catch(() => { /* noop */ })
        }
      } catch { /* swallow */ }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const startPlayback = useCallback(() => {
    startAudio()
    if (startAttemptedRef.current) return
    startAttemptedRef.current = true
    const v = videoRef.current
    if (!v) return
    try {
      v.muted = true
      v.setAttribute('muted', '')
      // Do NOT call v.load() here on an already-loaded/paused video:
      // load() tears down the decoder buffer and causes the visible paused frame to
      // briefly disappear / flash. We only use load() as a last-resort fallback inside
      // the play() rejection catch.
    } catch {
      /* swallow */
    }
    try {
      const p = v.play()
      if (p && typeof p.then === 'function' && typeof p.catch === 'function') {
        p.catch(() => {
          try { if (typeof v.load === 'function') v.load() } catch { /* noop */ }
          try { void v.play() } catch { /* noop */ }
        })
      }
    } catch {
      try { if (typeof v.load === 'function') v.load() } catch { /* noop */ }
      try { void v.play() } catch { /* noop */ }
    }
  }, [startAudio])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const section = sectionRef.current
    const v = videoRef.current
    // On mount, prime the <video> so the actual MOV first frame shows immediately as a
    // paused video (not just our cream SVG poster). User explicitly wants to SEE the
    // paused video on load, not a hidden/placeholder video.
    let realFrameShown = false
    const showRealPausedVideoFrame = () => {
      if (!v || realFrameShown) return
      realFrameShown = true
      try {
        // Drop the temporary SVG poster once real video metadata has rendered.
        v.removeAttribute('poster')
      } catch { /* ignore */ }
      try {
        if (!isNaN(v.duration) && Number.isFinite(v.duration) && v.duration > 0.05) {
          // Seek to head once — forces decoder to paint its own first frame.
          v.currentTime = 0
        }
      } catch { /* ignore: seekable not ready */ }
    }
    if (v) {
      // Decoder guard attrs
      v.muted = true
      v.setAttribute('muted', '')
      v.setAttribute('playsinline', 'true')
      v.setAttribute('webkit-playsinline', 'true')
      v.setAttribute('preload', 'auto')
      // Register once so real first frame replaces the SVG poster immediately
      v.addEventListener('loadeddata', showRealPausedVideoFrame, { once: true })
      try {
        if (typeof v.load === 'function') v.load()
      } catch {
        /* ignore */
      }
      try {
        v.currentTime = 0
      } catch {
        /* ignore: seekable may not be ready synchronously */
      }
    }
    const onEnded = () => {
      if (endedRef.current) return
      endedRef.current = true
      setHasEnded(true)
      unlockGate()
    }
    v?.addEventListener('ended', onEnded)

    const onCaptureClick = () => startPlayback()
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      startPlayback()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        startPlayback()
      }
    }
    // First scroll / wheel attempt must also start video + audio (user explicitly asked).
    //
    // CRITICAL: The intro gate keeps all sections under hero at `display:none` until the
    // video ends. That means the TOTAL page height is only hero's 100svh on first paint
    // — so the native document `scroll` event NEVER fires because there is literally
    // nothing scrollable (scrollTop can't change). In contrast, `wheel` fires on EVERY
    // vertical mouse-wheel tick regardless of whether the page has overflow or not.
    //
    // We keep the listeners permanently registered (NOT {once:true}) so they keep working
    // no matter how many wheel/touch attempts the user makes — but startAttemptedRef
    // and audioStartedRef guard them so playback only starts a single time.
    const onWheelAttempt = (e: WheelEvent) => {
      // Treat ANY meaningful vertical movement as an attempted scroll.
      if (!e.deltaY || Math.abs(e.deltaY) < 1) return
      startPlayback()
    }
    // Also keep a document scroll listener, so once sections unlock (post-ended) the
    // user never accidentally re-triggers via scroll (startAttemptedRef prevents it).
    const onScrollAttempt = () => startPlayback()
    const onSwipeAttempt = (e: TouchEvent) => {
      if (!e.touches || e.touches.length !== 1) return
      const t = e.touches[0]
      // Only react to a vertical drag with at least 6px of vertical movement component.
      if (t && typeof (t as any).clientY === 'number' && typeof (t as any).clientX === 'number') {
        const lastY = touchLastY.current
        if (typeof lastY === 'number') {
          const dy = (t as any).clientY - lastY
          if (Math.abs(dy) >= 6) {
            touchLastY.current = (t as any).clientY
            startPlayback()
            return
          }
        }
        touchLastY.current = (t as any).clientY
      } else {
        startPlayback()
      }
    }

    section?.addEventListener('click', onCaptureClick, true)
    section?.addEventListener('touchstart', onTouchStart, { passive: true })
    section?.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScrollAttempt, { passive: true })
    window.addEventListener('wheel', onWheelAttempt, { passive: true })
    window.addEventListener('touchmove', onSwipeAttempt, { passive: true })
    window.addEventListener('keydown', (e) => {
      if (['PageDown', 'PageUp', 'End', 'Home', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        startPlayback()
      }
    })

    return () => {
      v?.removeEventListener('ended', onEnded)
      if (v) v.removeEventListener('loadeddata', showRealPausedVideoFrame)
      section?.removeEventListener('click', onCaptureClick, true)
      section?.removeEventListener('touchstart', onTouchStart)
      section?.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScrollAttempt)
      window.removeEventListener('wheel', onWheelAttempt)
      window.removeEventListener('touchmove', onSwipeAttempt)
    }
  }, [startPlayback, unlockGate])

  return (
    <section
      id="hero-video"
      ref={sectionRef}
      aria-label="افتتاح الدعوة"
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden select-none cursor-pointer bg-gradient-to-b from-cream-200/70 via-cream-100 to-cream-50"
      role="button"
      tabIndex={0}
    >
      <style jsx>{`
        @keyframes floatSlow {
          0% {
            transform: translate3d(0, 0, 0) translateY(0) translateX(0);
          }
          50% {
            transform: translate3d(0, 0, 0) translateY(-14px) translateX(var(--drift, 8px));
          }
          100% {
            transform: translate3d(0, 0, 0) translateY(8px) translateX(calc(var(--drift, 8px) * -1));
          }
        }
        @keyframes fadeTextIn {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-1 { animation: fadeTextIn 900ms cubic-bezier(0.22, 0.61, 0.36, 1) 220ms both; }
        .fade-2 { animation: fadeTextIn 900ms cubic-bezier(0.22, 0.61, 0.36, 1) 420ms both; }
        .fade-3 { animation: fadeTextIn 900ms cubic-bezier(0.22, 0.61, 0.36, 1) 620ms both; }
        .fade-4 { animation: fadeTextIn 900ms cubic-bezier(0.22, 0.61, 0.36, 1) 820ms both; }
        .fade-5 { animation: fadeTextIn 900ms cubic-bezier(0.22, 0.61, 0.36, 1) 1020ms both; }
        .fade-6 { animation: fadeTextIn 900ms cubic-bezier(0.22, 0.61, 0.36, 1) 1220ms both; }
      `}</style>

      {/* Decorative backdrop for hero — RENDERED ONLY AFTER VIDEO ENDS.
          Kept invisible (opacity-0, no pointer events, no DOM removal) UNTIL `hasEnded=true`.
          The solid #111111 hero base + opaque video element completely cover the screen during
          playback so there is ZERO cream/particle backdrop that could flash white/cream when
          the user first clicks or scrolls. */}
      <div
        aria-hidden="true"
        className={
          'absolute inset-0 pointer-events-none z-0 transition-opacity duration-[1200ms] ease-out ' +
          (hasEnded ? 'opacity-100' : 'opacity-0')
        }
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cream-200/70 via-cream-100 to-cream-50" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] pointer-events-none z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 15 30 5 Z M5 30 Q15 35 25 30 Q15 25 5 30 Z M55 30 Q45 35 35 30 Q45 25 55 30 Z M30 55 Q35 45 30 35 Q25 45 30 55 Z' fill='none' stroke='%239E6A20' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='3' fill='%239E6A20'/%3E%3C/svg%3E\")",
            backgroundSize: '60px 60px',
          }}
        />
        <FloatingParticles count={36} className="absolute inset-0 pointer-events-none z-0" />
      </div>

      {/* Post-end text — behind video (appears after video finishes). */}
      <div
        aria-live="polite"
        className={
          'relative z-0 h-full w-full flex flex-col items-center justify-center px-5 sm:px-10 transition-all duration-[1400ms] ease-out text-center ' +
          (hasEnded
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none')
        }
      >
        <p className="font-aref text-rose-900 sm:text-rose-900/95 text-[19px] sm:text-[28px] md:text-[34px] leading-[1.6] mb-6 sm:mb-8 max-w-[28ch] fade-1">
          يتشرف آل مرزوق الكرام بدعوتكم لحضور حفل زفاف نجلهم الطبيب يوسف
        </p>

        <p className="font-ibm text-rose-900/90 text-[15px] sm:text-[19px] md:text-[22px] leading-relaxed mb-3 sm:mb-4 max-w-[34ch] fade-2">
          مساء الخميس ١٨ صفر ١٤٤٨ هـ — الموافق ٢٠ أغسطس ٢٠٢٦ م
        </p>
        <p className="font-ibm text-rose-900/85 text-[14px] sm:text-[18px] md:text-[20px] leading-relaxed mb-7 sm:mb-9 max-w-[30ch] fade-3">
          من الساعة التاسعة وحتى منتصف الليل
        </p>

        <p className="font-aref text-rose-800 sm:text-rose-800 text-[18px] sm:text-[24px] md:text-[30px] leading-relaxed mb-12 sm:mb-14 max-w-[30ch] fade-4">
          على كريمة السيد فهد العتيبي
        </p>

        <a
          href="#quran"
          onClick={(e) => {
            if (!hasEnded) return
            e.preventDefault()
            const el = document.getElementById('quran')
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          className="inline-flex flex-col items-center gap-2 group fade-5"
        >
          <span
            className="font-aref text-xl sm:text-2xl md:text-3xl text-rose-700 animate-pulse-soft tracking-wide"
            style={{
              textShadow:
                '0 1px 1px rgba(214,51,108,0.18), 0 0 18px rgba(214,51,108,0.14)',
            }}
          >
            اكتشف التفاصيل
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D6336C"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 sm:w-8 sm:h-8 animate-pulse-soft group-hover:-translate-y-0.5 transition-transform drop-shadow-[0_2px_4px_rgba(214,51,108,0.22)]"
          >
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Video (on top z-50 until ended). No click hint overlay. */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        poster={HERO_VIDEO_POSTER}
        muted
        playsInline
        preload="auto"
        controls={false}
        className={
          'absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out block ' +
          (hasEnded ? 'opacity-0 pointer-events-none z-10' : 'opacity-100 z-50')
        }
      />

      {/* Background audio — starts ONLY on first user click/scroll (never autoplay).
          Keep it 1x1 painted off-screen (NOT display:none) because Safari iOS
          sometimes refuses audio playback on display:none elements. */}
      <audio
        ref={audioRef}
        src={HERO_AUDIO_SRC}
        preload="auto"
        loop
        autoPlay={false}
        controls={false}
        playsInline
        className="fixed top-[-9999px] left-[-9999px] w-[1px] h-[1px] opacity-0 pointer-events-none overflow-hidden"
        style={{ visibility: 'visible' }}
      />
    </section>
  )
}
