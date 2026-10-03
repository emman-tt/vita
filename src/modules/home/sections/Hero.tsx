import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { gsap, initReveals, useGSAP } from '../../../lib/gsap'
import { IMAGES } from '../../../images'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../../../components/BrandIcons'

/* one photo flows across all nine blobs; each tile shows its slice of the grid */
const MOSAIC = IMAGES.mosaic
const CARDS = IMAGES.cards
const CARD_GAP = 16

function SplitLine({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="hero-word inline-block will-change-transform">
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}

        </span>
      ))}
    </>
  )
}

/** Eight-petal flower mask, authored on a 300x300 artboard and expressed in
    objectBoundingBox units (originals / 300) so it scales to any size. */
const FLOWER_PATH =
  'M 0.5 0.5 C 0.3467 0.3528 0.3467 0.1688 0.5 0.04 C 0.6533 0.1688 0.6533 0.3528 0.5 0.5 Z M 0.5 0.5 C 0.4957 0.2875 0.6258 0.1574 0.8253 0.1747 C 0.8426 0.3742 0.7125 0.5043 0.5 0.5 Z M 0.5 0.5 C 0.6472 0.3467 0.8312 0.3467 0.96 0.5 C 0.8312 0.6533 0.6472 0.6533 0.5 0.5 Z M 0.5 0.5 C 0.7125 0.4957 0.8426 0.6258 0.8253 0.8253 C 0.6258 0.8426 0.4957 0.7125 0.5 0.5 Z M 0.5 0.5 C 0.6533 0.6472 0.6533 0.8312 0.5 0.96 C 0.3467 0.8312 0.3467 0.6472 0.5 0.5 Z M 0.5 0.5 C 0.5043 0.7125 0.3742 0.8426 0.1747 0.8253 C 0.1574 0.6258 0.2875 0.4957 0.5 0.5 Z M 0.5 0.5 C 0.3528 0.6533 0.1688 0.6533 0.04 0.5 C 0.1688 0.3467 0.3528 0.3467 0.5 0.5 Z M 0.5 0.5 C 0.2875 0.5043 0.1574 0.3742 0.1747 0.1747 C 0.3742 0.1574 0.5043 0.2875 0.5 0.5 Z'

