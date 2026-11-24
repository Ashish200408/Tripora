import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import { destinations } from '../data/destinations'
import { MapPin, Star } from 'lucide-react'

// =========================================================
// Destinations Page – Placeholder listing
// Phase 4 will add full search, filter, and detail pages
// =========================================================

export default function DestinationsPage() {
  return (
    <section className="section-padding">
      <Container>
        {/* Page header */}
        <div className="mb-12">
          <p className="text-sm tracking-widest uppercase text-[#B68C63] mb-3 font-medium">
            Explore the World
          </p>
          <h1 className="mb-4">Our Destinations</h1>
          <p className="text-lg text-[#4A6572] max-w-2xl">
            From ancient temples to sun-bleached coastlines — discover where Tripora can take you. Full search and filtering is coming soon.
          </p>
        </div>

        {/* Destination cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <article
              key={dest.id}
              className="bg-[#F8F7F3] rounded-lg overflow-hidden border border-[#142A32]/8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#E9E2D5]">
                <img
                  src={dest.imageUrl}
                  alt={`${dest.name}, ${dest.country}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-[#B68C63] mb-2">
                  <MapPin size={12} />
                  <span className="tracking-wide uppercase font-medium">{dest.country} · {dest.region}</span>
                </div>
                <h2 className="text-xl mb-1">{dest.name}</h2>
                <p className="text-sm text-[#4A6572] italic mb-3">{dest.tagline}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-[#142A32]">
                    <Star size={13} className="fill-[#B68C63] text-[#B68C63]" />
                    <span className="font-medium">{dest.rating}</span>
                    <span className="text-[#4A6572]">({dest.reviewCount.toLocaleString()})</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-[#E9E2D5] rounded text-[#142A32]/70">
                    {dest.budgetRange}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-sm text-[#4A6572] text-center mt-10">
          Full destination detail pages, search, and filtering will be added in Phase 4.{' '}
          <Link to="/packages" className="text-[#B68C63] underline underline-offset-2">
            Browse packages →
          </Link>
        </p>
      </Container>
    </section>
  )
}
