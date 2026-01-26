# Cloudflare Pages + Railway Deployment Guide

This guide explains how to deploy your application with:
- **Frontend**: Cloudflare Pages (static files, global CDN)
- **Backend**: Railway (Node.js + PostgreSQL)

## Important Note

**Cloudflare Pages only hosts static files**. Your backend (Express.js API, database, email functionality) must be deployed separately to Railway.

## Part 1: Deploy Backend to Railway

### Step 1: Deploy to Railway

1. Go to https://railway.app/ and login
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect and deploy

### Step 2: Configure Environment Variables

In Railway dashboard, add these variables:

```env
NODE_ENV=production
EMAIL_USER=contact@eazytaxes.com
EMAIL_APP_PASSWORD=your_gmail_app_password
DATABASE_URL=postgresql://...  # Auto-added if you add PostgreSQL
FRONTEND_URL=https://your-site.pages.dev
```

### Step 3: Add PostgreSQL Database

1. In Railway project, click "New" → "Database" → "PostgreSQL"
2. `DATABASE_URL` will be automatically added to your service

### Step 4: Get Railway URL

After deployment, copy your Railway URL:
```
https://your-app-name.up.railway.app
```

## Part 2: Deploy Frontend to Cloudflare Pages

### Step 1: Update Environment Configuration

Create `client/.env.production` with your Railway URL:

```env
VITE_API_URL=https://your-app-name.up.railway.app
```

**Replace** `your-app-name.up.railway.app` with your actual Railway URL from Step 1.

### Step 2: Configure Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** → **Create application** → **Pages**
3. Connect to your GitHub repository
4. Configure build settings:
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist/public`
   - **Root directory**: (leave empty)

### Step 3: Add Environment Variables in Cloudflare

In Cloudflare Pages project settings → **Environment variables**:

```
VITE_API_URL = https://your-app-name.up.railway.app
```

### Step 4: Deploy

Click "Save and Deploy". Cloudflare will:
1. Install dependencies with `pnpm`
2. Run `pnpm build`
3. Deploy `dist/public` to their global CDN

### Step 5: Update Railway CORS

Go back to Railway and add your Cloudflare Pages URL to environment variables:

```env
FRONTEND_URL=https://your-site.pages.dev
```

Then **redeploy** the Railway service to apply CORS changes.

## Cloudflare Pages Settings

### Build Configuration

If Cloudflare doesn't auto-detect, manually set:

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | `pnpm build` |
| Build output directory | `dist/public` |
| Root directory | (empty) |
| Environment variables | `VITE_API_URL=https://your-railway-url.up.railway.app` |

### Redirects (SPA Routing)

Cloudflare Pages should auto-detect the `_redirects` file in `client/public/`:

```
/*  /index.html  200
```

This ensures client-side routing works correctly.

## Verification

1. **Frontend**: Visit your Cloudflare Pages URL (e.g., `https://your-site.pages.dev`)
2. **Backend**: Test API at `https://your-railway-url.up.railway.app/api/health`
3. **Integration**: Try submitting a job application form

## Local Development

For local development:
```bash
pnpm dev
```

The app works without environment variables:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- API calls use relative paths when `VITE_API_URL` is not set

## Troubleshooting

### Build Fails on Cloudflare

**Error**: "Missing entry-point to Worker script"
- **Solution**: Cloudflare is trying to use Wrangler (Workers). Make sure build output directory is set to `dist/public` in Cloudflare Pages settings.

### CORS Errors

If you see CORS errors:
1. Verify `FRONTEND_URL` is set in Railway with your Cloudflare Pages URL
2. Redeploy Railway service
3. Check that the URL matches exactly (with/without `www`, `https://`)

### API Calls Fail (404)

1. Check `VITE_API_URL` in Cloudflare Pages environment variables
2. Verify Railway backend is running
3. Test Railway API directly: `https://your-railway-url.up.railway.app/api/health`

### Build Output Not Found

If Cloudflare says "No output found":
1. Verify build command is `pnpm build`
2. Check build output directory is `dist/public`
3. Look at build logs to ensure build succeeded

## Custom Domain

### Cloudflare Pages
1. Go to your Pages project → **Custom domains**
2. Click "Set up a custom domain"
3. Follow DNS configuration steps

### Railway
1. Go to Settings → Networking
2. Add custom domain for API
3. Update `VITE_API_URL` in Cloudflare to use custom domain

## Cost Estimate

- **Cloudflare Pages**: Free (unlimited requests, 500 builds/month)
- **Railway**: $0-5/month
  - Free tier: 500 hours/month
  - Includes PostgreSQL
- **Total**: $0-5/month

## Why This Approach?

- **Performance**: Cloudflare's global CDN for frontend
- **Reliability**: Cloudflare's 99.99% uptime
- **Cost**: Both have generous free tiers
- **Scalability**: Each service scales independently
- **Simple**: Standard deployment process
