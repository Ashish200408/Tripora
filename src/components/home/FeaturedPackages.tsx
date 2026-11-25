import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Compass, MapPin } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { getFeaturedPackages } from '../../data/packages'

// =========================================================
// FeaturedPackages – Homepage curated packages showcase
// Displays up to 3 featured packages from src/data/packages.ts
// =========================================================

export default function FeaturedPackages() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})
  const featuredPackages = getFeaturedPackages().slice(0, 3)

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section
      aria-labelledby="featured-packages-heading"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8F7F3] border-t border-[#142A32]/8"
    >
      <Container>
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm tracking-[0.24em] uppercase text-[#B68C63] font-semibold mb-3">
              Curated Journeys
            </p>
            <h2
              id="featured-packages-heading"
              className="font-heading text-[#142A32] mb-4"
            >
              Journeys Made Extraordinary
            </h2>
            <p className="text-base sm:text-lg text-[#4A6572] leading-relaxed">
              Thoughtfully designed escapes for travellers who want more than an ordinary holiday.
            </p>
          </div>

          <div className="shrink-0">
            <Link to="/packages" className="inline-flex">
              <Button variant="outline" size="md" className="group">
                View All Packages
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPackages.map((pkg) => {
            const hasFailed = Boolean(failedImages[pkg.id])
            const summaryText = pkg.highlights.slice(0, 2).join(' · ')

            return (
              <article
                key={pkg.id}
                className="group bg-white rounded-xl overflow-hidden border border-[#142A32]/10 shadow-[0_2px_10px_rgba(20,42,50,0.05)] hover:shadow-[0_14px_34px_rgba(20,42,50,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Package Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#142A32]">
                  {!hasFailed ? (
                    <img
                      src={pkg.imageUrl}
                      alt={`${pkg.title} in ${pkg.destinationName}`}
                      onError={() => handleImageError(pkg.id)}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#142A32] to-[#1e3d4a] text-[#E9E2D5]/70 p-6 text-center"
                    >
                      <Compass size={28} className="text-[#B68C63] mb-2" />
                      <span className="font-heading text-lg text-[#F8F7F3]">
                        {pkg.title}
                      </span>
                    </div>
                  )}

                  {/* Travel Type Badge */}
                  <span className="absolute top-3.5 left-3.5 bg-[#142A32]/85 backdrop-blur-xs text-[#F8F7F3] text-xs tracking-wider uppercase px-3 py-1 rounded-[4px] font-medium">
                    {pkg.travelType}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#B68C63] font-semibold tracking-wider uppercase mb-2">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} aria-hidden="true" />
                      {pkg.destinationName}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#4A6572] font-medium normal-case tracking-normal">
                      <Clock size={13} className="text-[#B68C63]" aria-hidden="true" />
                      {pkg.durationDays} Days
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl text-[#142A32] mb-2.5 group-hover:text-[#B68C63] transition-colors duration-200">
                    {pkg.title}
                  </h3>

                  {summaryText && (
                    <p className="text-sm text-[#4A6572] leading-relaxed line-clamp-2 mb-6">
                      {summaryText}
                    </p>
                  )}

                  {/* Price & Enquire CTA */}
                  <div className="mt-auto pt-4 border-t border-[#142A32]/8 flex items-end justify-between gap-4">
                    <div>
                      {pkg.originalPrice && (
                        <p className="text-xs text-[#4A6572] line-through leading-none mb-1">
                          ${pkg.originalPrice.toLocaleString()}
                        </p>
                      )}
                      <p className="text-xs text-[#4A6572]">
                        From{' '}
                        <span className="text-lg font-semibold text-[#142A32]">
                          ${pkg.pricePerPerson.toLocaleString()}
                        </span>{' '}
                        <span className="text-xs">/ person</span>
                      </p>
                    </div>

                    <Link
                      to={`/booking?package=${pkg.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#142A32] hover:text-[#B68C63] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68C63] rounded"
                    >
                      Enquire Now
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
