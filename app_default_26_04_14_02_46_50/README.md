# B Twelve: Ultra-Premium Luxury Wellness Boutique

B Twelve is a high-end, production-ready React/Next.js store-front architected with a "soft luxury" aesthetic. It simulates a $10,000+ custom Shopify build with smooth motions, glassmorphic UI, and Supabase authentication.

## ✨ Features

- **The Luxury Engine**: A custom CSS system based on cream, gold, and charcoal palettes.
- **Glassmorphic Header**: A sticky header with a backdrop blur effect that reacts to scrolling.
- **Moving Product Marquee**: A custom, high-performance infinite carousel for products.
- **Supabase Integration**: Fully functional login and signup logic for a premium membership experience.
- **Motion Controls**: Entrance animations using Intersection Observer and CSS transitions.
- **Responsive Luxury**: Completely mobile-optimized layout without sacrificing the boutique feel.

## 🛠️ Prerequisites

- **Node.js**: v18 or later
- **npm** or **yarn**
- **Supabase Account**: To enable the authentication logic.

## 🚀 Installation & Setup

1. **Clone or Download** this project to your local machine.
2. **Install Dependencies**:
    `npm install`
3. **Configure Environment Variables**:
   - Create a `.env.local` file in the root directory.
   - Copy the contents from `.env.example`.
   - Fill in your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from your Supabase Project Settings API tab.
4. **Enable Supabase Auth**:
   - In your Supabase Dashboard, go to **Authentication** > **Providers** and ensure **Email** is enabled.

## 💻 Running the Application

`npm run dev`

Open `http://localhost:3000` to view the store.

## 📁 Project Structure

- `app/`: Contains the Next.js App Router pages and global styles.
- `components/`: Modular UI components (Header, Hero, Marquee, AuthModal, etc.).
- `lib/`: Configuration for external services like Supabase.
- `public/`: Static assets and icons.

## 🎨 Design Values
- **Typography**: Paired *Cormorant Garamond* (Serif) with *Montserrat* (Sans) for editorial elegance.
- **Colorway**: `#FDFBF7` (Cream), `#D4AF37` (Gold), `#1A1A1A` (Charcoal).
- **Motion**: 1.2s cubic-bezier entrance animations for that "expensive" reveal feel.
