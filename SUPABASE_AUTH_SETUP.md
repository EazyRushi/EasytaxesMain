# Supabase Auth Setup Guide

## Step 1: Get Supabase Credentials

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: **`eazytaxes`** (or whatever you named it)
3. Go to **Settings** > **API**
4. Copy the following:
   - **Project URL** (looks like: `https://qalzoxpidiohatbapllt.supabase.co`)
   - **anon public** key (a long string starting with `eyJ...`)

## Step 2: Update .env File

Replace the placeholders in your `.env` file:

```env
VITE_SUPABASE_URL=https://qalzoxpidiohatbapllt.supabase.co
VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
```

## Step 3: Enable Google OAuth in Supabase (Optional but Recommended)

1. In Supabase Dashboard, go to **Authentication** > **Providers**
2. Find **Google** in the list
3. Toggle it **ON**
4. Click **Save**

**That's it!** Unlike the Passport.js approach, you don't need to create a Google Cloud project manually. Supabase handles this for you in development.

### For Production (Later):
When you're ready to deploy, you'll configure a custom Google OAuth app:
1. Create a Google Cloud project
2. Get Client ID and Secret
3. Add them to Supabase's Google provider settings
4. Add your production URL to allowed redirect URLs

## Step 4: Test the Setup

1. Restart your dev server: `pnpm dev`
2. Go to `http://localhost:5000/auth`
3. Try:
   - **Email/Password signup** - Creates a user in Supabase Auth
   - **Google signin** - Opens Google OAuth flow

## Important Notes

- **Email Verification**: By default, Supabase requires email verification. You can disable this in:
  **Authentication** > **Settings** > **Email Auth** > Uncheck "Enable email confirmations"
  
- **Users Table**: Supabase creates users in `auth.users` table. Our existing `public.users` table can be used for additional user data if needed.

- **Database Connection**: We're still using the direct PostgreSQL connection for questionnaire data via Drizzle ORM. Supabase Auth handles authentication separately.

## Troubleshooting

### "Invalid API key"
- Make sure you copied the **anon/public** key, not the service_role key
- Ensure there are no extra spaces in the `.env` file

### Google signin not working
- Make sure Google provider is enabled in Supabase dashboard
- Check browser console for errors

### Redirect issues
- Supabase automatically allows `localhost` urls in development
- For production, add your domain in **Authentication** > **URL Configuration**
