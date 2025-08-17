"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CiHeart,
  CiPhone,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { FiX } from "react-icons/fi";
import logo from "@/public/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import DesktopNavlinks from "../../utils/DesktopNavlinks";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [PCSearchDropdown, setPCSearchDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const searchBoxRef = useRef(null);

  // const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const allServices = DesktopNavlinks.flatMap((link) => link.subItems || []);

  // Filter subItems based on search input
  const filteredServices = allServices.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const filteredServices = DesktopNavlinks
  //   .flatMap((link) => link.subItems || [])
  //   .filter((service) =>
  //     service.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleSearchDropdown = () => {
    setSearchDropdown(true);
    console.log("opened")
    // setIsMobileMenuOpen(false);
  };


  const togglePCSearchDropdown = () => {
    setPCSearchDropdown(true);
    console.log("opened")
    // setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setSearchDropdown(false);
        setPCSearchDropdown(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className=" bg-white shadow-md fixed w-full z-50 py-1 md:py-2 px-2 lg:px-36 ">
      <div className="flex justify-between items-center md:gap-0 ">
        <div className="flex justify-start items-center z-50">
          <button
            className="md:hidden p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6 z-50" /> : <FaBarsStaggered className="w-6 h-6" />}
          </button>
          <Link href="/">
            <Image src={logo} alt="VyaparGuru-Logo" className="w-[400px] h-[50px] md:w-[300px] md:h-[90px]" />
          </Link>
        </div>
        <div className="flex flex-col justify-between md:items-start w-full gap-2">
          <div className="flex space-x-1 w-full ">
            <DesktopSearchBar
              searchQuery={searchQuery}
              handleSearch={handleSearch}
              filteredServices={filteredServices}
              PCSearchDropdown={PCSearchDropdown}
              togglePCSearchDropdown={togglePCSearchDropdown}
              searchBoxRef={searchBoxRef}
            />
            <div className="flex justify-between items-center space-x-1">
              <button className="text-white md:hidden p-2 rounded-full hover:bg-gray-100 ">
                <CiPhone className="w-6 h-6" />
              </button>
              <button className="text-white md:text-black p-2 rounded-full hover:bg-gray-100">
                <CiUser className="w-6 h-6 " />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <CiHeart className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <CiShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>
          <DesktopMenu
            openDropdown={openDropdown}
            handleDropdown={handleDropdown}
          />
        </div>
      </div>
      <MobileSearchBar
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        filteredServices={filteredServices}
        searchDropdown={searchDropdown}
        toggleSearchDropdown={toggleSearchDropdown}
        searchBoxRef={searchBoxRef}
        allServices={allServices}
      />

      <div className="relative">
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        <MobileMenu
          navLinks={DesktopNavlinks}
          isMobileMenuOpen={isMobileMenuOpen}
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </nav>
  );
};

export default Navbar;








