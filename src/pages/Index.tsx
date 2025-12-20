import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Coffee, Users, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  const handleGalleryClick = () => {
    navigate('/gallery');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  const handleExperienceClick = () => {
    navigate('/experience');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-background.jpg" 
            alt="Cycling in Colombia" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12"
            >
              {/* NEW HEADLINE */}
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 leading-tight text-black uppercase">
                Ride Colombia<br />Like A Pro
              </h1>
              
              <p className="text-black text-xs md:text-sm font-semibold tracking-wider uppercase mb-8">
                Founded by Cycle Logic
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBookingClick}
                  className="group relative overflow-hidden bg-[#DC4712] px-8 py-4 transition-all duration-300 hover:bg-[#c33e10] shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 text-base font-semibold text-white">
                    View Tour Dates
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-[#EE712B] transition-transform duration-300 group-hover:translate-x-0"></div>
                </button>
                
                <button 
                  onClick={() => {
                    navigate('/contact');
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
                  }}
                  className="bg-white border-2 border-white text-[#606C38] hover:bg-transparent hover:text-white px-8 py-4 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOUNTAIN RETREAT */}
      <section className="py-20 md:py-32 bg-[#FBF7F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight text-[#606C38] uppercase">
                  Your Mountain<br />Retreat
                </h2>
                
                <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed font-light max-w-xl">
                  Escape to the Colombian Andes where adventure meets comfort. Nestled in the mountains outside Medellín, our retreat is your sanctuary after legendary rides—where coffee is fresh, sunsets are golden, and friendships are forged.
                </p>
                
                <button 
                  onClick={handleExperienceClick}
                  className="group inline-flex items-center gap-2 text-[#606C38] font-medium text-lg border-b-2 border-[#606C38] pb-1 hover:border-[#DC4712] hover:text-[#DC4712] transition-all duration-300"
                >
                  Discover The Experience
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="relative h-[400px] md:h-[600px] overflow-hidden bg-[#F1E9E3]">
                  <img 
                    src="/property.jpg" 
                    alt="Mountain retreat" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR DAYS LOOK LIKE */}
      <section className="py-20 md:py-28 texture-noise relative overflow-hidden">
        <div className="relative z-10">
          <div className="container mx-auto px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 text-[#606C38] uppercase">
                What Your Days Look Like
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Every day balances world-class riding with authentic cultural immersion
              </p>
            </motion.div>
          </div>

          {/* THE RIDING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-2 relative h-[450px] overflow-hidden group">
                <img 
                  src="/hero-cycling.jpg" 
                  alt="Cycling" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="md:col-span-1 bg-white p-6 md:p-8 shadow-lg border-l-4 border-[#EE712B] flex flex-col justify-center h-[450px]">
                <h3 className="font-heading text-2xl font-extrabold mb-4 text-[#606C38] uppercase">The Riding</h3>
                
                <div className="bg-slate-50 p-3 mb-4">
                  <svg viewBox="0 0 500 140" className="w-full">
                    <path 
                      d="M0,110 L60,105 L120,115 L180,95 L240,80 L300,90 L360,75 L420,85 L480,95" 
                      fill="none" 
                      stroke="#DC4712" 
                      strokeWidth="3"
                    />
                    <path 
                      d="M0,110 L60,105 L120,115 L180,95 L240,80 L300,90 L360,75 L420,85 L480,95 L480,120 L0,120 Z" 
                      fill="#DC4712" 
                      opacity="0.15"
                    />
                  </svg>
                  <p className="text-xs text-slate-500 mt-2 text-center">
                    60-100km daily | 1,000-2,000m climbing
                  </p>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-3 text-sm">
                  Roads where pro teams train—challenging, stunning, fully supported.
                </p>
              </div>
            </div>
          </motion.div>

          {/* THE CULTURE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-1 bg-white p-6 md:p-8 shadow-lg border-r-4 border-[#DC4712] flex flex-col justify-center h-[450px] order-2 md:order-1">
                <Coffee className="h-10 w-10 text-[#EE712B] mb-4" />
                <h3 className="font-heading text-2xl font-extrabold mb-4 text-[#606C38] uppercase">The Culture</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Coffee farm visits with families who've been growing for generations.
                </p>
              </div>

              <div className="md:col-span-2 relative h-[450px] overflow-hidden group order-1 md:order-2">
                <img 
                  src="/culture-photo.jpg" 
                  alt="Culture" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* THE FOOD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-2 relative h-[450px] overflow-hidden group">
                <img 
                  src="/food-photo.jpg" 
                  alt="Food" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="md:col-span-1 bg-white p-6 md:p-8 shadow-lg border-l-4 border-[#606C38] flex flex-col justify-center h-[450px]">
                <Users className="h-10 w-10 text-[#EE712B] mb-4" />
                <h3 className="font-heading text-2xl font-extrabold mb-4 text-[#606C38] uppercase">The Food</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Colombian coffee that redefines what you thought you knew.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#606C38] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 uppercase">
              Ready To Experience Colombia?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Three departures in January-February 2025. Limited to 12 riders per tour.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button 
                onClick={handleBookingClick}
                className="group relative overflow-hidden bg-[#DC4712] px-10 py-5 transition-all duration-300 hover:bg-[#c33e10] shadow-2xl"
              >
                <span className="relative z-10 text-lg font-semibold text-white">
                  View Dates & Book Your Spot
                </span>
                <div className="absolute inset-0 -translate-x-full bg-[#EE712B] transition-transform duration-300 group-hover:translate-x-0"></div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
