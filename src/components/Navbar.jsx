import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', emoji: '🏠' },
    { path: '/news', emoji: '📰' },
    { path: '/profile', emoji: '👤' },
    { path: '/catalog', emoji: '🛍️' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} className={location.pathname === item.path ? 'text-blue-500' : ''}>
          {item.emoji}
        </Link>
      ))}
      <Link to="/cart" className="cart-container">
        🛒
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </Link>
    </nav>
  );
};

export default Navbar;
