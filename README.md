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
- Show interactive features (search, filtering, and enquiry forms) using frontend-only implementations with realistic demo data.
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
│   ├── assets/                       # Retained scaffold assets; not used by current pages
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
│   │   │   └── Footer.tsx            # Site footer with links to implemented routes
│   │   ├── seo/
│   │   │   └── PageMetadata.tsx      # Route-specific title, description, and Open Graph metadata
│   │   └── ui/
│   │       ├── Button.tsx            # Reusable button (primary/secondary/ghost/outline/outline-light)
│   │       ├── Container.tsx         # Page-width wrapper with consistent padding
│   │       └── ImageWithFallback.tsx # Responsive image loading and branded error fallback
│   ├── utils/
│   │   └── responsiveImage.ts        # Responsive Unsplash srcset generation
│   ├── data/
│   │   ├── destinations.ts           # Mock destinations data (6 destinations)
│   │   ├── packages.ts               # Mock travel packages data (6 packages)
│   │   └── experiences.ts            # Mock experience categories data (6 categories)
│   ├── pages/
│   │   ├── HomePage.tsx              # / — Homepage sections through newsletter
│   │   ├── DestinationsPage.tsx      # /destinations — Six linked destination cards
│   │   ├── DestinationDetailPage.tsx # /destinations/:slug — Data-driven destination detail
│   │   ├── PackagesPage.tsx          # /packages — Filterable package listing
│   │   ├── PackageDetailPage.tsx     # /packages/:slug — Package itinerary and inclusions
│   │   ├── ExperiencesPage.tsx       # /experiences — Mock category listing with package links
│   │   ├── AboutPage.tsx             # /about — Sample story and values content
│   │   ├── ContactPage.tsx           # /contact — Validated client-side message demo
│   │   ├── BookingPage.tsx           # /booking — Validated booking enquiry form
│   │   └── NotFoundPage.tsx          # * — 404 Not Found
│   ├── schemas/
│   │   ├── bookingEnquirySchema.ts   # Booking form validation rules
│   │   └── contactFormSchema.ts      # Contact form validation rules
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

