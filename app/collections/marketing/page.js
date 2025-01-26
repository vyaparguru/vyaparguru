"use client";

import Image from "next/image";
import banner from "@/public/banner1.jpg";
import FaqSection from "@/components/Accordion";
import LetsTalk from "@/components/Letstalk";
import { FaMeta, FaPersonCircleExclamation } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { PiMetaLogo } from "react-icons/pi";
import { TbSettingsBolt } from "react-icons/tb";

export default function Marketing() {
  const popular = [
    {
      id: 1,
      item: "Social Media Management",
      icon: <TbSettingsBolt size={47} className="bg-blue-50 p-2 rounded-lg" />,
    },
    {
      id: 2,
      item: "Meta Ads",
      icon: <PiMetaLogo size={47} className="bg-blue-50 p-2 rounded-lg " />,
    },
  ];

  return (
    <>
      <div className="py-36 md:py-64 lg:py-36 px-5 md:px-10 lg:px-44">
        {/* Background section with opacity */}
        <div className="relative text-white px-6 py-12 md:py-16 mb-12 text-center rounded-lg overflow-hidden">
          {/* Background Image and Opacity */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${banner.src})`,
            }}
          ></div>

          {/* Semi-Transparent Overlay */}
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold">Marketing</h1>
            <p className="text-xl mt-2">Take your Marketing to the next level.</p>
          </div>
        </div>

        {/* Popular section */}
        <div className="mt-8 mb-16">
          <h2 className="text-gray-700 text-2xl font-semibold">
            Most popular in Marketing
          </h2>
          <div className="flex gap-4 mt-4 flex-wrap">
            {popular.map((item) => (
              <button
                key={item.id}
                className="border border-gray-300 text-gray-800 px-4 py-3 rounded-md flex items-center shadow-md"
              >
                {item.icon}
                <div className="flex gap-2 justify-center items-center hover:text-blue-500">
                  <span className="ml-2 ">{item.item}</span>
                  <span className="ml-2 ">
                    <IoMdArrowForward />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Explore Marketing Section */}
        <div className="mt-12">
          <h2 className="text-gray-700 text-2xl font-semibold mb-6">
            Explore Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-0">
            {[
              {
                title: "Digital Marketing",
                services: ["Social Media Management", "Meta Ads"],
              },
              {
                title: "Whatsapp Marketing",
                services: [],
              },
            ].map((category, index) => (
              <div key={index} className="bg-white flex flex-col">
                <Image
                  alt="marketing"
                  src={banner}
                  className="rounded-lg mb-4 w-[30rem] h-[200px] lg:w-[20rem] lg:h-[200px]"
                />
                <h3 className="font-semibold text-2xl">{category.title}</h3>
                <ul className="mt-4 space-y-2">
                  {category.services.map((service, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-lg py-1 cursor-pointer"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ and LetsTalk sections */}
      <div className="-mt-28">
        <FaqSection />
        <LetsTalk />
      </div>
    </>
  );
}
