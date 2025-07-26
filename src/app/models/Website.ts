import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IIPAddress extends Document {
  ip: string;
  firstSeen: Date;
}

export interface IWebsite extends Document {
  totalViews?: string;
  uniqueViews?: string;
  viewsToday?: string;
  lastDailyReset?: number;
}


const ipAddressSchema = new Schema<IIPAddress>({
  ip: { type: String, required: true, unique: true },
  firstSeen: { type: Date, default: Date.now },
});
// Optional: TTL index to expire IPs after 30 days
ipAddressSchema.index({ firstSeen: 1 }, { expireAfterSeconds: 60 * 60 * 24 * 30 });


export const IPAddress = mongoose.models.IPAddress || model<IIPAddress>('IPAddress', ipAddressSchema);



const websiteSchema = new Schema<IWebsite>({
  totalViews: { type: String },
  uniqueViews: { type: String },
  viewsToday: { type: String },
  lastDailyReset: { type: Number },
});

export const Website = mongoose.models.Website || model<IWebsite>('Website', websiteSchema);

