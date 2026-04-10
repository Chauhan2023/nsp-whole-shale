import { useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { products, categories } from '../data/mockData';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => categories.find(c => c.id === p.categoryId)?.name === activeCategory);

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Wholesale catalog of premium essentials.</p>
        </div>
      </div>

      <div className="container products-container">
        <aside className="filters-sidebar">
          <h3>Categories</h3>
          <ul className="category-filters">
            <li 
              className={activeCategory === "All" ? "active" : ""} 
              onClick={() => setActiveCategory("All")}
            >
              All Products
            </li>
            {categories.map(cat => (
              <li 
                key={cat.id} 
                className={activeCategory === cat.name ? "active" : ""}
                onClick={() => setActiveCategory(cat.name)}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="products-main">
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="no-products">No products found for this category.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
