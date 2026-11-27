import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import { ButtonLink } from '../ui/Button'
import { getResponsiveImageSrcSet } from '../../utils/responsiveImage'

// =========================================================
// HeroSection – Full-width cinematic homepage hero
// =========================================================

const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=2400&q=90&auto=format&fit=crop'

const easeOutExpo = [0.22, 1, 0.36, 1] as const

export default function HeroSection() {
  const [imageFailed, setImageFailed] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: easeOutExpo },
        }

  return (
    <section
      aria-label="Welcome to Tripora"
      className="relative w-full min-h-[78vh] sm:min-h-[88vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#142A32]"
    >
      {/* Background photograph or fallback gradient */}
      {!imageFailed ? (
        <img
          src={HERO_IMAGE_URL}
          srcSet={getResponsiveImageSrcSet(HERO_IMAGE_URL)}
          sizes="100vw"
          alt="Sunlit alpine lake surrounded by dramatic mountain peaks at dawn"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
          loading="eager"
          fetchPriority="high"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#142A32] via-[#1c3b46] to-[#0d1c22]"
        />
      )}

      {/* Directional dark overlays: strengthened behind text on the left, preserving photo visibility on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#142A32]/90 via-[#142A32]/72 to-[#142A32]/20 sm:via-[#142A32]/68 sm:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#142A32]/82 via-transparent to-[#142A32]/32"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 bg-[#142A32]/25 blur-3xl pointer-events-none"
      />

      {/* Hero content */}
      <Container className="relative z-10 py-14 sm:py-24 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow label */}
          <motion.p
            {...fadeUp(0.05)}
            className="text-xs sm:text-sm tracking-[0.26em] uppercase text-[#B68C63] font-semibold mb-4 sm:mb-5 drop-shadow-xs"
          >
            Welcome to Tripora
          </motion.p>

          {/* Main heading: consistently crisp, high-contrast light text */}
          <motion.h1
            {...fadeUp(0.15)}
            className="font-heading text-[#F8F7F3] text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.12] tracking-tight mb-6 sm:mb-7 drop-shadow-sm"
          >
            <span className="text-[#F8F7F3]">Travel Beyond</span>{' '}
            <span className="block sm:inline">
              <em className="italic font-normal text-[#E9E2D5]">the Ordinary.</em>
            </span>
          </motion.h1>

          {/* Supporting description */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-base sm:text-lg lg:text-xl text-[#F8F7F3]! sm:text-[#E9E2D5]! font-normal leading-relaxed max-w-lg mb-7 sm:mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
          >
            Explore sample destinations, illustrative itineraries, and
            frontend-only enquiry forms in this Tripora travel concept demo.
          </motion.p>

          {/* Actions / CTAs */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1"
          >
            <ButtonLink
              to="/destinations"
              variant="secondary"
              size="lg"
              fullWidth
              className="group shadow-md hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:min-w-52"
            >
              Explore Destinations
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </ButtonLink>

            <ButtonLink
              to="/packages"
              variant="outline-light"
              size="lg"
              fullWidth
              className="hover:-translate-y-0.5 sm:w-auto sm:min-w-52"
            >
              Discover Packages
            </ButtonLink>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
