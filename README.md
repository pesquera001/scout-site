# Scout Window Cleaning Website

A modern, retro-styled website for Scout Window Cleaning services. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Retro Design**: Clean, minimalist aesthetic with custom typography
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Multi-page**: Home, Clients, and Shop pages with client-side routing
- **Contact Form**: Functional quote request form
- **Carousel**: Interactive project and product showcases

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
scout-site/
├── app/
│   ├── globals.css      # Global styles and custom CSS
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/
│   └── ui/
│       └── button.tsx   # Reusable Button component
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Design System

The website uses a custom color palette and typography:

### Colors
- `white-canvas`: #F9F8F5
- `worn-denim`: #708B91
- `prairie-clay`: #B9856F
- `saddle-dust`: #E5D3BD
- `smoke-tin`: #78736E

### Typography
- **Display**: Bebas Neue (headings)
- **Mono**: JetBrains Mono (navigation, labels)
- **Typewriter**: Courier Prime (body text, buttons)

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Customization

The website is built to be easily customizable:

1. **Colors**: Update the color variables in `tailwind.config.js` and `app/globals.css`
2. **Content**: Modify the content in `app/page.tsx`
3. **Styling**: Adjust classes in the components or add custom CSS
4. **Animations**: Modify Framer Motion animations in the components

## Deployment

The site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **AWS Amplify**

Simply connect your repository and the platform will automatically build and deploy your site. 