'use client';
import { FaFacebook, FaInstagram, FaYoutube, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [brandPadding, setBrandPadding] = useState('2rem');

  useEffect(() => {
    function updatePadding() {
      setBrandPadding(window.innerWidth < 350 ? '1.5rem' : '2rem');
    }
    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Communicate nav brand visibility to the rest of the app
  // Show nav brand when lg:hidden and not mobileOpen
  // We'll toggle a class on body for simplicity
  useEffect(() => {
    const showNavBrand = window.innerWidth < 1024 && !mobileOpen;
    document.body.classList.toggle('nav-brand-visible', showNavBrand);
    return () => {
      document.body.classList.remove('nav-brand-visible');
    };
  }, [mobileOpen]);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="relative flex items-center px-6 py-2 min-h-[56px]">
        {/* Mobile/Tablet Brand Title - centered, hidden on lg+ and when menu is open */}
        {!mobileOpen && (
          <div
            className="flex-1 flex justify-center items-center lg:hidden"
            style={{
              paddingLeft: brandPadding,
              whiteSpace: 'nowrap',
            }}
          >
            <span
              className="shiny-star"
              style={{
                fontSize: 'min(4vw, 1.5rem)',
                marginRight: '0.3em',
                marginLeft: 0,
                verticalAlign: 'middle',
                background: 'linear-gradient(90deg, #fffbe6 0%, #dfb722 30%, #fffbe6 50%, #b8860b 70%, #dfb722 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'shine 2.5s linear infinite',
                filter: 'drop-shadow(0 0 2px #fffbe6) drop-shadow(0 0 4px #dfb722)'
              }}
            >
              &#10022;
            </span>
            <span
              className="homepage-hero-h1 text-center"
              style={{
                fontFamily: "var(--font-great-vibes)",
                background: "linear-gradient(90deg, #dfb722 5%, #dfb722 30%, #b8860b 50%, #dfb722 70%, #b8860b 95%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 1px #fffbe6, 1px 1px 2px #dfb722, 0 0 2px #dfb722, 2px 2px 4px #000, 0 0 1px #b8860b, 0 0 2px #b8860b",
                filter: "drop-shadow(0 0 1px #dfb722)",
                fontSize: "min(4vw, 11.7rem)",
                fontWeight: 700,
                letterSpacing: "0.04em",
                lineHeight: 1.1,
                display: "inline-block",
                margin: 0,
                padding: 0,
                marginLeft: "0.2rem",
              }}
            >
              Mr and Mrs Jones Duo
            </span>
            <span
              className="shiny-star"
              style={{
                fontSize: 'min(4vw, 1.5rem)',
                marginLeft: '0.4em',
                verticalAlign: 'middle',
                background: 'linear-gradient(90deg, #fffbe6 0%, #dfb722 30%, #fffbe6 50%, #b8860b 70%, #dfb722 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'shine 2.5s linear infinite',
                filter: 'drop-shadow(0 0 2px #fffbe6) drop-shadow(0 0 4px #dfb722)'
              }}
            >
              &#10022;
            </span>
          </div>
        )}
        {/* Hamburger for mobile */}
        <button
          className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2 z-50"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <FaTimes size={28} color="#dfb722" /> : <FaBars size={28} color="#dfb722" />}
        </button>
        {/* Desktop nav: nav links centered, social/email icons right */}
        <div className="hidden lg:flex flex-1 flex-row items-center w-full relative">
          <ul className="flex space-x-10 items-center m-0 p-0 mx-auto">
            <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link href="/Services" className="text-white hover:text-gray-300">Services</Link></li>
            <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
            <li><Link href="/Gallery" className="text-white hover:text-gray-300">Gallery</Link></li>
            <li><Link href="/Videos" className="text-white hover:text-gray-300">Videos</Link></li>
            <li><Link href="/Book" className="text-white hover:text-gray-300">Booking Form</Link></li>
            <li><Link href="/#reviews-section" className="text-white hover:text-gray-300">Reviews</Link></li>
          </ul>
          <div className="flex gap-4 items-center absolute right-0 top-1/2 -translate-y-1/2 pr-2">
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
        </div>
        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center z-40 lg:hidden px-4 py-8 overflow-y-auto">
            <div className="flex-1 flex flex-col justify-center w-full max-w-xs mx-auto">
              <ul className="flex flex-col gap-4 text-2xl w-full">
                <li><Link href="/" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>Home</Link></li>
                <li><Link href="/Services" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>Services</Link></li>
                <li><Link href="/Contact" className="block w-full text-center text-white hover:text-gray-300 py-4" onClick={() => setMobileOpen(false)}>Contact</Link></li>
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