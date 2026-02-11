# Eazytaxes.com - Next.js Website

Professional tax services website built with React, TypeScript, and Express backend.

## 🚀 Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite
- TailwindCSS
- Wouter (routing)
- Framer Motion (animations)
- React Hook Form + Zod (forms)
- Lucide React (icons)

**Backend:**
- Express.js
- Nodemailer (Gmail SMTP)
- Multer (file uploads)

## 📁 Project Structure

```
├── client/              # Frontend React app
│   ├── src/
│   │   ├── pages/      # All page components
│   │   ├── components/ # Reusable components
│   │   └── lib/        # Utilities
├── backend/            # Express API server
└── db/                 # Database (if needed)
```

## 🎨 Design Theme

- **Primary Color:** #3FB9CB (Cyan)
- **Font:** Montserrat
- **Style:** Modern, clean, professional

## 📄 Key Pages

- `/` - Home
- `/tax-compliance` - Tax Compliance Services
- `/tax-resolution` - Tax Resolution Services
- `/cfo-advisory` - CFO Advisory Services
- `/valuations` - Valuation Services
- `/assurance-soc2` - Assurance & SOC 2
- `/us-formation` - US Formation Services
- `/questionnaire` - Tax Questionnaire (6 sections)
- `/contact` - Contact Form
- `/careers` - Careers Page
- `/auth` - Login/Signup (3-step with OTP)
- `/EazytaxesAdmin` - Admin Dashboard

## 🔧 Setup & Installation

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm start
```

## 🌐 Deployment

### Backend (Render.com)
1. Deploy backend to Render
2. Set environment variables:
   - `EMAIL_USER` = contact@eazytaxes.com
   - `EMAIL_APP_PASSWORD` = [your-app-password]

### Frontend (Cloudflare Pages)
1. Connect GitHub repo
2. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
3. Environment variable:
   - `VITE_API_URL` = [your-render-backend-url]

## 📧 Email Configuration

Forms use Gmail SMTP via backend:
- Contact form → `contact@eazytaxes.com`
- Job applications → `contact@eazytaxes.com` (with attachments)

## 🔐 Admin Features

- View questionnaire submissions
- Manage users
- View contact forms
- Dashboard with stats
- Sidebar navigation

## 📝 Forms

**Contact Form:**
- Name, Email, Phone, Message
- Backend validation
- Email notifications

**Job Application:**
- Personal info
- Resume upload
- Cover letter
- Backend processing

**Tax Questionnaire:**
- 6-section conditional form
- Progress tracking
- Save & continue

**Auth (Signup):**
- Step 1: Name, Email, Phone
- Step 2: Password, Confirm Password
- Step 3: OTP Verification
- Progress bar

## 🎯 Features

- Responsive design (mobile-first)
- Smooth animations
- Form validation
- File uploads
- Email notifications
- Admin dashboard
- Multi-step forms
- Cookie consent
- WhatsApp float button

## 🔗 Routes

All routes configured in `client/src/App.tsx`

## 📦 Dependencies

See `package.json` in client and backend folders.

## 🐛 Known Issues

- Render free tier sleeps after 15 min (first request may be slow)

## 📞 Support

For issues or questions, contact the development team.
