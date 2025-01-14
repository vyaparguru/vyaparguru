"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiHeart, CiPhone, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Marketing", href: "/collections/marketing" },
    { name: "eCommerce", href: "/collections/ecommerce" },
    { name: "IT Services", href: "/collections/it-services" },
    { name: "Content Creation", href: "/collections/content-creation" },
    { name: "Business Set-up", href: "/collections/business-setup" },
    { name: "Legal, Book Keeping and Compliance Services", href: "/collections/legal, book keeping & compliance services" },
  ];

  const services = [
    "Digital Marketing",
    "WhatsApp Marketing",
    "Online Selling",
    "Payment Gateways",
    "Website Designing",
  ];

  // Filter services based on search query
  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setIsSearchOpen(true); // Open the dropdown when typing
  };

  const handleServiceClick = (service) => {
    const serviceUrl = service.replace(/\s+/g, "-").toLowerCase();
    window.location.href = `/services/${serviceUrl}`;
  };

  const handleBlur = () => {
    // Close the dropdown with a slight delay to allow click events on dropdown items
    setTimeout(() => setIsSearchOpen(false), 200);
  };
  return (
    <nav className="navbar bg-white shadow-md fixed w-full z-50 py-2">
  <div className="flex max-w-screen-xl mx-auto px-6">
    {/* Top Row: Logo, Search Box, and Icons */}
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src={logo}
            alt="VyaparGuru-Logo"
            width={230}
            height={40}
            className="h-auto"
          />
        </Link>
      </div>

      {/* Search Box */}
      <div className="flex flex-col mx-4">

      <div className="flex">
        <div className="relative w-full">
          <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
          <input
            type="text"
            placeholder="Search for services"
            value={searchQuery}
              onChange={handleSearch}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={handleBlur}
            className="w-full pl-12 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {isSearchOpen && filteredServices.length > 0 && (
            <div className="absolute mx-8 bg-white border rounded-lg shadow-lg mt-12 max-h-60 overflow-y-auto z-50">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                onMouseDown={() => handleServiceClick(service)} // Prevent blur on click
              >
                {service}
              </div>
            ))}
          </div>
          )}
       

      

      {/* Icons */}
      <div className="flex items-center space-x-1 pl-1">
        <button className="p-2 rounded-full hover:bg-blue-100">
          <CiPhone className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-full hover:bg-blue-100">
          <CiUser className="w-6 h-6"/>
        </button>
        <button className="p-2 rounded-full hover:bg-blue-100">
          <CiHeart className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-full hover:bg-blue-100">
          <CiShoppingCart className="w-6 h-6" />
        </button>
      </div>
    </div>
   

    {/* Bottom Row: Menu Items */}
    <div className="mt-4 flex justify-start">
          <div className="flex space-x-5">
            {navLinks.map((navlink, index) => {
              const isLast = index === navLinks.length - 1;
              if (!isLast) {
                const [firstWord, ...restWords] = navlink.name.split(" ");
                return (
                  <Link
                    key={navlink.name}
                    href={navlink.href}
                    className="flex items-center text-center text-black p-2 rounded-xl bg-blue-100 text-sm"
                  >
                    {firstWord}{" "}
                    {/* <br/> */}
                    {restWords.join(" ")}
                  </Link>
                );
              }
              return (
                <Link
                  key={navlink.name}
                  href={navlink.href}
                  className="text-center text-black p-2 rounded-xl bg-blue-100 text-sm"
                >
                  Legal, Book Keeping 
                  and Compliance Services
                </Link>
                
              );
            })}
          </div> 
        </div>
        </div>
      </div>
  </div>
</nav>
  )
};

export default Navbar;
