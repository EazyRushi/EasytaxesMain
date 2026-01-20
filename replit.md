# Eazytaxes - Professional Tax & Advisory Services Website

## Overview

Eazytaxes is a premium corporate website for a US-based professional services firm offering tax, compliance, assurance, and advisory services. The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed to present a modern, professional image while providing service information and contact functionality.

The site serves as a marketing and lead generation platform with multiple service verticals (Tax & Compliance, Tax Resolution, Assurance & SOC 2, CFO & Advisory, Valuations, and US Formation & Banking), where some services link to external subdomains.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for page transitions and interactions
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Icons**: Lucide React

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Pattern**: Simple REST endpoints defined in shared/routes.ts with Zod schemas for validation

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: shared/schema.ts (shared between frontend and backend)
- **Migrations**: Managed via drizzle-kit with migrations output to /migrations

### Build System
- **Frontend Build**: Vite with React plugin
- **Backend Build**: esbuild bundling with selective dependency externalization
- **Development**: tsx for TypeScript execution, Vite dev server with HMR
- **Production**: Static files served from dist/public, server from dist/index.cjs

### Project Structure
```
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # UI components (shadcn/ui + custom)
│   │   ├── pages/       # Page components (Home, Contact, TaxCompliance, etc.)
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Database operations
│   └── db.ts            # Database connection
├── shared/              # Shared code between frontend/backend
│   ├── schema.ts        # Drizzle database schemas
│   └── routes.ts        # API contract definitions with Zod
└── migrations/          # Database migrations
```

### Design System
- **Typography**: Inter and Plus Jakarta Sans fonts
- **Color Palette**: Professional financial theme with slate/navy base, emerald accent (#059669)
- **Spacing**: 8px grid system
- **Components**: Premium, bespoke styling avoiding template patterns

## External Dependencies

### Database
- **PostgreSQL**: Primary data store (connection via DATABASE_URL environment variable)
- **connect-pg-simple**: Session storage (available but not currently used)

### Third-Party Services
- External service subdomains referenced but not integrated:
  - resolution.eazytaxes.com (Tax Resolution)
  - soc.eazytaxes.com (Assurance & SOC 2)
  - cfo.eazytaxes.com (CFO & Advisory)
  - valuations.eazytaxes.com (Valuations)
  - formation.eazytaxes.com (US Formation & Banking)

### Key NPM Packages
- **@tanstack/react-query**: Server state management
- **drizzle-orm / drizzle-zod**: Database ORM and validation
- **framer-motion**: Animation library
- **react-hook-form**: Form state management
- **zod**: Runtime type validation
- **wouter**: Client-side routing

### Replit-Specific Plugins
- @replit/vite-plugin-runtime-error-modal
- @replit/vite-plugin-cartographer (dev only)
- @replit/vite-plugin-dev-banner (dev only)