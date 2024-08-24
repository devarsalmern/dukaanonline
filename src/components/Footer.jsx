import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#2A2C39] text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center px-4">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p className="mb-4">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mb-2 lg:mb-0 bg-gray-700 border border-gray-600 rounded w-full lg:w-72"
            />
            <div className="flex lg:ml-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:ml-[-1rem] mt-2 lg:mt-0 w-full lg:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Pages Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">Pages</h2>
          <ul>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/findUs" className="hover:underline">
                Find Us
              </Link>
            </li>
            <li>
              <Link to="/pages" className="hover:underline">
                Pages
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-8 border-gray-600" />

      {/* Social Media and Theme Information */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 lg:mb-0">
          <a
            href="https://www.linkedin.com/in/arslan-ali-86105721a/"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/ardev_1?igsh=eDBreWkzbHNmMWo0&utm_source=qr"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/www.raajpoot/"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a
            href="https://github.com/devarsalmern"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>

        {/* Theme Developed By */}
        <div className="text-center">
          <p className="text-sm">Theme Developed by Arslan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
