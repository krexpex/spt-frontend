import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 mb-4 shadow-lg flex justify-between">
      <div className="font-bold text-xl">SPT WebApp</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">Главная</Link>
        <Link to="/catalog" className="hover:text-gray-200">Каталог</Link>
        <Link to="/profile" className="hover:text-gray-200">Профиль</Link>
        <Link to="/cart" className="hover:text-gray-200">Корзина</Link>
        <Link to="/history" className="hover:text-gray-200">История</Link>
      </div>
    </nav>
  );
};

export default Navbar;
