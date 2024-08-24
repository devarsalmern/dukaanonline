import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      title: "Earbuds",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga a alias commodi, dolores quo, cum ut dicta minus maiores odit quis soluta. Itaque iste atque earum veniam quis omnis.",
      imgSrc: "/images/category1.png",
      link: "/earbuds",
    },
    {
      title: "Headphones",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga a alias commodi, dolores quo, cum ut dicta minus maiores odit quis soluta. Itaque iste atque earum veniam quis omnis.",
      imgSrc: "/images/category2.png",
      link: "/headphones",
    },
    {
      title: "Speakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga a alias commodi, dolores quo, cum ut dicta minus maiores odit quis soluta. Itaque iste atque earum veniam quis omnis.",
      imgSrc: "/images/category3.png",
      link: "/speakers",
    },
    {
      title: "Accessories",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fuga a alias commodi, dolores quo, cum ut dicta minus maiores odit quis soluta. Itaque iste atque earum veniam quis omnis.",
      imgSrc: "/images/category4.png",
      link: "/accessories",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative px-4 lg:px-20">
      <div className="flex justify-between items-center mb-6 lg:mb-10">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:ml-10">
          Shop By Category
        </h1>
        <div className="flex items-center space-x-2 lg:mr-10">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-2/5 lg:w-1/3 px-4 lg:pl-10"
            >
              <div className="bg-[#EEEFFA] p-6 rounded-lg shadow-lg text-left h-[400px] flex flex-col justify-between relative transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl">
                <div className="flex flex-col items-start">
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">
                    {category.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-base mb-4">
                    {category.description}
                  </p>
                  <a
                    href={category.link}
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                  </a>
                </div>
                <div className="absolute bottom-0 right-0">
                  <img
                    src={category.imgSrc}
                    alt={category.title}
                    className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 object-cover"
                    style={{ margin: 0 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
