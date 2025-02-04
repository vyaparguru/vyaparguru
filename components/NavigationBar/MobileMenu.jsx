"use client"

import React from 'react'
import { MdOutlineKeyboardArrowRight, MdOutlinePhoneInTalk } from 'react-icons/md'
import MobNavlinks from './MobNavlinks'
import Link from 'next/link'

export const MobileMenu = ({ isMobileMenuOpen, openDropdown, toggleDropdown, setIsMobileMenuOpen }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full bg-white z-40 p-6 transition-transform transform ${isMobileMenuOpen ? "translate-x-0 visible opacity-100" : "-translate-x-full invisible opacity-0"
                }`}
            style={{ width: "70%" }}
        >
            <div className="mt-16 border-t-2 pt-8">
                {MobNavlinks.map((link, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex" onClick={() => toggleDropdown(index)}>
                            <span className="text-sm border-b-2 w-full pb-2 font-normal flex items-center justify-between cursor-pointer">
                                {link.name}
                                <MdOutlineKeyboardArrowRight
                                    size={18}
                                    className={`transition-transform ${openDropdown === index ? "rotate-90" : ""}`}
                                />
                            </span>
                        </div>
                        {openDropdown === index && (
                            <ul className="mt-2 space-y-2 border-b-2 py-1 text-sm">
                                {link.subItems.map((subItem, idx) => {
                                    const formattedName = link.name.toLowerCase() === "legal, book keeping and compliance" ? "legal-book-keeping-and-compliance" : link.name.toLowerCase().replace(/\s+/g, "-");
                                    const href = `/collections/${idx === 0 ? formattedName : subItem.toLowerCase().replace(/\s+/g, "-")}`;
                                    return (
                                        <li key={idx} className="pl-4 text-gray-700 cursor-pointer">
                                            <Link href={href} onClick={() => setIsMobileMenuOpen(false)}>{subItem}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div className="absolute bottom-10">
                <div className="text-gray-600 text-sm flex items-center ">
                    <MdOutlinePhoneInTalk size={24} className="mr-2 text-blue-600 " />
                    <div>
                        <span className="text-black font-medium">Need help?</span>
                        <br />
                        <a href="tel:6289000014" className="text-sm text-blue-500">
                            Contact us on 6289000014
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
