import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import { ButtonLink } from '../ui/Button'

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
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLDivElement>(null)
  const wasMenuOpen = useRef(false)

  // Add background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keep the mobile drawer keyboard-contained while it is open.
  useEffect(() => {
    if (!menuOpen) {
      if (wasMenuOpen.current && window.innerWidth < 1024) {
        menuButtonRef.current?.focus()
      }
      wasMenuOpen.current = false
      return
    }

    wasMenuOpen.current = true
    closeButtonRef.current?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const backgroundElements = Array.from(
      document.querySelectorAll<HTMLElement>('#root main, #root footer'),
    )
    const previousInertStates = backgroundElements.map((element) => element.inert)
    backgroundElements.forEach((element) => {
      element.inert = true
    })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab' || !mobileNavRef.current) return

      const focusableElements = Array.from(
        mobileNavRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.tabIndex >= 0)
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const focusIsInside = mobileNavRef.current.contains(document.activeElement)

      if (!firstElement || !lastElement) {
        event.preventDefault()
      } else if (!focusIsInside) {
        event.preventDefault()
        if (event.shiftKey) {
          lastElement.focus()
        } else {
          firstElement.focus()
        }
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      backgroundElements.forEach((element, index) => {
        element.inert = previousInertStates[index]
      })
    }
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-[#76552F] font-medium'
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
              <ButtonLink to="/packages" variant="primary" size="sm">
                Explore Trips
              </ButtonLink>
            </div>

            {/* Mobile menu toggle */}
            <button
              ref={menuButtonRef}
              className="lg:hidden min-h-11 min-w-11 rounded text-[#142A32] hover:bg-[#142A32]/8 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142A32]"
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
        ref={mobileNavRef}
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 bg-[#F8F7F3] shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal={menuOpen}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
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
            ref={closeButtonRef}
            className="min-h-11 min-w-11 rounded text-[#142A32]/80 hover:text-[#142A32] hover:bg-[#142A32]/8 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142A32]"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile links */}
        <nav className="px-6 py-6" aria-label="Mobile navigation links">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded text-sm tracking-wide transition-colors ${
                      isActive
                        ? 'text-[#76552F] bg-[#B68C63]/8 font-medium'
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
            <ButtonLink
              to="/packages"
              onClick={() => setMenuOpen(false)}
              variant="primary"
              size="md"
              fullWidth
            >
              Explore Trips
            </ButtonLink>
          </div>
        </nav>
      </div>
    </>
  )
}
