# Vercel Deployment Guide

Quick guide to deploy your Push Notification Mock PWA to Vercel.

## 🚀 Option 1: Deploy with Vercel CLI (Fastest)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → push-notifications (or your choice)
- **Directory?** → ./ (just press Enter)
- **Override settings?** → No

Your app will be deployed! You'll get a URL like: `https://push-notifications-xyz.vercel.app`

### Step 4: Deploy to Production

```bash
vercel --prod
```

This creates your production deployment.

---

## 🌐 Option 2: Deploy via GitHub (Recommended for Teams)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**

### Auto-Deployments

Every time you push to GitHub:
- `main` branch → Production deployment
- Other branches → Preview deployments

---

## 📋 Pre-Deployment Checklist

✅ Build completed successfully (`npm run build`)  
✅ All 16 URLs tested locally  
✅ Avatars loading correctly  
✅ Notifications animating properly  
✅ Real-time clock working  
✅ Content in `config/notifications.json` finalized  

---

## 🎯 After Deployment

### 1. Get Your URLs

After deployment, your 16 notification URLs will be:

```
https://your-app.vercel.app/personaA/1
https://your-app.vercel.app/personaA/2
https://your-app.vercel.app/personaA/3
https://your-app.vercel.app/personaA/4
... (and so on for personaB, C, D)
```

Use this script to list all URLs with your domain:

```bash
node scripts/list-urls.js https://your-app.vercel.app
```

### 2. Test All URLs

Open each URL in your browser and verify:
- Notification appears correctly
- Animation is smooth
- Avatar loads
- Background color is correct
- Time displays correctly

### 3. Generate QR Codes

Now that you have production URLs, generate QR codes:

1. Use [QR Code Generator](https://www.qr-code-generator.com/)
2. Enter each of your 16 URLs
3. Download and save with clear labels
4. Test scanning with your phone

### 4. Test on Mobile Devices

- Open URLs on iPhone
- Open URLs on Android
- Test in different browsers (Safari, Chrome)
- Verify full-screen experience

---

## 🔧 Vercel Configuration

The project includes:

- **vercel.json** - Deployment configuration
- **next.config.ts** - Next.js settings optimized for production
- **.vercelignore** - Files to exclude from deployment

All configuration is already set up!

---

## 🎨 Custom Domain (Optional)

### Add a Custom Domain

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your domain (e.g., `notifications.yourdomain.com`)
4. Update your DNS records as instructed by Vercel
5. SSL certificate is automatically provisioned

### Update QR Codes

After adding a custom domain, regenerate your QR codes with the new URLs.

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Free)

Vercel provides basic analytics:
- Page views
- Performance metrics
- Geographic data

Enable in: **Project Settings** → **Analytics**

### Check Deployment Logs

- Go to your project dashboard
- Click on any deployment
- View build logs and runtime logs

---

## 🔄 Updating Content

To update notification content after deployment:

1. Edit `config/notifications.json` locally
2. Test changes: `npm run dev`
3. Commit and push:
   ```bash
   git add config/notifications.json
   git commit -m "Update notification content"
   git push
   ```
4. Vercel auto-deploys (if using GitHub)
5. Or run `vercel --prod` (if using CLI)

Changes go live in ~30 seconds!

---

## 🐛 Troubleshooting

### Build Fails

**Check locally first:**
```bash
npm run build
```

If it builds locally but fails on Vercel:
- Check Node.js version (Vercel uses Node 18+ by default)
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`

### Images Not Loading

- DiceBear API is allowed in `next.config.ts`
- SVG support is enabled
- Check browser console for errors

### 404 Errors on Routes

- Next.js dynamic routes should work automatically
- Verify the `[persona]/[variant]` folder structure exists
- Check Vercel deployment logs

### Slow Performance

- Images are optimized by Next.js automatically
- DiceBear SVGs are cached
- Vercel CDN handles static assets

---

## 💰 Vercel Pricing

**Free Tier (Hobby) includes:**
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Preview deployments
- Analytics (basic)

Perfect for your UX testing scenario! No payment needed.

---

## 🎉 Quick Deployment Checklist

1. [ ] Run `npm run build` to verify build works
2. [ ] Install Vercel CLI: `npm install -g vercel`
3. [ ] Login: `vercel login`
4. [ ] Deploy: `vercel`
5. [ ] Deploy to production: `vercel --prod`
6. [ ] Test all 16 URLs
7. [ ] Generate QR codes
8. [ ] Test QR codes on mobile
9. [ ] Ready for UX testing!

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support

---

## 🚀 You're Ready!

Your app is now production-ready. Run `vercel --prod` to deploy!

