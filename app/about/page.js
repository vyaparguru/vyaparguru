"use client"

import Image from "next/image";
import profileImg from "../../public/banner1.jpg"; 
import LetsTalk from "@/components/HomeScreen/Letstalk";
import Mission from "@/components/Mission";

export const About = () => {
  return (
    <>
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-40 pt-24 pb-10 md:pt-24 md:py-24 bg-white">
      {/* Left Section - Image */}
      <div className="block pt-5">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={profileImg}
            alt="About Us Image"
            className="object-cover md:w-[550px] md:h-[600px]"
          />
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h3 className="text-blue-500 text-lg uppercase">
          About Us
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          We Provide Digital <br /> Solutions for Your Business
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        At Vyapar Guru Infotech Pvt Ltd, we provide tailored service solutions designed to meet your unique needs. Our expert team focuses on innovation and excellence to deliver results that drive success. Partner with us for solutions that inspire, empower, and transform your business.
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
    <Mission/>
    <LetsTalk/>
    </>
  );
};

export default About;
