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

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "bg-[#134686]/95 backdrop-blur-md shadow-lg",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - NO TEXT, just image */}
        <button 
          onClick={() => handleNavClick("/")}
          className="flex items-center group cursor-pointer"
        >
          <img 
            src="/logo.png" 
            alt="Cycle Logic" 
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "text-[#FEB21A] bg-white/10"
                    : "text-white hover:text-[#FEB21A] hover:bg-white/10"
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <button onClick={() => handleNavClick("/booking")} className="hidden md:block">
          <Button 
            variant="default" 
            size="lg"
            className="bg-[#ED3F27] hover:bg-[#d63620] text-white transition-all duration-300 rounded-none"
          >
            Book Now
          </Button>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-[#FEB21A] transition-colors"
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
            className="md:hidden bg-[#134686] border-t border-white/10"
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
                      "block w-full text-left px-4 py-3 text-base font-medium transition-colors",
                      location.pathname === item.path
                        ? "bg-[#ED3F27]/20 text-[#FEB21A]"
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
                  <Button variant="default" size="lg" className="w-full bg-[#ED3F27] hover:bg-[#d63620] rounded-none">
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
