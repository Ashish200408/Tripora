// =========================================================
// TRIPORA – Shared TypeScript Types
// =========================================================

export interface Destination {
  id: string
  slug: string
  name: string
  country: string
  region: 'Asia' | 'Europe' | 'Africa' | 'Americas' | 'Oceania' | 'Middle East'
  tagline: string
  description: string
  imageUrl: string
  highlights: string[]
  travelTypes: TravelType[]
  bestTimeToVisit: string
  climate: string
  currency: string
  language: string
  budgetRange: BudgetRange
  rating: number
  reviewCount: number
  featured: boolean
}

export interface Package {
  id: string
  slug: string
  title: string
  destinationId: string
  destinationName: string
  imageUrl: string
  durationDays: number
  pricePerPerson: number
  originalPrice?: number
  groupSize: { min: number; max: number }
  travelType: TravelType
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  includes: string[]
  excludes: string[]
  highlights: string[]
  itinerary: ItineraryDay[]
  rating: number
  reviewCount: number
  featured: boolean
  tags: string[]
}

export interface Experience {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  imageUrl: string
  category: ExperienceCategory
  tags: string[]
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  meals: ('Breakfast' | 'Lunch' | 'Dinner')[]
  accommodation?: string
}

export type TravelType =
  | 'Adventure'
  | 'Cultural'
  | 'Beach'
  | 'Wildlife'
  | 'Luxury'
  | 'Family'
  | 'Honeymoon'
  | 'Solo'

export type BudgetRange = 'Budget' | 'Mid-range' | 'Luxury' | 'Ultra-luxury'

export type ExperienceCategory =
  | 'Adventure'
  | 'Culture & Heritage'
  | 'Beach & Islands'
  | 'Wildlife & Nature'
  | 'Luxury Escapes'
  | 'Family Travel'
  | 'Honeymoon'

// ---- Form types -----------------------------------------

export interface BookingEnquiryFormData {
  fullName: string
  email: string
  phone: string
  packageId?: string
  destinationId?: string
  travelDate: string
  numberOfTravellers: number
  specialRequirements?: string
}

export interface ContactFormData {
  fullName: string
  email: string
  subject: string
  message: string
}
