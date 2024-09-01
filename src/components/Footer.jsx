import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      // Logic to handle the subscription can be added here (e.g., API call)
    }
  };

  return (
    <footer className="bg-[#2A2C39] text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 lg:px-16">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h3 className="text-2xl font-bold mb-4">DukaanOnline</h3>
          <p className="mb-4 text-gray-300">
            Subscribe to our newsletter to get the latest updates.
          </p>
          {subscribed ? (
            <p className="text-green-400 font-bold">
              Thank you for subscribing!
            </p>
          ) : (
            <div className="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 bg-gray-700 border border-gray-600 rounded-l-lg w-full lg:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-lg w-full lg:w-auto lg:mt-0 mt-2 lg:ml-[-1px]"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          )}
        </div>

        {/* Pages Section */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Pages</h3>
          <ul className="space-y-2">
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
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-8 border-gray-600" />

      {/* Social Media and Theme Information */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 lg:mb-0">
          <a
            href="https://www.linkedin.com/in/arslan-ali-86105721a/"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/ardev_1?igsh=eDBreWkzbHNmMWo0&utm_source=qr"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/www.raajpoot/"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a
            href="https://github.com/devarsalmern"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>

        {/* Theme Developed By */}
        <div className="text-center lg:text-right">
          <p className="text-sm text-gray-400">Theme Developed by Arslan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
