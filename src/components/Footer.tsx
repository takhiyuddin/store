import { Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-6 h-6" />
              <span className="text-lg font-semibold">Galaxy iStore</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pusat penjualan iPhone terpercaya dengan harga terbaik dan bergaransi resmi.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#home" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#produk" className="hover:text-gray-900 transition-colors">Produk</a></li>
              <li><a href="#kontak" className="hover:text-gray-900 transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>+62 812-3456-7890</li>
              <li>info@iphonestation.com</li>
              <li>Yogyakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2024 iPhone Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
