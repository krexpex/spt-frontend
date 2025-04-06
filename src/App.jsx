import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Profile from './components/Profile';
import Cart from './components/Cart';
import History from './components/History';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/catalog">Catalog</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/cart">Cart</Link> | 
        <Link to="/history">History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
