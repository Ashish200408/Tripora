import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import { packages } from '../data/packages'
import { Clock, Users, Star } from 'lucide-react'

// =========================================================
// Packages Page – Placeholder listing
// Phase 5 will add full filters, sort, and detail pages
// =========================================================

export default function PackagesPage() {
  return (
    <section className="section-padding">
      <Container>
        {/* Page header */}
        <div className="mb-12">
          <p className="text-sm tracking-widest uppercase text-[#B68C63] mb-3 font-medium">
            Curated Itineraries
          </p>
          <h1 className="mb-4">Travel Packages</h1>
          <p className="text-lg text-[#4A6572] max-w-2xl">
            Expertly crafted packages that handle every detail, so you can focus on the experience. Full filtering and booking is coming soon.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="bg-[#F8F7F3] rounded-lg overflow-hidden border border-[#142A32]/8 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#E9E2D5] relative">
                <img
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {pkg.originalPrice && (
                  <span className="absolute top-3 left-3 bg-[#B68C63] text-white text-xs px-2.5 py-1 rounded font-medium">
                    Save ${(pkg.originalPrice - pkg.pricePerPerson).toLocaleString()}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-[#B68C63] tracking-wide uppercase font-medium mb-1.5">
                  {pkg.destinationName}
                </p>
                <h2 className="text-lg mb-2">{pkg.title}</h2>

                <div className="flex items-center gap-4 text-xs text-[#4A6572] mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {pkg.durationDays} days
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    Up to {pkg.groupSize.max} people
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={12} className="fill-[#B68C63] text-[#B68C63]" />
                    {pkg.rating}
                  </span>
                </div>

                <div className="mt-auto flex items-end justify-between">
                  <div>
                    {pkg.originalPrice && (
                      <p className="text-xs text-[#4A6572] line-through">
                        From ${pkg.originalPrice.toLocaleString()}
                      </p>
                    )}
                    <p className="text-lg font-medium text-[#142A32]">
                      From <span className="text-[#B68C63]">${pkg.pricePerPerson.toLocaleString()}</span>
                      <span className="text-xs text-[#4A6572] font-normal"> / person</span>
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="text-xs text-[#B68C63] border border-[#B68C63]/30 px-3 py-1.5 rounded hover:bg-[#B68C63]/8 transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-sm text-[#4A6572] text-center mt-10">
          Full package detail pages, filters, and booking enquiry forms will be added in Phase 5.{' '}
          <Link to="/destinations" className="text-[#B68C63] underline underline-offset-2">
            Browse destinations →
          </Link>
        </p>
      </Container>
    </section>
  )
}
