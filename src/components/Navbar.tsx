import { Link } from "react-router-dom";
import logo from "../assets/images/indiakitchen-logo-s.png"; // Adjust the path as needed
import "./Navbar.css";
const Navbar = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div>Phone: 901 707 8885</div>
        <div>Email: indiankitchenmemphis@example.com</div>
        <div>3573, Southern Avenue, Memphis, TN 38111</div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="India Kitchen Logo" className="logo" />
          </Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={closeMenu}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
