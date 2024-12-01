// pages/index.js
"use client"
import Link from "next/link";
import website from "../assets/banner1.jpg";
import Image from "next/image";

const Service2 = () => {
  return (
    <section className=" py-16 md:py-40 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center gap-10 md:gap-14">
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
          Website Designing
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-4">
          We’re Created a Visual System and Strategy
        </h2>
        <p className="text-gray-600 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
        </p>
        <Link href="/services/web-designing" className="inline-block px-6 py-3 text-blue-500 font-medium border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            Explore More →
        </Link>
      </div>
    </section>
  );
};

export default Service2;
