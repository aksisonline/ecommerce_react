// src/pages/Shop.jsx
import React from "react";
import { useCart } from "../context/CartContext"; // Adjust path as needed
import { products } from "../data/Products";
export default function Shop() {
  const { addToCart } = useCart(); // Get the addToCart function from the context

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-xl text-gray-700 mb-4">${product.price}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
