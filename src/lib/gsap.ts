import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export { gsap, ScrollTrigger, useGSAP }

export function initReveals(root: Element | null) {
  if (!root) return
  gsap.utils.toArray<HTMLElement>('[data-reveal]', root).forEach((el) => {
    gsap.set(el, { autoAlpha: 0, y: 28, filter: 'blur(12px)' })
    gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })
}

