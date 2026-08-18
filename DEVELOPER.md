# Artistry Events at Nassau County Museum of Art
## Developer Documentation

**Project:** `artistry-temp`
**Framework:** Next.js 14 (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS
**Deployment:** Vercel


## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Getting Started](#3-getting-started)
4. [Environment Variables](#4-environment-variables)
5. [Project Structure](#5-project-structure)
6. [Routing and Pages](#6-routing-and-pages)
7. [Data Layer](#7-data-layer)
8. [Components](#8-components)
9. [Styling System](#9-styling-system)
10. [API Routes](#10-api-routes)
11. [Third-Party Integrations](#11-third-party-integrations)
12. [SEO and Metadata](#12-seo-and-metadata)
13. [Performance and Analytics](#13-performance-and-analytics)
14. [Security](#14-security)
15. [Deployment](#15-deployment)
16. [Adding New Content](#16-adding-new-content)


## 1. Project Overview

Artistry Events is a marketing and lead-generation website for a luxury event venue located at the Nassau County Museum of Art in Roslyn, NY. It showcases four event categories (weddings, corporate, social, celebrate life), allows visitors to view PDF brochures, and captures event inquiries through a protected contact form.

The site is content-heavy. Almost all copy and asset references live in typed data files under `src/data/`, which keeps pages and components free of hardcoded strings and makes content updates straightforward.


## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14.2.35 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.4.1 |
| Animation | Framer Motion | 12.x |
| Icons | Lucide React | 1.x |
| PDF viewer | pdfjs-dist + react-pageflip | 3.11.174 / 2.0.3 |
| Rate limiting | Upstash Redis + @upstash/ratelimit | latest |
| Email / lead flow | n8n webhook | external |
| Spam protection | Google reCAPTCHA v3 | via react-google-recaptcha |
| Scheduling | react-calendly | 4.4.0 |
| Analytics | Google Analytics 4 + Vercel Analytics | external |
| Deployment | Vercel | latest |
| Image optimization | Sharp + Next.js Image | built-in |


## 3. Getting Started

### Prerequisites

- Node.js 18 or later
- npm (comes with Node)
- A copy of `.env.local` (see Section 4)

### Installation

```bash
git clone <repo-url>
cd Artistry
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

### Path alias

The `@/*` alias maps to `src/*`. Use it everywhere instead of relative paths.

```ts
import { SITE } from '@/data/site'
import PageHero from '@/components/ui/PageHero'
```


## 4. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values. Never commit `.env.local`.

| Variable | Description | Where to get it |
|---|---|---|
| `N8N_USERNAME` | Basic auth username for n8n webhook | n8n dashboard |
| `N8N_PASSWORD` | Basic auth password for n8n webhook | n8n dashboard |
| `N8N_LEAD_WEBHOOK_URL` | Full webhook URL to post contact form data | n8n dashboard |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v3 public site key | Google Cloud Console |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v3 secret key (server-side) | Google Cloud Console |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (G-XXXXXXXX) | GA4 dashboard |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL for rate limiting | Upstash console |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token | Upstash console |

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. All others are server-only.


## 5. Project Structure

```
Artistry/
├── public/
│   └── media/
│       ├── images/
│       │   ├── home/            # Homepage section images
│       │   ├── about/           # History timeline images
│       │   ├── events/
│       │   │   ├── wedding/     # Wedding venue and gallery images
│       │   │   ├── corporate/   # Corporate event images
│       │   │   └── Social Events/
│       │   ├── logo/            # Artistry SVG logo
│       │   ├── Tardis Catering/ # Catering and cafe photos
│       │   └── fidi/            # FIDI Hospitality venue images
│       ├── pdfs/                # wedding.pdf, corporate.pdf, social.pdf
│       └── video/               # Hero video files (mp4/webm)
├── scripts/                     # Utility scripts
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root layout: fonts, metadata, analytics
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global base styles
│   │   ├── sitemap.ts           # XML sitemap (auto-generated)
│   │   ├── robots.ts            # robots.txt (auto-generated)
│   │   ├── api/
│   │   │   └── contact-form/
│   │   │       └── route.ts     # POST handler for contact form
│   │   ├── events/
│   │   │   ├── page.tsx
│   │   │   ├── weddings/page.tsx
│   │   │   ├── corporate/page.tsx
│   │   │   ├── social/page.tsx
│   │   │   └── celebrate-life/page.tsx
│   │   ├── about/
│   │   │   ├── history/page.tsx
│   │   │   ├── location/page.tsx
│   │   │   └── site-map/page.tsx
│   │   ├── brochures/
│   │   │   ├── wedding/page.tsx
│   │   │   ├── corporate/page.tsx
│   │   │   └── social/page.tsx
│   │   ├── tardis-catering/page.tsx
│   │   ├── tardis-cafe/page.tsx
│   │   ├── fidi/page.tsx
│   │   ├── vendors/page.tsx
│   │   ├── thank-you/
│   │   │   ├── layout.tsx       # Strips navbar/footer
│   │   │   └── page.tsx
│   │   └── sitemap/page.tsx     # HTML sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                  # Reusable presentational components
│   │   │   ├── PageHero.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── AutoImageSlider.tsx
│   │   │   ├── WeddingLocationsSection.tsx
│   │   │   ├── WeddingEnhancementsSection.tsx
│   │   │   ├── SiteMapLocationsSection.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── VideoHero.tsx
│   │   ├── CutoutParallax.tsx
│   │   ├── VenueSticky.tsx
│   │   ├── StatsSection.tsx
│   │   ├── EventHighlights.tsx
│   │   ├── TardisSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── MenuBrochureClient.tsx
│   │   ├── MenuBrochureEmbed.tsx
│   │   └── GoogleAnalytics.tsx
│   ├── data/                    # All content and configuration data
│   │   ├── site.ts              # Site-wide constants (name, URL, contact, socials)
│   │   ├── navigation.ts        # Nav menu tree
│   │   ├── home.ts              # Homepage content
│   │   ├── events.ts            # All event content (largest file)
│   │   ├── about.ts             # History, directors, locations
│   │   ├── tardis.ts            # Cafe menu and photos
│   │   ├── fidi.ts              # FIDI venues and values
│   │   └── vendors.ts           # Preferred vendor list
│   ├── lib/
│   │   ├── utils.ts             # cn() helper (clsx + tailwind-merge)
│   │   └── rate-limit.ts        # Upstash rate limiter configuration
│   └── types/
│       └── global.d.ts          # Global TypeScript declarations
├── .env.local.example
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── vercel.json
```


## 6. Routing and Pages

All routes use the Next.js App Router. Every `page.tsx` exports a React Server Component by default.

| URL | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Homepage: video hero, venue showcase, stats, event highlights, contact |
| `/events` | `app/events/page.tsx` | Event type selection (4 cards) |
| `/events/weddings` | `app/events/weddings/page.tsx` | Wedding packages, locations, enhancements, gallery |
| `/events/corporate` | `app/events/corporate/page.tsx` | Corporate event options and gallery |
| `/events/social` | `app/events/social/page.tsx` | Bar/Bat Mitzvahs, Communions, Milestones |
| `/events/celebrate-life` | `app/events/celebrate-life/page.tsx` | Memorial / celebration of life events |
| `/about/history` | `app/about/history/page.tsx` | Property history timeline |
| `/about/location` | `app/about/location/page.tsx` | Director bios and venue location gallery |
| `/about/site-map` | `app/about/site-map/page.tsx` | Interactive venue site map |
| `/tardis-catering` | `app/tardis-catering/page.tsx` | Tardi's Catering services |
| `/tardis-cafe` | `app/tardis-cafe/page.tsx` | Tardi's Cafe menu and photos |
| `/fidi` | `app/fidi/page.tsx` | FIDI Hospitality group overview |
| `/vendors` | `app/vendors/page.tsx` | Preferred vendors directory |
| `/brochures/wedding` | `app/brochures/wedding/page.tsx` | PDF viewer: wedding brochure |
| `/brochures/corporate` | `app/brochures/corporate/page.tsx` | PDF viewer: corporate brochure |
| `/brochures/social` | `app/brochures/social/page.tsx` | PDF viewer: social brochure |
| `/thank-you` | `app/thank-you/page.tsx` | Post-form submission confirmation |
| `/sitemap` | `app/sitemap/page.tsx` | HTML sitemap page |
| `/api/contact-form` | `app/api/contact-form/route.ts` | POST endpoint only |

### Redirects

Old static site URLs are redirected to new routes via `next.config.mjs`. Add new redirects there if you restructure routes.

### The `/thank-you` route

`app/thank-you/layout.tsx` overrides the root layout to hide the navbar and footer. This is intentional so users get a clean confirmation page after submitting a form.


## 7. Data Layer

All content lives in `src/data/`. Pages import from here rather than embedding content inline. This is the primary place to make copy and content changes.

### `site.ts`

The `SITE` constant is the single source of truth for identity and contact information.

```ts
SITE.name            // "Artistry"
SITE.fullName        // Full venue name
SITE.url             // "https://www.eventsatartistry.com"
SITE.contact.phone
SITE.contact.email
SITE.address.street
SITE.social.instagram
SITE.social.facebook
SITE.catering.name   // Tardi's Catering
SITE.parent.name     // FIDI Hospitality
```

Import this everywhere you need contact info or branding strings. Never hardcode them in components or pages.

### `navigation.ts`

Defines the navbar menu tree. Each item has a label, optional href, and optional children array. The Navbar component reads this file directly. Adding or renaming nav items happens here.

### `home.ts`

Exports:
- `venueImages` (3 images for the venue showcase slider)
- `eventHighlights` (4 cards linking to event type pages)
- `venueStats` (4 stats: acreage, guest capacity, event spaces, events per year)
- `tardisSectionImages` (3 catering showcase images)

### `events.ts`

The largest data file. Contains all event-related types and content.

Key exported types:

```ts
EventPackage       // Package with name, price, items, optional inheritsFrom
EventEnhancement   // Add-on with name, description, items
EventLocation      // Venue space with capacity, images, floor plan, gallery
GalleryImage       // { src, alt }
```

Key exported data:

- `weddingLocations` (8 venue spaces)
- `weddingCeremonyPackages` (2 ceremony-only packages)
- `weddingReceptionPackages` (4 packages, Package 2-4 inherit from previous)
- `weddingEnhancements` (8 add-on categories)
- `weddingGallery` (38 images)
- `corporateEventTypes`, `corporateGallery`
- `socialEventTypes`, `socialPackages`, `socialGallery`
- `celebrateLifePackages`, `celebrateLifeGallery`
- `eventsPageCards` (4 cards for the events index page)

Package inheritance: `inheritsFrom` is a string key. The page component resolves this to build the cumulative included items list for display.

### `about.ts`

Exports:
- `timeline` (5 historical periods with year, title, description, optional image)
- `directors` (3 team members with name, title, bio, photo)
- `locations` (8 venue spaces, mirrors wedding locations)
- `sitemapSections` (navigation groups for the HTML sitemap page)

### `tardis.ts`

Exports:
- `cafeMenu` (array of menu categories, each with items)
- `cafePhotoStrip` (8 cafe photos)

### `fidi.ts`

Exports:
- `fidiVenues` (3 FIDI Hospitality properties)
- `fidiValues` (4 company values)

### `vendors.ts`

Exports:
- `vendorCategories` (10 categories)
- `vendors` (10 preferred vendor entries with name, category, description, optional website)


## 8. Components

### Layout

**`Navbar.tsx`**
Fixed header. Detects scroll position and changes appearance after the user scrolls past a threshold. Renders desktop nav from `navigation.ts` with hover dropdowns. On mobile, renders a hamburger menu with full-screen overlay. Logo links to `/`.

**`Footer.tsx`**
Dark full-width footer. Pulls contact info from `SITE`. Includes navigation links, social media icons, and legal text.

### UI (reusable)

**`PageHero.tsx`**
Standard page hero used on all interior pages. Props: `label`, `title`, `description`, `backgroundImage`, optional `overlay` opacity. Use this for every new page rather than building a one-off hero.

**`SectionHeader.tsx`**
Centered section heading with a small label above the title and an optional description below. Used throughout to introduce content sections.

**`ImageGallery.tsx`**
Responsive masonry-style grid gallery. Accepts a `GalleryImage[]` array. Handles lazy loading.

**`AutoImageSlider.tsx`**
Auto-advancing image carousel used for venue photo showcases. Accepts images array and optional interval.

**`WeddingLocationsSection.tsx`**
Renders the list of wedding venue spaces from `weddingLocations`. Each location expands to show capacity, features, and a gallery.

**`WeddingEnhancementsSection.tsx`**
Renders the 8 wedding enhancement categories as an accordion or grid, sourced from `weddingEnhancements`.

**`SiteMapLocationsSection.tsx`**
Used on `/about/site-map`. Displays venue spaces with interactive elements.

**`ContactForm.tsx`**
Client component. Multi-field event inquiry form. Submits to `/api/contact-form`. Includes a hidden honeypot field, reCAPTCHA token injection, and timestamps the start of the session to detect bots. On success, redirects to `/thank-you`.

### Feature components

**`VideoHero.tsx`**
Full-viewport video background for the homepage. Lazy-loads the video source. Falls back gracefully if the video cannot be loaded.

**`CutoutParallax.tsx`**
Parallax section with a cutout text overlay effect. Parallax is disabled on mobile via a media query check.

**`VenueSticky.tsx`**
Sticky image column that advances through venue photos as the user scrolls past adjacent text sections.

**`StatsSection.tsx`**
Four-stat display sourced from `venueStats` in `home.ts`.

**`EventHighlights.tsx`**
Four-card section on the homepage linking to each event type. Sourced from `eventHighlights` in `home.ts`.

**`TardisSection.tsx`**
Catering showcase section on the homepage.

**`ContactSection.tsx`**
Wraps `ContactForm` with a heading and CTA text. Used at the bottom of most pages.

**`MenuBrochureClient.tsx` / `MenuBrochureEmbed.tsx`**
Client components that render PDF brochures using pdfjs-dist and react-pageflip. `MenuBrochureClient` is the interactive page-flip viewer. `MenuBrochureEmbed` is a simpler embed wrapper. The PDF.js worker is copied to `public/` at build time (configured in `next.config.mjs`) so it can be served as a static file.

**`GoogleAnalytics.tsx`**
Injects the GA4 `gtag.js` script. Rendered in the root layout. Only fires if `NEXT_PUBLIC_GA_ID` is set.


## 9. Styling System

### Tailwind custom theme

Defined in `tailwind.config.ts`. Never hardcode hex values in components; always use these tokens.

**Colors:**

| Token | Value | Usage |
|---|---|---|
| `primary` | `#335654` | Primary green (buttons, accents) |
| `primary-dark` | `#223228` | Darker green for hover states |
| `primary-light` | `#2d5282` | Lighter variant |
| `slick` | `#d2b371` | Gold accent color |
| `cream` | `#F5F0E8` | Off-white background |
| `charcoal` | `#1a1a1a` | Near-black for text |

**Fonts:**

| Token | Font | Use |
|---|---|---|
| `font-gilda` | Gilda Display | Headings, display text |
| `font-montserrat` | Montserrat | Body copy, UI labels |

Both are loaded via Next.js `next/font/google` in the root layout and exposed as CSS variables (`--font-gilda`, `--font-montserrat`).

**Responsive display sizes** (use these for hero headlines):

| Token | Description |
|---|---|
| `text-display-xl` | Largest hero text, clamp() responsive |
| `text-display-lg` | Large display text |
| `text-display-md` | Medium display text |
| `text-display-section` | Section-level display text |

**Animations:**

| Token | Description |
|---|---|
| `animate-fade-up` | Fade and translate upward on entry |
| `animate-fade-in` | Fade in only |

### Utility function

`src/lib/utils.ts` exports `cn()`, which merges Tailwind class strings safely using `clsx` and `tailwind-merge`. Always use `cn()` when conditionally applying Tailwind classes.

```ts
import { cn } from '@/lib/utils'
cn('base-class', condition && 'conditional-class', 'another-class')
```

### Global styles

`src/app/globals.css` sets base styles: smooth scrolling, font antialiasing, and CSS variable declarations. Avoid adding component styles here; use Tailwind utilities in JSX instead.


## 10. API Routes

### POST `/api/contact-form`

File: `src/app/api/contact-form/route.ts`

This is the only API route. It receives contact form submissions and forwards them to an n8n webhook.

**Spam and abuse protections (in order):**

1. Honeypot field: if `website` field is populated, the request is silently rejected
2. Time check: if less than 5 seconds elapsed since session start, request is rejected
3. reCAPTCHA v3 token: verified server-side against Google's API; score threshold enforced
4. Rate limit: Upstash Redis allows 2 submissions per day per IP address

**Form fields accepted:**

```
fullName (required)    company            phone
email (required)       eventType          eventStartDate
eventStartTime         numberOfGuests     howDidYouHear
message                additionalDates    pageReference
sessionStart           attachments
```

**Flow on success:**

1. All validations pass
2. Payload sent to `N8N_LEAD_WEBHOOK_URL` with Basic Auth (`N8N_USERNAME` / `N8N_PASSWORD`)
3. Returns `{ success: true }` with status 200

**Flow on failure:**

Returns `{ success: false, message: "..." }` with appropriate HTTP status (400, 429, 500).

**IP detection:**

Checks `x-real-ip`, `cf-connecting-ip`, then `x-forwarded-for` headers in that order. Falls back to `"anonymous"` if none found.


## 11. Third-Party Integrations

### n8n (lead capture)

The contact form posts to an n8n workflow via webhook. n8n handles routing leads to CRM, email, or other destinations. If the n8n webhook URL changes, update `N8N_LEAD_WEBHOOK_URL` in environment variables.

### Google reCAPTCHA v3

- Public site key: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (used in `ContactForm.tsx` to generate a token client-side)
- Secret key: `RECAPTCHA_SECRET_KEY` (used server-side in the API route to verify the token)
- reCAPTCHA v3 is invisible; it assigns a score. Submissions below the score threshold are rejected.

### Upstash Redis (rate limiting)

`src/lib/rate-limit.ts` configures a rate limiter using `@upstash/ratelimit`. The API route calls this before processing a submission. Configure the Upstash database URL and token in environment variables.

### Google Analytics 4

`GoogleAnalytics.tsx` is rendered in the root layout. GA4 tracks page views automatically. The Measurement ID is `NEXT_PUBLIC_GA_ID`.

### Vercel Analytics and Speed Insights

`@vercel/analytics` and `@vercel/speed-insights` components are rendered in the root layout. They activate automatically on Vercel deployments. No configuration needed.

### react-calendly

Available as a dependency for embedding a Calendly scheduling widget. Used where direct scheduling links are needed.

### PDF.js

The `pdfjs-dist` library renders PDF brochures in the browser. Because PDF.js requires a web worker, `next.config.mjs` copies the worker file to `public/` at build time using a webpack `CopyPlugin`. The worker URL is set in `MenuBrochureClient.tsx` to `/pdf.worker.min.js`.


## 12. SEO and Metadata

### Metadata

Each page exports a `metadata` object or a `generateMetadata` function. The root layout in `app/layout.tsx` sets the default metadata with site name, description, Open Graph, and Twitter Card tags.

```ts
export const metadata: Metadata = {
  title: { default: 'Artistry Events', template: '%s | Artistry Events' },
  description: '...',
  openGraph: { ... },
  twitter: { card: 'summary_large_image', ... },
}
```

Interior pages override title and description. Always set both when creating a new page.

### Structured data (JSON-LD)

The homepage includes `EventVenue` and `LocalBusiness` JSON-LD structured data for rich Google results. Add JSON-LD to other pages by rendering a `<script type="application/ld+json">` tag in the page component.

### XML sitemap

`app/sitemap.ts` exports a function that Next.js uses to auto-generate `/sitemap.xml`. When you add a new public page, add its URL to this file.

### robots.txt

`app/robots.ts` auto-generates `/robots.txt`. Currently disallows:

- `/thank-you`
- `/brochures/`
- `/sitemap`
- `/api/`

If you add pages you don't want indexed, add them here.


## 13. Performance and Analytics

### Image optimization

Use `next/image` for all images. The component handles WebP/AVIF conversion, lazy loading, and responsive srcset. Set `width` and `height` props on every image to prevent layout shift.

Allowed remote image domains (configured in `next.config.mjs`):
- `placehold.co` (development placeholders)
- `images.unsplash.com`

Add new remote domains to `images.remotePatterns` in `next.config.mjs` if needed.

### Video

The homepage video in `public/media/video/` is loaded lazily and referenced directly. Keep video files compressed (aim for under 10MB for the web).

### Fonts

Fonts are loaded with `next/font/google` which inlines font CSS and preloads font files. Do not add `<link>` tags for Google Fonts manually.


## 14. Security

### HTTP security headers

Configured in `next.config.mjs`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Contact form protections

Three layers guard the API route against spam and abuse:

1. Honeypot field (invisible to real users; bots fill it)
2. Minimum session time check (5 seconds)
3. reCAPTCHA v3 server-side score verification
4. Upstash Redis rate limit (2 submissions per IP per day)

### Environment variable hygiene

- Never prefix secrets with `NEXT_PUBLIC_`. Only public keys (GA ID, reCAPTCHA site key) should be browser-accessible.
- The `.gitignore` excludes `.env.local`. Verify this before every commit.


## 15. Deployment

The project deploys to Vercel. `vercel.json` in the project root contains any Vercel-specific configuration.

### Deploy steps

1. Push to the configured Git branch (check Vercel project settings for which branch triggers production)
2. Vercel runs `npm run build` automatically
3. On success, the new deployment goes live

### Build-time behavior

`next.config.mjs` copies the PDF.js worker file to `public/` during the webpack build. This happens automatically; no manual step needed.

### Environment variables on Vercel

Set all variables from Section 4 in the Vercel project's Environment Variables settings. Separate values for Production, Preview, and Development environments if credentials differ.


## 16. Adding New Content

### Add a new page

1. Create `src/app/<route>/page.tsx`
2. Export a `metadata` object with `title` and `description`
3. Add the route to `src/app/sitemap.ts`
4. Add a nav link to `src/data/navigation.ts` if it should appear in the menu

### Add a new event type

1. Add data to `src/data/events.ts` following the existing type structure
2. Create `src/app/events/<new-type>/page.tsx`
3. Add a card to `eventsPageCards` in `events.ts`
4. Update `navigation.ts` if needed

### Update contact information

Edit `src/data/site.ts`. The `SITE` constant is imported everywhere contact details appear.

### Add or update a vendor

Edit `src/data/vendors.ts`. Add to `vendors[]` with the matching category key from `vendorCategories`.

### Add images

Place images in the appropriate subfolder under `public/media/images/`. Reference them with a path starting from `/media/images/...`. Use `next/image` with `width`, `height`, and a descriptive `alt` text.

### Add a brochure PDF

1. Place the PDF in `public/media/pdfs/`
2. Update or create the corresponding brochure page in `src/app/brochures/`
3. Use `MenuBrochureClient` or `MenuBrochureEmbed` to render it

### Update navigation

Edit `src/data/navigation.ts`. The Navbar and Footer both consume this file. The structure is a flat array of items with optional `children` arrays for dropdown menus.
