import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Booking, { IBooking, BookingType } from '../../models/Booking';
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
    const data = await req.json();
    const booking = new Booking(data);
    await booking.save();
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
