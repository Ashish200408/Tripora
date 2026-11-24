import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DestinationsPage from './pages/DestinationsPage'
import PackagesPage from './pages/PackagesPage'
import ExperiencesPage from './pages/ExperiencesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BookingPage from './pages/BookingPage'
import NotFoundPage from './pages/NotFoundPage'

// =========================================================
// App – Root component with React Router configuration
// =========================================================

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/destinations"
          element={
            <Layout>
              <DestinationsPage />
            </Layout>
          }
        />
        <Route
          path="/packages"
          element={
            <Layout>
              <PackagesPage />
            </Layout>
          }
        />
        <Route
          path="/experiences"
          element={
            <Layout>
              <ExperiencesPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/booking"
          element={
            <Layout>
              <BookingPage />
            </Layout>
          }
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
