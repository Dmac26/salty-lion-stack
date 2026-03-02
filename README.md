# Salty Lion Stack

Monorepo for freelance web development templates. Angular frontend + Nest.js backend + SQLite for fast, SEO-friendly, editable small-business sites (lawyers, doctors, tradesmen, etc.).

## Structure
- **angularFrontend** – Angular app (core single-page template with SSR via Universal)
- **nestBackend**     – Nest.js API (contact forms, future content editing, SQLite integration)
- **shared**          – Reusable components/utils (future)
- **admin**           – Future client dashboard module
- **docs**            – Additional documentation

## Quick Start

### Frontend (Angular)
```bash
cd angularFrontend
npm install
ng serve