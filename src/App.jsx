import React from 'react';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import Home from './components/Home';
import Profile from './components/Profile';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import History from './components/History';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
};

export default App;
