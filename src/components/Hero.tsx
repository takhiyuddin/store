export default function Hero() {
  const scrollToProduk = () => {
    const element = document.getElementById('produk');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">
          Katalog Produk Apple
          <br />
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Terlengkap & Terpercaya
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light animate-fade-in-delay">
          Dapatkan harga terbaik dan bergaransi untuk iPhone impian Anda.
          Pengalaman berbelanja yang aman dan mudah.
        </p>

        <button
          onClick={scrollToProduk}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-delay-2"
        >
          Lihat Produk
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
