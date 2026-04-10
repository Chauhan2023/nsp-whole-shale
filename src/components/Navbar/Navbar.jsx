import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          SUPER<span>FOOD</span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Products</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : ""}>Contact</NavLink>
        </div>

        <div className="nav-actions">
          <div className="cart-icon">
            <FiShoppingCart size={24} />
            <span className="cart-badge">0</span>
          </div>
          <div className="mobile-menu" onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
