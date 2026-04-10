# BLUEPRINT — Wholesale React Website (Latest Version)

## Project Overview

Build a **fully responsive, functional Single Page Application (SPA)** for a wholesale business using the **latest version of React (React 18+)**. The website must be properly structured with modern reusable functional components, React Router for navigation, and adhere to modern deployment standards. The visual design and layout must be inspired by the reference website below.

**Reference Website:** https://superfood.qodeinteractive.com/grocery-home/

---

## Tech Stack & Architecture (Latest React Setup)

| Element              | Choice / Instruction                                        |
|----------------------|-------------------------------------------------------------|
| **Framework**        | React Latest via Vite (`npm create vite@latest . -- --template react`) |
| **Routing**          | React Router DOM v6+ (`npm install react-router-dom`)       |
| **Styling**          | Vanilla CSS or Modules (No heavy frameworks initially)      |
| **State Management** | React Context API & Modern Hooks (`useState`, `useEffect`)  |
| **Data Source**      | Mock JSON data `mockData.js` (Simulated backend)            |

---

## Folder Structure (Modern React standard)

```
/src
├── assets/            # Images, icons, and global CSS (App.css, index.css)
├── components/        # Reusable UI Pieces
│   ├── Navbar/
│   ├── Footer/
│   ├── ProductCard/
│   ├── CategoryCard/
│   └── SectionHeader/
├── pages/             # Route Views
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Category.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── context/           # AppContext for global state (e.g., Cart context)
├── data/              # mockData.js (categories, products arrays)
├── App.jsx            # Main app component with Routes configuration
└── main.jsx           # React entry point (`ReactDOM.createRoot`)
```

---

## Tasks (Proper Structured Execution)

### TASK 1 — Latest React Project Initialization
- [ ] Initialize project using Vite: `npm create vite@latest ./ -- --template react`
- [ ] Clean up Vite's default boilerplate (`App.css`, `index.css` logos, etc.)
- [ ] Install latest dependencies: `npm install react-router-dom react-icons`
- [ ] Set up the folder structure strictly as defined above
- [ ] Add global CSS variables (colors, fonts matching reference) in `index.css`

### TASK 2 — Mock Data Setup
- [ ] Create `src/data/mockData.js`
- [ ] Define array of categories (id, name, image, description)
- [ ] Define array of products (id, categoryId, name, price, unit, image)
- [ ] Export these to power dynamic rendering cleanly.

### TASK 3 — React Router & Core Layout Setup
- [ ] Wrap application with `<BrowserRouter>` in `main.jsx`
- [ ] Create basic placeholder functional components for all files in `pages/`
- [ ] Setup `<Routes>` and `<Route>` maps in `App.jsx`
- [ ] Create a general `Layout` component holding `<Navbar />`, `<Outlet />`, and `<Footer />`

### TASK 4 — Configured Navbar & Footer Component
- [ ] Build `<Navbar />` with sticky positioning
- [ ] Implement desktop navigation links using `<NavLink>` for active link styling
- [ ] Implement responsive hamburger menu with React `useState` (`isOpen`)
- [ ] Build `<Footer />` incorporating logo, quick links, and social icons
- [ ] Match colors precisely to reference site's theme 

### TASK 5 — Home Page: Hero & About Sections
- [ ] Build full-width `<Hero />` component with background image/gradient and CTA
- [ ] Build `<AboutPreview />` component highlighting key wholesale benefits (Direct from farmers, Bulk orders etc.)
- [ ] Render both cleanly on the `Home.jsx` page

### TASK 6 — Reusable Product & Category Component Cards
- [ ] Build `<CategoryCard category={category} />` component (pass props)
- [ ] Build `<ProductCard product={product} />` component (pass props)
- [ ] Strictly match the reference site's shadow, border-radius, and aspect ratio via CSS

### TASK 7 — Functional Category & Product Grids
- [ ] Build `<CategorySection />` mapping across mock categories
- [ ] Build `<ProductSection />` mapping across designated featured products
- [ ] Render both on `Home.jsx` 
- [ ] Create `Products.jsx` page rendering **ALL** products
- [ ] Implement a category filter on the Products page (state-filtered list)

### TASK 8 — Contact Page & Controlled Form
- [ ] Build functional contact form inside `Contact.jsx`
- [ ] Form must utilize **Controlled Components** (React state for all input fields)
- [ ] Prevent default submission & show success message on submit

### TASK 9 — Responsiveness, Animations & Polish
- [ ] Ensure CSS Flexbox/Grid layouts respond properly at 1024px, 768px, and 480px.
- [ ] Add nice hover states (shadows, transforms) using vanilla CSS transitions
- [ ] Add page transition logic (`window.scrollTo(0,0)` mapped onto a `useEffect` per route change)

### TASK 10 — State Management (Cart / Interactive UI)
- [ ] Set up `CartContext` utilizing `createContext` and `useContext`
- [ ] Update `<ProductCard />` button to `dispatch`/add items to Cart state
- [ ] Develop a minimal Slide-out Cart UI to review selected products

---

## Technical Specifications & Rules

| Property               | Value / Instruction                                           |
|------------------------|---------------------------------------------------------------|
| **Core Library**       | `React 18+` (Latest standard functionality)                   |
| **Primary Font**       | Inter, Outfit, or Poppins (Google Fonts)                      |
| **Navbar BG Color**    | Exact copy from reference site                                |
| **Routing Strategy**   | Client-Side Routing (`react-router-dom`)                      |
| **CSS Methodology**    | Vanilla CSS `ComponentName.css` or Modules. No Tailwind.      |
| **Components**         | ES6 Functional Components with Hooks ONLY (No class components) |

---

## Notes for AI Developer
1. Use **Vite** for initializing the React project as it is the modern standard over CRA.
2. Ensure strict usage of **React Hooks** (`useState`, `useEffect`, `useContext`).
3. Keep logic modular. Divide UI into the smallest logical components.
4. Avoid any UI frameworks like Bootstrap/Tailwind. Rely strictly on vanilla CSS configurations.
5. All tasks marked `[ ]` must be converted to `[x]` upon completion during execution.
