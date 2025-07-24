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
          <p className="text-xl text-white mb-8 max-w-4xl">Please use this form to contact us with any questions. If you would like
            to get a quote for a booking, please use the Booking Form (top right) instead. You can use this if you would like to make a booking without using the quote generator, for example you are outside the UK or need a custom quote.
          </p>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg flex flex-col gap-4 border-8" style={{ borderColor: '#dfb722' }}>
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
        

        
          
                 <div style={{
          position: 'absolute',
          left: 0,
          top: '5rem',
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.2rem',
          zIndex: 40,
          pointerEvents: 'none',
        }}>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.85, marginLeft: '0.5rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.5rem', opacity: 0.7, marginLeft: '1.2rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.8rem', opacity: 0.6, marginLeft: '0.8rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.5, marginLeft: '1.5rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginLeft: '1.5rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.85, marginLeft: '1.2rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.6rem', opacity: 0.45, marginLeft: '0.7rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.55, marginLeft: '1.1rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.35, marginLeft: '1.6rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '2.1rem', opacity: 0.75, marginLeft: '0.9rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.4rem', opacity: 0.4, marginLeft: '1.3rem'}}>&#10022; &#10022; </span>
          <span className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.5, marginLeft: '0.6rem'}}>&#10022; &#10022; </span>
       
        </div>

           <div style={{
          position: 'absolute',
          right: 0,
          top: '4rem',
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.2rem',
          zIndex: 1,
          alignItems: 'flex-end',
          pointerEvents: 'none',
        }}>
          <span className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.7, marginRight: '1.2rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.3rem', opacity: 0.85, marginRight: '0.5rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.5, marginRight: '1.5rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.6, marginRight: '0.8rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.2rem', opacity: 0.3, marginRight: '1.5rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.2rem', opacity: 0.85, marginRight: '1.2rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.6rem', opacity: 0.45, marginRight: '0.7rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.9rem', opacity: 0.55, marginRight: '1.1rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.3rem', opacity: 0.35, marginRight: '1.6rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '2.1rem', opacity: 0.75, marginRight: '0.9rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.4rem', opacity: 0.4, marginRight: '1.3rem'}}>&#10022; &#10022;</span>
          <span className="shiny-star" style={{fontSize: '1.7rem', opacity: 0.5, marginRight: '0.6rem'}}>&#10022; &#10022;</span>


        </div>
        
      </main>
    </>
  );
}