// pages/services.js
"use client"
import React from 'react';
import { FaSearch, FaLaptopCode, FaPencilRuler, FaBullhorn, FaThumbsUp } from 'react-icons/fa';

const services = [
  {
    title: "SEO",
    icon: <FaSearch />,
    description: "Boost your website's visibility on search engines with our cutting-edge SEO strategies.",
  },
  {
    title: "Website Design",
    icon: <FaLaptopCode />,
    description: "Create stunning, responsive websites that captivate your audience and enhance user experience.",
  },
  {
    title: "Logo Design",
    icon: <FaPencilRuler />,
    description: "Craft memorable and unique logos that define your brand and leave a lasting impression.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    description: "Reach your target audience effectively through our comprehensive digital marketing services.",
  },
  {
    title: "Social Media Marketing",
    icon: <FaThumbsUp />,
    description: "Engage with your customers and grow your brand on social media platforms.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-32">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500">
          Our Services
        </h2>
        <p className="mt-2 text-black max-w-2xl mx-auto">
          Explore the range of professional services we offer to take your business to the next level.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-500 border-2 border-blue-500 p-6 shadow-lg flex flex-col items-center text-center"
          >
            <div className="bg-blue-100 p-4 rounded-full text-blue-500 text-4xl mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-white text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
