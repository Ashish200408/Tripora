import type { Destination } from '../types'

// =========================================================
// TRIPORA – Mock Destinations Data
// All images use Unsplash with descriptive parameters.
// Attribution required before production client deployment.
// =========================================================

export const destinations: Destination[] = [
  {
    id: 'dest-001',
    slug: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    tagline: 'Island of the Gods',
    description:
      'Bali is a living postcard — an Indonesian paradise that feels fundamentally, even divinely, tropical. Dramatic dances, pulsating music, ornate temples, terraced rice paddies, and a soul-soothing spa culture make this island endlessly captivating.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
    highlights: ['Ubud Sacred Monkey Forest', 'Tanah Lot Temple', 'Tegallalang Rice Terraces', 'Seminyak Beach', 'Mount Batur Sunrise Trek'],
    travelTypes: ['Cultural', 'Beach', 'Honeymoon', 'Adventure'],
    bestTimeToVisit: 'April to October',
    climate: 'Tropical',
    currency: 'Indonesian Rupiah (IDR)',
    language: 'Balinese, Indonesian',
    budgetRange: 'Mid-range',
    rating: 4.8,
    reviewCount: 2140,
    featured: true,
  },
  {
    id: 'dest-002',
    slug: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    tagline: 'Sunsets Over the Aegean',
    description:
      'Santorini is one of the most dramatic island settings in the world. Its iconic whitewashed buildings and blue-domed churches cling to clifftops above a submerged volcanic caldera, offering views that redefine the word spectacular.',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
    highlights: ['Oia Sunset', 'Caldera Views', 'Black Sand Beaches', 'Wine Tasting', 'Akrotiri Archaeological Site'],
    travelTypes: ['Luxury', 'Honeymoon', 'Cultural'],
    bestTimeToVisit: 'April to November',
    climate: 'Mediterranean',
    currency: 'Euro (EUR)',
    language: 'Greek',
    budgetRange: 'Luxury',
    rating: 4.9,
    reviewCount: 3812,
    featured: true,
  },
  {
    id: 'dest-003',
    slug: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    tagline: 'The Soul of Ancient Japan',
    description:
      'Kyoto served as Japan\'s capital for over a millennium and remains the cultural heart of the country. Thousands of temples, shrines, zen gardens, and geisha districts create an atmosphere of refined beauty and deep tradition.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
    highlights: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Kinkaku-ji Golden Pavilion', 'Gion District', 'Philosopher\'s Path'],
    travelTypes: ['Cultural', 'Solo', 'Luxury'],
    bestTimeToVisit: 'March to May, September to November',
    climate: 'Temperate',
    currency: 'Japanese Yen (JPY)',
    language: 'Japanese',
    budgetRange: 'Mid-range',
    rating: 4.9,
    reviewCount: 4203,
    featured: true,
  },
  {
    id: 'dest-004',
    slug: 'serengeti-tanzania',
    name: 'Serengeti',
    country: 'Tanzania',
    region: 'Africa',
    tagline: 'The World\'s Greatest Wildlife Show',
    description:
      'The Serengeti is synonymous with Africa\'s boundless wilderness. Witness the Great Migration — one of nature\'s most awe-inspiring spectacles — as over a million wildebeest and zebra thunder across the plains.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80',
    highlights: ['Great Wildebeest Migration', 'Big Five Game Drives', 'Hot Air Balloon Safari', 'Maasai Village Visit', 'Ngorongoro Crater'],
    travelTypes: ['Wildlife', 'Adventure', 'Luxury'],
    bestTimeToVisit: 'June to October',
    climate: 'Semi-arid',
    currency: 'Tanzanian Shilling (TZS)',
    language: 'Swahili, English',
    budgetRange: 'Ultra-luxury',
    rating: 4.9,
    reviewCount: 1876,
    featured: true,
  },
  {
    id: 'dest-005',
    slug: 'amalfi-coast-italy',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    tagline: 'Where Mountains Meet the Mediterranean',
    description:
      'The Amalfi Coast is a breathtaking stretch of coastline along the southern edge of Italy\'s Sorrentine Peninsula. Dramatic cliffs cascade down to crystalline waters, dotted with colourful fishing villages, lemon groves, and medieval cathedrals.',
    imageUrl: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=1200&q=80',
    highlights: ['Positano Village', 'Amalfi Cathedral', 'Path of the Gods Hike', 'Boat Tour of Sea Caves', 'Limoncello Tasting'],
    travelTypes: ['Luxury', 'Honeymoon', 'Cultural'],
    bestTimeToVisit: 'May to October',
    climate: 'Mediterranean',
    currency: 'Euro (EUR)',
    language: 'Italian',
    budgetRange: 'Luxury',
    rating: 4.8,
    reviewCount: 2967,
    featured: false,
  },
  {
    id: 'dest-006',
    slug: 'machu-picchu-peru',
    name: 'Machu Picchu',
    country: 'Peru',
    region: 'Americas',
    tagline: 'Lost City of the Incas',
    description:
      'Machu Picchu sits dramatically on a mountain ridge above the Sacred Valley at 2,430 metres. This 15th-century Inca citadel, cloaked in clouds and jungle, remains one of the most astonishing archaeological sites in the world.',
    imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80',
    highlights: ['Sun Gate at Sunrise', 'Huayna Picchu Summit', 'Inca Trail Trek', 'Sacred Valley Villages', 'Cusco City Tour'],
    travelTypes: ['Adventure', 'Cultural', 'Solo'],
    bestTimeToVisit: 'May to September',
    climate: 'Highland tropical',
    currency: 'Peruvian Sol (PEN)',
    language: 'Spanish, Quechua',
    budgetRange: 'Mid-range',
    rating: 4.9,
    reviewCount: 3451,
    featured: false,
  },
]

export const getFeaturedDestinations = (): Destination[] =>
  destinations.filter((d) => d.featured)

export const getDestinationBySlug = (slug: string): Destination | undefined =>
  destinations.find((d) => d.slug === slug)
