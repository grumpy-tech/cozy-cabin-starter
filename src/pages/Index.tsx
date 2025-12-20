import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
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
              <p className="text-black text-xs md:text-sm font-semibold tracking-wider uppercase mb-4">
                founded by cycle logic
              </p>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight lowercase">
                <span className="text-black">colombia's ultimate</span>
                <br />
                <span className="text-black">cycling experience</span>
              </h1>
              
              <p className="text-slate-800 text-base md:text-lg mb-8 leading-relaxed">
                legendary andes climbs • authentic culture • 
                exceptional food • mountain retreat accommodation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={handleBookingClick}
                  className="group relative overflow-hidden bg-[#DC4712] px-8 py-4 transition-all duration-300 hover:bg-[#c33e10] shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 text-base font-semibold text-white lowercase">
                    view tour dates
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-[#EE712B] transition-transform duration-300 group-hover:translate-x-0"></div>
                </button>
                
                <button 
                  onClick={() => {
                    navigate('/contact');
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
                  }}
                  className="border-2 border-[#606C38] text-[#606C38] hover:bg-[#606C38] hover:text-white px-8 py-4 text-base font-semibold lowercase transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  get in touch
                </button>
              </div>

              <div className="flex flex-wrap gap-4 text-slate-800 text-sm">
                <span>11 days</span>
                <span>•</span>
                <span>$5,600 cad</span>
                <span>•</span>
                <span>max 12 riders</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOUNTAIN RETREAT - Minimalist split-screen */}
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
                <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight text-[#606C38] lowercase">
                  your mountain<br />retreat
                </h2>
                
                <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed font-light max-w-xl">
                  escape to the colombian andes where adventure meets comfort. nestled in the mountains outside medellín, our retreat is your sanctuary after legendary rides—where coffee is fresh, sunsets are golden, and friendships are forged.
                </p>
                
                <button 
                  onClick={handleExperienceClick}
                  className="group inline-flex items-center gap-2 text-[#606C38] font-medium text-lg border-b-2 border-[#606C38] pb-1 hover:border-[#DC4712] hover:text-[#DC4712] transition-all duration-300 lowercase"
                >
                  discover the experience
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
                    alt="Mountain retreat accommodation" 
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
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 text-[#606C38] lowercase">
                what your days look like
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto lowercase">
                every day balances world-class riding with authentic cultural immersion
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
                <h3 className="font-heading text-2xl font-extrabold mb-4 text-[#606C38] lowercase">the riding</h3>
                
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
                    
                    <text x="10" y="20" fill="#606C38" fontSize="14" fontWeight="bold">route profile</text>
                  </svg>
                  <p className="text-xs text-slate-500 mt-2 text-center lowercase">
                    60-100km daily | 1,000-2,000m climbing
                  </p>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-3 text-sm lowercase">
                  roads where pro teams train—challenging, stunning, fully supported. 
                  mix of smooth tarmac and maintained gravel through coffee country.
                </p>
                <p className="text-xs text-slate-600 italic lowercase">
                  intermediate to advanced. full vehicle support follows every ride.
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
                <h3 className="font-heading text-2xl font-extrabold mb-4 text-[#606C38] lowercase">the culture</h3>
                <p className="text-slate-700 leading-relaxed mb-3 text-sm lowercase">
                  coffee farm visits with families who've been growing for generations. market explorations. 
                  traditional meals in home kitchens. you're not observing—you're participating.
                </p>
                <p className="text-xs text-slate-600 italic lowercase">
                  our guides introduce you as friends. the connections last beyond the tour.
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
                <h3 className="font-heading text-2xl font-extrabold mb-4 text-[#606C38] lowercase">the food</h3>
                <p className="text-slate-700 leading-relaxed mb-3 text-sm lowercase">
                  bandeja paisa after hard rides. fresh trout from mountain streams. colombian coffee that 
                  redefines what you thought you knew. every meal connects you deeper to the region.
                </p>
                <p className="text-xs text-slate-600 italic lowercase">
                  maximum 12 riders means genuine connections form fast. solo travelers always welcome.
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
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 lowercase">
              ready to experience colombia?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed lowercase">
              three departures in january-february 2025. limited to 12 riders per tour. 
              $5,600 cad includes accommodation, all meals, and guided tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button 
                onClick={handleBookingClick}
                className="group relative overflow-hidden bg-[#DC4712] px-10 py-5 transition-all duration-300 hover:bg-[#c33e10] shadow-2xl"
              >
                <span className="relative z-10 text-lg font-semibold text-white lowercase">
                  view dates & book your spot
                </span>
                <div className="absolute inset-0 -translate-x-full bg-[#EE712B] transition-transform duration-300 group-hover:translate-x-0"></div>
              </button>
              
              <button 
                onClick={handleGalleryClick}
                className="border-2 border-white text-white hover:bg-white hover:text-[#606C38] px-10 py-5 text-lg font-semibold lowercase transition-all duration-300 shadow-xl"
              >
                see photo gallery
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { num: "200+", label: "happy riders" },
                { num: "4.9/5", label: "average rating" },
                { num: "11", label: "day adventure" }
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
                  <div className="text-sm text-white/70 font-medium lowercase">{stat.label}</div>
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
