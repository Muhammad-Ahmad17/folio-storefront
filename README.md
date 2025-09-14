# CORE Sports Wears - Folio Storefront

## Project Overview

A modern, responsive e-commerce storefront for CORE Sports Wears, specializing in bulk manufacturing and custom athletic apparel. Built with cutting-edge web technologies for optimal performance and user experience.

## Features

- 🏠 Landing page with hero carousel and product showcases
- 📱 Fully responsive design for all devices
- 🎨 Custom product categories (Football, Street Wears, Corporate Uniforms, Workwear)
- 💼 B2B focused with bulk order and customization capabilities
- 📞 Comprehensive contact and customer service pages
- 🔍 Product catalog with detailed specifications
- 🎯 Professional UI/UX with smooth animations

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd folio-storefront

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Development

The development server will start at `http://localhost:5173` with hot-reloading enabled.

## Technology Stack

This project is built with modern web technologies:

- **Build Tool**: Vite for fast development and optimized builds
- **Framework**: React 18 with TypeScript for type safety
- **UI Components**: shadcn/ui component library
- **Styling**: Tailwind CSS for utility-first styling
- **Routing**: React Router for client-side navigation
- **Icons**: Lucide React for consistent iconography

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── header.tsx     # Site navigation
│   ├── footer.tsx     # Site footer
│   └── ...           # Other components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── providers/         # Context providers
```

## Build & Deployment

```sh
# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Copyright © 2024 CORE Sports Wears. All rights reserved.
