import React from "react";

export default function ProductPage() {
  const product = {
    id: 1,
    name: "Product Name",
    price: "$49.99",
    image: "/images/product.jpg",
    description: "This is a detailed description of the product.",
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-700 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
