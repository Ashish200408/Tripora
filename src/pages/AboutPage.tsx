import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

// =========================================================
// About Page – Placeholder
// Phase 6 will build the full About page
// =========================================================

const values = [
  {
    title: 'Authenticity',
    description: 'We design journeys that connect you with genuine local culture, not manufactured tourist experiences.',
  },
  {
    title: 'Excellence',
    description: 'Every detail — from accommodation selection to guide expertise — is held to the highest standard.',
  },
  {
    title: 'Responsibility',
    description: 'We travel with intention, supporting local communities and minimising environmental impact.',
  },
  {
    title: 'Personalisation',
    description: 'No two travellers are alike. Every Tripora journey is tailored to the individual.',
  },
]

export default function AboutPage() {
  return (
    <section className="section-padding">
      <Container>
        {/* Hero text */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-widest uppercase text-[#B68C63] mb-4 font-medium">
            Our Story
          </p>
          <h1 className="mb-6">We Believe Travel<br /><em>Should Transform You.</em></h1>
          <p className="text-lg text-[#4A6572] leading-relaxed mb-4">
            Tripora was founded on a single conviction: that the world's most extraordinary places deserve to be experienced with intention, expertise, and genuine care.
          </p>
          <p className="text-[#4A6572] leading-relaxed">
            We are a team of passionate travellers, destination specialists, and storytellers who have spent years building relationships with the finest guides, hotels, and local communities across the globe. Every itinerary we create carries that accumulated knowledge and love for travel.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="mb-8">What We Stand For</h2>
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
          <h2 className="text-[#F8F7F3] mb-3">Ready to Start Planning?</h2>
          <p className="text-[#E9E2D5]/70 mb-6 max-w-xl">
            Our travel specialists are ready to craft your perfect journey. Get in touch and we'll build an itinerary around your dreams.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact">
              <Button variant="secondary" size="md">Contact Us</Button>
            </Link>
            <Link to="/packages">
              <Button variant="ghost" size="md" className="text-[#E9E2D5] hover:bg-white/10 border-white/20">
                Browse Packages
              </Button>
            </Link>
          </div>
        </div>

        <p className="text-sm text-[#4A6572] text-center mt-10">
          The full About page with team profiles and brand story will be completed in Phase 6.
        </p>
      </Container>
    </section>
  )
}
