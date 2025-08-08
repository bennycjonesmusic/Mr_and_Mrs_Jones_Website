'use client';
import { Navigation } from "../components/Navigation";
import ReviewsStarsLeft from "../components/ReviewsStarsLeft";
import ReviewsStarsRight from "../components/ReviewsStarsRight";

import { useState } from 'react';
// Redefine BookingType enum here to avoid importing server-side model on client
export enum BookingType {
  Booking = 'Booking',
  Contact = 'Contact',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: BookingType.Contact, date: new Date() }),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError((err instanceof Error ? err.message : 'Something went wrong'));
    }
  };

  return (
    <>
      <main>
        <Navigation />

        <div className="flex flex-col items-center justify-center min-h-[60vh] py-10 px-12 sm:px-0 w-full">
               
        <ReviewsStarsLeft />
        <ReviewsStarsRight />
          <h1 className="text-3xl font-bold mb-6 text-white mt-10">Contact Us</h1>
          <p className="text-xl text-white mb-8 max-w-4xl">Please use this form to contact us with any questions. If you would like
            to get a quote for a booking, please use the Booking Form (top right) instead. You can use this if you would like to make a booking without using the quote generator, for example you are outside the UK or need a custom quote. Please fill out the Email Address field with your correct email so we can correspond.
          </p>
          <form onSubmit={handleSubmit} className="relative bg-white rounded-lg shadow-md p-8 w-full max-w-lg flex flex-col gap-4 border-8" style={{ borderColor: '#dfb722' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 min-h-[200px]"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded transition"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-600">Message sent!</p>}
            {status === 'error' && <p className="text-red-600">{error}</p>}
          </form>
        </div>

        <style>{`
          @keyframes shine {
            0% { background-position: -120% 0; }
            100% { background-position: 220% 0; }
          }
          .shiny-star {
            background: linear-gradient(90deg, #fffbe6 0%, #dfb722 30%, #fffbe6 50%, #b8860b 70%, #dfb722 100%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            animation: shine 2.5s linear infinite;
            filter: drop-shadow(0 0 2px #fffbe6) drop-shadow(0 0 4px #dfb722);
          }
        `}</style>

      </main>
      <footer className="bg-black text-white p-4 text-center bottom-0" id="footer">
        <p id="footer-text">&copy; {new Date().getFullYear()} Mr and Mrs Jones Duo. All rights reserved. Photography by Andy Ingram</p>
      </footer>
    </>
  );
}