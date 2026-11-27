import { Link } from 'react-router-dom'
import Container from '../ui/Container'

// =========================================================
// Footer – Tripora site footer
// =========================================================

const footerLinks = {
  Explore: [
    { label: 'Destinations', to: '/destinations' },
    { label: 'Packages', to: '/packages' },
    { label: 'Experiences', to: '/experiences' },
  ],
  Company: [
    { label: 'About Tripora', to: '/about' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Booking Enquiry', to: '/booking' },
  ],
}

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#142A32] text-[#E9E2D5] mt-auto">
      {/* Main footer content */}
      <Container className="py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block mb-4"
              aria-label="Tripora home"
            >
              <span
                className="text-xl font-semibold tracking-widest text-[#F8F7F3] uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Tripora
              </span>
            </Link>
            <p className="text-sm text-[#E9E2D5]/75 leading-relaxed max-w-xs mb-6">
              Explore sample destinations and curated itineraries in this
              Tripora demo.
            </p>
            <p className="text-xs text-[#E9E2D5]/75">
              No social profiles are configured for this demo.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-xs font-medium tracking-widest uppercase text-[#B68C63] mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-[#E9E2D5]/75 hover:text-[#E9E2D5] transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[#E9E2D5]/10">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#E9E2D5]/70">
            <p>&copy; {CURRENT_YEAR} Tripora. All rights reserved.</p>
            <p className="italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Travel beyond the ordinary.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
