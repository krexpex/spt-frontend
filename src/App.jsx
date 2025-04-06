import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Notifications from './components/Notifications';

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.ready();
            tg.expand();
        }
    }, []);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
                    <Route path="/notifications" element={<Notifications />} />
                </Routes>

                {/* Нижняя панель навигации */}
                <div className="bottom-nav">
                    <Link to="/">🏠</Link>
                    <Link to="/profile">👤</Link>
                    <Link to="/catalog">📦</Link>
                    <Link to="/cart">🛒</Link>
                    <Link to="/notifications">🔔</Link>
                </div>

                {/* Плавающая кнопка действий */}
                <button className="floating-button">➕</button>
            </div>
        </Router>
    );
}

export default App;
