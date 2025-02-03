

import FaqSection from "@/components/HomeScreen/Accordion";
import LetsTalk from "@/components/HomeScreen/Letstalk";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
    <section className="bg-blue-50 py-36 md:py-40 px-5 md:px-20 lg:px-40">
      {/* Container */}
      <div className="bg-white shadow-lg overflow-hidden rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          {/* Left Section */}
            <div className="p-8">
              <h3 className="text-black text-center text-4xl md:text-5xl font-semibold uppercase py-4">
                <span className="text-blue-500">Get In Touch</span> With Us Now!
              </h3>
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


          {/* Right Section */}
          <div className="p-8 bg-gray-50">
            <h3 className=" text-black text-center text-4xl md:text-5xl font-semibold uppercase py-4">
              Contact Us
            </h3>
            <form className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />

                {/* Last Name */}
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />

                {/* Mobile Number */}
                <input
                  type="text"
                  placeholder="Mobile No *"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email ID *"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 mt-6"
                required
              ></textarea>

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
    <FaqSection/>
    <LetsTalk/>
    </>
  );
};

export default ContactUs;
