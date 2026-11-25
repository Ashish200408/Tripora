import HeroSection from '../components/home/HeroSection'
import TravelSearch from '../components/home/TravelSearch'
import FeaturedDestinations from '../components/home/FeaturedDestinations'
import FeaturedPackages from '../components/home/FeaturedPackages'
import WhyChooseTripora from '../components/home/WhyChooseTripora'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

// =========================================================
// Home Page – Phase 3A (Hero), 3B (TravelSearch), 3C (FeaturedDestinations),
// 3D (FeaturedPackages), 3E (WhyChooseTripora), 3F (Testimonials), 3G (Newsletter).
// =========================================================

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TravelSearch />
      <FeaturedDestinations />
      <FeaturedPackages />
      <WhyChooseTripora />
      <Testimonials />
      <Newsletter />
    </>
  )
}
