Completely created by Ai using # replit.md #Googlestich #copilot # FigmaMakegit 

## Overview

This is a full-stack web application built with React, Express, and PostgreSQL. The application appears to be an "Athlete Spotlight" platform that showcases athlete profiles, statistics, and achievements. It features a modern dark-themed UI with comprehensive athlete information display, leaderboards, and interactive elements.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

### Database Architecture
- **Database**: PostgreSQL (configured via Replit modules)
- **ORM**: Drizzle ORM with Neon Database serverless adapter
- **Schema Management**: Drizzle Kit for migrations
- **Connection**: @neondatabase/serverless for database connections

## Key Components

### Frontend Components
- **Main Pages**: StitchDesign (main athlete showcase page), NotFound
- **Section Components**: Multiple specialized sections for different athlete data displays
  - AchievementHighlights, AthleteProfiles, Leaderboard, Stats, VideoHighlights
  - MainContent, ProfileWrapper, PersonalizedRecommendations
- **UI Library**: Complete shadcn/ui component set including forms, navigation, data display

### Backend Components
- **Server Entry**: Express server with middleware for JSON parsing and logging
- **Routes**: Modular route registration system (currently minimal setup)
- **Storage**: Abstracted storage interface with in-memory implementation
- **Vite Integration**: Development-time Vite middleware for HMR

### Database Schema
- **Users Table**: Basic user schema with id, username, password
- **Validation**: Zod schemas derived from Drizzle tables
- **Type Safety**: Full TypeScript integration with inferred types

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle HTTP requests with JSON responses
3. **Business Logic**: Storage interface abstracts database operations
4. **Database**: Drizzle ORM provides type-safe database queries
5. **Response**: JSON data flows back through the chain to update UI

## External Dependencies

### Core Framework Dependencies
- React ecosystem (react, react-dom, @vitejs/plugin-react)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL adapter

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Lucide React for icons
- Custom fonts (Lexend via Google Fonts)

### Development Tools
- TypeScript with strict configuration
- Vite for fast development builds
- esbuild for production server bundling
- Replit-specific development plugins

### Database and Utilities
- @neondatabase/serverless for database connectivity
- date-fns for date manipulation
- clsx and tailwind-merge for conditional styling
- Various form handling libraries (@hookform/resolvers, react-hook-form)

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, web, and PostgreSQL 16 modules
- **Development Server**: Vite dev server with HMR on port 5000
- **Database**: PostgreSQL provisioned through Replit

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Autoscale deployment target on Replit
- **Port Configuration**: External port 80 maps to local port 5000

### Build Process
1. `npm run build` - Builds both frontend and backend
2. Frontend assets compiled to `dist/public`
3. Server code bundled to `dist/index.js`
4. `npm start` runs the production server

## Changelog

```
Changelog:
- June 18, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```