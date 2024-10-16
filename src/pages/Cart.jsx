// src/pages/Cart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Adjust path if necessary

export default function Cart() {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const [couponCode, setCouponCode] = useState('');

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  const shipping = 10; // Fixed shipping cost, you can make this dynamic if needed
  const total = subtotal + shipping;

  const applyCoupon = () => {
    // Implement coupon logic here
    console.log(`Applying coupon: ${couponCode}`);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart items list */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${Number(item.price).toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="mx-4">{item.quantity}</span>
                  <button
                    className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="ml-4 text-red-600 hover:text-red-800"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="w-full md:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white"
                  onClick={applyCoupon}
                >
                  Apply
                </button>
              </div>
              <Link
                to="/checkout"
                className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Mock cart data (in a real app, this would come from a state management solution like Redux)
// const initialCartItems = [
//   { id: 1, name: 'Smartphone X', price: 599.99, quantity: 1, image: '/placeholder.svg' },
//   { id: 2, name: 'Laptop Pro', price: 1299.99, quantity: 1, image: '/placeholder.svg' },
// ];

// export default function Cart() {
//   const [cartItems, setCartItems] = useState(initialCartItems);
//   const [couponCode, setCouponCode] = useState('');

//   const updateQuantity = (id, newQuantity) => {
//     setCartItems(cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
//     ));
//   };

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 10; // Fixed shipping cost
//   const total = subtotal + shipping;

//   const applyCoupon = () => {
//     // Implement coupon logic here
//     console.log(`Applying coupon: ${couponCode}`);
//   };

//   return (
//     <div className="max-w-6xl mx-auto py-8 px-4">
//       <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-lg">Your cart is empty</p>
//       ) : (
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="flex-1">
//             {cartItems.map((item) => (
//               <div key={item.id} className="bg-white shadow-md rounded-lg mb-4 flex items-center p-4">
//                 <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
//                 <div className="flex-grow">
//                   <h2 className="text-lg font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   >
//                     -
//                   </button>
//                   <span className="mx-4">{item.quantity}</span>
//                   <button
//                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   className="ml-4 text-red-600 hover:text-red-800"
//                   onClick={() => removeItem(item.id)}
//                 >
//                   🗑️
//                 </button>
//               </div>
//             ))}
//           </div>
//           <div className="w-full md:w-1/3">
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal:</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span>Shipping:</span>
//                 <span>${shipping.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <span className="font-semibold">Total:</span>
//                 <span className="font-semibold">${total.toFixed(2)}</span>
//               </div>
//               <div className="flex gap-2 mb-4">
//                 <input
//                   type="text"
//                   placeholder="Coupon Code"
//                   value={couponCode}
//                   onChange={(e) => setCouponCode(e.target.value)}
//                   className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
//                 />
//                 <button
//                   className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white"
//                   onClick={applyCoupon}
//                 >
//                   Apply
//                 </button>
//               </div>
//               <Link
//                 to="/checkout"
//                 className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