/** Portrait photo masked into the eight-petal flower. */
function FlowerPhoto({ src, className }: { src: string; className?: string }) {
  return (
    <>
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="flower-mask" clipPathUnits="objectBoundingBox">
            <path d={FLOWER_PATH} />
          </clipPath>
        </defs>
      </svg>
      <div
        className={`${className} aspect-square bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${src})`, clipPath: 'url(#flower-mask)' }}
      />
    </>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const badgeTextRef = useRef<SVGSVGElement>(null)
  const badgeArrowRef = useRef<SVGSVGElement>(null)
  const [slide, setSlide] = useState(0)

  useGSAP(
    () => {
      initReveals(ref.current)

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-word', { yPercent: 70, autoAlpha: 0, duration: 1, stagger: 0.09 }, 0.15)
        .from(
          '.hero-flower',
          { autoAlpha: 0, rotation: -14, scale: 0.85, filter: 'blur(10px)', duration: 1.1 },
          0.5,
        )
        .from(
          '.hero-tile',
          { autoAlpha: 0, scale: 0.82, filter: 'blur(12px)', duration: 0.9, stagger: 0.06 },
          0.45,
        )
        .from('.hero-side', { y: 26, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, 0.7)
        .from('.hero-cards', { x: 60, autoAlpha: 0, duration: 0.9 }, 0.8)
        .from('.hero-connect', { y: 24, autoAlpha: 0, duration: 0.7 }, 0.95)
        .from('.hero-badge', { scale: 0.6, autoAlpha: 0, duration: 0.7, ease: 'back.out(1.6)' }, 1)

      gsap.to(badgeTextRef.current, { rotation: 360, duration: 14, ease: 'none', repeat: -1 })
      gsap.to(badgeArrowRef.current, {
        y: 5,
        duration: 0.9,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      gsap.to('.hero-collage', {
        yPercent: -7,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      /* slice the mosaic across the grid: each tile's background is sized to
         the full grid and shifted by the tile's layout position, so the photo
         lines up continuously across the blobs (layout offsets ignore the
         entrance transforms, so this stays exact while tiles animate) */
      const grid = gridRef.current
      if (grid) {
        const paintMosaic = () => {
          for (const tile of Array.from(grid.children) as HTMLElement[]) {
            tile.style.backgroundSize = `${grid.offsetWidth}px ${grid.offsetHeight}px`
            tile.style.backgroundPosition = `-${tile.offsetLeft}px -${tile.offsetTop}px`
          }
        }
        paintMosaic()
        const observer = new ResizeObserver(paintMosaic)
        observer.observe(grid)
        return () => observer.disconnect()
      }
    },
    { scope: ref },
  )

  useGSAP(
    () => {
      const card = stripRef.current?.firstElementChild as HTMLElement | undefined
      const step = card ? card.offsetWidth + CARD_GAP : 0
      gsap.to(stripRef.current, { x: -slide * step, duration: 0.65, ease: 'power3.inOut' })
    },
    { dependencies: [slide] },
  )

  const maxSlide = CARDS.length - 2

  return (
    <section ref={ref} className="relative pb-16 pt-8 lg:pb-24">
      <div className="mx-auto max-w-400 px-5 lg:px-5">
        <h1 className="text-center font-display text-[clamp(2.7rem,6.6vw,6.2rem)] leading-[1.05]">
          <span className="block">
            <SplitLine text="Elevate Your Daily" />
          </span>
          <span className="block text-clay md:translate-x-16">
            <SplitLine text="Skincare Ritual" />
          </span>
        </h1>

        <div className="mt-4  flex flex-col items-start gap-8 
        lg:mt-0 lg:grid lg:grid-cols-[220px_minmax(0,1fr)_280px] lg:gap-16">
          <div className="order-2 pt-8 lg:order-1 lg:pt-10">
            <FlowerPhoto src={IMAGES.heroFlower} className="hero-flower w-36 lg:w-44" />

            {/* rotating scroll badge — right under the flower */}
            <div className="hero-badge relative mt-6 hidden size-28 place-items-center rounded-full bg-ink text-white lg:grid">
              <svg ref={badgeTextRef} viewBox="0 0 100 100" className="absolute inset-0 size-full">
                <defs>
                  <path
                    id="badge-circle"
                    d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                    fill="none"
                  />
                </defs>
                <text className="fill-white" fontSize="6.5" letterSpacing="1">
                  <textPath href="#badge-circle">
                    scroll down for more • scroll down for more •
                  </textPath>
                </text>
              </svg>
              <ArrowDown ref={badgeArrowRef} size={20} strokeWidth={1.6} />
            </div>

            <p className="hero-side mt-6 max-w-54 text-xs leading-relaxed text-ink/55">
              Glowing skin begins with consistent care — hydration, protection, and nourishment
              are key.
            </p>
          </div>

          <div className="order-1 mt-8 w-full lg:order-2 lg:mt-2">
            <div
              ref={gridRef}
              className="hero-collage relative mx-auto grid w-full
               max-w-110  lg:max-w-220    gap-2 lg:gap-4
               grid-cols-[1fr_1.5fr_1fr] 
               grid-rows-[100px_172px_112px] 
               sm:grid-rows-[122px_216px_136px] 
               lg:grid-rows-[170px_200px_206px] "
            >
              {Array.from({ length: 9 }, (_, i) => {
                const row = Math.floor(i / 3)
                const col = i % 3
                return (
                  <div
                    key={i}
                    className={`hero-tile blob-${i + 1} overflow-hidden bg-no-repeat`}
                    style={{
                      backgroundImage: `url(${MOSAIC})`,
                      /* decent pre-JS approximation; paintMosaic makes it exact */
                      backgroundSize: '300% 300%',
                      backgroundPosition: `${col * 50}% ${row * 50}%`,
                    }}
                  />
                )
              })}
            </div>
          </div>

          <div className="order-3 pt-2 lg:pt-12">
            <p className="hero-side max-w-63 text-xs leading-relaxed text-ink/60">
              Nourish your skin with a hydrating serum for a radiant glow. Don't forget to apply
              sunscreen daily to protect against harmful UV rays.
            </p>
            <Link
              to="/products"
              className="hero-side mt-6 inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pl-6 pr-1.5 text-sm text-white transition-transform hover:scale-[1.03]"
            >
              Learn more
              <span className="grid size-9 place-items-center rounded-full bg-white/15">
                <ArrowUpRight size={16} />
              </span>
            </Link>

            {/* mini carousel — right under the Learn more button */}
            <div className="hero-cards mt-8 flex flex-col items-end gap-4 lg:-mr-5">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  aria-label="Previous card"
                  onClick={() => setSlide((s) => Math.max(0, s - 1))}
                  disabled={slide === 0}
                  className="grid size-10 cursor-pointer place-items-center rounded-full border border-ink/20 text-ink/45 transition hover:border-ink hover:text-ink disabled:opacity-40"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next card"
                  onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
                  disabled={slide === maxSlide}
                  className="grid size-10 cursor-pointer place-items-center rounded-full border border-ink text-ink transition hover:bg-ink hover:text-white disabled:opacity-40"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="w-[250px] overflow-hidden">
                <div ref={stripRef} className="flex w-max gap-4">
                  {CARDS.map((src) => (
                    <div
                      key={src}
                      className="h-56 w-44 shrink-0 overflow-hidden rounded-[1.5rem]"
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <p className="max-w-[200px] text-xs leading-relaxed text-ink/55">
                Healthy skin starts with simple care — cleanse, hydrate, and protect every day.
                Consistent skincare keeps your glow fresh and your confidence high.
              </p>
            </div>
          </div>
        </div>

        {/* connect pill — slight slant as an accent */}
        <div className="hero-connect mt-12 flex justify-center lg:mt-2">
          <div className="flex -rotate-3 items-center gap-4 rounded-full bg-white py-2 pl-6 pr-2 shadow-[0_14px_40px_rgba(23,20,15,0.08)] transition-transform hover:rotate-0">
            <span className="text-sm">Let's Connect.</span>
            <div className="flex gap-1.5">
              {[InstagramIcon, FacebookIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="grid size-8 place-items-center rounded-full bg-ink text-white transition-transform hover:scale-110"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
