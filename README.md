# 🛍️ Buffbolzen Shop - Professional E-Commerce Platform

A modern, fully-featured e-commerce shop built with Next.js 15, TypeScript, and Tailwind CSS. This professional shopping platform showcases unique products with a complete shopping experience including cart management, wishlist functionality, and a full checkout flow.

## ✨ Features

### 🏪 Core E-Commerce Functionality

- **Product Catalog**: Browse 37+ unique products across multiple categories
- **Advanced Search**: Real-time search with filtering and sorting options
- **Category Navigation**: Organized product categories with dedicated pages
- **Product Details**: Comprehensive product pages with image galleries, reviews, and specifications
- **Shopping Cart**: Full cart management with quantity controls and persistent storage
- **Wishlist**: Save favorite products for later with persistent storage
- **Checkout Flow**: Complete 3-step checkout process with order confirmation

### 🎨 Modern UI/UX

- **Responsive Design**: Optimized for all device sizes
- **Professional Styling**: Clean, modern interface with Tailwind CSS
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Accessibility**: Screen reader friendly with proper ARIA labels
- **Performance Optimized**: Next.js 15 with App Router for optimal loading

### 🛒 Shopping Experience

- **Discount Codes**: Support for discount codes (`kauf2zahl3`, `amogus`)
- **Price Calculations**: Automatic total calculations with discount application
- **Order Management**: Order confirmation with tracking information
- **Product Reviews**: Customer reviews with star ratings
- **Related Products**: Smart product recommendations

### 💾 State Management & Persistence

- **Zustand Store**: Lightweight state management for cart and wishlist
- **Local Storage**: Persistent cart and wishlist across browser sessions
- **Real-time Updates**: Instant UI updates for all shopping actions

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand with persistence
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Package Manager**: pnpm

## 📁 Project Structure

```
buffbolzen-shop/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── category/[category] # Dynamic category pages
│   │   ├── product/[id]        # Dynamic product pages
│   │   ├── checkout/           # Checkout process
│   │   ├── order-confirmation/ # Order success page
│   │   ├── wishlist/           # Wishlist page
│   │   ├── search/             # Search results page
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── CartSidebar.tsx     # Shopping cart sidebar
│   │   └── ProductCard.tsx     # Product display card
│   ├── store/                  # State management
│   │   ├── cartStore.ts        # Shopping cart state
│   │   └── wishlistStore.ts    # Wishlist state
│   ├── lib/                    # Utilities and data
│   │   └── data.ts             # Product data and utilities
│   └── types/                  # TypeScript definitions
│       └── index.ts            # Type definitions
├── data/                       # JSON data files
│   ├── products.json           # Product catalog
│   └── discounts.json          # Discount codes
└── public/
    └── images/
        └── products/           # Product images
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd buffbolzen-shop
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🎯 Key Features Explained

### Product Management

- **37 Unique Products**: Diverse catalog from fruits to innovative materials
- **Categories**: Auto-generated from product data
- **Search & Filter**: Advanced filtering by category, price range, and search terms
- **Sorting**: Multiple sorting options (price, name, newest)

### Shopping Cart

- **Persistent Storage**: Cart contents saved to localStorage
- **Quantity Management**: Add, remove, update quantities
- **Real-time Totals**: Automatic price calculations
- **Discount Support**: Apply and remove discount codes

### Checkout Process

1. **Customer Information**: Shipping address and contact details
2. **Payment Method**: Multiple payment options (Credit Card, PayPal, Bank Transfer)
3. **Order Confirmation**: Final review and terms acceptance

### Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for tablets
- **Desktop Experience**: Full-featured desktop interface
- **Touch Friendly**: Large touch targets for mobile users

## 🔧 Configuration

### Available Discount Codes

- `kauf2zahl3`: Buy 2, pay for 3 (factor: 1.5)
- `amogus`: €15 discount (amount: 15)

### Customization

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Products**: Update `data/products.json` to change product catalog
- **Discounts**: Modify `data/discounts.json` for discount codes

## 🎨 Design System

### Color Palette

- **Primary**: Blue (`#3B82F6`)
- **Secondary**: Purple (`#8B5CF6`)
- **Success**: Green (`#10B981`)
- **Warning**: Yellow (`#F59E0B`)
- \*\*Error
