import mongoose, { Schema, Document, model } from 'mongoose';

export interface IBookingRateLimit extends Document {
  ip: string;
  count: number;
  lastReset: Date;
}

const BookingRateLimitSchema = new Schema<IBookingRateLimit>({
  ip: { type: String, required: true, unique: true },
  count: { type: Number, required: true, default: 0 },
  lastReset: { type: Date, required: true, default: Date.now },
});

const BookingRateLimit = mongoose.models.BookingRateLimit || model<IBookingRateLimit>('BookingRateLimit', BookingRateLimitSchema);

export default BookingRateLimit;
