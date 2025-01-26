// pages/index.js
"use client"
import Link from "next/link";
import website from "@/public/banner1.jpg";
import Image from "next/image";

const GoogleAds = () => {
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
          GOOGLE ADS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-4">
        Maximize visibility and drive results with targeted Google Ads campaigns.
        </h2>
        <p className="text-gray-600 mb-6">
        Our Google Ads experts create data-driven campaigns that deliver immediate visibility and measurable ROI. By targeting the right audience with compelling ads, we help you reach your goals, whether it's increasing website traffic, generating leads, or boosting sales.
        </p>
        <Link href="/contact" className="inline-block px-6 py-3 text-blue-500 font-medium border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            Explore More →
        </Link>
      </div>
    </section>
  );
};

export default GoogleAds;
