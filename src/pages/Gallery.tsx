import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Category mapping: Display Name → Folder Name
const CATEGORY_MAP: Record<string, string | null> = {
  "All Photos": null,
  "Epic Climbs": "riding",
  "Mountain Views": "landscapes",
  "Colombian Culture": "culture",
  "Delicious Food": "food",
  "Happy Riders": "people",
  "Off The Bike": "offbike"
};

const Gallery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Photos");

  // Auto-import all images from gallery folders
  const photos = useMemo(() => {
    const imageModules = import.meta.glob('/public/gallery/**/*.{jpg,jpeg,png,webp}', { eager: true });
    
    return Object.keys(imageModules).map((path) => {
      // Extract folder name from path: /public/gallery/riding/1.jpg → riding
      const parts = path.split('/');
      const folderIndex = parts.indexOf('gallery') + 1;
      const folder = parts[folderIndex];
      const filename = parts[parts.length - 1];
      
      // Find display name for this folder
      const categoryName = Object.entries(CATEGORY_MAP).find(
        ([_, f]) => f === folder
      )?.[0] || folder;
      
      return {
        src: path.replace('/public', ''),
        category: categoryName,
        folder: folder,
        name: filename.replace(/\.[^/.]+$/, '') // Remove extension
      };
    });
  }, []);

  const filteredPhotos = activeCategory === "All Photos" 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#606C38] to-[#7a8c4a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white uppercase">Tour Gallery</h1>
            <p className="text-xl text-white/90">See what awaits you in the Colombian Andes</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(CATEGORY_MAP).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat ? 'bg-[#DC4712] text-white' : 'bg-[#FBF7F7] text-[#606C38] hover:bg-[#F1E9E3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FBF7F7]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 9) * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] overflow-hidden bg-slate-200 shadow-md hover:shadow-xl transition-shadow"
              >
                <img 
                  src={photo.src}
                  alt={photo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <div>
                    <p className="text-white font-medium">{photo.name}</p>
                    <p className="text-white/70 text-sm">{photo.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredPhotos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">Add photos to /public/gallery/{CATEGORY_MAP[activeCategory]}/</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#606C38] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/mountains-illustration.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 uppercase">Be In The Next Gallery</h2>
            <p className="text-xl text-white/90 mb-10">Join us for an unforgettable 11-day adventure through Colombia</p>
            <button 
              onClick={() => { navigate('/booking'); setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0); }}
              className="group relative overflow-hidden bg-[#DC4712] px-10 py-5 transition-all hover:bg-[#c33e10] shadow-2xl"
            >
              <span className="relative z-10 text-lg font-semibold text-white">View Dates & Book Your Spot</span>
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
