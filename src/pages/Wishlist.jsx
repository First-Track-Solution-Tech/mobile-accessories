import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaTrash,
} from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartslice/cartslice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const [wishlistItems, setWishlistItems] = useState([]);

  // Load Wishlist From LocalStorage
  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlistItems(savedWishlist);
  }, []);

  // Remove Product
  const removeWishlistItem = (id) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.id !== id
    );

    setWishlistItems(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  // Add To Cart
  const handleAddToCart = (product) => {
    dispatch(addItem({ item: product }));

    alert(`${product.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-10">
          <FaHeart className="text-pink-500 text-3xl" />

          <h1 className="text-4xl font-bold text-gray-800">
            My Wishlist
          </h1>
        </div>

        {/* Empty */}
        {wishlistItems.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">

            <FaHeart className="text-6xl text-pink-400 mx-auto mb-4" />

            <h2 className="text-2xl font-semibold text-gray-700">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Save your favorite products here ❤️
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative"
              >

                {/* Remove Button */}
                <button
                  onClick={() =>
                    removeWishlistItem(product.id)
                  }
                  className="absolute top-3 right-3 bg-white p-3 rounded-full shadow hover:bg-red-100 transition"
                >
                  <FaTrash className="text-red-500" />
                </button>

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

                {/* Content */}
                <div className="p-5">

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-500">
                    Original:
                    <span className="line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  </p>

                  <p className="text-red-500 font-bold text-lg mt-1">
                    Offer: ₹{product.offerPrice}
                  </p>

                  {/* Add To Cart */}
                  <button
                    onClick={() =>
                      handleAddToCart(product)
                    }
                    className="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;