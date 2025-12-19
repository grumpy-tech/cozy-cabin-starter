import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mountain, Coffee, Users, Home as HomeIcon, Check, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* HERO SECTION - Brighter image, no blue box, text with shadow */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image - BRIGHTER */}
        <div className="absolute inset-0">
          <img 
            src="/hero-background.jpg" 
            alt="Cycling in Colombia" 
            className="w-full h-full object-cover brightness-110"
          />
          {/* LIGHTER gradient for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40" />
        </div>

        {/* Content - Right Side - NO BLUE BOX */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block"></div>
            
            {/* Text Content - Just text with shadows, no background box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <p className="text-[#F2C94C] text-sm md:text-base font-semibold tracking-wide uppercase mb-3 drop-shadow-lg">
                Founded by Cycle Logic
              </p>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-6 leading-tight drop-shadow-2xl">
                Colombia's Ultimate
                <br />
                <span className="text-[#F2C94C]">Cycling Experience</span>
              </h1>
              
              <p className="text-white text-lg md:text-xl mb-8 leading-relaxed drop-shadow-xl">
                Legendary Andes climbs • Authentic culture • 
                Exceptional food • Mountain retreat accommodation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-end">
                <Button 
                  onClick={handleBookingClick}
                  size="lg" 
                  className="bg-[#F2C94C] hover:bg-[#E5BC3F] text-[#3D5467] text-lg px-8 py-6 font-semibold shadow-2xl border-0"
                  style={{ borderRadius: '2px' }}
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
                  className="bg-white/90 border-white text-[#3D5467] hover:bg-white text-lg px-8 py-6 font-semibold shadow-2xl"
                  style={{ borderRadius: '2px' }}
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

      {/* YOUR MOUNTAIN RETREAT - Sharp corners, new colors */}
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
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[#3D5467]">
                Your Mountain Retreat
              </h2>
              <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                Where you'll return after epic rides to rest, recover, and share stories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Property Photo - NO ROUNDED CORNERS */}
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
              
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <HomeIcon className="h-8 w-8 text-[#8B6F47]" />
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#3D5467]">Surrounded by Nature</h3>
                </div>
                <p className="text-lg text-[#4B5563] mb-6 leading-relaxed">
                  Nestled in the mountains outside Medellín, surrounded by coffee plantations and pine forests. 
                  This peaceful retreat is where you'll recover after challenging rides, watch sunsets over the Andes, 
                  and build friendships with fellow riders.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <span className="text-[#4B5563]">Stunning mountain views from your room</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <span className="text-[#4B5563]">Fresh mountain air and peaceful surroundings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#8B6F47] flex-shrink-0 mt-1" />
                    <span className="text-[#4B5563]">Perfect base for exploring the coffee region</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR DAYS LOOK LIKE - STAGGERED WITH ROUTE MAP LINE */}
      <section className="py-24 md:py-32 bg-[#F5F5F5] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[#3D5467]">
              What Your Days Look Like
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Every day balances world-class riding with authentic cultural immersion
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Dotted connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#8B6F47]/30 hidden md:block" 
                 style={{ transform: 'translateX(-50%)' }}
            />

            {/* Card 1: The Riding - LEFT with Route Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20 md:mb-32 relative"
            >
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="bg-white p-8 shadow-lg relative z-10 border-l-4 border-[#8B6F47]">
                  <Mountain className="h-12 w-12 text-[#8B6F47] mb-6" />
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-[#3D5467]">The Riding</h3>
                  <p className="text-[#4B5563] leading-relaxed mb-4">
                    60-100km daily with 1,000-2,000m of climbing through the Andes and coffee country. 
                    Roads where pro teams train—challenging, stunning, fully supported.
                  </p>
                  <p className="text-sm text-[#6B7280] italic">
                    Intermediate to advanced. Road or gravel bikes. Full vehicle support.
                  </p>
                </div>
                {/* Route elevation chart */}
                <div className="mt-8 md:mt-0">
                  <img 
                    src="/route-chart.png" 
                    alt="Route elevation profile" 
                    className="w-full h-auto shadow-md"
                  />
                  <p className="text-xs text-[#6B7280] mt-2 text-center italic">Sample route profile showing climbs and descents</p>
                </div>
              </div>
              {/* Connection dot */}
              <div className="hidden md:block absolute right-0 top-1/2 w-4 h-4 bg-[#8B6F47] rounded-full" 
                   style={{ transform: 'translate(50%, -50%)', left: '50%' }}
              />
            </motion.div>

            {/* Card 2: The Culture - RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20 md:mb-32 relative"
            >
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="order-2 md:order-1"></div>
                <div className="bg-white p-8 shadow-lg relative z-10 order-1 md:order-2 border-r-4 border-[#8B6F47]">
                  <Coffee className="h-12 w-12 text-[#8B6F47] mb-6" />
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-[#3D5467]">The Culture</h3>
                  <p className="text-[#4B5563] leading-relaxed mb-4">
                    Coffee farm visits with families who've been growing for generations. Market explorations. 
                    Traditional meals in home kitchens. You're not observing—you're participating.
                  </p>
                  <p className="text-sm text-[#6B7280] italic">
                    Our guides introduce you as friends. The connections last beyond the tour.
                  </p>
                </div>
              </div>
              {/* Connection dot */}
              <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-[#8B6F47] rounded-full" 
                   style={{ transform: 'translate(-50%, -50%)' }}
              />
            </motion.div>

            {/* Card 3: The Food - LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="bg-white p-8 shadow-lg relative z-10 border-l-4 border-[#8B6F47]">
                  <Users className="h-12 w-12 text-[#8B6F47] mb-6" />
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-[#3D5467]">The Food</h3>
                  <p className="text-[#4B5563] leading-relaxed mb-4">
                    Bandeja paisa after hard rides. Fresh trout from mountain streams. Colombian coffee that 
                    redefines what you thought you knew. Every meal connects you deeper to the region.
                  </p>
                  <p className="text-sm text-[#6B7280] italic">
                    Maximum 12 riders means genuine connections form fast. Solo travelers welcome.
                  </p>
                </div>
                <div></div>
              </div>
              {/* Connection dot */}
              <div className="hidden md:block absolute right-0 top-1/2 w-4 h-4 bg-[#8B6F47] rounded-full" 
                   style={{ transform: 'translate(50%, -50%)', left: '50%' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - New color scheme */}
      <section className="py-24 md:py-32 bg-[#3D5467] text-white">
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
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Three departures in January-February 2025. Limited to 12 riders per tour. 
              $5,600 CAD includes accommodation, all meals, and guided tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                onClick={handleBookingClick}
                size="lg" 
                className="bg-[#F2C94C] hover:bg-[#E5BC3F] text-[#3D5467] text-lg px-10 py-6 font-semibold shadow-xl"
                style={{ borderRadius: '2px' }}
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
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 font-semibold"
                style={{ borderRadius: '2px' }}
              >
                See Photo Gallery
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/20 pt-12">
              <div>
                <div className="text-4xl font-bold text-[#F2C94C] mb-2">200+</div>
                <div className="text-sm text-white/70">Happy Riders</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F2C94C] mb-2">4.9/5</div>
                <div className="text-sm text-white/70">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F2C94C] mb-2">11</div>
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
