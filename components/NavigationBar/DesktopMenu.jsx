"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopNavlinks from "./DesktopNavlinks";

export const DesktopMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="hidden md:flex justify-center items-center gap-5 px-4 text-sm font-normal">
      {DesktopNavlinks.map((menu, index) => (
        <div key={index} className="relative" onMouseEnter={() => setOpenDropdown(index)} onMouseLeave={() => setOpenDropdown(null)}>
          <Link
            href={`/collections/${menu.name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")}`}
            className="border border-blue-100 mb-2 bg-blue-100 p-2 rounded-xl block"
          >
            {menu.name}
          </Link>

          {openDropdown === index && (
            <div
              className="absolute left-0 mt-0 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(index)}
            >
              {menu.subItems.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={`/collections/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 text-gray-700 hover:rounded-lg hover:bg-gray-100 whitespace-nowrap"
                >
                  {subItem}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
