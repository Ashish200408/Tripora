import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

// =========================================================
// Home Page – Placeholder (Phase 3 will build the full page)
// =========================================================

export default function HomePage() {
  return (
    <section className="section-padding min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm tracking-widest uppercase text-[#B68C63] mb-4 font-medium">
            Welcome to Tripora
          </p>
          <h1 className="mb-6">
            Travel Beyond<br />
            <em>the Ordinary.</em>
          </h1>
          <p className="text-lg text-[#4A6572] mb-8 leading-relaxed">
            We craft premium, personalised journeys to the world's most extraordinary destinations. The full homepage experience is coming in the next phase of development.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/destinations">
              <Button variant="primary" size="lg">
                Browse Destinations
              </Button>
            </Link>
            <Link to="/packages">
              <Button variant="outline" size="lg">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
