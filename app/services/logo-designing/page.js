// pages/index.js
"use client"
import Link from "next/link";

import seo from "@/assets/banner2.jpg";
import Image from "next/image";

const LogoDesigning = () => {
  return (
    <section className="py-16 md:py-48 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center gap-10 md:gap-14">
      {/* Left Section */}
      <div className="md:w-1/2">
        <p className="text-blue-500 font-medium uppercase tracking-wide mb-8">
          LOGO DESIGNING
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-8">
        Craft a logo that represents your brand's identity.
        </h2>
        <p className="text-gray-600 mb-8">
        A logo is more than just a design—it's your brand’s first impression. Our expert designers create unique and memorable logos that capture your essence and leave a lasting impact. Let us help you establish a strong visual identity that resonates with your audience.
        </p>
        <Link href="/contact" className="inline-block px-6 py-3 text-blue-500 font-medium border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
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

export default LogoDesigning;
