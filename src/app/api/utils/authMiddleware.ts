// Simple API key check middleware for Next.js API routes
import { NextRequest, NextResponse } from 'next/server';

export function requireApiKey(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}
