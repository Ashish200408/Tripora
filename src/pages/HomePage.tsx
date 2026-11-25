import HeroSection from '../components/home/HeroSection'
import TravelSearch from '../components/home/TravelSearch'
import FeaturedDestinations from '../components/home/FeaturedDestinations'
import FeaturedPackages from '../components/home/FeaturedPackages'
import WhyChooseTripora from '../components/home/WhyChooseTripora'

// =========================================================
// Home Page – Phase 3A (Hero), 3B (TravelSearch), 3C (FeaturedDestinations),
// 3D (FeaturedPackages), 3E (WhyChooseTripora). Additional sections will follow.
// =========================================================

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TravelSearch />
      <FeaturedDestinations />
      <FeaturedPackages />
      <WhyChooseTripora />
    </>
  )
}
