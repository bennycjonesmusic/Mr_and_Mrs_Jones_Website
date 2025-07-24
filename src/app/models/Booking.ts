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
  quote?: string;
  eventType?: string;
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
  quote: {
    type: String,
    validate: {
      validator: function(this: IBooking, v: string | undefined) {
        if (this.type === BookingType.Booking) {
          return typeof v === 'string' && v.trim() !== '' && !isNaN(Number(v));
        }
        return true;
      },
      message: 'Quote is required and must be a number (as a string) when type is Booking.'
    },
    required: function(this: IBooking) { return this.type === BookingType.Booking; },
  },
  eventType: {
    type: String,
    required: function(this: IBooking) { return this.type === BookingType.Booking; },
  },
});

// Prevent model overwrite upon hot-reload in dev
export default models.Booking || model<IBooking>('Booking', BookingSchema);
