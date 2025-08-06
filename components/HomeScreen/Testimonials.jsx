"use client";

import Link from "next/link";

const testimonials = [
  {
    text: "Our new website brought in walk-ins and online orders. It made our paint brand look truly premium",
    name: "Kayson Paints",
    website: "https://www.kaysonpaints.com/",
    displayUrl: "kaysonpaints.com",
  },
  {
    text: "The team is highly knowledgeable and dedicated. They provided innovative solutions that transformed our operations.",
    name: "ITDC Punjab",
    website: "https://itdcpunjab.com/",
    displayUrl: "itdcpunjab.com",
  },
  {
    text: "The website perfectly reflects my design style. Clients now discover my work even before we meet.",
    name: "Emphasis Architects",
    website: "https://emphasisarchitects.com/",
    displayUrl: "emphasisarchitects.com",
  },
];

export const Testimonials = () => {
  return (
    <div className="px-6 md:px-40 py-10 md:py-28 bg-blue-50">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        What Our Lovely <br /> Client Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-black bg-white rounded-lg shadow-md p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {testimonial.text}
            </p>
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-black">{testimonial.name}</h4>
                <Link
                  href={testimonial.website}
                  target="_blank"
                  className="text-sm text-gray-500"
                >
                  {testimonial.displayUrl}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
