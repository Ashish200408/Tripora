import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch } from 'react-hook-form'
import Container from '../components/ui/Container'
import Button, { ButtonLink } from '../components/ui/Button'
import { destinations } from '../data/destinations'
import { packages } from '../data/packages'
import {
  bookingEnquirySchema,
  type BookingEnquiryFormValues,
} from '../schemas/bookingEnquirySchema'
import PageMetadata from '../components/seo/PageMetadata'

function getLocalTodayISO(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function isFutureISODate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false

  const date = new Date(`${value}T00:00:00Z`)
  return (
    !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === value &&
    value > getLocalTodayISO()
  )
}

function getInitialValues(searchParams: URLSearchParams): BookingEnquiryFormValues {
  const requestedDestination = destinations.find(
    (destination) => destination.slug === searchParams.get('destination'),
  )
  const requestedPackage = packages.find(
    (travelPackage) => travelPackage.slug === searchParams.get('package'),
  )
  const selectedPackage =
    requestedPackage &&
    (!requestedDestination ||
      requestedPackage.destinationId === requestedDestination.id)
      ? requestedPackage
      : undefined
  const destination =
    destinations.find(
      (item) => item.id === selectedPackage?.destinationId,
    ) ?? requestedDestination

  const requestedDate = searchParams.get('date') ?? ''
  const requestedTravellers = searchParams.get('travellers') ?? ''
  const parsedTravellers = /^\d+$/.test(requestedTravellers)
    ? Number(requestedTravellers)
    : Number.NaN
  const minimum = selectedPackage?.groupSize.min ?? 1
  const maximum = selectedPackage?.groupSize.max ?? 12

  return {
    fullName: '',
    email: '',
    phone: '',
    destinationId: destination?.id ?? '',
    packageId: selectedPackage?.id ?? '',
    travelDate: isFutureISODate(requestedDate) ? requestedDate : '',
    numberOfTravellers:
      Number.isSafeInteger(parsedTravellers) &&
      parsedTravellers >= minimum &&
      parsedTravellers <= maximum
        ? parsedTravellers
        : selectedPackage?.groupSize.min ?? 2,
    specialRequirements: '',
  }
}

const fieldClassName =
  'w-full rounded-[6px] border border-[#4A6572]/70 bg-white px-3.5 py-3 text-sm text-[#142A32]! transition-colors placeholder:text-[#4A6572] focus:border-[#76552F] focus:ring-2 focus:ring-[#76552F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142A32]'

const labelClassName =
  'mb-2 block text-sm font-medium text-[#142A32]!'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null

  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-[#8B2635]!">
      {message}
    </p>
  )
}

function formatTravelDate(value: string): string {
  const [year, month, day] = value.split('-').map(Number)
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'long' }).format(
    new Date(year, month - 1, day),
  )
}

