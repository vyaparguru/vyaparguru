// pages/index.js
"use client"
import Link from "next/link";
import website from "@/assets/banner1.jpg";
import Image from "next/image";

const DigitalMarketing = () => {
  return (
    <section className=" py-16 md:py-48 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center gap-10 md:gap-14">
      {/* Left Section (Image Container) */}
      <div className="md:w-1/2 relative">
        <div>
          <Image
            src={website} 
            alt="Website"
            className="rounded-lg md:h-[450px] md:w-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        <p className="text-blue-500 font-medium uppercase tracking-wide mb-4">
          DIGITAL MARKETING
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-4">
        Reach your audience and grow your brand with tailored digital marketing.
        </h2>
        <p className="text-gray-600 mb-6">
        Our comprehensive digital marketing solutions cover everything from content marketing to email campaigns and performance analytics. We design strategies that engage your audience, boost brand awareness, and convert leads into loyal customers, ensuring sustainable growth for your business.
        </p>
        <Link href="/services/product-design" className="inline-block px-6 py-3 text-blue-500 font-medium border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            Explore More →
        </Link>
      </div>
    </section>
  );
};

export default DigitalMarketing;
