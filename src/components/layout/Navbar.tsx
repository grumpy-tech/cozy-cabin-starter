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
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "bg-[#606C38]/95 backdrop-blur-md shadow-md",
        isScrolled ? "py-2" : "py-3"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick("/")}
          className="flex items-center group cursor-pointer"
        >
          <img 
            src="/logo.png" 
            alt="Cycle Logic" 
            className="h-12 w-auto transition-transform group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "text-[#EE712B] bg-white/10"
                    : "text-white hover:text-[#EE712B] hover:bg-white/10"
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
            size="default"
            className="bg-[#DC4712] hover:bg-[#c33e10] text-white transition-all duration-300 rounded-none px-6 py-2 h-9 font-medium"
          >
            Book Now
          </Button>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-[#EE712B] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#606C38] border-t border-white/10"
          >
            <ul className="container mx-auto px-4 py-3 space-y-1">
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
                      "block w-full text-left px-3 py-2 text-sm font-medium transition-colors",
                      location.pathname === item.path
                        ? "bg-[#DC4712]/20 text-[#EE712B]"
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
                  <Button size="default" className="w-full bg-[#DC4712] hover:bg-[#c33e10] rounded-none h-9">
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
