import { motion, useReducedMotion } from 'motion/react'
import { Quote, Star } from 'lucide-react'
import Container from '../ui/Container'

const testimonials = [
  {
    name: 'Amelia Hart',
    destination: 'Kyoto, Japan',
    quote:
      'The quiet mornings, tucked-away tea house and unhurried itinerary made Kyoto feel personal from the very first day.',
  },
  {
    name: 'Daniel and Priya Shah',
    destination: 'Amalfi Coast, Italy',
    quote:
      'Every detail felt thoughtfully chosen, from the coastal views to the little family-run places we would never have found alone.',
  },
  {
    name: 'Sofia Martinez',
    destination: 'Marrakech, Morocco',
    quote:
      'We had room to wander and still felt looked after. It was the perfect balance of discovery, local character and ease.',
  },
]

const easeOutExpo = [0.22, 1, 0.36, 1] as const

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8F7F3] border-t border-[#142A32]/8"
    >
      <Container>
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="text-xs sm:text-sm tracking-[0.24em] uppercase text-[#142A32]! font-semibold mb-3">
            Traveller Stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-heading text-[#142A32]! mb-4"
          >
            Journeys That Stay With You.
          </h2>
          <p className="text-base sm:text-lg text-[#4A6572]! leading-relaxed">
            The best journeys leave you with more than photographs: small
            discoveries, new perspectives and stories you carry home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => {
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
                key={testimonial.name}
                {...motionProps}
                className="h-full flex flex-col rounded-xl bg-white border border-[#142A32]/10 p-6 sm:p-7 shadow-[0_2px_10px_rgba(20,42,50,0.05)]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    role="img"
                    aria-label="5 out of 5 stars"
                    className="flex items-center gap-1 text-[#76552F]"
                  >
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={16}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote
                    size={24}
                    className="text-[#B68C63]/70"
                    aria-hidden="true"
                  />
                </div>

                <blockquote className="flex-1">
                  <p className="text-base text-[#4A6572]! leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                <footer className="mt-6 pt-5 border-t border-[#142A32]/10">
                  <h3 className="font-heading text-lg text-[#142A32]! mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#4A6572]!">
                    Visited {testimonial.destination}
                  </p>
                </footer>
              </motion.article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-[#4A6572]!">
          Illustrative sample testimonials; these are not verified customer reviews.
        </p>
      </Container>
    </section>
  )
}
