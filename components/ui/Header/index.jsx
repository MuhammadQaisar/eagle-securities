import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Only Menu and X for hamburger, original button was not lucide icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {" "}
          {/* Adjusted py for mobile */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <img
                src="/es-logo.svg"
                alt="Eagle Securities"
                width={100}
                height={100}
                className="object-contain w-25 h-25 rounded-full"
              />
              <div>
                <span className="ml-2 text-2xl font-bold text-[#000080]">
                  Eagle Securities
                </span>
                <p className="ml-2 text-sm text-gray-800">
                  &quot;Your safety, our servilliance&quot;
                </p>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/about"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* Original CTA button */}
            <Link
              href="/contact"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-[#FFFFFF] bg-gradient-to-r from-[#000080] to-[#003399] hover:bg-gray-100"
            >
              Schedule a Call
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-[#000080] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#000080] hover:bg-gray-100"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="text-gray-900 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-900 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            {/* Mobile CTA button - replicating the desktop button's text and link */}
            <Link
              href="/contact"
              className="mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-[#FFFFFF] bg-gradient-to-r from-[#000080] to-[#003399] hover:bg-gray-100 w-full"
              onClick={toggleMenu}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
