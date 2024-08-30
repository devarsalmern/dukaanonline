import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted", { shippingInfo, cartItems });
    alert("Order placed successfully!");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Checkout
      </h2>
      <div className="flex flex-col lg:flex-row">
        {/* Shipping Information */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 lg:mr-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            Shipping Information
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  City:
                </label>
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  State:
                </label>
                <input
                  type="text"
                  name="state"
                  value={shippingInfo.state}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Zip Code:
              </label>
              <input
                type="text"
                name="zip"
                value={shippingInfo.zip}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            Order Summary
          </h3>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
              >
                <div>
                  <p className="font-bold text-gray-800">{item.title}</p>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <p className="font-semibold text-gray-700">
                  ${item.price.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <hr className="my-6 border-gray-200" />
          <div className="flex justify-between font-bold text-lg text-gray-800">
            <p>Total:</p>
            <p>${calculateTotal()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
