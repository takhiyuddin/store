/*
  # Create iPhone Products Table

  1. New Tables
    - `products`
      - `id` (uuid, primary key) - Unique identifier for each product
      - `model_name` (text) - iPhone model name (e.g., "iPhone 15 Pro Max")
      - `image_url` (text) - Product image URL
      - `price` (numeric) - Product price in IDR
      - `short_description` (text) - Brief description for catalog card
      - `full_description` (text) - Complete product description in Bahasa Indonesia
      - `chipset` (text) - Processor information
      - `camera` (text) - Camera specifications
      - `battery` (text) - Battery capacity and info
      - `display` (text) - Screen specifications
      - `memory` (text) - Storage and RAM options
      - `condition` (text) - Product condition (baru/second/99%/minus)
      - `notes` (text) - Product notes or defects
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (catalog is public)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  model_name text NOT NULL,
  image_url text NOT NULL,
  price numeric NOT NULL,
  short_description text NOT NULL,
  full_description text NOT NULL,
  chipset text NOT NULL,
  camera text NOT NULL,
  battery text NOT NULL,
  display text NOT NULL,
  memory text NOT NULL,
  condition text NOT NULL,
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to products"
  ON products
  FOR SELECT
  TO anon
  USING (true);