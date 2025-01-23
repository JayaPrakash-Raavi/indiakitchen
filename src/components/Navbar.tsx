import { Link } from "react-router-dom";
import logo from "../assets/images/indiakitchen-logo-s.png"; // Adjust the path as needed
import "./Navbar.css";
interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  cartItems: any[]; // Adjust the type as needed
}

const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  toggleMenu,
  closeMenu,
  cartItems,
}) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
          <li>
            <Link to="/cart" onClick={closeMenu}>Cart ({totalItems})</Link>
          </li>
          {/* <li className="dropdown">
            <span className="dropdown-toggle">Order Online</span>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="https://www.ubereats.com/store/india-kitchen/lTq5zqcoUzO-7lltAWxXHQ?diningMode=DELIVERY"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Uber Eats
                </a>
              </li>
              <li>
                <a
                  href="https://www.instacart.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Instacart
                </a>
              </li>
              <li>
                <a
                  href="https://www.grubhub.com/restaurant/india-kitchen-3573-southern-ave-memphis/7922584n"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Grubhub
                </a>
              </li>
              <li>
                <a
                  href="https://www.yelp.com/biz/india-kitchen-memphis"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Yelp
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
