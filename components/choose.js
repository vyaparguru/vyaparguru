// pages/why-us.js
import React from 'react';
import { FaPalette, FaLightbulb, FaHeadset, FaChartLine, FaChartPie, FaDollarSign, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';

const features = [
  { title: "Modern Design", icon: <FaPalette />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
  { title: "Creative Design", icon: <FaLightbulb />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
  { title: "24X7 User Support", icon: <FaHeadset />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
  { title: "Business Growth", icon: <FaChartLine />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
  { title: "Market Strategy", icon: <FaChartPie />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
  { title: "Affordable Cost", icon: <FaDollarSign />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
  { title: "Safe", icon: <FaShieldAlt />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
  { title: "Fast", icon: <FaTachometerAlt />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
];

const testimonials = [
  {
    name: "John Doe",
    review: "This service is amazing! It has greatly improved our productivity and efficiency. Highly recommend to anyone!",
  },
  {
    name: "Jane Smith",
    review: "Exceptional support and fantastic features. It’s user-friendly and has helped us grow significantly in the past year.",
  },
  {
    name: "Robert Brown",
    review: "Affordable, reliable, and very effective. We’ve been using it for months, and the results speak for themselves.",
  },
];

const Choose = () => {
  return (
    <section className="bg-white px-4 md:px-8 lg:px-36">
      {/* Why Choose Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500">
          Why Choose Us
        </h2>
        <p className="mt-2 text-black">
        Hear from some of our happy clients who have experienced firsthand the benefits of our services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border-2 border-blue-500 p-6 bg-blue-500 shadow-lg flex flex-col items-center text-center"
          >
            <div className="bg-blue-100 p-4 rounded-full text-blue-500 text-3xl mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="text-center mb-12 py-4">
        <h2 className="text-4xl font-bold text-blue-500">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-black max-w-2xl mx-auto">
          Hear from some of our happy clients who have experienced firsthand the benefits of our services.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-blue-500 border-2 border-blue-500 p-8 shadow-lg w-full md:w-1/3"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{testimonial.name}</h3>
            <p className="text-white italic">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
