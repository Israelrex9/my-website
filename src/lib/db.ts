import { neon } from '@neondatabase/serverless';

// Lazy initialization - only create connection when actually used
let sqlInstance: ReturnType<typeof neon> | null = null;

function getSql() {
  if (!sqlInstance) {
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
    sqlInstance = neon(connectionString);
  }

  return sqlInstance;
}

// Export sql as a Proxy that lazily initializes on first use
export const sql = new Proxy({} as ReturnType<typeof neon>, {
  get(_target, prop) {
    const sql = getSql();
    const value = sql[prop as keyof typeof sql];
    return typeof value === 'function' ? value.bind(sql) : value;
  },
});

