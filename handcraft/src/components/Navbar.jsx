import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ onLoginClick, onCartClick }) => {
  const [activeLink, setActiveLink] = useState('home');
  const { cartCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

  const navLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'products', label: 'Products', icon: '🛍️' },
    { id: 'artisans', label: 'Artisans', icon: '👥' },
    { id: 'about', label: 'About Us', icon: '📖' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => setActiveLink('home')}>
          <img src="https://images.unsplash.com/photo-1605001011155-cbf0b97e6d2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80" alt="Logo" className="logo-image" />
          <h1 className="logo-text">TribalArtisan</h1>
        </div>

        <div className="navbar-links">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setActiveLink(link.id); }}>
              <span className="nav-icon">{link.icon}</span> {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="icon-button search-btn"><span>🔍</span></button>
          
          {isAuthenticated ? (
            <div className="user-menu">
              <button className="icon-button user-btn"><span>👤</span></button>
              <div className="user-dropdown">
                <div className="user-info">
                  <strong>{user?.name || 'User'}</strong>
                  <small>{user?.email}</small>
                </div>
                <button onClick={logout} className="dropdown-item">Logout</button>
              </div>
            </div>
          ) : (
            <button className="icon-button login-btn" onClick={onLoginClick}><span>🔑</span></button>
          )}
          
          <button className="icon-button cart-btn" onClick={onCartClick}>
            <span>🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
