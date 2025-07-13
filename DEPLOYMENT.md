# Deployment Guide

This guide will help you deploy the Scout Window Cleaning website to various platforms.

## 🚀 Vercel (Recommended)

### Prerequisites
1. Create a [Vercel account](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`

### Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/scout-site.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```
   Or connect your GitHub repository to Vercel for automatic deployments.

3. **Configure Environment Variables** (if needed)
   - Go to your Vercel dashboard
   - Navigate to Settings > Environment Variables
   - Add any API keys or configuration values

### Custom Domain Setup
1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

## 🌐 Netlify

### Prerequisites
1. Create a [Netlify account](https://netlify.com)

### Deployment Steps

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Connect your GitHub repository
   - Netlify will automatically detect Next.js and configure settings

3. **Environment Variables**
   - Go to Site settings > Environment variables
   - Add any required environment variables

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Email Service (if using Resend)
RESEND_API_KEY=your-resend-api-key

# Contact Form Email
CONTACT_EMAIL=hello@friday.work
```

## 📧 Email Integration

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Install: `npm install resend`
3. Update the contact API route:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In your API route
await resend.emails.send({
  from: 'Friday Window Cleaning <hello@friday.work>',
  to: ['hello@friday.work'],
  subject: 'New Quote Request',
  html: `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `
});
```

### Option 2: Nodemailer
1. Install: `npm install nodemailer`
2. Configure SMTP settings in your API route

## 🔍 SEO Optimization

### Google Analytics
1. Create a Google Analytics account
2. Replace `GA_MEASUREMENT_ID` in `app/layout.tsx` with your actual ID
3. Add your domain to Google Search Console

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain
3. Verify ownership (usually via DNS record)
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

## 🛡️ Security

### SSL Certificate
- Vercel and Netlify provide free SSL certificates
- Ensure HTTPS is enforced

### Security Headers
- Already configured in `vercel.json`
- Consider adding CSP headers if needed

## 📊 Performance Monitoring

### Vercel Analytics
- Enable in your Vercel dashboard
- Provides real-time performance metrics

### Core Web Vitals
- Monitor using Google PageSpeed Insights
- Optimize images and code splitting

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+ recommended)
   - Ensure all dependencies are installed
   - Review build logs for specific errors

2. **Image Optimization**
   - Ensure images are properly formatted
   - Use Next.js Image component for optimization

3. **API Routes**
   - Test locally first: `npm run dev`
   - Check Vercel function logs for errors

4. **Environment Variables**
   - Ensure all required variables are set
   - Restart deployment after adding variables

## 📞 Support

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs) 