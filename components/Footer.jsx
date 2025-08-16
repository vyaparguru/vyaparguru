"use client"

import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../public/footerlogo.png";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog/personal-finance/how-to-recharge-fastag-annual-pass" },
];

const services = [
  {name:"Marketing", href:"/collections/marketing"},
  {name:"eCommerce", href:"/collections/ecommerce"},
  {name:"IT Services", href:"/collections/it-services"},
  {name:"Content Creation",href:"/collections/content-creation"},
  {name:"Business Set-up", href:"/collections/business-set-up"},
  {name:"Legal, Book Keeping & Compliance Services",href:"/collections/legal-book-keeping-and-compliance"}
];

const policies = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Refund and Cancellation", href: "/refund" },
  { name: "Shipping and Delivery", href: "/shipping" },
];

const socialLinks = [
  { href: "https://wa.me/6289000014", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "mailto:vyaparguruinfotech@gmail.com", icon: SiGmail, label: "Gmail" },
  { href: "https://instagram.com/vyaparguru", icon: FaInstagram, label: "Instagram" },
  { href: "https://linkedin.com/in/vyaparguru", icon: FaLinkedinIn, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-black py-8 ">
      <div className="container mx-auto px-5 md:px-0 lg:px-40 ">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div className="text-left space-y-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1 text-white">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link className="hover:underline" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left space-y-2">
            <h3 className="text-lg font-semibold text-white">Services We Offer</h3>
            <ul className="space-y-1 text-white">
              {services.map((service, index) => (
                <li key={index}>
                  <Link className="hover:underline" href={service.href}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:items-center">
            <div className="w-20 h-20 mb-4">
              <Image src={logo} alt="Logo" width={96} height={96} />
            </div>
            <div className="flex space-x-4 text-white">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link key={label} href={href} aria-label={label}>
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div className="text-left space-y-2">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="text-white">Link Road, Preet Nagar, Jalandhar, Punjab, 144001</p>
            <p className="text-white">+91 62890 00014</p>
          </div>
        </div>
        <div className="border-t border-white mt-8 text-white pt-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Vyapar Guru Infotech Pvt Ltd, All Rights Reserved</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            {policies.map((policy) => (
              <Link key={policy.name} href={policy.href} className="hover:underline">
                {policy.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
