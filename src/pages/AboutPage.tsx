import Container from '../components/ui/Container'
import { ButtonLink } from '../components/ui/Button'
import PageMetadata from '../components/seo/PageMetadata'

// =========================================================
// About Page – truthful frontend concept overview
// =========================================================

const values = [
  {
    title: 'Authentic Connections',
    description: 'Sample itineraries highlight local culture as a design goal, not as a verified Tripora service.',
  },
  {
    title: 'Thoughtful Details',
    description: 'Package cards demonstrate how accommodation, activities, and travel notes might be presented.',
  },
  {
    title: 'Responsible Travel',
    description: 'This illustrative value is not a claim about a verified sustainability program or partner network.',
  },
  {
    title: 'Flexible Planning',
    description: 'Search and enquiry forms illustrate planning interactions but do not generate real itineraries.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageMetadata
        title="About Tripora | Travel Concept Demo"
        description="Explore the values and sample brand story behind Tripora, a frontend travel concept. Team, services, and company details are illustrative, not verified."
      />
      <section className="section-padding">
        <Container>
        {/* Hero text */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-widest uppercase text-[#76552F] mb-4 font-medium">
            A Travel Concept
          </p>
          <h1 className="mb-6">Travel, Thoughtfully<br /><em>Explored.</em></h1>
          <p className="text-lg text-[#4A6572] leading-relaxed mb-4">
            Tripora is a frontend demonstration of a travel experience concept,
            using sample destinations, package itineraries, and client-side
            enquiry flows.
          </p>
          <p className="text-[#4A6572] leading-relaxed">
            It does not represent an operating travel agency. Company history,
            team, services, and partner relationships are not verified.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="mb-8">Values in the Concept</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 bg-[#F8F7F3] rounded-lg border border-[#142A32]/8"
              >
                <h3 className="text-base font-medium mb-2 text-[#142A32]">{v.title}</h3>
                <p className="text-sm text-[#4A6572] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#142A32] rounded-lg p-8 lg:p-12 text-[#E9E2D5]">
          <h2 className="text-[#F8F7F3] mb-3">Explore the Demo</h2>
          <p className="text-[#E9E2D5]/70 mb-6 max-w-xl">
            Browse sample destinations and itineraries, or preview a
            client-side enquiry form. Nothing is sent or booked.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/contact" variant="secondary" size="md">
              Preview Contact Form
            </ButtonLink>
            <ButtonLink
              to="/packages"
              variant="ghost"
              size="md"
              className="text-[#E9E2D5] hover:bg-white/10 border-white/20"
            >
              Browse Sample Packages
            </ButtonLink>
          </div>
        </div>

        <p className="text-sm text-[#4A6572] text-center mt-10">
          All brand story and values copy on this page is illustrative.
        </p>
        </Container>
      </section>
    </>
  )
}
