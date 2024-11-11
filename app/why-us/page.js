// pages/why-us.js
import Choose from '@/components/choose';
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

const WhyUs = () => {
  return (
    <>
    <section className="bg-white py-16">
      <Choose />
    </section>
    </>
  );
};

export default WhyUs;
