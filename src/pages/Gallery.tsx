import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "all photos",
  "epic climbs",
  "mountain views",
  "colombian culture",
  "delicious food",
  "happy riders",
  "coffee farms",
  "off the bike"
];

const Gallery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all photos");

  const handleBookingClick = () => {
    navigate('/booking');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  // Placeholder images (you'll replace with real photos)
  const placeholderPhotos = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    caption: `photo ${i + 1}`,
  }));

  const filteredPhotos = activeCategory === "all photos" 
    ? placeholderPhotos 
    : placeholderPhotos.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#606C38] to-[#7a8c4a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white lowercase">
              tour gallery
            </h1>
            <p className="text-xl text-white/90 leading-relaxed lowercase">
              see what awaits you in the colombian andes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium lowercase transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#DC4712] text-white shadow-md'
                    : 'bg-[#FBF7F7] text-[#606C38] hover:bg-[#F1E9E3]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#FBF7F7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] overflow-hidden bg-slate-200 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                {/* Placeholder - replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#606C38] to-[#7a8c4a]">
                  <span className="text-white/30 text-6xl">🚴</span>
                </div>
                
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium lowercase">{photo.caption}</p>
                    <p className="text-white/70 text-sm lowercase">{photo.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg lowercase">no photos in this category yet</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#606C38] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/mountains-illustration.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 lowercase">
              be in the next gallery
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed lowercase">
              join us for an unforgettable 11-day adventure through colombia
            </p>
            <button 
              onClick={handleBookingClick}
              className="group relative overflow-hidden bg-[#DC4712] px-10 py-5 transition-all duration-300 hover:bg-[#c33e10] shadow-2xl"
            >
              <span className="relative z-10 text-lg font-semibold text-white lowercase">
                view dates & book your spot
              </span>
              <div className="absolute inset-0 -translate-x-full bg-[#EE712B] transition-transform duration-300 group-hover:translate-x-0"></div>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
