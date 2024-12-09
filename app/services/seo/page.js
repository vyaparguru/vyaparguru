// pages/index.js
"use client"
import Link from "next/link";
import seo from "@/assets/banner2.jpg";
import Image from "next/image";

const SEO = () => {
  return (
    <section className="py-16 md:py-48 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center gap-10 md:gap-14">
      {/* Left Section */}
      <div className="md:w-1/2">
        <p className="text-blue-500 font-medium uppercase tracking-wide mb-8">
          SEARCH ENGINE OPTIMIZATION
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-8">
        Drive traffic and improve rankings with optimized SEO strategies.
        </h2>
        <p className="text-gray-600 mb-8">
        Our SEO services ensure your website is easily discoverable by search engines and audiences alike. From keyword research to on-page and off-page optimization, we focus on improving your visibility, driving organic traffic, and delivering measurable results to help your business grow.
        </p>
        <Link href="/contact" className="inline-block px-6 py-3 text-blue-500 font-medium border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
          Explore More →
        </Link>
      </div>

      {/* Right Section (Image Container) */}
      <div className="md:w-1/2 relative">
        <div className="relative">
          <Image
            src={seo} 
            alt="SEO"
            className="rounded-lg md:h-[450px] md:w-auto" // Increased height for desktop
          />
        </div>
      </div>
    </section>
  );
};

export default SEO;
