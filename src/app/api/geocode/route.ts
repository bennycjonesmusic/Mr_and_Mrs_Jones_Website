import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'; // Fastest for simple fetches

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const postcode = searchParams.get('postcode');
  if (!postcode) {
    return NextResponse.json({ error: 'Missing postcode' }, { status: 400 });
  }
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(postcode)}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'sarahandbenmusic.com booking form (contact@sarahandbenmusic.com)',
        'Accept-Language': 'en',
        'Referer': 'https://sarahandbenmusic.com/'
      },
      // Nominatim requires a real user-agent and referer
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Geocoding failed' }, { status: 502 });
    }
    const data = await res.json();
    if (data && data[0]) {
      return NextResponse.json({ lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) });
    }
    return NextResponse.json({ error: 'No result' }, { status: 404 });
  } catch (e) {
    return NextResponse.json({ error: 'Geocoding error' }, { status: 500 });
  }
}
