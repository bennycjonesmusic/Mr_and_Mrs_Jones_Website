import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // Example: return protected data
  return NextResponse.json({ message: 'Admin access granted' });
}
