import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

// =========================================================
// Booking Page – Placeholder
// Phase 5/7 will add full booking enquiry with validation
// =========================================================

export default function BookingPage() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <Container narrow>
        <div className="text-center">
          <p className="text-sm tracking-widest uppercase text-[#B68C63] mb-4 font-medium">
            Book Your Journey
          </p>
          <h1 className="mb-4">Booking Enquiry</h1>
          <p className="text-lg text-[#4A6572] mb-8 leading-relaxed">
            The full booking enquiry form with validation, package selection, and confirmation state will be implemented in Phase 5.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/packages">
              <Button variant="primary" size="lg">Browse Packages</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Contact Us Instead</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
