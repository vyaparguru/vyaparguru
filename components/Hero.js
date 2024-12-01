// components/Hero.js
"use client";

import { useState } from "react";
import Image from "next/image";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Import React Icons

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
      className="relative text-white text-center py-32 flex flex-col items-center justify-center h-[85vh] w-full bg-cover bg-center bg-black"
      style={{
        backgroundImage: `url(${banners[currentBanner].src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-8 rounded-md">
        <h1 className="text-4xl md:text-4xl font-extrabold">
          Make Digital Product With Our Agency
        </h1>
        <p className="mt-4 text-md md:text-xl">
          Delivering excellence in every project we undertake.
        </p>
        <Link href="/services">
          <button className="mt-8 px-6 py-2 md:py-3 bg-white text-blue-500 text-lg font-bold rounded-full">
            Our Services
          </button>
        </Link>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevBanner}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-opacity-70 p-2 rounded-full z-10 flex items-center justify-center"
      >
        <AiOutlineLeft className="text-white text-2xl" /> {/* Left Arrow Icon */}
      </button>
      <button
        onClick={nextBanner}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-opacity-70 p-2 rounded-full z-10 flex items-center justify-center"
      >
        <AiOutlineRight className="text-white text-2xl" /> {/* Right Arrow Icon */}
      </button>
    </section>
  );
};

export default Hero;
