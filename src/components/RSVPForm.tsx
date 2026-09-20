'use client'

import { useState } from 'react'
import { useReveal } from './QuranVerse'
import { Check, Minus, Plus, Send, Sparkles } from 'lucide-react'

type Attendance = 'yes' | 'no' | 'maybe'

export default function RSVPForm() {
  const { ref, revealed } = useReveal<HTMLDivElement>()

  const [form, setForm] = useState({
    name: '',
    attendance: 'yes' as Attendance,
    guests: 1,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const attendanceOptions: Array<{ key: Attendance; label: string; icon: string }> = [
    { key: 'yes', label: 'بإذن الله', icon: '🤍' },
    { key: 'no', label: 'أعتذر', icon: '💛' },
    { key: 'maybe', label: 'غير متأكد', icon: '✨' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    // Simulate network
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section
      id="rsvp"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-cream-200/60 via-cream-100/80 to-cream-50"
    >
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-gold-200/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-gold-100/60 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 transition-all duration-1000 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-500">
              <path
                fill="currentColor"
                d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21z"
                opacity="0.9"
              />
            </svg>
            <span className="w-12 sm:w-20 h-[2px] gold-line rounded-full" />
          </div>
          <h2 className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient mb-3">
            نتشرف بتأكيد حضوركم
          </h2>
          <p className="font-ibm text-ink-soft text-base sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
            ردّكم يساعدنا في تجهيز استقبال يليق بكم وكرامتكم
          </p>
        </div>

        <div className="relative bg-gradient-to-b from-cream-50 via-white to-cream-100 rounded-[28px] p-[2.5px] shadow-gold-lg">
          <div className="absolute inset-0 rounded-[28px] bg-gold-gradient" />
          <div className="relative bg-gradient-to-b from-cream-50 via-white to-cream-100 rounded-[26px] p-6 sm:p-10 md:p-12 overflow-hidden">
            {/* decorative corners */}
            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-gold-400/70 rounded-tr-xl" />
            <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-gold-400/70 rounded-tl-xl" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-gold-400/70 rounded-br-xl" />
            <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-gold-400/70 rounded-bl-xl" />

            {submitted ? (
              <div className="relative py-12 sm:py-20 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gold-gradient shadow-gold-lg mb-6 animate-[fadeUp_0.7s_ease-out]">
                  <Check className="w-11 h-11 sm:w-12 sm:h-12 text-cream-50" strokeWidth={3} />
                </div>
                <p className="font-aref text-5xl sm:text-6xl md:text-7xl text-gold-gradient mb-4 animate-[fadeUp_0.8s_ease-out_0.1s_both]">
                  شكراً لتأكيدكم
                </p>
                <div className="flex items-center justify-center gap-2 mb-6 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
                  <Sparkles className="w-5 h-5 text-gold-500" />
                  <p className="font-aref text-2xl sm:text-3xl text-ink-dark">نتشرف برؤيتكم على الفرحة</p>
                  <Sparkles className="w-5 h-5 text-gold-500" />
                </div>
                <p className="font-ibm text-ink-muted text-sm sm:text-base leading-relaxed max-w-md mx-auto animate-[fadeUp_0.8s_ease-out_0.3s_both]">
                  تم استلام تأكيدكم بنجاح. إن شاء الله نراكم على خير وسلامة في ليلة العمر
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', attendance: 'yes', guests: 1, message: '' })
                  }}
                  className="mt-10 inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-gold-400 text-gold-700 font-aref text-lg hover:bg-gold-gradient hover:text-cream-50 hover:border-gold-500 transition-all duration-300 animate-[fadeUp_0.8s_ease-out_0.4s_both]"
                >
                  تعديل الرد
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6 sm:space-y-7">
                {/* Name */}
                <div>
                  <label className="block mb-3 font-aref text-xl sm:text-2xl text-ink-dark">
                    <span className="text-gold-600">*</span> الاسم الكريم
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="مثال: أحمد بن سعيد القرشي"
                    className="w-full px-5 sm:px-6 py-4 rounded-[14px] border-2 border-gold-300/70 bg-cream-50 focus:bg-white focus:border-gold-500 focus:ring-4 focus:ring-gold-300/30 outline-none transition-all text-ink-dark font-ibm text-base sm:text-lg placeholder:text-ink-muted/60"
                  />
                </div>

                {/* Attendance pills */}
                <div>
                  <label className="block mb-3 font-aref text-xl sm:text-2xl text-ink-dark">
                    <span className="text-gold-600">*</span> الحضور
                  </label>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {attendanceOptions.map((opt) => {
                      const active = form.attendance === opt.key
                      return (
                        <button
                          type="button"
                          key={opt.key}
                          onClick={() => setForm({ ...form, attendance: opt.key })}
                          className={`relative overflow-hidden py-3.5 sm:py-4 px-3 sm:px-5 rounded-pill font-aref text-lg sm:text-[22px] transition-all duration-400 border-2 ${
                            active
                              ? 'bg-gold-gradient text-cream-50 border-gold-500 shadow-gold scale-[1.02]'
                              : 'bg-cream-50 text-ink-mid border-gold-200 hover:border-gold-400 hover:text-ink-dark'
                          }`}
                        >
                          <span className="relative flex items-center justify-center gap-2">
                            <span>{opt.icon}</span>
                            <span>{opt.label}</span>
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Guest stepper */}
                <div>
                  <label className="block mb-3 font-aref text-xl sm:text-2xl text-ink-dark">
                    عدد الأشخاص{' '}
                    <span className="text-ink-muted text-base sm:text-lg font-ibm">
                      (شاملاً حضرتك)
                    </span>
                  </label>
                  <div className="inline-flex items-center gap-5 bg-cream-50 border-2 border-gold-300/70 rounded-pill px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm">
                    <button
                      type="button"
                      onClick={() =>
                        setForm({ ...form, guests: Math.max(1, form.guests - 1) })
                      }
                      disabled={form.guests <= 1}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-gold-100 hover:bg-gold-200 text-gold-700 disabled:opacity-40 disabled:hover:bg-gold-100 transition-colors"
                      aria-label="نقصان"
                    >
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                    </button>
                    <span className="min-w-[2.5rem] sm:min-w-[3rem] text-center font-aref text-3xl sm:text-4xl text-gold-700 font-bold leading-none">
                      {form.guests}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setForm({ ...form, guests: Math.min(20, form.guests + 1) })
                      }
                      disabled={form.guests >= 20}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-gold-gradient text-cream-50 hover:shadow-gold disabled:opacity-40 transition-all"
                      aria-label="زيادة"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-3 font-aref text-xl sm:text-2xl text-ink-dark">
                    رسالة للعروسين{' '}
                    <span className="text-ink-muted text-base sm:text-lg font-ibm">💌</span>
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="بارك الله لكما وبارك عليكما وجمع بينكما في خير..."
                    className="w-full px-5 sm:px-6 py-4 rounded-[14px] border-2 border-gold-300/70 bg-cream-50 focus:bg-white focus:border-gold-500 focus:ring-4 focus:ring-gold-300/30 outline-none transition-all text-ink-dark font-ibm text-base sm:text-lg placeholder:text-ink-muted/60 resize-none leading-relaxed"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting || !form.name}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 sm:px-16 py-4.5 sm:py-5 rounded-[16px] bg-gold-gradient text-cream-50 font-aref text-2xl sm:text-[26px] shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {submitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                        جارِ الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        تأكيد
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
