# Deployment Guide

Quick guide to deploy your Push Notification Mock PWA to various hosting platforms.

## Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

### Deploy via CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts
4. Your app will be live at `https://your-app.vercel.app`

### Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

**Automatic deployments**: Every push to your main branch will trigger a new deployment.

## Option 2: Netlify

1. Build your app:
```bash
npm run build
```

2. Go to [netlify.com](https://www.netlify.com)
3. Drag and drop the `.next` folder
4. Or connect your Git repository for auto-deployment

### Netlify Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Option 3: Static Export (GitHub Pages, etc.)

For completely static hosting:

1. Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

2. Build:
```bash
npm run build
```

3. Deploy the `out` folder to any static host:
   - GitHub Pages
   - Firebase Hosting
   - AWS S3
   - Cloudflare Pages

## Option 4: Custom Server

### Using PM2 (Production)

1. Install PM2:
```bash
npm install -g pm2
```

2. Build:
```bash
npm run build
```

3. Start:
```bash
pm2 start npm --name "notification-pwa" -- start
```

4. Save process list:
```bash
pm2 save
pm2 startup
```

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t notification-pwa .
docker run -p 3000:3000 notification-pwa
```

## Environment Setup

No environment variables are needed! Everything is configured via the JSON file.

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

## SSL/HTTPS

All modern hosting platforms (Vercel, Netlify, etc.) provide automatic SSL certificates for free.

## Pre-Deployment Checklist

- [ ] Update `config/notifications.json` with final content
- [ ] Test all 16 URLs in development
- [ ] Add notification sound file (if desired)
- [ ] Test on multiple mobile devices
- [ ] Test on different browsers
- [ ] Verify all avatar images load correctly
- [ ] Check that animations work smoothly

## Post-Deployment Steps

1. **Test all URLs**
   - Visit each of the 16 notification screens
   - Test on mobile devices
   - Check different browsers

2. **Generate QR Codes**
   - Use your deployed domain URLs
   - Follow the QR_CODE_GUIDE.md instructions
   - Test each QR code before printing

3. **Performance Check**
   - Use Lighthouse in Chrome DevTools
   - Aim for 90+ performance score
   - Test loading speed on mobile networks

## Updating Content

After deployment, to update notification content:

1. Edit `config/notifications.json`
2. Commit and push changes
3. Auto-deployment will trigger (Vercel/Netlify)
4. Or manually redeploy if using other methods

Changes take effect immediately after deployment.

## Monitoring

### Vercel Analytics
Free analytics available in your Vercel dashboard:
- Page views
- Performance metrics
- Visitor data

### Google Analytics (Optional)

Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// Inside <body> tag:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## Troubleshooting

### Build fails
- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all imports are correct

### Images don't load
- Check image URLs are publicly accessible
- For static export, set `images.unoptimized: true`
- Use DiceBear URLs for guaranteed availability

### Slow loading
- Optimize images (use WebP format)
- Check network speed
- Use CDN for assets

## Scaling for Large Events

If expecting high traffic:

1. **Use Vercel Pro/Enterprise** - Better performance and analytics
2. **CDN** - Already included with Vercel/Netlify
3. **Preload assets** - Images and sounds
4. **Test load** - Use tools like Apache Bench

For your UX testing scenario with QR codes, the free tier of any platform will be more than sufficient!

## Cost Estimates

- **Vercel Free**: Unlimited bandwidth, 100GB/month
- **Netlify Free**: 100GB bandwidth/month
- **GitHub Pages**: Free, 1GB limit
- **CloudFlare Pages**: Free, unlimited bandwidth

For your use case (UX testing with limited users), **all free tiers are sufficient**.

## Support

- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/
- Next.js: https://nextjs.org/docs

