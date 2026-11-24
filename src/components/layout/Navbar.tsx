import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

// =========================================================
// Navbar – Tripora site navigation
// Responsive: desktop horizontal links + mobile slide menu
// =========================================================

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Packages', to: '/packages' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-[#B68C63] font-medium'
      : 'text-[#142A32]/70 hover:text-[#142A32] transition-colors duration-200'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F7F3]/95 backdrop-blur-md shadow-sm border-b border-[#142A32]/8'
            : 'bg-[#F8F7F3]/90 backdrop-blur-sm'
        }`}
      >
        <Container>
          <nav
            className="flex items-center justify-between h-16 lg:h-18"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              aria-label="Tripora home"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="font-heading text-xl font-semibold tracking-widest text-[#142A32] uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Tripora
              </span>
            </Link>

            {/* Desktop navigation links */}
            <ul className="hidden lg:flex items-center gap-7" role="list">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={activeLinkClass}
                    end={to === '/'}
                  >
                    <span className="text-sm tracking-wide">{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link to="/packages">
                <Button variant="primary" size="sm">
                  Explore Trips
                </Button>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded text-[#142A32] hover:bg-[#142A32]/8 transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile navigation overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#142A32]/40 lg:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile navigation panel */}
      <div
        id="mobile-nav"
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 bg-[#F8F7F3] shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Mobile panel header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#142A32]/10">
          <span
            className="font-heading text-lg font-semibold tracking-widest text-[#142A32] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Tripora
          </span>
          <button
            className="p-2 rounded text-[#142A32]/60 hover:text-[#142A32] hover:bg-[#142A32]/8 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile links */}
        <nav className="px-6 py-6">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded text-sm tracking-wide transition-colors ${
                      isActive
                        ? 'text-[#B68C63] bg-[#B68C63]/8 font-medium'
                        : 'text-[#142A32]/70 hover:text-[#142A32] hover:bg-[#142A32]/5'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-[#142A32]/10">
            <Link to="/packages" onClick={() => setMenuOpen(false)}>
              <Button variant="primary" size="md" fullWidth>
                Explore Trips
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
