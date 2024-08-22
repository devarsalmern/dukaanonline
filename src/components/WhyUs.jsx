import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// Define animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const slideInCenter = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const WhyUs = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-8">
      <div className="max-w-screen-lg mx-auto">
        {" "}
        {/* Added max-width and centering */}
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why DukaanOnline
        </motion.h1>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Section */}
          <div className="flex flex-col lg:w-1/3 mb-6 lg:mb-0 space-y-6">
            <motion.div
              className="flex items-start"
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="text-blue-500 text-3xl mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Exceptional Sound Quality
                </h2>
                <h4 className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent varius commodo aliquam.
                </h4>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start"
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="text-blue-500 text-3xl mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Versatile and User-Friendly
                </h2>
                <h4 className="text-gray-700">
                  Maecenas eu dui dictum, imperdiet metus et, dapibus nisl.
                  Integer sit amet augue magna.
                </h4>
              </div>
            </motion.div>
          </div>
          {/* Center Image */}
          <motion.div
            className="flex items-center justify-center lg:w-1/3 mb-6 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={slideInCenter}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="w-full h-64 lg:h-80">
              <img
                src="./images/category1.png"
                alt="DukaanOnline"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </motion.div>
          {/* Right Section */}
          <div className="flex flex-col lg:w-1/3 space-y-6">
            <motion.div
              className="flex items-start"
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="text-blue-500 text-3xl mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Innovative Design
                </h2>
                <h4 className="text-gray-700">
                  Mauris laoreet congue ipsum at ultricies. Phasellus mattis
                  dictum neque, vel sagittis odio pellentesque at.
                </h4>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start"
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="text-blue-500 text-3xl mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Superior Build and Durability
                </h2>
                <h4 className="text-gray-700">
                  Aliquam vel augue sed justo sagittis lobortis. Vestibulum
                  porttitor sit amet magna id elementum.
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="text-center mt-12 space-x-4">
          <Link to="/shopNow">
            <button className="bg-[#406BCF] hover:bg-[#6385EE] text-white font-bold py-3 px-5 rounded">
              Shop Now
            </button>
          </Link>
          <Link to="/aboutUs">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-5 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
