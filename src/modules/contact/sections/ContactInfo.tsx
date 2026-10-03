import { Mail, MapPin, Phone } from 'lucide-react'
import { useRef } from 'react'
import { initReveals, useGSAP } from '../../../lib/gsap'

const CARDS = [
  { icon: MapPin, title: 'Visit Us', lines: ['123 Botanical Lane', 'Victoria Island, Lagos'] },
  { icon: Mail, title: 'Email Us', lines: ['hello@vita.com', 'support@vita.com'] },
  { icon: Phone, title: 'Call Us', lines: ['+234 800 000 0000', 'Mon–Fri, 9am–6pm'] },
]

export default function ContactInfo() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      initReveals(ref.current)
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-5 pb-4">
      <div className="mx-auto grid max-w-[1000px] gap-4 sm:grid-cols-3">
        {CARDS.map(({ icon: Icon, title, lines }) => (
          <div
            key={title}
            data-reveal
            className="rounded-[1.5rem] bg-white p-6 text-center shadow-[0_14px_40px_rgba(23,20,15,0.05)]"
          >
            <span className="mx-auto grid size-11 place-items-center rounded-full bg-tangerine/10 text-tangerine">
              <Icon size={18} strokeWidth={1.8} />
            </span>
            <h3 className="mt-4 text-sm font-semibold">{title}</h3>
            {lines.map((line) => (
              <p key={line} className="mt-1 text-xs leading-relaxed text-ink/55">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
