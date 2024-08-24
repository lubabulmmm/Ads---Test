'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.8)] backdrop-blur-md shadow-lg rounded-lg mx-auto max-w-screen-xl px-6 md:px-10 py-2">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" width={32} height={32} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-black">FORWARDIN</span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        <div className={`flex-col md:flex-row md:space-x-8 items-center md:flex ${isOpen ? "flex" : "hidden"} md:relative`}>
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
            >
              Features
              <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link href="/home" className="block px-4 py-2 hover:bg-gray-100">
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Broadcast
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Campaign
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Auto Reply
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Opportunity
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="py-1">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/Pricing" className="block py-3 px-4 text-gray-900 hover:text-black hidden md:block">
            Features
          </Link>
          <Link href="/demo" className="block py-3 px-4 text-gray-900 hover:text-black">
            Demo
          </Link>
          <Link href="/blog" className="block py-3 px-4 text-gray-900 hover:text-black">
            Blog
          </Link>
          <Link href="/login" className="block py-3 px-5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
