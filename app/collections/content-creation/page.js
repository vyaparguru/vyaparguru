import React from "react";

export default function Maintenance() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-500 pt-40">
      <div className="text-center">
        <div className="max-w-xs mx-auto">
          {/* Replace the src with your SVG */}
          <img
            src="/404.webp"
            alt="Under Maintenance"
            className="w-full h-auto mb-6"
          />
        </div>
        <h1 className="text-3xl font-bold text-black">
          We're Under Maintenance
        </h1>
        <p className="mt-4 text-white">
          We're working hard to bring you an improved experience. Please check back later!
        </p>
      </div>
    </div>
  );
}
