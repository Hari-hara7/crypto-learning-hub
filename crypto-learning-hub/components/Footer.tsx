"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Educational Crypto Learning Hub</h2>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Footer Navigation */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/learn" className="hover:text-gray-400">
              Learn
            </Link>
          </li>
          <li>
            <Link href="/community" className="hover:text-gray-400">
              Community
            </Link>
          </li>
          <li>
            <Link href="/certifications" className="hover:text-gray-400">
              Certifications
            </Link>
          </li>
        </ul>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-gray-400 text-center">
        Designed and developed with ❤️ by Crypto Enthusiasts.
      </div>
    </footer>
  );
}
