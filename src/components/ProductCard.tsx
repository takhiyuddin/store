import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getConditionBadgeColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'baru':
        return 'bg-green-100 text-green-800';
      case '99%':
        return 'bg-blue-100 text-blue-800';
      case 'second':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100"
    >
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image_url}
          alt={product.model_name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionBadgeColor(
              product.condition
            )}`}
          >
            {product.condition}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
          {product.model_name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {product.short_description}
        </p>

        <div className="flex items-baseline justify-between">
          <p className="text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </p>
          <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors">
            Lihat Detail →
          </span>
        </div>
      </div>
    </div>
  );
}
