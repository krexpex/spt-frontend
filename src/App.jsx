import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import Home from './components/Home';
import Profile from './components/Profile';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import History from './components/History';

const App = () => {
  const [cartItems] = useState([1, 2, 3]); // заменишь позже на своё состояние корзины

  return (
    <Router>
      <div className="app relative">
        {/* Иконка профиля */}
        <div className="profile-icon">👤</div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
        </Routes>

        <Navbar cartCount={cartItems.length} />
      </div>
    </Router>
  );
};

export default App;
