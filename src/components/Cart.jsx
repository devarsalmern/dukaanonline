import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import cart context hook

const Cart = () => {
  const { cartItems = [], removeFromCart } = useCart();

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg w-80 p-4 z-50">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-2"
              >
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <Link
          to="/checkout"
          className="block text-center bg-blue-500 text-white py-2 rounded-lg mt-4"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
