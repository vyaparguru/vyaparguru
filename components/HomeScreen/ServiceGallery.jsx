"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import marketing from "@/public/marketing.jpg";
import ecom from "@/public/ecom.jpg";
import it from "@/public/it.jpg";
import content from "@/public/content.jpg";
import business from "@/public/business.jpg";
import legal from "@/public/legal.jpg";

const services = [
  { src: marketing, alt: "Marketing" },
  { src: ecom, alt: "eCommerce" },
  { src: it, alt: "IT Services" },
  { src: content, alt: "Content Creation" },
  { src: business, alt: "Business Set-up" },
  { src: legal, alt: "Legal, Book Keeping and Compliance" },
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
      setCurrentIndex((prev) => (prev + 1) % services.length);
    } else if (endX - startX > 50) {
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  return (
    <div className="mt-8 py-6">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
        <span className="text-blue-500">Services</span><br /> We Are Offering
      </h2>

      <div className="hidden md:grid grid-cols-3 gap-4 px-40 py-16">
        {services.map((service, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg transform rounded-lg group">
            <Image src={service.src} alt={service.alt} width={400} height={300} className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-blue-600 text-xl font-semibold">{service.alt}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-col items-center">
        <div className="flex overflow-x-scroll snap-x snap-mandatory" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {services.map((service, index) => (
            <div key={index} className={`snap-center flex-shrink-0 w-full p-4 ${index === currentIndex ? "block" : "hidden"}`}>
              <div className="overflow-hidden shadow-lg">
                <Image src={service.src} alt={service.alt} width={400} height={300} className="object-cover w-full h-full rounded-lg" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-4">
          <span className="text-sm text-gray-500 ml-2">Swipe to explore</span>
          <IoIosArrowRoundForward className="text-blue-500 text-4xl" />
        </div>
      </div>
    </div>
  );
};
