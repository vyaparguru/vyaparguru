"use client";

export const LetsTalk = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-4 md:py-10 relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-6 text-black">
      </div>

      {/* Content Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Have an Idea?{" "}
          <span className="text-blue-500">Let’s Talk</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        {/* Button */}
        <button className="border border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default LetsTalk;
