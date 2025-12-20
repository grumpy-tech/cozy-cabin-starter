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
        "bg-white/95 backdrop-blur-md",
        isScrolled ? "shadow-md py-3" : "shadow-sm py-4"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Text - UPPERCASE */}
        <button 
          onClick={() => handleNavClick("/")}
          className="flex items-center group cursor-pointer"
        >
          <h1 className="font-heading text-2xl md:text-3xl font-extrabold text-[#606C38] uppercase hover:text-[#DC4712] transition-colors duration-300">
            PedalTheWorld
          </h1>
        </button>

        {/* Desktop Navigation - RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={cn(
                    "relative px-1 py-2 text-sm font-medium transition-all duration-300",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC4712] after:transition-all after:duration-300",
                    "hover:after:w-full",
                    location.pathname === item.path
                      ? "text-[#DC4712] after:w-full"
                      : "text-slate-700 hover:text-[#DC4712]"
                  )}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Book Now Button */}
          <button onClick={() => handleNavClick("/booking")}>
            <div className="group relative overflow-hidden bg-[#DC4712] px-6 py-2.5 transition-all duration-300 hover:bg-[#c33e10]">
              <span className="relative z-10 text-sm font-semibold text-white">
                Book Now
              </span>
              <div className="absolute inset-0 -translate-x-full bg-[#EE712B] transition-transform duration-300 group-hover:translate-x-0"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-[#DC4712] transition-colors"
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
            className="md:hidden bg-white border-t border-slate-200"
          >
            <ul className="container mx-auto px-6 py-4 space-y-2">
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
                      "block w-full text-left px-4 py-3 text-sm font-medium transition-colors",
                      location.pathname === item.path
                        ? "bg-[#FBF7F7] text-[#DC4712] border-l-4 border-[#DC4712]"
                        : "text-slate-700 hover:bg-slate-50"
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
                  <div className="bg-[#DC4712] hover:bg-[#c33e10] text-white text-sm font-semibold px-4 py-3 text-center transition-colors">
                    Book Now
                  </div>
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
