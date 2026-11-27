import Container from '../components/ui/Container'
import { ButtonLink } from '../components/ui/Button'
import { MapPin } from 'lucide-react'
import PageMetadata from '../components/seo/PageMetadata'

// =========================================================
// 404 Not Found Page
// =========================================================

export default function NotFoundPage() {
  return (
    <>
      <PageMetadata
        title="Page Not Found | Tripora"
        description="This Tripora page could not be found. Browse sample destinations or return to the homepage."
      />
      <section className="section-padding min-h-[70vh] flex items-center">
        <Container narrow>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E9E2D5] mb-6">
            <MapPin size={28} className="text-[#76552F]" />
          </div>
          <p className="text-sm tracking-widest uppercase text-[#76552F] mb-3 font-medium">
            404 — Page Not Found
          </p>
          <h1 className="mb-4">Lost on the Map</h1>
          <p className="text-lg text-[#4A6572] mb-8 leading-relaxed">
            The page you're looking for doesn't exist. Perhaps we can help you find your next adventure instead.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <ButtonLink to="/" variant="primary" size="lg">
              Back to Home
            </ButtonLink>
            <ButtonLink to="/destinations" variant="outline" size="lg">
              Browse Destinations
            </ButtonLink>
          </div>
        </div>
        </Container>
      </section>
    </>
  )
}
