import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import { destinations } from '../data/destinations'
import { MapPin, Star } from 'lucide-react'
import ImageWithFallback from '../components/ui/ImageWithFallback'
import PageMetadata from '../components/seo/PageMetadata'

export default function DestinationsPage() {
  return (
    <>
      <PageMetadata
        title="Explore Sample Destinations | Tripora"
        description="Discover six sample destinations, browse practical travel details, and explore related itineraries in Tripora's frontend demo."
      />
      <section className="section-padding">
        <Container>
        {/* Page header */}
        <div className="mb-12">
          <p className="text-sm tracking-widest uppercase text-[#76552F] mb-3 font-medium">
            Explore the World
          </p>
          <h1 className="mb-4">Our Destinations</h1>
          <p className="text-lg text-[#4A6572] max-w-2xl">
            From ancient temples to sun-bleached coastlines, explore sample
            destination highlights, practical details, and related itineraries.
          </p>
          <p className="mt-3 text-xs text-[#4A6572]">
            Ratings and review counts are illustrative sample data, not verified
            customer reviews.
          </p>
        </div>

        {/* Destination cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              to={`/destinations/${encodeURIComponent(dest.slug)}`}
              aria-label={`Explore ${dest.name}, ${dest.country}`}
              className="group block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76552F]"
            >
              <article className="h-full bg-[#F8F7F3] rounded-lg overflow-hidden border border-[#142A32]/8 transition-shadow duration-300 group-hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-[#E9E2D5]">
                  <ImageWithFallback
                    src={dest.imageUrl}
                    alt={`${dest.name}, ${dest.country}`}
                    fallbackLabel={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#76552F] mb-2">
                    <MapPin size={12} aria-hidden="true" />
                    <span className="tracking-wide uppercase font-medium">
                      {dest.country} · {dest.region}
                    </span>
                  </div>
                  <h2 className="text-xl mb-1">{dest.name}</h2>
                  <p className="text-sm text-[#4A6572] italic mb-3">
                    {dest.tagline}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-[#142A32]">
                      <Star
                        size={13}
                        className="fill-[#76552F] text-[#76552F]"
                        aria-hidden="true"
                      />
                      <span className="font-medium">{dest.rating}</span>
                      <span className="text-[#4A6572]">
                        ({dest.reviewCount.toLocaleString()})
                      </span>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-[#E9E2D5] rounded text-[#142A32]/70">
                      {dest.budgetRange}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <p className="text-sm text-[#4A6572] text-center mt-10">
          Select a destination to explore its details, or{' '}
          <Link to="/packages" className="text-[#76552F] underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#76552F]">
            Browse packages →
          </Link>
        </p>
        </Container>
      </section>
    </>
  )
}
