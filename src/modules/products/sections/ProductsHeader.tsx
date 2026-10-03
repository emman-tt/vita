import { useRef } from 'react'
import { gsap, useGSAP } from '../../../lib/gsap'

/** Page header for the products listing — same serif + clay scheme as the hero. */
export default function ProductsHeader() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.set('.products-title-word', { yPercent: 70, autoAlpha: 0 })
      gsap.to('.products-title-word', {
        yPercent: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.09,
        delay: 0.15,
      })
      gsap.set('.products-sub', { autoAlpha: 0, y: 24 })
      gsap.to('.products-sub', {
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
      <p className="products-sub text-[11px] font-medium tracking-[0.28em] text-tangerine uppercase">
        VITA · 16 natural formulas
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[1.06]">
        <span className="products-title-word inline-block">Shop&nbsp;</span>
        <span className="products-title-word inline-block">The&nbsp;</span>
        <span className="products-title-word inline-block text-clay">Collection</span>
      </h1>
      <p className="products-sub mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink/60">
        Herbal-infused serums, creams, and cleansers made with certified organic ingredients —
        formulated to nourish, protect, and let your radiance shine.
      </p>
    </section>
  )
}
