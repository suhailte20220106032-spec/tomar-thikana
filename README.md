# Tomar Thikana (তোমার ঠিকানা)

A beautiful handcrafted gifts and jewelry e-commerce website built with Next.js 14.

## ✨ Features

- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🛍️ Product catalog with category filtering
- 📝 Custom order form
- 📧 Contact page with contact information
- 📖 About page with brand story
- 🎭 Smooth animations and transitions
- 📱 Mobile-friendly navigation
- 🌙 Dark mode support (Tailwind configured)

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query
- **Notifications**: Sonner

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd tomar-thikana

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── custom-order/      # Custom order page
│   └── products/          # Products page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── ProductCard.tsx    # Product card
│   └── ui/                # shadcn/ui components
├── assets/                # Images and static assets
├── lib/                   # Utility functions
└── hooks/                 # Custom React hooks
```

## 🎯 Pages

- **Home** (`/`) - Hero section, featured products, testimonials
- **Products** (`/products`) - Product catalog with category filters
- **Custom Order** (`/custom-order`) - Custom order form
- **About** (`/about`) - Brand story and values
- **Contact** (`/contact`) - Contact form and information

## 🎨 Design System

The application uses a warm, handcrafted aesthetic with:
- Custom color palette (peach, cream, soft rose)
- Playfair Display for headings
- Inter for body text
- Smooth animations and transitions
- Card-based layouts with soft shadows

## 📝 Migration Notes

This project was migrated from Vite to Next.js 14. See [MIGRATION.md](./MIGRATION.md) for details about the migration process and changes made.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/47e780ff-ec84-4654-a35d-03f5886160f3) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
