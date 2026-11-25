import HeroSection from '../components/home/HeroSection'
import TravelSearch from '../components/home/TravelSearch'
import FeaturedDestinations from '../components/home/FeaturedDestinations'

// =========================================================
// Home Page – Phase 3A (Hero), 3B (TravelSearch), 3C (FeaturedDestinations)
// Additional homepage sections will be added in subsequent tasks
// =========================================================

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TravelSearch />
      <FeaturedDestinations />
    </>
  )
}
