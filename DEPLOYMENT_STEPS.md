# 🚀 Deployment Steps for Scout Website

## Step 1: Deploy to Vercel (Recommended)

### Option A: Using Vercel CLI
1. **Login to Vercel**:
   ```bash
   npx vercel login
   ```
   Follow the prompts to authenticate with your Vercel account.

2. **Deploy**:
   ```bash
   npx vercel --yes
   ```

### Option B: Using Vercel Dashboard (Easier)
1. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/scout-site.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings

## Step 2: Configure Environment Variables

### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add these variables (if needed):
   ```
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   RESEND_API_KEY=your-resend-api-key
   CONTACT_EMAIL=hello@scout.work
   ```

## Step 3: Set Up Email Service

### Option A: Resend (Recommended)
1. **Sign up** at [resend.com](https://resend.com)
2. **Get API key** from dashboard
3. **Update API route** in `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   // In your POST handler:
   await resend.emails.send({
     from: 'Scout Window Cleaning <hello@scout.work>',
     to: ['hello@scout.work'],
     subject: 'New Quote Request',
     html: `
       <h2>New Quote Request</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Message:</strong> ${message}</p>
     `
   });
   ```

### Option B: SendGrid
1. **Sign up** at [sendgrid.com](https://sendgrid.com)
2. **Get API key** from dashboard
3. **Update API route** with SendGrid configuration

## Step 4: Set Up Google Analytics

1. **Create GA4 Property**:
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property for "Scout Window Cleaning"

2. **Get Measurement ID**:
   - Copy your GA4 Measurement ID (format: G-XXXXXXXXXX)

3. **Update Code**:
   - Replace `GA_MEASUREMENT_ID` in `app/layout.tsx` with your actual ID

## Step 5: Custom Domain (Optional)

1. **Purchase Domain**:
   - Buy domain (e.g., scoutwindowcleaning.com)

2. **Configure in Vercel**:
   - Go to project settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

3. **Update SEO Settings**:
   - Update `metadataBase` in `app/layout.tsx`
   - Update sitemap URL in `app/sitemap.ts`

## Step 6: Test Everything

1. **Test Contact Form**:
   - Fill out the contact form
   - Check if email is received
   - Verify success/error messages

2. **Test Images**:
   - Ensure all images load properly
   - Check mobile responsiveness

3. **Test SEO**:
   - Use Google PageSpeed Insights
   - Check meta tags with browser dev tools

## 🎯 Your Live Website

Once deployed, your website will be available at:
- **Vercel URL**: `https://scout-site-xxxxx.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (after setup)

## 📊 Monitor Performance

1. **Vercel Analytics**:
   - Enable in Vercel dashboard
   - Monitor Core Web Vitals

2. **Google Analytics**:
   - Track page views and conversions
   - Monitor quote request submissions

3. **Search Console**:
   - Submit sitemap
   - Monitor search rankings

## 🚨 Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Check Node.js version (18+)
   - Ensure all dependencies installed
   - Review build logs

2. **Image Errors**:
   - Verify image URLs are accessible
   - Check Next.js image configuration

3. **Email Not Working**:
   - Verify API keys are correct
   - Check email service configuration
   - Test with simple email first

4. **Domain Issues**:
   - Verify DNS settings
   - Wait for DNS propagation (up to 48 hours)

## 📞 Support

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Resend**: [resend.com/docs](https://resend.com/docs)

---

Your Scout website is now ready for production! 🎉 