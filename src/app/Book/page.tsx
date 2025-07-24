'use client';
import { Navigation } from "../components/Navigation";

import { useState, useEffect, useRef } from 'react';
// Redefine BookingType enum here to avoid importing server-side model on client
export enum BookingType {
  Booking = 'Booking',
  Contact = 'Contact',
}


// Base location (IP1) for distance calculation
const BASE_POSTCODE = 'IP1 1AA';
const BASES = {
  Wedding: 600,
  Corporate: 600,
  Party: 600,
};
const FREE_RADIUS = 30; // miles
const PER_MILE = 0.90; // £ per mile after 30 miles

type EventType = 'Wedding' | 'Corporate' | 'Party';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    eventType: 'Wedding' as EventType,
    postcode: '',
  });
  // Accept any postcode or address (no validation)
  const isPostcodeValid = !!form.postcode.trim();
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, setError] = useState('');
  const [quote, setQuote] = useState<string>('');
  const [travelCost, setTravelCost] = useState<string>('');
  const [distance, setDistance] = useState<number|null>(null);
  const [calculating, setCalculating] = useState(false);

  // Haversine formula
  function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const toRad = (v: number) => (v * Math.PI) / 180;
    const R = 3958.8; // Radius of Earth in miles
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  // Geocode postcode to lat/lng using server-side API
  async function geocode(postcode: string): Promise<{lat: number, lon: number} | null> {
    try {
      const url = `/api/geocode?postcode=${encodeURIComponent(postcode)}`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      if (data && typeof data.lat === 'number' && typeof data.lon === 'number') {
        return { lat: data.lat, lon: data.lon };
      }
      return null;
    } catch {
      return null;
    }
  }

  // Calculate quote when eventType or postcode changes (debounced)
  const debounceRef = useRef<NodeJS.Timeout|null>(null);
  useEffect(() => {
    if (!form.postcode || !isPostcodeValid) {
      setQuote(''); setTravelCost(''); setDistance(null);
      setCalculating(false);
      return;
    }
    setCalculating(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const base = BASES[form.eventType];
        // Promise that rejects after 10 seconds
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 10000));
        let from, to;
        try {
          const raceResult = await Promise.race([
            Promise.all([
              geocode(BASE_POSTCODE),
              geocode(form.postcode)
            ]),
            timeoutPromise
          ]);
          if (Array.isArray(raceResult)) {
            [from, to] = raceResult;
          } else {
            // TimeoutPromise resolved first
            setDistance(null);
            setTravelCost('');
            setQuote(base.toFixed(2));
            setCalculating(false);
            return;
          }
        } catch {
          // Timeout or fetch error
          setDistance(null);
          setTravelCost('');
          setQuote(base.toFixed(2));
          setCalculating(false);
          return;
        }
        if (!from || !to) {
          setDistance(null);
          setTravelCost('');
          setQuote(base.toFixed(2));
          setCalculating(false);
          return;
        }
        let dist = getDistance(from.lat, from.lon, to.lat, to.lon);
        dist = dist * 1.2; // Approximate driving distance
        setDistance(dist);
        let travel = 0;
        if (dist > FREE_RADIUS) {
          travel = (dist - FREE_RADIUS) * PER_MILE;
        }
        setTravelCost(travel > 0 ? travel.toFixed(2) : '0.00');
        const total = base + travel;
        setQuote(total.toFixed(2));
      } catch {
        setQuote('');
        setTravelCost('');
        setDistance(null);
      } finally {
        setCalculating(false);
      }
    }, 400);
    // Cleanup on unmount
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.eventType, form.postcode, isPostcodeValid]);

  // Update form fields
  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  // Initial quote calculation on mount (if fields are prefilled)
  // useEffect(() => { calculateQuote(form.eventType, form.postcode); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          eventType: form.eventType, // ensure eventType is present
          type: BookingType.Booking,
          date: new Date(),
          quote
        }),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setStatus('success');
      setForm({ name: '', email: '', message: '', eventType: 'Wedding', postcode: '' });
      setQuote('');
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
          <h1 className="text-3xl font-bold mb-6 text-white mt-10">Booking Form</h1>
          <p className="text-xl text-white mb-8 max-w-4xl">Please use this form to generate a quote for a booking. This will send us a quote which we can then accept if we are available. Please note this quote is just an estimate based on 2 x 45 minute sets, and gives you an idea of pricing. We charge extra for background music e.t.c. We may also in some situations charge less than the quote shown. Overnight stays will also have to incur a surcharge not included in the quote. If you would like to book us for potential gigs outside the UK, please contact us instead of using this booking form. We will not hassle or contact you beyond the thread created by this form.
          </p>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg flex flex-col gap-4 border-8" style={{ borderColor: '#dfb722' }}>
            <label className="font-semibold">Event Type</label>
            <select
              name="eventType"
              value={form.eventType}
              onChange={handleFieldChange}
              className="border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate</option>
              <option value="Party">Party</option>
            </select>
            <label className="font-semibold">Event Postcode</label>
            <input
              type="text"
              name="postcode"
              placeholder="Event Postcode or Address"
              value={form.postcode}
              onChange={handleFieldChange}
              required
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleFieldChange}
              required
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleFieldChange}
              required
              className="border border-gray-300 rounded px-3 py-2"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleFieldChange}
              required
              className="border border-gray-300 rounded px-3 py-2 min-h-[100px]"
            />
            <div className="text-lg font-bold text-center my-2">
              {calculating ? (
                'Calculating quote...'
              ) : quote ? (
                <>
                  Your instant quote: <span className="text-green-700">£{quote}</span>
                  <div className="text-base font-normal mt-1 text-gray-700">
                    Base price: £{form.eventType ? BASES[form.eventType] : '—'}<br />
                    {distance !== null && distance > FREE_RADIUS ? (
                      <>Travel ({distance.toFixed(1)} miles from IP1): £{travelCost}</>
                    ) : distance !== null ? (
                      <>Travel: £0.00 (within {FREE_RADIUS} miles free)</>
                    ) : (
                      <span className="text-red-700">(This is NOT including travel. Sometimes the external API we use to get the distance to calculate the travel cost does not work. Within 30 miles of IP1 is free, outside we charge 45p per mile)</span>
                    )}
                  </div>
                </>
              ) : 'Enter event postcode for a quote'}
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded transition"
              disabled={status === 'loading' || !quote || !isPostcodeValid}
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