import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from "@headlessui/react";
import { useCart } from "../context/CartContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart(); // Get cart items from context
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenPages, setDropdownOpenPages] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false); // Cart dropdown state
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  // Handle dropdown selection
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue); // Navigate to the selected page
      setDropdownOpen(false); // Close dropdown after selection
    }
  };

  const handleSelectChangePages = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue); // Navigate to the selected page
      setDropdownOpenPages(false); // Close dropdown after selection
    }
  };

  // Toggle cart dropdown
  const toggleCartDropdown = () => {
    setCartDropdownOpen(!cartDropdownOpen);
  };

  return (
    <Disclosure as="nav" className="p-4 bg-white text-gray-800">
      {({ open }) => (
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Navigation Links */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="DukaanOnline Logo"
              className="h-16 w-16"
            />
          </Link>

          {/* Cart icon and Hamburger menu for small screens */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Only show cart icon when the menu is closed */}
            {!open && (
              <div className="relative">
                <button
                  onClick={toggleCartDropdown}
                  className="text-lg transition-colors duration-200 hover:text-gray-600 relative"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {cartItems && cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {cartItems.length}
                    </span>
                  )}
                </button>
                {cartDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    {/* Cart dropdown content */}
                    <div className="p-4">
                      {cartItems.length > 0 ? (
                        <div>
                          <p>{cartItems.length} items in your cart</p>
                          <Link
                            to="/cart"
                            className="text-blue-500 hover:underline"
                            onClick={() => setCartDropdownOpen(false)}
                          >
                            View Cart
                          </Link>
                        </div>
                      ) : (
                        <p>Your cart is empty</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            <Disclosure.Button className="focus:outline-none">
              <FontAwesomeIcon
                icon={open ? faTimes : faBars}
                className="text-lg"
              />
            </Disclosure.Button>
          </div>

          {/* Navigation Links and Cart icon for large screens */}
          <div
            className={`${
              open ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6`}
          >
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6">
              <Link
                to="/"
                className="text-lg transition-colors duration-200 hover:text-gray-600"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-lg flex items-center space-x-1 transition-colors duration-200 hover:text-gray-600"
                >
                  <span>Products</span>
                  <FontAwesomeIcon
                    icon={dropdownOpen ? faChevronUp : faChevronDown}
                  />
                </button>
                {dropdownOpen && (
                  <ul className="absolute bg-white shadow-lg mt-2 rounded-lg">
                    <li>
                      <button
                        onClick={() => navigate("/products")}
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        All Products
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/products")}
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        Men's Clothing
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/products")}
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        Women's clothing
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/products")}
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        Jewelry
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/products")}
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        Electronics
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpenPages(!dropdownOpenPages)}
                  className="text-lg flex items-center space-x-1 transition-colors duration-200 hover:text-gray-600"
                >
                  <span>Pages</span>
                  <FontAwesomeIcon
                    icon={dropdownOpenPages ? faChevronUp : faChevronDown}
                  />
                </button>
                {dropdownOpenPages && (
                  <ul className="absolute bg-white shadow-lg mt-2 rounded-lg">
                    <li>
                      <button
                        onClick={() => navigate("/about")}
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        AboutUs
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/contact")}
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        ContactUs
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/findUs")}
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        FindUs
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={toggleCartDropdown}
                  className="text-lg transition-colors duration-200 hover:text-gray-600 relative"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {cartItems && cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {cartItems.length}
                    </span>
                  )}
                </button>
                {cartDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <div className="p-4">
                      {cartItems.length > 0 ? (
                        <div>
                          <p>{cartItems.length} items in your cart</p>
                          <Link
                            to="/cart"
                            className="text-blue-500 hover:underline"
                            onClick={() => setCartDropdownOpen(false)}
                          >
                            View Cart
                          </Link>
                        </div>
                      ) : (
                        <p>Your cart is empty</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {/* Shop Now Button */}
              <Link
                to="/products"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className="text-lg transition-colors duration-200 hover:text-gray-600"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-lg flex items-center space-x-1 transition-colors duration-200 hover:text-gray-600"
                >
                  <span>Products</span>
                  <FontAwesomeIcon
                    icon={dropdownOpen ? faChevronUp : faChevronDown}
                  />
                </button>
                {dropdownOpen && (
                  <ul className="absolute bg-white shadow-lg mt-2 rounded-lg">
                    <li>
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        Men
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        Women
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpenPages(!dropdownOpenPages)}
                  className="text-lg flex items-center space-x-1 transition-colors duration-200 hover:text-gray-600"
                >
                  <span>Pages</span>
                  <FontAwesomeIcon
                    icon={dropdownOpenPages ? faChevronUp : faChevronDown}
                  />
                </button>
                {dropdownOpenPages && (
                  <ul className="absolute bg-white shadow-lg mt-2 rounded-lg">
                    <li>
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contactus"
                        className="block px-4 py-2 text-lg hover:bg-gray-200"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <Link
                to="/products"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
          </button>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
