import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Tech Gadgets for 2023",
    excerpt:
      "Discover the most innovative and must-have tech gadgets that are set to revolutionize your daily life in 2023.",
    image: "/placeholder.svg",
    date: "2023-05-15",
    category: "Technology",
  },
  {
    id: 2,
    title: "Summer Fashion Trends: What's Hot and What's Not",
    excerpt:
      "Get ready for the summer season with our comprehensive guide to the latest fashion trends that will keep you stylish and comfortable.",
    image: "/placeholder.svg",
    date: "2023-05-10",
    category: "Fashion",
  },
  {
    id: 3,
    title: "5 Easy Home Decor Ideas to Refresh Your Space",
    excerpt:
      "Transform your living space with these simple yet effective home decor ideas that won't break the bank.",
    image: "/placeholder.svg",
    date: "2023-05-05",
    category: "Home & Living",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Choosing the Perfect Laptop",
    excerpt:
      "Navigate the complex world of laptops with our comprehensive guide to help you find the perfect device for your needs and budget.",
    image: "/placeholder.svg",
    date: "2023-04-30",
    category: "Technology",
  },
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                {post.date} | {post.category}
              </p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Load More Posts
        </button>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Technology",
            "Fashion",
            "Home & Living",
            "Lifestyle",
            "Health & Wellness",
          ].map((category) => (
            <Link
              key={category}
              to={`/blog/category/${category.toLowerCase()}`}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-4">
            Stay up to date with our latest blog posts, product releases, and
            exclusive offers!
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
