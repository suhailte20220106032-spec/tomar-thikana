# Tomar Thikana - Next.js

This project has been successfully migrated from Vite + React to Next.js 14 with the App Router.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (modular)
│   │   ├── globals.css        # Global styles
│   │   ├── about/
│   │   │   └── page.tsx       # About page
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact page
│   │   ├── custom-order/
│   │   │   └── page.tsx       # Custom order page
│   │   ├── products/
│   │   │   └── page.tsx       # Products page
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Navigation component (uses next/link)
│   │   ├── Footer.tsx         # Footer component
│   │   ├── ProductCard.tsx    # Product card component
│   │   ├── TestimonialCard.tsx # Testimonial card component
│   │   ├── HeroSection.tsx    # Hero section with carousel
│   │   ├── FeaturesSection.tsx # Features section
│   │   ├── FeaturedProductsSection.tsx # Featured products section
│   │   ├── TestimonialsSection.tsx # Testimonials section
│   │   ├── CTASection.tsx     # Call-to-action section
│   │   └── ui/                # shadcn/ui components
│   ├── assets/                # Static assets (legacy)
│   ├── lib/                   # Utility functions
│   └── hooks/                 # Custom React hooks
├── public/                    # Public static files
│   └── assets/                # Images (hero, products, etc.)
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── package.json               # Dependencies

```

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Migration Changes

### Key Changes from Vite to Next.js:

1. **Routing**: Migrated from `react-router-dom` to Next.js App Router
   - `BrowserRouter`, `Routes`, `Route` → File-based routing in `src/app/`
   - `Link` from `react-router-dom` → `Link` from `next/link`
   - `useLocation` → `usePathname` from `next/navigation`

2. **Configuration**:
   - Replaced `vite.config.ts` with `next.config.js`
   - Updated `tsconfig.json` for Next.js
   - Changed PostCSS config to CommonJS format

3. **File Structure**:
   - Removed `index.html`, `main.tsx`, `App.tsx`
   - Created `src/app/layout.tsx` as root layout
   - Moved pages to `src/app/[route]/page.tsx` structure

4. **Styling**:
   - Moved global CSS to `src/app/globals.css`
   - Kept all Tailwind configurations intact
   - Preserved all custom CSS variables and animations

5. **Components**:
   - Updated Navigation to use `usePathname` hook
   - Updated all internal links to use Next.js `Link` component
   - Client components marked with `"use client"` directive

6. **Dependencies**:
   - Removed: `vite`, `react-router-dom`, Vite plugins
   - Added: `next` (14.2.0)
   - Updated ESLint to v8 for Next.js compatibility

## Features Preserved

✅ All UI components and styling unchanged  
✅ Tailwind CSS with custom design tokens  
✅ shadcn/ui components  
✅ React Query for state management  
✅ Form handling with react-hook-form  
✅ Toast notifications with Sonner  
✅ All page functionality (Home, Products, Custom Order, About, Contact)  
✅ Responsive navigation with mobile menu  
✅ Product filtering and display  
✅ Form submissions  
✅ Custom 404 page

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

## Notes

- The application maintains the same UI/UX as the original Vite version
- All functionality has been preserved during migration
- Static assets remain in the `src/assets/` directory
- The app is ready for deployment on Vercel or any Next.js-compatible platform
