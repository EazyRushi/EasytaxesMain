# Cloudflare Full Deployment Guide (Pages + Workers)

Deploy your entire application to Cloudflare:
- **Frontend**: Cloudflare Pages (static files)
- **API**: Cloudflare Workers (serverless email function)

No separate backend server needed!

## Prerequisites

1. **Cloudflare Account**: Sign up at https://dash.cloudflare.com/
2. **Wrangler CLI**: `npm install -g wrangler`

## Part 1: Deploy API Worker

### Step 1: Login to Cloudflare

```bash
npx wrangler login
```

### Step 2: Configure Email Service

The worker uses **MailChannels** (free for Cloudflare Workers) to send emails.

Alternatively, you can use:
- **Resend** (https://resend.com/) - 3,000 emails/month free
- **SendGrid** - 100 emails/day free
- **Gmail SMTP** (requires modifications)

### Step 3: Set Environment Variables

```bash
npx wrangler secret put EMAIL_USER
# Enter: contact@eazytaxes.com

npx wrangler secret put EMAIL_APP_PASSWORD
# Enter: your_password_if_needed
```

### Step 4: Deploy Worker

```bash
npx wrangler deploy
```

Your API will be available at: `https://eazytaxes-api.your-subdomain.workers.dev`

## Part 2: Deploy Frontend to Pages

### Step 1: Update Frontend Configuration

The frontend is already configured to work without `VITE_API_URL` (uses relative paths).

For Cloudflare Pages with Workers, no environment variable is needed if you configure routes correctly.

### Step 2: Deploy to Cloudflare Pages

#### Option A: Via Dashboard (Recommended)

1. Go to https://dash.cloudflare.com/ → **Workers & Pages**
2. Click **Create application** → **Pages** → **Connect to Git**
3. Select your repository
4. Configure build settings:
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist/public`
   - **Root directory**: (leave empty)
5. Click **Save and Deploy**

#### Option B: Via CLI

```bash
pnpm build
npx wrangler pages deploy dist/public --project-name=eazytaxes
```

### Step 3: Connect Worker to Pages

In Cloudflare dashboard:

1. Go to your **Pages project** → **Settings** → **Functions**
2. Add a **Worker route**:
   - Pattern: `/api/*`
   - Worker: `eazytaxes-api`

This routes all `/api/*` requests to your Worker.

## Alternative: Deploy Both Together

Update `wrangler.toml` to include Pages:

```toml
name = "eazytaxes-api"
main = "worker/index.js"
compatibility_date = "2026-01-26"

# Pages configuration
[site]
bucket = "./dist/public"

# Worker routes for API
[[routes]]
pattern = "*/api/*"
```

Then deploy with:
```bash
pnpm run deploy:cloudflare
```

## Verification

1. **Frontend**: Visit `https://eazytaxes.pages.dev` (or your custom domain)
2. **API Health Check**: `https://eazytaxes.pages.dev/api/health`
3. **Test Form**: Submit a job application

## Email Service Options

### Option 1: MailChannels (Recommended - Free)

Already configured in `worker/index.js`. No additional setup needed.

**Pros**:
- Free for Cloudflare Workers
- No API key required
- Reliable delivery

**Cons**:
- Requires SPF/DKIM DNS records for production

### Option 2: Resend (Alternative)

1. Sign up at https://resend.com/
2. Get API key
3. Update `worker/index.js`:

```javascript
async function sendEmail(env, { to, from, subject, text }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: from,
      to: [to],
      subject: subject,
      text: text
    })
  });
  
  return response;
}
```

4. Set secret:
```bash
npx wrangler secret put RESEND_API_KEY
```

### Option 3: SendGrid

Similar to Resend, use SendGrid API:

```bash
npx wrangler secret put SENDGRID_API_KEY
```

## Custom Domain

### For Pages

1. Go to Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Add your domain (e.g., `eazytaxes.com`)
4. Follow DNS configuration steps

### For Worker (if using separate subdomain)

1. Go to Worker → **Settings** → **Triggers**
2. Add custom domain (e.g., `api.eazytaxes.com`)

## Local Development

For local development with the Worker:

```bash
npx wrangler dev
```

This starts:
- Worker at `http://localhost:8787`
- You can test API endpoints locally

For the full app:
```bash
pnpm dev
```

## Troubleshooting

### Worker Not Receiving Requests

1. Check Worker route is configured: `/api/*`
2. Verify Worker is deployed: `npx wrangler deployments list`
3. Check Worker logs: `npx wrangler tail`

### Email Not Sending

1. Check Worker logs for errors
2. Verify email service credentials
3. For MailChannels, check SPF/DKIM records

### CORS Errors

The Worker already includes CORS headers. If issues persist:
1. Check browser console for specific error
2. Verify Worker is handling OPTIONS requests
3. Update `Access-Control-Allow-Origin` in worker code if needed

## Cost

- **Cloudflare Pages**: Free (unlimited requests, 500 builds/month)
- **Cloudflare Workers**: Free tier (100,000 requests/day)
- **MailChannels**: Free for Cloudflare Workers
- **Total**: $0/month 🎉

## Benefits of This Approach

✅ **Fully Serverless**: No servers to manage
✅ **Global CDN**: Fast worldwide
✅ **Zero Cost**: Everything on free tier
✅ **Auto-Scaling**: Handles traffic spikes automatically
✅ **Simple**: Single platform for everything
✅ **Reliable**: Cloudflare's 99.99% uptime

## Next Steps

1. Deploy Worker: `npx wrangler deploy`
2. Deploy Pages via Cloudflare dashboard
3. Configure Worker route in Pages settings
4. Test job application form
5. (Optional) Add custom domain
