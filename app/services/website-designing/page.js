"use client"
import Link from "next/link";
import website from "@/assets/banner1.jpg";
import Image from "next/image";

const WebsiteDesigning = () => {
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
          Website Designing
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-4">
        Build a stunning, user-friendly website tailored to your needs.
        </h2>
        <p className="text-gray-600 mb-6">
        We specialize in creating responsive, modern websites that reflect your brand and meet your business objectives. From e-commerce platforms to corporate sites, we ensure your online presence is not only visually appealing but also functional and optimized for performance.
        </p>
        <Link href="/contact" className="inline-block px-6 py-3 text-blue-500 font-medium border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            Explore More →
        </Link>
      </div>
    </section>
  );
};

export default WebsiteDesigning;
