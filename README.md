# PawPure - Premium Pet Nutrition Website

A modern, production-ready Next.js website for a premium pet food brand. Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern UI/UX** - Beautiful, premium design with smooth animations
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Performance** - Optimized images, static generation, and fast page loads
- 🎭 **Animations** - Smooth animations using Framer Motion
- 🔍 **SEO Friendly** - Proper metadata and semantic HTML
- 🎯 **Type Safe** - Full TypeScript support

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **next/image** - Optimized images

## Project Structure

```
pets/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── cat-food/          # Cat food category page
│   ├── contact/           # Contact page
│   ├── dog-food/          # Dog food category page
│   ├── small-animals/     # Small animals category page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── CategoryCard.tsx  # Category showcase card
│   ├── ProductCard.tsx   # Product display card
│   ├── FeatureCard.tsx   # Feature showcase card
│   ├── TestimonialCard.tsx
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── Logo.tsx          # Brand logo
├── lib/                  # Utility functions
│   ├── utils.ts         # Utility functions (cn)
│   └── data.ts          # Mock data
└── public/              # Static assets
```

## Getting Started

### Installation

```bash
npm install
```

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

## Pages

- **Home** (`/`) - Hero section, categories, features, products, testimonials, CTA
- **Dog Food** (`/dog-food`) - Product grid for dog food
- **Cat Food** (`/cat-food`) - Product grid for cat food
- **Small Animals** (`/small-animals`) - Product grid for small animal food
- **About** (`/about`) - Company story and values
- **Contact** (`/contact`) - Contact form and information

## Design System

### Colors

- **Primary**: Green (`#48bb78`) - Natural, healthy feeling
- **Secondary**: Amber (`#d4a574`) - Warm, friendly
- **Background**: Soft cream (`#fefcf9`)
- **Text**: Dark gray (`#2d3748`)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large, readable
- **Body**: Medium weight, comfortable line height

## Customization

### Update Brand Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #48bb78;
  --secondary: #d4a574;
  /* ... */
}
```

### Add Products

Edit `lib/data.ts` to add or modify products:

```typescript
export const dogProducts = [
  {
    name: "Product Name",
    description: "Product description",
    image: "https://...",
    price: "$49.99",
  },
  // ...
];
```

### Modify Animations

Edit component files to customize Framer Motion animations. All animations use smooth, premium timing functions.

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy!

The site will be automatically optimized and deployed.

## License

This project is created for demonstration purposes.
# pets-food
