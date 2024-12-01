"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState("Home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    // { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesDropdown = [
    "SEO",
    "Website Design",
    "Logo Design",
    "Digital Marketing",
    "Social Media Marketing",
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRedirect = (services) => {
    window.location.href = `/services/${services.replace(/\s+/g, "-").toLowerCase()}`;
  };

  // Handle clicking outside the menu or search box
  useEffect(() => {
    const handleClickOutside = (e) => {
      const searchBox = document.querySelector(".search-box");
      const desktopSearchBox = document.querySelector(".md\\:flex .relative");
  
      // Check if click is outside both search box and dropdown menu
      if (
        !searchBox?.contains(e.target) &&
        !desktopSearchBox?.contains(e.target)
      ) {
        setIsSearchOpen(false); // Close mobile search box
        setSearchQuery(""); // Clear input value
      }
  
      // For menu dropdown
      if (!e.target.closest(".menu-content")) {
        setIsMenuOpen(false); // Close mobile menu
      }
    };
  
    // Add click event listener only when dropdowns are open
    if (isMenuOpen || isSearchOpen || searchQuery) {
      document.addEventListener("click", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, isSearchOpen, searchQuery]);
  

  return (
    <nav className="navbar bg-white shadow-md fixed w-full z-50 py-1 md:py-3">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-36">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering outside click handler
                setIsMenuOpen(!isMenuOpen); // Toggle the menu state
              }}
            >
              {isMenuOpen ? <RiCloseFill size={28} /> : <HiOutlineMenuAlt3 size={28} />}
            </button>
          </div>

          {/* Logo */}
          <div className="text-lg font-bold md:mr-auto md:ml-0 flex justify-center md:justify-start">
            <Link href="/">
              <Image src={logo} alt="Logo" width={150} height={50} />
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="relative md:hidden flex items-center space-x-3">
            <button
              className="text-black hover:bg-blue-50 rounded-full p-2 transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Prevent outside click handler
                setIsSearchOpen(!isSearchOpen); // Toggle search box
              }}
            >
              <CiSearch className="h-6 w-6" />
            </button>
            <div className="text-black hover:bg-blue-50 rounded-full p-2 transition-all duration-300 cursor-pointer">
              <CiShoppingCart className="h-6 w-6" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-black font-medium ${
                  currentPage === link.name ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setCurrentPage(link.name)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Box */}
          <div className="hidden md:flex items-center md:ml-auto space-x-3">
            <div className="relative">
              <div className="flex items-center relative">
                <CiSearch className="absolute left-3 text-black w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for services"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 w-64"
                />
              </div>
              {searchQuery && (
                <ul className="absolute z-10 top-12 left-0 bg-white border shadow-md w-64 rounded-lg">
                  {servicesDropdown
                    .filter((item) =>
                      item.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:rounded-lg"
                        onClick={() => handleRedirect(item)}
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              )}
            </div>

            {/* Cart Icon */}
            <CiShoppingCart className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Search Box */}
      {isSearchOpen && (
        <div className="search-box md:hidden px-4 py-2 border-t bg-white">
          <div className="flex items-center relative">
            <CiSearch className="absolute left-3 text-black w-6 h-6" />
            <input
              type="text"
              placeholder="Search for services"
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
            />
          </div>
          {searchQuery && (
            <ul className="mt-2 bg-white border shadow-md rounded-lg">
              {servicesDropdown
                .filter((item) =>
                  item.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:rounded-lg"
                    onClick={() => handleRedirect(item)}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="menu-content md:hidden bg-white border-t"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-black font-medium ${
                    currentPage === link.name ? "border-b-2 border-blue-600" : ""
                  }`}
                  onClick={() => {
                    setCurrentPage(link.name);
                    setIsMenuOpen(false); // Close menu on link click
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
