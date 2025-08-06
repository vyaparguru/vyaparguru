"use client"
import Image from "next/image";
import missionImage from "../public/strategies.jpg";
import profileImage from "../public/footerlogo.png";

const Mission = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-20 lg:px-40 bg-blue-50">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We Help to Create <span className="text-blue-500">Strategies</span>, Design
          </h2>
          <p className="mt-4 text-gray-600 text-lg">

            We specialize in crafting effective strategies and innovative designs that empower your business to stand out, grow, and succeed. Our team combines creativity with strategic thinking to deliver tailored solutions that align with your goals, ensuring impactful results and a lasting impression.
          </p>
          <div className="mt-6 p-6 bg-blue-100 rounded-md shadow-md">
            <p className="text-gray-700">
              Our mission is to deliver innovative solutions that empower businesses to achieve their goals. At Vyapar Guru Infotech Pvt Ltd, we are committed to excellence, building trust, and driving meaningful impact for every client we serve.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Image
                src={profileImage}
                alt="image1"
                className="w-9 h-9 "
              />
              <div>
                <h4 className="text-lg font-bold text-black">Saras Kohli</h4>
                <p className="text-sm text-gray-600">Founder | CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:w-1/2">
          <Image
            src={missionImage}
            alt="image2"
            className="rounded-lg shadow-md "
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
