"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white text-2xl font-bold">Crypto Hub</div>
        {/* Hamburger menu button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/learn" className="text-white hover:text-gray-400">
              Learn
            </a>
          </li>
          <li>
            <a href="/community" className="text-white hover:text-gray-400">
              Community
            </a>
          </li>
          <li>
            <a href="/certifications" className="text-white hover:text-gray-400">
              Certifications
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="flex flex-col space-y-4 mt-4 md:hidden">
          <li>
            <a href="/" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/learn" className="text-white hover:text-gray-400">
              Learn
            </a>
          </li>
          <li>
            <a href="/community" className="text-white hover:text-gray-400">
              Community
            </a>
          </li>
          <li>
            <a href="/certifications" className="text-white hover:text-gray-400">
              Certifications
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
