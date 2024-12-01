"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import seo from "../assets/banner1.jpg";
import seo1 from "../assets/banner2.jpg";

const services = [
  { src: seo, alt: "SEO" },
  { src: seo1, alt: "Digital Marketing" },
  { src: seo, alt: "Logo Design" },
  { src: seo, alt: "Social Media Marketing" },
  { src: seo, alt: "Website Designing" },
];

export const ServiceGallery = () => {
  const [startX, setStartX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      // Swiped left
      setCurrentIndex((prev) => (prev + 1) % services.length);
    } else if (endX - startX > 50) {
      // Swiped right
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  return (
    <div className="mt-8 py-6">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
        <span className="text-blue-500">Services</span><br/> We Are Offering
      </h2>
      
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-40 py-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`overflow-hidden shadow-lg transform ${
              index === 2 ? "row-span-2 h-[628px]" : "h-[300px]"
            }`}
          >
            <Image
              src={service.src}
              alt={service.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        <div
          className="flex overflow-x-scroll snap-x snap-mandatory"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`snap-center flex-shrink-0 w-full p-4 ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <div className="overflow-hidden shadow-lg">
                <Image
                  src={service.src}
                  alt={service.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Swipe Icon */}
        <div className="flex justify-center items-center mt-4">
          <span className="text-sm text-gray-500 ml-2">
            Swipe to explore
          </span>
          <IoIosArrowRoundForward className="text-blue-500 text-4xl" />
        </div>
      </div>
    </div>
  );
};
