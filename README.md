<div align="center">
  
  # 🍃 Superfood Wholesale Web App

  **A modern, lightning-fast Single Page Application built for wholesale agricultural and grocery businesses.**

  [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
  
</div>

---

## 🌟 Overview

The **Superfood Wholesale** storefront is a premium, responsive React template engineered for performance. It ditches heavy frameworks in favor of vanilla CSS and pure React 18 functional components to deliver an instant, seamless browsing experience.

Designed to handle large-scale catalogs seamlessly, it includes pre-built filtering, routing, and dynamic data-mocking out of the box.

## ✨ Key Features

- ⚡ **Instant Navigation:** Zero-reload page transitions powered by React Router V6+.
- 🎨 **Premium Aesthetics:** Clean, modern "Fresh Green" color palette with smooth micro-animations and CSS hover effects.
- 📱 **Fully Responsive:** Fluid grid systems that adapt perfectly to Mobile, Tablet, and Desktop displays.
- 🔍 **Interactive Filtering:** Built-in category sorting mechanism allowing customers to easily find items.
- 📦 **Component Driven:** Modular `<ProductCard />`, `<CategoryCard />`, and `<Navbar />` architectures.
- 🚀 **Vite Bundler:** Lightning-fast HMR (Hot Module Replacement) and optimized production builds.

## 🛠️ Tech Stack

- **Core:** React 18 (Functional Components & Hooks)
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **Styling:** Vanilla CSS3 (Variables, Grid, Flexbox)
- **Icons:** React Icons (`react-icons/fi`)

## 📂 Project Structure

```text
/src
├── assets/            # Global styling tokens (index.css)
├── components/        # Reusable UI Blocks
│   ├── CategoryCard/  # Visually rich category highlight cards
│   ├── Footer/        # Persistent bottom navigation
│   ├── Navbar/        # Highly responsive sticky header
│   └── ProductCard/   # Inventory items displaying stock & pricing
├── data/              
│   └── mockData.js    # Mock backend response (Products & Categories)
├── pages/             
│   ├── Contact.jsx    # Stateful enquiry form
│   ├── Home.jsx       # Landing storefront
│   └── Products.jsx   # Full filtered catalog
├── App.jsx            # Core layout and Route configuration
└── main.jsx           # Application entry point
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### 1. Installation

Clone the repository and install the NPM packages:

```bash
# Clone the repository
git clone https://github.com/Chauhan2023/nsp-whole-shale.git

# Navigate into the directory
cd nsp

# Install dependencies
npm install
```

### 2. Development Server

Start the Vite development server to view the app in your browser:

```bash
npm run dev
```

Your app will be running at `http://localhost:5173`.

### 3. Production Build

To compile the application for a production environment:

```bash
npm run build
```

This will generate optimized static files in the `/dist` output folder.

---

<div align="center">
  <p>Built with ❤️ and Modern React.</p>
</div>
