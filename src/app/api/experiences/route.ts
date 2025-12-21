import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    // Query updates from Neon database, sorted by date (most recent first)
    const updates = await sql`
      SELECT title, description, category, date
      FROM updates
      ORDER BY date DESC
    `;
    
    return NextResponse.json(updates);
  } catch (error) {
    console.error('Error fetching updates from database:', error);
    return NextResponse.json(
      { error: 'Failed to fetch updates' },
      { status: 500 }
    );
  }
}

