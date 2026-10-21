import { useRef, useState } from 'react'
import { Heart, Menu, Plus, Search, User, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { gsap, useGSAP } from '../../lib/gsap'

const ACTIONS = [
  { icon: Search, label: 'Search products', to: '/products' },
  { icon: Heart, label: 'Wishlist', to: '/products' },
  { icon: Plus, label: 'Shop new arrivals', to: '/products' },
  { icon: User, label: 'Account & support', to: '/contact' },
]

const MOBILE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'text-ink' : 'text-ink/35 transition-colors hover:text-ink'

export default function Navbar() {
  const ref = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)

  useGSAP(
    () => {
      gsap.from('.nav-bar', {
        y: -18,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.1,
      })
    },
    { scope: ref },
  )

  useGSAP(
    () => {
      if (open) {
        gsap.fromTo(
          '.nav-menu',
          { height: 0, autoAlpha: 0 },
          { height: 'auto', autoAlpha: 1, duration: 0.4, ease: 'power2.out' },
        )
        gsap.from('.nav-menu-link', { y: 14, autoAlpha: 0, stagger: 0.06, duration: 0.4 })
      }
    },
    { scope: ref, dependencies: [open] },
  )

  return (
    <header ref={ref} className="relative z-20">
      <div className="nav-bar mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 pt-6 lg:px-10">
        <NavLink to="/" className="flex items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-xl bg-ink font-display text-xl leading-none text-white">
            V
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-semibold tracking-wide">
              VITA<sup className="text-[8px]">®</sup>
            </span>
            <span className="block text-[8.5px] font-medium tracking-[0.24em] text-ink/55">
              NATURAL &amp; HEALTHY
            </span>
          </span>
        </NavLink>

        <nav className="hidden flex-1 items-center justify-center gap-9 text-[13px] md:flex">
          {MOBILE_LINKS.map(({ label, to }) => (
            <NavLink key={to} to={to} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 rounded-full bg-ink p-1.5 text-white sm:flex">
            {ACTIONS.map(({ icon: Icon, label, to }) => (
              <Link
                key={label}
                to={to}
                aria-label={label}
                title={label}
                className="grid size-8 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white/15 lg:size-9"
              >
                <Icon size={15} strokeWidth={1.8} />
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 cursor-pointer place-items-center rounded-xl bg-ink text-white md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-menu mx-5 mt-3 overflow-hidden rounded-[1.4rem] bg-white shadow-[0_14px_40px_rgba(23,20,15,0.08)] md:hidden">
          <div className="flex flex-col p-3">
            {MOBILE_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `nav-menu-link rounded-xl px-4 py-3 text-sm transition-colors ${
                    isActive ? 'bg-ink/5 text-ink' : 'text-ink/55 hover:text-ink'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
