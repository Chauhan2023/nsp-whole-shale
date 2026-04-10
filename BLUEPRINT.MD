# BLUEPRINT — Multi-Vertical Business Architecture (React)

## Project Overview

The website is pivoting from a single-vertical grocery store to a **Multi-Vertical Conglomerate Portal**. The application will feature a central corporate landing page connecting to **four creatively distinct business divisions**.

---

## The Divisions (Page Architecture)

| Division | Route Location | Focus |
|---|---|---|
| **Makhana & Agro Products** | `/agro` | Wholesale agricultural products, farming networks, and bulk deliveries. |
| **Real Estate & Properties** | `/real-estate` | Commercial workspaces, premium residences, and land acquisition. |
| **Trading, Import & Export** | `/trading` | Global logistics, import sourcing, and export destinations. |
| **Financial Loans** | `/loan` | Business loans, farming credit, and application processes. |

---

## Implementation Tasks

### TASK 1 — Navigation Refactor
- [ ] Update `<Navbar />` to include all dedicated division links.
- [ ] Implement responsive dropdown menus or direct links for all vertical access on mobile view.

### TASK 2 — Corporate Home Page Overhaul
- [ ] Redesign `Home.jsx` to be a corporate landing structure.
- [ ] Replace the grocery grid with **4 large feature cards** (Agro, Real Estate, Trading, Loans).
- [ ] Add smooth CSS hover states directing users to those routes.

### TASK 3 — Makhana & Agro Products Page
- [ ] Develop `src/pages/AgroProducts.jsx`.
- [ ] Build a creative, earthy design tailored to food/farming.
- [ ] Retain existing mock data arrays for product listings where necessary.

### TASK 4 — Real Estate & Properties Page
- [ ] Develop `src/pages/RealEstate.jsx`.
- [ ] Use luxurious/structural placeholders representing properties.
- [ ] Create specialized cards mapping pseudo property data (prices, square footage).

### TASK 5 — Trading & Import/Export Page
- [ ] Develop `src/pages/Trading.jsx`.
- [ ] Construct an industrial/global aesthetic.
- [ ] Highlight a text-driven "Our Network" or "Supported Regions" section.

### TASK 6 — Loans Page
- [ ] Develop `src/pages/Loan.jsx`.
- [ ] Structure a clean, professional, trustworthy layout (blue/white tones typically).
- [ ] Build an "Application Steps" visual guide (1. Apply, 2. Approve, 3. Fund).

### TASK 7 — Application Router & Assembly
- [ ] Redefine `<Routes>` in `App.jsx` pointing to (`/agro`, `/real-estate`, `/trading`, `/loan`).
- [ ] Add page transitions dynamically rendering distinct aesthetics.

---

## Technical Specifications & Rules

- **Design Creativity**: Ensure each vertical page feels uniquely styled while sharing the global navbar and footer. Use CSS modularity to prevent structural overlap.
- **Placeholder Imaging**: Stick to high-quality unsplash URLs (`https://images.unsplash.com/...`) for all division covers to mimic premium quality.
- **Routing**: Ensure zero broken links across internal `react-router-dom` links.
