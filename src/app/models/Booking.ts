export enum BookingType {
  Booking = 'Booking',
  Contact = 'Contact',
}

import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IBooking extends Document {
  name: string;
  email: string;
  date: Date;
  message?: string;
  createdAt?: Date;
  type: BookingType;
}

const BookingSchema = new Schema<IBooking>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
  type: {
    type: String,
    enum: Object.values(BookingType),
    required: true,
  },
});

// Prevent model overwrite upon hot-reload in dev
export default models.Booking || model<IBooking>('Booking', BookingSchema);
