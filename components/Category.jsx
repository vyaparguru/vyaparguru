"use client";

import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import FaqSection from "./Accordion";
import LetsTalk from "./Letstalk";

export default function Category({
  bannerImage,
  title,
  subtitle,
  popularServices,
  categories
}) {
  return (
    <>
      <div className="py-36 md:py-64 lg:py-36 px-5 md:px-10 lg:px-44">
        <div className="relative text-white px-6 py-12 md:py-16 mb-12 text-center rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage.src})` }}></div>
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            <p className="text-xl mt-2">{subtitle}</p>
          </div>
        </div>

        <div className="mt-8 mb-16">
          <span className="text-gray-700 text-2xl font-semibold mb-6">Most Popular In {title}</span>
          <div className="flex gap-4 mt-4 flex-wrap">
            {popularServices.map(({ id, item, icon }) => (
              <button key={id} className="border border-gray-300 text-gray-800 px-4 py-3 rounded-md flex items-center shadow-md">
                {icon}
                <div className="flex gap-2 justify-center items-center hover:text-blue-500">
                  <span className="ml-2">{item}</span>
                  <IoMdArrowForward className="ml-2" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <span className="text-gray-700 text-2xl font-semibold mb-6 ">Explore {title}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
            {categories.map(({ title, services, image }, index) => (
              <div key={index} className="bg-white flex flex-col">
                <Image alt="marketing" src={image} className="rounded-lg mb-4 w-[30rem] h-[200px] lg:w-[20rem] lg:h-[180px]" />
                <h3 className="font-semibold text-2xl">{title}</h3>
                <ul className="mt-4 space-y-2">
                  {services.map((service, i) => (
                    <li key={i} className="text-gray-700 text-lg py-1 cursor-pointer">{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="-mt-28">
        <FaqSection />
        <LetsTalk />
      </div>
    </>
  );
}
