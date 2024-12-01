"use client";
import Image from "next/image";
import procedure from "../assets/banner1.jpg"; // Replace with your asset path

export const Procedure = () => {
  return (
    <div className="bg-white py-16 md:py-14 px-4 md:px-20 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={procedure} // Replace with your image
          alt="Procedure"
          width={500}
          height={500}
          className="object-contain rounded-lg"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Simple <span className="text-blue-500">Solutions!</span>
        </h2>
        <p className="text-gray-600 mb-6">
          We understand that no two businesses are alike. That's why we take the
          time to understand.
        </p>

        {/* Steps */}
        <div className="space-y-4">
          {[
            { number: "1", title: "Contact us", desc: "Contact us to discuss your business needs." },
            { number: "2", title: "Consult", desc: "Always available to answer your questions." },
            { number: "3", title: "Place order", desc: "Plan your strategy today to proceed." },
            { number: "4", title: "Payment", desc: "We support payments for all types of funding." },
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full text-lg font-bold">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold">
            Get Started
          </button>
          <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};
