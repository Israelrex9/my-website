# Database Setup for Neon

## 1. Create a Neon Database

1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new project
3. Copy your connection string (DATABASE_URL)

## 2. Set Environment Variables

Create a `.env.local` file in the root of your project:

```env
DATABASE_URL=postgresql://username:password@hostname/database?sslmode=require
```

Replace with your actual Neon connection string.

## 3. Create the Database Table

Run this SQL in your Neon SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS updates (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX idx_updates_date ON updates(date DESC);
CREATE INDEX idx_updates_category ON updates(category);
```

## 4. Insert Sample Data (Optional)

```sql
INSERT INTO updates (title, description, category, date) VALUES
  ('Head of Product Design', 'I work on the product team at PearProtocol, where I focus on designing the end to end trading experience for expert to beginner traders, through feedbacks.', 'Work', '2024-01-15'),
  ('Lead Web3 Product Designer', 'Previously, I was the lead product designer at Onchain.vc. Where I focused on leading a team of 3 designers to design dapps for our client base.', 'Work', '2023-06-10'),
  ('Lead Web3 Product Designer', 'Previously, I was the lead product designer at Onchain.vc. Where I focused on leading a team of 3 designers to design dapps for our client base.', 'Work', '2022-03-20');
```

## 5. Manual Updates

To add or update entries, you can:
- Use the Neon SQL Editor in the console
- Use any PostgreSQL client
- Or create an admin interface later

The API route will automatically fetch and sort updates by date (newest first).





