-- Run this SQL in your Neon SQL Editor to set up the database

-- Create the updates table
CREATE TABLE IF NOT EXISTS updates (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_updates_date ON updates(date DESC);
CREATE INDEX IF NOT EXISTS idx_updates_category ON updates(category);

-- Insert sample data from your updates.json
INSERT INTO updates (title, description, category, date) VALUES
  ('Head of Product Design', 'I work on the product team at PearProtocol, where I focus on designing the end to end trading experience for expert to beginner traders, through feedbacks.', 'Work', '2024-01-15'),
  ('Lead Web3 Product Designer', 'Previously, I was the lead product designer at Onchain.vc. Where I focused on leading a team of 3 designers to design dapps for our client base.', 'Work', '2023-06-10'),
  ('Lead Web3 Product Designer', 'Previously, I was the lead product designer at Onchain.vc. Where I focused on leading a team of 3 designers to design dapps for our client base.', 'Work', '2022-03-20');


-- Create subscribers table for mailing list
CREATE TABLE IF NOT EXISTS subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);




