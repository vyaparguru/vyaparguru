
"use client"

import { useState } from "react";
import FaqSection from "@/components/HomeScreen/Accordion";
import LetsTalk from "@/components/HomeScreen/Letstalk";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile Number is required.";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit Mobile Number.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid Email ID.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission (e.g., send data to the server)
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <>
      <section className="bg-blue-50 py-36 md:py-40 px-5 md:px-20 lg:px-40">
        <div className="bg-white shadow-lg overflow-hidden rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
            <div className="p-8">
              <h3 className="text-black text-center text-4xl md:text-5xl font-semibold uppercase py-4">
                <span className="text-blue-500">Get In Touch</span> With Us Now!
              </h3>
              {/* Contact Information */}
              <div className="grid grid-cols-1 gap-6 mt-6 md:px-8">
                {/* Contact Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3  border border-blue-500 rounded-md">
                    <FaPhoneAlt className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold">Phone Number</h4>
                    <p className="text-black">+91 6289000014</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-blue-500 rounded-md">
                    <FaEnvelope className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold">Email</h4>
                    <p className="text-black">vyaparguruinfotech@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-blue-500 rounded-md">
                    <FaMapMarkerAlt className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold">Location</h4>
                    <p className="text-black">
                      Link Road, Preet Nagar, Jalandhar, Punjab, 144001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-blue-500 rounded-md">
                    <FaClock className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold">Working Hours</h4>
                    <p className="text-black">Monday To Friday | 10:00 AM To 05:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50">
              <h3 className="text-black text-center text-4xl md:text-5xl font-semibold uppercase py-4">
                Contact Us
              </h3>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile No *"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email ID *"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Message"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
      <LetsTalk />
    </>
  );
};

export default ContactUs;