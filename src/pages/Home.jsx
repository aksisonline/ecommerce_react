import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/Products';

export default function Home() {
  const featuredProducts = [products[0], products[1], products[2], products[4]];

  const latestDeals = [
    {
      id: 1,
      name: 'Deal 1',
      description: 'Save 20% on all electronics!',
      image:
        'https://th.bing.com/th/id/OIP.tdaQ3-VLGlZNzFmp-gvzMwAAAA?rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      name: 'Deal 2',
      description: 'Buy 1 Get 1 Free on selected fashion items!',
      image:
        'https://th.bing.com/th/id/OIP.eRr2i5ljCESwIaVNoT6BOQHaD4?rs=1&pid=ImgDetMain',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      feedback:
        'Fantastic service and high-quality products! Highly recommend E-React for online shopping.',
      image:
        'https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=134&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback:
        'E-React made my shopping experience so easy and enjoyable. The deals are amazing!',
      image:
        'https://th.bing.com/th/id/OIP.pYFUThD3lXgVcPzPJsOSKQHaKi?w=142&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to E-React</h1>
        <h2 className="text-xl mb-6">Your one-stop shop for all your needs</h2>
        <Link
          to="/shop"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Shop Now
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Latest Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {latestDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{deal.name}</h3>
                <p className="text-gray-600">{deal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customer Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden p-4 flex items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
