import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Pavan Charith',
      role: 'CEO',
      image:
        'https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/275783503_3825428154349412_656515853661936753_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=3QC1A6CkWwkQ7kNvgFH333v&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=ARqDtvTvLoDWPUUIU--pDzm&oh=00_AYDuTvKzdkHO5lJjJprk1n-znlK8OLLaOTi-1sIFxXD3Jw&oe=672775AD',
    },
    {
      name: 'Abhiram Kanna Seelamanthula',
      role: 'CTO',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQFe2rJK_oRy2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721644215887?e=1735171200&v=beta&t=LXvDSsvxbuFDVIYfpIMmnw9Eq2zOvbQDRGzhIG5JJcg',
    },
    {
      name: 'Tanooj Vardhan',
      role: 'Head of Marketing',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQEjYqdsllsrUA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696756780387?e=1735171200&v=beta&t=NNgZH2Nw5qOyo-uKBm-DMNCO9M9SLcpLRr9cLHWtvPI',
    },
  ];

  return (
    <div className="bg-white-50 container mx-auto py-12 px-4 overflow-visible">
      <h1 className="text-4xl font-bold mb-6 text-center text-white-600">
        About Us
      </h1>
      <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        At Shopie, our mission is to create exceptional experiences for our
        customers. With a focus on innovation, quality, and customer
        satisfaction, we strive to exceed expectations every step of the way.
        Learn more about our journey and the values that drive us forward.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To deliver high-quality products that bring value and convenience to
            our customers' lives, while fostering a culture of excellence and
            integrity.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be a global leader in e-commerce by offering innovative
            solutions, building strong relationships with our customers, and
            continuously improving our services.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p className="text-gray-600">
            Integrity, Excellence, Innovation, and Customer Satisfaction are at
            the heart of everything we do, guiding our decisions and actions.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center transform transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Journey</h2>
        <div className="space-y-8">
          <div className="bg-white-100 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">
              2020 - The Beginning
            </h3>
            <p className="text-gray-600">
              Shopie started as a small startup with a big vision: to make
              online shopping more accessible and enjoyable for everyone. From
              humble beginnings, we have grown steadily by putting our customers
              first.
            </p>
          </div>
          <div className="bg-white-100 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">2022 - Expansion</h3>
            <p className="text-gray-600">
              After establishing a solid foundation, we expanded our product
              range and introduced new categories to meet the diverse needs of
              our growing customer base.
            </p>
          </div>
          <div className="bg-white-100 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">2024 - Today</h3>
            <p className="text-gray-600">
              Today, Shopie is a leading name in the e-commerce space, known
              for our innovative approach, exceptional customer service, and
              unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          We believe in the power of collaboration and community. Whether you're
          a customer, partner, or potential team member, we invite you to be
          part of our story as we continue to grow and evolve.
        </p>
        {/* <Link
          to="/careers"
          className="inline-block bg-white-600 text-white px-6 py-3 rounded hover:bg-white-700 transition duration-200"
        >
          Explore Careers
        </Link> */}
      </section>
    </div>
  );
}
