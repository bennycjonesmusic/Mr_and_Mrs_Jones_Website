import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Booking, { IBooking, BookingType } from '../../models/Booking';
import BookingRateLimit from '../../models/BookingRateLimit';
import { requireApiKey } from '../utils/authMiddleware';

// Ensure mongoose is connected
const MONGODB_URI = process.env.DATABASE_URL as string;
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI, { dbName: undefined });
}

// GET: List all bookings
export async function GET(req: NextRequest) {
  const authError = requireApiKey(req);
  if (authError) return authError;
  try {
    const bookings = await Booking.find();
    return NextResponse.json(bookings);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}

// POST: Create a new booking
export async function POST(req: NextRequest) {
  try {
    // Get IP address
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    // Find or create rate limit record
    let rateLimit = await BookingRateLimit.findOne({ ip });
    const now = new Date();
    if (!rateLimit) {
      rateLimit = new BookingRateLimit({ ip, count: 0, lastReset: now });
    } else {
      // Reset count if 24hrs passed
      if (now.getTime() - rateLimit.lastReset.getTime() > 24 * 60 * 60 * 1000) {
        rateLimit.count = 0;
        rateLimit.lastReset = now;
      }
    }
    if (rateLimit.count >= 2) {
      return NextResponse.json({ error: 'Rate limit exceeded: Only 2 bookings allowed per 24 hours per IP.' }, { status: 429 });
    }
    // Proceed with booking
    const data = await req.json();
    const booking = new Booking(data);
    await booking.save();
    // Update rate limit count
    rateLimit.count += 1;
    await rateLimit.save();
    return NextResponse.json(booking, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 400 });
  }
}

// DELETE: Remove a booking by id (expects ?id=...)
export async function DELETE(req: NextRequest) {
  const authError = requireApiKey(req);
  if (authError) return authError;
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    await Booking.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete booking' }, { status: 400 });
  }
}

// PATCH: Update a booking by id (expects ?id=...)
export async function PATCH(req: NextRequest) {
  const authError = requireApiKey(req);
  if (authError) return authError;
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  try {
    const data = await req.json();
    const booking = await Booking.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(booking);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 400 });
  }
}
