import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react'
import Container from '../components/ui/Container'
import { ButtonLink } from '../components/ui/Button'
import { getDestinationBySlug } from '../data/destinations'
import { packages } from '../data/packages'
import NotFoundPage from './NotFoundPage'
import ImageWithFallback from '../components/ui/ImageWithFallback'
import PageMetadata from '../components/seo/PageMetadata'

export default function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const destination = slug ? getDestinationBySlug(slug) : undefined

  if (!destination) return <NotFoundPage />

  const relatedPackages = packages.filter(
    (pkg) => pkg.destinationId === destination.id,
  )

  return (
    <>
      <PageMetadata
        title={`${destination.name}, ${destination.country} | Tripora Destinations`}
        description={`Explore ${destination.name}, ${destination.country}: ${destination.tagline}. Browse destination highlights, practical information, and sample itineraries.`}
        image={destination.imageUrl}
        imageAlt={`${destination.name}, ${destination.country}`}
      />
      <section
        aria-labelledby="destination-heading"
        className="relative flex min-h-[52vh] items-end overflow-hidden bg-[#142A32] sm:min-h-[60vh]"
      >
        <ImageWithFallback
          src={destination.imageUrl}
          alt={`${destination.name}, ${destination.country} — ${destination.tagline}`}
          fallbackLabel={destination.name}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          sizes="100vw"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#142A32] via-[#142A32]/65 to-[#142A32]/10"
        />
        <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-[#F8F7F3]">
              <li>
                <Link
                  to="/destinations"
                  className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F8F7F3]"
                >
                  Destinations
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{destination.name}</li>
            </ol>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#E9E2D5]!">
            {destination.country} · {destination.region}
          </p>
          <h1
            id="destination-heading"
            className="mb-3 font-heading text-4xl text-[#F8F7F3]! sm:text-5xl lg:text-6xl"
          >
            {destination.name}
          </h1>
          <p className="font-heading text-xl italic text-[#E9E2D5]! sm:text-2xl">
            {destination.tagline}
          </p>

          <div className="mt-6 flex items-center gap-2 text-[#F8F7F3]">
            <span
              role="img"
              aria-label={`Illustrative sample rating: ${destination.rating} out of 5 stars`}
              className="inline-flex items-center gap-1 text-[#B68C63]"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}
            </span>
            <span className="text-sm">
              Sample rating: {destination.rating} ·{' '}
              {destination.reviewCount.toLocaleString()} sample reviews
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8F7F3] py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#76552F]">
                Discover {destination.name}
              </p>
              <h2 className="mb-5 font-heading text-3xl text-[#142A32]! sm:text-4xl">
                A place with its own rhythm.
              </h2>
              <p className="text-base leading-relaxed text-[#4A6572]! sm:text-lg">
                {destination.description}
              </p>

              <div className="mt-8">
                <h3 className="mb-3 font-heading text-xl text-[#142A32]!">
                  Ways to experience it
                </h3>
                <ul className="flex flex-wrap gap-2" aria-label="Travel types">
                  {destination.travelTypes.map((travelType) => (
                    <li
                      key={travelType}
                      className="rounded-full border border-[#142A32]/15 bg-[#E9E2D5] px-3 py-1.5 text-sm text-[#142A32]"
                    >
                      {travelType}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="rounded-xl border border-[#142A32]/10 bg-white p-6 sm:p-8">
              <h2 className="mb-5 font-heading text-2xl text-[#142A32]!">
                At a glance
              </h2>
              <dl className="divide-y divide-[#142A32]/10">
                <div className="py-3 first:pt-0">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                    Best time to visit
                  </dt>
                  <dd className="mt-1 text-sm text-[#142A32]">
                    {destination.bestTimeToVisit}
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                    Climate
                  </dt>
                  <dd className="mt-1 text-sm text-[#142A32]">
                    {destination.climate}
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                    Currency
                  </dt>
                  <dd className="mt-1 text-sm text-[#142A32]">
                    {destination.currency}
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                    Language
                  </dt>
                  <dd className="mt-1 text-sm text-[#142A32]">
                    {destination.language}
                  </dd>
                </div>
                <div className="py-3 last:pb-0">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                    Budget range
                  </dt>
                  <dd className="mt-1 text-sm text-[#142A32]">
                    {destination.budgetRange}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="destination-highlights-heading"
        className="bg-[#E9E2D5] py-16 sm:py-20"
      >
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#76552F]">
              Worth discovering
            </p>
            <h2
              id="destination-highlights-heading"
              className="font-heading text-3xl text-[#142A32]! sm:text-4xl"
            >
              Highlights of {destination.name}
            </h2>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destination.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 rounded-lg border border-[#142A32]/10 bg-[#F8F7F3] p-5"
              >
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#B68C63]"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-[#142A32]">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="related-packages-heading"
        className="bg-[#F8F7F3] py-16 sm:py-20"
      >
        <Container>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#76552F]">
                Curated for you
              </p>
              <h2
                id="related-packages-heading"
                className="font-heading text-3xl text-[#142A32]! sm:text-4xl"
              >
                Journeys in {destination.name}
              </h2>
            </div>
            <ButtonLink to="/packages" variant="outline" size="md">
              Browse all packages
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>

          {relatedPackages.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPackages.map((pkg) => (
                <article
                  key={pkg.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-[#142A32]/10 bg-white shadow-[0_2px_10px_rgba(20,42,50,0.05)]"
                >
                  <ImageWithFallback
                    src={pkg.imageUrl}
                    alt={`${pkg.title} in ${pkg.destinationName}`}
                    fallbackLabel={pkg.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-3 font-heading text-xl text-[#142A32]!">
                      {pkg.title}
                    </h3>
                    <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#4A6572]">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={15} aria-hidden="true" />
                        {pkg.durationDays} days
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Star
                          size={15}
                          className="fill-[#76552F] text-[#76552F]"
                          aria-hidden="true"
                        />
                        Sample rating: {pkg.rating}
                      </span>
                    </div>
                    <Link
                      to={`/booking?package=${pkg.slug}`}
                      className="mt-auto inline-flex items-center gap-2 rounded text-sm font-medium text-[#142A32] underline-offset-4 hover:text-[#76552F] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76552F]"
                    >
                      Enquire about this journey
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-[#142A32]/10 bg-white p-6 text-[#4A6572]!">
              There are no sample packages for {destination.name} yet.
            </p>
          )}
        </Container>
      </section>

      <section className="bg-[#142A32] py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-3 font-heading text-2xl text-[#F8F7F3]! sm:text-3xl">
                Explore a journey to {destination.name}.
              </h2>
              <p className="text-sm leading-relaxed text-[#E9E2D5]! sm:text-base">
                Open the demo booking enquiry form with this destination
                selected.
              </p>
            </div>
            <ButtonLink
              to={`/booking?destination=${encodeURIComponent(destination.slug)}`}
              className="shrink-0"
              variant="outline-light"
              size="md"
            >
              Prepare an enquiry
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
