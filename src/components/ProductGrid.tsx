import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Product, Collection } from '../types/product';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

interface ProductGridProps {
  onCollectionChange?: (collectionId: string | null) => void;
}

export default function ProductGrid({ onCollectionChange }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchCollections();
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
    onCollectionChange?.(selectedCollection);
  }, [selectedCollection, onCollectionChange]);

  const fetchCollections = async () => {
    try {
      const { data, error } = await supabase
        .from('collections')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setCollections(data || []);
      if (data && data.length > 0) {
        setSelectedCollection(data[0].id);
      }
    } catch (error) {
      console.error('Error fetching collections:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      let query = supabase
        .from('products')
        .select('*, collections(id, name, slug, description, icon)')
        .order('created_at', { ascending: false });

      if (selectedCollection) {
        query = query.eq('collection_id', selectedCollection);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="produk" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Koleksi Produk Kami
            </h2>
            <p className="text-xl text-gray-600">Memuat produk...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="produk" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Koleksi Produk Kami
            </h2>
            <p className="text-xl text-gray-600">
              Temukan produk Apple terbaik sesuai kebutuhan Anda
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setSelectedCollection(collection.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCollection === collection.id
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {collection.name}
              </button>
            ))}
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada produk dalam koleksi ini</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard
                    product={product}
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
