import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bottom-nav md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center h-16 z-50">
      <Link to="/" className="text-2xl">🏠</Link>
      <Link to="/news" className="text-2xl">📰</Link>
      <Link to="/profile" className="text-2xl">👤</Link>
      <Link to="/catalog" className="text-2xl">🛍️</Link>
      <Link to="/cart" className="relative text-2xl">
        🛒
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
