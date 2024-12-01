// pages/index.js
"use client";

import Image from "next/image";
import { FaBolt, FaCheckCircle, FaClock, FaDollarSign, FaHandHoldingUsd, FaPhoneAlt } from "react-icons/fa"; 
import { FaPerson } from "react-icons/fa6";
import profileImg from "../../assets/banner1.jpg"; // Replace with your actual image path
import Testimonials from "@/components/Testimonials";
import LetsTalk from "@/components/Letstalk";

const WhyUs = () => {
  return (
    <>
    <section className="bg-white py-28 pb-20 md:py-44 md:pb-20 px-6 md:px-20 lg:px-40">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Section */}
        <div className="md:w-1/2">
          <Image
            src={profileImg}
            alt="Professional"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          {/* Heading */}
          <p className="text-blue-500 font-medium uppercase tracking-wide mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Reason for chosen us
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed
            do eiusmod tempor incididunt simply free ut labore.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature Item */}
            <div className="flex items-start gap-4">
              <div className="p-3 border-2 border-blue-500 rounded-lg text-blue-500">
                <FaBolt className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">
                  Fast Processing
                </h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectet.
                </p>
              </div>
            </div>

            {/* Feature Item */}
            <div className="flex items-start gap-4">
              <div className="p-3 border-2 border-blue-500 rounded-lg text-blue-500">
                <FaCheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">
                  Trusted Company
                </h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectet.
                </p>
              </div>
            </div>

            {/* Feature Item */}
            <div className="flex items-start gap-4">
              <div className="p-3 border-2 border-blue-500 rounded-lg text-blue-500">
                <FaClock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">
                  In-time Delivery
                </h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectet.
                </p>
              </div>
            </div>

            {/* Feature Item */}
            <div className="flex items-start gap-4">
              <div className="p-3 border-2 border-blue-500 rounded-lg text-blue-500">
                <FaHandHoldingUsd className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">
                  Reasonable Price
                </h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectet.
                </p>
              </div>
            </div>

            {/* Feature Item */}
            <div className="flex items-start gap-4">
              <div className="p-3 border-2 border-blue-500 rounded-lg text-blue-500">
                <FaPerson className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">
                  Experienced Professionals
                </h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectet.
                </p>
              </div>
            </div>

            {/* Feature Item */}
            <div className="flex items-start gap-4">
              <div className="p-3 border-2 border-blue-500 rounded-lg text-blue-500">
                <FaPhoneAlt className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">
                  24/7 Support
                </h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimonials/>
    <LetsTalk/>
    </>
  );
};

export default WhyUs;
