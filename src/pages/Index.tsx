import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Coffee, Users, ArrowRight, Check } from "lucide-react";

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
      
      {/* HERO - STANDARD IMAGE */}
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
              <p className="text-black text-sm md:text-base font-semibold tracking-wide uppercase mb-3">
                Founded by Cycle Logic
              </p>
              
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-black">Colombia's Ultimate</span>
                <br />
                <span className="text-black">Cycling Experience</span>
              </h1>
              
              <p className="text-slate-800 text-lg md:text-xl mb-8 leading-relaxed font-medium">
                Legendary Andes climbs • Authentic culture • 
                Exceptional food • Mountain retreat accommodation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  onClick={handleBookingClick}
                  size="lg" 
                  className="bg-[#DC4712] hover:bg-[#c33e10] text-white text-lg px-8 py-6 rounded-none border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  View Tour Dates
                </Button>
                <Button 
                  onClick={() => {
                    navigate('/contact');
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
                  }}
                  variant="outline" 
                  size="lg" 
                  className="bg-white/90 border-2 border-[#606C38] text-[#606C38] hover:bg-[#606C38] hover:text-white text-lg px-8 py-6 rounded-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-slate-800 text-sm font-medium">
                <span>11 Days</span>
                <span>•</span>
                <span>$5,600 CAD</span>
                <span>•</span>
                <span>Max 12 Riders</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOUNTAIN RETREAT - REDESIGNED TO MATCH REFERENCE PHOTO */}
      <section className="py-20 md:py-32 bg-[#FBF7F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* LEFT SIDE - Text (like the reference) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-[#606C38] uppercase" style={{ letterSpacing: '-0.02em' }}>
                  YOUR MOUNTAIN<br />RETREAT
                </h2>
                
                <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed font-light max-w-xl">
                  Escape to the Colombian Andes where adventure meets comfort. Nestled in the mountains outside Medellín, our retreat is your sanctuary after legendary rides—where coffee is fresh, sunsets are golden, and friendships are forged.
                </p>
                
                <button 
                  onClick={handleExperienceClick}
                  className="group inline-flex items-center gap-2 text-[#606C38] font-medium text-lg border-b-2 border-[#606C38] pb-1 hover:border-[#DC4712] hover:text-[#DC4712] transition-all duration-300"
                >
                  Discover the Experience
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>

              {/* RIGHT SIDE - Image (like the reference) */}
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
                    alt="Mountain retreat accommodation" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR DAYS LOOK LIKE - With grainy texture */}
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
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#606C38]">
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
                  alt="Cycling on mountain roads" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="md:col-span-1 bg-white p-6 md:p-8 shadow-lg border-l-4 border-[#EE712B] flex flex-col justify-center h-[450px]">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-[#606C38]">The Riding</h3>
                
                <div className="bg-slate-50 p-3 mb-4">
                  <svg viewBox="0 0 500 140" className="w-full">
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="90" x2="500" y2="90" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="60" x2="500" y2="60" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#e5e7eb" strokeWidth="1"/>
                    
                    <path 
                      d="M0,110 L60,105 L120,115 L180,95 L240,80 L300,90 L360,75 L420,85 L480,95" 
                      fill="none" 
                      stroke="#DC4712" 
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    
                    <path 
                      d="M0,110 L60,105 L120,115 L180,95 L240,80 L300,90 L360,75 L420,85 L480,95 L480,120 L0,120 Z" 
                      fill="#DC4712" 
                      opacity="0.15"
                    />
                    
                    <text x="10" y="20" fill="#606C38" fontSize="14" fontWeight="bold">Route Profile</text>
                  </svg>
                  <p className="text-xs text-slate-500 mt-2 text-center">
                    60-100km daily | 1,000-2,000m climbing
                  </p>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-3 text-sm">
                  Roads where pro teams train—challenging, stunning, fully supported. 
                  Mix of smooth tarmac and maintained gravel through coffee country.
                </p>
                <p className="text-xs text-slate-600 italic">
                  Intermediate to advanced. Full vehicle support follows every ride.
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
                <h3 className="font-heading text-2xl font-semibold mb-4 text-[#606C38]">The Culture</h3>
                <p className="text-slate-700 leading-relaxed mb-3 text-sm">
                  Coffee farm visits with families who've been growing for generations. Market explorations. 
                  Traditional meals in home kitchens. You're not observing—you're participating.
                </p>
                <p className="text-xs text-slate-600 italic">
                  Our guides introduce you as friends. The connections last beyond the tour.
                </p>
              </div>

              <div className="md:col-span-2 relative h-[450px] overflow-hidden group order-1 md:order-2">
                <img 
                  src="/culture-photo.jpg" 
                  alt="Cultural experiences" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  alt="Colombian food" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="md:col-span-1 bg-white p-6 md:p-8 shadow-lg border-l-4 border-[#606C38] flex flex-col justify-center h-[450px]">
                <Users className="h-10 w-10 text-[#EE712B] mb-4" />
                <h3 className="font-heading text-2xl font-semibold mb-4 text-[#606C38]">The Food</h3>
                <p className="text-slate-700 leading-relaxed mb-3 text-sm">
                  Bandeja paisa after hard rides. Fresh trout from mountain streams. Colombian coffee that 
                  redefines what you thought you knew. Every meal connects you deeper to the region.
                </p>
                <p className="text-xs text-slate-600 italic">
                  Maximum 12 riders means genuine connections form fast. Solo travelers always welcome.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#606C38] text-white texture-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE712B] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC4712] opacity-5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Ready to Experience Colombia?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Three departures in January-February 2025. Limited to 12 riders per tour. 
              $5,600 CAD includes accommodation, all meals, and guided tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button 
                onClick={handleBookingClick}
                size="lg" 
                className="bg-[#DC4712] hover:bg-[#c33e10] text-white text-lg px-10 py-7 rounded-none shadow-2xl hover:shadow-[#DC4712]/50 transition-all duration-300 transform hover:scale-105"
              >
                View Dates & Book Your Spot
              </Button>
              <Button 
                onClick={handleGalleryClick}
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#606C38] text-lg px-10 py-7 rounded-none shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                See Photo Gallery
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { num: "200+", label: "Happy Riders" },
                { num: "4.9/5", label: "Average Rating" },
                { num: "11", label: "Day Adventure" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-[#EE712B]/50"
                >
                  <div className="text-3xl font-bold text-[#EE712B] mb-2">{stat.num}</div>
                  <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
