import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>SUPER<span>FOOD</span></h3>
          <p>Fresh wholesale products, direct from farmers to your business.</p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>Email: wholesale@superfood.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Grain Market, Trading Hub</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Superfood Wholesale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
