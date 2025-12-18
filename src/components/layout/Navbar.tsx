import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Gallery", path: "/gallery" },
  { name: "Dates & Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll to top when navigating
  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        // FIXED: Always use solid background with proper contrast
        "bg-slate-800/95 backdrop-blur-md shadow-lg",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - UPDATED with Cycle Logic branding */}
        <button 
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img 
            src="/logo.png" 
            alt="Cycle Logic" 
            className="h-10 w-auto"
            onError={(e) => {
              // Fallback if logo image not found
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            Cycle Logic
          </span>
        </button>

        {/* Desktop Navigation - FIXED: White text always visible */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "text-amber-400 bg-white/10"
                    : "text-white hover:text-amber-400 hover:bg-white/10"
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Book Now Button - Desktop */}
        <button onClick={() => handleNavClick("/booking")} className="hidden md:block">
          <Button 
            variant="default" 
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white transition-all duration-300"
          >
            Book Now
          </Button>
        </button>

        {/* Mobile Menu Button - FIXED: Always white */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-white hover:text-amber-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-white/10"
          >
            <ul className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors",
                      location.pathname === item.path
                        ? "bg-amber-500/20 text-amber-400"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-2"
              >
                <button onClick={() => handleNavClick("/booking")} className="w-full">
                  <Button variant="default" size="lg" className="w-full bg-amber-500 hover:bg-amber-600">
                    Book Now
                  </Button>
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}