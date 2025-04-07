// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white p-4 shadow-md flex justify-around">
      <Link to="/">🏠 Домой</Link>
      <Link to="/news">📰 Новости</Link>
      <Link to="/catalog">🛒 Каталог</Link>
      <Link to="/profile">👤 Профиль</Link>
      <Link to="/cart">🛒 Корзина</Link>
      <Link to="/history">📜 История</Link>
    </div>
  );
};

export default Navbar;
