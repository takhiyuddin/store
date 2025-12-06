import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid onCollectionChange={setSelectedCollectionId} />
      <Testimonials collectionId={selectedCollectionId} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
