import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import ProductCard from '../components/ProductCard/ProductCard';
import { categories, products } from '../data/mockData';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-content">
          <h1>Fresh Wholesale Products,<br/>Direct to You</h1>
          <p>Premium quality grains, spices, and more for your business needs.</p>
          <Link to="/products" className="btn-primary">Shop Now</Link>
        </div>
      </section>

      <section className="about-preview container">
        <div className="about-grid">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Groceries layout" />
          </div>
          <div className="about-text">
            <h2>Why Choose Superfood?</h2>
            <p>We supply the highest quality whole grains, fresh spices, and dry fruits to businesses across the country.</p>
            <ul className="features-list">
              <li>✓ Direct from Farmers</li>
              <li>✓ Bulk Orders Available</li>
              <li>✓ Fast Nationwide Delivery</li>
              <li>✓ 100% Quality Guaranteed</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="categories-sec container">
        <div className="section-header">
          <h2>Shop by Category</h2>
        </div>
        <div className="categories-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="products-sec container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="view-all">View All Products</Link>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
