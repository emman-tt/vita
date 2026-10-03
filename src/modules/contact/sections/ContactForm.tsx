import { useState } from 'react'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { initReveals, useGSAP } from '../../../lib/gsap'

const inputClass =
  'w-full rounded-[1.2rem] border border-ink/10 bg-white px-5 py-3.5 text-sm placeholder:text-ink/35 focus:border-tangerine focus:outline-none'

export default function ContactForm() {
  const ref = useRef<HTMLElement>(null)
  const [sent, setSent] = useState(false)

  useGSAP(
    () => {
      initReveals(ref.current)
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-5 pb-24 pt-10">
      <form
        data-reveal
        className="mx-auto max-w-[720px] rounded-[2rem] bg-white p-6 shadow-[0_14px_40px_rgba(23,20,15,0.05)] sm:p-10"
        onSubmit={(e) => {
          e.preventDefault()
          setSent(true)
        }}
      >
        <h2 className="font-display text-2xl">Send us a message</h2>
        <p className="mt-1.5 text-xs text-ink/55">
          Fields marked * are required — we reply within one business day.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input required placeholder="Full name *" className={inputClass} aria-label="Full name" />
          <input
            required
            type="email"
            placeholder="Email address *"
            className={inputClass}
            aria-label="Email address"
          />
        </div>
        <input
          placeholder="Subject"
          className={`${inputClass} mt-4`}
          aria-label="Subject"
        />
        <textarea
          required
          rows={5}
          placeholder="Your message *"
          className={`${inputClass} mt-4 resize-none`}
          aria-label="Your message"
        />

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-xs text-ink/45">We never share your details.</p>
          <button
            type="submit"
            className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-ink py-1.5 pl-6 pr-1.5 text-sm text-white transition-transform hover:scale-[1.03]"
          >
            {sent ? 'Message sent ✓' : 'Send message'}
            <span className="grid size-9 place-items-center rounded-full bg-white/15">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
      </form>
    </section>
  )
}
