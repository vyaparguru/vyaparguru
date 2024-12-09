"use client";

export const Testimonials = () => {
  return (
    <div className="px-6 md:px-40 py-10 md:py-28 bg-blue-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        What Our Lovely <br /> Client Say
      </h2>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial Card */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border border-black bg-white rounded-lg shadow-md p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The team at Vyapar Guru Infotech Pvt Ltd is highly knowledgeable and dedicated. They provided innovative solutions that transformed our operations.
            </p>
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-black">Relish Gupta</h4>
                <p className="text-sm text-gray-500">Software Developer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
