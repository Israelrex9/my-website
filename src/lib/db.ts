import { neon } from '@neondatabase/serverless';

// Get and clean the connection string
let connectionString = process.env.DATABASE_URL || '';

// Remove 'psql ' prefix and quotes if present (Neon sometimes provides it this way)
if (connectionString) {
  connectionString = connectionString.trim().replace(/^psql\s+['"]?/, '').replace(/['"]$/, '');
}

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Initialize Neon client
const sql = neon(connectionString);

export { sql };

