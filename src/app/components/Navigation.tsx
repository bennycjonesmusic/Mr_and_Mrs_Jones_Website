'use client';
import { FaFacebook, FaInstagram, FaYoutube, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="relative flex items-center px-6 py-2 min-h-[56px]">
        {/* Hamburger for mobile */}
        <button
          className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2 z-50"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <FaTimes size={28} color="#dfb722" /> : <FaBars size={28} color="#dfb722" />}
        </button>
        {/* Social Icons and Email - right aligned (desktop only) */}
        <div className="flex gap-4 items-center absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex">
          <a href="mailto:sarahandbenduo@gmail.com" className="text-white font-semibold hover:underline">Email Us</a>
          <a href="https://www.facebook.com/sarahandbenduo/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} color="#dfb722" />
          </a>
          <a href="https://www.instagram.com/sarahandbenduo/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} color="#dfb722" />
          </a>
          <a href="https://www.youtube.com/@sarahandbenduo" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={28} color="#dfb722" />
          </a>
        </div>
        {/* Navigation Links - centered absolutely for desktop */}
        <ul className="flex space-x-10 items-center m-0 p-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
          <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
          <li><Link href="/Gallery" className="text-white hover:text-gray-300">Gallery</Link></li>
          <li><Link href="/Videos" className="text-white hover:text-gray-300">Videos</Link></li>
          <li><Link href="/Book" className="text-white hover:text-gray-300">Booking Form</Link></li>
          <li><Link href="/#reviews-section" className="text-white hover:text-gray-300">Reviews</Link></li>
        </ul>
        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center z-40 lg:hidden px-4 py-8 overflow-y-auto">
            <div className="flex-1 flex flex-col justify-center w-full max-w-xs mx-auto">
              <ul className="flex flex-col gap-4 text-2xl w-full">
                <li><Link href="/" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>Home</Link></li>
                <li><Link href="/about" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>About</Link></li>
                <li><Link href="/contact" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>Contact</Link></li>
                <li><Link href="/Gallery" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>Gallery</Link></li>
                <li><Link href="/Videos" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>Videos</Link></li>
                <li><Link href="/Book" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>Booking Form</Link></li>
                <li><Link href="/#reviews-section" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>Reviews</Link></li>
              </ul>
              <hr className="my-8 border-gray-700" />
              <div className="flex flex-col items-center gap-4 w-full">
                <a href="mailto:sarahandbenduo@gmail.com" className="text-white font-semibold hover:underline text-lg block w-full text-center">Email Us</a>
                <div className="flex flex-row justify-center gap-6 w-full">
                  <a href="https://www.facebook.com/sarahandbenduo/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={28} color="#dfb722" />
                  </a>
                  <a href="https://www.instagram.com/sarahandbenduo/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={28} color="#dfb722" />
                  </a>
                  <a href="https://www.youtube.com/@sarahandbenduo" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={28} color="#dfb722" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}