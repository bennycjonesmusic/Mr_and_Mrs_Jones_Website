import mongoose from 'mongoose';
// Ensure mongoose is connected
const MONGODB_URI = process.env.DATABASE_URL as string;
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI, { dbName: undefined });
}
// Helper to get Website doc (singleton)
async function getWebsiteDoc() {
  let website = await Website.findOne();
  if (!website) {
    website = await Website.create({ totalViews: '0', uniqueViews: '0', viewsToday: '0' });
  }
  return website;
}
// POST: Update total views
import type { NextRequest } from 'next/server';
export async function POST(req: NextRequest) {
  const { type, ip } = await req.json();
  const website = await getWebsiteDoc();

  if (type === 'updateTotal') {
    website.totalViews = String(Number(website.totalViews || '0') + 1);
    await website.save();
    return NextResponse.json({ totalViews: website.totalViews });
  }

  if (type === 'updateUnique') {
    if (!ip) return NextResponse.json({ error: 'IP required' }, { status: 400 });
    const exists = await IPAddress.findOne({ ip });
    if (!exists) {
      await IPAddress.create({ ip });
      website.uniqueViews = String(Number(website.uniqueViews || '0') + 1);
      await website.save();
      return NextResponse.json({ uniqueViews: website.uniqueViews, unique: true });
    }
    return NextResponse.json({ uniqueViews: website.uniqueViews, unique: false });
  }

  if (type === 'updateDaily') {
    // Reset daily if last update > 24h ago
    const now = Date.now();
    const lastReset = Number(website.lastDailyReset || 0);
    if (!lastReset || now - lastReset > 1000 * 60 * 60 * 24) {
      website.viewsToday = '1';
      website.lastDailyReset = now;
    } else {
      website.viewsToday = String(Number(website.viewsToday || '0') + 1);
    }
    await website.save();
    return NextResponse.json({ viewsToday: website.viewsToday });
  }

  return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
}
import { NextResponse } from 'next/server';
import { IPAddress, Website } from '@/app/models/Website';

// GET: Returns total, unique, and today's views
export async function GET() {
  try {
    let website = await Website.findOne();
    if (!website) {
      website = await Website.create({ totalViews: '0', uniqueViews: '0', viewsToday: '0' });
    }
    const uniqueViews = await IPAddress.countDocuments();
    const viewsToday = website?.viewsToday || 0;
    const totalViews = website?.totalViews || 0;
    return NextResponse.json({ totalViews, uniqueViews, viewsToday });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
