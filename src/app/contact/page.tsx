'use client';
import { Navigation } from "../components/Navigation";

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
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
          <h1 className="text-3xl font-bold mb-6 text-white mt-10">Contact Us</h1>
          <p className="text-xl text-white mb-8 max-w-md">Please use this form to contact us with any questions. If you would like
            to get a quote for a booking, please use the Booking Form (top right) instead.
          </p>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg flex flex-col gap-4">
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
      </main>
    </>
  );
}