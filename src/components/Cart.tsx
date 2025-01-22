import './Cart.css';
import React from 'react';


interface CartProps {

    cartItems: { id: number; image: string; name: string; price: number; quantity: number }[];
  
    updateCart: (item: { id: number; image: string; name: string; price: number; quantity: number }, action: "add" | "remove") => void;
  
  }
  

const Cart: React.FC<CartProps> = ({ cartItems, updateCart }) => {
    const calculateTotal = () =>
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} style={{ width: "100px" }} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => updateCart(item, "remove")}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-total">
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      </div>
    );
  };
  
  export default Cart;
  