import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mountain, Coffee, Users, Home as HomeIcon, Check } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGalleryClick = () => {
    navigate('/gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <Navbar />
      
      {/* HERO SECTION - Brighter image, no blue box */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-background.jpg" 
            alt="Cycling in Colombia" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(1.1)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.4))' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }}
            >
              <p className="text-sm md:text-base font-semibold tracking-wide uppercase mb-3" style={{ color: '#F2C94C' }}>
                Founded by Cycle Logic
              </p>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-6 leading-tight">
                Colombia's Ultimate
                <br />
                <span style={{ color: '#F2C94C' }}>Cycling Experience</span>
              </h1>
              
              <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                Legendary Andes climbs • Authentic culture • 
                Exceptional food • Mountain retreat accommodation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-end">
                <Button 
                  onClick={handleBookingClick}
                  size="lg" 
                  className="text-lg px-8 py-6 font-semibold shadow-2xl border-0"
                  style={{ 
                    backgroundColor: '#F2C94C', 
                    color: '#3D5467',
                    borderRadius: '2px'
                  }}
                >
                  View Tour Dates
                </Button>
                <Button 
                  onClick={handleContactClick}
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 font-semibold shadow-2xl"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderColor: 'white',
                    color: '#3D5467',
                    borderRadius: '2px'
                  }}
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-white text-sm justify-end">
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
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3D5467' }}>
                Your Mountain Retreat
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
                Where you'll return after epic rides to rest, recover, and share stories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[500px] overflow-hidden shadow-xl"
              >
                <img 
                  src="/property.jpg" 
                  alt="Your accommodation in the Colombian mountains" 
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
                  <HomeIcon className="h-8 w-8" style={{ color: '#8B6F47' }} />
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: '#3D5467' }}>
                    Surrounded by Nature
                  </h3>
                </div>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4B5563' }}>
                  Nestled in the mountains outside Medellín, surrounded by coffee plantations and pine forests. 
                  This peaceful retreat is where you'll recover after challenging rides, watch sunsets over the Andes, 
                  and build friendships with fellow riders.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#8B6F47' }} />
                    <span style={{ color: '#4B5563' }}>Stunning mountain views from your room</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#8B6F47' }} />
                    <span style={{ color: '#4B5563' }}>Fresh mountain air and peaceful surroundings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#8B6F47' }} />
                    <span style={{ color: '#4B5563' }}>Perfect base for exploring the coffee region</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR DAYS LOOK LIKE - STAGGERED */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3D5467' }}>
              What Your Days Look Like
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Every day balances world-class riding with authentic cultural immersion
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Dotted line */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block" 
              style={{ 
                borderLeft: '2px dashed rgba(139, 111, 71, 0.3)',
                transform: 'translateX(-50%)'
              }}
            />

            {/* Card 1: The Riding - LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20 md:mb-32 relative"
            >
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="bg-white p-8 shadow-lg relative z-10" style={{ borderLeft: '4px solid #8B6F47' }}>
                  <Mountain className="h-12 w-12 mb-6" style={{ color: '#8B6F47' }} />
                  <h3 className="font-heading text-2xl font-semibold mb-4" style={{ color: '#3D5467' }}>
                    The Riding
                  </h3>
                  <p className="leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    60-100km daily with 1,000-2,000m of climbing through the Andes and coffee country. 
                    Roads where pro teams train—challenging, stunning, fully supported.
                  </p>
                  <p className="text-sm italic" style={{ color: '#6B7280' }}>
                    Intermediate to advanced. Road or gravel bikes. Full vehicle support.
                  </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <img 
                    src="/route-chart.png" 
                    alt="Route elevation profile" 
                    className="w-full h-auto shadow-md"
                  />
                  <p className="text-xs mt-2 text-center italic" style={{ color: '#6B7280' }}>
                    Sample route profile showing climbs and descents
                  </p>
                </div>
              </div>
              <div 
                className="hidden md:block absolute w-4 h-4 rounded-full" 
                style={{ 
                  backgroundColor: '#8B6F47',
                  right: '0',
                  top: '50%',
                  transform: 'translate(50%, -50%)',
                  left: '50%'
                }}
              />
            </motion.div>

            {/* Card 2: Culture - RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20 md:mb-32 relative"
            >
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="order-2 md:order-1"></div>
                <div className="bg-white p-8 shadow-lg relative z-10 order-1 md:order-2" style={{ borderRight: '4px solid #8B6F47' }}>
                  <Coffee className="h-12 w-12 mb-6" style={{ color: '#8B6F47' }} />
                  <h3 className="font-heading text-2xl font-semibold mb-4" style={{ color: '#3D5467' }}>
                    The Culture
                  </h3>
                  <p className="leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    Coffee farm visits with families who've been growing for generations. Market explorations. 
                    Traditional meals in home kitchens. You're not observing—you're participating.
                  </p>
                  <p className="text-sm italic" style={{ color: '#6B7280' }}>
                    Our guides introduce you as friends. The connections last beyond the tour.
                  </p>
                </div>
              </div>
              <div 
                className="hidden md:block absolute w-4 h-4 rounded-full" 
                style={{ 
                  backgroundColor: '#8B6F47',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </motion.div>

            {/* Card 3: Food - LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="bg-white p-8 shadow-lg relative z-10" style={{ borderLeft: '4px solid #8B6F47' }}>
                  <Users className="h-12 w-12 mb-6" style={{ color: '#8B6F47' }} />
                  <h3 className="font-heading text-2xl font-semibold mb-4" style={{ color: '#3D5467' }}>
                    The Food
                  </h3>
                  <p className="leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    Bandeja paisa after hard rides. Fresh trout from mountain streams. Colombian coffee that 
                    redefines what you thought you knew. Every meal connects you deeper to the region.
                  </p>
                  <p className="text-sm italic" style={{ color: '#6B7280' }}>
                    Maximum 12 riders means genuine connections form fast. Solo travelers welcome.
                  </p>
                </div>
                <div></div>
              </div>
              <div 
                className="hidden md:block absolute w-4 h-4 rounded-full" 
                style={{ 
                  backgroundColor: '#8B6F47',
                  right: '0',
                  top: '50%',
                  transform: 'translate(50%, -50%)',
                  left: '50%'
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 text-white" style={{ backgroundColor: '#3D5467' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Colombia?
            </h2>
            <p className="text-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Three departures in January-February 2025. Limited to 12 riders per tour. 
              $5,600 CAD includes accommodation, all meals, and guided tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                onClick={handleBookingClick}
                size="lg" 
                className="text-lg px-10 py-6 font-semibold shadow-xl"
                style={{ 
                  backgroundColor: '#F2C94C',
                  color: '#3D5467',
                  borderRadius: '2px'
                }}
              >
                View Dates & Book Your Spot
              </Button>
              <Button 
                onClick={handleGalleryClick}
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-6 font-semibold"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: 'white',
                  borderWidth: '2px',
                  color: 'white',
                  borderRadius: '2px'
                }}
              >
                See Photo Gallery
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#F2C94C' }}>200+</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Happy Riders</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#F2C94C' }}>4.9/5</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#F2C94C' }}>11</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Day Adventure</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
