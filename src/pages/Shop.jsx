// src/pages/Shop.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; // Adjust path as needed

export default function Shop() {
  const { addToCart } = useCart(); // Get the addToCart function from the context

  const products = [
    { 
      id: 1, 
      name: 'Macbook M2', 
      image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg',
      price: 999.99 
    },
    { 
      id: 2, 
      name: 'ASUS Vivobook', 
      image: 'https://m.media-amazon.com/images/I/71dEitCVLxL._SL1500_.jpg', 
      price: 849.99 
    },
    { 
      id: 3, 
      name: 'SmartWatch', 
      image: 'https://m.media-amazon.com/images/I/51Lums4VcgL._SL1500_.jpg', 
      price: 39.99
    },
    { 
      id: 4, 
      name: 'Moto Edge 50', 
      image: 'https://m.media-amazon.com/images/I/71m+dNHzoGL._SL1500_.jpg', 
      price: 49.99
    },
    { 
      id: 5, 
      name: 'Mustang Earbuds', 
      image: 'https://m.media-amazon.com/images/I/719xn0KawFL._SL1500_.jpg',
      price: 99.99
    },
    { 
      id: 6, 
      name: 'Armani Analog Watch', 
      image: 'https://m.media-amazon.com/images/I/714Y6bZunSL._SX679_.jpg', 
      price: 189.99
    },
    { 
      id: 7, 
      name: 'Giorgio Armani For Men', 
      image: 'https://m.media-amazon.com/images/I/314cTqSA1AL._SX300_SY300_QL70_FMwebp_.jpg', 
      price: 35.99
    },
    { 
      id: 8, 
      name: 'Nike AIR Jordans', 
      image: 'https://m.media-amazon.com/images/I/41rD3IOZDrL.jpg', 
      price: 95.99
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
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
