import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="max-w-screen-xl mx-auto p-6 pt-12 lg:pt-16 lg:p-12">
        {/* Updated max width and padding for larger devices */}

        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-2xl lg:text-3xl font-bold text-gray-800">
            DukaanOnline Blog
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            <Link to="/blogpage">See More Articles</Link>
          </button>
        </div>

        {/* Blog Posts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Blog Post */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-95 transition duration-300">
            {/* Card zoom-out on hover */}
            <div className="overflow-hidden">
              <img
                src="./images/Blog1.jpg"
                alt="Blog Post"
                className="w-full h-auto transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <button className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs font-bold mb-4">
                Guide
              </button>
              <p className="text-sm text-gray-600 mb-2">October 9, 2023</p>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Music for Every Occasion: Crafting the Perfect Playlist for
                Different Moods and Activities
              </h1>
              <p className="text-gray-600 mb-4">
                Learn how to curate the ideal playlist for any situation, from
                workouts to relaxation and everything in between.
              </p>
              <a
                href=""
                className="flex items-center text-blue-500 hover:underline"
              >
                <span className="text-sm font-medium">Learn More</span>
                <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Second Blog Post */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-95 transition duration-300">
            {/* Card zoom-out on hover */}
            <div className="overflow-hidden">
              <img
                src="./images/Blog1.jpg"
                alt="Blog Post"
                className="w-full h-auto transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <button className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs font-bold mb-4">
                Guide
              </button>
              <p className="text-sm text-gray-600 mb-2">October 9, 2023</p>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Finding the Perfect Fit: A Guide to Choosing the Right
                Headphones
              </h1>
              <p className="text-gray-600 mb-4">
                Navigate the headphone market with confidence as we provide
                expert advice on selecting the perfect pair to suit your needs.
              </p>
              <a
                href=""
                className="flex items-center text-blue-500 hover:underline"
              >
                <span className="text-sm font-medium">Learn More</span>
                <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
