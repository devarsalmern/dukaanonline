import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Our Featured Products
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-[#ffffff] p-4 sm:p-6 rounded-lg shadow-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl"
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
              />
            </div>
            <h6 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-800">
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </h6>
            <h3 className="text-sm sm:text-md md:text-lg lg:text-xl font-medium text-gray-600">
              {product.title}
            </h3>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/products">
          <button className="bg-[#406BCF] hover:bg-[#6385EE] text-white font-bold py-3 px-5 rounded">
            See All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
