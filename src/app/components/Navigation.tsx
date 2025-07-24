'use client';
import { FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa6";
import React from 'react';
import Link from 'next/link';


export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="relative flex items-center px-6 py-2 min-h-[56px]">
        {/* Social Icons and Email - right aligned */}
        <div className="flex gap-4 items-center absolute right-6 top-1/2 -translate-y-1/2">
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
        {/* Navigation Links - centered absolutely */}
        <ul className="flex space-x-10 items-center m-0 p-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">








          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/Gallery" className="text-white hover:text-gray-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/Videos" className="text-white hover:text-gray-300">
              Videos
            </Link>
          </li>
          <li>
            <Link href="/Book" className="text-white hover:text-gray-300">
              Booking Form
            </Link>
            </li>
            <li>
            <Link href="/#reviews-section" className="text-white hover:text-gray-300">
              Reviews
            </Link>
             </li>
        
        </ul>
      </div>
    </nav>
  );









}