import { NavLink } from 'react-router-dom';
import { FaHome, FaNewspaper, FaUser, FaBoxOpen, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        <FaHome size={20} />
        Home
      </NavLink>
      <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>
        <FaNewspaper size={20} />
        News
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
        <FaUser size={20} />
        Profile
      </NavLink>
      <NavLink to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>
        <FaBoxOpen size={20} />
        Catalog
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
        <FaShoppingCart size={20} />
        Cart
      </NavLink>
    </nav>
  );
};

export default Navbar;
