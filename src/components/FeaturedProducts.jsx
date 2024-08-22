import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Our Featured Products
        </h1>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        <div className="bg-[#E6E6F2] p-4 sm:p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl">
          <div className="flex justify-center items-center mb-4">
            <img
              src="/images/product1.jpg"
              alt="Earbuds"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>
          <h6 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
            Earbuds
          </h6>
          <h3 className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-gray-600">
            Earbud Y168A
          </h3>
        </div>
        <div className="bg-[#E6E6F2] p-4 sm:p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl">
          <div className="flex justify-center items-center mb-4">
            <img
              src="/images/product2.jpg"
              alt="Headphones"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>
          <h6 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
            Headphones
          </h6>
          <h3 className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-gray-600">
            Pro X168A
          </h3>
        </div>
        <div className="bg-[#E6E6F2] p-4 sm:p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl">
          <div className="flex justify-center items-center mb-4">
            <img
              src="/images/product3.jpg"
              alt="Speakers"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>
          <h6 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
            Speakers
          </h6>
          <h3 className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-gray-600">
            Speaker P168A
          </h3>
        </div>
        <div className="bg-[#E6E6F2] p-4 sm:p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl">
          <div className="flex justify-center items-center mb-4">
            <img
              src="/images/product4.jpg"
              alt="Accessories"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>
          <h6 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
            Accessories
          </h6>
          <h3 className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-gray-600">
            Wireless Charger
          </h3>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/shopNow">
          <button className="bg-[#406BCF] hover:bg-[#6385EE] text-white font-bold py-3 px-5 rounded">
            See All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