- [Node.js](https://nodejs.org/) v24.x recommended; Vite and its React plugin require `^20.19.0 || >=22.12.0`
- npm v9 or higher

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd tripora

# Install dependencies
npm install
```

The current frontend demo does not require environment variables.

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
| `/`                 | Home                  | ✅ Homepage with search, featured destinations, and packages |
| `/destinations`     | Destinations Listing  | ✅ Six destination cards link to their detail pages |
| `/destinations/:slug` | Destination Detail  | ✅ Implemented — dynamic detail page |
| `/packages`         | Travel Packages       | ✅ Filterable listing; accepts validated destination, date, and traveller search context |
| `/packages/:slug`   | Package Detail        | ✅ Implemented — dynamic package details |
| `/experiences`      | Experiences           | ✅ Mock category listing with package links; no experience detail pages |
| `/about`            | About Tripora         | ✅ Sample story and values content; no team profiles |
| `/contact`          | Contact & Enquiry     | ✅ Route active — validated client-side demo |
| `/booking`          | Booking Enquiry       | ✅ Route active — validated local form |
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
- [x] `Footer` — brand column and navigation to implemented routes; no unconfigured social or policy links
- [x] `Layout` — wraps all pages with Navbar and Footer
- [x] React Router configured — 9 app routes plus a catch-all 404
- [x] Initial route scaffolding for Home, Destinations, Packages, Experiences, About, Contact, Booking, and 404; current page status is listed in the routes and planned-functionality sections
- [x] Mobile navigation menu — opens/closes, closes on overlay click and link navigation, prevents body scroll
- [x] Production build: `✓ built in 1.17s` — zero TypeScript errors

### Homepage — Phase 3A–3G (In Progress)
- [x] `HeroSection` — full-width cinematic hero (`82–88vh`), destination photography with image-error gradient fallback, directional dark overlays, `Playfair Display` + `Inter` editorial typography, Motion entrance animations (respecting `prefers-reduced-motion`), and working CTAs to `/destinations` and `/packages`
- [x] `TravelSearch` — interactive search panel below the hero with destination dropdown (from `src/data/destinations.ts`), date picker that prevents past dates, accessible 1–12 traveller stepper, validation feedback, and navigation to `/packages` with query parameters (`destination`, `date`, `travellers`). The package listing applies a valid destination and retains date/traveller values as planning context without checking availability.
- [x] `FeaturedDestinations` — responsive 3/2/1-column editorial grid showcasing all 6 destinations from `src/data/destinations.ts`, with image zoom on hover, `onError` fallback, and card links to `/destinations/:slug`
- [x] `FeaturedPackages` — responsive 3/2/1-column editorial showcase displaying 3 featured packages from `src/data/packages.ts`, showing duration, per-person pricing, highlights, `Enquire Now` links to `/booking?package=:slug`, and a `View All Packages` CTA to `/packages`
- [x] `WhyChooseTripora` — dark teal value-proposition section with four benefit cards, brand palette typography, accessible icons, and reduced-motion-aware entrance animations; visually verified and production build passed
- [x] `Testimonials` — responsive three-card traveller stories section with five-star ratings, reduced-motion-aware entrance animations, and a visible note that reviews are illustrative samples, not verified customer reviews
- [x] `Newsletter` — responsive demo signup form with client-side email validation and accessible feedback; email addresses are not saved or sent to a mailing list
- [x] `DestinationDetailPage` — slug-driven detail page with existing destination data, practical information, highlights, ratings, related packages, and enquiry links; unknown slugs show the existing 404 page
- [x] `PackagesPage` — responsive listing of all six packages with combined duration, destination, and per-person price filters; recommended, price, duration, and review-count sorting; reset and empty states; expandable package overviews; full-itinerary links; and package-specific booking enquiry links.
- [x] `PackageDetailPage` — slug-driven package details with destination link/tagline, itinerary, highlights, rating, group limits, inclusions/exclusions, and a package-preselected demo enquiry CTA; unknown slugs show the existing 404 page.
- [x] `BookingPage` — responsive booking enquiry form with React Hook Form and reusable Zod validation; validates deep-linked package/destination/date/traveller query parameters, enforces package group limits, and shows an accessible in-memory confirmation summary with Edit Enquiry and Browse Packages actions. No enquiry is sent, no booking is made, and no details are stored.
- [x] `ContactPage` — responsive contact form with React Hook Form and Zod validation, accessible field errors, and an in-memory confirmation summary with Edit Message and homepage navigation. No message is sent, no email is generated, and no details are stored.

---

## 10. Planned Pages & Functionality

### Home Page (`/`)
- Full-screen hero section with tagline and destination search bar.
- Featured destinations section.
- Featured travel packages section.
- Newsletter signup prompt (demo only; no mailing service connected).

### Destinations Listing (`/destinations`)
- Implemented: six data-driven destination cards link to their `/destinations/:slug` detail pages.
- Search by name and filters by region, travel type, and budget range are not implemented.

### Destination Detail (`/destinations/:slug`)
- Implemented: data-driven hero, overview, rating, highlights, travel types, available practical information, related packages, and enquiry CTA.
- Dedicated weather data and travel-tip fields are not currently present in the destination dataset.

### Travel Packages (`/packages`)
- Implemented: all six packages with responsive cards, package overviews, duration/destination/per-person price filters, combined filtering, sorting, reset controls, and a no-results state.
- Accepts a validated destination slug, ISO travel date, and 1–12 traveller count from the homepage search. The destination preselects the filter; date and traveller values remain visible as planning context only and do not imply availability.
- Changing the destination filter keeps the date/traveller context. Reset clears the search context and all package filters.
- Full itinerary links open `/packages/:slug`; enquiry links preserve the selected package using `/booking?package=<slug>`.

### Package Detail (`/packages/:slug`)
- Implemented: data-driven package hero, destination tagline/link, price per person, duration, rating and review count, group limits, travel type, difficulty, highlights, and day-by-day itinerary.
- Included and excluded items are shown in separate labeled sections. Unknown slugs use the existing 404 page.
- Client-side estimator multiplies the listed per-person price by a traveller count constrained to the package group-size limits.
- The displayed total is indicative only; taxes, additional fees, availability, and booking are not verified or included.

### Booking Enquiry (`/booking`)
- Implemented: responsive validated form with name, email, phone, destination, optional package, travel date, traveller count, and additional requirements.
- Accepts validated `package`, `destination`, `date`, and `travellers` URL parameters for preselection.
- A valid submission displays a session-memory summary of all supplied details, with Edit Enquiry preserving form values and Browse Packages navigation.
- The confirmation is explicitly a demo: no enquiry has been sent, no booking has been made, and details are not stored.

### About (`/about`)
- The page currently contains sample brand-story and values copy. Team profiles and verified company information are not implemented.

### Experiences (`/experiences`)
- Displays six mock experience categories with links to the package listing.
- Dedicated experience detail pages and experience-specific package filtering are not implemented.

### Contact (`/contact`)
- Implemented: required name, valid email, subject, and bounded message validation with accessible inline errors.
- A valid submission displays an in-memory summary; Edit Message preserves values and Return to Homepage navigates to `/`.
- Demo only: no message is sent, no email is generated, and no details are stored. No real contact channels or office details are configured.

### Global Components
- Responsive navigation bar with mobile hamburger menu.
- Footer links only to existing routes; social profiles and policy pages are not configured.
- 404 Not Found page.

### Performance & Asset Loading (Phase 6D)
- Page routes load on demand with React `lazy` and an accessible Suspense fallback; Navbar, Footer, and the shared 404 behavior remain available.
- The production JavaScript entry chunk decreased from **645.96 kB (196.24 kB gzip)** to **225.23 kB (70.41 kB gzip)**: **65.1% smaller minified** and **64.1% smaller gzip**. Route modules are separate; the homepage adds a 165.09 kB (53.47 kB gzip) route chunk when visited.
- Booking/contact React Hook Form and Zod code is shared in a 123.23 kB (37.34 kB gzip) chunk and is not loaded on unrelated routes.
- Existing Unsplash images use responsive `srcset` candidates. Below-the-fold images load lazily; homepage and detail-page hero images load eagerly with high priority. Aspect-ratio containers reserve image space, and image failures use branded fallbacks.

### SEO, Accessibility & Visual Polish (Phase 6E)
- Route-specific page titles and meta descriptions cover the home page, listings, destination and package details, Experiences, About, Contact, Booking, and 404; detail pages use existing images for Open Graph previews.
- No canonical URL or `og:url` is emitted because no production domain is configured. Metadata updates in the client, so prerendering or server rendering may be needed for reliable indexing by crawlers that do not execute JavaScript.
- Added a skip-to-main link, visible keyboard focus, accessible mobile-menu focus containment and Escape handling, reduced-motion support, linked form errors, and contrast refinements.
- Browser verification covered route metadata, all six destination and package detail slugs, booking/contact form errors, keyboard navigation, reduced motion, and the 390, 768, 1024, and 1440px viewport widths without horizontal overflow on the tested routes.

### Final Regression & Local Release (Phase 6F)
- The production preview passed direct-load and browser-refresh checks for 20 routes: the home page, destination/package listings and all 12 detail pages, Experiences, About, Contact, Booking, and an unknown-route 404.
- Responsive overflow checks passed on all 20 routes at 390, 768, 1024, and 1440px. Verified package filters individually and combined, all sort modes, reset and empty states, homepage search query handling, destination/package booking preselection, mobile navigation keyboard behavior, form validation/confirmation/edit flows, and all six package estimator bounds and totals.
- Forced image-request failure showed the accessible image fallback. Booking/contact confirmations continue to state accurately that nothing is sent, booked, or stored.
- Final `npm run build`, `npm run lint`, and `git diff --check` pass. The current production entry bundle is **227.27 kB minified (71.02 kB gzip)**; `dist/` is generated locally and ignored by Git.
- No application JavaScript errors were observed. The deliberate image-fallback test produces expected failed image requests; Motion may log an informational reduced-motion warning during reduced-motion checks.

---

## 11. Development Roadmap

| Phase | Milestone                                              | Status         |
|-------|--------------------------------------------------------|----------------|
| 0     | Project scaffold and dependency setup                  | ✅ Complete    |
| 1     | Documentation and development rules                    | ✅ Complete    |
| 2     | Design system, components, routing, types, mock data   | ✅ Complete    |
| 3     | Premium homepage                                       | 🔄 In Progress |
| 4     | Destinations and destination detail pages              | 🔄 In Progress |
| 5     | Packages and booking enquiry                            | ✅ Complete    |
| 6     | Experiences, About and Contact pages              | 🔄 In Progress |
| 6B    | Functional consistency and navigation                  | ✅ Complete    |
| 6C    | Technical cleanup and configuration                    | ✅ Complete    |
| 6D    | Route and asset performance optimization               | ✅ Complete    |
| 6E    | SEO, accessibility and visual polish                    | ✅ Complete    |
| 6F    | Final regression testing and local release preparation | ✅ Complete    |
| 7     | Trip planner and functional interactions                | 🔲 Planned    |
| 8     | Responsive testing, optimisation and bug fixing        | 🔲 Planned    |
| 9     | GitHub and deployment                                  | 🔲 Planned    |
| 10    | Final client demonstration                             | 🔲 Planned    |

Phase 5 is complete: booking/contact integration, package listing, package details, and the client-side price estimator are implemented and verified. Final package checks on 27 November 2026 covered all six routes, combined filters and sorting, booking preselection, and responsive widths of 390, 768, 1024, and 1440 pixels.

**Deadline:** Saturday, 28 November 2026, 10:00 AM IST.

---

## 12. Known Limitations

- **No backend:** All data is static demo/mock data. No real bookings, payments, or reservations occur.
- **No authentication:** There is no user login or account system.
- **No payment processing:** Any pricing displayed is for demonstration purposes only.
- **No real email delivery or booking persistence:** Booking and contact confirmations are client-side and in memory only; no enquiry or message is sent, no booking is made, and details are not persisted.
- **No real-time availability:** Package and destination availability is not connected to a live inventory system.
- **Image sourcing:** Destination, package, and hero photography uses external Unsplash URLs. Responsive delivery and visual fallbacks are implemented, but images still require a network connection; confirm licensing and attribution before a public business launch.
- **Homepage JavaScript:** The homepage still loads its Motion animation code when visited. Route splitting defers this code on non-home routes; no animation library or other dependency was removed.
- **Search metadata:** Route metadata is set client-side. No canonical URLs are configured until a production domain is known; prerendering or server rendering may improve indexing across crawlers.
- **Deployment:** The local production preview supports direct SPA routes, but the eventual hosting platform still needs its React Router SPA fallback configured. No deployment configuration or live deployment has been created.

---

## 13. Future Improvements

The following enhancements are outside the current MVP scope but would be valuable for a production deployment:

- Backend API integration (destinations, packages, user accounts).
- Real booking and payment processing (e.g., Stripe).
- CMS integration for content management (e.g., Sanity, Contentful).
- Real email delivery for enquiry forms (e.g., Resend, SendGrid).
- User authentication.
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

Phase 6F local release verification: the production preview passed direct navigation and refresh on all application routes. The latest main JavaScript entry is **227.27 kB minified (71.02 kB gzip)**. The generated `dist/` directory is ignored by Git; no deployment has been performed.

### Preview Build Locally

```bash
npm run preview
```

Serves the `dist/` output at `http://localhost:4173` for local verification before deployment.

### Recommended Hosting Platforms

| Platform   | Notes                                                    |
|------------|----------------------------------------------------------|
| Vercel     | Vite build deployment; configure an SPA rewrite for React Router routes. |
| Netlify    | Drag-and-drop `dist/` folder or Git-connected CI/CD.     |
| GitHub Pages | Requires `base` configuration in `vite.config.ts`.    |

### Vercel Deployment (Recommended)

1. Push the repository to GitHub.
2. Import the repository at [vercel.com](https://vercel.com).
3. Vercel auto-detects Vite. Because the app uses React Router, configure an SPA rewrite to `/index.html` so direct visits and refreshes on app routes resolve.
4. Set build command to `npm run build` and output directory to `dist`.
5. No environment variables are currently required by the frontend.

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

*This README is a living document and must be updated alongside every development phase. Last updated: Phase 6F — Final regression testing and local release preparation.*
