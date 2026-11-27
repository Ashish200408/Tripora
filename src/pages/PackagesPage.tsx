import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Clock, Star, Users } from 'lucide-react'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { destinations } from '../data/destinations'
import { packages } from '../data/packages'
import ImageWithFallback from '../components/ui/ImageWithFallback'
import PageMetadata from '../components/seo/PageMetadata'

type DurationFilter = 'all' | 'short' | 'week' | 'extended'
type PriceFilter = 'all' | 'under-2500' | '2500-3499' | '3500-plus'
type SortOption =
  | 'recommended'
  | 'price-ascending'
  | 'price-descending'
  | 'duration-ascending'
  | 'duration-descending'
  | 'popularity'

const selectClassName =
  'mt-2 w-full rounded border border-[#4A6572]/70 bg-white px-3 py-2.5 text-sm text-[#142A32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#76552F]'

const labelClassName =
  'block text-xs font-semibold uppercase tracking-wider text-[#142A32]'

const MAX_SEARCH_TRAVELLERS = 12

type SearchContext = {
  destinationId: string | null
  destinationLabel: string | null
  travelDate: string | null
  travellers: number | null
}

function getSingleSearchParam(searchParams: URLSearchParams, key: string) {
  const values = searchParams.getAll(key)
  return values.length === 1 ? values[0] : null
}

function isValidSearchDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false

  const parsedDate = new Date(`${value}T00:00:00Z`)
  if (
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== value
  ) {
    return false
  }

  const now = new Date()
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-')

  return value >= today
}

function getSearchContext(searchParams: URLSearchParams): SearchContext {
  const destinationParam = getSingleSearchParam(searchParams, 'destination')
  const destination =
    destinationParam && destinationParam !== 'any'
      ? destinations.find((item) => item.slug === destinationParam)
      : undefined
  const dateParam = getSingleSearchParam(searchParams, 'date')
  const travellersParam = getSingleSearchParam(searchParams, 'travellers')
  const parsedTravellers =
    travellersParam && /^\d+$/.test(travellersParam)
      ? Number(travellersParam)
      : Number.NaN

  return {
    destinationId: destination?.id ?? null,
    destinationLabel:
      destination?.name && destination.country
        ? `${destination.name}, ${destination.country}`
        : destinationParam === 'any'
          ? 'Any destination'
          : null,
    travelDate: dateParam && isValidSearchDate(dateParam) ? dateParam : null,
    travellers:
      Number.isSafeInteger(parsedTravellers) &&
      parsedTravellers >= 1 &&
      parsedTravellers <= MAX_SEARCH_TRAVELLERS
        ? parsedTravellers
        : null,
  }
}

function formatSearchDate(value: string): string {
  const [year, month, day] = value.split('-').map(Number)
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)))
}

