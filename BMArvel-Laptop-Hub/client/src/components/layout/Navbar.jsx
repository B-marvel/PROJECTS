import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className="logo">
        <img
          src={logo}
          alt="BMArvel Laptop Hub Logo"
        />
      </NavLink>

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>

        <li>
          <NavLink to="/register">Register</NavLink>
        </li>

        <li>
          <NavLink to="/cart">🛒 Cart</NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;