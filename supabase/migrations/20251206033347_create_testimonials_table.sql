/*
  # Create Testimonials Table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `collection_id` (uuid, foreign key) - Link to collections
      - `name` (text) - Customer name
      - `role` (text) - Customer profession/role
      - `image` (text) - Customer profile image URL
      - `rating` (integer) - Rating 1-5
      - `text` (text) - Testimonial text
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public read access (testimonials are public)

  3. Data
    - Populate with sample testimonials for each collection (iPhone, MacBook, iPad, Watch, AirPods)
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id uuid NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  name text NOT NULL,
  role text NOT NULL,
  image text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to testimonials"
  ON testimonials
  FOR SELECT
  TO anon
  USING (true);

INSERT INTO testimonials (collection_id, name, role, image, rating, text)
VALUES
  (
    (SELECT id FROM collections WHERE slug = 'iphone'),
    'Susi Pujiastuti',
    'Profesional IT',
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'Pelayanan luar biasa! iPhone 15 Pro yang saya beli dalam kondisi sempurna. Proses checkout sangat mudah dan respon via WhatsApp sangat cepat. Pasti akan beli lagi!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'iphone'),
    'Siti Rahmawati',
    'Content Creator',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'Sebagai content creator, saya butuh iPhone dengan kamera terbaik. Tim iPhone Station sangat membantu dalam memilih iPhone 15 Pro Max. Hasilnya memuaskan banget!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'iphone'),
    'Ahmad Wijaya',
    'Mahasiswa',
    'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'Harga yang ditawarkan sangat kompetitif dan masih bergaransi resmi. Tidak ada biaya tersembunyi, transparansi penuh. Terima kasih iPhone Station!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'iphone'),
    'Dr. Ratna Wijayanti',
    'Dokter',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'Saya beli iPhone 14 second dari toko ini. Kondisinya sangat baik seperti baru, dan harganya jauh lebih terjangkau. Rekomendasi untuk semua orang!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'macbook'),
    'Budi Santoso',
    'Web Developer',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'MacBook Pro yang saya beli performanya luar biasa untuk coding. Build time jauh lebih cepat dan tidak pernah lag. Investasi terbaik untuk developer!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'macbook'),
    'Rina Kusuma',
    'Graphic Designer',
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'MacBook Air sempurna untuk desain grafis. Layarnya tajam, warna akurat, dan desainnya ringkas untuk dibawa kemana-mana. Sangat puas!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'ipad'),
    'Eka Wijaya',
    'Pelajar',
    'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'iPad Pro dengan Apple Pencil sempurna untuk online learning. Layarnya besar dan smooth untuk menulis catatan. Sangat membantu pembelajaran saya!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'ipad'),
    'Hendra Pratama',
    'Ilustrator',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'iPad Air sangat cocok untuk digital illustration. Pressure sensitivity Apple Pencil sangat responsif. Karya saya jadi lebih bagus dan detail!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'watch'),
    'Maya Kusuma',
    'Atlet Profesional',
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'Apple Watch Ultra adalah teman terbaik saat olahraga. Tracking akurat, battery tahan lama, dan design-nya sporty. Sempurna untuk lifestyle aktif!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'watch'),
    'Rudi Hartono',
    'Business Executive',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'Apple Watch Series memberikan elegance dan functionality. Notifikasi email langsung di wrist, pembayaran tap-to-pay sangat convenient!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'airpods'),
    'Sinta Wijaya',
    'Music Producer',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'AirPods Pro dengan noise cancellation terbaik untuk production. Sound quality jernih dan bass response bagus. Wireless experience sempurna!'
  ),
  (
    (SELECT id FROM collections WHERE slug = 'airpods'),
    'Joko Santoso',
    'Frequent Traveler',
    'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    5,
    'AirPods Max sangat nyaman untuk perjalanan panjang. Audio immersive, build quality premium, dan charging case yang elegant. Highly recommended!'
  )
ON CONFLICT DO NOTHING;
