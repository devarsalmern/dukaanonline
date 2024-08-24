import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="p-4 bg-white text-gray-800">
      {({ open }) => (
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Navigation Links */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/dukaanonlinelogo.png"
              alt="DukaanOnline Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Cart icon and Hamburger menu for small screens */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Only show cart icon when the menu is closed */}
            {!open && (
              <Link
                to="/cart"
                className="text-lg transition-colors duration-200 hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
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
            <div
              className={`lg:flex lg:items-center lg:space-x-6 lg:bg-transparent lg:shadow-none lg:p-0 transition-all duration-300 ${
                open
                  ? "block absolute top-16 left-0 right-0 bg-gray-100 shadow-lg p-8 rounded-md"
                  : "hidden"
              }`}
            >
              <Link
                to="/products"
                className="block text-lg transition-colors duration-200 hover:text-gray-600 py-2"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="block text-lg transition-colors duration-200 hover:text-gray-600 py-2"
              >
                About
              </Link>
              <Link
                to="/findUs"
                className="block text-lg transition-colors duration-200 hover:text-gray-600 py-2"
              >
                Find Us
              </Link>
              <Link
                to="/pages"
                className="block text-lg transition-colors duration-200 hover:text-gray-600 py-2"
              >
                Pages
              </Link>
              <Link
                to="/cart"
                className="block text-lg transition-colors duration-200 hover:text-gray-600 py-2"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
              <Link
                to="/shopNow"
                className="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 lg:mt-0"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
