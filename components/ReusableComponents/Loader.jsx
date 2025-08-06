import React from "react";

const Loader = () => (
  <div className="flex justify-center items-center py-8">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    <span className="ml-4 text-blue-600 font-semibold text-lg">Submitting...</span>
  </div>
);

export default Loader;