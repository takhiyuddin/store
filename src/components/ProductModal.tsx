import { X } from 'lucide-react';
import { Product } from '../types/product';
import { useEffect } from 'react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '6281234567890';
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan ${product.model_name}. Apakah masih tersedia?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-900" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
              <img
                src={product.image_url}
                alt={product.model_name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium">
                  {product.condition}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
                {product.model_name}
              </h2>
              <p className="text-3xl font-bold text-gray-900 mb-6">
                {formatPrice(product.price)}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Deskripsi Produk
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.full_description}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Spesifikasi Teknis
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <dt className="font-medium text-gray-700">Chipset</dt>
                    <dd className="text-gray-900 text-right">{product.chipset}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <dt className="font-medium text-gray-700">Kamera</dt>
                    <dd className="text-gray-900 text-right">{product.camera}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <dt className="font-medium text-gray-700">Baterai</dt>
                    <dd className="text-gray-900 text-right">{product.battery}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <dt className="font-medium text-gray-700">Layar</dt>
                    <dd className="text-gray-900 text-right">{product.display}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <dt className="font-medium text-gray-700">Memori</dt>
                    <dd className="text-gray-900 text-right">{product.memory}</dd>
                  </div>
                </dl>
              </div>

              {product.notes && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-amber-900 mb-1">
                    Catatan Produk
                  </h3>
                  <p className="text-sm text-amber-800">{product.notes}</p>
                </div>
              )}
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Hubungi via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
