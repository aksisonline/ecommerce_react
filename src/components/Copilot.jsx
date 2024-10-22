import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Send, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { products } from '../data/Products';
// import GEMINI_API_KEY from '../keys';

const Toast = ({ message, onClose }) => (
  <div className="fixed top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm w-full">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        {message.image && (
          <img
            src={message.image}
            alt={message.title}
            className="h-10 w-10 rounded-full"
          />
        )}
      </div>
      <div className="ml-3 w-0 flex-1 pt-0.5">
        <p className="text-sm font-medium text-gray-900">{message.title}</p>
        <p className="mt-1 text-sm text-gray-500">{message.content}</p>
        {message.price && (
          <p className="mt-1 text-sm font-semibold">${message.price.toFixed(2)}</p>
        )}
      </div>
      <div className="ml-4 flex-shrink-0 flex">
        <button
          className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

export default function Copilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [toast, setToast] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  const { addToCart, updateQuantity, removeItem } = useCart();

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const cartFunctionDeclarations = [
    {
      name: "addToCart",
      description: "Add a product to the cart",
      parameters: {
        type: "object",
        properties: {
          id: { type: "integer", description: "ID of the product" },
        },
        required: ["id"],
      },
    },
    {
      name: "updateQuantity",
      description: "Update the quantity of a product in the cart",
      parameters: {
        type: "object",
        properties: {
          id: { type: "integer", description: "ID of the product" },
          quantity: { type: "number", description: "New quantity" },
        },
        required: ["id", "quantity"],
      },
    },
    {
      name: "removeItem",
      description: "Remove a product from the cart",
      parameters: {
        type: "object",
        properties: {
          id: { type: "integer", description: "ID of the product" },
        },
        required: ["id"],
      },
    },
  ];

  const generativeModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    },
    systemInstruction: `You are a helpful shopping assistant for an online store. You can add items to the cart, update quantities, and remove items. Here are the available products:
        ${JSON.stringify(products, null, 2)}
        When asked about products, provide information based on what you know about similar products. Use the addToCart function to add items to the cart when requested.`
  });

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message) => setToast(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput('');
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: input, isUser: true }]);
      
      const newHistory = [...chatHistory, { role: "user", parts: [{ text: input }] }];
      setChatHistory(newHistory);

      try {
        const result = await generativeModel.generateContent({
          contents: [{ role: "user", parts: [{ text: input }] }],
          tools: [{ functionDeclarations: cartFunctionDeclarations }],
        });

        const response = result.response;
        console.log("Gemini response:", response);

        if (response.candidates && response.candidates.length > 0) {
          const candidate = response.candidates[0];
          if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
            const responseText = candidate.content.parts[0].text;
            setMessages((prevMessages) => [...prevMessages, { text: responseText, isUser: false }]);
            
            const updatedHistory = [...newHistory, { role: "model", parts: [{ text: responseText }] }];
            setChatHistory(updatedHistory);

            if (candidate.content.parts[0].functionCall) {
              const functionCall = candidate.content.parts[0].functionCall;
              handleFunctionCall(functionCall);
            }
          }
        }
      } catch (error) {
        console.error("Error from Gemini:", error);
        setMessages((prevMessages) => [...prevMessages, { text: "Sorry, I encountered an error. Try again later.", isUser: false }]);
      }

      setInput('');
    }
  };

  const handleFunctionCall = (functionCall) => {
    const { name, args } = functionCall;

    switch (name) {
      case "addToCart":
        const product = products.find((p) => p.id === args.id);
        if (product) {
          addToCart(product);
          showToast({ title: "Item Added", content: product.name, image: product.image });
        }
        break;
      case "updateQuantity":
        updateQuantity(args.id, args.quantity);
        showToast({ title: "Quantity Updated", content: `Updated quantity to ${args.quantity}` });
        break;
      case "removeItem":
        removeItem(args.id);
        showToast({ title: "Item Removed", content: "Item removed from cart" });
        break;
      default:
        console.warn("Unexpected function call:", name);
        break;
    }
  };

  return (
    <>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className={`w-96 bg-white border border-gray-200 rounded-lg shadow-lg ${isOpen ? 'h-96' : 'h-12'}`}>
          <div className="p-2 border-b">
            <div className="text-sm flex justify-between items-center">
              <span className="font-semibold">Copilot</span>
              <button className="p-1" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </button>
            </div>
          </div>
          {isOpen && (
            <>
              <div className="p-4">
                <div className="h-64 overflow-y-auto pr-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                      <span className={`inline-block p-2 rounded-lg ${msg.isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                        {msg.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-2 border-t">
                <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type a command..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}