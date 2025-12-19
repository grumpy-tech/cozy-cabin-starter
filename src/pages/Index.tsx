import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Coffee, Users, Home as HomeIcon, Check } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGalleryClick = () => {
    navigate('/gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* HERO - STANDARD IMAGE, NO EFFECTS */}
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
                  className="bg-[#F6995C] hover:bg-[#e88849] text-white text-lg px-8 py-6 rounded-none border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  View Tour Dates
                </Button>
                <Button 
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  variant="outline" 
                  size="lg" 
                  className="bg-white/90 border-2 border-[#51829B] text-[#51829B] hover:bg-[#51829B] hover:text-white text-lg px-8 py-6 rounded-none shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* MOUNTAIN RETREAT */}
      <section className="py-20 md:py-28 bg-white texture-dots">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#51829B]">
                Your Mountain Retreat
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Where you'll return after epic rides to rest, recover, and share stories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[500px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <img 
                  src="/property.jpg" 
                  alt="Your accommodation" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <HomeIcon className="h-8 w-8 text-[#F6995C]" />
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#51829B]">
                    Surrounded by Nature
                  </h3>
                </div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Nestled in the mountains outside Medellín, surrounded by coffee plantations and pine forests. 
                  This peaceful retreat is where you'll recover after challenging rides, watch sunsets over the Andes, 
                  and build friendships with fellow riders.
                </p>
                <div className="space-y-4">
                  {[
                    "Stunning mountain views from your room",
                    "Fresh mountain air and peaceful surroundings",
                    "Perfect base for exploring the coffee region"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#F6995C] flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR DAYS LOOK LIKE - Gradient background, 2/3 photos edge-to-edge, 1/3 cards */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#EADFB4] to-[#d4c89f] relative overflow-hidden">
        <div className="absolute inset-0 texture-subtle opacity-30"></div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#51829B]">
                What Your Days Look Like
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Every day balances world-class riding with authentic cultural immersion
              </p>
            </motion.div>
          </div>

          {/* THE RIDING - Photo LEFT (2/3), Card RIGHT (1/3) */}
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
              
              <div className="md:col-span-1 bg-white p-6 md:p-8 shadow-lg border-l-4 border-[#F6995C] flex flex-col justify-center h-[450px]">
                <h3 className="font-heading text-2xl font-semibold mb-4 text-[#51829B]">The Riding</h3>
                
                <div className="bg-slate-50 p-3 mb-4">
                  <svg viewBox="0 0 500 140" className="w-full">
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="90" x2="500" y2="90" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="60" x2="500" y2="60" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#e5e7eb" strokeWidth="1"/>
                    
                    <path 
                      d="M0,110 L60,105 L120,115 L180,95 L240,80 L300,90 L360,75 L420,85 L480,95" 
                      fill="none" 
                      stroke="#F6995C" 
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    
                    <path 
                      d="M0,110 L60,105 L120,115 L180,95 L240,80 L300,90 L360,75 L420,85 L480,95 L480,120 L0,120 Z" 
                      fill="#F6995C" 
                      opacity="0.15"
                    />
                    
                    <text x="10" y="20" fill="#51829B" fontSize="14" fontWeight="bold">Route Profile</text>
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

          {/* THE CULTURE - Card LEFT (1/3), Photo RIGHT (2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-1 bg-white p-6 md:p-8 shadow-lg border-r-4 border-[#9BB0C1] flex flex-col justify-center h-[450px] order-2 md:order-1">
                <Coffee className="h-10 w-10 text-[#F6995C] mb-4" />
                <h3 className="font-heading text-2xl font-semibold mb-4 text-[#51829B]">The Culture</h3>
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

          {/* THE FOOD - Photo LEFT (2/3), Card RIGHT (1/3) */}
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
              
              <div className="md:col-span-1 bg-white p-6 md:p-8 shadow-lg border-l-4 border-[#51829B] flex flex-col justify-center h-[450px]">
                <Users className="h-10 w-10 text-[#F6995C] mb-4" />
                <h3 className="font-heading text-2xl font-semibold mb-4 text-[#51829B]">The Food</h3>
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

      {/* CTA with improved visual hierarchy */}
      <section className="py-20 md:py-28 bg-[#51829B] text-white texture-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F6995C] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9BB0C1] opacity-5 rounded-full blur-3xl"></div>
        
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
                className="bg-[#F6995C] hover:bg-[#e88849] text-white text-lg px-10 py-7 rounded-none shadow-2xl hover:shadow-[#F6995C]/50 transition-all duration-300 transform hover:scale-105"
              >
                View Dates & Book Your Spot
              </Button>
              <Button 
                onClick={handleGalleryClick}
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#51829B] text-lg px-10 py-7 rounded-none shadow-xl hover:shadow-2xl transition-all duration-300"
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
                  className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-[#F6995C]/50"
                >
                  <div className="text-3xl font-bold text-[#EADFB4] mb-2">{stat.num}</div>
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
