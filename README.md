# McWIN iTECH - Silicon Project

A modern Next.js application for McWIN iTECH, a leading digital marketing and IT services company based in Perth, Western Australia.

## 🚀 Overview

This is a full-stack web application built with Next.js 16, React 19, and TypeScript, showcasing McWIN iTECH's comprehensive digital services including software development, digital marketing, and IT solutions.

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework (via Bootstrap)
- **Bootstrap 5** - UI component library

### Key Libraries
- **GSAP** - Animation library
- **Swiper** - Carousel/slider component
- **Lottie React** - Animation rendering
- **React Icons** - Icon library
- **Parallax libraries** - Scroll effects and animations
- **Masonry layouts** - Grid layouts for galleries

### Backend/Services
- **Nodemailer** - Email sending functionality
- **PHPMailer** - Backend email handling (via PHP scripts)

## 📁 Project Structure

```
src/
├── app/
│   ├── (landings)/           # Main landing pages
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog section
│   │   ├── brand/          # Branding services
│   │   ├── build/          # Development services
│   │   ├── contact/         # Contact pages
│   │   ├── grow/           # Marketing services
│   │   ├── hireresource/    # Hire resource page
│   │   └── scale/          # Scaling solutions
│   └── layout.tsx          # Root layout
├── components/
│   ├── navbar/             # Navigation components
│   └── common/             # Shared components
├── mailer/                 # Email functionality
└── hooks/                  # Custom React hooks
```

## 🌟 Key Features

### Service Pages
- **Software Development**: Custom software, web apps, mobile apps, e-commerce
- **Digital Marketing**: SEO, SEM, paid marketing, social media marketing
- **Branding**: Brand strategy, UI/UX design, visual identity
- **IT Solutions**: Scalable solutions for business growth

### Interactive Elements
- Smooth scroll animations with GSAP
- Parallax effects
- Interactive galleries with masonry layouts
- Contact forms with email integration
- Responsive design for all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PHP (for email functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mcwinaus-silicon
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Configuration

The project includes email functionality using:
- **Nodemailer** (Node.js backend)
- **PHPMailer** (PHP backend)

Configure email settings in:
- `src/mailer/hireResourceSendMail.php`
- Environment variables for SMTP settings

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Design System

The application uses:
- **Bootstrap 5** for responsive grid system and components
- **Custom animations** with GSAP for smooth interactions
- **Modern UI patterns** with parallax scrolling effects
- **Consistent color scheme** matching McWIN iTECH branding

## 📱 Responsive Design

Fully responsive design that works across:
- Desktop (1200px+)
- Tablet (768px-1199px)
- Mobile (320px-767px)

## 🔧 Development Guidelines

- Use TypeScript for type safety
- Follow ESLint configuration for code quality
- Use Prettier for consistent formatting
- Component-based architecture
- SEO-optimized with proper meta tags

## 📊 Performance

- **Next.js 16** with App Router for optimal performance
- **Image optimization** built-in
- **Code splitting** automatic
- **Static generation** where applicable
- **Client-side rendering** for interactive components

## 🌐 Deployment

The application is configured for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## 📞 Contact

For any questions about this project, contact the McWIN iTECH team.

---

**McWIN iTECH** - Your Digital Partner in Perth, Western Australia
🌐 [www.mcwinitech.com.au](https://www.mcwinitech.com.au)
