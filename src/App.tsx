import { lazy, Suspense, type ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Container from './components/ui/Container'
import NotFoundPage from './pages/NotFoundPage'

const HomePage = lazy(() => import('./pages/HomePage'))
const DestinationsPage = lazy(() => import('./pages/DestinationsPage'))
const DestinationDetailPage = lazy(
  () => import('./pages/DestinationDetailPage'),
)
const PackagesPage = lazy(() => import('./pages/PackagesPage'))
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage'))
const ExperiencesPage = lazy(() => import('./pages/ExperiencesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const BookingPage = lazy(() => import('./pages/BookingPage'))

function RouteLoadingFallback() {
  return (
    <section
      aria-busy="true"
      className="section-padding flex min-h-[60vh] items-center"
    >
      <Container narrow>
        <div
          role="status"
          aria-live="polite"
          className="rounded-lg border border-[#142A32]/10 bg-[#F8F7F3] p-8 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#76552F]">
            Tripora
          </p>
          <p className="mt-3 font-heading text-xl text-[#142A32]">
            Preparing your journey...
          </p>
        </div>
      </Container>
    </section>
  )
}

function PageRoute({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <Suspense fallback={<RouteLoadingFallback />}>{children}</Suspense>
    </Layout>
  )
}

// =========================================================
// App – Root component with React Router configuration
// =========================================================

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageRoute><HomePage /></PageRoute>} />
        <Route
          path="/destinations"
          element={<PageRoute><DestinationsPage /></PageRoute>}
        />
        <Route
          path="/destinations/:slug"
          element={<PageRoute><DestinationDetailPage /></PageRoute>}
        />
        <Route
          path="/packages"
          element={<PageRoute><PackagesPage /></PageRoute>}
        />
        <Route
          path="/packages/:slug"
          element={<PageRoute><PackageDetailPage /></PageRoute>}
        />
        <Route
          path="/experiences"
          element={<PageRoute><ExperiencesPage /></PageRoute>}
        />
        <Route
          path="/about"
          element={<PageRoute><AboutPage /></PageRoute>}
        />
        <Route
          path="/contact"
          element={<PageRoute><ContactPage /></PageRoute>}
        />
        <Route
          path="/booking"
          element={<PageRoute><BookingPage /></PageRoute>}
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
