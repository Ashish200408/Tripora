import HeroSection from '../components/home/HeroSection'
import TravelSearch from '../components/home/TravelSearch'
import FeaturedDestinations from '../components/home/FeaturedDestinations'
import FeaturedPackages from '../components/home/FeaturedPackages'
import WhyChooseTripora from '../components/home/WhyChooseTripora'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'
import PageMetadata from '../components/seo/PageMetadata'

// =========================================================
// Home Page – Phase 3A (Hero), 3B (TravelSearch), 3C (FeaturedDestinations),
// 3D (FeaturedPackages), 3E (WhyChooseTripora), 3F (Testimonials), 3G (Newsletter).
// =========================================================

export default function HomePage() {
  return (
    <>
      <PageMetadata
        title="Tripora | Sample Travel Journeys"
        description="Explore sample destinations, illustrative travel itineraries, and demo enquiry forms in Tripora's frontend travel concept."
      />
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
