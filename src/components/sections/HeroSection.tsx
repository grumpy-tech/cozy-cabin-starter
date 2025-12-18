import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Replace with actual tour photo */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-primary via-blue-600 to-amber-600" />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-amber-400 text-lg md:text-xl font-medium tracking-widest uppercase mb-4"
          >
            Cycle Logic Colombia Tours
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight"
          >
            Ride Where the Coffee Grows and the Andes Rise
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/90 text-xl md:text-2xl font-light mb-10 leading-relaxed"
          >
            Journey through Colombia's coffee heartland and Andes mountains on fully guided 
            road and gravel tours. More than exceptional riding—this is deep cultural immersion, 
            genuine connection, and the cycling adventure you didn't know you needed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/booking">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                View Tour Dates
              </Button>
            </Link>
            <Link to="/experience">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                Explore the Experience
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 text-white/70 text-sm"
          >
            January-February 2025 • 11 Days • $5,600 CAD • Limited to 12 Riders
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.div>

      {/* Note for implementation: Replace background with actual hero image */}
      <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold z-20">
        📸 Add hero image: Cyclist cresting Andes pass at golden hour
      </div>
    </section>
  );
}
