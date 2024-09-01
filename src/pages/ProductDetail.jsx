import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold">Product not found</div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="p-8 max-w-6xl mx-auto">
        <header className="mb-8">
          <Link to="/products" className="text-blue-500 hover:underline">
            ← Back to Products
          </Link>
          <h1 className="text-4xl font-bold mt-4">Product Details</h1>
        </header>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain"
              style={{ maxHeight: "500px" }}
            />
          </div>
          {/* Details Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold mb-4">{product.title}</h2>
              <p className="text-2xl font-semibold text-gray-800 mb-4">
                ${product.price}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => addToCart(product)}
                className="text-white bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 py-2 px-4 rounded-lg shadow-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
