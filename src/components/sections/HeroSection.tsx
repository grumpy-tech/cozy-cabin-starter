import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cycling image */}
      <div className="absolute inset-0">
        {/* Replace with actual hero cycling image */}
        <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-amber-600" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
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
            className="text-amber-400 text-base md:text-lg font-semibold tracking-wide uppercase mb-3"
          >
            Founded by Cycle Logic
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight"
          >
            Colombia's Ultimate
            <br />
            <span className="text-amber-400">Cycling Adventure</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/90 text-xl md:text-2xl font-light mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Legendary Andes climbs • Coffee country gravel • Authentic culture • 
            Exceptional food • Small groups • Professional support
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/experience">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
              >
                Explore the Experience
              </Button>
            </Link>
            <Link to="/booking">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                View Tour Dates
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-white/80 text-sm"
          >
            <span>11 Days</span>
            <span>•</span>
            <span>$5,600 CAD</span>
            <span>•</span>
            <span>Max 12 Riders</span>
            <span>•</span>
            <span>Jan-Feb 2025</span>
          </motion.div>
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
    </section>
  );
}