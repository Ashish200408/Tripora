import Container from '../ui/Container'

// =========================================================
// WhyChooseTripora – Brand value proposition section
// =========================================================

interface Benefit {
  id: string
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    id: 'curated-journeys',
    title: 'Curated Journeys',
    description:
      'Sample destinations and package data demonstrate how a travel discovery experience can be organized.',
  },
  {
    id: 'personalized-planning',
    title: 'Personalized Planning',
    description:
      'The search and enquiry forms illustrate planning interactions; they do not create personalized itineraries.',
  },
  {
    id: 'extraordinary-experiences',
    title: 'Extraordinary Experiences',
    description:
      'Browse illustrative destination highlights, activities, and day-by-day itineraries.',
  },
  {
    id: 'dedicated-assistance',
    title: 'Demo Enquiries',
    description:
      'Booking and contact forms validate locally. No travel assistance service is connected.',
  },
]

export default function WhyChooseTripora() {
  return (
    <section
      aria-labelledby="why-tripora-heading"
      className="bg-[#142A32] py-20 text-[#E9E2D5] sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:gap-x-20 lg:gap-y-0">
          <header className="md:col-span-2 lg:col-span-1 lg:pr-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#B68C63]! sm:text-sm">
              Inside the Tripora Demo
            </p>
            <h2
              id="why-tripora-heading"
              className="mb-6 max-w-xl font-heading text-4xl! leading-tight! text-[#F8F7F3]! sm:text-5xl! lg:text-6xl!"
            >
              Explore a Travel Concept.
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-[#E9E2D5]/85! sm:text-lg">
              Sample content and frontend interactions show one possible
              approach to travel discovery.
            </p>
          </header>

          <ol className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 sm:gap-x-10 md:col-span-2 lg:col-span-1">
            {benefits.map((benefit, index) => (
              <li
                key={benefit.id}
                className="border-t border-[#E9E2D5]/20 py-6 sm:py-7"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 block font-heading text-2xl text-[#B68C63]"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 font-heading text-2xl! text-[#F8F7F3]!">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#E9E2D5]/80! sm:text-base">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
