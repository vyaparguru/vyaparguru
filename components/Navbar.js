// components/Navbar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const lineVariants = {
    open: { rotate: 45, y: 8 },
    closed: { rotate: 0, y: 0 },
  };
  const lineVariants2 = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };
  const lineVariants3 = {
    open: { rotate: -45, y: -8 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <header className="bg-white shadow border-b">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={20} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-7 text-black uppercase font-medium">
          <Link href="/" className={`${pathname === "/" ? "text-blue-500 font-bold" : ""}`}>
            Home
          </Link>
          <Link href="/about" className={`${pathname === "/about" ? "text-blue-500 font-bold" : ""}`}>
            About Us
          </Link>
          <Link href="/services" className={`${pathname === "/services" ? "text-blue-500 font-bold" : ""}`}>
            Our Services
          </Link>
          <Link href="/why-us" className={`${pathname === "/why-us" ? "text-blue-500 font-bold" : ""}`}>
            Why Us
          </Link>
          <Link href="/portfolio" className={`${pathname === "/portfolio" ? "text-blue-500 font-bold" : ""}`}>
            Portfolio
          </Link>
          <Link href="/contact" className={`${pathname === "/contact" ? "text-blue-500 font-bold" : ""}`}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div animate={menuOpen ? "open" : "closed"} className="space-y-1">
            <motion.span className="block w-6 h-0.5 bg-black" variants={lineVariants} />
            <motion.span className="block w-6 h-0.5 bg-black" variants={lineVariants2} />
            <motion.span className="block w-6 h-0.5 bg-black" variants={lineVariants3} />
          </motion.div>
        </button>

        {/* Mobile Full-Screen Overlay Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-black z-40"
          >
            {/* Logo in Overlay */}
            <Link href="/" className="absolute top-4 left-4 flex items-center">
              <Image src={logo} alt="logo" width={150} height={10} />
            </Link>

            {/* Navigation Links */}
            <Link href="/" onClick={() => setMenuOpen(false)} className={`text-xl ${pathname === "/" ? "text-blue-500 font-bold" : ""}`}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className={`text-xl ${pathname === "/about" ? "text-blue-500 font-bold" : ""}`}>
              About Us
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className={`text-xl ${pathname === "/services" ? "text-blue-500 font-bold" : ""}`}>
              Our Services
            </Link>
            <Link href="/why-us" onClick={() => setMenuOpen(false)} className={`text-xl ${pathname === "/why-us" ? "text-blue-500 font-bold" : ""}`}>
              Why Us
            </Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(false)} className={`text-xl ${pathname === "/portfolio" ? "text-blue-500 font-bold" : ""}`}>
              Portfolio
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className={`text-xl ${pathname === "/contact" ? "text-blue-500 font-bold" : ""}`}>
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
