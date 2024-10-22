import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I track my order?",
    answer:
      "You can track your order by logging into your account and viewing the order details. We also send tracking information via email once your order has been shipped.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Please refer to our full return policy for more details.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Shipping rates and delivery times vary depending on the destination.",
  },
  {
    question: "How can I change or cancel my order?",
    answer:
      "You can change or cancel your order within 1 hour of placing it. Please contact our customer service team as soon as possible if you need to make changes.",
  },
];

export default function CustomerService() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Customer Service</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
                </svg>
                <span>support@tenduzone.com</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.478 15.478 0 006.59 6.59l2.2-2.2a1.005 1.005 0 011.05-.27c1.12.37 2.33.57 3.54.57.55 0 1 .45 1 1v3.72c0 .55-.45 1-1 1C9.39 22 2 14.61 2 5.01c0-.55.45-1 1-1H6.72c.55 0 1 .45 1 1 0 1.21.2 2.42.57 3.54.12.36.04.77-.27 1.05l-2.2 2.19z" />
                </svg>
                <span>+1 (800) 123-4567</span>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              Our customer service team is available Monday through Friday, 9am
              to 5pm EST.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="flex justify-between w-full p-4 bg-gray-100 hover:bg-gray-200"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span
                  className={`transform transition-transform ${
                    expanded === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {expanded === index && (
                <div className="p-4 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <p className="mb-2">We offer the following shipping options:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Standard Shipping (3-5 business days)</li>
          <li>Express Shipping (2-3 business days)</li>
          <li>Next Day Delivery (order by 2pm for next-day delivery)</li>
        </ul>
        <p>
          For more detailed information about our shipping policies and rates,
          please visit our{" "}
          <Link to="/shipping-policy" className="text-blue-600 hover:underline">
            Shipping Policy
          </Link>{" "}
          page.
        </p>
      </section>
    </div>
  );
}
