import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className={`py-3 rounded-lg font-medium transition ${className}`}
  >
    {children}
  </button>
);

export default Button;