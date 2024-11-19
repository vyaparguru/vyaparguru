import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import logo from "../assets/footerlogo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-black py-8">
      <div className="container mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Quick Links */}
          <div className="text-left space-y-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1 text-white">
              <li>
                <Link className="hover:underline" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/why-us">
                  Why Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services We Offer */}
          <div className="text-left space-y-2">
            <h3 className="text-lg font-semibold text-white">Services We Offer</h3>
            <ul className="space-y-1 text-white">
              <li>Search Engine Optimization</li>
              <li>Web Designing</li>
              <li>Logo Design</li>
              <li>Digital Marketing</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>

          {/* Logo and Social Icons */}
          <div className="flex flex-col md:items-center">
            {/* Logo Image */}
            <div className="w-24 h-24 mb-4">
              <Image src={logo} alt="Logo" width={96} height={96} />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-white">
              <Link href="https://wa.me/6289000014" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </Link>
              <Link href="mailto:vyaparguruinfotech@gmail.com" aria-label="Gmail">
                <SiGmail size={20} />
              </Link>
              <Link href="https://instagram.com/vyaparguru" aria-label="Instagram">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://linkedin.com/in/vyaparguru" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-left space-y-2">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="text-white">
              Link Road, Preet Nagar, Jalandhar, Punjab, 144001
            </p>
            <p className="text-white">62890 00014</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-8 text-white pt-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <p>&copy; 2024 Vyapar Guru, All Rights Reserved</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-3">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms and Conditions
            </Link>
            <Link href="/refund" className="hover:underline">
              Refund and Cancellation
            </Link>
            <Link href="/shipping" className="hover:underline">
              Shipping and Delivery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
