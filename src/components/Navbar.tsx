import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu after a link is clicked
  };

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
          <h1>India Kitchen</h1>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
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
