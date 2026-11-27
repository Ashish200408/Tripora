import { motion, useReducedMotion } from 'motion/react'
import { Compass, SlidersHorizontal, Sparkles, Headphones, type LucideIcon } from 'lucide-react'
import Container from '../ui/Container'

// =========================================================
// WhyChooseTripora – Brand value proposition section
// =========================================================

interface Benefit {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

const benefits: Benefit[] = [
  {
    id: 'curated-journeys',
    title: 'Curated Journeys',
    description:
      'Sample destinations and package data demonstrate how a travel discovery experience can be organized.',
    icon: Compass,
  },
  {
    id: 'personalized-planning',
    title: 'Personalized Planning',
    description:
      'The search and enquiry forms illustrate planning interactions; they do not create personalized itineraries.',
    icon: SlidersHorizontal,
  },
  {
    id: 'extraordinary-experiences',
    title: 'Extraordinary Experiences',
    description:
      'Browse illustrative destination highlights, activities, and day-by-day itineraries.',
    icon: Sparkles,
  },
  {
    id: 'dedicated-assistance',
    title: 'Demo Enquiries',
    description:
      'Booking and contact forms validate locally. No travel assistance service is connected.',
    icon: Headphones,
  },
]

const easeOutExpo = [0.22, 1, 0.36, 1] as const

export default function WhyChooseTripora() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="why-tripora-heading"
      className="py-16 sm:py-20 lg:py-24 bg-[#142A32] text-[#E9E2D5]"
    >
      <Container>
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="text-xs sm:text-sm tracking-[0.24em] uppercase text-[#B68C63]! font-semibold mb-3">
            Inside the Tripora Demo
          </p>
          <h2
            id="why-tripora-heading"
            className="font-heading text-[#F8F7F3]! mb-4"
          >
            Explore a Travel Concept.
          </h2>
          <p className="text-base sm:text-lg text-[#E9E2D5]/85! leading-relaxed">
            Sample content and frontend interactions show one possible approach to travel discovery.
          </p>
        </div>

        {/* 4-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const motionProps = shouldReduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.2 },
                  transition: {
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: easeOutExpo,
                  },
                }

            return (
              <motion.article
                key={benefit.id}
                {...motionProps}
                className="h-full flex flex-col p-6 sm:p-7 rounded-xl bg-[#1a3540] border border-[#E9E2D5]/12 hover:border-[#B68C63]/45 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
              >
                <div
                  className="w-11 h-11 rounded-lg bg-[#B68C63]/15 border border-[#B68C63]/30 flex items-center justify-center mb-5 shrink-0"
                  aria-hidden="true"
                >
                  <Icon size={20} className="text-[#B68C63]" />
                </div>

                <h3 className="font-heading text-xl text-[#F8F7F3]! mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm text-[#E9E2D5]/80! leading-relaxed">
                  {benefit.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
