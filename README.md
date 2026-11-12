# Eventure — Luxury Wedding & Corporate Event Management

> Where vision becomes an experience.

Official Website: [https://myeventure.in/](https://myeventure.in/)  
Headquarters: **Kolkata, West Bengal, India**  
WhatsApp: **+91 97483 28654**  
Email: **info@myeventure.in**  

---

## 🌟 Overview
Eventure is a full-service luxury event management company based in Kolkata, specializing in multi-day destination weddings, high-stakes corporate summits, brand reveals, and private celebrations across India and globally.

This repository contains the complete React web application cloned and enhanced with:
- **100% Local Self-Sufficiency**: All images, media, client logos, and icons are stored in `public/` without any external hotlinking or dependencies on third-party CDNs.
- **Brand Transformation**: Custom Eventure identity with Kolkata headquarters, dedicated WhatsApp routing (`9748328654`), and updated copy throughout.
- **Full Multi-Page Suite**:
  - **Home (`/`)**: Hero cinematic showcase, brand marquee ticker, capability matrix, portfolio highlights, and interactive FAQ accordion.
  - **Weddings (`/weddings`)**: Destination wedding curation (Kolkata, Udaipur, Jaipur, Goa, Kerala), ritual staging, and hospitality workflows.
  - **Corporate (`/corporate`)**: Broadcast-grade summit productions, product launches, AV technical standards, and corporate enquiry workflows.
  - **Portfolio (`/portfolio`)**: 9 signature case studies with filterable categories (Weddings, Corporate, Destination).
  - **Gallery (`/gallery`)**: High-performance masonry gallery featuring 91+ images with category tabs and interactive full-screen Lightbox.
  - **About (`/about`)**: Company heritage, Kolkata studio, four pillars of excellence, and milestones.
  - **Contact (`/contact`)**: Luxury interactive brief form with WhatsApp auto-generation and direct contact cards.

---

## 🗄️ Database & Admin Panel Ready
All dynamic content is organized in clean data modules under `src/data/`:
- `siteData.js` — Global brand configuration, phone, WhatsApp, address, capabilities, and metrics.
- `portfolioData.js` — Case studies, locations, tags, and imagery.
- `galleryData.js` — Visual archive items with categories and tags.
- `servicesData.js` — Wedding and corporate service specifications.
- `faqsData.js` — Structured FAQ items.
- `clientsData.js` — Marquee client logos.

> **Note for Future SQL Integration**: These data modules can be connected directly to your SQL database/REST/GraphQL API endpoints from your upcoming admin panel without touching the page layouts.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
Generates the optimized production bundle in `dist/`.

---

## 🎨 Tech Stack
- **React 19**
- **Vite 6**
- **React Router 7**
- **Tailwind CSS & Vanilla Design System** (Luxury typography: *Cormorant Garamond* & *Inter*)
- **Lucide Icons**
