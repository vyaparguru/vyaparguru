// pages/index.js
"use client"
import Link from "next/link";

import seo from "../assets/banner2.jpg";
import Image from "next/image";

const Service5 = () => {
  return (
    <section className="bg-blue-50 py-16 md:py-40 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center gap-10 md:gap-14">
      {/* Left Section */}
      <div className="md:w-1/2">
        <p className="text-blue-500 font-medium uppercase tracking-wide mb-8">
          SOCIAL MEDIA MARKETING
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-8">
        Build your brand presence across social platforms effectively.
        </h2>
        <p className="text-gray-600 mb-8">
        Our social media marketing services create impactful campaigns that connect with your audience. By leveraging the power of platforms like Facebook, Instagram, and LinkedIn, we help you engage, inspire, and grow your community while driving meaningful results for your business.
        </p>
        <Link href="/services/social-media-marketing" className="inline-block px-6 py-3 text-blue-500 font-medium border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
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

export default Service5;
