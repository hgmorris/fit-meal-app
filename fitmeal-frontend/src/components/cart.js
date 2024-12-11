// src/components/Cart.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, updateCart, removeFromCart, placeOrder } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = async () => {
    await placeOrder();
    setOrderPlaced(true);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateCart(item.id, e.target.value)}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={handlePlaceOrder}>Place Order</button>
      {orderPlaced && <p>Order placed successfully!</p>}
    </div>
  );
};

export default Cart;