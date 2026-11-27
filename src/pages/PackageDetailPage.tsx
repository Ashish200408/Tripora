import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Minus,
  Star,
  Users,
} from 'lucide-react'
import Container from '../components/ui/Container'
import { destinations } from '../data/destinations'
import { getPackageBySlug } from '../data/packages'
import NotFoundPage from './NotFoundPage'
import ImageWithFallback from '../components/ui/ImageWithFallback'
import PageMetadata from '../components/seo/PageMetadata'

export default function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const travelPackage = slug ? getPackageBySlug(slug) : undefined
  const [travellerSelection, setTravellerSelection] = useState<{
    packageSlug: string
    count: number
  } | null>(null)

  if (!travelPackage) return <NotFoundPage />

  const minimumTravellers = travelPackage.groupSize.min
  const maximumTravellers = travelPackage.groupSize.max
  const travellerCount =
    travellerSelection?.packageSlug === travelPackage.slug &&
    travellerSelection.count >= minimumTravellers &&
    travellerSelection.count <= maximumTravellers
      ? travellerSelection.count
      : minimumTravellers
  const estimatedTotal = travelPackage.pricePerPerson * travellerCount

  const destination = destinations.find(
    (item) => item.id === travelPackage.destinationId,
  )

  return (
    <>
      <PageMetadata
        title={`${travelPackage.title} | Tripora Travel Package`}
        description={`Explore ${travelPackage.title} in ${travelPackage.destinationName}, a ${travelPackage.durationDays}-day sample itinerary. Review highlights, inclusions, group size, and the indicative per-person estimate.`}
        image={travelPackage.imageUrl}
        imageAlt={`${travelPackage.title} in ${travelPackage.destinationName}`}
      />
      <section
        aria-labelledby="package-heading"
        className="relative flex min-h-[58vh] items-end overflow-hidden bg-[#142A32] sm:min-h-[64vh]"
      >
        <ImageWithFallback
          src={travelPackage.imageUrl}
          alt={`${travelPackage.title} in ${travelPackage.destinationName}`}
          fallbackLabel={travelPackage.title}
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
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#F8F7F3]">
              <li>
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-1 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F8F7F3]"
                >
                  <ArrowLeft size={14} aria-hidden="true" />
                  Travel packages
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{travelPackage.title}</li>
            </ol>
          </nav>

          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#E9E2D5]">
                <MapPin size={15} aria-hidden="true" />
                {destination ? (
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F8F7F3]"
                  >
                    {travelPackage.destinationName}
                  </Link>
                ) : (
                  travelPackage.destinationName
                )}
              </p>
              <h1
                id="package-heading"
                className="mb-4 font-heading text-4xl text-[#F8F7F3]! sm:text-5xl lg:text-6xl"
              >
                {travelPackage.title}
              </h1>
              {destination?.tagline && (
                <p className="font-heading text-xl italic text-[#E9E2D5]! sm:text-2xl">
                  {destination.tagline}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {[travelPackage.travelType, travelPackage.difficulty].map(
                  (label) => (
                    <span
                      key={label}
                      className="rounded-full border border-[#F8F7F3]/30 bg-[#142A32]/45 px-3 py-1.5 text-xs font-medium text-[#F8F7F3]"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>

            <aside className="w-full max-w-sm rounded-lg border border-[#F8F7F3]/60 bg-[#F8F7F3] p-5 text-[#142A32] shadow-lg sm:p-6 lg:justify-self-end">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                Illustrative package price
              </p>
              {travelPackage.originalPrice && (
                <p className="mt-2 text-sm text-[#4A6572] line-through">
                  Was ${travelPackage.originalPrice.toLocaleString()} per person
                </p>
              )}
              <p className="mt-1 text-2xl font-semibold">
                ${travelPackage.pricePerPerson.toLocaleString()}{' '}
                <span className="ml-1 text-sm font-normal text-[#4A6572]">
                  per person
                </span>
              </p>
              <Link
                to={`/booking?package=${encodeURIComponent(travelPackage.slug)}`}
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] border border-[#142A32] bg-[#142A32] px-6 py-3 text-sm font-body font-medium tracking-wide text-[#F8F7F3] transition-all hover:border-[#1e3d4a] hover:bg-[#1e3d4a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142A32]"
              >
                Make an enquiry
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <p className="mt-3 text-xs leading-relaxed text-[#4A6572]">
                This opens the demo enquiry form. No booking is made.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8F7F3] py-8 sm:py-10">
        <Container>
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3 border-b border-[#142A32]/10 pb-4 sm:border-b-0 sm:pb-0">
              <Clock
                size={19}
                className="mt-0.5 shrink-0 text-[#B68C63]"
                aria-hidden="true"
              />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                  Duration
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#142A32]">
                  {travelPackage.durationDays} days
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3 border-b border-[#142A32]/10 pb-4 sm:border-b-0 sm:pb-0">
              <Users
                size={19}
                className="mt-0.5 shrink-0 text-[#B68C63]"
                aria-hidden="true"
              />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                  Group size
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#142A32]">
                  {travelPackage.groupSize.min}-{travelPackage.groupSize.max}{' '}
                  travellers
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3 border-b border-[#142A32]/10 pb-4 sm:border-b-0 sm:pb-0">
              <Star
                size={19}
                className="mt-0.5 shrink-0 fill-[#76552F] text-[#76552F]"
                aria-hidden="true"
              />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                  Illustrative sample rating
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#142A32]">
                  <span
                    role="img"
                    aria-label={`Illustrative sample rating: ${travelPackage.rating} out of 5 stars`}
                  >
                    {travelPackage.rating} / 5
                  </span>{' '}
                  ({travelPackage.reviewCount.toLocaleString()}{' '}
                  {travelPackage.reviewCount === 1
                    ? 'sample review'
                    : 'sample reviews'})
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-0.5 shrink-0 text-[#B68C63]"
                aria-hidden="true"
              />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]">
                  Travel style
                </dt>
                <dd className="mt-1 text-sm font-medium text-[#142A32]">
                  {travelPackage.travelType} · {travelPackage.difficulty}
                </dd>
              </div>
            </div>
          </dl>
        </Container>
      </section>

      <section
        aria-labelledby="package-estimate-heading"
        className="bg-[#E9E2D5] py-12 sm:py-16"
      >
        <Container>
          <div className="grid gap-6 rounded-lg border border-[#142A32]/10 bg-[#F8F7F3] p-5 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:gap-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#76552F]">
                Indicative estimate
              </p>
              <h2
                id="package-estimate-heading"
                className="font-heading text-2xl text-[#142A32]! sm:text-3xl"
              >
                Estimate your package total
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#4A6572]">
                Adjust the traveller count to see an estimate based on this
                package&apos;s listed per-person price.
              </p>

              <div className="mt-5">
                <label
                  htmlFor="package-travellers"
                  className="block text-sm font-medium text-[#142A32]"
                >
                  Number of travellers
                </label>
                <input
                  id="package-travellers"
                  type="number"
                  inputMode="numeric"
                  min={minimumTravellers}
                  max={maximumTravellers}
                  step={1}
                  value={travellerCount}
                  aria-describedby="package-travellers-limit"
                  onChange={(event) => {
                    const nextCount = event.currentTarget.valueAsNumber
                    if (Number.isInteger(nextCount)) {
                      setTravellerSelection({
                        packageSlug: travelPackage.slug,
                        count: Math.min(
                          maximumTravellers,
                          Math.max(minimumTravellers, nextCount),
                        ),
                      })
                    }
                  }}
                  className="mt-2 w-32 rounded border border-[#4A6572]/70 bg-white px-3 py-2.5 text-base text-[#142A32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#76552F]"
                />
                <p
                  id="package-travellers-limit"
                  className="mt-2 text-xs text-[#4A6572]"
                >
                  Choose from {minimumTravellers} to {maximumTravellers}{' '}
                  travellers for this package.
                </p>
              </div>
            </div>

            <dl className="grid content-center gap-4 rounded-lg border border-[#142A32]/10 bg-white p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-[#4A6572]">Price per person</dt>
                <dd className="text-sm font-medium text-[#142A32]">
                  ${travelPackage.pricePerPerson.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-[#4A6572]">Travellers</dt>
                <dd className="text-sm font-medium text-[#142A32]">
                  {travellerCount}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-[#142A32]/10 pt-4">
                <dt className="font-medium text-[#142A32]">
                  Estimated total
                </dt>
                <dd
                  aria-live="polite"
                  aria-atomic="true"
                  className="text-right text-2xl font-semibold text-[#76552F]"
                >
                  ${estimatedTotal.toLocaleString()}
                </dd>
              </div>
            </dl>

            <p className="text-xs leading-relaxed text-[#4A6572] lg:col-span-2">
              This is an indicative estimate based on the listed per-person
              package price. It is not a confirmed quotation or booking. Taxes,
              additional fees, and availability are not verified.
            </p>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="package-highlights-heading"
        className="bg-[#E9E2D5] py-14 sm:py-18 lg:py-20"
      >
        <Container>
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#76552F]">
              The journey
            </p>
            <h2
              id="package-highlights-heading"
              className="font-heading text-3xl text-[#142A32]! sm:text-4xl"
            >
              Highlights
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {travelPackage.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 rounded-lg border border-[#142A32]/10 bg-[#F8F7F3] p-5"
              >
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-[#B68C63]"
                  aria-hidden="true"
                />
                <span className="min-w-0 break-words text-sm leading-relaxed text-[#142A32]">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="package-itinerary-heading"
        className="bg-[#F8F7F3] py-14 sm:py-18 lg:py-20"
      >
        <Container>
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#76552F]">
              Day by day
            </p>
            <h2
              id="package-itinerary-heading"
              className="font-heading text-3xl text-[#142A32]! sm:text-4xl"
            >
              Your itinerary
            </h2>
          </div>
          <ol className="ml-3 border-l border-[#B68C63]/50">
            {travelPackage.itinerary.map((day) => (
              <li key={day.day} className="relative pb-7 pl-7 last:pb-0 sm:pl-9">
                <span
                  aria-hidden="true"
                  className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-[#B68C63] bg-[#F8F7F3] text-[10px] font-semibold text-[#142A32]"
                >
                  {day.day}
                </span>
                <article className="max-w-4xl">
                  <h3 className="font-heading text-xl text-[#142A32]">
                    Day {day.day}: {day.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A6572] sm:text-base">
                    {day.description}
                  </p>
                  {day.meals.length > 0 && (
                    <p className="mt-2 text-sm text-[#142A32]">
                      <span className="font-medium">Meals:</span>{' '}
                      {day.meals.join(', ')}
                    </p>
                  )}
                  {day.accommodation && (
                    <p className="mt-1 text-sm text-[#142A32]">
                      <span className="font-medium">Accommodation:</span>{' '}
                      {day.accommodation}
                    </p>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        aria-label="Package inclusions and exclusions"
        className="bg-[#E9E2D5] py-14 sm:py-18 lg:py-20"
      >
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <section
              aria-labelledby="package-includes-heading"
              className="min-w-0 rounded-lg border border-[#142A32]/10 bg-[#F8F7F3] p-5 sm:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <Check
                  size={21}
                  className="shrink-0 text-[#B68C63]"
                  aria-hidden="true"
                />
                <h2
                  id="package-includes-heading"
                  className="font-heading text-2xl text-[#142A32]"
                >
                  Included in this package
                </h2>
              </div>
              <ul className="space-y-3">
                {travelPackage.includes.map((item) => (
                  <li
                    key={item}
                    className="flex min-w-0 items-start gap-3 text-sm leading-relaxed text-[#142A32]"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[#B68C63]"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="package-excludes-heading"
              className="min-w-0 rounded-lg border border-[#142A32]/15 bg-[#142A32] p-5 text-[#F8F7F3] sm:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <Minus
                  size={21}
                  className="shrink-0 text-[#E9E2D5]"
                  aria-hidden="true"
                />
                <h2
                  id="package-excludes-heading"
                  className="font-heading text-2xl text-[#F8F7F3]!"
                >
                  Not included
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[#E9E2D5]">
                The following items are not included in the package price.
              </p>
              <ul className="space-y-3">
                {travelPackage.excludes.map((item) => (
                  <li
                    key={item}
                    className="flex min-w-0 items-start gap-3 text-sm leading-relaxed text-[#F8F7F3]"
                  >
                    <Minus
                      size={16}
                      className="mt-0.5 shrink-0 text-[#E9E2D5]"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Container>
      </section>

      <section className="bg-[#142A32] py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E9E2D5]">
                Continue planning
              </p>
              <h2 className="font-heading text-2xl text-[#F8F7F3]! sm:text-3xl">
                Interested in {travelPackage.title}?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#E9E2D5]">
                Send a demo enquiry with this package preselected.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/packages"
                className="inline-flex min-h-11 items-center justify-center rounded-[4px] border border-[#E9E2D5]/55 bg-transparent px-6 py-3 text-sm font-body font-medium tracking-wide text-[#F8F7F3] transition-all hover:border-[#F8F7F3] hover:bg-[#F8F7F3]/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F3]"
              >
                All packages
              </Link>
              <Link
                to={`/booking?package=${encodeURIComponent(travelPackage.slug)}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] border border-[#B68C63] bg-[#B68C63] px-6 py-3 text-sm font-body font-medium tracking-wide text-[#142A32] transition-all hover:border-[#c39b72] hover:bg-[#c39b72] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68C63]"
              >
                Make an enquiry
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
