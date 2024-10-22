import React, { useState } from "react";
import { ChevronUp, ChevronDown, Send } from "lucide-react";
import { useCart } from "./context/CartContext";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Copilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const apiKey = process.env.GEMINI_API_KEY;
  const generativeAI = new GoogleGenerativeAI(apiKey);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);

      try {
        const response = await generativeAI.generate({
          prompt: input,
          maxTokens: 64,
          temperature: 0.7,
        });

        const generatedText = response.text;
        setMessages([...messages, { text: generatedText, isUser: false }]);

        // Process Gemini response for cart actions
        const { addToCart, updateQuantity, removeItem } = useCart();

        if (generatedText.includes("add")) {
          // Extract product name from the prompt (using regular expressions)
          const productNameMatch = input.match(/add (.*) to cart/i);
          if (productNameMatch) {
            const productName = productNameMatch[1].trim();
            const product = products.find(
              (product) =>
                product.name.toLowerCase() === productName.toLowerCase(),
            );
            if (product) {
              addToCart(product);
            } else {
              setMessages([
                ...messages,
                { text: `Product '${productName}' not found!`, isUser: false },
              ]);
            }
          } else {
            setMessages([
              ...messages,
              {
                text: "Could not understand the product to add.",
                isUser: false,
              },
            ]);
          }
        } else if (generatedText.includes("update quantity")) {
          // Extract product ID and new quantity from the prompt (using regular expressions)
          const quantityMatch = input.match(
            /update quantity of (.*) to (\d+)/i,
          );
          if (quantityMatch) {
            const productId = products.find(
              (product) =>
                product.name.toLowerCase() === quantityMatch[1].trim(),
            )?.id;
            const newQuantity = parseInt(quantityMatch[2]);
            if (productId && newQuantity > 0) {
              updateQuantity(productId, newQuantity);
            } else {
              setMessages([
                ...messages,
                { text: "Invalid product or quantity.", isUser: false },
              ]);
            }
          } else {
            setMessages([
              ...messages,
              {
                text: "Could not understand product or new quantity.",
                isUser: false,
              },
            ]);
          }
        } else if (generatedText.includes("remove")) {
          // Extract product name from the prompt (using regular expressions)
          const productNameMatch = input.match(/remove (.*) from cart/i);
          if (productNameMatch) {
            const productName = productNameMatch[1].trim();
            const product = products.find(
              (product) =>
                product.name.toLowerCase() === productName.toLowerCase(),
            );
            if (product) {
              removeItem(product.id);
            } else {
              setMessages([
                ...messages,
                {
                  text: `Product '${productName}' not found in cart!`,
                  isUser: false,
                },
              ]);
            }
          } else {
            setMessages([
              ...messages,
              {
                text: "Could not understand the product to remove.",
                isUser: false,
              },
            ]);
          }
        }
      } catch (error) {
        console.error("Error with Gemini API:", error);
        setMessages([
          ...messages,
          { text: "Something went wrong...", isUser: false },
        ]);
      }

      setInput("");
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`w-96 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "h-96" : "h-12"}`}
      >
        <div className="p-2 border-b">
          <div className="text-sm flex justify-between items-center">
            <span className="font-semibold">Copilot</span>
            <button
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="p-4">
              <div className="h-64 overflow-y-auto pr-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}
                  >
                    <span
                      className={`inline-block p-2 rounded-lg ${msg.isUser ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t">
              <form
                onSubmit={handleSubmit}
                className="flex w-full items-center space-x-2"
              >
                <input
                  type="text"
                  placeholder="Type a command..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
  );
}
