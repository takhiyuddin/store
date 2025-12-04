import { Smartphone } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-7 h-7 text-gray-900" />
            <span className="text-xl font-semibold tracking-tight text-gray-900">
              iPhone Store
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('produk')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Produk
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Kontak
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
