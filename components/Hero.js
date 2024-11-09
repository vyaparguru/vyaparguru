// components/Hero.js
"use client";

import { useState } from "react";
import Image from "next/image";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import Link from "next/link";

const banners = [banner1, banner2];

const Hero = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section
      className="relative text-white text-center py-32 flex flex-col items-center justify-center h-[72vh] w-full bg-cover bg-center bg-black"
      style={{
        backgroundImage: `url(${banners[currentBanner].src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-8 rounded-md">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4">Delivering excellence in every project we undertake.</p>
        <Link href="/services">
          <button className="mt-8 px-6 py-2 bg-white text-blue-500 font-semibold rounded">
            Our Services
          </button>
        </Link>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 p-2 rounded-full hover:bg-gray-700 z-10"
      >
        &#9664;
      </button>
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 p-2 rounded-full hover:bg-gray-700 z-10"
      >
        &#9654;
      </button>
    </section>
  );
};

export default Hero;
