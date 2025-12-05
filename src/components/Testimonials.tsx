import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Profesional IT',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: "Pelayanan luar biasa! iPhone 15 Pro yang saya beli dalam kondisi sempurna. Proses checkout sangat mudah dan respon via WhatsApp sangat cepat. Pasti akan beli lagi!"
  },
  {
    id: 2,
    name: 'Siti Rahmawati',
    role: 'Content Creator',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Sebagai content creator, saya butuh iPhone dengan kamera terbaik. Tim iPhone Station sangat membantu dalam memilih iPhone 15 Pro Max. Hasilnya memuaskan banget!'
  },
  {
    id: 3,
    name: 'Ahmad Wijaya',
    role: 'Mahasiswa',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Harga yang ditawarkan sangat kompetitif dan masih bergaransi resmi. Tidak ada biaya tersembunyi, transparansi penuh. Terima kasih iPhone Store!'
  },
  {
    id: 4,
    name: 'Dr. Ratna Wijayanti',
    role: 'Dokter',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Saya beli iPhone 14 second dari toko ini. Kondisinya sangat baik seperti baru, dan harganya jauh lebih terjangkau. Rekomendasi untuk semua orang!'
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Testimoni Pelanggan
          </h2>
          <p className="text-xl text-gray-600">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} dari 5`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
