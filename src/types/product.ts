export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  created_at: string;
}

export interface Product {
  id: string;
  model_name: string;
  image_url: string;
  price: number;
  short_description: string;
  full_description: string;
  chipset: string;
  camera: string;
  battery: string;
  display: string;
  memory: string;
  condition: string;
  notes: string;
  collection_id: string | null;
  created_at: string;
  updated_at: string;
  collections?: Collection;
}
