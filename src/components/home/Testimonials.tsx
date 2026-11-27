import { Quote } from 'lucide-react'
import Container from '../ui/Container'
import ImageWithFallback from '../ui/ImageWithFallback'

const KYOTO_IMAGE_URL =
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80'

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

export default function Testimonials() {
  const [featuredTestimonial, ...supportingTestimonials] = testimonials

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-[#142A32]/8 bg-[#E9E2D5] pt-20 pb-12 sm:pb-16 lg:py-20"
    >
      <Container>
        <div className="mb-7 max-w-2xl sm:mb-9 lg:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#76552F]! sm:text-sm">
            Traveller Stories
          </p>
          <h2
            id="testimonials-heading"
            className="mb-4 font-heading text-[#142A32]!"
          >
            Journeys That Stay With You.
          </h2>
          <p className="text-base leading-relaxed text-[#4A6572]! sm:text-lg">
            The best journeys leave you with more than photographs: small
            discoveries, new perspectives and stories you carry home.
          </p>
        </div>

        <p
          role="note"
          className="mb-7 border-l-2 border-[#B68C63] pl-4 text-sm leading-relaxed text-[#142A32]! sm:mb-9 sm:text-base"
        >
          Illustrative sample testimonials; these are not verified customer reviews.
        </p>

        {featuredTestimonial && (
          <>
            <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
              <figure className="order-1 lg:order-2">
                <ImageWithFallback
                  src={KYOTO_IMAGE_URL}
                  alt="Kyoto, Japan"
                  fallbackLabel="Kyoto, Japan"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#76552F]">
                  Kyoto, Japan
                </figcaption>
              </figure>

              <article className="order-2 border-l-2 border-[#B68C63] pl-6 sm:pl-8 lg:order-1 lg:pl-10">
                <Quote
                  size={40}
                  strokeWidth={1.25}
                  className="mb-4 text-[#B68C63]"
                  aria-hidden="true"
                />
                <blockquote>
                  <p className="mb-6 font-heading text-xl! leading-relaxed! text-[#142A32]! sm:text-2xl! lg:text-3xl!">
                    “{featuredTestimonial.quote}”
                  </p>
                </blockquote>
                <footer>
                  <p className="font-medium text-[#142A32]!">
                    {featuredTestimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-[#4A6572]!">
                    Visited {featuredTestimonial.destination}
                  </p>
                </footer>
              </article>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:gap-10">
              {supportingTestimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="border-t border-[#142A32]/20 pt-5 sm:pt-6"
                >
                  <blockquote>
                    <p className="mb-5 font-heading text-lg! leading-relaxed! text-[#142A32]! sm:text-xl!">
                      “{testimonial.quote}”
                    </p>
                  </blockquote>
                  <footer>
                    <p className="font-medium text-[#142A32]!">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-[#4A6572]!">
                      Visited {testimonial.destination}
                    </p>
                  </footer>
                </article>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  )
}
