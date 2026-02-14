# Spirit Wolf Market

A static e-commerce site deployed on GitHub Pages. This is a product showcase with purchase requests via GitHub Issues.

## Features

- **Product Catalog**: Browse products with images, descriptions, and pricing
- **Product Details**: View detailed product information
- **Purchase via GitHub Issues**: Click "Purchase" to create a pre-filled GitHub Issue for order requests
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Modern dark theme with neon green accents

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter (client-side routing)
- **State Management**: TanStack Query
- **Deployment**: GitHub Pages (static hosting)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Configuration

1. **GitHub Repository URL**: Update `GITHUB_REPO_URL` in [`client/src/hooks/use-products.ts`](client/src/hooks/use-products.ts) to point to your repository.

2. **Products Data**: Edit [`client/public/data/products.json`](client/public/data/products.json) to update product listings.

3. **Base Path**: If deploying to a different repository name, update the `base` property in [`vite.config.ts`](vite.config.ts).

## Deployment to GitHub Pages

### Automatic Deployment

1. Push your code to GitHub
2. Go to Settings → Pages → Source
3. Select "GitHub Actions" as the source
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy on pushes to main/master

### Manual Deployment

```bash
# Build the static site
npm run build

# The dist/ folder contains the static files
# Upload contents to any static hosting service
```

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── client/
│   ├── public/
│   │   ├── data/
│   │   │   └── products.json # Product data (static JSON)
│   │   └── images/           # Static images
│   └── src/
│       ├── components/       # React components
│       │   ├── ui/           # shadcn/ui components
│       │   ├── Navbar.tsx    # Navigation bar
│       │   └── ProductCard.tsx
│       ├── hooks/            # React hooks
│       │   ├── use-products.ts # Product data fetching
│       │   ├── use-toast.ts    # Toast notifications
│       │   └── use-mobile.tsx  # Mobile detection
│       ├── lib/              # Utility functions
│       ├── pages/            # Page components
│       │   ├── Home.tsx
│       │   ├── About.tsx
│       │   ├── ProductDetail.tsx
│       │   └── not-found.tsx
│       ├── App.tsx           # Main app component
│       ├── main.tsx          # Entry point
│       └── index.css         # Global styles
├── .deprecated/              # Old backend files (archived)
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## How It Works

### Static Data

Products are stored in a static JSON file (`client/public/data/products.json`). When the site loads, it fetches this file directly - no backend server needed.

### Purchase Flow

When a user clicks "Purchase" on a product:
1. A GitHub Issue URL is generated with pre-filled title and body
2. The URL includes product details, quantity, and a timestamp
3. The user is redirected to GitHub to submit the issue
4. The repository owner receives the purchase request as a GitHub Issue

### Example Purchase Issue

```
Title: Purchase Request: Spirit Wolf T-Shirt

Body:
## Purchase Request

**Product:** Spirit Wolf T-Shirt
**Product ID:** 1
**Price:** $29.99
**Quantity:** 1

---
*Request generated from Spirit Wolf Market*
```

## Customization

### Adding Products

Edit `client/public/data/products.json`:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "description": "Product description",
      "price": 2999,
      "imageUrl": "/images/product.png",
      "category": "Category",
      "stock": 10,
      "featured": true
    }
  ]
}
```

### Styling

- Global styles: `client/src/index.css`
- Tailwind config: `tailwind.config.ts`
- Theme colors are defined using CSS variables

## Development Notes

- This is a **static site** - no backend server required
- All data is stored in JSON files within the repository
- Purchase requests are handled via GitHub Issues API
- The `.deprecated/` folder contains the original backend code for reference

## License

MIT

---

*Built with sovereignty in mind. No tracking, no external dependencies for core functionality.*
