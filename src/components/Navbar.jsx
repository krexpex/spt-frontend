import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/catalog">Каталог</Link></li>
        <li><Link to="/profile">Профиль</Link></li>
        <li><Link to="/cart">Корзина</Link></li>
        <li><Link to="/history">История</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
