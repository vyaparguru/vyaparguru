"use client"

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer Marketing, eCommerce, IT, Content Creation, Business set-up, Legal, Book Keeping and Compliance services to help you grow your online presence.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "The duration of each project depends on its complexity and specific requirements. Typically, we provide a time estimate during the initial consultation.",
  },
  {
    question: "Do you provide ongoing support after the project is completed?",
    answer: "Yes, we offer maintenance and support services to ensure your website and marketing strategies remain effective and up-to-date.",
  },
  {
    question: "What is the cost of your services?",
    answer: "Our pricing varies depending on the project scope and services required. Contact us for a customized quote that fits your needs and budget.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">
          Frequently Asked <span className='text-blue-500'>Questions</span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Find answers to some of the common questions about our services.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white mb-4 p-4 rounded-lg shadow-lg"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-black">
                {faq.question}
              </h3>
              <span className="text-black text-2xl">
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
