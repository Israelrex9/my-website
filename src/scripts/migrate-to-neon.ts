/**
 * Migration script to set up the database and migrate data from updates.json
 * Run with: npx tsx src/scripts/migrate-to-neon.ts
 */

import { config } from 'dotenv';
import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';

// Load .env.local file
config({ path: path.join(process.cwd(), '.env.local') });

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL not found in environment variables.');
  console.error('   Make sure you have a .env.local file with DATABASE_URL set.');
  process.exit(1);
}

// Clean up the connection string (remove psql command prefix if present)
let connectionString = process.env.DATABASE_URL.trim();
// Remove 'psql ' prefix and quotes if present
connectionString = connectionString.replace(/^psql\s+['"]?/, '').replace(/['"]$/, '');

const sql = neon(connectionString);

interface Update {
  title: string;
  description: string;
  category: string;
  date: string;
}

async function migrate() {
  try {
    console.log('🚀 Starting migration...\n');

    // Step 1: Create the table
    console.log('📊 Creating updates table...');
    await sql`
      CREATE TABLE IF NOT EXISTS updates (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(50) NOT NULL,
        date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ Table created successfully\n');

    // Step 2: Create indexes
    console.log('📇 Creating indexes...');
    await sql`CREATE INDEX IF NOT EXISTS idx_updates_date ON updates(date DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_updates_category ON updates(category)`;
    console.log('✅ Indexes created successfully\n');

    // Step 3: Check if data already exists
    const existingCount = await sql`SELECT COUNT(*) as count FROM updates`;
    if (Number(existingCount[0].count) > 0) {
      console.log('⚠️  Database already contains data. Skipping data migration.');
      console.log('   If you want to add data from updates.json, delete existing records first.\n');
      return;
    }

    // Step 4: Read and migrate data from updates.json
    console.log('📦 Reading updates.json...');
    const filePath = path.join(process.cwd(), 'src', 'json-files', 'updates.json');
    
    if (!fs.existsSync(filePath)) {
      console.log('⚠️  updates.json not found. Skipping data migration.\n');
      return;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const updates: Update[] = JSON.parse(fileContents);

    console.log(`📝 Found ${updates.length} updates to migrate...\n`);

    // Step 5: Insert data
    for (const update of updates) {
      await sql`
        INSERT INTO updates (title, description, category, date)
        VALUES (${update.title}, ${update.description}, ${update.category}, ${update.date})
      `;
      console.log(`✅ Migrated: ${update.title}`);
    }

    console.log(`\n🎉 Migration completed! ${updates.length} updates migrated successfully.`);
    console.log('\n💡 You can now delete src/json-files/updates.json if you want.\n');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrate();

