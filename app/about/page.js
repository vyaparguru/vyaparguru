// pages/about.js
"use client";

import Image from "next/image";
import aboutImage1 from "../../assets/banner1.jpg"; // Replace with actual image path
import aboutImage2 from "../../assets/banner2.jpg"; // Replace with actual image path

const About = () => {
  return (
    <section className="bg-white px-4 py-20 md:px-8 w-full">
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-500">About Vyapar Guru</h1>
        <p className="mt-4 text-md text-black">
          Empowering businesses with innovative solutions and impactful strategies. Empowering businesses with innovative solutions and impactful strategies. 
        </p>
      </div>

      {/* "Who We Are" Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-12 pt-10 space-y-10 md:space-y-0 md:space-x-8">
        <Image
          src={aboutImage1}
          alt="About Vyapar - Who We Are"
          width={300}
          height={300}
          className="shadow-md w-full md:w-1/3 border-l-4 border-blue-500 border-t-4"
          />
        <div className="md:w-1/2 text-center md:text-left space-y-4 ">
          <h2 className="text-3xl font-semibold text-blue-500">Who We Are?</h2>
          <p className="text-black text-md">
            Vyapar is committed to bringing transformation through innovation and dedicated service. 
            Our team works collaboratively with partners and clients to create efficient, 
            result-oriented solutions tailored to meet evolving market demands. Our mission is to empower businesses by providing strategic insights and practical solutions 
            that drive measurable results. We aim to be a catalyst in the journey of achieving growth 
            and sustainability for every client. Our mission is to empower businesses by providing strategic insights 
            and practical solutions that drive measurable results. We aim to be a catalyst in the journey of achieving growth 
            and sustainability for every client. Our mission is to empower businesses by providing strategic insights and 
            practical solutions that drive measurable results. 
          </p>
        </div>
      </div>

      {/* "Our Mission" Section */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center mb-12 pt-10 space-y-6 md:space-y-0 md:space-x-8">
        <Image
          src={aboutImage2}
          alt="About Vyapar - Our Mission"
          width={300}
          height={300}
          className="shadow-md w-full md:w-1/3 border-r-4 border-blue-500 border-t-4"
        />
        <div className="md:w-1/2 text-center md:text-left space-y-4 ">
          <h2 className="text-3xl font-semibold text-blue-500">Our Mission</h2>
          <p className="text-black text-md pr-0 md:pr-5">
            Our mission is to empower businesses by providing strategic insights and practical solutions 
            that drive measurable results. We aim to be a catalyst in the journey of achieving growth 
            and sustainability for every client. Our mission is to empower businesses by providing strategic insights 
            and practical solutions that drive measurable results. We aim to be a catalyst in the journey of achieving growth 
            and sustainability for every client. Our mission is to empower businesses by providing strategic insights and 
            practical solutions that drive measurable results. We aim to be a catalyst in the journey of achieving growth 
            and sustainability for every client. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
