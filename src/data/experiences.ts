import type { Experience } from '../types'

// =========================================================
// TRIPORA – Mock Experiences Data
// =========================================================

export const experiences: Experience[] = [
  {
    id: 'exp-001',
    slug: 'adventure',
    title: 'Adventure & Expeditions',
    subtitle: 'Push your limits in extraordinary places',
    description:
      'From volcano treks and jungle expeditions to white-water rafting and deep-sea diving — Tripora crafts adventures that challenge you and change you. Every itinerary is designed with safety, skill, and exhilaration in equal measure.',
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
    category: 'Adventure',
    tags: ['Trekking', 'Diving', 'Rafting', 'Climbing', 'Expeditions'],
  },
  {
    id: 'exp-002',
    slug: 'culture-heritage',
    title: 'Culture & Heritage',
    subtitle: 'Travel as a form of understanding',
    description:
      'Immerse yourself in the living traditions, ancient histories, and culinary artistry of the world\'s most culturally rich destinations. Walk through UNESCO World Heritage Sites with expert local guides and experience rituals that have endured for centuries.',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
    category: 'Culture & Heritage',
    tags: ['Temples', 'History', 'Culinary', 'Festivals', 'Architecture'],
  },
  {
    id: 'exp-003',
    slug: 'beach-islands',
    title: 'Beach & Island Escapes',
    subtitle: 'Where the sea meets serenity',
    description:
      'Discover hidden coves, overwater bungalows, and pristine coral reefs across the world\'s most beautiful island destinations. Whether you seek seclusion or social beachside energy, Tripora finds the perfect shore for you.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    category: 'Beach & Islands',
    tags: ['Snorkelling', 'Resorts', 'Sailing', 'Surfing', 'Island Hopping'],
  },
  {
    id: 'exp-004',
    slug: 'wildlife-nature',
    title: 'Wildlife & Nature',
    subtitle: 'Witness the planet\'s greatest spectacles',
    description:
      'Get closer to nature than you thought possible. Track gorillas through rainforest mist, observe elephant herds at waterhole sunsets, or watch humpback whales breach off remote coastlines — guided by naturalists who share your reverence for the wild.',
    imageUrl: 'https://images.unsplash.com/photo-1534759926870-b1ff1e7f9f7a?w=1200&q=80',
    category: 'Wildlife & Nature',
    tags: ['Safari', 'Birdwatching', 'Marine Life', 'National Parks', 'Gorilla Trekking'],
  },
  {
    id: 'exp-005',
    slug: 'luxury-escapes',
    title: 'Luxury Escapes',
    subtitle: 'Extraordinary places, impeccable service',
    description:
      'Tripora\'s luxury collection features the world\'s finest private villas, overwater suites, and exclusive-use retreats. Every detail — from arrival champagne to bespoke excursions — is curated to exceed expectation.',
    imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80',
    category: 'Luxury Escapes',
    tags: ['Private Villas', 'Five-Star', 'Concierge', 'Spas', 'Exclusive Access'],
  },
  {
    id: 'exp-006',
    slug: 'honeymoon',
    title: 'Honeymoon & Romance',
    subtitle: 'Begin your journey together, perfectly',
    description:
      'Celebrate your love story in the world\'s most romantic destinations. Tripora specialises in crafting honeymoon experiences that feel effortlessly personal — sunrise proposals, private beach dinners, and couples spa retreats in idyllic settings.',
    imageUrl: 'https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?w=1200&q=80',
    category: 'Honeymoon',
    tags: ['Romance', 'Private Beaches', 'Couples Spa', 'Sunset Dinners', 'Villas'],
  },
]

export const getExperienceBySlug = (slug: string): Experience | undefined =>
  experiences.find((e) => e.slug === slug)
