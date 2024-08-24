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
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenPages, setDropdownOpenPages] = useState(false);

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
            <div className="relative group lg:group-none">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="text-lg py-2 transition-colors duration-200 hover:text-gray-600">
                  Products
                </span>
                <FontAwesomeIcon
                  icon={dropdownOpen ? faChevronUp : faChevronDown}
                  className="text-lg"
                />
              </div>
              {dropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded-lg w-60 mt-2 z-10">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <span className="text-gray-700">
                      What are you looking for?
                    </span>
                  </div>
                  <div className="flex flex-wrap">
                    <button
                      onClick={() => navigate("/accessories")}
                      className="flex-1 text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Accessories
                    </button>
                    <button
                      onClick={() => navigate("/speakers")}
                      className="flex-1 text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Speakers
                    </button>
                    <button
                      onClick={() => navigate("/earphones")}
                      className="flex-1 text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Earphones
                    </button>
                    <button
                      onClick={() => navigate("/headphones")}
                      className="flex-1 text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Headphones
                    </button>
                    <Link
                      to="/all-products"
                      className="flex-1 text-center bg-white text-[#6385EE] font-bold py-2 border border-white rounded-full mt-2 hover:bg-gray-100"
                    >
                      Discover All Products
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
            <div className="relative group lg:group-none">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setDropdownOpenPages(!dropdownOpenPages)}
              >
                <span className="text-lg py-2 transition-colors duration-200 hover:text-gray-600">
                  Pages
                </span>
                <FontAwesomeIcon
                  icon={dropdownOpen ? faChevronUp : faChevronDown}
                  className="text-lg"
                />
              </div>
              {dropdownOpenPages && (
                <div className="absolute bg-white shadow-lg rounded-lg w-60 mt-2 z-10">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <span className="text-gray-700">Pages</span>
                  </div>
                  <div className="flex flex-wrap">
                    <button
                      onClick={() => navigate("/")}
                      className="flex-1 text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Home
                    </button>

                    <button
                      onClick={() => navigate("/blog")}
                      className="flex-1 text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Blog
                    </button>
                    <button
                      onClick={() => navigate("/contactus")}
                      className="flex-1 text-left px-4 py-2 hover:bg-gray-100"
                    >
                      ContactUs
                    </button>
                  </div>
                </div>
              )}
            </div>
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
      )}
    </Disclosure>
  );
};

export default Navbar;
