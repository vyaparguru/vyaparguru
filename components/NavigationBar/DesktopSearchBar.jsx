import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import React from "react";

const DesktopSearchBar = ({
  searchQuery,
  handleSearch,
  filteredServices,
  PCSearchDropdown,
  togglePCSearchDropdown,
  searchBoxRef,
}) => (
  <div className="hidden md:flex flex-1 mx-4 z-10" ref={searchBoxRef}>
    <div className="relative w-full">
      <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
      <input
        type="text"
        placeholder="Search for services"
        value={searchQuery}
        onChange={handleSearch}
        className="w-full pl-12 py-2 border rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={togglePCSearchDropdown}
      />
      {PCSearchDropdown && filteredServices.length > 0 && (
        <div className="absolute bg-white border rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto z-50 w-full">
          {filteredServices.map((service, index) => (
            <Link
              key={index}
              href={`/collections/${service.toLowerCase().replace(/[\s,]+/g, "-")}`}
              className="block px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
            >
              {service}
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default DesktopSearchBar;