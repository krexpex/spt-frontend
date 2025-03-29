import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg flex justify-between">
      <div className="font-bold text-xl">SPT WebApp</div>
      <div className="space-x-4">
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/history">История</Link>
      </div>
    </nav>
  );
};

export default Navbar;
