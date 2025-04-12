import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(3); // временно: динамически подключишь позже

  const links = [
    { to: '/', icon: '🏠' },
    { to: '/news', icon: '📰' },
    { to: '/profile', icon: '👤' },
    { to: '/catalog', icon: '🛍️' },
    { to: '/cart', icon: '🛒' },
  ];

  return (
    <div>
      {/* Значок профиля справа вверху */}
      <div className="absolute top-2 right-4 text-3xl z-50">
        <Link to="/profile">👤</Link>
      </div>

      {/* Нижняя панель */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center h-16 border-t border-gray-200 z-40">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`text-2xl transition-transform hover:scale-125 ${
              location.pathname === link.to ? 'text-blue-500' : 'text-gray-500'
            } relative`}
          >
            {link.icon}

            {/* Если корзина, добавим счётчик */}
            {link.to === '/cart' && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
