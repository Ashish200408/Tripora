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
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-18">{children}</main>
      <Footer />
    </>
  )
}
