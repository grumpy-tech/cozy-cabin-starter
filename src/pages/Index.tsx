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

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* HERO SECTION - CHANGES: Removed blue box, brighter image, text with shadows only */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image - BRIGHTER (removed heavy overlay) */}
        <div className="absolute inset-0">
          <img 
            src="/hero-background.jpg" 
            alt="Cycling in Colombia" 
            className="w-full h-full object-cover brightness-110"
          />
          {/* LIGHTER gradient - was from-black/60, now from-black/30 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40" />
        </div>

        {/* Content - Right Side - NO BLUE BOX, just text with shadows */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block"></div>
            
            {/* REMOVED: bg-slate-900/80 backdrop-blur-md rounded-lg border classes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <p className="text-yellow-400 text-sm md:text-base font-semibold tracking-wide uppercase mb-3 drop-shadow-lg">
                Founded by Cycle Logic
              </p>
              
              <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl text-white font-bold mb-6 leading-tight drop-shadow-2xl">
                Colombia's Ultimate
                <br />
                <span className="text-yellow-400">Cycling Experience</span>
              </h1>
              
              <p className="text-white text-lg md:text-xl mb-8 leading-relaxed drop-shadow-xl">
                Legendary Andes climbs • Authentic culture • 
                Exceptional food • Mountain retreat accommodation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-end">
                <Button 
                  onClick={handleBookingClick}
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-lg px-8 py-6 font-semibold shadow-2xl"
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
                  className="bg-white/90 border-white text-gray-800 hover:bg-white text-lg px-8 py-6 font-semibold shadow-2xl"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-white text-sm justify-end drop-shadow-lg">
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

      {/* YOUR MOUNTAIN RETREAT - Keep exactly as V2 */}
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
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
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
                className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
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
                  <HomeIcon className="h-8 w-8 text-amber-500" />
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold">Surrounded by Nature</h3>
                </div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Nestled in the mountains outside Medellín, surrounded by coffee plantations and pine forests. 
                  This peaceful retreat is where you'll recover after challenging rides, watch sunsets over the Andes, 
                  and build friendships with fellow riders.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Stunning mountain views from your room</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Fresh mountain air and peaceful surroundings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Perfect base for exploring the coffee region</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR DAYS LOOK LIKE - Keep as V2 */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              What Your Days Look Like
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every day balances world-class riding with authentic cultural immersion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mountain className="h-12 w-12 text-amber-500 mb-6" />
              <h3 className="font-heading text-2xl font-semibold mb-4">The Riding</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                60-100km daily with 1,000-2,000m of climbing through the Andes and coffee country. 
                Roads where pro teams train—challenging, stunning, fully supported.
              </p>
              <p className="text-sm text-slate-600 italic">
                Intermediate to advanced. Road or gravel bikes. Full vehicle support follows every ride.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Coffee className="h-12 w-12 text-amber-500 mb-6" />
              <h3 className="font-heading text-2xl font-semibold mb-4">The Culture</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Coffee farm visits with families who've been growing for generations. Market explorations. 
                Traditional meals in home kitchens. You're not observing—you're participating.
              </p>
              <p className="text-sm text-slate-600 italic">
                Our guides introduce you as friends. The connections last beyond the tour.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Users className="h-12 w-12 text-amber-500 mb-6" />
              <h3 className="font-heading text-2xl font-semibold mb-4">The Food</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Bandeja paisa after hard rides. Fresh trout from mountain streams. Colombian coffee that 
                redefines what you thought you knew. Every meal connects you deeper to the region.
              </p>
              <p className="text-sm text-slate-600 italic">
                Maximum 12 riders means genuine connections form fast. Solo travelers always welcome.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
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
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6"
              >
                View Dates & Book Your Spot
              </Button>
              <Button 
                onClick={() => {
                  navigate('/gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                See Photo Gallery
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="border-t border-white/20 pt-4">
                <div className="text-3xl font-bold text-amber-400 mb-1">200+</div>
                <div className="text-sm text-white/70">Happy Riders</div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="text-3xl font-bold text-amber-400 mb-1">4.9/5</div>
                <div className="text-sm text-white/70">Average Rating</div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="text-3xl font-bold text-amber-400 mb-1">11</div>
                <div className="text-sm text-white/70">Day Adventure</div>
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