export default function PackagesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchContext = getSearchContext(searchParams)
  const [durationFilter, setDurationFilter] = useState<DurationFilter>('all')
  const destinationFilter = searchContext.destinationId ?? 'all'
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all')
  const [sortOption, setSortOption] = useState<SortOption>('recommended')

  const filteredPackages = packages.filter((pkg) => {
    const matchesDuration =
      durationFilter === 'all' ||
      (durationFilter === 'short' && pkg.durationDays <= 6) ||
      (durationFilter === 'week' &&
        pkg.durationDays >= 7 &&
        pkg.durationDays <= 8) ||
      (durationFilter === 'extended' && pkg.durationDays >= 9)

    const matchesDestination =
      destinationFilter === 'all' || pkg.destinationId === destinationFilter

    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'under-2500' && pkg.pricePerPerson < 2500) ||
      (priceFilter === '2500-3499' &&
        pkg.pricePerPerson >= 2500 &&
        pkg.pricePerPerson < 3500) ||
      (priceFilter === '3500-plus' && pkg.pricePerPerson >= 3500)

    return matchesDuration && matchesDestination && matchesPrice
  })

  if (sortOption !== 'recommended') {
    filteredPackages.sort((first, second) => {
      switch (sortOption) {
        case 'price-ascending':
          return first.pricePerPerson - second.pricePerPerson
        case 'price-descending':
          return second.pricePerPerson - first.pricePerPerson
        case 'duration-ascending':
          return first.durationDays - second.durationDays
        case 'duration-descending':
          return second.durationDays - first.durationDays
        case 'popularity':
          return (
            second.reviewCount - first.reviewCount ||
            second.rating - first.rating
          )
        default:
          return 0
      }
    })
  }

  const hasActiveSelection =
    durationFilter !== 'all' ||
    destinationFilter !== 'all' ||
    priceFilter !== 'all' ||
    sortOption !== 'recommended' ||
    Array.from(searchParams.keys()).length > 0

  const resetFilters = () => {
    setDurationFilter('all')
    setPriceFilter('all')
    setSortOption('recommended')
    setSearchParams(new URLSearchParams())
  }

  const updateDestinationFilter = (destinationId: string) => {
    const nextSearchParams = new URLSearchParams(searchParams)
    const destination = destinations.find((item) => item.id === destinationId)

    if (destination) {
      nextSearchParams.set('destination', destination.slug)
    } else {
      nextSearchParams.delete('destination')
    }

    setSearchParams(nextSearchParams, { replace: true })
  }

  return (
    <>
      <PageMetadata
        title="Sample Travel Packages | Tripora"
        description="Compare six sample travel packages by destination, duration, and per-person price. Dates, availability, and bookings are not verified."
      />
      <section className="section-padding">
        <Container>
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#76552F]">
            Curated Itineraries
          </p>
          <h1 className="mb-4">Travel Packages</h1>
          <p className="text-lg text-[#4A6572]">
            Explore six sample itineraries. Refine the collection by
            trip length, destination, or per-person price to find a journey that
            suits you.
          </p>
          <p className="mt-3 text-xs text-[#4A6572]">
            Prices, ratings, and review counts are illustrative sample data,
            not verified offers or customer reviews.
          </p>
        </div>

        <section
          aria-label="Filter and sort packages"
          className="mb-8 rounded-lg border border-[#142A32]/10 bg-[#E9E2D5]/55 p-5 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label htmlFor="duration-filter" className={labelClassName}>
              Duration
              <select
                id="duration-filter"
                className={selectClassName}
                value={durationFilter}
                onChange={(event) =>
                  setDurationFilter(event.target.value as DurationFilter)
                }
              >
                <option value="all">Any duration</option>
                <option value="short">Up to 6 days</option>
                <option value="week">7 to 8 days</option>
                <option value="extended">9+ days</option>
              </select>
            </label>

            <label htmlFor="destination-filter" className={labelClassName}>
              Destination
              <select
                id="destination-filter"
                className={selectClassName}
                value={destinationFilter}
                onChange={(event) =>
                  updateDestinationFilter(event.target.value)
                }
              >
                <option value="all">All destinations</option>
                {destinations.map((destination) => (
                  <option key={destination.id} value={destination.id}>
                    {destination.name}, {destination.country}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="price-filter" className={labelClassName}>
              Price per person
              <select
                id="price-filter"
                className={selectClassName}
                value={priceFilter}
                onChange={(event) =>
                  setPriceFilter(event.target.value as PriceFilter)
                }
              >
                <option value="all">All prices</option>
                <option value="under-2500">Under $2,500</option>
                <option value="2500-3499">$2,500 to $3,499</option>
                <option value="3500-plus">$3,500 and above</option>
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-4 border-t border-[#142A32]/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <label
              htmlFor="sort-packages"
              className={`${labelClassName} sm:max-w-sm sm:flex-1`}
            >
              Sort by
              <select
                id="sort-packages"
                className={selectClassName}
                value={sortOption}
                onChange={(event) =>
                  setSortOption(event.target.value as SortOption)
                }
              >
                <option value="recommended">Recommended</option>
                <option value="price-ascending">Price: Low to High</option>
                <option value="price-descending">Price: High to Low</option>
                <option value="duration-ascending">Duration: Shortest First</option>
                <option value="duration-descending">Duration: Longest First</option>
                <option value="popularity">
                  Popularity: Most reviewed
                </option>
              </select>
            </label>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={resetFilters}
              disabled={!hasActiveSelection}
              className="sm:mb-px"
            >
              Reset search &amp; filters
            </Button>
          </div>
        </section>

        {(searchContext.destinationLabel ||
          searchContext.travelDate ||
          searchContext.travellers) && (
          <aside
            aria-label="Search context"
            className="mb-6 rounded-lg border border-[#142A32]/10 bg-[#F8F7F3] px-5 py-4"
          >
            <p className="text-sm font-semibold text-[#142A32]">
              Your search context
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#4A6572]">
              {[
                searchContext.destinationLabel,
                searchContext.travelDate
                  ? `Travel date: ${formatSearchDate(searchContext.travelDate)}`
                  : null,
                searchContext.travellers
                  ? `${searchContext.travellers} ${
                      searchContext.travellers === 1 ? 'traveller' : 'travellers'
                    }`
                  : null,
              ]
                .filter(Boolean)
                .join(' · ')}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#4A6572]">
              Date and traveller preferences are for planning context only;
              package availability is not checked.
            </p>
          </aside>
        )}

        <p
          className="mb-5 text-sm text-[#4A6572]"
          aria-live="polite"
          aria-atomic="true"
        >
          Showing {filteredPackages.length} of {packages.length} packages
        </p>

        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="flex flex-col overflow-hidden rounded-lg border border-[#142A32]/10 bg-[#F8F7F3] transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E2D5]">
                  <ImageWithFallback
                    src={pkg.imageUrl}
                    alt={`${pkg.title} in ${pkg.destinationName}`}
                    fallbackLabel={pkg.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                  {pkg.originalPrice && (
                    <span className="absolute left-3 top-3 rounded bg-[#B68C63] px-2.5 py-1 text-xs font-medium text-[#142A32]">
                      Save $
                      {(pkg.originalPrice - pkg.pricePerPerson).toLocaleString()}{' '}
                      per person
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-[#76552F]">
                    {pkg.destinationName}
                  </p>
                  <h2 className="mb-3 font-heading text-xl text-[#142A32]">
                    {pkg.title}
                  </h2>

                  <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#4A6572]">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} aria-hidden="true" />
                      {pkg.durationDays} days
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users size={13} aria-hidden="true" />
                      {pkg.groupSize.min}-{pkg.groupSize.max} travellers
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star
                        size={13}
                        className="fill-[#76552F] text-[#76552F]"
                        aria-hidden="true"
                      />
                      Sample rating: {pkg.rating} ({pkg.reviewCount.toLocaleString()}{' '}
                      sample reviews)
                    </span>
                  </div>

                  <details className="mb-5 border-y border-[#142A32]/10 py-3">
                    <summary
                      aria-label={`View ${pkg.title} package overview`}
                      className="cursor-pointer text-sm font-medium text-[#142A32] underline decoration-[#B68C63]/60 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76552F]"
                    >
                      View package overview
                    </summary>
                    <div className="pt-4">
                      <p className="mb-3 text-xs text-[#4A6572]">
                        {pkg.travelType} · {pkg.difficulty}
                      </p>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#142A32]">
                        Highlights
                      </h3>
                      <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-[#4A6572]">
                        {pkg.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </details>

                  <div className="mt-auto border-t border-[#142A32]/10 pt-4">
                    <div>
                      {pkg.originalPrice && (
                        <p className="text-xs text-[#4A6572] line-through">
                          Was ${pkg.originalPrice.toLocaleString()} per person
                        </p>
                      )}
                      <p className="text-sm text-[#142A32]">
                        From{' '}
                        <span className="text-lg font-semibold text-[#76552F]">
                          ${pkg.pricePerPerson.toLocaleString()}
                        </span>
                        <span className="text-xs text-[#4A6572]">
                          {' '}
                          per person
                        </span>
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <Link
                        to={`/packages/${encodeURIComponent(pkg.slug)}`}
                        className="inline-flex min-h-10 items-center gap-1.5 rounded text-sm font-medium text-[#142A32] underline-offset-4 hover:text-[#76552F] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#76552F]"
                      >
                        View full itinerary
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                      <Link
                        to={`/booking?package=${encodeURIComponent(pkg.slug)}`}
                        className="inline-flex min-h-10 items-center justify-center rounded border border-[#142A32] bg-[#142A32] px-4 py-2 text-sm font-medium text-[#F8F7F3] transition-colors hover:border-[#1e3d4a] hover:bg-[#1e3d4a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#76552F]"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-[#142A32]/10 bg-[#F8F7F3] px-6 py-12 text-center">
            <h2 className="mb-2 font-heading text-2xl text-[#142A32]">
              No packages match those filters
            </h2>
            <p className="mx-auto mb-5 max-w-lg text-sm leading-relaxed text-[#4A6572]">
              Try a different duration, destination, or price range to see more
              journeys.
            </p>
            <Button type="button" variant="outline" onClick={resetFilters}>
              Reset search &amp; filters
            </Button>
          </div>
        )}

        <p className="mt-10 text-center text-sm text-[#4A6572]">
          Looking for inspiration?{' '}
          <Link
            to="/destinations"
            className="font-medium text-[#76552F] underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#76552F]"
          >
            Browse destinations
          </Link>
        </p>
        </Container>
      </section>
    </>
  )
}
