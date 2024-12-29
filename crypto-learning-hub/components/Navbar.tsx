"use client";

import { useState } from "react";
import { FaHome, FaGraduationCap, FaUsers, FaCertificate } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Crypto Hub</div>
        
        {/* Hamburger menu button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a href="/" className="flex items-center text-white hover:text-gray-400">
              <FaHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a href="/learn" className="flex items-center text-white hover:text-gray-400">
              <FaGraduationCap className="mr-2" /> Learn
            </a>
          </li>
          <li>
            <a href="/community" className="flex items-center text-white hover:text-gray-400">
              <FaUsers className="mr-2" /> Community
            </a>
          </li>
          <li>
            <a href="/certifications" className="flex items-center text-white hover:text-gray-400">
              <FaCertificate className="mr-2" /> Certifications
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="flex flex-col space-y-4 mt-4 md:hidden">
          <li>
            <a href="/" className="flex items-center text-white hover:text-gray-400">
              <FaHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a href="/learn" className="flex items-center text-white hover:text-gray-400">
              <FaGraduationCap className="mr-2" /> Learn
            </a>
          </li>
          <li>
            <a href="/community" className="flex items-center text-white hover:text-gray-400">
              <FaUsers className="mr-2" /> Community
            </a>
          </li>
          <li>
            <a href="/certifications" className="flex items-center text-white hover:text-gray-400">
              <FaCertificate className="mr-2" /> Certifications
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
