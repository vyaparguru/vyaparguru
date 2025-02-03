"use client"

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/917717501477"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}