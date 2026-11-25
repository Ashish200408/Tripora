# Tripora

> **Travel beyond the ordinary.**

A premium, modern, responsive travel agency website built to demonstrate professional frontend development capabilities to potential startup clients.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Business Objectives](#2-business-objectives)
3. [Brand Identity & Design Direction](#3-brand-identity--design-direction)
4. [Technology Stack](#4-technology-stack)
5. [Project Structure](#5-project-structure)
6. [Installation](#6-installation)
7. [Development Commands](#7-development-commands)
8. [Application Routes](#8-application-routes)
9. [Features Implemented](#9-features-implemented)
10. [Planned Pages & Functionality](#10-planned-pages--functionality)
11. [Development Roadmap](#11-development-roadmap)
12. [Known Limitations](#12-known-limitations)
13. [Future Improvements](#13-future-improvements)
14. [Deployment](#14-deployment)
15. [Credits & Attribution](#15-credits--attribution)

---

## 1. Project Overview

**Tripora** is a travel and tourism web application designed to showcase what a premium, client-ready travel agency website looks like. The project is intended as a startup demonstration product — a reference-quality website that clients can envision as the foundation for their own branded travel platform.

The site presents curated destinations, travel packages, and booking enquiry flows with a consistent editorial aesthetic that communicates trust, sophistication, and wanderlust.

---

## 2. Business Objectives

- Demonstrate professional frontend development quality to potential startup clients.
- Build a believable and polished travel agency product, not a generic template.
- Show interactive features (search, filtering, wishlisting, enquiry forms) working end-to-end using frontend-only implementations with realistic demo data.
- Serve as a foundation that could be extended with a real backend for a paying client.
- Be completed and deployment-ready by **Saturday, 28 November 2026, 10:00 AM IST**.

---

## 3. Brand Identity & Design Direction

### Colour Palette

| Role        | Name        | Hex       |
|-------------|-------------|-----------|
| Primary     | Deep Teal   | `#142A32` |
| Background  | Warm Ivory  | `#E9E2D5` |
| Accent      | Sand Gold   | `#B68C63` |
| Surface     | Off-White   | `#F8F7F3` |

### Typography

| Role     | Typeface         |
|----------|------------------|
| Headings | Playfair Display |
| Body     | Inter            |

### Design Principles

- Premium editorial travel aesthetic — calm, spacious, and refined.
- High-quality destination photography.
- Clear visual hierarchy with consistent spacing and alignment.
- Smooth transitions and carefully designed hover states.
- Subtle shadows and consistent border radii.
- No excessive gradients, decorative noise, or visual clutter.
- Every page follows the same design system — no one-off colour palettes.

---

## 4. Technology Stack

### Runtime & Build

| Technology        | Version   | Purpose                                   |
|-------------------|-----------|-------------------------------------------|
| React             | ^19.3.1   | UI component library                      |
| TypeScript        | ~7.0.2    | Static typing                             |
| Vite              | ^8.3.6    | Build tool and development server         |
| `@vitejs/plugin-react` | ^6.1.2 | React Fast Refresh support via Oxc     |

### Styling

| Technology        | Version   | Purpose                                   |
|-------------------|-----------|-------------------------------------------|
| Tailwind CSS      | ^4.3.5    | Utility-first CSS framework               |
| `@tailwindcss/vite` | ^4.3.5  | Native Vite integration for Tailwind v4   |

### Routing

| Technology        | Version   | Purpose                                   |
|-------------------|-----------|-------------------------------------------|
| React Router DOM  | ^7.18.6   | Client-side routing                       |

### Forms & Validation

| Technology           | Version   | Purpose                              |
|----------------------|-----------|--------------------------------------|
| React Hook Form      | ^7.92.0   | Performant form state management      |
| `@hookform/resolvers` | ^7.0.9   | Schema validation integration         |
| Zod                  | ^4.6.7    | Form schema validation and type inference |

### Animation & Icons

| Technology   | Version   | Purpose                                       |
|--------------|-----------|-----------------------------------------------|
| Motion       | ^14.14.0  | Declarative animations and transitions        |
| Lucide React | ^1.79.0   | Consistent SVG icon library                   |

### Code Quality

| Technology | Version   | Purpose                             |
|------------|-----------|-------------------------------------|
| Oxlint     | ^1.90.0   | Fast JavaScript/TypeScript linter   |

---

## 5. Project Structure

```
tripora/
├── public/
│   ├── favicon.svg                   # Site favicon
│   └── icons.svg                     # SVG icon sprite
├── src/
│   ├── assets/
│   │   └── hero.png                  # Placeholder (to be replaced with final photography)
│   ├── components/
│   │   ├── home/
│   │   │   ├── FeaturedDestinations.tsx # 6-destination editorial showcase grid
│   │   │   ├── FeaturedPackages.tsx  # 3-package curated journeys showcase
│   │   │   ├── HeroSection.tsx       # Full-width cinematic homepage hero
│   │   │   ├── Newsletter.tsx        # Demo-only newsletter signup with email validation
│   │   │   ├── Testimonials.tsx      # Sample traveller stories and ratings
│   │   │   ├── TravelSearch.tsx      # Interactive journey search panel
│   │   │   └── WhyChooseTripora.tsx  # Tripora value proposition and trust signals
│   │   ├── layout/
│   │   │   ├── Layout.tsx            # Page wrapper — Navbar + main + Footer
│   │   │   ├── Navbar.tsx            # Responsive navigation bar with mobile menu
│   │   │   └── Footer.tsx            # Site footer with links and social icons
│   │   └── ui/
│   │       ├── Button.tsx            # Reusable button (primary/secondary/ghost/outline/outline-light)
│   │       └── Container.tsx         # Page-width wrapper with consistent padding
│   ├── data/
│   │   ├── destinations.ts           # Mock destinations data (6 destinations)
│   │   ├── packages.ts               # Mock travel packages data (6 packages)
│   │   └── experiences.ts            # Mock experience categories data (6 categories)
│   ├── pages/
│   │   ├── HomePage.tsx              # / — Homepage sections through newsletter
│   │   ├── DestinationsPage.tsx      # /destinations — Placeholder listing
│   │   ├── DestinationDetailPage.tsx # /destinations/:slug — Data-driven destination detail
│   │   ├── PackagesPage.tsx          # /packages — Placeholder listing
│   │   ├── ExperiencesPage.tsx       # /experiences — Placeholder listing
│   │   ├── AboutPage.tsx             # /about — Placeholder
│   │   ├── ContactPage.tsx           # /contact — Placeholder with form shell
│   │   ├── BookingPage.tsx           # /booking — Placeholder
│   │   └── NotFoundPage.tsx          # * — 404 Not Found
│   ├── types/
│   │   └── index.ts                  # Shared TypeScript interfaces and types
│   ├── App.tsx                       # Root component with React Router configuration
│   ├── App.css                       # Intentionally minimal (global styles in index.css)
│   ├── index.css                     # Global design tokens, reset, and typography
│   └── main.tsx                      # Application entry point
├── .gitattributes
├── .gitignore
├── .oxlintrc.json                    # Oxlint configuration
├── index.html                        # HTML entry point with Google Fonts
├── package.json
├── PROJECT_RULES.md                  # Mandatory development rules
├── TASK_TRACKER.md                   # Development progress tracker
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts                    # Vite + Tailwind CSS v4 configuration
```

---

## 6. Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd tripora

# Install dependencies
npm install
```

---

## 7. Development Commands

| Command           | Description                                      |
|-------------------|--------------------------------------------------|
| `npm run dev`     | Start the local development server (HMR enabled) |
| `npm run build`   | Type-check and build the production bundle       |
| `npm run preview` | Preview the production build locally             |
| `npm run lint`    | Run the Oxlint linter                            |

The development server runs at `http://localhost:5173` by default.

---

## 8. Application Routes

| Route               | Page                  | Status                        |
|---------------------|-----------------------|-------------------------------|
| `/`                 | Home                  | ✅ Route active — placeholder UI |
| `/destinations`     | Destinations Listing  | ✅ Route active — placeholder listing with mock data |
| `/destinations/:slug` | Destination Detail  | ✅ Implemented — dynamic detail page |
| `/packages`         | Travel Packages       | ✅ Route active — placeholder listing with mock data |
| `/packages/:id`     | Package Detail        | 🔲 Planned (Phase 5)          |
| `/experiences`      | Experiences           | ✅ Route active — placeholder listing with mock data |
| `/about`            | About Tripora         | ✅ Route active — placeholder  |
| `/contact`          | Contact & Enquiry     | ✅ Route active — form shell   |
| `/booking`          | Booking Enquiry       | ✅ Route active — placeholder  |
| `*`                 | 404 Not Found         | ✅ Implemented                 |

---

## 9. Features Implemented

> **Phase 2 complete.** The design system, global layout, routing, TypeScript types, and mock data are all in place. The production build passes with zero errors.

### Foundation (Phase 0)
- [x] Vite + React + TypeScript project scaffolded
- [x] Tailwind CSS v4 configured via `@tailwindcss/vite` plugin
- [x] React Router DOM installed
- [x] React Hook Form + Zod validation installed
- [x] Motion animation library installed
- [x] Lucide React icon library installed
- [x] Oxlint code quality tooling configured
- [x] Git repository initialised

### Documentation (Phase 1)
- [x] `PROJECT_RULES.md` — mandatory development rules
- [x] `README.md` — full professional project documentation
- [x] `TASK_TRACKER.md` — central progress tracker

### Design System & Foundation (Phase 2)
- [x] `index.html` updated — Google Fonts (Playfair Display + Inter), correct title and meta description
- [x] `vite.config.ts` — Tailwind CSS v4 Vite plugin registered
- [x] `src/index.css` — Tripora design tokens (CSS custom properties), brand colours, reset, global typography, utility classes
- [x] Default Vite template UI and styling fully removed
- [x] `src/types/index.ts` — TypeScript types: `Destination`, `Package`, `Experience`, `ItineraryDay`, `TravelType`, `BudgetRange`, `ExperienceCategory`, `BookingEnquiryFormData`, `ContactFormData`
- [x] `src/data/destinations.ts` — 6 mock destinations with full data
- [x] `src/data/packages.ts` — 6 mock travel packages with full itineraries
- [x] `src/data/experiences.ts` — 6 experience categories
- [x] `Button` component — 4 variants (primary, secondary, ghost, outline), 3 sizes
- [x] `Container` component — consistent page-width wrapper with responsive padding
- [x] `Navbar` — responsive with scroll-aware background, mobile hamburger menu, active link highlighting, keyboard accessible
- [x] `Footer` — brand column, 3 link columns, social icons, tagline
- [x] `Layout` — wraps all pages with Navbar and Footer
- [x] React Router configured — 8 routes including 404
- [x] Placeholder pages for all routes: Home, Destinations, Packages, Experiences, About, Contact, Booking, 404
- [x] Mobile navigation menu — opens/closes, closes on overlay click and link navigation, prevents body scroll
- [x] Production build: `✓ built in 1.17s` — zero TypeScript errors

### Homepage — Phase 3A–3G (In Progress)
- [x] `HeroSection` — full-width cinematic hero (`82–88vh`), destination photography with image-error gradient fallback, directional dark overlays, `Playfair Display` + `Inter` editorial typography, Motion entrance animations (respecting `prefers-reduced-motion`), and working CTAs to `/destinations` and `/packages`
- [x] `TravelSearch` — interactive search panel below the hero with destination dropdown (from `src/data/destinations.ts`), future-only date picker, accessible 1–12 traveller stepper, validation feedback, and navigation to `/packages` with query parameters (`destination`, `date`, `travellers`)
- [x] `FeaturedDestinations` — responsive 3/2/1-column editorial grid showcasing all 6 destinations from `src/data/destinations.ts`, with image zoom on hover, `onError` fallback, and card links to `/destinations/:slug`
- [x] `FeaturedPackages` — responsive 3/2/1-column editorial showcase displaying 3 featured packages from `src/data/packages.ts`, showing duration, per-person pricing, highlights, `Enquire Now` links to `/booking?package=:slug`, and a `View All Packages` CTA to `/packages`
- [x] `WhyChooseTripora` — dark teal value-proposition section with four benefit cards, brand palette typography, accessible icons, and reduced-motion-aware entrance animations; visually verified and production build passed
- [x] `Testimonials` — responsive three-card traveller stories section with five-star ratings, reduced-motion-aware entrance animations, and a visible note that reviews are illustrative samples, not verified customer reviews
- [x] `Newsletter` — responsive demo signup form with client-side email validation and accessible feedback; email addresses are not saved or sent to a mailing list
- [x] `DestinationDetailPage` — slug-driven detail page with existing destination data, practical information, highlights, ratings, related packages, and enquiry links; unknown slugs show the existing 404 page

---

## 10. Planned Pages & Functionality

### Home Page (`/`)
- Full-screen hero section with tagline and destination search bar.
- Featured destinations section.
- Featured travel packages section.
- Newsletter signup prompt (demo only; no mailing service connected).

### Destinations Listing (`/destinations`)
- Grid/list view of all available destinations.
- Filter by region, travel type, and budget range.
- Search by destination name.
- Each destination card links to its detail page.

### Destination Detail (`/destinations/:slug`)
- Implemented: data-driven hero, overview, rating, highlights, travel types, available practical information, related packages, and enquiry CTA.
- Dedicated weather data and travel-tip fields are not currently present in the destination dataset.

### Travel Packages (`/packages`)
- All available travel packages with pricing.
- Filter by duration, destination, and price range.
- Sort options (popularity, price, duration).

### Package Detail (`/packages/:id`)
- Full package itinerary.
- Included and excluded items.
- Price breakdown and estimation tool.
- Booking enquiry form with validation.
- Confirmation state displayed after submission (frontend demo only).

### About (`/about`)
- Tripora brand story.
- Team section.
- Values and mission statement.

### Contact (`/contact`)
- Contact form with full validation (React Hook Form + Zod).
- Form displays a confirmation state after submission.
- Office details and social links.

### Global Components
- Responsive navigation bar with mobile hamburger menu.
- Persistent footer with links and social icons.
- Wishlist — save and remove destinations/packages (localStorage).
- 404 Not Found page.

---

## 11. Development Roadmap

| Phase | Milestone                                              | Status         |
|-------|--------------------------------------------------------|----------------|
| 0     | Project scaffold and dependency setup                  | ✅ Complete    |
| 1     | Documentation and development rules                    | ✅ Complete    |
| 2     | Design system, components, routing, types, mock data   | ✅ Complete    |
| 3     | Premium homepage                                       | 🔄 In Progress |
| 4     | Destinations and destination detail pages              | 🔄 In Progress |
| 5     | Packages and package detail pages                      | 🔲 Planned    |
| 6     | Experiences, About and Contact pages                   | 🔲 Planned    |
| 7     | Trip planner, wishlist and functional interactions      | 🔲 Planned    |
| 8     | Responsive testing, optimisation and bug fixing        | 🔲 Planned    |
| 9     | GitHub and deployment                                  | 🔲 Planned    |
| 10    | Final client demonstration                             | 🔲 Planned    |

**Deadline:** Saturday, 28 November 2026, 10:00 AM IST.

---

## 12. Known Limitations

- **No backend:** All data is static demo/mock data. No real bookings, payments, or reservations occur.
- **No authentication:** There is no user login or account system.
- **No payment processing:** Any pricing displayed is for demonstration purposes only.
- **No real email delivery:** Contact and enquiry form submissions display a frontend confirmation state only.
- **No real-time availability:** Package and destination availability is not connected to a live inventory system.
- **Images are placeholders:** The current `hero.png` asset is a placeholder. Final photography sourcing is pending.

---

## 13. Future Improvements

The following enhancements are outside the current MVP scope but would be valuable for a production deployment:

- Backend API integration (destinations, packages, user accounts).
- Real booking and payment processing (e.g., Stripe).
- CMS integration for content management (e.g., Sanity, Contentful).
- Real email delivery for enquiry forms (e.g., Resend, SendGrid).
- User authentication and wishlist persistence across devices.
- Server-side rendering or static site generation for SEO (e.g., Next.js migration).
- Internationalisation (i18n) support.
- Advanced analytics and conversion tracking.
- Automated end-to-end tests (e.g., Playwright).

---

## 14. Deployment

### Production Build

```bash
npm run build
```

This command runs TypeScript type-checking followed by a Vite production build. The output is placed in the `dist/` directory.

### Preview Build Locally

```bash
npm run preview
```

Serves the `dist/` output at `http://localhost:4173` for local verification before deployment.

### Recommended Hosting Platforms

| Platform   | Notes                                                    |
|------------|----------------------------------------------------------|
| Vercel     | Zero-config deployment for Vite projects. Recommended.   |
| Netlify    | Drag-and-drop `dist/` folder or Git-connected CI/CD.     |
| GitHub Pages | Requires `base` configuration in `vite.config.ts`.    |

### Vercel Deployment (Recommended)

1. Push the repository to GitHub.
2. Import the repository at [vercel.com](https://vercel.com).
3. Vercel auto-detects Vite. No additional configuration is required.
4. Set build command to `npm run build` and output directory to `dist`.

### Netlify Deployment

1. Run `npm run build` locally or connect the Git repository.
2. Set build command to `npm run build` and publish directory to `dist`.
3. Add a `_redirects` file inside `public/` for SPA routing:

```
/*    /index.html    200
```

> **Important:** Always run `npm run build` and verify the output before deploying. Do not deploy a build with TypeScript errors or console warnings.

---

## 15. Credits & Attribution

- **Design system:** Developed specifically for the Tripora project.
- **Typography:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
- **Icons:** [Lucide React](https://lucide.dev/) — open-source icon library.
- **Destination photography:** Sources to be documented as images are added. All photography must be appropriately licensed before use in a client-facing deployment.

---

*This README is a living document and must be updated alongside every development phase. Last updated: Phase 4B — Dynamic destination detail route and page added.*