function EnquiryConfirmation({
  values,
  onEdit,
}: {
  values: BookingEnquiryFormValues
  onEdit: () => void
}) {
  const destination = destinations.find(
    (item) => item.id === values.destinationId,
  )
  const selectedPackage = packages.find(
    (item) => item.id === values.packageId,
  )

  return (
    <section
      aria-labelledby="enquiry-confirmation-heading"
      className="overflow-hidden rounded-xl border border-[#142A32]/12 bg-white shadow-[0_8px_28px_rgba(20,42,50,0.08)]"
    >
      <div className="bg-[#142A32] px-6 py-8 text-center text-[#F8F7F3] sm:px-10 sm:py-10">
        <CheckCircle2
          aria-hidden="true"
          className="mx-auto mb-4 text-[#B68C63]"
          size={38}
          strokeWidth={1.6}
        />
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#E9E2D5]!">
          Demo confirmation
        </p>
        <h2
          id="enquiry-confirmation-heading"
          className="font-heading text-3xl text-[#F8F7F3]! sm:text-4xl"
        >
          Your enquiry is prepared.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#E9E2D5]! sm:text-base">
          Thank you, {values.fullName}. Review the details below or return to
          edit your enquiry.
        </p>
      </div>

      <div className="p-5 sm:p-8 lg:p-10">
        <h3 className="mb-5 font-heading text-xl text-[#142A32]! sm:text-2xl">
          Enquiry summary
        </h3>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Full name
            </dt>
            <dd className="mt-1 break-words text-sm text-[#142A32]!">
              {values.fullName}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Email address
            </dt>
            <dd className="mt-1 break-words text-sm text-[#142A32]!">
              {values.email}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Phone number
            </dt>
            <dd className="mt-1 break-words text-sm text-[#142A32]!">
              {values.phone}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Destination
            </dt>
            <dd className="mt-1 break-words text-sm text-[#142A32]!">
              {destination
                ? `${destination.name}, ${destination.country}`
                : 'Not selected'}
            </dd>
          </div>
          {selectedPackage && (
            <div className="min-w-0">
              <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
                Travel package
              </dt>
              <dd className="mt-1 break-words text-sm text-[#142A32]!">
                {selectedPackage.title}
              </dd>
            </div>
          )}
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Preferred travel date
            </dt>
            <dd className="mt-1 text-sm text-[#142A32]!">
              {formatTravelDate(values.travelDate)}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
              Travellers
            </dt>
            <dd className="mt-1 text-sm text-[#142A32]!">
              {values.numberOfTravellers}{' '}
              {values.numberOfTravellers === 1 ? 'traveller' : 'travellers'}
            </dd>
          </div>
          {values.specialRequirements && (
            <div className="min-w-0 sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wider text-[#4A6572]!">
                Additional requirements
              </dt>
              <dd className="mt-1 whitespace-pre-wrap break-words text-sm leading-relaxed text-[#142A32]!">
                {values.specialRequirements}
              </dd>
            </div>
          )}
        </dl>

        <div
          role="status"
          className="mt-7 rounded-lg border border-[#B68C63]/40 bg-[#E9E2D5]/55 p-4 text-sm leading-relaxed text-[#142A32]!"
        >
          This is a demo confirmation only. No enquiry has been sent, no
          booking has been made, and these details have not been stored.
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={onEdit}
            className="w-full sm:w-auto"
          >
            Edit Enquiry
          </Button>
          <ButtonLink
            to="/packages"
            size="md"
            fullWidth
            className="w-full sm:w-auto"
          >
            Browse Packages
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default function BookingPage() {
  const [searchParams] = useSearchParams()
  const initialValues = useMemo(
    () => getInitialValues(searchParams),
    [searchParams],
  )
  const [submittedEnquiry, setSubmittedEnquiry] =
    useState<BookingEnquiryFormValues | null>(null)
  const {
    register,
    control,
    getValues,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingEnquiryFormValues>({
    resolver: zodResolver(bookingEnquirySchema),
    values: initialValues,
    mode: 'onBlur',
  })

  const selectedDestinationId =
    useWatch({ control, name: 'destinationId' }) ?? ''
  const selectedPackageId = useWatch({ control, name: 'packageId' }) ?? ''
  const selectedPackage = packages.find(
    (travelPackage) => travelPackage.id === selectedPackageId,
  )
  const availablePackages = packages.filter(
    (travelPackage) =>
      travelPackage.destinationId === selectedDestinationId,
  )
  const travellerMinimum = selectedPackage?.groupSize.min ?? 1
  const travellerMaximum = selectedPackage?.groupSize.max ?? 12
  const today = getLocalTodayISO()

  const destinationRegistration = register('destinationId')
  const packageRegistration = register('packageId')
  const travellerRegistration = register('numberOfTravellers', {
    valueAsNumber: true,
  })

  const handleValidSubmit = (values: BookingEnquiryFormValues) => {
    setSubmittedEnquiry(values)
  }

  return (
    <>
      <PageMetadata
        title="Booking Enquiry | Tripora Demo"
        description="Explore the Tripora booking enquiry form demo. Submissions show an in-page preview only; no booking is made and no information is sent or saved."
      />
      <section className="section-padding bg-[#F8F7F3]">
        <Container narrow>
        <header className="mb-9 text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#76552F]!">
            {submittedEnquiry ? 'Enquiry details' : 'Begin your journey'}
          </p>
          <h1 className="mb-4 text-[#142A32]!">
            {submittedEnquiry ? 'Enquiry Prepared' : 'Booking Enquiry'}
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#4A6572]! sm:text-lg">
            {submittedEnquiry
              ? 'Your details are shown below for this session only.'
              : 'Tell us what you have in mind. Share your preferred destination and travel details to prepare an enquiry.'}
          </p>
        </header>

        {submittedEnquiry ? (
          <EnquiryConfirmation
            values={submittedEnquiry}
            onEdit={() => setSubmittedEnquiry(null)}
          />
        ) : (
        <form
          onSubmit={handleSubmit(handleValidSubmit)}
          noValidate
          className="rounded-xl border border-[#142A32]/10 bg-white p-5 shadow-[0_8px_28px_rgba(20,42,50,0.07)] sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-full-name" className={labelClassName}>
                Full name <span aria-hidden="true" className="text-[#76552F]">*</span>
              </label>
              <input
                id="booking-full-name"
                autoComplete="name"
                required
                {...register('fullName')}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'booking-full-name-error' : undefined}
                className={fieldClassName}
                placeholder="Your full name"
              />
              <FieldError
                id="booking-full-name-error"
                message={errors.fullName?.message}
              />
            </div>

            <div>
              <label htmlFor="booking-email" className={labelClassName}>
                Email address <span aria-hidden="true" className="text-[#76552F]">*</span>
              </label>
              <input
                id="booking-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                {...register('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'booking-email-error' : undefined}
                className={fieldClassName}
                placeholder="you@example.com"
              />
              <FieldError
                id="booking-email-error"
                message={errors.email?.message}
              />
            </div>

            <div>
              <label htmlFor="booking-phone" className={labelClassName}>
                Phone number <span aria-hidden="true" className="text-[#76552F]">*</span>
              </label>
              <input
                id="booking-phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                required
                {...register('phone')}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                className={fieldClassName}
                placeholder="+1 555 123 4567"
              />
              <FieldError
                id="booking-phone-error"
                message={errors.phone?.message}
              />
            </div>

            <div>
              <label htmlFor="booking-destination" className={labelClassName}>
                Destination <span aria-hidden="true" className="text-[#76552F]">*</span>
              </label>
              <select
                id="booking-destination"
                required
                {...destinationRegistration}
                onChange={(event) => {
                  destinationRegistration.onChange(event)
                  setValue('packageId', '', {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                  setValue(
                    'numberOfTravellers',
                    Math.min(12, Math.max(1, getValues('numberOfTravellers') || 1)),
                    { shouldDirty: true, shouldValidate: true },
                  )
                }}
                aria-invalid={Boolean(errors.destinationId)}
                aria-describedby={
                  errors.destinationId ? 'booking-destination-error' : undefined
                }
                className={fieldClassName}
              >
                <option value="">Choose a destination</option>
                {destinations.map((destination) => (
                  <option key={destination.id} value={destination.id}>
                    {destination.name}, {destination.country}
                  </option>
                ))}
              </select>
              <FieldError
                id="booking-destination-error"
                message={errors.destinationId?.message}
              />
            </div>

            <div>
              <label htmlFor="booking-package" className={labelClassName}>
                Travel package <span className="text-xs font-normal text-[#4A6572]!">(optional)</span>
              </label>
              <select
                id="booking-package"
                {...packageRegistration}
                disabled={!selectedDestinationId}
                onChange={(event) => {
                  packageRegistration.onChange(event)
                  const packageChoice = packages.find(
                    (travelPackage) => travelPackage.id === event.target.value,
                  )
                  const currentTravellers = getValues('numberOfTravellers')

                  if (packageChoice) {
                    setValue('destinationId', packageChoice.destinationId, {
                      shouldDirty: true,
                      shouldValidate: true,
                    })
                  }

                  const minimum = packageChoice?.groupSize.min ?? 1
                  const maximum = packageChoice?.groupSize.max ?? 12
                  setValue(
                    'numberOfTravellers',
                    Math.min(maximum, Math.max(minimum, currentTravellers || minimum)),
                    { shouldDirty: true, shouldValidate: true },
                  )
                }}
                aria-invalid={Boolean(errors.packageId)}
                aria-describedby={errors.packageId ? 'booking-package-error' : undefined}
                className={`${fieldClassName} disabled:cursor-not-allowed disabled:bg-[#E9E2D5]/55 disabled:text-[#4A6572]!`}
              >
                <option value="">
                  {selectedDestinationId
                    ? 'No specific package'
                    : 'Choose a destination first'}
                </option>
                {availablePackages.map((travelPackage) => (
                  <option key={travelPackage.id} value={travelPackage.id}>
                    {travelPackage.title}
                  </option>
                ))}
              </select>
              <FieldError
                id="booking-package-error"
                message={errors.packageId?.message}
              />
            </div>

            <div>
              <label htmlFor="booking-travel-date" className={labelClassName}>
                Travel date <span aria-hidden="true" className="text-[#76552F]">*</span>
              </label>
              <input
                id="booking-travel-date"
                type="date"
                min={today}
                required
                {...register('travelDate')}
                aria-invalid={Boolean(errors.travelDate)}
                aria-describedby={errors.travelDate ? 'booking-travel-date-error' : undefined}
                className={fieldClassName}
              />
              <FieldError
                id="booking-travel-date-error"
                message={errors.travelDate?.message}
              />
            </div>

            <div>
              <label htmlFor="booking-travellers" className={labelClassName}>
                Number of travellers <span aria-hidden="true" className="text-[#76552F]">*</span>
              </label>
              <input
                id="booking-travellers"
                type="number"
                min={travellerMinimum}
                max={travellerMaximum}
                step={1}
                required
                {...travellerRegistration}
                aria-invalid={Boolean(errors.numberOfTravellers)}
                aria-describedby={
                  errors.numberOfTravellers
                    ? 'booking-travellers-error'
                    : 'booking-travellers-hint'
                }
                className={fieldClassName}
              />
              <p id="booking-travellers-hint" className="mt-1.5 text-xs text-[#4A6572]!">
                {selectedPackage
                  ? `This package accepts ${travellerMinimum}–${travellerMaximum} travellers.`
                  : 'Choose between 1 and 12 travellers.'}
              </p>
              <FieldError
                id="booking-travellers-error"
                message={errors.numberOfTravellers?.message}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="booking-requirements"
                className={labelClassName}
              >
                Additional requirements{' '}
                <span className="text-xs font-normal text-[#4A6572]!">(optional)</span>
              </label>
              <textarea
                id="booking-requirements"
                rows={5}
                maxLength={1000}
                {...register('specialRequirements')}
                aria-invalid={Boolean(errors.specialRequirements)}
                aria-describedby={
                  errors.specialRequirements
                    ? 'booking-requirements-error'
                    : 'booking-requirements-hint'
                }
                className={`${fieldClassName} resize-y`}
                placeholder="Accessibility needs, interests, or anything else we should know..."
              />
              <p id="booking-requirements-hint" className="mt-1.5 text-xs text-[#4A6572]!">
                Up to 1,000 characters.
              </p>
              <FieldError
                id="booking-requirements-error"
                message={errors.specialRequirements?.message}
              />
            </div>
          </div>

          <div className="mt-7 border-t border-[#142A32]/10 pt-6">
            <p className="mb-4 text-sm leading-relaxed text-[#4A6572]!">
              Demo only: your details are validated and displayed in this
              browser session. They are not sent or stored.
            </p>
            <Button
              type="submit"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              className="sm:w-auto"
            >
              Check enquiry details
            </Button>

          </div>
        </form>
        )}

        {!submittedEnquiry && (
          <p className="mt-6 text-center text-sm text-[#4A6572]!">
            Still exploring?{' '}
            <Link
              to="/packages"
              className="font-medium text-[#142A32]! underline decoration-[#B68C63] underline-offset-4 hover:text-[#76552F]! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76552F]"
            >
              Browse all travel packages
            </Link>
          </p>
        )}
        </Container>
      </section>
    </>
  )
}
