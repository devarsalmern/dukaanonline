import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faStore,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FeaturesOfSite = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg pt-16 mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Experience Streamlined Shopping with DukaanOnline
      </h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
          <FontAwesomeIcon
            icon={faTruck}
            className="text-grey-500 text-4xl mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Free Delivery</h2>
          <h4 className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            hendrerit purus quis quam.
          </h4>
        </div>
        <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
          <FontAwesomeIcon
            icon={faStore}
            className="text-grey-500 text-4xl mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Self Pickup</h2>
          <h4 className="text-gray-700">
            Etiam vitae ornare nulla. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra.
          </h4>
        </div>
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faShieldAlt}
            className="text-grey-500 text-4xl mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Warranty</h2>
          <h4 className="text-gray-700">
            Donec vehicula et nulla vel fringilla. Proin viverra fermentum erat,
            vitae aliquet erat dapibus vitae.
          </h4>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link to="/shopNow">
          <button className="bg-[#406BCF] hover:bg-[#6385EE] text-white font-bold py-3 px-5 rounded">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturesOfSite;
