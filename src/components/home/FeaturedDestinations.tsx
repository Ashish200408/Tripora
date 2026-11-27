import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import Container from '../ui/Container'
import { ButtonLink } from '../ui/Button'
import { destinations } from '../../data/destinations'
import { getResponsiveImageSrcSet } from '../../utils/responsiveImage'

// =========================================================
// FeaturedDestinations – Editorial destination showcase
// Displays all 6 curated destinations from src/data/destinations.ts
// =========================================================

export default function FeaturedDestinations() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section
      aria-labelledby="featured-destinations-heading"
      className="py-16 sm:py-20 lg:py-24 bg-[#E9E2D5]"
    >
      <Container>
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm tracking-[0.24em] uppercase text-[#76552F] font-semibold mb-3">
              Explore the World
            </p>
            <h2
              id="featured-destinations-heading"
              className="font-heading text-[#142A32] mb-4"
            >
              Destinations Worth Discovering
            </h2>
            <p className="text-base sm:text-lg text-[#4A6572] leading-relaxed">
              Explore sample destinations and illustrative travel concepts from
              around the world.
            </p>
          </div>

          <div className="shrink-0">
            <ButtonLink
              to="/destinations"
              variant="outline"
              size="md"
              className="group"
            >
              View All Destinations
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </ButtonLink>
          </div>
        </div>

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest) => {
            const hasFailed = Boolean(failedImages[dest.id])

            return (
              <article
                key={dest.id}
                className="group bg-[#F8F7F3] rounded-xl overflow-hidden border border-[#142A32]/10 shadow-[0_2px_10px_rgba(20,42,50,0.05)] hover:shadow-[0_14px_34px_rgba(20,42,50,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="flex flex-col flex-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#76552F] rounded-xl"
                  aria-label={`Explore ${dest.name}, ${dest.country}`}
                >
                  {/* Destination Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#142A32]">
                    {!hasFailed ? (
                      <img
                        src={dest.imageUrl}
                        srcSet={getResponsiveImageSrcSet(dest.imageUrl)}
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                        alt={`${dest.name}, ${dest.country} — ${dest.tagline}`}
                        onError={() => handleImageError(dest.id)}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#142A32] to-[#1e3d4a] text-[#E9E2D5]/70 p-6 text-center"
                      >
                        <MapPin size={28} className="text-[#B68C63] mb-2" />
                        <span className="font-heading text-lg text-[#F8F7F3]">
                          {dest.name}
                        </span>
                      </div>
                    )}

                    {/* Subtle bottom gradient for polish */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#142A32]/30 to-transparent pointer-events-none"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs tracking-widest uppercase text-[#76552F] font-semibold mb-2">
                      <MapPin size={13} aria-hidden="true" />
                      <span>
                        {dest.country} · {dest.region}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl text-[#142A32] mb-2.5 group-hover:text-[#76552F] transition-colors duration-200">
                      {dest.name}
                    </h3>

                    <p className="text-sm text-[#4A6572] leading-relaxed line-clamp-3 mb-6">
                      {dest.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-[#142A32]/8 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#142A32] group-hover:text-[#76552F] transition-colors duration-200">
                        Explore Destination
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
