import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import React from "react";

const featuredServices = [
    "Website Designing",
    "Online Selling",
    "Business Registration",
    "Trademark aand IP",
];

const MobileSearchBar = ({
    searchBoxRef,
    allServices = [],
}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    // Open overlay and focus input
    const openOverlay = () => {
        setShowOverlay(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
    };

    // Close overlay and reset
    const closeOverlay = () => {
        setShowOverlay(false);
        setInputValue("");
    };

    // Filtered and sorted services
    const filtered =
        inputValue.trim() === ""
            ? []
            : allServices
                .filter((service) =>
                    service.toLowerCase().startsWith(inputValue.toLowerCase())
                )
                .sort((a, b) => a.localeCompare(b));

    return (
        <>
            {/* The search bar in navbar */}
            <div className="md:hidden px-4 py-2" ref={searchBoxRef}>
                <div className="relative w-full">
                    <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
                    <input
                        type="text"
                        placeholder="Search for services"
                        value=""
                        readOnly
                        className="w-full pl-12 py-2 border cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={openOverlay}
                    />
                </div>
            </div>

            {/* Fullscreen overlay */}
            {showOverlay && (
                <div className="fixed inset-0 bg-white z-[100] flex flex-col">
                    {/* Top bar with search input */}
                    <div className="flex items-center px-4 py-3 border-b relative">
                        <CiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search for services"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full pl-12 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                        />
                        <button
                            className="ml-2 text-blue-500 font-semibold"
                            onClick={closeOverlay}
                        >
                            Cancel
                        </button>
                    </div>

                    {/* Featured services row (only before typing) */}
                    {inputValue.trim() === "" && (
                        <div className="flex flex-wrap gap-2 px-4 py-6">
                            {featuredServices.map((service) => (
                                <Link
                                    key={service}
                                    href={`/collections/${service.toLowerCase().replace(/[\s,]+/g, "-")}`}
                                    className="bg-blue-50 text-gray-900 px-3 py-2 rounded-md text-sm font-medium "
                                    onClick={closeOverlay}
                                >
                                    {service}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Results */}
                    <div className="flex-1 overflow-y-auto px-4 py-2">
                        {inputValue.trim() === "" ? (
                            <div className="text-gray-400 text-center mt-8">

                            </div>
                        ) : filtered.length > 0 ? (
                            <ul>
                                {filtered.map((service) => (
                                    <li key={service}>
                                        <Link
                                            href={`/collections/${service
                                                .toLowerCase()
                                                .replace(/[\s,]+/g, "-")}`}
                                            className="block px-4 py-3 border-b text-gray-800"
                                            onClick={closeOverlay}
                                        >
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="text-left text-gray-900 text-md font-medium mt-4">No service found</div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileSearchBar;