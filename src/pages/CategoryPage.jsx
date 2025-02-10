import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const API = "https://api.escuelajs.co/api/v1/products";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedMessage, setAddedMessage] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(API);
        const filteredProducts = res.data.filter(
          (item) => item.category.id === parseInt(categoryId)
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categoryId]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedMessage(`item added to cart!`);

    setTimeout(() => {
      setAddedMessage(null);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-40 py-6">
      {addedMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg animate-fadeIn">
          {addedMessage}
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-xl font-bold text-blue-600 mt-2">
                ${item.price}
              </p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-3 bg-gray-900 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
