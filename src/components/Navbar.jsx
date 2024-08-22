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
    <Disclosure as="nav" className=" p-4">
      {({ open }) => (
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Navigation Links */}
          <Link
            to="/"
            className="text-lg  transition-colors duration-200 hover:text-gray-400"
          >
            DukaanOnline
          </Link>

          {/* Cart icon for small screens */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link
              to="/cart"
              className="text-lg  transition-colors duration-200 hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Disclosure.Button className=" focus:outline-none">
              <FontAwesomeIcon
                icon={open ? faTimes : faBars}
                className="text-lg"
              />
            </Disclosure.Button>
          </div>

          {/* Navigation Links and Cart icon for large screens */}
          <div
            className={`lg:flex lg:items-center lg:space-x-6 ${
              open ? "block" : "hidden"
            }`}
          >
            <Link
              to="/products"
              className="text-lg  transition-colors duration-200 hover:text-gray-400"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-lg  transition-colors duration-200 hover:text-gray-400"
            >
              About
            </Link>
            <Link
              to="/findUs"
              className="text-lg  transition-colors duration-200 hover:text-gray-400"
            >
              Find Us
            </Link>
            <Link
              to="/pages"
              className="text-lg  transition-colors duration-200 hover:text-gray-400"
            >
              Pages
            </Link>
            <Link
              to="/cart"
              className="text-lg  transition-colors duration-200 hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <Link to="/shopNow">Shop Now</Link>
            </button>
          </div>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
