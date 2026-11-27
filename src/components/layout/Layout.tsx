import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

// =========================================================
// Layout – Wraps every page with Navbar and Footer
// =========================================================

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-[#F8F7F3] focus:px-4 focus:py-3 focus:text-[#142A32] focus:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142A32]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 scroll-mt-20 pt-16 lg:pt-18"
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
