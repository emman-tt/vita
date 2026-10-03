import { useRef } from 'react'
import { Heart, Plus, Search, User } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { gsap, useGSAP } from '../../lib/gsap'

/* every nav icon routes somewhere — adjust the `to` values here */
const ACTIONS = [
  { icon: Search, label: 'Search products', to: '/products' },
  { icon: Heart, label: 'Wishlist', to: '/products' },
  { icon: Plus, label: 'Shop new arrivals', to: '/products' },
  { icon: User, label: 'Account & support', to: '/contact' },
]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'text-ink' : 'text-ink/35 transition-colors hover:text-ink'

export default function Navbar() {
  const ref = useRef<HTMLElement>(null)

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
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-1.5 rounded-full bg-ink p-1.5 text-white">
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
      </div>
    </header>
  )
}
