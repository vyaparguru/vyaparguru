// components/Mission.js
"use client"
import Image from "next/image";
import missionImage from "../assets/banner1.jpg"; // Replace with the actual image path
import profileImage from "../assets/banner2.jpg"; // Replace with the actual profile path

const Mission = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-20 lg:px-40 bg-blue-50">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We Help to Create <span className="text-blue-500">Strategies</span>, Design
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
          {/* Testimonial Section */}
          <div className="mt-6 p-6 bg-blue-100 rounded-md shadow-md">
            <p className="text-gray-700">
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided.
            </p>
            {/* Profile Details */}
            <div className="mt-4 flex items-center gap-4">
              <Image
                src={profileImage}
                alt="image1"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-black">Saras Kohli</h4>
                <p className="text-sm text-gray-600">Founder | CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block lg:w-1/2">
          <Image
            src={missionImage}
            alt="image2"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
