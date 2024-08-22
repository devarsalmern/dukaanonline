import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleView = () => {
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center p-4 md:p-5 lg:p-6 bg-gray-100 rounded-lg shadow-lg mt-8 mx-4 md:mx-auto lg:mx-auto max-w-screen-md lg:max-w-screen-lg">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/2 mb-6 lg:mb-0">
        <img
          src="./images/subscribe.jpg"
          alt="Subscribe"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 lg:ml-6 text-center lg:text-left">
        {subscribed ? (
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 text-teal-600">
              Thank You!
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-800">
              You have successfully subscribed to our newsletter.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 text-gray-800">
              Join Our List Today!
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-4 text-gray-600">
              Be the first to know about:
            </p>
            <ul className="list-none mb-6 text-gray-600">
              <li className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-500 mr-2"
                />
                Limited edition products
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-500 mr-2"
                />
                Special offers
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-500 mr-2"
                />
                Exclusive content
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-500 mr-2"
                />
                No spams!
              </li>
            </ul>
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-3 mb-4 w-full text-base md:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-3 px-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              onClick={handleView}
            >
              Subscribe
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
