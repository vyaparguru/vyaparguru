"use client";

export const LetsTalk = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-4 md:py-10 relative">
      <div className="absolute top-10 right-6 text-black">
      </div>
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Have an Idea?{" "}
          <span className="text-blue-500">Let’s Talk</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          We’re here to bring your ideas to life and help your business grow. Reach out to us today, and let’s collaborate to create something amazing together.
        </p>
        <button className="border border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default LetsTalk;
