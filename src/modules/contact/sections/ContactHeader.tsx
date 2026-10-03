import { useRef } from 'react'
import { gsap, useGSAP } from '../../../lib/gsap'

export default function ContactHeader() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.set('.contact-title-word', { yPercent: 70, autoAlpha: 0 })
      gsap.to('.contact-title-word', {
        yPercent: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.09,
        delay: 0.15,
      })
      gsap.set('.contact-sub', { autoAlpha: 0, y: 24 })
      gsap.to('.contact-sub', {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.55,
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-5 pb-14 pt-14 text-center lg:pt-20">
      <p className="contact-sub text-[11px] font-medium tracking-[0.28em] text-tangerine uppercase">
        VITA · We'd love to hear from you
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[1.06]">
        <span className="contact-title-word inline-block">Get&nbsp;</span>
        <span className="contact-title-word inline-block text-clay">In&nbsp;Touch</span>
      </h1>
      <p className="contact-sub mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink/60">
        Questions about an order, an ingredient, or your skincare ritual? Send us a note and the
        team will get back to you within one business day.
      </p>
    </section>
  )
}

