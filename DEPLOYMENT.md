# Vercel Deployment Guide

## Quick Start

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration
   - Click "Deploy"

3. **Your site will be live!** 🎉

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Project Structure

```
dyslexiabuddy-website/
├── index.html              # Main entry point (SPA)
├── css/
│   └── styles.css          # Custom styles
├── assets/
│   ├── js/
│   │   └── script.js       # JavaScript
│   └── images/             # Image assets
├── vercel.json             # Vercel configuration
├── .gitignore              # Git ignore rules
└── README.md               # Documentation
```

## Configuration Details

### vercel.json

The `vercel.json` file includes:

- **SPA Routing**: All routes redirect to `index.html` for client-side routing
- **Security Headers**: XSS protection, frame options, content type options
- **Cache Headers**: Long-term caching for static assets

### Environment Variables

No environment variables are required for this static site.

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your domain
4. Follow DNS configuration instructions

## Build Settings

- **Framework Preset**: Other
- **Build Command**: (leave empty - static site)
- **Output Directory**: `.` (root)
- **Install Command**: (leave empty)

## Troubleshooting

### Issue: 404 errors on refresh

**Solution**: The `vercel.json` already includes SPA routing configuration. If you still see 404s, ensure the rewrites section is correct.

### Issue: Assets not loading

**Solution**: Check that all asset paths in `index.html` are relative (e.g., `css/styles.css`, `assets/js/script.js`)

### Issue: Slow loading

**Solution**: 
- Assets are already configured with cache headers
- Consider using Vercel's Edge Network for faster global delivery
- Check image optimization (Vercel auto-optimizes images)

## Performance Optimization

- ✅ Static assets cached for 1 year
- ✅ Security headers configured
- ✅ SPA routing configured
- ✅ CDN delivery via Vercel Edge Network

## Monitoring

- Check deployment status in Vercel Dashboard
- View analytics in Vercel Dashboard → Analytics
- Monitor errors in Vercel Dashboard → Logs

## Rollback

If you need to rollback:

1. Go to Vercel Dashboard → Deployments
2. Find the previous working deployment
3. Click "..." → "Promote to Production"

## Support

For Vercel-specific issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

