"use client";
import Image from "next/image";
import profileImg from "../assets/banner1.jpg"; // Replace with your image path

export const HomeAbout = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-40 py-10 md:py-20 bg-white">
      {/* Left Section - Image */}
      <div className="hidden md:block ">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={profileImg}
            alt="About Us Image"
            className="object-cover w-[550px] h-[600px]"
          />
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h3 className="text-blue-500 text-lg uppercase">
          About Us
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          We Provide Digital <br /> Solutions for Your Business
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        At Vyapar Guru Infotech, we provide tailored service solutions designed to meet your unique needs. Our expert team focuses on innovation and excellence to deliver results that drive success. Partner with us for solutions that inspire, empower, and transform your business.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center md:text-left">
          <div>
            <p className="text-blue-500 text-md md:text-lg">Websites</p>
            <h4 className="text-4xl md:text-5xl font-bold text-black">200+</h4>
          </div>
          <div>
            <p className="text-blue-500 text-md md:text-lg">Happy Clients</p>
            <h4 className="text-4xl md:text-5xl font-bold text-black">100+</h4>
          </div>
          <div>
            <p className="text-blue-500 text-md md:text-lg">Experience</p>
            <h4 className="text-4xl md:text-5xl font-bold text-black">10+</h4>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default HomeAbout;
