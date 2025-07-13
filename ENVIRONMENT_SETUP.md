# Environment Variables Setup

## Local Development

Create a `.env.local` file in your project root:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Contact Form Email
CONTACT_EMAIL=hello@friday.work

# Website URL (for SEO)
NEXT_PUBLIC_SITE_URL=https://fridayswindows.com
```

## Vercel Deployment

Add these environment variables in your Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable with its value

## Required Services

### 1. Google Analytics
- Sign up at [analytics.google.com](https://analytics.google.com)
- Create a new property for "Friday Window Cleaning"
- Copy your Measurement ID (format: G-XXXXXXXXXX)
- Replace `G-XXXXXXXXXX` with your actual ID

### 2. Email Service (Resend - Recommended)
- Sign up at [resend.com](https://resend.com)
- Get your API key from the dashboard
- Replace `re_xxxxxxxxxxxx` with your actual API key
- Update the contact API route to uncomment the email code

### 3. Custom Domain (Optional)
- Purchase domain (e.g., fridaywindowcleaning.com)
- Update `NEXT_PUBLIC_SITE_URL` with your domain
- Update `metadataBase` in `