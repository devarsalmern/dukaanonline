import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Set the number of products per page
  const { addToCart } = useCart(); // Use CartContext

  // Fetch products from fakestoreapi.com when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);

        // Extract unique categories from products
        const uniqueCategories = [
          "All Products",
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when the category changes
  };

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="flex flex-col md:flex-row">
        {/* Categories */}
        <div className="md:w-1/4 bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => filterProductsByCategory(category)}
                  className={`w-full py-2 px-4 rounded-lg text-left transition duration-300 ease-in-out ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-blue-200 text-blue-800 hover:bg-blue-300"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="md:w-3/4 p-4">
          <h2 className="text-xl font-bold mb-4">{selectedCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
                style={{ height: "450px" }}
              >
                <div>
                  <div className="h-64 overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-4">${product.price}</p>
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 py-2 px-4 rounded-lg shadow-lg"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-white bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 py-2 px-4 rounded-lg shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            <nav>
              <ul className="flex items-center space-x-2">
                <li>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`${
                      currentPage === 1
                        ? "text-gray-400"
                        : "text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 py-2 px-4 rounded-lg shadow-lg"
                    }`}
                  >
                    Previous
                  </button>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => paginate(i + 1)}
                      className={`${
                        currentPage === i + 1
                          ? "bg-blue-500 text-white"
                          : "text-blue-500"
                      } py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300`}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`${
                      currentPage === totalPages
                        ? "text-gray-400"
                        : "text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 py-2 px-4 rounded-lg shadow-lg"
                    }`}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
