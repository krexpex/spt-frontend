import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

function App() {
    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.ready();
            tg.expand();
        }
    }, []);

    return (
        <Router>
            <div className="app">
                <nav>
                    <Link to="/">🏠 Home</Link> | 
                    <Link to="/profile">👤 Profile</Link> | 
                    <Link to="/catalog">📦 Catalog</Link> | 
                    <Link to="/cart">🛒 Cart</Link>
                </nav>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
