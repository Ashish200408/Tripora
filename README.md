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
│   ├── favicon.svg          # Site favicon
│   └── icons.svg            # SVG icon sprite
├── src/
│   ├── assets/
│   │   └── hero.png         # Placeholder hero image (to be replaced)
│   ├── App.tsx              # Root application component (to be replaced with router)
│   ├── App.css              # Root component styles
│   ├── index.css            # Global styles and Tailwind imports
│   └── main.tsx             # Application entry point
├── .gitattributes
├── .gitignore
├── .oxlintrc.json           # Linter configuration
├── index.html               # HTML entry point
├── package.json
├── PROJECT_RULES.md         # Mandatory development rules
├── tsconfig.json            # Base TypeScript config
├── tsconfig.app.json        # App TypeScript config
├── tsconfig.node.json       # Node TypeScript config
└── vite.config.ts           # Vite configuration
```

> **Note:** The `src/` structure above reflects the current early-stage scaffold. As development progresses, subdirectories for `components/`, `pages/`, `data/`, `hooks/`, `utils/`, and `types/` will be added and documented here.

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

> **Status:** Routes are not yet configured. React Router DOM is installed and ready. The table below documents the planned routing structure.

| Route              | Page                  | Status    |
|--------------------|-----------------------|-----------|
| `/`                | Home                  | Planned   |
| `/destinations`    | Destinations Listing  | Planned   |
| `/destinations/:id`| Destination Detail    | Planned   |
| `/packages`        | Travel Packages       | Planned   |
| `/packages/:id`    | Package Detail        | Planned   |
| `/about`           | About Tripora         | Planned   |
| `/contact`         | Contact & Enquiry     | Planned   |
| `*`                | 404 Not Found         | Planned   |

---

## 9. Features Implemented

> **Status:** The project is in its initial scaffold phase. The Vite + React + TypeScript base has been set up and all planned dependencies have been installed. No Tripora-specific UI has been built yet.

### Foundation
- [x] Vite + React + TypeScript project scaffolded
- [x] Tailwind CSS v4 configured via Vite plugin
- [x] React Router DOM installed
- [x] React Hook Form + Zod validation installed
- [x] Motion animation library installed
- [x] Lucide React icon library installed
- [x] Oxlint code quality tooling configured
- [x] Project rules documented in `PROJECT_RULES.md`

---

## 10. Planned Pages & Functionality

### Home Page (`/`)
- Full-screen hero section with tagline and destination search bar.
- Featured destinations section.
- Featured travel packages section.
- Why Tripora section (trust signals and value propositions).
- Testimonials section.
- Newsletter subscription prompt.

### Destinations Listing (`/destinations`)
- Grid/list view of all available destinations.
- Filter by region, travel type, and budget range.
- Search by destination name.
- Each destination card links to its detail page.

### Destination Detail (`/destinations/:id`)
- Large hero image with destination name and highlights.
- Overview, weather, and travel tips.
- Related packages.
- Booking enquiry button linking to enquiry form.

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

| Phase | Milestone                                      | Status      |
|-------|------------------------------------------------|-------------|
| 0     | Project scaffold and dependency setup          | ✅ Complete  |
| 1     | Global layout: Navbar, Footer, routing         | 🔲 Planned  |
| 2     | Home page — hero, featured sections            | 🔲 Planned  |
| 3     | Destinations listing page with filters         | 🔲 Planned  |
| 4     | Destination detail page                        | 🔲 Planned  |
| 5     | Packages listing and detail pages              | 🔲 Planned  |
| 6     | Wishlist feature                               | 🔲 Planned  |
| 7     | About and Contact pages with form validation   | 🔲 Planned  |
| 8     | 404 page and polish                            | 🔲 Planned  |
| 9     | Production build validation and deployment     | 🔲 Planned  |

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

*This README is a living document and must be updated alongside every development phase. Last updated: Phase 0 — Initial scaffold.*
