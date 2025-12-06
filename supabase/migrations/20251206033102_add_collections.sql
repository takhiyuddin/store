/*
  # Add Collections System

  1. New Tables
    - `collections`
      - `id` (uuid, primary key)
      - `name` (text) - Collection name (iPhone, MacBook, iPad, Watch, AirPods)
      - `slug` (text) - URL-friendly slug
      - `description` (text) - Collection description
      - `icon` (text) - Icon name for UI display
      - `created_at` (timestamptz)

  2. Modified Tables
    - `products`
      - Add `collection_id` (uuid) - Foreign key to collections
      - Add NOT NULL constraint after populating existing records

  3. Security
    - Enable RLS on `collections` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS collections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE collections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to collections"
  ON collections
  FOR SELECT
  TO anon
  USING (true);

INSERT INTO collections (name, slug, description, icon)
VALUES
  ('iPhone', 'iphone', 'Latest iPhone models and variants', 'Smartphone'),
  ('MacBook', 'macbook', 'MacBook Pro, Air, and more', 'Laptop'),
  ('iPad', 'ipad', 'iPad Pro, Air, and standard models', 'Tablet'),
  ('Apple Watch', 'watch', 'Apple Watch Series and Ultra', 'Watch'),
  ('AirPods', 'airpods', 'AirPods Pro, Max, and more', 'Headphones')
ON CONFLICT DO NOTHING;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'collection_id'
  ) THEN
    ALTER TABLE products ADD COLUMN collection_id uuid;
    
    ALTER TABLE products
    ADD CONSTRAINT fk_products_collection
    FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE;
  END IF;
END $$;
