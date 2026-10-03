import { useRef } from 'react'
import { gsap, initReveals, useGSAP } from '../../../lib/gsap'
import { IMAGES } from '../../../images'

export default function Solutions() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      initReveals(ref.current)

      gsap.set('.solutions-heading', { autoAlpha: 0, y: 40 })
      gsap.to('.solutions-heading', {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      })

      gsap.set('.solutions-divider', { scaleY: 0 })
      gsap.to('.solutions-divider', {
        scaleY: 1,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })

      const banner = ref.current?.querySelector('.solutions-banner')
      if (banner) {
        gsap.set(banner, { autoAlpha: 0, scale: 1.14, filter: 'blur(16px)' })
        gsap.to(banner, {
          autoAlpha: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: banner, start: 'top 85%' },
        })
      }
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_auto_1fr] lg:gap-14">
          <h2 className="solutions-heading font-display text-[clamp(2.1rem,3.8vw,3.8rem)] leading-[1.16]">
            Natural and Organic
            <br />
            Skincare Solutions
          </h2>
          <div className="solutions-divider hidden h-20 w-px origin-top bg-ink/15 lg:block" />
          <p data-reveal className="text-sm leading-relaxed text-ink/65 lg:max-w-md">
            Revitalize your skin with a nourishing serum that hydrates and brightens. Don't forget
            to exfoliate regularly to remove dead skin cells and reveal a fresh glow. Protect
            your complexion with a broad-spectrum sunscreen every day!
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2.2rem] lg:mt-14 lg:rounded-[3rem]">
          <img
            src={IMAGES.banner}
            alt=""
            className="solutions-banner h-[300px] w-full object-cover sm:h-[420px] lg:h-[540px]"
          />
        </div>
      </div>
    </section>
  )
}
