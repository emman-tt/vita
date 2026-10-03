import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap, initReveals, useGSAP } from '../../../lib/gsap'
import { IMAGES } from '../../../images'

function FlowerDeco({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      {Array.from({ length: 6 }, (_, i) => (
        <ellipse
          key={i}
          cx={100}
          cy={48}
          rx={34}
          ry={52}
          fill="currentColor"
          transform={`rotate(${i * 60} 100 100)`}
        />
      ))}
    </svg>
  )
}

export default function Organic() {
  const ref = useRef<HTMLElement>(null)
  const bottleRef = useRef<HTMLImageElement>(null)
  const floatRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      initReveals(ref.current)

      gsap.set('.organic-heading', { autoAlpha: 0, y: 44 })
      gsap.to('.organic-heading', {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })

      gsap.set('.organic-blob', { autoAlpha: 0, scale: 0.85 })
      gsap.to('.organic-blob', {
        autoAlpha: 1,
        scale: 1,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.organic-blob', start: 'top 80%' },
      })

      gsap.set(bottleRef.current, { autoAlpha: 0, y: 90, rotation: 0 })
      gsap.to(bottleRef.current, {
        autoAlpha: 1,
        y: 0,
        rotation: -30,
        duration: 1.2,
        scale: 1.5,
        ease: 'power3.out',
        scrollTrigger: { trigger: bottleRef.current, start: 'top 85%' },
      })

      gsap.to(floatRef.current, {
        y: -12,
        duration: 2.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      })

      gsap.to('.organic-flower', {
        yPercent: -18,
        rotation: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="relative py-20 lg:py-32">
      <FlowerDeco className="organic-flower pointer-events-none absolute -top-6 right-[4%] hidden w-44 text-shell md:block lg:w-56" />

      <div className="mx-auto grid max-w-360
      items-center gap-14 px-5
       lg:grid-cols-[1fr_1.55fr_0.85fr]
        lg:gap-8 lg:px-10">
        <h2 className="organic-heading font-display text-[clamp(2.1rem,3.8vw,3.8rem)] leading-[1.14]">
          Organic and certified natural skincare.
        </h2>

        <div className="relative mx-auto w-fit">
          <div className="organic-blob h-100 w-72  rotate-20
           rounded-[10rem] bg-tangerine sm:h-130 sm:w-95 lg:h-140 lg:w-80" />
          <div ref={floatRef} className="absolute inset-0">
            <Link to="/products" aria-label="Shop our products" className="cursor-pointer">
              <img
                ref={bottleRef}
                src={IMAGES.product}
                alt="Vitamin C + Hyaluronic Acid serum bottle"
                className="absolute top-1/2 -left-10 h-100 w-auto object-cover transition-transform duration-300 hover:scale-[1.04]
                 -translate-y-50 drop-shadow-[0_30px_40px_rgba(60,30,0,0.35)]"
              />
            </Link>
          </div>
        </div>

        <p data-reveal className="text-sm leading-relaxed text-ink/65 lg:max-w-75 lg:justify-self-end lg:pt-24">
          Discover the magic of natural skincare with our herbal-infused potions. Nourish your
          skin with organic ingredients that rejuvenate and protect. Embrace the beauty of nature
          and let your radiance shine!
        </p>
      </div>
    </section>
  )
}

