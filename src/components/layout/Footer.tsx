import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap, useGSAP } from '../../lib/gsap'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../BrandIcons'

const LINKS: { label: string; to?: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About Us' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Services' },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.set('.footer-card', { autoAlpha: 0, y: 60 })
      gsap.to('.footer-card', {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%' },
      })
    },
    { scope: ref },
  )

  return (
    <footer ref={ref} className="px-4 pb-4 pt-8 lg:px-5 lg:pb-5">
      <div className="footer-card relative overflow-hidden rounded-[2.4rem] bg-tangerine px-7 pb-8 pt-12 text-white lg:rounded-[3rem] lg:px-14 lg:pt-16">
}
        <div className="pointer-events-none absolute -left-4 bottom-24 hidden size-24 place-items-center rounded-2xl bg-white/10 lg:grid">
          <span className="font-display text-3xl text-white/25">V</span>
        </div>
        <div className="pointer-events-none absolute bottom-44 left-16 hidden size-14 place-items-center rounded-xl bg-white/10 lg:grid">
          <span className="font-display text-xl text-white/25">V</span>
        </div>

        <div className="relative flex flex-col justify-between gap-14 lg:flex-row">
          <div>
            <p className="max-w-xl text-[1.35rem] font-light leading-snug sm:text-2xl">
              Revitalize your skin with our nourishing moonlight serum, perfect for a radiant
              glow!
            </p>
            <div className="relative mt-12 w-fit">
              <div className="absolute -left-7 top-5 size-16 rounded-2xl bg-white/30" />
              <div className="relative grid size-16 place-items-center rounded-2xl bg-white">
                <span className="font-display text-3xl text-tangerine">V</span>
              </div>
            </div>
          </div>

          <nav className="grid grid-cols-2 content-start gap-x-20 gap-y-5 text-sm lg:pr-16">
            {LINKS.map(({ label, to }) =>
              to ? (
                <Link
                  key={label}
                  to={to}
                  className="w-fit opacity-95 transition-opacity hover:opacity-70"
                >
                  {label}
                </Link>
              ) : (
                <a key={label} href="#" className="w-fit opacity-95 transition-opacity hover:opacity-70">
                  {label}
                </a>
              ),
            )}
          </nav>
        </div>

        <div className="relative mt-16 flex flex-col items-center justify-between gap-6 text-xs text-white/85 sm:flex-row">
          <p>
            Copyright 2025 © VITA. All Rights Reserved |{' '}
            <a href="#" className="underline underline-offset-2">
              Privacy Policy
            </a>
          </p>
          <div className="flex gap-2">
            {[InstagramIcon, FacebookIcon, LinkedinIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid size-8 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white/15"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

