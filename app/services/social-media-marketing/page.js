// pages/index.js
"use client"
import Link from "next/link";

import seo from "@/assets/banner2.jpg";
import Image from "next/image";

const SocialMediaMarketing = () => {
  return (
    <section className="py-16 md:py-48 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center gap-10 md:gap-14">
      {/* Left Section */}
      <div className="md:w-1/2">
        <p className="text-blue-500 font-medium uppercase tracking-wide mb-8">
          SOCIAL MEDIA MARKETING
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-8">
          We Help to Create Strategies, Design
        </h2>
        <p className="text-gray-600 mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
        </p>
        <Link href="/services/app-design" className="inline-block px-6 py-3 text-blue-500 font-medium border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            Explore More →
        </Link>
      </div>

      {/* Right Section (Image Container) */}
      <div className="md:w-1/2 relative">
        <div>
          <Image
            src={seo} 
            alt="SEO"
            className="rounded-lg md:h-[450px] md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialMediaMarketing;
