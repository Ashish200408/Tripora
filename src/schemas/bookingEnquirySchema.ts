import { z } from 'zod'
import { destinations } from '../data/destinations'
import { packages } from '../data/packages'

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

export const bookingEnquirySchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'Please enter your full name.')
      .max(100, 'Name must be 100 characters or fewer.'),
    email: z
      .string()
      .trim()
      .min(1, 'Please enter your email address.')
      .email('Enter a valid email address.'),
    phone: z
      .string()
      .trim()
      .min(1, 'Please enter your phone number.')
      .refine((value) => {
        const digits = value.replace(/\D/g, '')
        return /^\+?[0-9\s().-]+$/.test(value) && digits.length >= 7 && digits.length <= 15
      }, 'Enter a valid phone number, including its country code if applicable.'),
    destinationId: z
      .string()
      .min(1, 'Please select a destination.')
      .refine(
        (id) => destinations.some((destination) => destination.id === id),
        'Select a destination from the list.',
      ),
    packageId: z.string(),
    travelDate: z
      .string()
      .min(1, 'Please select your preferred travel date.')
      .refine(
        (value) => !value || isFutureISODate(value),
        'Choose a valid date in the future.',
      ),
    numberOfTravellers: z
      .number({ error: 'Enter the number of travellers.' })
      .int({ error: 'The number of travellers must be a whole number.' }),
    specialRequirements: z
      .string()
      .trim()
      .max(1000, 'Additional requirements must be 1,000 characters or fewer.'),
  })
  .superRefine((values, context) => {
    const selectedPackage = values.packageId
      ? packages.find((travelPackage) => travelPackage.id === values.packageId)
      : undefined

    if (values.packageId && !selectedPackage) {
      context.addIssue({
        code: 'custom',
        path: ['packageId'],
        message: 'Select a package from the list.',
      })
    }

    if (
      selectedPackage &&
      selectedPackage.destinationId !== values.destinationId
    ) {
      context.addIssue({
        code: 'custom',
        path: ['packageId'],
        message: 'Choose a package available in the selected destination.',
      })
    }

    const minimum = selectedPackage?.groupSize.min ?? 1
    const maximum = selectedPackage?.groupSize.max ?? 12

    if (
      Number.isInteger(values.numberOfTravellers) &&
      (values.numberOfTravellers < minimum ||
        values.numberOfTravellers > maximum)
    ) {
      context.addIssue({
        code: 'custom',
        path: ['numberOfTravellers'],
        message: `Choose between ${minimum} and ${maximum} travellers${selectedPackage ? ' for this package' : ''}.`,
      })
    }
  })

export type BookingEnquiryFormValues = z.infer<typeof bookingEnquirySchema>
