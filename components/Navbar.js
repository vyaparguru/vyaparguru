"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CiHeart,
  CiPhone,
  CiSearch,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight, MdOutlinePhoneInTalk } from "react-icons/md";
import logo from "../assets/logo.png";
import { FaBarsStaggered, FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDropdown,setSearchDropdown]=useState(false)
  const [openDropdown, setOpenDropdown] = useState(null); 

  const navLinks = [
    {
      name: "Marketing",
      href: "/collections/marketing",
      subItems: ["Digital Marketing", "Social Media", "SEO"],
    },
    {
      name: "eCommerce",
      href: "/collections/ecommerce",
      subItems: ["Online Stores", "Payment Gateways"],
    },
    {
      name: "IT Services",
      href: "/collections/it-services",
      subItems: ["Web Development", "App Development"],
    },
    {
      name: "Content Creation",
      href: "/collections/content-creation",
      subItems: ["Video Production", "Graphic Design"],
    },
    {
      name: "Business Set-up",
      href: "/collections/business-setup",
      subItems: ["Company Registration", "Business Planning"],
    },
    {
      name: "Legal, Book Keeping and Compliance Services",
      href: "/collections/legal, book keeping & compliance services",
      subItems: ["Tax Compliance", "Auditing", "Legal Advisory"],
    },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredServices = navLinks
    .flatMap((link) => link.subItems || [])
    .filter((service) =>
      service.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleSearchDropdown=()=>{
    setSearchDropdown(true)
    setIsMobileMenuOpen(false)
  }


  return (
    <nav className="navbar bg-white shadow-md fixed w-full z-50 py-2">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-2 lg:px-10">
        <div className="flex items-center z-50">
          <button
            className="lg:hidden p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6 z-50" /> : <FaBarsStaggered className="w-6 h-6" />}
          </button>
          <Link href="/">
            <Image src={logo} alt="VyaparGuru-Logo" width={160} height={40} className="h-auto" />
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden lg:flex flex-1 mx-4 z-10">
          <div className="relative w-full">
            <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for services"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-12 py-2 border rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={toggleSearchDropdown}
            />
            {searchDropdown && filteredServices.length > 0 && (
              <div className="absolute bg-white border rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto z-50 w-full">
                {filteredServices.map((service, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-1">
          <button className="p-2 rounded-full hover:bg-gray-100 hidden lg:block">
            <CiPhone className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 hidden lg:block">
            <CiUser className="w-6 h-6 " />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 block lg:hidden"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen)
              setIsMobileMenuOpen(false)
            }}
          >
            <CiSearch className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <CiHeart className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <CiShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="lg:hidden px-4 py-2">
          <div className="relative">
            <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for services"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-12 py-2 border cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={toggleSearchDropdown}
            />
          </div>
          {searchDropdown && filteredServices.length > 0 && (
              <div className="absolute bg-white border rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto z-5 w-full">
                {filteredServices.map((service, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-40 p-6 transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0 visible opacity-100" : "-translate-x-full invisible opacity-0"
        }`}
        style={{ width: "70%" }}
      >
        <div className="mt-16 border-t-2 pt-8">
          {navLinks.map((link, index) => (
            <div key={index} className="mb-4">
              <div className="flex">
              <div
                className="text-md border-b-2 w-full pb-2 gap-20 font-medium flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                {link.name}
                <span>
                <MdOutlineKeyboardArrowRight
                size={20}
                className={`transition-transform ${
                  openDropdown === index ? "rotate-90" : ""
                  }`}
                  />
                  </span>
                </div>
              </div>
              {openDropdown === index && (
                <ul className="mt-2 space-y-2 border-b-2 py-1">
                  {link.subItems.map((subItem, idx) => (
                    <li key={idx} className="pl-4 text-gray-600">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="pt-40 ">
              <p className="text-gray-600 text-sm flex items-center border-t-2 pt-4">
                <div>
                <MdOutlinePhoneInTalk size={24} className="mr-2 text-blue-600 " /> 
                </div>
                <div> 
                <span className="text-black font-medium">Need help?</span><br/>
                <a href="tel:6289000014" className="text-sm text-blue-500">Contact us on 6289000014</a>
                </div>
              </p>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
