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
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-background.jpg" 
            alt="Cycling in Colombia" 
            className="w-full h-full object-cover brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
            >
              <p className="text-[#FEB21A] text-sm md:text-base font-semibold tracking-wide uppercase mb-3">
                Founded by Cycle Logic
              </p>
              
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
                Colombia's Ultimate
                <br />
                <span className="text-[#FEB21A]">Cycling Experience</span>
              </h1>
              
              <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                Legendary Andes climbs • Authentic culture • 
                Exceptional food • Mountain retreat accommodation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  onClick={handleBookingClick}
                  size="lg" 
                  className="bg-[#ED3F27] hover:bg-[#d63620] text-white text-lg px-8 py-6 rounded-none border-0"
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
                  className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#134686] text-lg px-8 py-6 rounded-none"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-white text-sm">
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

      {/* YOUR MOUNTAIN RETREAT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#134686]">
                Your Mountain Retreat
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Where you'll return after epic rides to rest, recover, and share stories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[500px] overflow-hidden"
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
                  <HomeIcon className="h-8 w-8 text-[#ED3F27]" />
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#134686]">
                    Surrounded by Nature
                  </h3>
                </div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Nestled in the mountains outside Medellín, surrounded by coffee plantations and pine forests. 
                  This peaceful retreat is where you'll recover after challenging rides, watch sunsets over the Andes, 
                  and build friendships with fellow riders.
                </p>
                <div className="space-y-3">
                  {[
                    "Stunning mountain views from your room",
                    "Fresh mountain air and peaceful surroundings",
                    "Perfect base for exploring the coffee region"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#ED3F27] flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STAGGERED TIMELINE */}
      <section className="py-16 md:py-24 bg-[#FDF4E3]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#134686]">
              What Your Days Look Like
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every day balances world-class riding with authentic cultural immersion
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            {/* Vertical dotted line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#ED3F27] hidden md:block" 
                 style={{ transform: 'translateX(-50%)' }} />

            {/* THE RIDING - LEFT with elevation chart AND cycling photo on right */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-24 grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="bg-white p-8 shadow-md border border-slate-200 relative">
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-[#ED3F27] border-4 border-[#FDF4E3] hidden md:block rounded-full keep-round"
                     style={{ transform: 'translateY(-50%)' }} />
                
                <h3 className="font-heading text-2xl font-semibold mb-4 text-[#134686]">The Riding</h3>
                
                {/* Elevation profile SVG */}
                <div className="bg-slate-50 p-4 mb-4">
                  <svg viewBox="0 0 500 180" className="w-full">
                    <line x1="0" y1="150" x2="500" y2="150" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="90" x2="500" y2="90" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="0" y1="60" x2="500" y2="60" stroke="#e5e7eb" strokeWidth="1"/>
                    
                    <path 
                      d="M0,140 L50,135 L100,150 L150,125 L200,110 L250,90 L300,100 L350,85 L400,95 L450,105 L500,115" 
                      fill="none" 
                      stroke="#ED3F27" 
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    
                    <path 
                      d="M0,140 L50,135 L100,150 L150,125 L200,110 L250,90 L300,100 L350,85 L400,95 L450,105 L500,115 L500,150 L0,150 Z" 
                      fill="#ED3F27" 
                      opacity="0.1"
                    />
                    
                    <text x="10" y="25" fill="#134686" fontSize="16" fontWeight="bold">Route Profile</text>
                    <text x="10" y="175" fill="#666" fontSize="12">Distance (km)</text>
                    <text x="420" y="45" fill="#666" fontSize="11">Speed: 23.7 km/h</text>
                  </svg>
                  <p className="text-xs text-slate-500 mt-2 text-center">
                    60-100km daily | 1,000-2,000m climbing
                  </p>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Roads where pro teams train—challenging, stunning, fully supported. 
                  Mix of smooth tarmac and maintained gravel through coffee country.
                </p>
                <p className="text-sm text-slate-600 italic">
                  Intermediate to advanced. Full vehicle support follows every ride.
                </p>
              </div>
              
              {/* CYCLING PHOTO - Right side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-[400px] overflow-hidden"
              >
                <img 
                  src="/hero-cycling.jpg" 
                  alt="Cycling on mountain roads" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* THE CULTURE - RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 md:mb-24 grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="hidden md:block"></div>
              <div className="bg-white p-8 shadow-md border border-slate-200 relative">
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-[#ED3F27] border-4 border-[#FDF4E3] hidden md:block rounded-full keep-round"
                     style={{ transform: 'translateY(-50%)' }} />
                
                <Coffee className="h-12 w-12 text-[#ED3F27] mb-6" />
                <h3 className="font-heading text-2xl font-semibold mb-4 text-[#134686]">The Culture</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Coffee farm visits with families who've been growing for generations. Market explorations. 
                  Traditional meals in home kitchens. You're not observing—you're participating.
                </p>
                <p className="text-sm text-slate-600 italic">
                  Our guides introduce you as friends. The connections last beyond the tour.
                </p>
              </div>
            </motion.div>

            {/* THE FOOD - LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="bg-white p-8 shadow-md border border-slate-200 relative">
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-[#ED3F27] border-4 border-[#FDF4E3] hidden md:block rounded-full keep-round"
                     style={{ transform: 'translateY(-50%)' }} />
                
                <Users className="h-12 w-12 text-[#ED3F27] mb-6" />
                <h3 className="font-heading text-2xl font-semibold mb-4 text-[#134686]">The Food</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Bandeja paisa after hard rides. Fresh trout from mountain streams. Colombian coffee that 
                  redefines what you thought you knew. Every meal connects you deeper to the region.
                </p>
                <p className="text-sm text-slate-600 italic">
                  Maximum 12 riders means genuine connections form fast. Solo travelers always welcome.
                </p>
              </div>
              <div className="hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#134686] text-white">
        <div className="container mx-auto px-4">
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
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Three departures in January-February 2025. Limited to 12 riders per tour. 
              $5,600 CAD includes accommodation, all meals, and guided tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookingClick}
                size="lg" 
                className="bg-[#ED3F27] hover:bg-[#d63620] text-white text-lg px-8 py-6 rounded-none"
              >
                View Dates & Book Your Spot
              </Button>
              <Button 
                onClick={handleGalleryClick}
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#134686] text-lg px-8 py-6 rounded-none"
              >
                See Photo Gallery
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { num: "200+", label: "Happy Riders" },
                { num: "4.9/5", label: "Average Rating" },
                { num: "11", label: "Day Adventure" }
              ].map((stat, i) => (
                <div key={i} className="border-t-2 border-[#ED3F27] pt-4">
                  <div className="text-3xl font-bold text-[#FEB21A] mb-1">{stat.num}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
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
