import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

// import About from "./components/About";
// import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ id: number; image: string; name: string; price: number; quantity: number }[]>([]);

  const updateCart = (item: { id: number; image: string; name: string; price: number; quantity: number }, action: "add" | "remove") => {
    if (action === "add") {
      setCartItems((prevCart) => {
        const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          // If item already exists, increase the quantity
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        }
        // Otherwise, add the item with a quantity of 1
        return [...prevCart, { ...item, quantity: 1, image: item.image }];
      });
    } else if (action === "remove") {
      setCartItems((prevCart) =>
        prevCart.filter((cartItem) => cartItem.id !== item.id)
      );
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  const handleOutsideClick = (event: React.MouseEvent) => {
    const navbar = document.querySelector(".navbar");
    if (navbar && !navbar.contains(event.target as Node)) {
      closeMenu(); // Close menu if clicked outside
    }
  };

  return (
    <div onClick={handleOutsideClick}>
      <Router>
        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          cartItems={cartItems}
        />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu updateCart={updateCart} />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route
          path="/cart"
          element={<Cart cartItems={cartItems} updateCart={updateCart} />}
        />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
