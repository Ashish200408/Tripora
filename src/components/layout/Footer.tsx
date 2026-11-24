import { Link } from 'react-router-dom'
import { Globe, Mail, Rss, Play } from 'lucide-react'
import Container from '../ui/Container'

// =========================================================
// Footer – Tripora site footer
// =========================================================

const footerLinks = {
  Explore: [
    { label: 'Destinations', to: '/destinations' },
    { label: 'Packages', to: '/packages' },
    { label: 'Experiences', to: '/experiences' },
    { label: 'Group Travel', to: '/packages' },
  ],
  Company: [
    { label: 'About Tripora', to: '/about' },
    { label: 'Our Story', to: '/about' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Book a Trip', to: '/booking' },
  ],
  Support: [
    { label: 'FAQs', to: '/contact' },
    { label: 'Travel Insurance', to: '/contact' },
    { label: 'Cancellation Policy', to: '/contact' },
    { label: 'Privacy Policy', to: '/contact' },
  ],
}

const socialLinks = [
  { label: 'Website', href: '#', icon: Globe },
  { label: 'Newsletter', href: '#', icon: Mail },
  { label: 'Blog', href: '#', icon: Rss },
  { label: 'Videos', href: '#', icon: Play },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-[#142A32] text-[#E9E2D5] mt-auto"
      role="contentinfo"
    >
      {/* Main footer content */}
      <Container className="py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

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
            <p className="text-sm text-[#E9E2D5]/60 leading-relaxed max-w-xs mb-6">
              Travel beyond the ordinary. We craft premium, personalised journeys that connect curious travellers with the world's most extraordinary places.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded border border-[#E9E2D5]/15 text-[#E9E2D5]/50 hover:text-[#E9E2D5] hover:border-[#E9E2D5]/40 transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
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
                      className="text-sm text-[#E9E2D5]/55 hover:text-[#E9E2D5] transition-colors duration-200"
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#E9E2D5]/35">
            <p>&copy; {year} Tripora. All rights reserved.</p>
            <p className="italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Travel beyond the ordinary.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
