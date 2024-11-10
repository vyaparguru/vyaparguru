// components/Contact.js
"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("All fields are required.");
      return;
    }
    if (!validateEmail(form.email)) {
      alert("Invalid email format.");
      return;
    }
    alert("Message sent successfully!");
    // Additional logic for handling form submission
  };

  return (
    <section className="bg-white py-16 px-6 md:px-36">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500">Get in touch</h2>
        <p className="mt-2 text-black text-md max-w-lg mx-auto">
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left Section: Contact Info */}
        <div className="flex-1 space-y-8">
          <ContactDetail
            icon={<FaMapMarkerAlt className="text-blue-500" />}
            title="Address"
            detail="Link Road, Preet Nagar, Jalandhar, Punjab, 144001"
          />
          <ContactDetail
            icon={<FaPhoneAlt className="text-blue-500" />}
            title="Phone"
            detail="+91-62890 00014"
          />
          <ContactDetail
            icon={<FaEnvelope className="text-blue-500" />}
            title="Email"
            detail="vyaparguruinfotech@gmail.com"
          />

          {/* Social Media Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-blue-500">Connect with us</h3>
            <div className="flex space-x-4 mt-4">
              <SocialIcon icon={<FaWhatsapp size={20} />} link="https://wa.me/6289000014" />
              <SocialIcon icon={<SiGmail size={20} />} link="mailto:vyaparguruinfotech@gmail.com" />
              <SocialIcon icon={<FaInstagram size={20} />} link="https://instagram.com/vyaparguru" />
              <SocialIcon icon={<FaLinkedinIn size={20} />} link="https://linkedin.com/in/vyaparguru" />
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="flex-1 flex items-start justify-center">
          <div className="p-8 px-8 md:px-14 bg-blue-500 border-2 rounded-md border-blue-500 w-full max-w-md">
            <h3 className="text-2xl font-bold text-white mb-6 text-left">SEND MESSAGE</h3>

            <form onSubmit={handleSubmit}>
              <AnimatedInput
                label="Full name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                />
              <AnimatedInput
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                />
              <AnimatedTextarea
                label="Message"
                name="message"
                value={form.message}
                onChange={handleInputChange}
                />
              <button
                type="submit"
                className="bg-white py-2 px-16 border-2 border-blue-500 text-black font-bold mt-4 transition duration-300"
                >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Detail Component
const ContactDetail = ({ icon, title, detail }) => (
  <div className="flex items-center space-x-4">
    <div className="text-white text-2xl border-2 border-blue-500 p-4 rounded-full">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-blue-500">{title}</h4>
      <p className="text-black">{detail}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    className="text-2xl text-black p-1 rounded-full transition duration-300"
  >
    {icon}
  </a>
);

// Animated Input Component with Chrome Autofill Fix
const AnimatedInput = ({ label, type, name, value, onChange }) => (
  <div className="relative mb-6">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="w-full p-2 bg-blue-500 border-b-2 border-white text-white outline-none transition-all duration-300 autofill:bg-black"
      autoComplete="off"
      required
    />
    <label
      className="absolute left-2 -top-2 text-xs text-white">
      {label}
    </label>
    <style jsx>{`
      input:-webkit-autofill {
        box-shadow: 0 0 0 30px black inset !important;
        -webkit-text-fill-color: white !important;
      }
    `}</style>
  </div>
);

// Animated Textarea Component
const AnimatedTextarea = ({ label, name, value, onChange }) => (
  <div className="relative mb-6">
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder=" "
      rows="3"
      className="w-full p-2 bg-blue-500 border-b-2 border-white text-white outline-none transition-all duration-300 autofill:bg-black"
      autoComplete="off"
      required
    ></textarea>
    <label
      className="absolute left-2 -top-2 text-xs text-white"
    >
      {label}
    </label>
    <style jsx>{`
      textarea:-webkit-autofill {
        box-shadow: 0 0 0 30px black inset !important;
        -webkit-text-fill-color: white !important;
      }
    `}</style>
  </div>
);

export default Contact;
